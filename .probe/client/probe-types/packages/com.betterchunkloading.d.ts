declare module "packages/com/betterchunkloading/chunk/$IPlayerDataPlayer" {
import {$PlayerChunkData, $PlayerChunkData$Type} from "packages/com/betterchunkloading/chunk/$PlayerChunkData"

export interface $IPlayerDataPlayer {

 "betterchunkloading$getPlayerChunkData"(): $PlayerChunkData

(): $PlayerChunkData
}

export namespace $IPlayerDataPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerDataPlayer$Type = ($IPlayerDataPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerDataPlayer_ = $IPlayerDataPlayer$Type;
}}
declare module "packages/com/betterchunkloading/chunk/$PlayerChunkData" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $PlayerChunkData {
 "isFrozen": boolean

constructor()

public "onChunkChanged"(arg0: $ServerPlayer$Type): void
public "onLogout"(arg0: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChunkData$Type = ($PlayerChunkData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerChunkData_ = $PlayerChunkData$Type;
}}
