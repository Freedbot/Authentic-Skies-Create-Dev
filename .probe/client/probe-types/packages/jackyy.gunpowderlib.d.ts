declare module "packages/jackyy/gunpowderlib/capability/$IFEContainer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFEContainer {

 "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
 "extractEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
 "receiveEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
 "getEnergyStored"(arg0: $ItemStack$Type): integer
}

export namespace $IFEContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFEContainer$Type = ($IFEContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFEContainer_ = $IFEContainer$Type;
}}
