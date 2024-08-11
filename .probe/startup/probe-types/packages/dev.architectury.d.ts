declare module "packages/dev/architectury/utils/$OptionalSupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $OptionalSupplier<T> extends $Supplier<(T)> {

 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalSupplier_<T> = $OptionalSupplier$Type<(T)>;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrarBuilder" {
import {$RegistrarOption, $RegistrarOption$Type} from "packages/dev/architectury/registry/registries/options/$RegistrarOption"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrarBuilder<T> {

 "build"(): $Registrar<(T)>
 "option"(arg0: $RegistrarOption$Type): $RegistrarBuilder<(T)>
 "saveToDisc"(): $RegistrarBuilder<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarBuilder$Type<T> = ($RegistrarBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarBuilder_<T> = $RegistrarBuilder$Type<(T)>;
}}
declare module "packages/dev/architectury/utils/value/$BooleanValue" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Value, $Value$Type} from "packages/dev/architectury/utils/value/$Value"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $BooleanValue extends $Value<(boolean)>, $BooleanSupplier, $BooleanConsumer {

 "get"(): boolean
 "getAsBoolean"(): boolean
/**
 * 
 * @deprecated
 */
 "accept"(arg0: boolean): void
 "accept"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(boolean)>
 "andThen"(arg0: $BooleanConsumer$Type): $BooleanConsumer
}

export namespace $BooleanValue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanValue$Type = ($BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanValue_ = $BooleanValue$Type;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes"
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid$Flowing extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Flowing$Type = ($ArchitecturyFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Flowing_ = $ArchitecturyFlowingFluid$Flowing$Type;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrarManager" {
import {$RegistrarBuilder, $RegistrarBuilder$Type} from "packages/dev/architectury/registry/registries/$RegistrarBuilder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export class $RegistrarManager {


/**
 * 
 * @deprecated
 */
public "get"<T>(registry: $Registry$Type<(T)>): $Registrar<(T)>
public static "get"(modId: string): $RegistrarManager
public "get"<T>(key: $ResourceKey$Type<($Registry$Type<(T)>)>): $Registrar<(T)>
public static "getId"<T>(object: T, fallback: $ResourceKey$Type<($Registry$Type<(T)>)>): $ResourceLocation
/**
 * 
 * @deprecated
 */
public static "getId"<T>(object: T, fallback: $Registry$Type<(T)>): $ResourceLocation
public "builder"<T>(registryId: $ResourceLocation$Type, ...typeGetter: (T)[]): $RegistrarBuilder<(T)>
public "getModId"(): string
public "forRegistry"<T>(key: $ResourceKey$Type<($Registry$Type<(T)>)>, callback: $Consumer$Type<($Registrar$Type<(T)>)>): void
get "modId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarManager$Type = ($RegistrarManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarManager_ = $RegistrarManager$Type;
}}
declare module "packages/dev/architectury/registry/registries/$DeferredSupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$OptionalSupplier, $OptionalSupplier$Type} from "packages/dev/architectury/utils/$OptionalSupplier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $DeferredSupplier<T> extends $OptionalSupplier<(T)> {

 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredSupplier_<T> = $DeferredSupplier$Type<(T)>;
}}
declare module "packages/dev/architectury/event/events/common/$CommandPerformEvent" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ParseResults, $ParseResults$Type} from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandPerformEvent {
static readonly "EVENT": $Event<($EventActor<($CommandPerformEvent)>)>

constructor(results: $ParseResults$Type<($CommandSourceStack$Type)>, throwable: $Throwable$Type)

public "getThrowable"(): $Throwable
public "getResults"(): $ParseResults<($CommandSourceStack)>
public "setResults"(results: $ParseResults$Type<($CommandSourceStack$Type)>): void
public "setThrowable"(throwable: $Throwable$Type): void
get "throwable"(): $Throwable
get "results"(): $ParseResults<($CommandSourceStack)>
set "results"(value: $ParseResults$Type<($CommandSourceStack$Type)>)
set "throwable"(value: $Throwable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandPerformEvent$Type = ($CommandPerformEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandPerformEvent_ = $CommandPerformEvent$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedLiquidBlockExtension" {
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"

export interface $InjectedLiquidBlockExtension {

 "arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedLiquidBlockExtension$Type = ($InjectedLiquidBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedLiquidBlockExtension_ = $InjectedLiquidBlockExtension$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$SpawnProperties" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SpawnProperties {

 "getSpawners"(): $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
 "getCreatureProbability"(): float
 "getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}

export namespace $SpawnProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnProperties$Type = ($SpawnProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnProperties_ = $SpawnProperties$Type;
}}
declare module "packages/dev/architectury/fluid/$FluidStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FluidStack {


public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public static "init"(): void
public "write"(tag: $CompoundTag$Type): $CompoundTag
public "write"(buf: $FriendlyByteBuf$Type): void
public static "read"(buf: $FriendlyByteBuf$Type): $FluidStack
public static "read"(tag: $CompoundTag$Type): $FluidStack
public "copy"(): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, tag: $CompoundTag$Type): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public static "create"(fluid: $Supplier$Type<($Fluid$Type)>, amount: long): $FluidStack
public static "create"(fluid: $Supplier$Type<($Fluid$Type)>, amount: long, tag: $CompoundTag$Type): $FluidStack
public "grow"(amount: long): void
public "getTag"(): $CompoundTag
public "getRawFluidSupplier"(): $Supplier<($Fluid)>
public "getOrCreateChildTag"(childName: string): $CompoundTag
public "removeChildTag"(childName: string): void
public "getOrCreateTag"(): $CompoundTag
public "getChildTag"(childName: string): $CompoundTag
public "getRawFluid"(): $Fluid
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public "isTagEqual"(other: $FluidStack$Type): boolean
public "copyWithAmount"(amount: long): $FluidStack
public static "bucketAmount"(): long
public "hasTag"(): boolean
public "getTranslationKey"(): string
public "shrink"(amount: long): void
public "setTag"(tag: $CompoundTag$Type): void
public "getFluid"(): $Fluid
public "getAmount"(): long
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "setAmount"(amount: long): void
get "name"(): $Component
get "tag"(): $CompoundTag
get "rawFluidSupplier"(): $Supplier<($Fluid)>
get "orCreateTag"(): $CompoundTag
get "rawFluid"(): $Fluid
get "translationKey"(): string
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
get "amount"(): long
set "amount"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/dev/architectury/event/events/client/$ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {

 "arch$getPosition"(): $Vec3
 "arch$getLevel"(): $ClientLevel
 "arch$getRotation"(): $Vec2
 "arch$sendFailure"(arg0: $Component$Type): void
 "arch$getPlayer"(): $LocalPlayer
 "arch$sendSuccess"(arg0: $Supplier$Type<($Component$Type)>, arg1: boolean): void
 "hasPermission"(arg0: integer): boolean
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "suggestRegistryElements"(arg0: $Registry$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type): void
 "enabledFeatures"(): $FeatureFlagSet
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "registryAccess"(): $RegistryAccess
 "getCustomTabSugggestions"(): $Collection<(string)>
 "customSuggestion"(arg0: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(string)>
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "suggestRegistryElements"(arg0: $ResourceKey$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type, arg3: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getOnlinePlayerNames"(): $Collection<(string)>
 "getSelectedEntities"(): $Collection<(string)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Consumer$Type<(T)>): void
function matchesSubStr(arg0: string, arg1: string): boolean
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: string, arg3: $Function$Type<(T), ($ResourceLocation$Type)>, arg4: $Consumer$Type<(T)>): void
function suggestResource<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Stream$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggest<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), (string)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggest(arg0: (string)[], arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack_ = $ClientCommandRegistrationEvent$ClientCommandSourceStack$Type;
}}
declare module "packages/dev/architectury/event/$CompoundEventResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"

export class $CompoundEventResult<T> {


public static "interruptTrue"<T>(object: T): $CompoundEventResult<(T)>
public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "interrupt"<T>(value: boolean, object: T): $CompoundEventResult<(T)>
public "result"(): $EventResult
public "object"(): T
public "isTrue"(): boolean
public "interruptsFurtherEvaluation"(): boolean
public static "interruptFalse"<T>(object: T): $CompoundEventResult<(T)>
public static "pass"<T>(): $CompoundEventResult<(T)>
public "isFalse"(): boolean
public static "interruptDefault"<T>(object: T): $CompoundEventResult<(T)>
public "asMinecraft"(): $InteractionResultHolder<(T)>
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundEventResult$Type<T> = ($CompoundEventResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundEventResult_<T> = $CompoundEventResult$Type<(T)>;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedGameEventExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedGameEventExtension extends $InjectedRegistryEntryExtension<($GameEvent)> {

 "arch$holder"(): $Holder<($GameEvent)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedGameEventExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedGameEventExtension$Type = ($InjectedGameEventExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedGameEventExtension_ = $InjectedGameEventExtension$Type;
}}
declare module "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$MenuAccess, $MenuAccess$Type} from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

export interface $MenuRegistry$ScreenFactory<H extends $AbstractContainerMenu, S extends ($Screen) & ($MenuAccess<(H)>)> {

 "create"(arg0: H, arg1: $Inventory$Type, arg2: $Component$Type): S

(arg0: H, arg1: $Inventory$Type, arg2: $Component$Type): S
}

export namespace $MenuRegistry$ScreenFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuRegistry$ScreenFactory$Type<H, S> = ($MenuRegistry$ScreenFactory<(H), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuRegistry$ScreenFactory_<H, S> = $MenuRegistry$ScreenFactory$Type<(H), (S)>;
}}
declare module "packages/dev/architectury/hooks/level/biome/$GenerationProperties" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$GenerationStep$Carving, $GenerationStep$Carving$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $GenerationProperties {

 "getFeatures"(arg0: $GenerationStep$Decoration$Type): $Iterable<($Holder<($PlacedFeature)>)>
 "getFeatures"(): $List<($Iterable<($Holder<($PlacedFeature)>)>)>
 "getCarvers"(arg0: $GenerationStep$Carving$Type): $Iterable<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}

export namespace $GenerationProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationProperties$Type = ($GenerationProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationProperties_ = $GenerationProperties$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedEntityTypeExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<($EntityType<(any)>)> {

 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedEntityTypeExtension$Type = ($InjectedEntityTypeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedEntityTypeExtension_ = $InjectedEntityTypeExtension$Type;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public "getTickDelay"(level: $LevelReader$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSame"(fluid: $Fluid$Type): boolean
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Type = ($ArchitecturyFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid_ = $ArchitecturyFlowingFluid$Type;
}}
declare module "packages/dev/architectury/event/$EventResult" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $EventResult {


public static "interruptTrue"(): $EventResult
public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "interrupt"(value: boolean): $EventResult
public "isTrue"(): boolean
public "interruptsFurtherEvaluation"(): boolean
public static "interruptFalse"(): $EventResult
public static "pass"(): $EventResult
public "isFalse"(): boolean
public static "interruptDefault"(): $EventResult
public "asMinecraft"(): $InteractionResult
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$Type = ($EventResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult_ = $EventResult$Type;
}}
declare module "packages/dev/architectury/utils/$Env" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Dist, $Dist$Type} from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $Env extends $Enum<($Env)> {
static readonly "CLIENT": $Env
static readonly "SERVER": $Env


public static "values"(): ($Env)[]
public static "valueOf"(name: string): $Env
public "toPlatform"(): $Dist
public static "fromPlatform"(type: any): $Env
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Env$Type = (("server") | ("client")) | ($Env);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Env_ = $Env$Type;
}}
declare module "packages/dev/architectury/event/$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Event<T> {

 "isRegistered"(arg0: T): boolean
 "register"(arg0: T): void
 "invoker"(): T
 "unregister"(arg0: T): void
 "clearListeners"(): void
}

export namespace $Event {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$Type<(T)>;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes"
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid$Source extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Source$Type = ($ArchitecturyFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Source_ = $ArchitecturyFlowingFluid$Source$Type;
}}
declare module "packages/dev/architectury/event/$EventActor" {
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"

export interface $EventActor<T> {

 "act"(arg0: T): $EventResult

(arg0: T): $EventResult
}

export namespace $EventActor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventActor$Type<T> = ($EventActor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventActor_<T> = $EventActor$Type<(T)>;
}}
declare module "packages/dev/architectury/utils/value/$IntValue" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import {$Value, $Value$Type} from "packages/dev/architectury/utils/value/$Value"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export interface $IntValue extends $Value<(integer)>, $IntSupplier, $IntConsumer {

 "get"(): integer
 "getAsInt"(): integer
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(integer)>
 "andThen"(arg0: $IntConsumer$Type): $IntConsumer
 "accept"(arg0: integer): void
}

export namespace $IntValue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntValue$Type = ($IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntValue_ = $IntValue$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$ClimateProperties" {
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$Type} from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export interface $ClimateProperties {

 "hasPrecipitation"(): boolean
 "getDownfall"(): float
 "getTemperature"(): float
 "getTemperatureModifier"(): $Biome$TemperatureModifier
}

export namespace $ClimateProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateProperties$Type = ($ClimateProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateProperties_ = $ClimateProperties$Type;
}}
declare module "packages/dev/architectury/impl/$ItemPropertiesExtensionImpl" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"

export interface $ItemPropertiesExtensionImpl {

 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
 "arch$getTab"(): $CreativeModeTab
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertiesExtensionImpl$Type = ($ItemPropertiesExtensionImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPropertiesExtensionImpl_ = $ItemPropertiesExtensionImpl$Type;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ArchitecturyFluidAttributes {

 "getBlock"(): $LiquidBlock
 "getName"(): $Component
 "getName"(stack: $FluidStack$Type): $Component
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$Type): integer
 "getEmptySound"(): $SoundEvent
 "getEmptySound"(stack: $FluidStack$Type): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $SoundEvent
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getColor"(stack: $FluidStack$Type): integer
 "getColor"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
 "getColor"(): integer
 "canConvertToSource"(): boolean
 "getFillSound"(): $SoundEvent
 "getFillSound"(stack: $FluidStack$Type): $SoundEvent
 "getFillSound"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $SoundEvent
 "getTranslationKey"(arg0: $FluidStack$Type): string
 "getTranslationKey"(): string
 "getExplosionResistance"(): float
 "getViscosity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getViscosity"(stack: $FluidStack$Type): integer
 "getViscosity"(): integer
 "getDensity"(): integer
 "getDensity"(stack: $FluidStack$Type): integer
 "getDensity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "isLighterThanAir"(stack: $FluidStack$Type): boolean
 "isLighterThanAir"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): boolean
 "getTemperature"(): integer
 "getTemperature"(stack: $FluidStack$Type): integer
 "getTemperature"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getRarity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $Rarity
 "getRarity"(stack: $FluidStack$Type): $Rarity
 "getRarity"(): $Rarity
 "getFlowingTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
 "getSourceTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getSourceTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getLuminosity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getLuminosity"(stack: $FluidStack$Type): integer
 "getLuminosity"(): integer
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$Type): integer
 "getFlowingFluid"(): $Fluid
 "getSourceFluid"(): $Fluid
 "getTickDelay"(): integer
 "getTickDelay"(arg0: $LevelReader$Type): integer
 "getBucketItem"(): $Item
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributes$Type = ($ArchitecturyFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFluidAttributes_ = $ArchitecturyFluidAttributes$Type;
}}
declare module "packages/dev/architectury/registry/registries/$Registrar" {
import {$RegistrySupplier, $RegistrySupplier$Type} from "packages/dev/architectury/registry/registries/$RegistrySupplier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $Registrar<T> extends $Iterable<(T)> {

 "get"(arg0: $ResourceLocation$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(E)>): $RegistrySupplier<(E)>
 "listen"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<(T)>): void
 "listen"<R extends T>(supplier: $RegistrySupplier$Type<(R)>, callback: $Consumer$Type<(R)>): void
 "key"(): $ResourceKey<(any)>
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "delegate"(arg0: $ResourceLocation$Type): $RegistrySupplier<(T)>
 "getIds"(): $Set<($ResourceLocation)>
 "getRawId"(arg0: T): integer
 "byRawId"(arg0: integer): T
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Registrar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registrar$Type<T> = ($Registrar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registrar_<T> = $Registrar$Type<(T)>;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedFluidExtension" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<($Fluid)> {

 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedFluidExtension$Type = ($InjectedFluidExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedFluidExtension_ = $InjectedFluidExtension$Type;
}}
declare module "packages/dev/architectury/utils/value/$Value" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Value<T> extends $Supplier<(T)>, $Consumer<(T)> {

 "get"(): T
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(T)>
}

export namespace $Value {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$Type<T> = ($Value<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Value_<T> = $Value$Type<(T)>;
}}
declare module "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment {

 "architectury$attachLevel"(arg0: $LevelAccessor$Type): void
 "architectury$getAttachedLevel"(): $LevelAccessor
}

export namespace $EventHandlerImplCommon$LevelEventAttachment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerImplCommon$LevelEventAttachment$Type = ($EventHandlerImplCommon$LevelEventAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandlerImplCommon$LevelEventAttachment_ = $EventHandlerImplCommon$LevelEventAttachment$Type;
}}
declare module "packages/dev/architectury/registry/registries/$DeferredRegister" {
import {$RegistrySupplier, $RegistrySupplier$Type} from "packages/dev/architectury/registry/registries/$RegistrySupplier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegistrarManager, $RegistrarManager$Type} from "packages/dev/architectury/registry/registries/$RegistrarManager"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export class $DeferredRegister<T> implements $Iterable<($RegistrySupplier<(T)>)> {


public "iterator"(): $Iterator<($RegistrySupplier<(T)>)>
public "register"<R extends T>(id: $ResourceLocation$Type, supplier: $Supplier$Type<(any)>): $RegistrySupplier<(R)>
public "register"(): void
public "register"<R extends T>(id: string, supplier: $Supplier$Type<(any)>): $RegistrySupplier<(R)>
public static "create"<T>(modId: string, key: $ResourceKey$Type<($Registry$Type<(T)>)>): $DeferredRegister<(T)>
public "getRegistrar"(): $Registrar<(T)>
public "getRegistrarManager"(): $RegistrarManager
public "spliterator"(): $Spliterator<($RegistrySupplier<(T)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$RegistrySupplier<(T)>>;
get "registrar"(): $Registrar<(T)>
get "registrarManager"(): $RegistrarManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Type<T> = ($DeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister_<T> = $DeferredRegister$Type<(T)>;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedItemExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<($Item)> {

 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemExtension$Type = ($InjectedItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemExtension_ = $InjectedItemExtension$Type;
}}
declare module "packages/dev/architectury/registry/registries/options/$RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {

}

export namespace $RegistrarOption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarOption$Type = ($RegistrarOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarOption_ = $RegistrarOption$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$BiomeProperties" {
import {$SpawnProperties, $SpawnProperties$Type} from "packages/dev/architectury/hooks/level/biome/$SpawnProperties"
import {$ClimateProperties, $ClimateProperties$Type} from "packages/dev/architectury/hooks/level/biome/$ClimateProperties"
import {$EffectsProperties, $EffectsProperties$Type} from "packages/dev/architectury/hooks/level/biome/$EffectsProperties"
import {$GenerationProperties, $GenerationProperties$Type} from "packages/dev/architectury/hooks/level/biome/$GenerationProperties"

export interface $BiomeProperties {

 "getGenerationProperties"(): $GenerationProperties
 "getSpawnProperties"(): $SpawnProperties
 "getClimateProperties"(): $ClimateProperties
 "getEffectsProperties"(): $EffectsProperties
}

export namespace $BiomeProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeProperties$Type = ($BiomeProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeProperties_ = $BiomeProperties$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedBlockExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<($Block)> {

 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBlockExtension$Type = ($InjectedBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBlockExtension_ = $InjectedBlockExtension$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedBucketItemExtension" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"

export interface $InjectedBucketItemExtension {

 "arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBucketItemExtension$Type = ($InjectedBucketItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBucketItemExtension_ = $InjectedBucketItemExtension$Type;
}}
declare module "packages/dev/architectury/event/events/common/$ChatEvent$ChatComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $ChatEvent$ChatComponent {

 "get"(): $Component
 "set"(arg0: $Component$Type): void
}

export namespace $ChatEvent$ChatComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatEvent$ChatComponent$Type = ($ChatEvent$ChatComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatEvent$ChatComponent_ = $ChatEvent$ChatComponent$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedRegistryEntryExtension<T> {

 "arch$holder"(): $Holder<(T)>
 "arch$registryName"(): $ResourceLocation

(): $Holder<(T)>
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedRegistryEntryExtension$Type<T> = ($InjectedRegistryEntryExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedRegistryEntryExtension_<T> = $InjectedRegistryEntryExtension$Type<(T)>;
}}
declare module "packages/dev/architectury/core/item/$ArchitecturyBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArchitecturyBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(fluid: $Supplier$Type<(any)>, properties: $Item$Properties$Type)

public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public "getContainedFluid"(): $Fluid
get "containedFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyBucketItem$Type = ($ArchitecturyBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyBucketItem_ = $ArchitecturyBucketItem$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedItemPropertiesExtension" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $InjectedItemPropertiesExtension {

 "arch$tab"(tab: $CreativeModeTab$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$Type<($CreativeModeTab$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$Type<($CreativeModeTab$Type)>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemPropertiesExtension$Type = ($InjectedItemPropertiesExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemPropertiesExtension_ = $InjectedItemPropertiesExtension$Type;
}}
declare module "packages/dev/architectury/registry/level/biome/$BiomeModifications$BiomeContext" {
import {$BiomeProperties, $BiomeProperties$Type} from "packages/dev/architectury/hooks/level/biome/$BiomeProperties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $BiomeModifications$BiomeContext {

 "getKey"(): $Optional<($ResourceLocation)>
 "getProperties"(): $BiomeProperties
 "hasTag"(arg0: $TagKey$Type<($Biome$Type)>): boolean
}

export namespace $BiomeModifications$BiomeContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifications$BiomeContext$Type = ($BiomeModifications$BiomeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifications$BiomeContext_ = $BiomeModifications$BiomeContext$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$EffectsProperties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export interface $EffectsProperties {

 "getWaterColor"(): integer
 "getFogColor"(): integer
 "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
 "getFoliageColorOverride"(): $OptionalInt
 "getGrassColorOverride"(): $OptionalInt
 "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
 "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
 "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
 "getWaterFogColor"(): integer
 "getBackgroundMusic"(): $Optional<($Music)>
 "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
 "getSkyColor"(): integer
}

export namespace $EffectsProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsProperties$Type = ($EffectsProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectsProperties_ = $EffectsProperties$Type;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrySupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegistrarManager, $RegistrarManager$Type} from "packages/dev/architectury/registry/registries/$RegistrarManager"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrySupplier<T> extends $DeferredSupplier<(T)> {

 "listen"(callback: $Consumer$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}

export namespace $RegistrySupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySupplier$Type<T> = ($RegistrySupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrySupplier_<T> = $RegistrySupplier$Type<(T)>;
}}
