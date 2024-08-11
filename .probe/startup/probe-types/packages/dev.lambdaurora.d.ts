declare module "packages/dev/lambdaurora/lambdynlights/$DynamicLightSource" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $DynamicLightSource {

 "tdv$getDynamicLightWorld"(): $Level
 "tdv$setDynamicLightEnabled"(arg0: boolean): void
 "tdv$resetDynamicLight"(): void
 "tdv$shouldUpdateDynamicLight"(): boolean
 "tdv$isDynamicLightEnabled"(): boolean
 "tdv$dynamicLightTick"(): void
 "tdv$getDynamicLightX"(): double
 "tdv$getDynamicLightY"(): double
 "tdv$getDynamicLightZ"(): double
 "tdv$getLuminance"(): integer
 "tdv$lambdynlights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
 "tdv$lambdynlights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
}

export namespace $DynamicLightSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightSource$Type = ($DynamicLightSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightSource_ = $DynamicLightSource$Type;
}}
declare module "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Creeper, $Creeper$Type} from "packages/net/minecraft/world/entity/monster/$Creeper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $DynamicLightHandler<T> {

 "getLuminance"(arg0: T): integer
 "isWaterSensitive"(arg0: T): boolean

(arg0: T): integer
}

export namespace $DynamicLightHandler {
function makeLivingEntityHandler<T>(arg0: $DynamicLightHandler$Type<(T)>): $DynamicLightHandler<(T)>
function makeCreeperEntityHandler<T>(arg0: $DynamicLightHandler$Type<(T)>): $DynamicLightHandler<(T)>
function makeHandler<T>(arg0: $Function$Type<(T), (integer)>, arg1: $Function$Type<(T), (boolean)>): $DynamicLightHandler<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandler$Type<T> = ($DynamicLightHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandler_<T> = $DynamicLightHandler$Type<(T)>;
}}
declare module "packages/dev/lambdaurora/lambdynlights/accessor/$DynamicLightHandlerHolder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DynamicLightHandler, $DynamicLightHandler$Type} from "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $DynamicLightHandlerHolder<T> {

 "lambdynlights$setDynamicLightHandler"(arg0: $DynamicLightHandler$Type<(T)>): void
 "lambdynlights$getDynamicLightHandler"(): $DynamicLightHandler<(T)>
}

export namespace $DynamicLightHandlerHolder {
function cast<T>(arg0: $BlockEntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
function cast<T>(arg0: $EntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandlerHolder$Type<T> = ($DynamicLightHandlerHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandlerHolder_<T> = $DynamicLightHandlerHolder$Type<(T)>;
}}
declare module "packages/dev/lambdaurora/lambdynlights/accessor/$WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor {

 "dynlights_setSectionDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void

(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}

export namespace $WorldRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccessor$Type = ($WorldRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccessor_ = $WorldRendererAccessor$Type;
}}
