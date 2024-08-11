declare module "packages/net/tslat/smartbrainlib/api/core/$SmartBrain" {
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$Sensor, $Sensor$Type} from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import {$BrainBehaviourPredicate, $BrainBehaviourPredicate$Type} from "packages/net/tslat/smartbrainlib/object/$BrainBehaviourPredicate"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BrainActivityGroup, $BrainActivityGroup$Type} from "packages/net/tslat/smartbrainlib/api/core/$BrainActivityGroup"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ExtendedSensor, $ExtendedSensor$Type} from "packages/net/tslat/smartbrainlib/api/core/sensor/$ExtendedSensor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$MemoryStatus, $MemoryStatus$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$SmartBrainOwner, $SmartBrainOwner$Type} from "packages/net/tslat/smartbrainlib/api/$SmartBrainOwner"
import {$BrainBuilder, $BrainBuilder$Type} from "packages/net/minecraftforge/common/util/$BrainBuilder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BrainBehaviourConsumer, $BrainBehaviourConsumer$Type} from "packages/net/tslat/smartbrainlib/object/$BrainBehaviourConsumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$SmartBrainSchedule, $SmartBrainSchedule$Type} from "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmartBrain<E extends ($LivingEntity) & ($SmartBrainOwner<(E)>)> extends $Brain<(E)> {
 "memories": $Map<($MemoryModuleType<(any)>), ($Optional<(any)>)>
 "sensors": $Map<($SensorType<(any)>), ($Sensor<(any)>)>
readonly "availableBehaviorsByPriority": $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
readonly "activityRequirements": $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
readonly "activityMemoriesToEraseWhenStopped": $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
 "coreActivities": $Set<($Activity)>
readonly "activeActivities": $Set<($Activity)>
 "defaultActivity": $Activity

constructor(arg0: E, arg1: $List$Type<($MemoryModuleType$Type<(any)>)>, arg2: $List$Type<(any)>, arg3: $List$Type<($BrainActivityGroup$Type<(E)>)>, arg4: boolean)

public "createBuilder"(): $BrainBuilder<(E)>
public "addBehaviour"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>): void
public "removeBehaviour"(arg0: E, arg1: $BrainBehaviourPredicate$Type): void
public "isMemoryValue"<U>(arg0: $MemoryModuleType$Type<(U)>, arg1: U): boolean
public "getSchedule"(): $SmartBrainSchedule
public "setSchedule"(arg0: $SmartBrainSchedule$Type): $SmartBrain<(E)>
public "getBehaviours"(): $Stream<($BehaviorControl<(any)>)>
public "addActivity"(arg0: $BrainActivityGroup$Type<(E)>): void
public "scheduleTask"(arg0: E, arg1: integer, arg2: $Consumer$Type<(E)>): void
public "forEachBehaviour"(arg0: $BrainBehaviourConsumer$Type): void
public "getMemory"<U>(arg0: $MemoryModuleType$Type<(U)>): $Optional<(U)>
public "tick"(arg0: $ServerLevel$Type, arg1: E): void
public "removeAllBehaviors"(): void
public "setMemoryInternal"<U>(arg0: $MemoryModuleType$Type<(U)>, arg1: $Optional$Type<(any)>): void
public "addSensor"(arg0: $ExtendedSensor$Type<(E)>): void
public "addActivityAndRemoveMemoriesWhenStopped"(arg0: $Activity$Type, arg1: $ImmutableList$Type<(any)>, arg2: $Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>, arg3: $Set$Type<($MemoryModuleType$Type<(any)>)>): void
public "forgetOutdatedMemories"(): void
public "getRunningBehaviors"(): $List<($BehaviorControl<(any)>)>
/**
 * 
 * @deprecated
 */
public "setSchedule"(arg0: $Schedule$Type): void
public "stopAll"(arg0: $ServerLevel$Type, arg1: E): void
public "copyWithoutBehaviors"(): $Brain<(E)>
get "schedule"(): $SmartBrainSchedule
set "schedule"(value: $SmartBrainSchedule$Type)
get "behaviours"(): $Stream<($BehaviorControl<(any)>)>
get "runningBehaviors"(): $List<($BehaviorControl<(any)>)>
set "schedule"(value: $Schedule$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrain$Type<E> = ($SmartBrain<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrain_<E> = $SmartBrain$Type<(E)>;
}}
declare module "packages/net/tslat/smartbrainlib/api/core/sensor/$ExtendedSensor" {
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Sensor, $Sensor$Type} from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ExtendedSensor<E extends $LivingEntity> extends $Sensor<(E)> {
static readonly "RANDOM": $RandomSource
readonly "scanRate": integer

constructor()

public "type"(): $SensorType<(any)>
public "requires"(): $Set<($MemoryModuleType<(any)>)>
public "tick"(arg0: $ServerLevel$Type, arg1: E): void
public "setScanRate"(arg0: $Function$Type<(E), (integer)>): $ExtendedSensor<(E)>
public "memoriesUsed"(): $List<($MemoryModuleType<(any)>)>
public "afterScanning"(arg0: $Consumer$Type<(E)>): $ExtendedSensor<(E)>
set "scanRate"(value: $Function$Type<(E), (integer)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSensor$Type<E> = ($ExtendedSensor<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSensor_<E> = $ExtendedSensor$Type<(E)>;
}}
declare module "packages/net/tslat/smartbrainlib/api/core/$BrainActivityGroup" {
import {$Behavior, $Behavior$Type} from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import {$SmartBrainOwner, $SmartBrainOwner$Type} from "packages/net/tslat/smartbrainlib/api/$SmartBrainOwner"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MemoryStatus, $MemoryStatus$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"

export class $BrainActivityGroup<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)> {

constructor(arg0: $Activity$Type)

public "priority"(arg0: integer): $BrainActivityGroup<(T)>
public static "empty"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(): $BrainActivityGroup<(T)>
public static "idleTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$Type<(any)>)[]): $BrainActivityGroup<(T)>
public static "coreTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "getBehaviours"(): $List<($Behavior<(any)>)>
public "getActivity"(): $Activity
public "behaviours"(...arg0: ($Behavior$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "onlyStartWithMemoryStatus"(arg0: $MemoryModuleType$Type<(any)>, arg1: $MemoryStatus$Type): $BrainActivityGroup<(T)>
public "wipeMemoriesWhenFinished"(...arg0: ($MemoryModuleType$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "requireAndWipeMemoriesOnUse"(...arg0: ($MemoryModuleType$Type<(any)>)[]): $BrainActivityGroup<(T)>
public static "fightTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "getPriorityStart"(): integer
public "pairBehaviourPriorities"(): $ImmutableList<($Pair<(integer), ($Behavior<(any)>)>)>
public "getActivityStartMemoryConditions"(): $Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>
public "getWipedMemoriesOnFinish"(): $Set<($MemoryModuleType<(any)>)>
get "activity"(): $Activity
get "priorityStart"(): integer
get "activityStartMemoryConditions"(): $Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>
get "wipedMemoriesOnFinish"(): $Set<($MemoryModuleType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainActivityGroup$Type<T> = ($BrainActivityGroup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainActivityGroup_<T> = $BrainActivityGroup$Type<(T)>;
}}
declare module "packages/net/tslat/smartbrainlib/object/$BrainBehaviourConsumer" {
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"

export interface $BrainBehaviourConsumer {

 "consume"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>, arg3: $BehaviorControl$Type<(any)>): void

(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>, arg3: $BehaviorControl$Type<(any)>): void
}

export namespace $BrainBehaviourConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBehaviourConsumer$Type = ($BrainBehaviourConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBehaviourConsumer_ = $BrainBehaviourConsumer$Type;
}}
declare module "packages/net/tslat/smartbrainlib/api/$SmartBrainOwner" {
import {$BrainActivityGroup, $BrainActivityGroup$Type} from "packages/net/tslat/smartbrainlib/api/core/$BrainActivityGroup"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SmartBrain, $SmartBrain$Type} from "packages/net/tslat/smartbrainlib/api/core/$SmartBrain"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SmartBrainSchedule, $SmartBrainSchedule$Type} from "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SmartBrainOwner<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)> {

 "tickBrain"(arg0: T): void
 "getFightTasks"(): $BrainActivityGroup<(any)>
 "getAdditionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(any)>)>
 "getIdleTasks"(): $BrainActivityGroup<(any)>
 "getCoreTasks"(): $BrainActivityGroup<(any)>
 "getSchedule"(): $SmartBrainSchedule
 "getSensors"(): $List<(any)>
 "handleAdditionalBrainSetup"(arg0: $SmartBrain$Type<(any)>): void
 "getAlwaysRunningActivities"(): $Set<($Activity)>
 "getActivityPriorities"(): $List<($Activity)>
 "getDefaultActivity"(): $Activity

(arg0: T): void
}

export namespace $SmartBrainOwner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainOwner$Type<T> = ($SmartBrainOwner<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainOwner_<T> = $SmartBrainOwner$Type<(T)>;
}}
declare module "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule" {
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Timeline, $Timeline$Type} from "packages/net/minecraft/world/entity/schedule/$Timeline"
import {$SmartBrainSchedule$Type, $SmartBrainSchedule$Type$Type} from "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule$Type"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmartBrainSchedule extends $Schedule {
static readonly "WORK_START_TIME": integer
static readonly "TOTAL_WORK_TIME": integer
static readonly "EMPTY": $Schedule
static readonly "SIMPLE": $Schedule
static readonly "VILLAGER_BABY": $Schedule
static readonly "VILLAGER_DEFAULT": $Schedule
readonly "timelines": $Map<($Activity), ($Timeline)>

constructor()
constructor(arg0: $SmartBrainSchedule$Type$Type)

public "tick"(arg0: $LivingEntity$Type): $Activity
public "getActivityAt"(arg0: integer): $Activity
public "scheduleTask"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($LivingEntity$Type)>): void
public "doAt"(arg0: integer, arg1: $Consumer$Type<($LivingEntity$Type)>): $SmartBrainSchedule
public "activityAt"(arg0: integer, arg1: $Activity$Type): $SmartBrainSchedule
public "clearSchedule"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainSchedule$Type = ($SmartBrainSchedule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainSchedule_ = $SmartBrainSchedule$Type;
}}
declare module "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SmartBrainSchedule$Type extends $Enum<($SmartBrainSchedule$Type)> {
static readonly "DAYTIME": $SmartBrainSchedule$Type
static readonly "AGE": $SmartBrainSchedule$Type


public static "values"(): ($SmartBrainSchedule$Type)[]
public static "valueOf"(arg0: string): $SmartBrainSchedule$Type
public "resolve"(arg0: $LivingEntity$Type): integer
public "resolveDelay"(arg0: $LivingEntity$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainSchedule$Type$Type = (("daytime") | ("age")) | ($SmartBrainSchedule$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainSchedule$Type_ = $SmartBrainSchedule$Type$Type;
}}
declare module "packages/net/tslat/smartbrainlib/object/$BrainBehaviourPredicate" {
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"

export interface $BrainBehaviourPredicate {

 "isBehaviour"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>, arg3: $BehaviorControl$Type<(any)>): boolean

(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>, arg3: $BehaviorControl$Type<(any)>): boolean
}

export namespace $BrainBehaviourPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBehaviourPredicate$Type = ($BrainBehaviourPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBehaviourPredicate_ = $BrainBehaviourPredicate$Type;
}}
