declare module "packages/org/moddingx/libx/base/$BlockBase" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$CreativeTabItemProvider, $CreativeTabItemProvider$Type} from "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider"
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"
import {$SetupContext, $SetupContext$Type} from "packages/org/moddingx/libx/registration/$SetupContext"
import {$Registerable, $Registerable$Type} from "packages/org/moddingx/libx/registration/$Registerable"

export class $BlockBase extends $Block implements $Registerable, $CreativeTabItemProvider {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $ModX$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $ModX$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $Item$Properties$Type)

public "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
public "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "makeCreativeTabStacks"(): $Stream<($ItemStack)>
public "initializeItemClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "registerClient"(arg0: $SetupContext$Type): void
public "registerCommon"(arg0: $SetupContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$Type = ($BlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase_ = $BlockBase$Type;
}}
declare module "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EmptyRecipe implements $Recipe<($Container)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($EmptyRecipe)>

constructor(arg0: $ResourceLocation$Type)

public static "empty"(arg0: $ResourceLocation$Type): $FinishedRecipe
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
get "special"(): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyRecipe$Type = ($EmptyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyRecipe_ = $EmptyRecipe$Type;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable" {
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$Registerable$TrackingCollector, $Registerable$TrackingCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector"
import {$SetupContext, $SetupContext$Type} from "packages/org/moddingx/libx/registration/$SetupContext"
import {$Registerable$EntryCollector, $Registerable$EntryCollector$Type} from "packages/org/moddingx/libx/registration/$Registerable$EntryCollector"

export interface $Registerable {

 "registerClient"(arg0: $SetupContext$Type): void
 "registerCommon"(arg0: $SetupContext$Type): void
 "registerAdditional"(arg0: $RegistrationContext$Type, arg1: $Registerable$EntryCollector$Type): void
 "initTracking"(arg0: $RegistrationContext$Type, arg1: $Registerable$TrackingCollector$Type): void
}

export namespace $Registerable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$Type = ($Registerable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable_ = $Registerable$Type;
}}
declare module "packages/org/moddingx/libx/base/$BlockBase$BaseBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$CreativeTabItemProvider, $CreativeTabItemProvider$Type} from "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockBase, $BlockBase$Type} from "packages/org/moddingx/libx/base/$BlockBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockBase$BaseBlockItem extends $BlockItem implements $CreativeTabItemProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $BlockBase$Type, arg1: $Block$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "makeCreativeTabStacks"(): $Stream<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$BaseBlockItem$Type = ($BlockBase$BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase$BaseBlockItem_ = $BlockBase$BaseBlockItem$Type;
}}
declare module "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EmptyRecipe, $EmptyRecipe$Type} from "packages/org/moddingx/libx/impl/crafting/recipe/$EmptyRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EmptyRecipe$Serializer implements $RecipeSerializer<($EmptyRecipe)> {
static readonly "INSTANCE": $EmptyRecipe$Serializer


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EmptyRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EmptyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EmptyRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EmptyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyRecipe$Serializer$Type = ($EmptyRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyRecipe$Serializer_ = $EmptyRecipe$Serializer$Type;
}}
declare module "packages/org/moddingx/libx/mod/$ModX" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModX {
readonly "modid": string


public "resource"(arg0: string): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModX$Type = ($ModX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModX_ = $ModX$Type;
}}
declare module "packages/org/moddingx/libx/registration/$RegistrationContext" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModXRegistration, $ModXRegistration$Type} from "packages/org/moddingx/libx/mod/$ModXRegistration"

export class $RegistrationContext {

constructor(arg0: $ModXRegistration$Type, arg1: $ResourceLocation$Type, arg2: $ResourceKey$Type<(any)>)

public "key"(): $Optional<($ResourceKey<(any)>)>
public "mod"(): $ModXRegistration
public "id"(): $ResourceLocation
public "registry"(): $Optional<($ResourceKey<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationContext$Type = ($RegistrationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationContext_ = $RegistrationContext$Type;
}}
declare module "packages/org/moddingx/libx/creativetab/$CreativeTabItemProvider" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabItemProvider {

 "makeCreativeTabStacks"(): $Stream<($ItemStack)>

(): $Stream<($ItemStack)>
}

export namespace $CreativeTabItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabItemProvider$Type = ($CreativeTabItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabItemProvider_ = $CreativeTabItemProvider$Type;
}}
declare module "packages/org/moddingx/libx/mod/$ModXRegistration" {
import {$ModX, $ModX$Type} from "packages/org/moddingx/libx/mod/$ModX"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $ModXRegistration extends $ModX {
readonly "modid": string


public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string, arg2: T): void
public "addRegistrationHandler"(arg0: $Runnable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModXRegistration$Type = ($ModXRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModXRegistration_ = $ModXRegistration$Type;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable$TrackingCollector" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export interface $Registerable$TrackingCollector {

 "run"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $Consumer$Type<(T)>): void
 "track"(arg0: $IForgeRegistry$Type<(any)>, arg1: $Field$Type): void
 "runNamed"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: string, arg2: $Consumer$Type<(T)>): void
 "trackNamed"(arg0: $IForgeRegistry$Type<(any)>, arg1: string, arg2: $Field$Type): void
}

export namespace $Registerable$TrackingCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$TrackingCollector$Type = ($Registerable$TrackingCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable$TrackingCollector_ = $Registerable$TrackingCollector$Type;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $EnumArgument2<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "parse"(arg0: $StringReader$Type): T
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $EnumArgument2<(R)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Type<T> = ($EnumArgument2<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2_<T> = $EnumArgument2$Type<(T)>;
}}
declare module "packages/org/moddingx/libx/registration/$SetupContext" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegistrationContext, $RegistrationContext$Type} from "packages/org/moddingx/libx/registration/$RegistrationContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ModXRegistration, $ModXRegistration$Type} from "packages/org/moddingx/libx/mod/$ModXRegistration"

export class $SetupContext extends $RegistrationContext {

constructor(arg0: $RegistrationContext$Type, arg1: $Consumer$Type<($Runnable$Type)>)
constructor(arg0: $ModXRegistration$Type, arg1: $ResourceLocation$Type, arg2: $ResourceKey$Type<(any)>, arg3: $Consumer$Type<($Runnable$Type)>)

public "enqueue"(arg0: $Runnable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetupContext$Type = ($SetupContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetupContext_ = $SetupContext$Type;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2$Info$Template" {
import {$EnumArgument2, $EnumArgument2$Type} from "packages/org/moddingx/libx/command/$EnumArgument2"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EnumArgument2$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument2<(any)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $EnumArgument2<(any)>
public "type"(): $ArgumentTypeInfo<($EnumArgument2<(any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Info$Template$Type = ($EnumArgument2$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2$Info$Template_ = $EnumArgument2$Info$Template$Type;
}}
declare module "packages/org/moddingx/libx/command/$EnumArgument2$Info" {
import {$EnumArgument2$Info$Template, $EnumArgument2$Info$Template$Type} from "packages/org/moddingx/libx/command/$EnumArgument2$Info$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EnumArgument2, $EnumArgument2$Type} from "packages/org/moddingx/libx/command/$EnumArgument2"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $EnumArgument2$Info implements $ArgumentTypeInfo<($EnumArgument2<(any)>), ($EnumArgument2$Info$Template)> {
static readonly "INSTANCE": $EnumArgument2$Info


public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $EnumArgument2$Info$Template
public "unpack"(arg0: $EnumArgument2$Type<(any)>): $EnumArgument2$Info$Template
public "serializeToNetwork"(arg0: $EnumArgument2$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "serializeToJson"(arg0: $EnumArgument2$Info$Template$Type, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument2$Info$Type = ($EnumArgument2$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument2$Info_ = $EnumArgument2$Info$Type;
}}
declare module "packages/org/moddingx/libx/registration/$Registerable$EntryCollector" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $Registerable$EntryCollector {

 "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: T): void
 "registerNamed"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string, arg2: T): void
}

export namespace $Registerable$EntryCollector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registerable$EntryCollector$Type = ($Registerable$EntryCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registerable$EntryCollector_ = $Registerable$EntryCollector$Type;
}}
