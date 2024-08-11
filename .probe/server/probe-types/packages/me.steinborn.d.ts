declare module "packages/me/steinborn/krypton/mod/shared/network/$ClientConnectionEncryptionExtension" {
import {$SecretKey, $SecretKey$Type} from "packages/javax/crypto/$SecretKey"

export interface $ClientConnectionEncryptionExtension {

 "setupEncryption"(arg0: $SecretKey$Type): void

(arg0: $SecretKey$Type): void
}

export namespace $ClientConnectionEncryptionExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConnectionEncryptionExtension$Type = ($ClientConnectionEncryptionExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientConnectionEncryptionExtension_ = $ClientConnectionEncryptionExtension$Type;
}}
declare module "packages/me/steinborn/krypton/mod/shared/player/$KryptonServerPlayerEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KryptonServerPlayerEntity {

 "getNeedsChunksReloaded"(): boolean
 "setNeedsChunksReloaded"(arg0: boolean): void
 "getPlayerViewDistance"(): integer
}

export namespace $KryptonServerPlayerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KryptonServerPlayerEntity$Type = ($KryptonServerPlayerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KryptonServerPlayerEntity_ = $KryptonServerPlayerEntity$Type;
}}
declare module "packages/me/steinborn/krypton/mixin/shared/fastchunkentityaccess/$EntityTrackingSectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$Type} from "packages/net/minecraft/util/$ClassInstanceMultiMap"

export interface $EntityTrackingSectionAccessor<T> {

 "getCollection"(): $ClassInstanceMultiMap<(T)>

(): $ClassInstanceMultiMap<(T)>
}

export namespace $EntityTrackingSectionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackingSectionAccessor$Type<T> = ($EntityTrackingSectionAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTrackingSectionAccessor_<T> = $EntityTrackingSectionAccessor$Type<(T)>;
}}
declare module "packages/me/steinborn/krypton/mod/shared/network/$ConfigurableAutoFlush" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigurableAutoFlush {

 "setShouldAutoFlush"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ConfigurableAutoFlush {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableAutoFlush$Type = ($ConfigurableAutoFlush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableAutoFlush_ = $ConfigurableAutoFlush$Type;
}}
declare module "packages/me/steinborn/krypton/mod/shared/$WorldEntityByChunkAccess" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $WorldEntityByChunkAccess {

 "getEntitiesInChunk"(arg0: integer, arg1: integer): $Collection<($Entity)>

(arg0: integer, arg1: integer): $Collection<($Entity)>
}

export namespace $WorldEntityByChunkAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEntityByChunkAccess$Type = ($WorldEntityByChunkAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEntityByChunkAccess_ = $WorldEntityByChunkAccess$Type;
}}
declare module "packages/me/steinborn/krypton/mixin/shared/network/util/$ServerPlayNetworkHandlerAccessor" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"

export interface $ServerPlayNetworkHandlerAccessor {

 "getConnection"(): $Connection

(): $Connection
}

export namespace $ServerPlayNetworkHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayNetworkHandlerAccessor$Type = ($ServerPlayNetworkHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayNetworkHandlerAccessor_ = $ServerPlayNetworkHandlerAccessor$Type;
}}
