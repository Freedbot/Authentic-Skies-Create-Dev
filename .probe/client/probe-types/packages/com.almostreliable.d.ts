declare module "packages/com/almostreliable/merequester/mixin/accessors/$SlotMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotMixin {

 "merequester$setY"(arg0: integer): void
 "merequester$setX"(arg0: integer): void
}

export namespace $SlotMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotMixin$Type = ($SlotMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotMixin_ = $SlotMixin$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$StorageManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IStorageWatcherNode, $IStorageWatcherNode$Type} from "packages/appeng/api/networking/storage/$IStorageWatcherNode"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$TagSerializable, $TagSerializable$Type} from "packages/com/almostreliable/merequester/platform/$TagSerializable"
import {$StorageManager$Storage, $StorageManager$Storage$Type} from "packages/com/almostreliable/merequester/requester/$StorageManager$Storage"
import {$IStackWatcher, $IStackWatcher$Type} from "packages/appeng/api/networking/$IStackWatcher"

export class $StorageManager implements $IStorageWatcherNode, $TagSerializable<($CompoundTag)> {


public "get"(slot: integer): $StorageManager$Storage
public "deserialize"(tag: $CompoundTag$Type): void
public "updateWatcher"(newWatcher: $IStackWatcher$Type): void
public "onStackChange"(key: $AEKey$Type, amount: long): void
public "computeAmountToCraft"(slot: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageManager$Type = ($StorageManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageManager_ = $StorageManager$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentTableServerEventJS$Data, $EnchantmentTableServerEventJS$Data$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $EnchantmentMenuProcess$Type)

public "getPosition"(): $BlockPos
public "get"(arg0: integer): $EnchantmentTableServerEventJS$Data
public "getSize"(): integer
public "itemWasChanged"(): boolean
public "setItem"(arg0: $ItemStack$Type): void
get "position"(): $BlockPos
get "size"(): integer
set "item"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$Requests" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TagSerializable, $TagSerializable$Type} from "packages/com/almostreliable/merequester/platform/$TagSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemTransfer, $ItemTransfer$Type} from "packages/appeng/api/inventories/$ItemTransfer"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$RequestHost, $RequestHost$Type} from "packages/com/almostreliable/merequester/requester/abstraction/$RequestHost"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Requests$Request, $Requests$Request$Type} from "packages/com/almostreliable/merequester/requester/$Requests$Request"
import {$GenericInternalInventory, $GenericInternalInventory$Type} from "packages/appeng/api/behaviors/$GenericInternalInventory"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $Requests implements $MEStorage, $GenericInternalInventory, $InternalInventory, $TagSerializable<($CompoundTag)> {

constructor(host: $RequestHost$Type)
constructor()

public "getCapacity"(keyType: $AEKeyType$Type): long
public "getDescription"(): $Component
public "get"(index: integer): $Requests$Request
public "extract"(index: integer, key: $AEKey$Type, amount: long, mode: $Actionable$Type): long
public "insert"(index: integer, key: $AEKey$Type, amount: long, mode: $Actionable$Type): long
public "size"(): integer
public "getKey"(index: integer): $AEKey
public "getStack"(index: integer): $GenericStack
public "canInsert"(): boolean
public "setStack"(index: integer, stack: $GenericStack$Type): void
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "deserialize"(tag: $CompoundTag$Type): void
public "serialize"(): $CompoundTag
public "setItemDirect"(slot: integer, stack: $ItemStack$Type): void
public "onChange"(): void
public "endBatch"(): void
public "beginBatch"(): void
public "isAllowed"(key: $AEKey$Type): boolean
public "endBatchSuppressed"(): void
public "getMaxAmount"(key: $AEKey$Type): long
public "canExtract"(): boolean
public "getAmount"(index: integer): long
public "getStackInSlot"(slot: integer): $ItemStack
public "firstAvailableIndex"(): integer
public "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
public "isPreferredStorageFor"(arg0: $AEKey$Type, arg1: $IActionSource$Type): boolean
public "getAvailableStacks"(): $KeyCounter
public "getAvailableStacks"(arg0: $KeyCounter$Type): void
public static "checkPreconditions"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "toItemHandler"(): $IItemHandler
public "toContainer"(): $Container
public "getSlotInv"(arg0: integer): $InternalInventory
public static "wrapExternal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ItemTransfer
public static "wrapExternal"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ItemTransfer
public "addItems"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$Type): $ItemStack
public "simulateAdd"(arg0: $ItemStack$Type): $ItemStack
public "simulateRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "removeSimilarItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "mayAllowInsertion"(): boolean
public "removeItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "getRedstoneSignal"(): integer
public "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
public "sendChangeNotification"(arg0: integer): void
public "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "description"(): $Component
get "availableStacks"(): $KeyCounter
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Requests$Type = ($Requests);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Requests_ = $Requests$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $CompoundTag$Type): void
public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "get"(arg0: $BlockPos$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$PlayerEnchantEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$EnchantmentTableServerEventJS, $EnchantmentTableServerEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $PlayerEnchantEventJS extends $EnchantmentTableServerEventJS {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $EnchantmentMenuProcess$Type)

public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getCosts"(): integer
public "getClickedButton"(): integer
get "enchantments"(): $List<($EnchantmentInstance)>
get "enchantmentIds"(): $List<($ResourceLocation)>
get "costs"(): integer
get "clickedButton"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/potion/$PotionBrewingRegisterEvent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBrewingRegisterEvent extends $EventJS {

constructor()

public "addCustomBrewing"(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): void
public "removeContainer"(arg0: $Ingredient$Type): void
public "removeByPotion"(arg0: $Potion$Type, arg1: $Ingredient$Type, arg2: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type, arg2: $Potion$Type): void
public "addContainerRecipe"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "validateContainer"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$WandererTradingEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"

export class $WandererTradingEventJS extends $EventJS {

constructor(arg0: $Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)

public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
public "addTrade"(arg0: integer, arg1: ($TradeItem$Type)[], arg2: $TradeItem$Type): $SimpleTrade
public "removeTrades"(arg0: $TradeFilter$Type): void
public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$Type): void
public "removeModdedTrades"(arg0: integer): void
public "removeVanillaTrades"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/status/$RequestStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RequestStatus extends $Enum<($RequestStatus)> {
static readonly "IDLE": $RequestStatus
static readonly "MISSING": $RequestStatus
static readonly "REQUEST": $RequestStatus
static readonly "PLAN": $RequestStatus
static readonly "LINK": $RequestStatus
static readonly "EXPORT": $RequestStatus


public static "values"(): ($RequestStatus)[]
public static "valueOf"(name: string): $RequestStatus
public "translateToClient"(): $RequestStatus
public "locksRequest"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestStatus$Type = (("request") | ("idle") | ("missing") | ("link") | ("plan") | ("export")) | ($RequestStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestStatus_ = $RequestStatus$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$FilterAvailableEnchantmentsEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterAvailableEnchantmentsEventJS extends $EventJS {

constructor(arg0: $List$Type<($EnchantmentInstance$Type)>, arg1: integer, arg2: $ItemStack$Type)

public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getItem"(): $ItemStack
public "addWithLevel"(arg0: $Enchantment$Type, arg1: integer): void
public "getPowerLevel"(): integer
public "getEnchantmentInstances"(): $List<($EnchantmentInstance)>
public "printEnchantmentInstances"(): void
get "item"(): $ItemStack
get "powerLevel"(): integer
get "enchantmentInstances"(): $List<($EnchantmentInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAvailableEnchantmentsEventJS$Type = ($FilterAvailableEnchantmentsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAvailableEnchantmentsEventJS_ = $FilterAvailableEnchantmentsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$Type)[])

public "item"(arg0: $Item$Type): $PotionTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "noBrewablePotion"(): $PotionTrade
public "onlyBrewablePotion"(): $PotionTrade
public "potions"(...arg0: ($Potion$Type)[]): $PotionTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "ForgeBasic": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$Type = (("treasuremapforemeralds") | ("dyedarmorforemeralds") | ("enchanteditemforemeralds") | ("tippedarrowforitemsandemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic") | ("emeraldforitems") | ("itemsandemeraldstoitems") | ("suspiciousstewforemeralds") | ("itemsforemeralds") | ("enchantbookforemeralds")) | ($TradeTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$RequesterBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$RequesterBlockEntity, $RequesterBlockEntity$Type} from "packages/com/almostreliable/merequester/requester/$RequesterBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RequesterBlock extends $AEBaseEntityBlock<($RequesterBlockEntity)> {
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

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "onActivated"(level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, stack: $ItemStack$Type, hit: $BlockHitResult$Type): $InteractionResult
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequesterBlock$Type = ($RequesterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequesterBlock_ = $RequesterBlock$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapPosInfo extends $Record {

constructor(pos: $BlockPos$Type, name: $Component$Type)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Type = ($MapPosInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo_ = $MapPosInfo$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureLoadEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplateAccess, $StructureTemplateAccess$Type} from "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess"
import {$PaletteWrapper, $PaletteWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityInfoWrapper, $EntityInfoWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $StructureLoadEventJS extends $EventJS {

constructor(arg0: $StructureTemplateAccess$Type, arg1: $ResourceLocation$Type)

public static "invoke"(arg0: $StructureTemplate$Type, arg1: $ResourceLocation$Type): void
public "getId"(): string
public "getEntities"(): $EntityInfoWrapper
public "getPalette"(arg0: integer): $PaletteWrapper
public "forEachPalettes"(arg0: $Consumer$Type<($PaletteWrapper$Type)>): void
public "getStructureSize"(): $Vec3i
public "getEntitiesSize"(): integer
public "removePalette"(arg0: integer): void
public "getPalettesSize"(): integer
get "id"(): string
get "entities"(): $EntityInfoWrapper
get "structureSize"(): $Vec3i
get "entitiesSize"(): integer
get "palettesSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/$MoreJSBinding" {
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeightedList$Builder, $WeightedList$Builder$Type} from "packages/com/almostreliable/morejs/util/$WeightedList$Builder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $MoreJSBinding {

constructor()

public static "range"(arg0: any): $IntRange
public static "findStructure"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "findBiome"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "weightedList"(): $WeightedList$Builder<(any)>
public static "ofTradeItem"(arg0: any): $TradeItem
public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "ofTradeFilter"(arg0: any): $TradeFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeFilter" {
import {$TriConsumer, $TriConsumer$Type} from "packages/com/almostreliable/morejs/util/$TriConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeTypes, $TradeTypes$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeTypes"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $TradeFilter {

constructor(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type)

public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $TradeTypes$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $TradeTypes$Type): boolean
public "onMatch"(arg0: $TriConsumer$Type<($ItemStack$Type), ($ItemStack$Type), ($ItemStack$Type)>): void
public "setProfessions"(arg0: $Set$Type<($VillagerProfession$Type)>): void
public "setTradeTypes"(arg0: $Set$Type<($TradeTypes$Type)>): void
public "matchMerchantLevel"(arg0: integer): boolean
public "matchProfession"(arg0: $VillagerProfession$Type): boolean
public "setSecondCountMatcher"(arg0: $IntRange$Type): void
public "setFirstCountMatcher"(arg0: $IntRange$Type): void
public "setMerchantLevelMatcher"(arg0: $IntRange$Type): void
public "setOutputCountMatcher"(arg0: $IntRange$Type): void
public "matchType"(arg0: $TradeTypes$Type): boolean
set "professions"(value: $Set$Type<($VillagerProfession$Type)>)
set "tradeTypes"(value: $Set$Type<($TradeTypes$Type)>)
set "secondCountMatcher"(value: $IntRange$Type)
set "firstCountMatcher"(value: $IntRange$Type)
set "merchantLevelMatcher"(value: $IntRange$Type)
set "outputCountMatcher"(value: $IntRange$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$Type = ($TradeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $EntityInfoWrapper {

constructor(arg0: $List$Type<($StructureTemplate$StructureEntityInfo$Type)>, arg1: $Vec3i$Type)

public "add"(arg0: $CompoundTag$Type): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuExtension" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export interface $EnchantmentMenuExtension {

 "getMoreJSProcess"(): $EnchantmentMenuProcess
 "getMoreJsEnchantSlots"(): $Container
}

export namespace $EnchantmentMenuExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type = (("attack") | ("keep") | ("ignore")) | ($PiglinPlayerBehaviorEventJS$PiglinBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$ExperiencePlayerEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $ExperiencePlayerEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: integer)

public "getRemainingExperience"(): integer
public "getExperienceProgress"(): float
public "getXpNeededForNextLevel"(): integer
public "setExperienceProgress"(arg0: float): void
public "willLevelUp"(): boolean
public "getTotalExperience"(): integer
public "getExperienceLevel"(): integer
public "setExperienceLevel"(arg0: integer): void
public "setTotalExperience"(arg0: integer): void
public "getAmount"(): integer
public "setAmount"(arg0: integer): void
get "remainingExperience"(): integer
get "experienceProgress"(): float
get "xpNeededForNextLevel"(): integer
set "experienceProgress"(value: float)
get "totalExperience"(): integer
get "experienceLevel"(): integer
set "experienceLevel"(value: integer)
set "totalExperience"(value: integer)
get "amount"(): integer
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateVillagerOffersEventJS" {
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$UpdateAbstractVillagerOffersEventJS, $UpdateAbstractVillagerOffersEventJS$Type} from "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateVillagerOffersEventJS extends $UpdateAbstractVillagerOffersEventJS {

constructor(arg0: $Villager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getProfession"(): $VillagerProfession
public "getVillagerData"(): $VillagerData
public "isProfession"(arg0: $VillagerProfession$Type): boolean
public "getVillagerLevel"(): integer
get "profession"(): $VillagerProfession
get "villagerData"(): $VillagerData
get "villagerLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateVillagerOffersEventJS$Type = ($UpdateVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateVillagerOffersEventJS_ = $UpdateVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess" {
import {$EnchantmentState, $EnchantmentState$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $EnchantmentMenuProcess {

constructor(arg0: $EnchantmentMenu$Type)

public "getState"(): $EnchantmentState
public "setState"(arg0: $EnchantmentState$Type): void
public "setPlayer"(arg0: $Player$Type): void
public "isFreezeBroadcast"(): boolean
public "abortEvent"(arg0: $ItemStack$Type): void
public "getCurrentItem"(): $ItemStack
public "clearEnchantments"(): void
public "matchesCurrentItem"(arg0: $ItemStack$Type): boolean
public "isItemEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "setEnchantments"(arg0: integer, arg1: $List$Type<($EnchantmentInstance$Type)>): void
public "setFreezeBroadcast"(arg0: boolean): void
public "prepareEvent"(arg0: $ItemStack$Type): void
public "getMenu"(): $EnchantmentMenu
public "getPlayer"(): $Player
public "storeItemIsEnchantable"(arg0: boolean, arg1: $ItemStack$Type): boolean
public "setCurrentItem"(arg0: $ItemStack$Type): void
get "state"(): $EnchantmentState
set "state"(value: $EnchantmentState$Type)
set "player"(value: $Player$Type)
get "freezeBroadcast"(): boolean
get "currentItem"(): $ItemStack
set "freezeBroadcast"(value: boolean)
get "menu"(): $EnchantmentMenu
get "player"(): $Player
set "currentItem"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuProcess$Type = ($EnchantmentMenuProcess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuProcess_ = $EnchantmentMenuProcess$Type;
}}
declare module "packages/com/almostreliable/merequester/mixin/accessors/$EditBoxMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EditBoxMixin {

 "merequester$isEditable"(): boolean

(): boolean
}

export namespace $EditBoxMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditBoxMixin$Type = ($EditBoxMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditBoxMixin_ = $EditBoxMixin$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $Item$Type)

public "amount"(arg0: integer): $EnchantedItemTrade
public "amount"(arg0: integer, arg1: integer): $EnchantedItemTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "enchantments"(...arg0: ($Enchantment$Type)[]): $EnchantedItemTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$Type;
}}
declare module "packages/com/almostreliable/merequester/platform/$TagSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $TagSerializable<T extends $Tag> {

 "deserialize"(arg0: T): void
 "serialize"(): T
}

export namespace $TagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagSerializable$Type<T> = ($TagSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagSerializable_<T> = $TagSerializable$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type)

public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$Type): $TreasureMapTrade
public "marker"(arg0: $MapDecoration$Type$Type): $TreasureMapTrade
public static "forStructure"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "noPreview"(): $TreasureMapTrade
public static "forBiome"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$FilterEnchantedTradeEventJS" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"

export class $FilterEnchantedTradeEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $RandomSource$Type, arg2: $List$Type<($Enchantment$Type)>)

public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "isVillager"(): boolean
public "isWanderer"(): boolean
public "printEnchantments"(): void
public "getRandom"(): $RandomSource
public "getEnchantments"(): $List<($Enchantment)>
get "villager"(): boolean
get "wanderer"(): boolean
get "random"(): $RandomSource
get "enchantments"(): $List<($Enchantment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterEnchantedTradeEventJS$Type = ($FilterEnchantedTradeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterEnchantedTradeEventJS_ = $FilterEnchantedTradeEventJS$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$Requests$Request" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$RequestHost, $RequestHost$Type} from "packages/com/almostreliable/merequester/requester/abstraction/$RequestHost"
import {$TagSerializable, $TagSerializable$Type} from "packages/com/almostreliable/merequester/platform/$TagSerializable"
import {$RequestStatus, $RequestStatus$Type} from "packages/com/almostreliable/merequester/requester/status/$RequestStatus"

export class $Requests$Request implements $TagSerializable<($CompoundTag)> {


public "toString"(): string
public "getKey"(): $AEKey
public "getState"(): boolean
public "getIndex"(): integer
public "isDifferent"(clientRequest: $Requests$Request$Type): boolean
public "updateBatch"(batch: long): void
public "updateAmount"(amount: long): void
public "getClientStatus"(): $RequestStatus
public "updateState"(state: boolean): void
public "deserialize"(tag: $CompoundTag$Type): void
public "serialize"(): $CompoundTag
public "isRequesting"(): boolean
public "getAmount"(): long
public "getRequesterReference"(): $RequestHost
public "getBatch"(): long
get "key"(): $AEKey
get "state"(): boolean
get "index"(): integer
get "clientStatus"(): $RequestStatus
get "requesting"(): boolean
get "amount"(): long
get "requesterReference"(): $RequestHost
get "batch"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Requests$Request$Type = ($Requests$Request);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Requests$Request_ = $Requests$Request$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$EntityTeleportsEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TeleportType, $TeleportType$Type} from "packages/com/almostreliable/morejs/features/teleport/$TeleportType"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTeleportsEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$Type)
constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$Type, arg5: $TeleportType$Type)

public "getY"(): double
public "getType"(): $TeleportType
public "getEntity"(): $Entity
public "setY"(arg0: double): void
public "setX"(arg0: double): void
public "getZ"(): double
public "setZ"(arg0: double): void
public "getX"(): double
get "y"(): double
get "type"(): $TeleportType
get "entity"(): $Entity
set "y"(value: double)
set "x"(value: double)
get "z"(): double
set "z"(value: double)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS" {
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type} from "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"

export class $PiglinPlayerBehaviorEventJS extends $PlayerEventJS {

constructor(arg0: $Piglin$Type, arg1: $Player$Type, arg2: $Optional$Type<($Player$Type)>)

public "getPreviousTargetPlayer"(): $Player
public "isIgnoreHoldingCheck"(): boolean
public "isAggressiveAlready"(): boolean
public "ignoreHoldingCheck"(): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type): void
public "getPiglin"(): $Piglin
get "previousTargetPlayer"(): $Player
get "aggressiveAlready"(): boolean
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type)
get "piglin"(): $Piglin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureAfterPlaceEventJS" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$PiecesContainer, $PiecesContainer$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StructureAfterPlaceEventJS extends $LevelEventJS {

constructor(arg0: $Structure$Type, arg1: $WorldGenLevel$Type, arg2: $StructureManager$Type, arg3: $ChunkGenerator$Type, arg4: $RandomSource$Type, arg5: $BoundingBox$Type, arg6: $ChunkPos$Type, arg7: $PiecesContainer$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getRandomSource"(): $RandomSource
public "getWorldGenLevel"(): $WorldGenLevel
public "getPieceType"(arg0: $StructurePieceType$Type): $ResourceLocation
public "getPiecesContainer"(): $PiecesContainer
public "getChunkGenerator"(): $ChunkGenerator
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getGenStep"(): string
public "getChunkPos"(): $ChunkPos
public "getStructure"(): $Structure
public "getStructureManager"(): $StructureManager
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getStructureBoundingBox"(): $BoundingBox
public "getChunkBoundingBox"(): $BoundingBox
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "randomSource"(): $RandomSource
get "worldGenLevel"(): $WorldGenLevel
get "piecesContainer"(): $PiecesContainer
get "chunkGenerator"(): $ChunkGenerator
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "genStep"(): string
get "chunkPos"(): $ChunkPos
get "structure"(): $Structure
get "structureManager"(): $StructureManager
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "structureBoundingBox"(): $BoundingBox
get "chunkBoundingBox"(): $BoundingBox
get "intersectionBoxes"(): $Collection<($BoundingBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructureBlockInfoModification {

 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getNbt"(): $CompoundTag
 "setNbt"(arg0: $CompoundTag$Type): void
 "hasNbt"(): boolean
 "setBlock"(arg0: $ResourceLocation$Type): void
 "setBlock"(arg0: $ResourceLocation$Type, arg1: $Map$Type<(string), (any)>): void
 "setVanillaBlockState"(arg0: $BlockState$Type): void
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/abstraction/$RequestHost" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Requests, $Requests$Type} from "packages/com/almostreliable/merequester/requester/$Requests"

export interface $RequestHost {

 "requestChanged"(arg0: integer): void
 "getTerminalName"(): $Component
 "getRequests"(): $Requests
 "saveChanges"(): void
 "isClientSide"(): boolean
}

export namespace $RequestHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestHost$Type = ($RequestHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestHost_ = $RequestHost$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$OfferModification, $OfferModification$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferModification"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void

(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$Type = ($TransformableTrade$Transformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateAbstractVillagerOffersEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public static "invokeEvent"(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>): void
public "isVillager"(): boolean
public "isWanderer"(): boolean
public "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "deleteAddedOffers"(): void
public "getVillagerData"(): $VillagerData
public "addRandomOffer"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>): $MerchantOffer
public "addRandomOffer"(): $MerchantOffer
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "getAddedOffers"(): $Collection<($MerchantOffer)>
public "getOffers"(): $MerchantOffers
get "villager"(): boolean
get "wanderer"(): boolean
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "villagerData"(): $VillagerData
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
get "addedOffers"(): $Collection<($MerchantOffer)>
get "offers"(): $MerchantOffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateAbstractVillagerOffersEventJS$Type = ($UpdateAbstractVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateAbstractVillagerOffersEventJS_ = $UpdateAbstractVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$StartTradingEventJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Merchant, $Merchant$Type} from "packages/net/minecraft/world/item/trading/$Merchant"
import {$OfferExtension, $OfferExtension$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferExtension"

export class $StartTradingEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: $Merchant$Type)

public "getMerchant"(): $Merchant
public "forEachOffers"(arg0: $BiConsumer$Type<($OfferExtension$Type), (integer)>): void
get "merchant"(): $Merchant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$Type)

public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $OfferExtension {

 "setPriceMultiplier"(arg0: float): void
 "isRewardingExp"(): boolean
 "setRewardExp"(arg0: boolean): void
 "getFirstInput"(): $ItemStack
 "setSecondInput"(arg0: $ItemStack$Type): void
 "getSecondInput"(): $ItemStack
 "setFirstInput"(arg0: $ItemStack$Type): void
 "setVillagerExperience"(arg0: integer): void
 "setDemand"(arg0: integer): void
 "getOutput"(): $ItemStack
 "setDisabled"(arg0: boolean): void
 "setOutput"(arg0: $ItemStack$Type): void
 "setMaxUses"(arg0: integer): void
 "isDisabled"(): boolean
 "replaceEmeralds"(arg0: $Item$Type): void
 "replaceItems"(arg0: $Ingredient$Type, arg1: $ItemStack$Type): void
}

export namespace $OfferExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$StorageManager$Storage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$TagSerializable, $TagSerializable$Type} from "packages/com/almostreliable/merequester/platform/$TagSerializable"

export class $StorageManager$Storage implements $TagSerializable<($CompoundTag)> {

constructor()

public "getKey"(): $AEKey
public "compute"(inserted: long): boolean
public "deserialize"(tag: $CompoundTag$Type): void
public "setTotalAmount"(totalAmount: long): void
public "getKnownAmount"(): long
public "getBufferAmount"(): long
get "key"(): $AEKey
set "totalAmount"(value: long)
get "knownAmount"(): long
get "bufferAmount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageManager$Storage$Type = ($StorageManager$Storage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageManager$Storage_ = $StorageManager$Storage$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList$Builder" {
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
public "build"(): $WeightedList<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferModification" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OfferModification {

constructor(arg0: $MerchantOffer$Type)

public "getMerchantOffer"(): $MerchantOffer
public "getOutput"(): $ItemStack
public "getMaxUses"(): integer
public "getFirstInput"(): $ItemStack
public "setFirstInput"(arg0: $ItemStack$Type): void
public "getSecondInput"(): $ItemStack
public "setSecondInput"(arg0: $ItemStack$Type): void
public "setPriceMultiplier"(arg0: float): void
public "isRewardingExp"(): boolean
public "setRewardExp"(arg0: boolean): void
public "setDemand"(arg0: integer): void
public "getPriceMultiplier"(): float
public "setOutput"(arg0: $ItemStack$Type): void
public "setMaxUses"(arg0: integer): void
public "getDemand"(): integer
public "getVillagerExperience"(): integer
public "setVillagerExperience"(arg0: integer): void
get "merchantOffer"(): $MerchantOffer
get "output"(): $ItemStack
get "maxUses"(): integer
get "firstInput"(): $ItemStack
set "firstInput"(value: $ItemStack$Type)
get "secondInput"(): $ItemStack
set "secondInput"(value: $ItemStack$Type)
set "priceMultiplier"(value: float)
get "rewardingExp"(): boolean
set "rewardExp"(value: boolean)
set "demand"(value: integer)
get "priceMultiplier"(): float
set "output"(value: $ItemStack$Type)
set "maxUses"(value: integer)
get "demand"(): integer
get "villagerExperience"(): integer
set "villagerExperience"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferModification$Type = ($OfferModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferModification_ = $OfferModification$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StructureTemplateAccess {

 "getBorderSize"(): $Vec3i
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$IntRange" {
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "test"(arg0: integer): boolean
public static "all"(): $IntRange
public "getMin"(): integer
public "getMax"(): integer
public "getRandom"(arg0: $RandomSource$Type): integer
public "or"(arg0: $IntPredicate$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$Type): $IntPredicate
get "min"(): integer
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider" {
import {$MapPosInfo, $MapPosInfo$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MapPosInfo$Provider {

 "apply"(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo

(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo
}

export namespace $MapPosInfo$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Provider$Type = ($MapPosInfo$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo$Provider_ = $MapPosInfo$Provider$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$Type} from "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerTradingEventJS extends $EventJS {

constructor(arg0: $Map$Type<($VillagerProfession$Type), ($Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)>)

public "getTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $VillagerProfession$Type, arg1: integer, arg2: T): T
public "addTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: ($TradeItem$Type)[], arg3: $TradeItem$Type): $SimpleTrade
public "removeTrades"(arg0: $TradeFilter$Type): void
public "addCustomTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: $TransformableTrade$Transformer$Type): void
public "forEachTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type, arg2: $Consumer$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$Type): void
public "removeModdedTrades"(): void
public "removeModdedTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeVanillaTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeVanillaTrades"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T1, T2, T3> {

 "accept"(arg0: T1, arg1: T2, arg2: T3): void

(arg0: T1, arg1: T2, arg2: T3): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<T1, T2, T3> = ($TriConsumer<(T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T1, T2, T3> = $TriConsumer$Type<(T1), (T2), (T3)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$Type)[])

public "transform"(arg0: $TransformableTrade$Transformer$Type): T
public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "maxUses"(arg0: integer): T
public "priceMultiplier"(arg0: float): T
public "villagerExperience"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableTooltipEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type, arg5: integer, arg6: $List$Type<(any)>)

public "getSlot"(): integer
public "getLines"(): $List<(any)>
public "getClueId"(): $ResourceLocation
public "getRequiredLevel"(): integer
public "getClue"(): $EnchantmentInstance
get "slot"(): integer
get "lines"(): $List<(any)>
get "clueId"(): $ResourceLocation
get "requiredLevel"(): integer
get "clue"(): $EnchantmentInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$Type;
}}
declare module "packages/com/almostreliable/merequester/requester/$RequesterBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StorageManager, $StorageManager$Type} from "packages/com/almostreliable/merequester/requester/$StorageManager"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Requests, $Requests$Type} from "packages/com/almostreliable/merequester/requester/$Requests"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$RequestHost, $RequestHost$Type} from "packages/com/almostreliable/merequester/requester/abstraction/$RequestHost"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export class $RequesterBlockEntity extends $AENetworkBlockEntity implements $RequestHost, $IGridTickable, $ICraftingRequester {
 "blockState": $BlockState

constructor(blockEntityType: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, blockState: $BlockState$Type)

public "onOrientationChanged"(orientation: $BlockOrientation$Type): void
public "getMainNodeGrid"(): $IGrid
public "getStorageManager"(): $StorageManager
public "requestChanged"(index: integer): void
public "getTerminalName"(): $Component
public "getRequests"(): $Requests
public "getSortValue"(): long
public "importSettings"(mode: $SettingsFrom$Type, input: $CompoundTag$Type, player: $Player$Type): void
public "exportSettings"(mode: $SettingsFrom$Type, output: $CompoundTag$Type, player: $Player$Type): void
public "addAdditionalDrops"(level: $Level$Type, pos: $BlockPos$Type, drops: $List$Type<($ItemStack$Type)>): void
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "getActionSource"(): $IActionSource
public "insertCraftedItems"(link: $ICraftingLink$Type, what: $AEKey$Type, amount: long, mode: $Actionable$Type): long
public "jobStateChange"(link: $ICraftingLink$Type): void
public "loadTag"(tag: $CompoundTag$Type): void
public "onReady"(): void
public "tickingRequest"(node: $IGridNode$Type, ticksSinceLastCall: integer): $TickRateModulation
public "getTickingRequest"(node: $IGridNode$Type): $TickingRequest
public "m_183515_"(tag: $CompoundTag$Type): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public "getActionableNode"(): $IGridNode
public static "tryClear"(arg0: any): void
get "mainNodeGrid"(): $IGrid
get "storageManager"(): $StorageManager
get "terminalName"(): $Component
get "requests"(): $Requests
get "sortValue"(): long
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "actionSource"(): $IActionSource
get "clientSide"(): boolean
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequesterBlockEntity$Type = ($RequesterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequesterBlockEntity_ = $RequesterBlockEntity$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$Type, arg1: $IntRange$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $CompoundTag$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $CompoundTag$Type): $TradeItem
public "createItemStack"(arg0: $RandomSource$Type): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$TeleportType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$Type = (("ender_pearl") | ("chorus_fruit")) | ($TeleportType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$VillagerUtils" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreasureMapTrade, $TreasureMapTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade"
import {$EnchantedItemTrade, $EnchantedItemTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$CustomTrade, $CustomTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StewTrade, $StewTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$PotionTrade, $PotionTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<(any)>)>

constructor()

public static "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "isModdedTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "getProfession"(arg0: $ResourceLocation$Type): $VillagerProfession
public static "isVanillaTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "createStewTrade"(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer): $StewTrade
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "isMoreJSTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$Type): $CustomTrade
public static "createPotionTrade"(arg0: ($TradeItem$Type)[]): $PotionTrade
public static "setAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer, arg2: $List$Type<($VillagerTrades$ItemListing$Type)>): void
public static "createSimpleTrade"(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type): $SimpleTrade
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "getAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "createCustomMapTrade"(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type): $TreasureMapTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$Type)[], arg1: $Item$Type): $EnchantedItemTrade
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type): $VillagerTrades$ItemListing
public static "createStructureMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
get "professions"(): $Collection<($VillagerProfession)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "IDLE": $EnchantmentState
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$Type = (("idle") | ("use_stored_enchantments") | ("store_enchantments")) | ($EnchantmentState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $EnchantmentTableEventJS extends $LevelEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type)

public "getLevel"(): $Level
public "getItem"(): $ItemStack
public "getSecondItem"(): $ItemStack
public "getPlayer"(): $Player
get "level"(): $Level
get "item"(): $ItemStack
get "secondItem"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void

(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$Type = ($VillagerTradingEventJS$ForEachCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableServerEventJS$Data {


public "getRequiredLevel"(): integer
public "clearEnchantments"(): void
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getEnchantmentCount"(): integer
public "forEachEnchantments"(arg0: $BiConsumer$Type<($Enchantment$Type), (integer)>): void
public "hasEnchantment"(arg0: $ResourceLocation$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$Type, arg1: $IntRange$Type): boolean
get "requiredLevel"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "enchantmentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Data$Type = ($EnchantmentTableServerEventJS$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS$Data_ = $EnchantmentTableServerEventJS$Data$Type;
}}
