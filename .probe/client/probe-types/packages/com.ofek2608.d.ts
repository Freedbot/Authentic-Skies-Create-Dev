declare module "packages/com/ofek2608/crafting_on_a_stick/$ItemOnAStick" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$MinecraftMenuBuilder, $MinecraftMenuBuilder$Type} from "packages/com/ofek2608/crafting_on_a_stick/$MinecraftMenuBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemOnAStick extends $Item {
readonly "registryPath": string
readonly "menuProvider": $MenuProvider
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: string, arg1: string, arg2: $MinecraftMenuBuilder$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOnAStick$Type = ($ItemOnAStick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemOnAStick_ = $ItemOnAStick$Type;
}}
declare module "packages/com/ofek2608/crafting_on_a_stick/$MinecraftMenuBuilder" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"

export interface $MinecraftMenuBuilder {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $ContainerLevelAccess$Type): $AbstractContainerMenu

(arg0: integer, arg1: $Inventory$Type, arg2: $ContainerLevelAccess$Type): $AbstractContainerMenu
}

export namespace $MinecraftMenuBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftMenuBuilder$Type = ($MinecraftMenuBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftMenuBuilder_ = $MinecraftMenuBuilder$Type;
}}
