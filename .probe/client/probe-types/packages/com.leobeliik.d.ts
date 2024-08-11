declare module "packages/com/leobeliik/extremesoundmuffler/interfaces/$ISoundLists" {
import {$Anchor, $Anchor$Type} from "packages/com/leobeliik/extremesoundmuffler/utils/$Anchor"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ISoundLists {

}

export namespace $ISoundLists {
const forbiddenSounds: $Set<(string)>
const soundsList: $List<($ResourceLocation)>
const recentSoundsList: $List<($ResourceLocation)>
const muffledSounds: $Map<($ResourceLocation), (double)>
const anchorList: $List<($Anchor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundLists$Type = ($ISoundLists);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundLists_ = $ISoundLists$Type;
}}
declare module "packages/com/leobeliik/extremesoundmuffler/utils/$Anchor" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Anchor {

constructor(arg0: integer, arg1: string)
constructor(arg0: integer, arg1: string, arg2: $BlockPos$Type, arg3: $ResourceLocation$Type, arg4: integer, arg5: $SortedMap$Type<(string), (double)>)

public "getY"(): string
public "getName"(): string
public "getDimension"(): $ResourceLocation
public "getMuffledSounds"(): $SortedMap<($ResourceLocation), (double)>
public "editAnchor"(arg0: string, arg1: integer): void
public "getAnchorId"(): integer
public "removeSound"(arg0: $ResourceLocation$Type): void
public "replaceSound"(arg0: $ResourceLocation$Type, arg1: double): void
public "getAnchorPos"(): $BlockPos
public "deleteAnchor"(): void
public "addSound"(arg0: $ResourceLocation$Type, arg1: double): void
public "setMuffledSounds"(arg0: $SortedMap$Type<($ResourceLocation$Type), (double)>): void
public "setAnchor"(): void
public static "getAnchor"(arg0: $SoundInstance$Type): $Anchor
public "getZ"(): string
public "getRadius"(): integer
public "getX"(): string
public "setRadius"(arg0: integer): void
get "y"(): string
get "name"(): string
get "dimension"(): $ResourceLocation
get "muffledSounds"(): $SortedMap<($ResourceLocation), (double)>
get "anchorId"(): integer
get "anchorPos"(): $BlockPos
set "muffledSounds"(value: $SortedMap$Type<($ResourceLocation$Type), (double)>)
get "z"(): string
get "radius"(): integer
get "x"(): string
set "radius"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Anchor$Type = ($Anchor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Anchor_ = $Anchor$Type;
}}
