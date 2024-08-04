#!/usr/bin/env python3

import fnmatch
import json
import pathlib
import zipfile
import sys
import toml

# Zip file pack name.
PACKNAME = 'AuthenticSkiesCreate'
# Patterns relative to up one directory.
# Use /**/* at the end of folder names to capture all contents.
INCLUDE = [
    'overrides/**/*',
    'Changelog.md',
    'Instructions.md',
    'modlist.html'
]
# Patterns to skip.
EXCLUDE = [
    '**/*.bak',
    'overrides/kubejs/probe*',
    'overrides/kubejs/jsconfig.json'
]
# .Server/ is packed unfiltered as the zip root.
# Base project folder INCLUDES and overrides folder contents are done seperately because of path differences.
SERVER_INCLUDE = [
    'Changelog.md',
]
SERVER_OVERRIDES_INCLUDE = [
    'config/**/*',
    'defaultconfigs/**/*',
    # 'kubejs/config/**/*', # covered by the other config include
    'kubejs/data/**/*',
    'kubejs/server_scripts/**/*',
    'kubejs/startup_scripts/**/*',
]
# Besides the normal excludes, all client side content is removed
# Client mods are omitted from .Server/mods and noted in .Client Only Mods.txt
SERVER_OVERRIDES_EXCLUDE = [
    '**/*.bak',
    'config/defaultoptions*',
    'config/defaultworldtype*',
    'config/fancymenu*',
    'config/betterf3.toml',
    'config/botania-client.toml',
    'config/configured-client.toml',
    'config/darkmodeeverywhere-client.toml',
    'config/darkmodeeverywhereshaders.json',
    'config/defaultoptions-common.toml',
    'config/lightoverlay.properties',
    'config/sophisticatedstorage-client.toml'
]

def write_version_to_toml(config_path: pathlib.Path, option: str, category: str = ''):
    # Load a TOML file
    with open(config_path, 'r') as f:
        config = toml.load(f)
    if category == '':
        config[option] = version
    else:
        config[category][option] = version
    with open(config_path, 'w') as f:
        toml.dump(config, f)
# Reading is not needed or implimented for fancymenu's json variable.
def write_version_to_json(config_path: pathlib.Path, option: str):
    config = {option : version}
    with open(config_path, 'w') as f:
        json.dump(config, f)

def generate_manifest(template_path: pathlib.Path, mods_path: pathlib.Path,
                      version: str):
    '''Generates the manifest.json from the template manifest and mods/.index
    directory.  Note that this does NOT include resource packs, so include
    those manually in the template as if they were mods.'''
    with open(template_path) as f:
        manifest = json.load(f)
    manifest['version'] = version
    mod_ids = []
    mod_ids.extend(manifest['files'])
    for f in mods_path.glob('*.toml'):
        with open(f, 'r', encoding='utf8') as f_:
            data = toml.loads(f_.read())
        mod_ids.append({
            'fileID': data['update']['curseforge']['file-id'],
            'projectID': data['update']['curseforge']['project-id'],
            'required': True
        })
    manifest['files'] = mod_ids
    return manifest

# Execute
if __name__ == '__main__':
    # Working folder is one up from the script.
    PACK_DIR = pathlib.Path(__file__).parent.parent.absolute()
    # Get the version from args.
    if len(sys.argv) == 2:
        version = sys.argv[1]

    # Write version to config files Better Compatibility Checker and a json parsed by Pack Menu
    write_version_to_toml(PACK_DIR / 'overrides/config/bcc-common.toml', 'modpackVersion', 'general')
    write_version_to_json(PACK_DIR / 'overrides/config/fancymenu/packversion.json', 'version')

    # Zip all necessary directories for the modpack client.
    named_pack_zip = f'{PACKNAME}{version}.zip'
    manifest = generate_manifest(PACK_DIR / 'manifest_template.json', PACK_DIR / '.index', version)

    with zipfile.ZipFile(PACK_DIR / '.Zipped' / named_pack_zip, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:

        # Generate manifest.json directly in the zip
        archive.writestr('manifest.json', json.dumps(manifest, indent=2))
        print('Generated manifest')

        # Zip dev folder respecting include and exclude patterns
        for packfiles in INCLUDE:
            for file_path in PACK_DIR.rglob(packfiles):
                if all(not fnmatch.fnmatch(file_path.relative_to(PACK_DIR), pattern) for pattern in EXCLUDE):
                    archive.write(file_path, arcname=file_path.relative_to(PACK_DIR))
                    print(f'zipped {file_path.relative_to(PACK_DIR)}')
    print(f'Finished writing client {named_pack_zip}')

    # Zip all necessary directories for the server pack.
    named_server_zip = f'{PACKNAME}Server{version}.zip'
    SERVER_DIR = PACK_DIR / 'server'
    OVERRIDES_DIR = PACK_DIR / 'overrides'

    with zipfile.ZipFile(PACK_DIR / '.Zipped' / named_server_zip, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:

        # Zip all of .Server
        for file_path in SERVER_DIR.rglob('*'):
            archive.write(file_path, arcname=file_path.relative_to(SERVER_DIR))
            print(f'zipped {file_path.relative_to(SERVER_DIR)}')

        # Zip dev folder to server respecting includes. No excludes yet.
        for packfiles in SERVER_INCLUDE:
            for file_path in PACK_DIR.rglob(packfiles):
                archive.write(file_path, arcname=file_path.relative_to(PACK_DIR))
                print(f'zipped {file_path.relative_to(PACK_DIR)}')

        # Zip overrides folder respecting include and exclude patterns
        for packfiles in SERVER_OVERRIDES_INCLUDE:
            for file_path in OVERRIDES_DIR.rglob(packfiles):
                if all(not fnmatch.fnmatch(file_path.relative_to(OVERRIDES_DIR), pattern) for pattern in SERVER_OVERRIDES_EXCLUDE):
                    archive.write(file_path, arcname=file_path.relative_to(OVERRIDES_DIR))
                    print(f'zipped {file_path.relative_to(OVERRIDES_DIR)}')
    print(f'Finished writing server {named_server_zip}')