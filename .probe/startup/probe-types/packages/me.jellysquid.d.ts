declare module "packages/me/jellysquid/mods/lithium/api/inventory/$LithiumDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumDefaultedList {

 "changedInteractionConditions"(): void

(): void
}

export namespace $LithiumDefaultedList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumDefaultedList$Type = ($LithiumDefaultedList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumDefaultedList_ = $LithiumDefaultedList$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/$ClimbingMobCachingSection" {
import {$AbortableIterationConsumer$Continuation, $AbortableIterationConsumer$Continuation$Type} from "packages/net/minecraft/util/$AbortableIterationConsumer$Continuation"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EntityPushablePredicate, $EntityPushablePredicate$Type} from "packages/me/jellysquid/mods/lithium/common/entity/pushable/$EntityPushablePredicate"
import {$BlockCachingEntity, $BlockCachingEntity$Type} from "packages/me/jellysquid/mods/lithium/common/entity/pushable/$BlockCachingEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClimbingMobCachingSection {

 "collectPushableEntities"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $AABB$Type, arg3: $EntityPushablePredicate$Type<(any)>, arg4: $ArrayList$Type<($Entity$Type)>): $AbortableIterationConsumer$Continuation
 "onEntityModifiedCachedBlock"(arg0: $BlockCachingEntity$Type, arg1: $BlockState$Type): void
}

export namespace $ClimbingMobCachingSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimbingMobCachingSection$Type = ($ClimbingMobCachingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimbingMobCachingSection_ = $ClimbingMobCachingSection$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/util/entity_movement_tracking/$ServerEntityManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $ServerEntityManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $ServerEntityManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEntityManagerAccessor$Type<T> = ($ServerEntityManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerEntityManagerAccessor_<T> = $ServerEntityManagerAccessor$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$BakedQuadView" {
import {$ModelQuadFacing, $ModelQuadFacing$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing"
import {$ModelQuadView, $ModelQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $BakedQuadView extends $ModelQuadView {

 "setFlags"(arg0: integer): void
 "hasShade"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getY"(arg0: integer): float
 "getFlags"(): integer
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getLightFace"(): $Direction
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "hasColor"(): boolean
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$Type = ($BakedQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadView_ = $BakedQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$ItemColorsExtended" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"

export interface $ItemColorsExtended {

 "sodium$getColorProvider"(arg0: $ItemStack$Type): $ItemColor

(arg0: $ItemStack$Type): $ItemColor
}

export namespace $ItemColorsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtended$Type = ($ItemColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsExtended_ = $ItemColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$EquipmentEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity {

 "lithiumOnEquipmentChanged"(): void
}

export namespace $EquipmentEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$Type = ($EquipmentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity_ = $EquipmentEntity$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$NavigatingEntity" {
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"

export interface $NavigatingEntity {

 "getRegisteredNavigation"(): $PathNavigation
 "isRegisteredToWorld"(): boolean
 "setRegisteredToWorld"(arg0: $PathNavigation$Type): void
 "updateNavigationRegistration"(): void
}

export namespace $NavigatingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatingEntity$Type = ($NavigatingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigatingEntity_ = $NavigatingEntity$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/chunk/$ChunkHolderExtended" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$Type} from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

export interface $ChunkHolderExtended {

 "setFutureForStatus"(arg0: integer, arg1: $CompletableFuture$Type<($Either$Type<($ChunkAccess$Type), ($ChunkHolder$ChunkLoadingFailure$Type)>)>): void
 "getFutureByStatus"(arg0: integer): $CompletableFuture<($Either<($ChunkAccess), ($ChunkHolder$ChunkLoadingFailure)>)>
 "updateLastAccessTime"(arg0: long): boolean
 "getCurrentlyLoading"(): $LevelChunk
}

export namespace $ChunkHolderExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderExtended$Type = ($ChunkHolderExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHolderExtended_ = $ChunkHolderExtended$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeListener" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $InventoryChangeListener {

 "handleInventoryRemoved"(arg0: $Container$Type): void
 "handleStackListReplaced"(inventory: $Container$Type): void
 "handleInventoryContentModified"(arg0: $Container$Type): void
 "handleComparatorAdded"(arg0: $Container$Type): boolean
}

export namespace $InventoryChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeListener$Type = ($InventoryChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeListener_ = $InventoryChangeListener$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/$TrackedBlockStatePredicate" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AtomicBoolean, $AtomicBoolean$Type} from "packages/java/util/concurrent/atomic/$AtomicBoolean"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $TrackedBlockStatePredicate implements $Predicate<($BlockState)> {
static readonly "FULLY_INITIALIZED": $AtomicBoolean

constructor(index: integer)

public "getIndex"(): integer
public "test"(arg0: $BlockState$Type): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedBlockStatePredicate$Type = ($TrackedBlockStatePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedBlockStatePredicate_ = $TrackedBlockStatePredicate$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionedEntityTrackingSection {

 "setPos"(arg0: long): void
 "getPos"(): long
}

export namespace $PositionedEntityTrackingSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedEntityTrackingSection$Type = ($PositionedEntityTrackingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedEntityTrackingSection_ = $PositionedEntityTrackingSection$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/util/tuples/$WorldSectionBox" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WorldSectionBox extends $Record {

constructor(world: $Level$Type, chunkX1: integer, chunkY1: integer, chunkZ1: integer, chunkX2: integer, chunkY2: integer, chunkZ2: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "numSections"(): integer
public "world"(): $Level
public static "entityAccessBox"(world: $Level$Type, box: $AABB$Type): $WorldSectionBox
public static "relevantFluidBox"(world: $Level$Type, box: $AABB$Type): $WorldSectionBox
public "chunkX2"(): integer
public "chunkZ2"(): integer
public "chunkX1"(): integer
public "chunkZ1"(): integer
public "matchesRelevantBlocksBox"(box: $AABB$Type): boolean
public static "relevantExpandedBlocksBox"(world: $Level$Type, box: $AABB$Type): $WorldSectionBox
public "chunkY1"(): integer
public "chunkY2"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSectionBox$Type = ($WorldSectionBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSectionBox_ = $WorldSectionBox$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/chunk/entity_class_groups/$ServerEntityManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $ServerEntityManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $ServerEntityManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEntityManagerAccessor$Type<T> = ($ServerEntityManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerEntityManagerAccessor_<T> = $ServerEntityManagerAccessor$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/render/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$SodiumBufferBuilder, $SodiumBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"

export interface $ExtendedBufferBuilder extends $VertexBufferWriter {

 "sodium$moveToNextVertex"(): void
 "sodium$getElementOffset"(): integer
 "sodium$getFormatDescription"(): $VertexFormatDescription
 "sodium$usingFixedColor"(): boolean
 "sodium$getDelegate"(): $SodiumBufferBuilder
 "sodium$getBuffer"(): $ByteBuffer
 "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
 "canUseIntrinsics"(): boolean
/**
 * 
 * @deprecated
 */
 "isFullWriter"(): boolean
}

export namespace $ExtendedBufferBuilder {
function of(arg0: $VertexConsumer$Type): $VertexBufferWriter
function copyInto(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
function tryOf(arg0: $VertexConsumer$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBufferBuilder$Type = ($ExtendedBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBufferBuilder_ = $ExtendedBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/pushable/$EntityPushablePredicate" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $EntityPushablePredicate<S> implements $Predicate<(S)> {

constructor()

public static "and"<T>(first: $Predicate$Type<(any)>, second: $Predicate$Type<(any)>): $Predicate<(T)>
public "test"(arg0: S): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public "negate"(): $Predicate<(S)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public static "isEqual"<T>(arg0: any): $Predicate<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPushablePredicate$Type<S> = ($EntityPushablePredicate<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPushablePredicate_<S> = $EntityPushablePredicate$Type<(S)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "intY": integer
readonly "intZ": integer
readonly "fracX": float
readonly "fracY": float
readonly "fracZ": float
readonly "x": double
readonly "y": double
readonly "z": double

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$Type = ($CameraTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraTransform_ = $CameraTransform$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/$ChunkView" {
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export interface $ChunkView {

 "getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess

(arg0: integer, arg1: integer): $ChunkAccess
}

export namespace $ChunkView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkView$Type = ($ChunkView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkView_ = $ChunkView$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$FluidCachingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidCachingEntity {

}

export namespace $FluidCachingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCachingEntity$Type = ($FluidCachingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCachingEntity_ = $FluidCachingEntity$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelCuboid {
readonly "x1": float
readonly "y1": float
readonly "z1": float
readonly "x2": float
readonly "y2": float
readonly "z2": float
readonly "u0": float
readonly "u1": float
readonly "u2": float
readonly "u3": float
readonly "u4": float
readonly "u5": float
readonly "v0": float
readonly "v1": float
readonly "v2": float
readonly "mirror": boolean

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$Type<($Direction$Type)>)

public "shouldDrawFace"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboid$Type = ($ModelCuboid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboid_ = $ModelCuboid$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$SectionedEntityMovementTracker" {
import {$WorldSectionBox, $WorldSectionBox$Type} from "packages/me/jellysquid/mods/lithium/common/util/tuples/$WorldSectionBox"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"
import {$EntityMovementTrackerSection, $EntityMovementTrackerSection$Type} from "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$EntityMovementTrackerSection"
import {$SectionedEntityMovementListener, $SectionedEntityMovementListener$Type} from "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$SectionedEntityMovementListener"

export class $SectionedEntityMovementTracker<E extends $EntityAccess, S> {

constructor(interactionChunks: $WorldSectionBox$Type, clazz: $Class$Type<(S)>)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public "register"(world: $ServerLevel$Type): void
public "onSectionEnteredRange"(section: $EntityMovementTrackerSection$Type): void
public "emitEntityMovement"(classMask: integer, section: $EntityMovementTrackerSection$Type): void
public "onSectionLeftRange"(section: $EntityMovementTrackerSection$Type): void
public "unRegister"(world: $ServerLevel$Type): void
public "listenToEntityMovementOnce"(listener: $SectionedEntityMovementListener$Type): void
public "isUnchangedSince"(lastCheckedTime: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementTracker$Type<E, S> = ($SectionedEntityMovementTracker<(E), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementTracker_<E, S> = $SectionedEntityMovementTracker$Type<(E), (S)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"

export class $ExtendedVertexFormat$Element {
readonly "actual": $VertexFormatElement
readonly "increment": integer
readonly "byteLength": integer

constructor(arg0: $VertexFormatElement$Type, arg1: integer, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Element$Type = ($ExtendedVertexFormat$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat$Element_ = $ExtendedVertexFormat$Element$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getIndex"(): integer
 "getTime"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$ReadableContainerExtended" {
import {$PalettedContainerRO, $PalettedContainerRO$Type} from "packages/net/minecraft/world/level/chunk/$PalettedContainerRO"

export interface $ReadableContainerExtended<T> {

 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
 "sodium$copy"(): $PalettedContainerRO<(T)>
}

export namespace $ReadableContainerExtended {
function clone<T>(arg0: $PalettedContainerRO$Type<(T)>): $PalettedContainerRO<(T)>
function of<T>(arg0: $PalettedContainerRO$Type<(T)>): $ReadableContainerExtended<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableContainerExtended$Type<T> = ($ReadableContainerExtended<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableContainerExtended_<T> = $ReadableContainerExtended$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData" {
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelPartData {

 "isHidden"(): boolean
/**
 * 
 * @deprecated
 */
 "getChildren"(): ($ModelPart)[]
 "isVisible"(): boolean
/**
 * 
 * @deprecated
 */
 "getCuboids"(): ($ModelCuboid)[]
}

export namespace $ModelPartData {
function from(arg0: $ModelPart$Type): $ModelPartData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartData$Type = ($ModelPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartData_ = $ModelPartData$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Frustum, $Frustum$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum"
import {$CameraTransform, $CameraTransform$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Viewport {

constructor(arg0: $Frustum$Type, arg1: $Vector3d$Type)

public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float): boolean
public "isBoxVisible"(arg0: $AABB$Type): boolean
public "getChunkCoord"(): $SectionPos
public "getTransform"(): $CameraTransform
public "getBlockCoord"(): $BlockPos
get "chunkCoord"(): $SectionPos
get "transform"(): $CameraTransform
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$Type = ($Viewport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Viewport_ = $Viewport$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$WorldRendererExtended" {
import {$SodiumWorldRenderer, $SodiumWorldRenderer$Type} from "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer"

export interface $WorldRendererExtended {

 "sodium$getWorldRenderer"(): $SodiumWorldRenderer

(): $SodiumWorldRenderer
}

export namespace $WorldRendererExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererExtended$Type = ($WorldRendererExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererExtended_ = $WorldRendererExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$BiomeSeedProvider" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"

export interface $BiomeSeedProvider {

 "sodium$getBiomeSeed"(): long

(arg0: $ClientLevel$Type): long
}

export namespace $BiomeSeedProvider {
function getBiomeSeed(arg0: $ClientLevel$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$Type = ($BiomeSeedProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSeedProvider_ = $BiomeSeedProvider$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/hopper/$LithiumStackList" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InventoryChangeTracker, $InventoryChangeTracker$Type} from "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeTracker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$LithiumDefaultedList, $LithiumDefaultedList$Type} from "packages/me/jellysquid/mods/lithium/api/inventory/$LithiumDefaultedList"

export class $LithiumStackList extends $NonNullList<($ItemStack)> implements $LithiumDefaultedList {

constructor(original: $NonNullList$Type<($ItemStack$Type)>, maxCountPerStack: integer)
constructor(maxCountPerStack: integer)

public "add"(slot: integer, element: $ItemStack$Type): void
public "clear"(): void
public "set"(index: integer, element: $ItemStack$Type): $ItemStack
public "changed"(): void
public "changedInteractionConditions"(): void
public "setReducedSignalStrengthOverride"(): void
public "clearSignalStrengthOverride"(): void
public "beforeSlotCountChange"(slot: integer, newCount: integer): void
public "hasSignalStrengthOverride"(): boolean
public "getModCount"(): long
public "removeInventoryModificationCallback"(inventoryModificationCallback: $InventoryChangeTracker$Type): void
public "setInventoryModificationCallback"(inventoryModificationCallback: $InventoryChangeTracker$Type): void
public "runComparatorUpdatePatternOnFailedExtract"(masterStackList: $LithiumStackList$Type, inventory: $Container$Type): void
public "maybeSendsComparatorUpdatesOnFailedExtract"(): boolean
public "changedALot"(): void
public "getOccupiedSlots"(): integer
public "getFullSlots"(): integer
public "getSignalStrength"(inventory: $Container$Type): integer
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "contains"(arg0: any): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "modCount"(): long
set "inventoryModificationCallback"(value: $InventoryChangeTracker$Type)
get "occupiedSlots"(): integer
get "fullSlots"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumStackList$Type = ($LithiumStackList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumStackList_ = $LithiumStackList$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker" {
import {$ClientChunkEventListener, $ClientChunkEventListener$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener"
import {$ChunkTracker$ChunkEventHandler, $ChunkTracker$ChunkEventHandler$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener {

constructor()

public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "getReadyChunks"(): $LongCollection
public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public static "forEachChunk"(arg0: $LongCollection$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$Type = ($ChunkTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker_ = $ChunkTracker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/texture/$SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended {

 "sodium$setActive"(arg0: boolean): void
 "sodium$isActive"(): boolean
 "sodium$hasAnimation"(): boolean
}

export namespace $SpriteContentsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtended$Type = ($SpriteContentsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtended_ = $SpriteContentsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>

(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/interests/$PointOfInterestStorageExtended" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PoiRecord, $PoiRecord$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"

export interface $PointOfInterestStorageExtended {

 "findNearestForPortalLogic"(arg0: $BlockPos$Type, arg1: integer, arg2: $Holder$Type<($PoiType$Type)>, arg3: $PoiManager$Occupancy$Type, arg4: $Predicate$Type<($PoiRecord$Type)>, arg5: $WorldBorder$Type): $Optional<($PoiRecord)>

(arg0: $BlockPos$Type, arg1: integer, arg2: $Holder$Type<($PoiType$Type)>, arg3: $PoiManager$Occupancy$Type, arg4: $Predicate$Type<($PoiRecord$Type)>, arg5: $WorldBorder$Type): $Optional<($PoiRecord)>
}

export namespace $PointOfInterestStorageExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestStorageExtended$Type = ($PointOfInterestStorageExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestStorageExtended_ = $PointOfInterestStorageExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getTime"(): integer

(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$SectionedEntityMovementListener" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $SectionedEntityMovementListener {

 "handleEntityMovement"(arg0: $Class$Type<(any)>): void

(arg0: $Class$Type<(any)>): void
}

export namespace $SectionedEntityMovementListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementListener$Type = ($SectionedEntityMovementListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementListener_ = $SectionedEntityMovementListener$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrameRowSize"(): integer
 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimatorImplAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture"

export interface $SpriteContentsAnimatorImplAccessor {

 "getFrameIndex"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getFrameTicks"(): integer
}

export namespace $SpriteContentsAnimatorImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatorImplAccessor$Type = ($SpriteContentsAnimatorImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimatorImplAccessor_ = $SpriteContentsAnimatorImplAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity$EquipmentTrackingEntity {

}

export namespace $EquipmentEntity$EquipmentTrackingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$EquipmentTrackingEntity$Type = ($EquipmentEntity$EquipmentTrackingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity$EquipmentTrackingEntity_ = $EquipmentEntity$EquipmentTrackingEntity$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTrackerHolder" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ChunkTracker, $ChunkTracker$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker"

export interface $ChunkTrackerHolder {

 "sodium$getTracker"(): $ChunkTracker

(arg0: $ClientLevel$Type): $ChunkTracker
}

export namespace $ChunkTrackerHolder {
function get(arg0: $ClientLevel$Type): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$Type = ($ChunkTrackerHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTrackerHolder_ = $ChunkTrackerHolder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$BlockColorsExtended" {
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$ReferenceSet, $ReferenceSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ReferenceSet"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Reference2ReferenceMap, $Reference2ReferenceMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockColorsExtended {

 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
}

export namespace $BlockColorsExtended {
function getProviders(arg0: $BlockColors$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
function getOverridenVanillaBlocks(arg0: $BlockColors$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtended$Type = ($BlockColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsExtended_ = $BlockColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/util/entity_movement_tracking/$ServerWorldAccessor" {
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ServerWorldAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldAccessor$Type = ($ServerWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldAccessor_ = $ServerWorldAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/$BlockListeningSection" {
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$Type} from "packages/me/jellysquid/mods/lithium/common/block/$ListeningBlockStatePredicate"
import {$SectionedBlockChangeTracker, $SectionedBlockChangeTracker$Type} from "packages/me/jellysquid/mods/lithium/common/entity/block_tracking/$SectionedBlockChangeTracker"

export interface $BlockListeningSection {

 "addToCallback"(arg0: $ListeningBlockStatePredicate$Type, arg1: $SectionedBlockChangeTracker$Type): void
 "removeFromCallback"(arg0: $ListeningBlockStatePredicate$Type, arg1: $SectionedBlockChangeTracker$Type): void
}

export namespace $BlockListeningSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockListeningSection$Type = ($BlockListeningSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockListeningSection_ = $BlockListeningSection$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/chunk/entity_class_groups/$ClientEntityManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $ClientEntityManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $ClientEntityManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEntityManagerAccessor$Type<T> = ($ClientEntityManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEntityManagerAccessor_<T> = $ClientEntityManagerAccessor$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$SodiumWorldRendererAccessor, $SodiumWorldRendererAccessor$Type} from "packages/net/irisshaders/iris/compat/sodium/mixin/shadow_map/$SodiumWorldRendererAccessor"
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SodiumWorldRenderer implements $SodiumWorldRendererAccessor {

constructor(arg0: $Minecraft$Type)

public static "instance"(): $SodiumWorldRenderer
public "reload"(): void
/**
 * 
 * @deprecated
 */
public "onChunkAdded"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "onChunkRemoved"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "onChunkLightAdded"(arg0: integer, arg1: integer): void
public "getDebugStrings"(): $Collection<(string)>
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public static "instanceNullable"(): $SodiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$Type): boolean
public "isTerrainRenderComplete"(): boolean
public "scheduleTerrainUpdate"(): void
public "getVisibleChunkCount"(): integer
public "didBlockEntityRequestOutline"(): boolean
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "getChunksDebugString"(): string
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "renderBlockEntities"(arg0: $PoseStack$Type, arg1: $RenderBuffers$Type, arg2: $Long2ObjectMap$Type<($SortedSet$Type<($BlockDestructionProgress$Type)>)>, arg3: $Camera$Type, arg4: float): void
public "forEachVisibleBlockEntity"(arg0: $Consumer$Type<($BlockEntity$Type)>): void
public "blockEntityIterator"(): $Iterator<($BlockEntity)>
public "setWorld"(arg0: $ClientLevel$Type): void
public "drawChunkLayer"(arg0: $RenderType$Type, arg1: $PoseStack$Type, arg2: double, arg3: double, arg4: double): void
public "setupTerrain"(arg0: $Camera$Type, arg1: $Viewport$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
get "debugStrings"(): $Collection<(string)>
get "terrainRenderComplete"(): boolean
get "visibleChunkCount"(): integer
get "chunksDebugString"(): string
set "world"(value: $ClientLevel$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRenderer$Type = ($SodiumWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRenderer_ = $SodiumWorldRenderer$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/$BlockCountingSection" {
import {$TrackedBlockStatePredicate, $TrackedBlockStatePredicate$Type} from "packages/me/jellysquid/mods/lithium/common/block/$TrackedBlockStatePredicate"

export interface $BlockCountingSection {

 "mayContainAny"(arg0: $TrackedBlockStatePredicate$Type): boolean

(arg0: $TrackedBlockStatePredicate$Type): boolean
}

export namespace $BlockCountingSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCountingSection$Type = ($BlockCountingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCountingSection_ = $BlockCountingSection$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsAccessor {

 "getImages"(): ($NativeImage)[]

(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/block_tracking/$SectionedBlockChangeTracker" {
import {$WorldSectionBox, $WorldSectionBox$Type} from "packages/me/jellysquid/mods/lithium/common/util/tuples/$WorldSectionBox"
import {$BlockListeningSection, $BlockListeningSection$Type} from "packages/me/jellysquid/mods/lithium/common/block/$BlockListeningSection"
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$Type} from "packages/me/jellysquid/mods/lithium/common/block/$ListeningBlockStatePredicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SectionedBlockChangeTracker {
readonly "trackedWorldSections": $WorldSectionBox
readonly "blockGroup": $ListeningBlockStatePredicate

constructor(trackedWorldSections: $WorldSectionBox$Type, blockGroup: $ListeningBlockStatePredicate$Type)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public "register"(): void
public "unregister"(): void
public "setChanged"(atTime: long): void
public "setChanged"(section: $BlockListeningSection$Type): void
public "listenToAllSections"(): void
public "isUnchangedSince"(lastCheckedTime: long): boolean
public "matchesMovedBox"(box: $AABB$Type): boolean
public static "registerAt"(world: $Level$Type, entityBoundingBox: $AABB$Type, blockGroup: $ListeningBlockStatePredicate$Type): $SectionedBlockChangeTracker
set "changed"(value: long)
set "changed"(value: $BlockListeningSection$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedBlockChangeTracker$Type = ($SectionedBlockChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedBlockChangeTracker_ = $SectionedBlockChangeTracker$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/chunk/entity_class_groups/$ServerWorldAccessor" {
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ServerWorldAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldAccessor$Type = ($ServerWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldAccessor_ = $ServerWorldAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {

 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$Type = ($ClientChunkEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkEventListener_ = $ClientChunkEventListener$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "getPointer"(): long

(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$Type = ($NativeImageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/render/$MinecraftAccessor" {
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"

export interface $MinecraftAccessor {

 "embeddium$getGameThread"(): $Thread

(): $Thread
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/$EntityClassGroup" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $EntityClassGroup {
static readonly "MINECART_BOAT_LIKE_COLLISION": $EntityClassGroup

constructor(classFitEvaluator: $Predicate$Type<($Class$Type<(any)>)>)

public "clear"(): void
public "contains"(entityClass: $Class$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityClassGroup$Type = ($EntityClassGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityClassGroup_ = $EntityClassGroup$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/$ChunkRandomSource" {
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"

export interface $ChunkRandomSource {

 "getRandomPosInChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$Type): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$Type): void
}

export namespace $ChunkRandomSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRandomSource$Type = ($ChunkRandomSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRandomSource_ = $ChunkRandomSource$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {

 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$Type = ($Frustum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frustum_ = $Frustum$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/blockentity/$BlockEntityGetter" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockEntityGetter {

 "getLoadedExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity

(arg0: $BlockPos$Type): $BlockEntity
}

export namespace $BlockEntityGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityGetter$Type = ($BlockEntityGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityGetter_ = $BlockEntityGetter$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/ai/pathing/$BlockStatePathingCache" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"

export interface $BlockStatePathingCache {

 "getNeighborPathNodeType"(): $BlockPathTypes
 "getPathNodeType"(): $BlockPathTypes
}

export namespace $BlockStatePathingCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatePathingCache$Type = ($BlockStatePathingCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatePathingCache_ = $BlockStatePathingCache$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/chunk/entity_class_groups/$EntityTrackingSectionAccessor" {
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
declare module "packages/me/jellysquid/mods/lithium/api/pathing/$BlockPathing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockPathing {

 "needsDynamicNodeTypeCheck"(): boolean
 "needsDynamicBurningCheck"(): boolean
}

export namespace $BlockPathing {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPathing$Type = ($BlockPathing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPathing_ = $BlockPathing$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "POS_X": $ModelQuadFacing
static readonly "POS_Y": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "NEG_Z": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "ALL": integer


public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: string): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$Type): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
get "opposite"(): $ModelQuadFacing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$Type = (("pos_y") | ("pos_z") | ("pos_x") | ("neg_x") | ("neg_z") | ("neg_y") | ("unassigned")) | ($ModelQuadFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadFacing_ = $ModelQuadFacing$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/shapes/$OffsetVoxelShapeCache" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $OffsetVoxelShapeCache {

 "setShape"(arg0: float, arg1: $Direction$Type, arg2: $VoxelShape$Type): void
 "getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$Type): $VoxelShape
}

export namespace $OffsetVoxelShapeCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetVoxelShapeCache$Type = ($OffsetVoxelShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetVoxelShapeCache_ = $OffsetVoxelShapeCache$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeTracker" {
import {$InventoryChangeEmitter, $InventoryChangeEmitter$Type} from "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeEmitter"
import {$LithiumStackList, $LithiumStackList$Type} from "packages/me/jellysquid/mods/lithium/common/hopper/$LithiumStackList"
import {$InventoryChangeListener, $InventoryChangeListener$Type} from "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeListener"

export interface $InventoryChangeTracker extends $InventoryChangeEmitter {

 "listenForContentChangesOnce"(stackList: $LithiumStackList$Type, inventoryChangeListener: $InventoryChangeListener$Type): void
 "listenForMajorInventoryChanges"(inventoryChangeListener: $InventoryChangeListener$Type): void
 "stopListenForMajorInventoryChanges"(inventoryChangeListener: $InventoryChangeListener$Type): void
 "stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "forwardContentChangeOnce"(arg0: $InventoryChangeListener$Type, arg1: $LithiumStackList$Type, arg2: $InventoryChangeTracker$Type): void
 "emitStackListReplaced"(): void
 "forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitFirstComparatorAdded"(): void
 "emitContentModified"(): void
 "emitCallbackReplaced"(): void
 "emitRemoved"(): void
}

export namespace $InventoryChangeTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTracker$Type = ($InventoryChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeTracker_ = $InventoryChangeTracker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/$ModelCuboidAccessor" {
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelCuboidAccessor {

 "embeddium$getSimpleCuboid"(): $ModelCuboid
 "sodium$copy"(): $ModelCuboid
}

export namespace $ModelCuboidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboidAccessor$Type = ($ModelCuboidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboidAccessor_ = $ModelCuboidAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$EntityMovementTrackerSection" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$Type} from "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$SectionedEntityMovementTracker"

export interface $EntityMovementTrackerSection {

 "removeListener"(arg0: $EntitySectionStorage$Type<(any)>, arg1: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "removeListenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$Type<(E), (S)>, arg1: integer): void
 "trackEntityMovement"(arg0: integer, arg1: long): void
 "listenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$Type<(E), (S)>, arg1: integer): void
 "addListener"(arg0: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "getChangeTime"(arg0: integer): long
}

export namespace $EntityMovementTrackerSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMovementTrackerSection$Type = ($EntityMovementTrackerSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMovementTrackerSection_ = $EntityMovementTrackerSection$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/interests/$RegionBasedStorageSectionExtended" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $RegionBasedStorageSectionExtended<R> {

 "getInChunkColumn"(arg0: integer, arg1: integer): $Iterable<(R)>
 "getWithinChunkColumn"(arg0: integer, arg1: integer): $Stream<(R)>
}

export namespace $RegionBasedStorageSectionExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionBasedStorageSectionExtended$Type<R> = ($RegionBasedStorageSectionExtended<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionBasedStorageSectionExtended_<R> = $RegionBasedStorageSectionExtended$Type<(R)>;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsInvoker {

 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$Type = ($SpriteContentsInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsInvoker_ = $SpriteContentsInvoker$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/$ListeningBlockStatePredicate" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AtomicBoolean, $AtomicBoolean$Type} from "packages/java/util/concurrent/atomic/$AtomicBoolean"
import {$TrackedBlockStatePredicate, $TrackedBlockStatePredicate$Type} from "packages/me/jellysquid/mods/lithium/common/block/$TrackedBlockStatePredicate"

export class $ListeningBlockStatePredicate extends $TrackedBlockStatePredicate {
static "LISTENING_MASK": integer
static readonly "FULLY_INITIALIZED": $AtomicBoolean


public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListeningBlockStatePredicate$Type = ($ListeningBlockStatePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListeningBlockStatePredicate_ = $ListeningBlockStatePredicate$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/model/$BakedModelMixin" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EmbeddiumBakedModelExtension, $EmbeddiumBakedModelExtension$Type} from "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $BakedModelMixin extends $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/util/deduplication/$LithiumInternerWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumInternerWrapper<T> {

 "deleteCanonical"(arg0: T): void
 "getCanonical"(arg0: T): T
}

export namespace $LithiumInternerWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumInternerWrapper$Type<T> = ($LithiumInternerWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumInternerWrapper_<T> = $LithiumInternerWrapper$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_comparator_tracking/$ComparatorTracker" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ComparatorTracker {

 "hasAnyComparatorNearby"(): boolean
 "onComparatorAdded"(arg0: $Direction$Type, arg1: integer): void
}

export namespace $ComparatorTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorTracker$Type = ($ComparatorTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComparatorTracker_ = $ComparatorTracker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {

 "apply"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$Type = ($ChunkTracker$ChunkEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker$ChunkEventHandler_ = $ChunkTracker$ChunkEventHandler$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelQuadView {

 "getY"(arg0: integer): float
 "getFlags"(): integer
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getLightFace"(): $Direction
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "hasColor"(): boolean
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$Type = ($ModelQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadView_ = $ModelQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$BlockSensitiveBufferBuilder, $BlockSensitiveBufferBuilder$Type} from "packages/net/irisshaders/iris/vertices/$BlockSensitiveBufferBuilder"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$ExtendedBufferBuilder, $ExtendedBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $SodiumBufferBuilder implements $VertexConsumer, $VertexBufferWriter, $BlockSensitiveBufferBuilder {

constructor(arg0: $ExtendedBufferBuilder$Type)

public "reset"(): void
public "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
public "beginBlock"(block: short, renderType: short, localPosX: integer, localPosY: integer, localPosZ: integer): void
public "endBlock"(): void
public "canUseIntrinsics"(): boolean
public "endVertex"(): void
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "getOriginalBufferBuilder"(): $BufferBuilder
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "uv2"(arg0: integer, arg1: integer): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "overlayCoords"(arg0: integer): $VertexConsumer
public "unsetDefaultColor"(): void
public "uv2"(arg0: integer): $VertexConsumer
public "color"(arg0: integer): $VertexConsumer
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public static "of"(arg0: $VertexConsumer$Type): $VertexBufferWriter
public static "copyInto"(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
/**
 * 
 * @deprecated
 */
public "isFullWriter"(): boolean
public static "tryOf"(arg0: $VertexConsumer$Type): $VertexBufferWriter
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
get "originalBufferBuilder"(): $BufferBuilder
get "fullWriter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumBufferBuilder$Type = ($SodiumBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumBufferBuilder_ = $SodiumBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/$BlockStateFlagHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFlagHolder {

 "getAllFlags"(): integer

(): integer
}

export namespace $BlockStateFlagHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFlagHolder$Type = ($BlockStateFlagHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFlagHolder_ = $BlockStateFlagHolder$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$MovementTrackerCache" {
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$Type} from "packages/me/jellysquid/mods/lithium/common/entity/movement_tracker/$SectionedEntityMovementTracker"

export interface $MovementTrackerCache {

 "remove"(arg0: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "deduplicate"<S extends $SectionedEntityMovementTracker<(any), (any)>>(arg0: S): S
}

export namespace $MovementTrackerCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementTrackerCache$Type = ($MovementTrackerCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementTrackerCache_ = $MovementTrackerCache$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/ai/$MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryModificationCounter {

 "getModCount"(): long

(): long
}

export namespace $MemoryModificationCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryModificationCounter$Type = ($MemoryModificationCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryModificationCounter_ = $MemoryModificationCounter$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/entity/pushable/$BlockCachingEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $BlockCachingEntity {

 "lithiumOnBlockCacheSet"(newState: $BlockState$Type): void
 "lithiumOnBlockCacheDeleted"(): void
 "getCachedFeetBlockState"(): $BlockState
 "lithiumSetClimbingMobCachingSectionUpdateBehavior"(listening: boolean): void

(newState: $BlockState$Type): void
}

export namespace $BlockCachingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCachingEntity$Type = ($BlockCachingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCachingEntity_ = $BlockCachingEntity$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/interests/$PointOfInterestSetExtended" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoiRecord, $PoiRecord$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"

export interface $PointOfInterestSetExtended {

 "collectMatchingPoints"(arg0: $Predicate$Type<($Holder$Type<($PoiType$Type)>)>, arg1: $PoiManager$Occupancy$Type, arg2: $Consumer$Type<($PoiRecord$Type)>): void

(arg0: $Predicate$Type<($Holder$Type<($PoiType$Type)>)>, arg1: $PoiManager$Occupancy$Type, arg2: $Consumer$Type<($PoiRecord$Type)>): void
}

export namespace $PointOfInterestSetExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestSetExtended$Type = ($PointOfInterestSetExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestSetExtended_ = $PointOfInterestSetExtended$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/$ServerWorldExtended" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"

export interface $ServerWorldExtended {

 "setNavigationActive"(arg0: $Mob$Type): void
 "setNavigationInactive"(arg0: $Mob$Type): void
}

export namespace $ServerWorldExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldExtended$Type = ($ServerWorldExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldExtended_ = $ServerWorldExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$ViewportProvider" {
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"

export interface $ViewportProvider {

 "sodium$createViewport"(): $Viewport

(): $Viewport
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$Type = ($ViewportProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewportProvider_ = $ViewportProvider$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/client/$ClientWorldAccessor" {
import {$TransientEntitySectionManager, $TransientEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$TransientEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientWorldAccessor {

 "getEntityManager"(): $TransientEntitySectionManager<($Entity)>

(): $TransientEntitySectionManager<($Entity)>
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$Type = ($ClientWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldAccessor_ = $ClientWorldAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/world/chunk/$ClassGroupFilterableList" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EntityClassGroup, $EntityClassGroup$Type} from "packages/me/jellysquid/mods/lithium/common/entity/$EntityClassGroup"

export interface $ClassGroupFilterableList<T> {

 "getAllOfGroupType"(arg0: $EntityClassGroup$Type): $Collection<(T)>

(arg0: $EntityClassGroup$Type): $Collection<(T)>
}

export namespace $ClassGroupFilterableList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassGroupFilterableList$Type<T> = ($ClassGroupFilterableList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassGroupFilterableList_<T> = $ClassGroupFilterableList$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat" {
import {$ExtendedVertexFormat$Element, $ExtendedVertexFormat$Element$Type} from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element"

export interface $ExtendedVertexFormat {

 "embeddium$getExtendedElements"(): ($ExtendedVertexFormat$Element)[]

(): ($ExtendedVertexFormat$Element)[]
}

export namespace $ExtendedVertexFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Type = ($ExtendedVertexFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat_ = $ExtendedVertexFormat$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeEmitter" {
import {$LithiumStackList, $LithiumStackList$Type} from "packages/me/jellysquid/mods/lithium/common/hopper/$LithiumStackList"
import {$InventoryChangeTracker, $InventoryChangeTracker$Type} from "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeTracker"
import {$InventoryChangeListener, $InventoryChangeListener$Type} from "packages/me/jellysquid/mods/lithium/common/block/entity/inventory_change_tracking/$InventoryChangeListener"

export interface $InventoryChangeEmitter {

 "stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "forwardContentChangeOnce"(arg0: $InventoryChangeListener$Type, arg1: $LithiumStackList$Type, arg2: $InventoryChangeTracker$Type): void
 "emitStackListReplaced"(): void
 "forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitFirstComparatorAdded"(): void
 "emitContentModified"(): void
 "emitCallbackReplaced"(): void
 "emitRemoved"(): void
}

export namespace $InventoryChangeEmitter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeEmitter$Type = ($InventoryChangeEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeEmitter_ = $InventoryChangeEmitter$Type;
}}
declare module "packages/me/jellysquid/mods/lithium/mixin/world/combined_heightmap_update/$HeightmapAccessor" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $HeightmapAccessor {

 "getBlockPredicate"(): $Predicate<($BlockState)>
 "callSet"(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $HeightmapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeightmapAccessor$Type = ($HeightmapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeightmapAccessor_ = $HeightmapAccessor$Type;
}}
