declare module "packages/ca/spottedleaf/starlight/common/light/$SWMRNibbleArray" {
import {$SWMRNibbleArray$SaveState, $SWMRNibbleArray$SaveState$Type} from "packages/ca/spottedleaf/starlight/common/light/$SWMRNibbleArray$SaveState"
import {$DataLayer, $DataLayer$Type} from "packages/net/minecraft/world/level/chunk/$DataLayer"

export class $SWMRNibbleArray {
static readonly "ARRAY_SIZE": integer

constructor(arg0: (byte)[])
constructor(arg0: (byte)[], arg1: boolean)
constructor(arg0: (byte)[], arg1: integer)
constructor()

public "toString"(): string
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: integer, arg1: integer): void
public "isDirty"(): boolean
public static "fromVanilla"(arg0: $DataLayer$Type): $SWMRNibbleArray
public "setHidden"(): void
public "setZero"(): void
public "isInitialisedUpdating"(): boolean
public "isInitialisedVisible"(): boolean
public "isNullNibbleUpdating"(): boolean
public "isUninitialisedVisible"(): boolean
public "isUninitialisedUpdating"(): boolean
public "toVanillaNibble"(): $DataLayer
public "getVisible"(arg0: integer, arg1: integer, arg2: integer): integer
public "getVisible"(arg0: integer): integer
public "isNullNibbleVisible"(): boolean
public "updateVisible"(): boolean
public "getUpdating"(arg0: integer, arg1: integer, arg2: integer): integer
public "getUpdating"(arg0: integer): integer
public "getSaveState"(): $SWMRNibbleArray$SaveState
public "setUninitialised"(): void
public "extrudeLower"(arg0: $SWMRNibbleArray$Type): void
public "setNull"(): void
public "isHiddenUpdating"(): boolean
public "isHiddenVisible"(): boolean
public "setNonNull"(): void
public "setFull"(): void
get "dirty"(): boolean
get "initialisedUpdating"(): boolean
get "initialisedVisible"(): boolean
get "nullNibbleUpdating"(): boolean
get "uninitialisedVisible"(): boolean
get "uninitialisedUpdating"(): boolean
get "nullNibbleVisible"(): boolean
get "saveState"(): $SWMRNibbleArray$SaveState
get "hiddenUpdating"(): boolean
get "hiddenVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SWMRNibbleArray$Type = ($SWMRNibbleArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SWMRNibbleArray_ = $SWMRNibbleArray$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/light/$SWMRNibbleArray$SaveState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SWMRNibbleArray$SaveState {
readonly "data": (byte)[]
readonly "state": integer

constructor(arg0: (byte)[], arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SWMRNibbleArray$SaveState$Type = ($SWMRNibbleArray$SaveState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SWMRNibbleArray$SaveState_ = $SWMRNibbleArray$SaveState$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/light/$StarLightLightingProvider" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$StarLightInterface, $StarLightInterface$Type} from "packages/ca/spottedleaf/starlight/common/light/$StarLightInterface"
import {$DataLayer, $DataLayer$Type} from "packages/net/minecraft/world/level/chunk/$DataLayer"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"

export interface $StarLightLightingProvider {

 "getLightEngine"(): $StarLightInterface
 "clientChunkLoad"(arg0: $ChunkPos$Type, arg1: $LevelChunk$Type): void
 "clientUpdateLight"(arg0: $LightLayer$Type, arg1: $SectionPos$Type, arg2: $DataLayer$Type, arg3: boolean): void
 "clientRemoveLightData"(arg0: $ChunkPos$Type): void
}

export namespace $StarLightLightingProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarLightLightingProvider$Type = ($StarLightLightingProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarLightLightingProvider_ = $StarLightLightingProvider$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/light/$StarLightInterface" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LayerLightEventListener, $LayerLightEventListener$Type} from "packages/net/minecraft/world/level/lighting/$LayerLightEventListener"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$TicketType, $TicketType$Type} from "packages/net/minecraft/server/level/$TicketType"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$LightChunkGetter, $LightChunkGetter$Type} from "packages/net/minecraft/world/level/chunk/$LightChunkGetter"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ShortCollection, $ShortCollection$Type} from "packages/it/unimi/dsi/fastutil/shorts/$ShortCollection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StarLightInterface {
static readonly "CHUNK_WORK_TICKET": $TicketType<($ChunkPos)>
readonly "lightEngine": $LevelLightEngine

constructor(arg0: $LightChunkGetter$Type, arg1: boolean, arg2: boolean, arg3: $LevelLightEngine$Type)

public "sectionChange"(arg0: $SectionPos$Type, arg1: boolean): $CompletableFuture<(void)>
public "propagateChanges"(): void
public "blockChange"(arg0: $BlockPos$Type): $CompletableFuture<(void)>
public "hasSkyLight"(): boolean
public "hasUpdates"(): boolean
public "getBlockReader"(): $LayerLightEventListener
public "hasBlockLight"(): boolean
public "getSkyReader"(): $LayerLightEventListener
public "getAnyChunkNow"(arg0: integer, arg1: integer): $ChunkAccess
public "getLightAccess"(): $LightChunkGetter
public "getWorld"(): $Level
public "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
public "scheduleChunkLight"(arg0: $ChunkPos$Type, arg1: $Runnable$Type): void
public "checkChunkEdges"(arg0: integer, arg1: integer): void
public "forceLoadInChunk"(arg0: $ChunkAccess$Type, arg1: (boolean)[]): void
public "lightChunk"(arg0: $ChunkAccess$Type, arg1: (boolean)[]): void
public "relightChunks"(arg0: $Set$Type<($ChunkPos$Type)>, arg1: $Consumer$Type<($ChunkPos$Type)>, arg2: $IntConsumer$Type): void
public "loadInChunk"(arg0: integer, arg1: integer, arg2: (boolean)[]): void
public "checkSkyEdges"(arg0: integer, arg1: integer, arg2: $ShortCollection$Type): void
public "checkSkyEdges"(arg0: integer, arg1: integer): void
public "checkBlockEdges"(arg0: integer, arg1: integer): void
public "checkBlockEdges"(arg0: integer, arg1: integer, arg2: $ShortCollection$Type): void
public "removeChunkTasks"(arg0: $ChunkPos$Type): void
public "isClientSide"(): boolean
get "blockReader"(): $LayerLightEventListener
get "skyReader"(): $LayerLightEventListener
get "lightAccess"(): $LightChunkGetter
get "world"(): $Level
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarLightInterface$Type = ($StarLightInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarLightInterface_ = $StarLightInterface$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/world/$ExtendedWorld" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export interface $ExtendedWorld {

 "getChunkAtImmediately"(arg0: integer, arg1: integer): $LevelChunk
 "getAnyChunkImmediately"(arg0: integer, arg1: integer): $ChunkAccess
}

export namespace $ExtendedWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedWorld$Type = ($ExtendedWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedWorld_ = $ExtendedWorld$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/chunk/$ExtendedChunk" {
import {$SWMRNibbleArray, $SWMRNibbleArray$Type} from "packages/ca/spottedleaf/starlight/common/light/$SWMRNibbleArray"

export interface $ExtendedChunk {

 "getSkyNibbles"(): ($SWMRNibbleArray)[]
 "getBlockNibbles"(): ($SWMRNibbleArray)[]
 "setBlockNibbles"(arg0: ($SWMRNibbleArray$Type)[]): void
 "getSkyEmptinessMap"(): (boolean)[]
 "setSkyNibbles"(arg0: ($SWMRNibbleArray$Type)[]): void
 "setSkyEmptinessMap"(arg0: (boolean)[]): void
 "getBlockEmptinessMap"(): (boolean)[]
 "setBlockEmptinessMap"(arg0: (boolean)[]): void
}

export namespace $ExtendedChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunk$Type = ($ExtendedChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedChunk_ = $ExtendedChunk$Type;
}}
declare module "packages/ca/spottedleaf/starlight/common/blockstate/$ExtendedAbstractBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedAbstractBlockState {

 "isConditionallyFullOpaque"(): boolean
 "getOpacityIfCached"(): integer
}

export namespace $ExtendedAbstractBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedAbstractBlockState$Type = ($ExtendedAbstractBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedAbstractBlockState_ = $ExtendedAbstractBlockState$Type;
}}
