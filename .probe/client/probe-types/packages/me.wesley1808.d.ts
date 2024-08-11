declare module "packages/me/wesley1808/servercore/common/interfaces/chunk/$IServerChunkCache" {
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"

export interface $IServerChunkCache {

 "servercore$requiresBroadcast"(arg0: $ChunkHolder$Type): void

(arg0: $ChunkHolder$Type): void
}

export namespace $IServerChunkCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerChunkCache$Type = ($IServerChunkCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerChunkCache_ = $IServerChunkCache$Type;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/$IMinecraftServer" {
import {$Statistics, $Statistics$Type} from "packages/me/wesley1808/servercore/common/utils/statistics/$Statistics"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$DynamicManager, $DynamicManager$Type} from "packages/me/wesley1808/servercore/common/dynamic/$DynamicManager"

export interface $IMinecraftServer {

 "servercore$onStarted"(arg0: $MinecraftServer$Type): void
 "servercore$getDynamicManager"(): $DynamicManager
 "servercore$getStatistics"(): $Statistics
}

export namespace $IMinecraftServer {
function onStarted(server: $MinecraftServer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftServer$Type = ($IMinecraftServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecraftServer_ = $IMinecraftServer$Type;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/chunk/$IServerLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IServerLevel {

 "servercore$resetIceAndSnowTick"(): void

(): void
}

export namespace $IServerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerLevel$Type = ($IServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerLevel_ = $IServerLevel$Type;
}}
declare module "packages/me/wesley1808/servercore/common/utils/statistics/entry/$StatisticEntry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export class $StatisticEntry<T> implements $Comparable<($StatisticEntry<(T)>)> {

constructor()

public "compareTo"(other: $StatisticEntry$Type<(T)>): integer
public "increment"(value: T): void
public "formatValue"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatisticEntry$Type<T> = ($StatisticEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatisticEntry_<T> = $StatisticEntry$Type<(T)>;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/activation_range/$Inactive" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Inactive {

 "servercore$inactiveTick"(): void
}

export namespace $Inactive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Inactive$Type = ($Inactive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Inactive_ = $Inactive$Type;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/chunk/$ILevelChunk" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export interface $ILevelChunk {

 "servercore$shouldDoLightning"(arg0: $RandomSource$Type, arg1: integer): integer

(arg0: $RandomSource$Type, arg1: integer): integer
}

export namespace $ILevelChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelChunk$Type = ($ILevelChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelChunk_ = $ILevelChunk$Type;
}}
declare module "packages/me/wesley1808/servercore/common/config/data/activation_range/$ActivationType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ActivationType {

 "extraHeightDown"(): boolean
 "wakeupInterval"(): integer
 "tickInterval"(): integer
 "extraHeightUp"(): boolean
 "activationRange"(): integer
}

export namespace $ActivationType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActivationType$Type = ($ActivationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActivationType_ = $ActivationType$Type;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/activation_range/$ActivationEntity" {
import {$ActivationType, $ActivationType$Type} from "packages/me/wesley1808/servercore/common/config/data/activation_range/$ActivationType"

export interface $ActivationEntity {

 "servercore$getFullTickCount"(): integer
 "servercore$isExcluded"(): boolean
 "servercore$incFullTickCount"(): void
 "servercore$getActivationType"(): $ActivationType
 "servercore$getActivatedTick"(): integer
 "servercore$setInactive"(arg0: boolean): void
 "servercore$setActivatedTick"(arg0: integer): void
 "servercore$isInactive"(): boolean
 "servercore$getActivatedImmunityTick"(): integer
 "servercore$setActivatedImmunityTick"(arg0: integer): void
}

export namespace $ActivationEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActivationEntity$Type = ($ActivationEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActivationEntity_ = $ActivationEntity$Type;
}}
declare module "packages/me/wesley1808/servercore/common/utils/statistics/$Statistics" {
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$StatisticEntry, $StatisticEntry$Type} from "packages/me/wesley1808/servercore/common/utils/statistics/entry/$StatisticEntry"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Statistics {

constructor(server: $MinecraftServer$Type)

public static "getInstance"(server: $MinecraftServer$Type): $Statistics
public "getAllEntities"(): $List<($Entity)>
public "getEntitiesByType"(entities: $Iterable$Type<($Entity$Type)>): $Map<(string), ($StatisticEntry<($Entity)>)>
public "getEntitiesNear"(player: $ServerPlayer$Type): $List<($Entity)>
public "getChunkCount"(onlyLoaded: boolean): integer
public "getBlockEntitiesByPlayer"(players: $Iterable$Type<($ServerPlayer$Type)>): $Map<(string), ($StatisticEntry<($TickingBlockEntity)>)>
public "getEntitiesByPlayer"(players: $Iterable$Type<($ServerPlayer$Type)>): $Map<(string), ($StatisticEntry<($Entity)>)>
public "getAllBlockEntities"(): $List<($TickingBlockEntity)>
public "getBlockEntitiesNear"(player: $ServerPlayer$Type): $List<($TickingBlockEntity)>
public "getBlockEntitiesByType"(blockEntities: $Iterable$Type<($TickingBlockEntity$Type)>): $Map<(string), ($StatisticEntry<($TickingBlockEntity)>)>
get "allEntities"(): $List<($Entity)>
get "allBlockEntities"(): $List<($TickingBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Statistics$Type = ($Statistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Statistics_ = $Statistics$Type;
}}
declare module "packages/me/wesley1808/servercore/common/interfaces/$IMobCategory" {
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"

export interface $IMobCategory {

 "servercore$modifyCapacity"(arg0: double): void
 "servercore$modifySpawningConfig"(arg0: integer, arg1: integer): void
 "servercore$getOriginalCapacity"(): integer
 "servercore$getSpawnInterval"(): integer
}

export namespace $IMobCategory {
function of(category: $MobCategory$Type): $IMobCategory
function reload(): void
function getSpawnInterval(category: $MobCategory$Type): integer
function modifyCapacity(category: $MobCategory$Type, modifier: double): void
function getOriginalCapacity(category: $MobCategory$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobCategory$Type = ($IMobCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobCategory_ = $IMobCategory$Type;
}}
declare module "packages/me/wesley1808/servercore/common/dynamic/$DynamicManager" {
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $DynamicManager {

constructor(server: $MinecraftServer$Type)

public static "update"(server: $MinecraftServer$Type): void
public static "getInstance"(server: $MinecraftServer$Type): $DynamicManager
public "modifySimulationDistance"(distance: integer): void
public static "modifyMobcaps"(percentage: integer): void
public "modifyViewDistance"(distance: integer): void
public "getAverageTickTime"(): double
get "averageTickTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicManager$Type = ($DynamicManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicManager_ = $DynamicManager$Type;
}}
