declare module "packages/jackyy/exchangers/item/enderio/$ItemEndSteelExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEndSteelExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEndSteelExchanger$Type = ($ItemEndSteelExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEndSteelExchanger_ = $ItemEndSteelExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemLeadstoneExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLeadstoneExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLeadstoneExchanger$Type = ($ItemLeadstoneExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLeadstoneExchanger_ = $ItemLeadstoneExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemCrudeSteelExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCrudeSteelExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCrudeSteelExchanger$Type = ($ItemCrudeSteelExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCrudeSteelExchanger_ = $ItemCrudeSteelExchanger$Type;
}}
declare module "packages/jackyy/exchangers/util/$ILoadable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILoadable {

 "checkLoaded"(): boolean

(): boolean
}

export namespace $ILoadable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILoadable$Type = ($ILoadable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILoadable_ = $ILoadable$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemIEExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemIEExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIEExchangerCoreT2$Type = ($ItemIEExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIEExchangerCoreT2_ = $ItemIEExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemIEExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemIEExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIEExchangerCoreT3$Type = ($ItemIEExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIEExchangerCoreT3_ = $ItemIEExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemIEExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemIEExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIEExchangerCoreT1$Type = ($ItemIEExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIEExchangerCoreT1_ = $ItemIEExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/$ItemExchangerBasePowered" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IFEContainer, $IFEContainer$Type} from "packages/jackyy/gunpowderlib/capability/$IFEContainer"

export class $ItemExchangerBasePowered extends $ItemExchangerBase implements $IFEContainer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "extractEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "receiveEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getEnergyStored"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPowered"(): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExchangerBasePowered$Type = ($ItemExchangerBasePowered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExchangerBasePowered_ = $ItemExchangerBasePowered$Type;
}}
declare module "packages/jackyy/exchangers/item/$ItemCoreBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ILoadable, $ILoadable$Type} from "packages/jackyy/exchangers/util/$ILoadable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCoreBase extends $Item implements $ILoadable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCoreBase$Type = ($ItemCoreBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCoreBase_ = $ItemCoreBase$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemEnergeticExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEnergeticExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnergeticExchanger$Type = ($ItemEnergeticExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnergeticExchanger_ = $ItemEnergeticExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemEliteExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEliteExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEliteExchanger$Type = ($ItemEliteExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEliteExchanger_ = $ItemEliteExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemEIOExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOExchangerCoreT2$Type = ($ItemEIOExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOExchangerCoreT2_ = $ItemEIOExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemEIOExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOExchangerCoreT1$Type = ($ItemEIOExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOExchangerCoreT1_ = $ItemEIOExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemEIOExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOExchangerCoreT3$Type = ($ItemEIOExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOExchangerCoreT3_ = $ItemEIOExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/util/$IExchanger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IExchanger {

 "isCreative"(): boolean
 "getDefaultHarvestLevel"(): string
 "getTier"(): integer
 "getMaxRange"(): integer
 "getHarvestLevel"(): string
 "getMaxEnergy"(): integer
 "getPerBlockUse"(): integer
 "isPowered"(): boolean
}

export namespace $IExchanger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExchanger$Type = ($IExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExchanger_ = $IExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemMVExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMVExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMVExchanger$Type = ($ItemMVExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMVExchanger_ = $ItemMVExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemEndExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemEndExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEndExchanger$Type = ($ItemEndExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEndExchanger_ = $ItemEndExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemReinforcedExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemReinforcedExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemReinforcedExchanger$Type = ($ItemReinforcedExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemReinforcedExchanger_ = $ItemReinforcedExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemBasicExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBasicExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBasicExchanger$Type = ($ItemBasicExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBasicExchanger_ = $ItemBasicExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemEnergeticSilverExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEnergeticSilverExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnergeticSilverExchanger$Type = ($ItemEnergeticSilverExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnergeticSilverExchanger_ = $ItemEnergeticSilverExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemHardenedExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemHardenedExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHardenedExchanger$Type = ($ItemHardenedExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHardenedExchanger_ = $ItemHardenedExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemNetheriteExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemNetheriteExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemNetheriteExchanger$Type = ($ItemNetheriteExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemNetheriteExchanger_ = $ItemNetheriteExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemVibrantExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemVibrantExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVibrantExchanger$Type = ($ItemVibrantExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVibrantExchanger_ = $ItemVibrantExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemLVExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLVExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLVExchanger$Type = ($ItemLVExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLVExchanger_ = $ItemLVExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemConductiveExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemConductiveExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConductiveExchanger$Type = ($ItemConductiveExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemConductiveExchanger_ = $ItemConductiveExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemGoldenExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemGoldenExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGoldenExchanger$Type = ($ItemGoldenExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGoldenExchanger_ = $ItemGoldenExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemObsidianExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemObsidianExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemObsidianExchanger$Type = ($ItemObsidianExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemObsidianExchanger_ = $ItemObsidianExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/special/$ItemTuberousExchanger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTuberousExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTuberousExchanger$Type = ($ItemTuberousExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTuberousExchanger_ = $ItemTuberousExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/special/$ItemCreativeExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemCreativeExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "isCreative"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
get "creative"(): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCreativeExchanger$Type = ($ItemCreativeExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCreativeExchanger_ = $ItemCreativeExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemVividExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemVividExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVividExchanger$Type = ($ItemVividExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVividExchanger_ = $ItemVividExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemCopperAlloyExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCopperAlloyExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCopperAlloyExchanger$Type = ($ItemCopperAlloyExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCopperAlloyExchanger_ = $ItemCopperAlloyExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExchangerCoreT3$Type = ($ItemExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExchangerCoreT3_ = $ItemExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExchangerCoreT2$Type = ($ItemExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExchangerCoreT2_ = $ItemExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExchangerCoreT1$Type = ($ItemExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExchangerCoreT1_ = $ItemExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/special/$ItemBeeExchanger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBeeExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBeeExchanger$Type = ($ItemBeeExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBeeExchanger_ = $ItemBeeExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/$ItemExchangerBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IExchanger, $IExchanger$Type} from "packages/jackyy/exchangers/util/$IExchanger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ILoadable, $ILoadable$Type} from "packages/jackyy/exchangers/util/$ILoadable"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemExchangerBase extends $Item implements $IExchanger, $ILoadable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "checkLoaded"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "isFoil"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isPowered"(): boolean
public "isCreative"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "powered"(): boolean
get "creative"(): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExchangerBase$Type = ($ItemExchangerBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExchangerBase_ = $ItemExchangerBase$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemCopperExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemCopperExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCopperExchanger$Type = ($ItemCopperExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCopperExchanger_ = $ItemCopperExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemStoneExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemStoneExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStoneExchanger$Type = ($ItemStoneExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStoneExchanger_ = $ItemStoneExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemIronExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemIronExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIronExchanger$Type = ($ItemIronExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIronExchanger_ = $ItemIronExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemEIOEndergyExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOEndergyExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOEndergyExchangerCoreT3$Type = ($ItemEIOEndergyExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOEndergyExchangerCoreT3_ = $ItemEIOEndergyExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemEIOEndergyExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOEndergyExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOEndergyExchangerCoreT2$Type = ($ItemEIOEndergyExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOEndergyExchangerCoreT2_ = $ItemEIOEndergyExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemEIOEndergyExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemEIOEndergyExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEIOEndergyExchangerCoreT1$Type = ($ItemEIOEndergyExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEIOEndergyExchangerCoreT1_ = $ItemEIOEndergyExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemAmethystExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemAmethystExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAmethystExchanger$Type = ($ItemAmethystExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAmethystExchanger_ = $ItemAmethystExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemEmeraldExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemEmeraldExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEmeraldExchanger$Type = ($ItemEmeraldExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEmeraldExchanger_ = $ItemEmeraldExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemPulsatingExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPulsatingExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPulsatingExchanger$Type = ($ItemPulsatingExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPulsatingExchanger_ = $ItemPulsatingExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemResonantExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemResonantExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemResonantExchanger$Type = ($ItemResonantExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResonantExchanger_ = $ItemResonantExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemMekanismExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemMekanismExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismExchangerCoreT3$Type = ($ItemMekanismExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismExchangerCoreT3_ = $ItemMekanismExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemMekanismExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemMekanismExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismExchangerCoreT2$Type = ($ItemMekanismExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismExchangerCoreT2_ = $ItemMekanismExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemMekanismExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemMekanismExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismExchangerCoreT1$Type = ($ItemMekanismExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismExchangerCoreT1_ = $ItemMekanismExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemUltimateExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUltimateExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUltimateExchanger$Type = ($ItemUltimateExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUltimateExchanger_ = $ItemUltimateExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemWoodenExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemWoodenExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWoodenExchanger$Type = ($ItemWoodenExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWoodenExchanger_ = $ItemWoodenExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/vanilla/$ItemDiamondExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemExchangerBase, $ItemExchangerBase$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBase"

export class $ItemDiamondExchanger extends $ItemExchangerBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDiamondExchanger$Type = ($ItemDiamondExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDiamondExchanger_ = $ItemDiamondExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemStellarExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemStellarExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStellarExchanger$Type = ($ItemStellarExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStellarExchanger_ = $ItemStellarExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemCrystallineExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCrystallineExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCrystallineExchanger$Type = ($ItemCrystallineExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCrystallineExchanger_ = $ItemCrystallineExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/enderio/$ItemDarkSteelExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDarkSteelExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDarkSteelExchanger$Type = ($ItemDarkSteelExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDarkSteelExchanger_ = $ItemDarkSteelExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemSignalumExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSignalumExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSignalumExchanger$Type = ($ItemSignalumExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSignalumExchanger_ = $ItemSignalumExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemThermalExchangerCoreT3" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemThermalExchangerCoreT3 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemThermalExchangerCoreT3$Type = ($ItemThermalExchangerCoreT3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemThermalExchangerCoreT3_ = $ItemThermalExchangerCoreT3$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemThermalExchangerCoreT2" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemThermalExchangerCoreT2 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemThermalExchangerCoreT2$Type = ($ItemThermalExchangerCoreT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemThermalExchangerCoreT2_ = $ItemThermalExchangerCoreT2$Type;
}}
declare module "packages/jackyy/exchangers/item/thermal/$ItemThermalExchangerCoreT1" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ItemCoreBase, $ItemCoreBase$Type} from "packages/jackyy/exchangers/item/$ItemCoreBase"

export class $ItemThermalExchangerCoreT1 extends $ItemCoreBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemThermalExchangerCoreT1$Type = ($ItemThermalExchangerCoreT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemThermalExchangerCoreT1_ = $ItemThermalExchangerCoreT1$Type;
}}
declare module "packages/jackyy/exchangers/item/enderioendergy/$ItemMelodicExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMelodicExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMelodicExchanger$Type = ($ItemMelodicExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMelodicExchanger_ = $ItemMelodicExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/mekanism/$ItemAdvancedExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAdvancedExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAdvancedExchanger$Type = ($ItemAdvancedExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAdvancedExchanger_ = $ItemAdvancedExchanger$Type;
}}
declare module "packages/jackyy/exchangers/item/immersiveengineering/$ItemHVExchanger" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemExchangerBasePowered, $ItemExchangerBasePowered$Type} from "packages/jackyy/exchangers/item/$ItemExchangerBasePowered"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemHVExchanger extends $ItemExchangerBasePowered {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor()

public "checkLoaded"(): boolean
public "getDefaultHarvestLevel"(): string
public "getTier"(): integer
public "getMaxRange"(): integer
public "getHarvestLevel"(): string
public "getMaxEnergy"(): integer
public "getPerBlockUse"(): integer
get "defaultHarvestLevel"(): string
get "tier"(): integer
get "maxRange"(): integer
get "harvestLevel"(): string
get "maxEnergy"(): integer
get "perBlockUse"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHVExchanger$Type = ($ItemHVExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHVExchanger_ = $ItemHVExchanger$Type;
}}
