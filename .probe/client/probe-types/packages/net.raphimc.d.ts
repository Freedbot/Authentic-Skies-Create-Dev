declare module "packages/net/raphimc/immediatelyfast/injection/interfaces/$IBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBuilder {

 "immediatelyFast$isReleased"(): boolean
 "immediatelyFast$release"(): void
}

export namespace $IBufferBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBuilder$Type = ($IBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBufferBuilder_ = $IBufferBuilder$Type;
}}
declare module "packages/net/raphimc/immediatelyfast/injection/interfaces/$IMapRenderer" {
import {$MapAtlasTexture, $MapAtlasTexture$Type} from "packages/net/raphimc/immediatelyfast/feature/map_atlas_generation/$MapAtlasTexture"

export interface $IMapRenderer {

 "immediatelyFast$getMapAtlasTexture"(arg0: integer): $MapAtlasTexture
 "immediatelyFast$getAtlasMapping"(arg0: integer): integer
}

export namespace $IMapRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapRenderer$Type = ($IMapRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapRenderer_ = $IMapRenderer$Type;
}}
declare module "packages/net/raphimc/immediatelyfast/feature/map_atlas_generation/$MapAtlasTexture" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DynamicTexture, $DynamicTexture$Type} from "packages/net/minecraft/client/renderer/texture/$DynamicTexture"

export class $MapAtlasTexture implements $AutoCloseable {
static readonly "ATLAS_SIZE": integer
static readonly "MAP_SIZE": integer
static readonly "MAPS_PER_ATLAS": integer

constructor(id: integer)

public "getIdentifier"(): $ResourceLocation
public "getId"(): integer
public "close"(): void
public "getTexture"(): $DynamicTexture
public "getNextMapLocation"(): integer
get "identifier"(): $ResourceLocation
get "id"(): integer
get "texture"(): $DynamicTexture
get "nextMapLocation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasTexture$Type = ($MapAtlasTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapAtlasTexture_ = $MapAtlasTexture$Type;
}}
