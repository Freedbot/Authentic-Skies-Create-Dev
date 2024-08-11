declare module "packages/com/possible_triangle/flightlib/api/$ISource" {
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"

export interface $ISource {

 "isDisabled"(arg0: $IJetpack$Context$Type): boolean

(arg0: $IJetpack$Context$Type): boolean
}

export namespace $ISource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISource$Type = ($ISource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISource_ = $ISource$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack$Context" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$IJetpack$Context$Companion, $IJetpack$Context$Companion$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context$Companion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISource, $ISource$Type} from "packages/com/possible_triangle/flightlib/api/$ISource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IJetpack$Context {
static readonly "Companion": $IJetpack$Context$Companion

constructor(arg0: $IJetpack$Type, arg1: $LivingEntity$Type, arg2: $Level$Type, arg3: $FlyingPose$Type, arg4: $ISource$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $IJetpack$Type, arg1: $LivingEntity$Type, arg2: $Level$Type, arg3: $FlyingPose$Type, arg4: $ISource$Type): $IJetpack$Context
public "getSource"(): $ISource
public "getWorld"(): $Level
public "getEntity"(): $LivingEntity
public "getJetpack"(): $IJetpack
public "component2"(): $LivingEntity
public "component1"(): $IJetpack
public "component4"(): $FlyingPose
public "component5"(): $ISource
public "component3"(): $Level
public "getPose"(): $FlyingPose
get "source"(): $ISource
get "world"(): $Level
get "entity"(): $LivingEntity
get "jetpack"(): $IJetpack
get "pose"(): $FlyingPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Context$Type = ($IJetpack$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack$Context_ = $IJetpack$Context$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/item/$JetpackItem" {
import {$BacktankItem$BacktankBlockItem, $BacktankItem$BacktankBlockItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem$BacktankBlockItem"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControlType, $ControlType$Type} from "packages/com/possible_triangle/flightlib/api/$ControlType"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BacktankItem, $BacktankItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetpackItem extends $BacktankItem implements $IJetpack, $ICapabilityProvider {
static readonly "SLOT": $EquipmentSlot
static readonly "TYPE": $ArmorItem$Type
static readonly "BAR_COLOR": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: $ArmorMaterial$Type, arg2: $ResourceLocation$Type, arg3: $ItemEntry$Type<($BacktankItem$BacktankBlockItem$Type)>)

public "isValid"(arg0: $IJetpack$Context$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createParticles"(): $ParticleOptions
public "hoverType"(arg0: $IJetpack$Context$Type): $ControlType
public "activeType"(arg0: $IJetpack$Context$Type): $ControlType
public "elytraBoost"(): double
public "horizontalSpeed"(arg0: $IJetpack$Context$Type): double
public "isUsable"(arg0: $IJetpack$Context$Type): boolean
public "onUse"(arg0: $IJetpack$Context$Type): void
public "acceleration"(arg0: $IJetpack$Context$Type): double
public "getThrusters"(arg0: $IJetpack$Context$Type): $List<($Vec3)>
public "hoverSpeed"(arg0: $IJetpack$Context$Type): double
public "swimModifier"(arg0: $IJetpack$Context$Type): double
public "verticalSpeed"(arg0: $IJetpack$Context$Type): double
public "isHovering"(arg0: $IJetpack$Context$Type): boolean
public "hoverVerticalSpeed"(arg0: $IJetpack$Context$Type): double
public "isThrusting"(arg0: $IJetpack$Context$Type): boolean
public "boostsElytra"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "hoverHorizontalSpeed"(arg0: $IJetpack$Context$Type): double
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$Type = ($JetpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackItem_ = $JetpackItem$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$ControlType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ControlType extends $Enum<($ControlType)> {
static readonly "ALWAYS": $ControlType
static readonly "NEVER": $ControlType
static readonly "TOGGLE": $ControlType


public static "values"(): ($ControlType)[]
public static "valueOf"(arg0: string): $ControlType
public static "getEntries"(): $EnumEntries<($ControlType)>
get "entries"(): $EnumEntries<($ControlType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlType$Type = (("always") | ("never") | ("toggle")) | ($ControlType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlType_ = $ControlType$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/$CopyNbtMechanicalCraftingRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MechanicalCraftingRecipe$Serializer, $MechanicalCraftingRecipe$Serializer$Type} from "packages/com/simibubi/create/content/kinetics/crafter/$MechanicalCraftingRecipe$Serializer"

export class $CopyNbtMechanicalCraftingRecipe$Serializer extends $MechanicalCraftingRecipe$Serializer {
static readonly "INSTANCE": $CopyNbtMechanicalCraftingRecipe$Serializer


public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNbtMechanicalCraftingRecipe$Serializer$Type = ($CopyNbtMechanicalCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNbtMechanicalCraftingRecipe$Serializer_ = $CopyNbtMechanicalCraftingRecipe$Serializer$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack" {
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ControlType, $ControlType$Type} from "packages/com/possible_triangle/flightlib/api/$ControlType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $IJetpack {

 "isValid"(arg0: $IJetpack$Context$Type): boolean
 "createParticles"(): $ParticleOptions
 "hoverType"(arg0: $IJetpack$Context$Type): $ControlType
 "activeType"(arg0: $IJetpack$Context$Type): $ControlType
 "elytraBoost"(): double
 "horizontalSpeed"(arg0: $IJetpack$Context$Type): double
 "isUsable"(arg0: $IJetpack$Context$Type): boolean
 "onUse"(arg0: $IJetpack$Context$Type): void
 "acceleration"(arg0: $IJetpack$Context$Type): double
 "getThrusters"(arg0: $IJetpack$Context$Type): $List<($Vec3)>
 "hoverSpeed"(arg0: $IJetpack$Context$Type): double
 "swimModifier"(arg0: $IJetpack$Context$Type): double
 "verticalSpeed"(arg0: $IJetpack$Context$Type): double
 "isHovering"(arg0: $IJetpack$Context$Type): boolean
 "hoverVerticalSpeed"(arg0: $IJetpack$Context$Type): double
 "isThrusting"(arg0: $IJetpack$Context$Type): boolean
 "boostsElytra"(): boolean
 "hoverHorizontalSpeed"(arg0: $IJetpack$Context$Type): double
}

export namespace $IJetpack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Type = ($IJetpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack_ = $IJetpack$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$FlyingPose" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FlyingPose$Companion, $FlyingPose$Companion$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $FlyingPose extends $Enum<($FlyingPose)> {
static readonly "Companion": $FlyingPose$Companion
static readonly "UPRIGHT": $FlyingPose
static readonly "SUPERMAN": $FlyingPose


public static "values"(): ($FlyingPose)[]
public static "valueOf"(arg0: string): $FlyingPose
public static "getEntries"(): $EnumEntries<($FlyingPose)>
get "entries"(): $EnumEntries<($FlyingPose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingPose$Type = (("superman") | ("upright")) | ($FlyingPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlyingPose_ = $FlyingPose$Type;
}}
declare module "packages/com/possible_triangle/flightlib/mixins/$ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor {

 "setAboveGroundTickCount"(arg0: integer): void

(arg0: integer): void
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/item/$JetpackItem$Layered" {
import {$BacktankItem$BacktankBlockItem, $BacktankItem$BacktankBlockItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem$BacktankBlockItem"
import {$JetpackItem, $JetpackItem$Type} from "packages/com/possible_triangle/create_jetpack/item/$JetpackItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$LayeredArmorItem, $LayeredArmorItem$Type} from "packages/com/simibubi/create/foundation/item/$LayeredArmorItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$HumanoidArmorLayer, $HumanoidArmorLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$HumanoidArmorLayer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetpackItem$Layered extends $JetpackItem implements $LayeredArmorItem {
static readonly "SLOT": $EquipmentSlot
static readonly "TYPE": $ArmorItem$Type
static readonly "BAR_COLOR": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: $ArmorMaterial$Type, arg2: $ResourceLocation$Type, arg3: $ItemEntry$Type<($BacktankItem$BacktankBlockItem$Type)>)

public "getArmorTextureLocation"(arg0: $LivingEntity$Type, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type, arg3: integer): string
public "renderArmorPiece"(arg0: $HumanoidArmorLayer$Type<(any), (any), (any)>, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $LivingEntity$Type, arg4: $EquipmentSlot$Type, arg5: integer, arg6: $HumanoidModel$Type<(any)>, arg7: $ItemStack$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$Layered$Type = ($JetpackItem$Layered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackItem$Layered_ = $JetpackItem$Layered$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack$Context$Companion" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISource, $ISource$Type} from "packages/com/possible_triangle/flightlib/api/$ISource"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IJetpack$Context$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "builder"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $FlyingPose$Type, arg3: $ISource$Type): $Function1<($IJetpack), ($IJetpack$Context)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Context$Companion$Type = ($IJetpack$Context$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack$Context$Companion_ = $IJetpack$Context$Companion$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/block/$JetpackBlock" {
import {$BacktankBlock, $BacktankBlock$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $JetpackBlock extends $BacktankBlock {
static readonly "HORIZONTAL_FACING": $Property<($Direction)>
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

constructor(arg0: $ItemLike$Type, arg1: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackBlock$Type = ($JetpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackBlock_ = $JetpackBlock$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$FlyingPose$Companion" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FlyingPose$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "get"(arg0: $LivingEntity$Type): $FlyingPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingPose$Companion$Type = ($FlyingPose$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlyingPose$Companion_ = $FlyingPose$Companion$Type;
}}
