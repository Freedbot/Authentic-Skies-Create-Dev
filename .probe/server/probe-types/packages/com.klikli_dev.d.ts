declare module "packages/com/klikli_dev/occultism/common/item/tool/$GuideBookItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ModonomiconItem, $ModonomiconItem$Type} from "packages/com/klikli_dev/modonomicon/item/$ModonomiconItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GuideBookItem extends $ModonomiconItem {
static readonly "DICTIONARY_OF_SPIRITS": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getCreativeModeTabDisplayStack"(): $ItemStack
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "creativeModeTabDisplayStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideBookItem$Type = ($GuideBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuideBookItem_ = $GuideBookItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/fluid/$FluidHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"

export interface $FluidHolder {

 "isEmpty"(): boolean
 "copy"(): $FluidHolder
 "getTag"(): $CompoundTag
 "hasTag"(): boolean
 "setTag"(arg0: $CompoundTag$Type): void
 "getFluid"(): $Fluid
 "getAmount"(): integer
 "setAmount"(arg0: integer): void
}

export namespace $FluidHolder {
const BUCKET_VOLUME: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidHolder$Type = ($FluidHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidHolder_ = $FluidHolder$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/storage/$StorageControllerBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageControllerBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlockItem$Type = ($StorageControllerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlockItem_ = $StorageControllerBlockItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$OtherworldLeavesNaturalBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOtherworldBlock, $IOtherworldBlock$Type} from "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OtherworldLeavesNaturalBlock extends $LeavesBlock implements $IOtherworldBlock {
static readonly "COLOR": integer
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getUncoveredBlock"(): $Block
public "getCoveredBlock"(): $Block
public "getDescriptionId"(): string
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTier"(): $OtherworldBlockTier
public "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
get "uncoveredBlock"(): $Block
get "coveredBlock"(): $Block
get "descriptionId"(): string
get "tier"(): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldLeavesNaturalBlock$Type = ($OtherworldLeavesNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldLeavesNaturalBlock_ = $OtherworldLeavesNaturalBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/effect/$ThirdEyeEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ThirdEyeEffect extends $MobEffect {
static readonly "ICON": $ResourceLocation
static readonly "EFFECT_RENDERER": $IClientMobEffectExtensions

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThirdEyeEffect$Type = ($ThirdEyeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThirdEyeEffect_ = $ThirdEyeEffect$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/$BookContentScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidHolder, $FluidHolder$Type} from "packages/com/klikli_dev/modonomicon/fluid/$FluidHolder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ContentBookEntry, $ContentBookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$ContentBookEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$BookPageRenderer, $BookPageRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/render/page/$BookPageRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BookOverviewScreen, $BookOverviewScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookOverviewScreen"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$BookPaginatedScreen, $BookPaginatedScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookPaginatedScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BookContentScreen extends $BookPaginatedScreen {
static readonly "TOP_PADDING": integer
static readonly "LEFT_PAGE_X": integer
static readonly "RIGHT_PAGE_X": integer
static readonly "PAGE_WIDTH": integer
static readonly "PAGE_HEIGHT": integer
static readonly "MAX_TITLE_WIDTH": integer
static readonly "CLICK_SAFETY_MARGIN": integer
 "ticksInBook": integer
 "simulateEscClosing": boolean
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "BOOK_BACKGROUND_WIDTH": integer
static readonly "BOOK_BACKGROUND_HEIGHT": integer
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $BookOverviewScreen$Type, arg1: $ContentBookEntry$Type)

public "getEntry"(): $ContentBookEntry
public "getBook"(): $Book
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "tick"(): void
public "setTooltipStack"(arg0: $ItemStack$Type): void
public "setTooltipStack"(arg0: $FluidHolder$Type): void
public "getRelativeY"(arg0: double): double
public "getRelativeX"(arg0: double): double
public static "drawLock"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer): void
public "onClose"(): void
public "addRenderableWidget"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
public "renderItemStack"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$Type): void
public "renderIngredient"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$Type, arg6: integer): void
public "renderIngredient"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$Type): void
public "removeRenderableWidgets"(arg0: $Collection$Type<(any)>): void
public "renderComponentHoverEffect"(arg0: $GuiGraphics$Type, arg1: $Style$Type, arg2: integer, arg3: integer): void
public "getClickedComponentStyleAt"(arg0: double, arg1: double): $Style
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "handleComponentClicked"(arg0: $Style$Type): boolean
public "getMinecraft"(): $Minecraft
public "setTooltip"(...arg0: ($Component$Type)[]): void
public "setTooltip"(arg0: $List$Type<($Component$Type)>): void
public "isMouseInRelativeRange"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public static "drawFromTexture"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "drawTitleSeparator"(arg0: $GuiGraphics$Type, arg1: $Book$Type, arg2: integer, arg3: integer): void
public "getBookLeft"(): integer
public "getBookTop"(): integer
public static "renderBookBackground"(arg0: $GuiGraphics$Type, arg1: $ResourceLocation$Type): void
public "getTooltipFromFluid"(arg0: $FluidHolder$Type): $List<($Component)>
public "getClickedComponentStyleAtForPage"(arg0: $BookPageRenderer$Type<(any)>, arg1: double, arg2: double): $Style
public "goToPage"(arg0: integer, arg1: boolean): void
public "canSeeArrowButton"(arg0: boolean): boolean
public "renderFluidStack"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $FluidHolder$Type): void
public "renderFluidStack"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $FluidHolder$Type, arg6: integer): void
public static "playTurnPageSound"(arg0: $Book$Type): void
public "renderItemStacks"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Collection$Type<($ItemStack$Type)>): void
public "renderItemStacks"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Collection$Type<($ItemStack$Type)>, arg6: integer): void
public "renderFluidStacks"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Collection$Type<($FluidHolder$Type)>, arg6: integer): void
public "renderFluidStacks"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Collection$Type<($FluidHolder$Type)>): void
public "getTooltipFromItem"(arg0: $ItemStack$Type): $List<($Component)>
get "entry"(): $ContentBookEntry
get "book"(): $Book
set "tooltipStack"(value: $ItemStack$Type)
set "tooltipStack"(value: $FluidHolder$Type)
get "minecraft"(): $Minecraft
set "tooltip"(value: ($Component$Type)[])
set "tooltip"(value: $List$Type<($Component$Type)>)
get "bookLeft"(): integer
get "bookTop"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentScreen$Type = ($BookContentScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentScreen_ = $BookContentScreen$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/$BookScreenWithButtons" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"

export interface $BookScreenWithButtons {

 "getBook"(): $Book
 "setTooltip"(arg0: $List$Type<($Component$Type)>): void
}

export namespace $BookScreenWithButtons {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookScreenWithButtons$Type = ($BookScreenWithButtons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookScreenWithButtons_ = $BookScreenWithButtons$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$BrushItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrushItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrushItem$Type = ($BrushItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrushItem_ = $BrushItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/level/multichunk/$MultiChunkFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$MultiChunkFeatureConfig, $MultiChunkFeatureConfig$Type} from "packages/com/klikli_dev/occultism/common/level/multichunk/$MultiChunkFeatureConfig"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$IMultiChunkSubFeature, $IMultiChunkSubFeature$Type} from "packages/com/klikli_dev/occultism/common/level/multichunk/$IMultiChunkSubFeature"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $MultiChunkFeature extends $Feature<($MultiChunkFeatureConfig)> {
readonly "subFeature": $IMultiChunkSubFeature
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($MultiChunkFeatureConfig$Type)>, arg1: $IMultiChunkSubFeature$Type)

public "place"(arg0: $FeaturePlaceContext$Type<($MultiChunkFeatureConfig$Type)>): boolean
public static "getLargeFeatureWithSaltSeed"(arg0: long, arg1: integer, arg2: integer, arg3: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiChunkFeature$Type = ($MultiChunkFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiChunkFeature_ = $MultiChunkFeature$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/conditions/context/$BookConditionContext" {
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$BookPage, $BookPage$Type} from "packages/com/klikli_dev/modonomicon/book/page/$BookPage"

export class $BookConditionContext {
readonly "book": $Book

constructor(arg0: $Book$Type)

public "toString"(): string
public static "of"(arg0: $Book$Type, arg1: $BookPage$Type): $BookConditionContext
public static "of"(arg0: $Book$Type, arg1: $BookCategory$Type): $BookConditionContext
public static "of"(arg0: $Book$Type, arg1: $BookEntry$Type): $BookConditionContext
public "getBook"(): $Book
get "book"(): $Book
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookConditionContext$Type = ($BookConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookConditionContext_ = $BookConditionContext$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackFakeInventory, $ItemStackFakeInventory$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$ItemStackFakeInventoryRecipe$Serializer, $ItemStackFakeInventoryRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe$Serializer"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ItemStackFakeInventoryRecipe implements $Recipe<($ItemStackFakeInventory)> {
static "SERIALIZER": $ItemStackFakeInventoryRecipe$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public "matches"(arg0: $ItemStackFakeInventory$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $ItemStackFakeInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $ItemStackFakeInventory$Type): $NonNullList<($ItemStack)>
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
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
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
export type $ItemStackFakeInventoryRecipe$Type = ($ItemStackFakeInventoryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFakeInventoryRecipe_ = $ItemStackFakeInventoryRecipe$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/api/multiblock/$Multiblock" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Multiblock$SimulateResult, $Multiblock$SimulateResult$Type} from "packages/com/klikli_dev/modonomicon/api/multiblock/$Multiblock$SimulateResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $Multiblock extends $BlockAndTintGetter {

 "test"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Rotation$Type): boolean
 "validate"(arg0: $Level$Type, arg1: $BlockPos$Type): $Rotation
 "validate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type): boolean
 "getId"(): $ResourceLocation
 "getType"(): $ResourceLocation
 "getSize"(): $Vec3i
 "offset"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "getOffset"(): $Vec3i
 "setLevel"(arg0: $Level$Type): void
 "place"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type): void
 "isSymmetrical"(): boolean
 "offsetView"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "setSymmetrical"(arg0: boolean): $Multiblock
 "simulate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type, arg3: boolean, arg4: boolean): $Pair<($BlockPos), ($Collection<($Multiblock$SimulateResult)>)>
 "setId"(arg0: $ResourceLocation$Type): $Multiblock
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
 "getViewOffset"(): $Vec3i
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxSection"(): integer
 "getMinBuildHeight"(): integer
 "getMaxBuildHeight"(): integer
 "getModelDataManager"(): $ModelDataManager
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
}

export namespace $Multiblock {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiblock$Type = ($Multiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiblock_ = $Multiblock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/storage/$StorageRemoteItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IStorageController, $IStorageController$Type} from "packages/com/klikli_dev/occultism/api/common/blockentity/$IStorageController"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageRemoteItem extends $Item implements $MenuProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public static "getStorageController"(arg0: $ItemStack$Type, arg1: $Level$Type): $IStorageController
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageRemoteItem$Type = ($StorageRemoteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageRemoteItem_ = $StorageRemoteItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookCategory" {
import {$BookIcon, $BookIcon$Type} from "packages/com/klikli_dev/modonomicon/book/$BookIcon"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BookCondition, $BookCondition$Type} from "packages/com/klikli_dev/modonomicon/book/conditions/$BookCondition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$BookCategoryBackgroundParallaxLayer, $BookCategoryBackgroundParallaxLayer$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategoryBackgroundParallaxLayer"
import {$BookTextRenderer, $BookTextRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookCategory {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: $BookCondition$Type, arg4: boolean, arg5: $BookIcon$Type, arg6: $ResourceLocation$Type, arg7: integer, arg8: integer, arg9: float, arg10: $List$Type<($BookCategoryBackgroundParallaxLayer$Type)>, arg11: $ResourceLocation$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$Type): void
public "getEntries"(): $Map<($ResourceLocation), ($BookEntry)>
public "build"(arg0: $Level$Type, arg1: $Book$Type): void
public "getEntry"(arg0: $ResourceLocation$Type): $BookEntry
public static "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BookCategory
public "getCondition"(): $BookCondition
public "getIcon"(): $BookIcon
public static "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BookCategory
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getBackground"(): $ResourceLocation
public "getBook"(): $Book
public "getSortNumber"(): integer
public "showCategoryButton"(): boolean
public "getEntryTextures"(): $ResourceLocation
public "getBackgroundWidth"(): integer
public "prerenderMarkdown"(arg0: $BookTextRenderer$Type): void
public "getBackgroundHeight"(): integer
public "getBackgroundTextureZoomMultiplier"(): float
public "getBackgroundParallaxLayers"(): $List<($BookCategoryBackgroundParallaxLayer)>
get "name"(): string
get "id"(): $ResourceLocation
get "entries"(): $Map<($ResourceLocation), ($BookEntry)>
get "condition"(): $BookCondition
get "icon"(): $BookIcon
get "background"(): $ResourceLocation
get "book"(): $Book
get "sortNumber"(): integer
get "entryTextures"(): $ResourceLocation
get "backgroundWidth"(): integer
get "backgroundHeight"(): integer
get "backgroundTextureZoomMultiplier"(): float
get "backgroundParallaxLayers"(): $List<($BookCategoryBackgroundParallaxLayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategory$Type = ($BookCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategory_ = $BookCategory$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export class $ItemStackFakeInventory implements $Container {

constructor(arg0: $ItemStack$Type)

public "clearContent"(): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "stillValid"(arg0: $Player$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "kjs$self"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "startOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "getMaxStackSize"(): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "isMutable"(): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "asContainer"(): $Container
public "getWidth"(): integer
public "getHeight"(): integer
public "clear"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public static "tryClear"(arg0: any): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(ingredient: $Ingredient$Type): void
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackFakeInventory$Type = ($ItemStackFakeInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFakeInventory_ = $ItemStackFakeInventory$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/blockentity/$NetworkedBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkedBlockEntity extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "loadNetwork"(arg0: $CompoundTag$Type): void
public "markNetworkDirty"(): void
public "saveNetwork"(arg0: $CompoundTag$Type): $CompoundTag
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedBlockEntity$Type = ($NetworkedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedBlockEntity_ = $NetworkedBlockEntity$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonFoliotTransportItemsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonFoliotTransportItemsItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonFoliotTransportItemsItem$Type = ($SummonFoliotTransportItemsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotTransportItemsItem_ = $SummonFoliotTransportItemsItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonDjinniManageMachineItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonDjinniManageMachineItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonDjinniManageMachineItem$Type = ($SummonDjinniManageMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonDjinniManageMachineItem_ = $SummonDjinniManageMachineItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$IesniumOreNaturalBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOtherworldBlock, $IOtherworldBlock$Type} from "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IesniumOreNaturalBlock extends $Block implements $IOtherworldBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getUncoveredBlock"(): $Block
public "getCoveredBlock"(): $Block
public "getDescriptionId"(): string
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTier"(): $OtherworldBlockTier
public "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
get "uncoveredBlock"(): $Block
get "coveredBlock"(): $Block
get "descriptionId"(): string
get "tier"(): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IesniumOreNaturalBlock$Type = ($IesniumOreNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IesniumOreNaturalBlock_ = $IesniumOreNaturalBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/misc/$WeightedOutputIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WeightedEntry$IntrusiveBase, $WeightedEntry$IntrusiveBase$Type} from "packages/net/minecraft/util/random/$WeightedEntry$IntrusiveBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $WeightedOutputIngredient extends $WeightedEntry$IntrusiveBase {

constructor(arg0: $Ingredient$Type, arg1: integer)

public "getStack"(): $ItemStack
public "getIngredient"(): $Ingredient
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
get "stack"(): $ItemStack
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedOutputIngredient$Type = ($WeightedOutputIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedOutputIngredient_ = $WeightedOutputIngredient$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritFireRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SpiritFireRecipe, $SpiritFireRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritFireRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpiritFireRecipe$Serializer implements $RecipeSerializer<($SpiritFireRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritFireRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritFireRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritFireRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritFireRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireRecipe$Serializer$Type = ($SpiritFireRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireRecipe$Serializer_ = $SpiritFireRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/crops/$IReplantableCrops" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IReplantableCrops {

 "getSeedsItem"(): $ItemLike
 "onHarvest"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type): $InteractionResult
 "getCropsItem"(): $ItemLike
}

export namespace $IReplantableCrops {
const EXHAUSTION_PER_HARVEST: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReplantableCrops$Type = ($IReplantableCrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReplantableCrops_ = $IReplantableCrops$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/storage/$SatchelItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SatchelItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $Container
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SatchelItem$Type = ($SatchelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SatchelItem_ = $SatchelItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/storage/$StableWormholeBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StableWormholeBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWormholeBlockItem$Type = ($StableWormholeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableWormholeBlockItem_ = $StableWormholeBlockItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$SpiritFireBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseFireBlock, $BaseFireBlock$Type} from "packages/net/minecraft/world/level/block/$BaseFireBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpiritFireBlock extends $BaseFireBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireBlock$Type = ($SpiritFireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireBlock_ = $SpiritFireBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/entity/spirit/$ISkinnedCreatureMixin" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISkinnedCreatureMixin {

 "getSkinTypes"(): integer
 "selectRandomSkin"(): void
 "writeSkinToNBT"(arg0: $CompoundTag$Type): void
 "readSkinFromNBT"(arg0: $CompoundTag$Type): void
 "getEntity"(): $LivingEntity
 "registerSkinDataParameter"(): void
 "getDataParameterSkin"(): $EntityDataAccessor<(integer)>

(): integer
}

export namespace $ISkinnedCreatureMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISkinnedCreatureMixin$Type = ($ISkinnedCreatureMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISkinnedCreatureMixin_ = $ISkinnedCreatureMixin$Type;
}}
declare module "packages/com/klikli_dev/occultism/network/$MessageUpdateStacks" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MessageBase, $MessageBase$Type} from "packages/com/klikli_dev/occultism/network/$MessageBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MessageUpdateStacks extends $MessageBase {

constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $List$Type<($ItemStack$Type)>, arg1: integer, arg2: integer)

public "compress"(): void
public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "onClientReceived"(arg0: $Minecraft$Type, arg1: $Player$Type, arg2: $NetworkEvent$Context$Type): void
public "uncompress"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageUpdateStacks$Type = ($MessageUpdateStacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageUpdateStacks_ = $MessageUpdateStacks$Type;
}}
declare module "packages/com/klikli_dev/occultism/network/$MessageBase" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IMessage, $IMessage$Type} from "packages/com/klikli_dev/occultism/network/$IMessage"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $MessageBase implements $IMessage {


public "onClientReceived"(arg0: $Minecraft$Type, arg1: $Player$Type, arg2: $NetworkEvent$Context$Type): void
public "onServerReceived"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $NetworkEvent$Context$Type): void
public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBase$Type = ($MessageBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBase_ = $MessageBase$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritTradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$SpiritTradeRecipe$Serializer, $SpiritTradeRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritTradeRecipe$Serializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpiritTradeRecipe extends $ShapelessRecipe {
static "SERIALIZER": $SpiritTradeRecipe$Serializer
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "isValid"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "isValid"(...arg0: ($ItemStack$Type)[]): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "consume"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTradeRecipe$Type = ($SpiritTradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTradeRecipe_ = $SpiritTradeRecipe$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$CrushingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CrushingRecipe$Serializer, $CrushingRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$CrushingRecipe$Serializer"
import {$ItemStackFakeInventoryRecipe, $ItemStackFakeInventoryRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$OutputIngredient, $OutputIngredient$Type} from "packages/com/klikli_dev/occultism/common/misc/$OutputIngredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackFakeInventory, $ItemStackFakeInventory$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventory"

export class $CrushingRecipe extends $ItemStackFakeInventoryRecipe {
static "SERIALIZER": $CrushingRecipe$Serializer
static "DEFAULT_CRUSHING_TIME": integer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $OutputIngredient$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean)

public "matches"(arg0: $ItemStackFakeInventory$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getMinTier"(): integer
public "getMaxTier"(): integer
public "getCrushingTime"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIgnoreCrushingMultiplier"(): boolean
get "special"(): boolean
get "minTier"(): integer
get "maxTier"(): integer
get "crushingTime"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ignoreCrushingMultiplier"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushingRecipe$Type = ($CrushingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushingRecipe_ = $CrushingRecipe$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookFrameOverlay" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BookFrameOverlay {
static readonly "CODEC": $Codec<($BookFrameOverlay)>

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public static "fromJson"(arg0: $JsonObject$Type): $BookFrameOverlay
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookFrameOverlay
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getFrameWidth"(): integer
public "getFrameHeight"(): integer
public "getTexture"(): $ResourceLocation
public "getTextureHeight"(): integer
public "getTextureWidth"(): integer
public "getFrameU"(): integer
public "getFrameXOffset"(): integer
public "getFrameY"(arg0: integer): integer
public "getFrameYOffset"(): integer
public "getFrameX"(arg0: integer): integer
public "getFrameV"(): integer
get "frameWidth"(): integer
get "frameHeight"(): integer
get "texture"(): $ResourceLocation
get "textureHeight"(): integer
get "textureWidth"(): integer
get "frameU"(): integer
get "frameXOffset"(): integer
get "frameYOffset"(): integer
get "frameV"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookFrameOverlay$Type = ($BookFrameOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookFrameOverlay_ = $BookFrameOverlay$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/data/$WorkAreaSize" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WorkAreaSize extends $Enum<($WorkAreaSize)> {
static readonly "SMALL": $WorkAreaSize
static readonly "MEDIUM": $WorkAreaSize
static readonly "LARGE": $WorkAreaSize


public static "get"(arg0: integer): $WorkAreaSize
public "equals"(arg0: integer): boolean
public static "values"(): ($WorkAreaSize)[]
public static "valueOf"(arg0: string): $WorkAreaSize
public "getValue"(): integer
public "next"(): $WorkAreaSize
public "getDescriptionId"(): string
get "value"(): integer
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkAreaSize$Type = (("small") | ("large") | ("medium")) | ($WorkAreaSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkAreaSize_ = $WorkAreaSize$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$DivinationRodItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DivinationRodItem extends $Item {
static readonly "NOT_FOUND": float
static readonly "SEARCHING": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getDistance"(arg0: $Vec3$Type, arg1: $BlockPos$Type): float
public "getOtherBlock"(arg0: $BlockState$Type, arg1: boolean): $Block
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DivinationRodItem$Type = ($DivinationRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DivinationRodItem_ = $DivinationRodItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$CandleBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CandleBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleBlock$Type = ($CandleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleBlock_ = $CandleBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism_kubejs/$RitualDummyItemType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RitualDummyItemType extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualDummyItemType$Type = ($RitualDummyItemType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualDummyItemType_ = $RitualDummyItemType$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$NonPathfindableBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"

export class $NonPathfindableBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonPathfindableBlock$Type = ($NonPathfindableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonPathfindableBlock_ = $NonPathfindableBlock$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/render/page/$BookPageRenderer" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$BookContentScreen, $BookContentScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookContentScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BookTextHolder, $BookTextHolder$Type} from "packages/com/klikli_dev/modonomicon/book/$BookTextHolder"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BookPage, $BookPage$Type} from "packages/com/klikli_dev/modonomicon/book/page/$BookPage"

export class $BookPageRenderer<T extends $BookPage> {
 "left": integer
 "top": integer

constructor(arg0: T)

public "getPage"(): T
public "renderTitle"(arg0: $GuiGraphics$Type, arg1: $BookTextHolder$Type, arg2: boolean, arg3: integer, arg4: integer): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$Type, arg1: $FormattedCharSequence$Type, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
public "drawWrappedStringNoShadow"(arg0: $GuiGraphics$Type, arg1: $Component$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "renderBookTextHolder"(arg0: $GuiGraphics$Type, arg1: $BookTextHolder$Type, arg2: $Font$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderBookTextHolder"(arg0: $GuiGraphics$Type, arg1: $BookTextHolder$Type, arg2: integer, arg3: integer, arg4: integer): void
public "getClickedComponentStyleAt"(arg0: double, arg1: double): $Style
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "onEndDisplayPage"(arg0: $BookContentScreen$Type): void
public "onBeginDisplayPage"(arg0: $BookContentScreen$Type, arg1: integer, arg2: integer): void
get "page"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPageRenderer$Type<T> = ($BookPageRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPageRenderer_<T> = $BookPageRenderer$Type<(T)>;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$SoulGemItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulGemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulGemItem$Type = ($SoulGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulGemItem_ = $SoulGemItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RitualRecipe, $RitualRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RitualRecipe$Serializer implements $RecipeSerializer<($RitualRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RitualRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RitualRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RitualRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RitualRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$Serializer$Type = ($RitualRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$Serializer_ = $RitualRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/storage/$DimensionalMatrixItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DimensionalMatrixItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalMatrixItem$Type = ($DimensionalMatrixItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalMatrixItem_ = $DimensionalMatrixItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $BookTextRenderer {

constructor(arg0: $Book$Type)

public "render"(arg0: string): $List<($MutableComponent)>
public "render"(arg0: string, arg1: $Style$Type): $List<($MutableComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTextRenderer$Type = ($BookTextRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTextRenderer_ = $BookTextRenderer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfBindingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfBindingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfBindingItem$Type = ($BookOfBindingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfBindingItem_ = $BookOfBindingItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonFoliotCleanerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonFoliotCleanerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonFoliotCleanerItem$Type = ($SummonFoliotCleanerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotCleanerItem_ = $SummonFoliotCleanerItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookIcon" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $BookIcon {

constructor(arg0: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer)

public static "fromJson"(arg0: $JsonElement$Type): $BookIcon
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookIcon
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$Type = ($BookIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookIcon_ = $BookIcon$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookCategoryBackgroundParallaxLayer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BookCategoryBackgroundParallaxLayer {
static readonly "CODEC": $Codec<($BookCategoryBackgroundParallaxLayer)>

constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: float)

public static "fromJson"(arg0: $JsonArray$Type): $List<($BookCategoryBackgroundParallaxLayer)>
public static "fromJson"(arg0: $JsonObject$Type): $BookCategoryBackgroundParallaxLayer
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookCategoryBackgroundParallaxLayer
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getBackground"(): $ResourceLocation
public "getVanishZoom"(): float
public "getSpeed"(): float
get "background"(): $ResourceLocation
get "vanishZoom"(): float
get "speed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategoryBackgroundParallaxLayer$Type = ($BookCategoryBackgroundParallaxLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategoryBackgroundParallaxLayer_ = $BookCategoryBackgroundParallaxLayer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$SpiritAttunedCrystalBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $SpiritAttunedCrystalBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAttunedCrystalBlock$Type = ($SpiritAttunedCrystalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritAttunedCrystalBlock_ = $SpiritAttunedCrystalBlock$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/api/multiblock/$Multiblock$SimulateResult" {
import {$StateMatcher, $StateMatcher$Type} from "packages/com/klikli_dev/modonomicon/api/multiblock/$StateMatcher"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Multiblock$SimulateResult {

 "test"(arg0: $Level$Type, arg1: $Rotation$Type): boolean
 "getCharacter"(): character
 "getStateMatcher"(): $StateMatcher
 "getWorldPosition"(): $BlockPos
}

export namespace $Multiblock$SimulateResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiblock$SimulateResult$Type = ($Multiblock$SimulateResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiblock$SimulateResult_ = $Multiblock$SimulateResult$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/effect/$DoubleJumpEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DoubleJumpEffect extends $MobEffect {
static readonly "ICON": $ResourceLocation
static readonly "EFFECT_RENDERER": $IClientMobEffectExtensions

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public static "getMaxJumps"(arg0: $Player$Type): integer
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleJumpEffect$Type = ($DoubleJumpEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleJumpEffect_ = $DoubleJumpEffect$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity" {
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ISkinnedCreatureMixin, $ISkinnedCreatureMixin$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$ISkinnedCreatureMixin"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SmartBrain, $SmartBrain$Type} from "packages/net/tslat/smartbrainlib/api/core/$SmartBrain"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBrainOwner, $SmartBrainOwner$Type} from "packages/net/tslat/smartbrainlib/api/$SmartBrainOwner"
import {$AgeableMob, $AgeableMob$Type} from "packages/net/minecraft/world/entity/$AgeableMob"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$BrainActivityGroup, $BrainActivityGroup$Type} from "packages/net/tslat/smartbrainlib/api/core/$BrainActivityGroup"
import {$SpiritJob, $SpiritJob$Type} from "packages/com/klikli_dev/occultism/common/entity/job/$SpiritJob"
import {$ExtendedSensor, $ExtendedSensor$Type} from "packages/net/tslat/smartbrainlib/api/core/sensor/$ExtendedSensor"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TamableAnimal, $TamableAnimal$Type} from "packages/net/minecraft/world/entity/$TamableAnimal"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WorkAreaSize, $WorkAreaSize$Type} from "packages/com/klikli_dev/occultism/api/common/data/$WorkAreaSize"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$SmartBrainSchedule, $SmartBrainSchedule$Type} from "packages/net/tslat/smartbrainlib/api/core/schedule/$SmartBrainSchedule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiritEntity extends $TamableAnimal implements $ISkinnedCreatureMixin, $MenuProvider, $SmartBrainOwner<($SpiritEntity)> {
static readonly "SKIN": $EntityDataAccessor<(integer)>
static readonly "DEFAULT_MAX_AGE": integer
static readonly "MAX_FILTER_SLOTS": integer
 "inventory": $ItemStackHandler
 "itemStackHandler": $LazyOptional<($ItemStackHandler)>
 "filterItemStackHandler": $LazyOptional<($ItemStackHandler)>
static readonly "BABY_START_AGE": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
 "leashHolder": $Entity
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $ItemStackHandler$Type)

public "init"(): void
public static "createAttributes"(): $AttributeSupplier$Builder
public "openScreen"(arg0: $Player$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "setSpiritMaxAge"(arg0: integer): void
public "getJobID"(): string
public "getTagFilter"(): string
public "getSpiritAge"(): integer
public "getExtractFacing"(): $Direction
public "setFilterBlacklist"(arg0: boolean): void
public "setExtractFacing"(arg0: $Direction$Type): void
public "setDepositPosition"(arg0: $BlockPos$Type): void
public "isFilterBlacklist"(): boolean
public "setWorkAreaSize"(arg0: $WorkAreaSize$Type): void
public "setExtractPosition"(arg0: $BlockPos$Type): void
public "setSpiritAge"(arg0: integer): void
public "setJobID"(arg0: string): void
public "setDepositFacing"(arg0: $Direction$Type): void
public "setTagFilter"(arg0: string): void
public "canDieFromAge"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getDimensions"(arg0: $Pose$Type): $EntityDimensions
public "getEntity"(): $LivingEntity
public "getDepositPosition"(): $Optional<($BlockPos)>
public "getExtractPosition"(): $Optional<($BlockPos)>
public "canPickupItem"(arg0: $ItemEntity$Type): boolean
public "getDepositFacing"(): $Direction
public "remakeBrain"(): void
public "getWorkAreaCenter"(): $BlockPos
public "getIdleTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getCoreTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getSpiritMaxAge"(): integer
public "setDepositEntityUUID"(arg0: $UUID$Type): void
public "getWorkAreaSize"(): $WorkAreaSize
public "setTame"(arg0: boolean): void
public "isInitialized"(): boolean
public "removeJob"(): void
public "doHurtTarget"(arg0: $Entity$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "finalizeSpawn"(arg0: $ServerLevelAccessor$Type, arg1: $DifficultyInstance$Type, arg2: $MobSpawnType$Type, arg3: $SpawnGroupData$Type, arg4: $CompoundTag$Type): $SpawnGroupData
public "getSensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
public "getFilterItems"(): $LazyOptional<($ItemStackHandler)>
public "interactAt"(arg0: $Player$Type, arg1: $Vec3$Type, arg2: $InteractionHand$Type): $InteractionResult
public "setJob"(arg0: $SpiritJob$Type): void
public "setJob"(arg0: $SpiritJob$Type, arg1: boolean): void
public "getJob"(): $Optional<($SpiritJob)>
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "setItemSlot"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): void
public "remove"(arg0: $Entity$RemovalReason$Type): void
public "getBreedOffspring"(arg0: $ServerLevel$Type, arg1: $AgeableMob$Type): $AgeableMob
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "handleAdditionalBrainSetup"(arg0: $SmartBrain$Type<(any)>): void
public "getDepositEntityUUID"(): $Optional<($UUID)>
public "setWorkAreaPosition"(arg0: $BlockPos$Type): void
public "getWorkAreaPosition"(): $Optional<($BlockPos)>
public "getDataParameterSkin"(): $EntityDataAccessor<(integer)>
public "getItemBySlot"(arg0: $EquipmentSlot$Type): $ItemStack
public "aiStep"(): void
public "die"(arg0: $DamageSource$Type): void
public "getSkinTypes"(): integer
public "selectRandomSkin"(): void
public "writeSkinToNBT"(arg0: $CompoundTag$Type): void
public "readSkinFromNBT"(arg0: $CompoundTag$Type): void
public "registerSkinDataParameter"(): void
public "getDisplayName"(): $Component
public "tickBrain"(arg0: $SpiritEntity$Type): void
public "getFightTasks"(): $BrainActivityGroup<(any)>
public "getAdditionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(any)>)>
public "getSchedule"(): $SmartBrainSchedule
public "getAlwaysRunningActivities"(): $Set<($Activity)>
public "getActivityPriorities"(): $List<($Activity)>
public "getDefaultActivity"(): $Activity
public "lithiumOnEquipmentChanged"(): void
public "tdv$getDynamicLightWorld"(): $Level
public "tdv$resetDynamicLight"(): void
public "tdv$shouldUpdateDynamicLight"(): boolean
public "tdv$getDynamicLightX"(): double
public "tdv$getDynamicLightY"(): double
public "tdv$getDynamicLightZ"(): double
public "tdv$lambdynlights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
public "tdv$lambdynlights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
public "getCachedFeetBlockState"(): $BlockState
set "spiritMaxAge"(value: integer)
get "jobID"(): string
get "tagFilter"(): string
get "spiritAge"(): integer
get "extractFacing"(): $Direction
set "filterBlacklist"(value: boolean)
set "extractFacing"(value: $Direction$Type)
set "depositPosition"(value: $BlockPos$Type)
get "filterBlacklist"(): boolean
set "workAreaSize"(value: $WorkAreaSize$Type)
set "extractPosition"(value: $BlockPos$Type)
set "spiritAge"(value: integer)
set "jobID"(value: string)
set "depositFacing"(value: $Direction$Type)
set "tagFilter"(value: string)
get "entity"(): $LivingEntity
get "depositPosition"(): $Optional<($BlockPos)>
get "extractPosition"(): $Optional<($BlockPos)>
get "depositFacing"(): $Direction
get "workAreaCenter"(): $BlockPos
get "idleTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "coreTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "spiritMaxAge"(): integer
set "depositEntityUUID"(value: $UUID$Type)
get "workAreaSize"(): $WorkAreaSize
set "tame"(value: boolean)
get "initialized"(): boolean
get "sensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
get "filterItems"(): $LazyOptional<($ItemStackHandler)>
set "job"(value: $SpiritJob$Type)
get "job"(): $Optional<($SpiritJob)>
get "depositEntityUUID"(): $Optional<($UUID)>
set "workAreaPosition"(value: $BlockPos$Type)
get "workAreaPosition"(): $Optional<($BlockPos)>
get "dataParameterSkin"(): $EntityDataAccessor<(integer)>
get "skinTypes"(): integer
get "displayName"(): $Component
get "fightTasks"(): $BrainActivityGroup<(any)>
get "additionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(any)>)>
get "schedule"(): $SmartBrainSchedule
get "alwaysRunningActivities"(): $Set<($Activity)>
get "activityPriorities"(): $List<($Activity)>
get "defaultActivity"(): $Activity
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritEntity$Type = ($SpiritEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritEntity_ = $SpiritEntity$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/$BookOverviewScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$BookCategoryScreen, $BookCategoryScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookCategoryScreen"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SyncBookUnlockStatesMessage, $SyncBookUnlockStatesMessage$Type} from "packages/com/klikli_dev/modonomicon/networking/$SyncBookUnlockStatesMessage"

export class $BookOverviewScreen extends $Screen {
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Book$Type)

public "getInnerY"(): integer
public "getInnerX"(): integer
public "getInnerHeight"(): integer
public "getBook"(): $Book
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getInnerWidth"(): integer
public "shouldCloseOnEsc"(): boolean
public "onClose"(): void
public "changeCategory"(arg0: integer): void
public "changeCategory"(arg0: $BookCategory$Type): void
public "getCurrentCategory"(): integer
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "handleComponentClicked"(arg0: $Style$Type): boolean
public "isPauseScreen"(): boolean
public "getMinecraft"(): $Minecraft
public "onSyncBookUnlockCapabilityMessage"(arg0: $SyncBookUnlockStatesMessage$Type): void
public "getBookOverviewTexture"(): $ResourceLocation
public "getCurrentCategoryScreen"(): $BookCategoryScreen
public "onDisplay"(): void
public "getFrameThicknessW"(): integer
public "getFrameThicknessH"(): integer
public "onCategoryChanged"(arg0: integer, arg1: integer): void
get "innerY"(): integer
get "innerX"(): integer
get "innerHeight"(): integer
get "book"(): $Book
get "innerWidth"(): integer
get "currentCategory"(): integer
get "pauseScreen"(): boolean
get "minecraft"(): $Minecraft
get "bookOverviewTexture"(): $ResourceLocation
get "currentCategoryScreen"(): $BookCategoryScreen
get "frameThicknessW"(): integer
get "frameThicknessH"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOverviewScreen$Type = ($BookOverviewScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOverviewScreen_ = $BookOverviewScreen$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/bookstate/$BookUnlockStates" {
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$BookCommand, $BookCommand$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCommand"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BookPage, $BookPage$Type} from "packages/com/klikli_dev/modonomicon/book/page/$BookPage"

export class $BookUnlockStates {
static readonly "CODEC": $Codec<($BookUnlockStates)>
 "readEntries": $ConcurrentMap<($ResourceLocation), ($Set<($ResourceLocation)>)>
 "unlockedPages": $ConcurrentMap<($ResourceLocation), ($Map<($ResourceLocation), ($Set<(integer)>)>)>
 "unlockedEntries": $ConcurrentMap<($ResourceLocation), ($Set<($ResourceLocation)>)>
 "unlockedCategories": $ConcurrentMap<($ResourceLocation), ($Set<($ResourceLocation)>)>
 "usedCommands": $ConcurrentMap<($ResourceLocation), ($Map<($ResourceLocation), (integer)>)>

constructor()
constructor(arg0: $ConcurrentMap$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, arg1: $ConcurrentMap$Type<($ResourceLocation$Type), ($Map$Type<($ResourceLocation$Type), ($Set$Type<(integer)>)>)>, arg2: $ConcurrentMap$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, arg3: $ConcurrentMap$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, arg4: $ConcurrentMap$Type<($ResourceLocation$Type), ($Map$Type<($ResourceLocation$Type), (integer)>)>)

public "update"(arg0: $ServerPlayer$Type): void
public "read"(arg0: $BookEntry$Type, arg1: $ServerPlayer$Type): boolean
public "reset"(arg0: $Book$Type): void
public "getBooks"(): $List<($ResourceLocation)>
public "isRead"(arg0: $BookEntry$Type): boolean
public "canRun"(arg0: $BookCommand$Type): boolean
public "getUnlockCode"(arg0: $Book$Type): string
public "getUnlockedPagesIn"(arg0: $BookEntry$Type): $List<($BookPage)>
public "applyUnlockCode"(arg0: string): $Book
public "isUnlocked"(arg0: $BookEntry$Type): boolean
public "isUnlocked"(arg0: $BookCategory$Type): boolean
public "isUnlocked"(arg0: $BookPage$Type): boolean
public "setRun"(arg0: $BookCommand$Type): void
get "books"(): $List<($ResourceLocation)>
set "run"(value: $BookCommand$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookUnlockStates$Type = ($BookUnlockStates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookUnlockStates_ = $BookUnlockStates$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/page/$BookPage" {
import {$BookTextRenderer, $BookTextRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer"
import {$BookCondition, $BookCondition$Type} from "packages/com/klikli_dev/modonomicon/book/conditions/$BookCondition"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContentBookEntry, $ContentBookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$ContentBookEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"

export class $BookPage {

constructor(arg0: string, arg1: $BookCondition$Type)

public "getType"(): $ResourceLocation
public "build"(arg0: $Level$Type, arg1: $ContentBookEntry$Type, arg2: integer): void
public "getCondition"(): $BookCondition
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getBook"(): $Book
public "getAnchor"(): string
public "prerenderMarkdown"(arg0: $BookTextRenderer$Type): void
public "matchesQuery"(arg0: string): boolean
public "getPageNumber"(): integer
public "setPageNumber"(arg0: integer): void
public "setParentEntry"(arg0: $ContentBookEntry$Type): void
public "getParentEntry"(): $ContentBookEntry
get "type"(): $ResourceLocation
get "condition"(): $BookCondition
get "book"(): $Book
get "anchor"(): string
get "pageNumber"(): integer
set "pageNumber"(value: integer)
set "parentEntry"(value: $ContentBookEntry$Type)
get "parentEntry"(): $ContentBookEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$Type = ($BookPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPage_ = $BookPage$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IOtherworldBlock {

 "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getUncoveredBlock"(): $Block
 "getCoveredBlock"(): $Block
 "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
 "getTier"(): $OtherworldBlockTier
 "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
}

export namespace $IOtherworldBlock {
const UNCOVERED: $Property<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOtherworldBlock$Type = ($IOtherworldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOtherworldBlock_ = $IOtherworldBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonFoliotTraderItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonFoliotTraderItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonFoliotTraderItem$Type = ($SummonFoliotTraderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotTraderItem_ = $SummonFoliotTraderItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/conditions/$BookCondition" {
import {$BookConditionContext, $BookConditionContext$Type} from "packages/com/klikli_dev/modonomicon/book/conditions/context/$BookConditionContext"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $BookCondition {

constructor(arg0: $Component$Type)

public "test"(arg0: $BookConditionContext$Type, arg1: $Player$Type): boolean
public "getType"(): $ResourceLocation
public static "fromJson"(arg0: $JsonObject$Type): $BookCondition
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookCondition
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public static "toNetwork"(arg0: $BookCondition$Type, arg1: $FriendlyByteBuf$Type): void
public "requiresMultiPassUnlockTest"(): boolean
public "testOnLoad"(): boolean
public "getTooltip"(arg0: $Player$Type, arg1: $BookConditionContext$Type): $List<($Component)>
public static "tooltipFromJson"(arg0: $JsonObject$Type): $MutableComponent
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCondition$Type = ($BookCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCondition_ = $BookCondition$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$SoulShardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulShardItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulShardItem$Type = ($SoulShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulShardItem_ = $SoulShardItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry$BookEntryData" {
import {$BookEntryParent, $BookEntryParent$Type} from "packages/com/klikli_dev/modonomicon/book/$BookEntryParent"
import {$BookIcon, $BookIcon$Type} from "packages/com/klikli_dev/modonomicon/book/$BookIcon"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BookCondition, $BookCondition$Type} from "packages/com/klikli_dev/modonomicon/book/conditions/$BookCondition"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BookEntry$BookEntryData extends $Record {

constructor(categoryId: $ResourceLocation$Type, parents: $List$Type<($BookEntryParent$Type)>, x: integer, y: integer, name: string, description: string, icon: $BookIcon$Type, entryBackgroundUIndex: integer, entryBackgroundVIndex: integer, condition: $BookCondition$Type, hideWhileLocked: boolean, showWhenAnyParentUnlocked: boolean)

public "y"(): integer
public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "parents"(): $List<($BookEntryParent)>
public "description"(): string
public "x"(): integer
public static "fromJson"(arg0: $JsonObject$Type, arg1: boolean): $BookEntry$BookEntryData
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookEntry$BookEntryData
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "icon"(): $BookIcon
public "categoryId"(): $ResourceLocation
public "condition"(): $BookCondition
public "hideWhileLocked"(): boolean
public "entryBackgroundUIndex"(): integer
public "entryBackgroundVIndex"(): integer
public "showWhenAnyParentUnlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$BookEntryData$Type = ($BookEntry$BookEntryData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry$BookEntryData_ = $BookEntry$BookEntryData$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/crops/$ReplantableCropsBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IReplantableCrops, $IReplantableCrops$Type} from "packages/com/klikli_dev/occultism/common/block/crops/$IReplantableCrops"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReplantableCropsBlock extends $CropBlock implements $IReplantableCrops {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $Supplier$Type<($Item$Type)>)

public "getSeedsItem"(): $ItemLike
public "getCropsItem"(): $ItemLike
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onHarvest"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type): $InteractionResult
get "seedsItem"(): $ItemLike
get "cropsItem"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplantableCropsBlock$Type = ($ReplantableCropsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplantableCropsBlock_ = $ReplantableCropsBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/data/$MachineReference" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GlobalBlockPos, $GlobalBlockPos$Type} from "packages/com/klikli_dev/occultism/api/common/data/$GlobalBlockPos"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MachineReference implements $INBTSerializable<($CompoundTag)> {
 "extractGlobalPos": $GlobalBlockPos
 "extractRegistryName": $ResourceLocation
 "extractChunkLoaded": boolean
 "extractFacing": $Direction
 "insertGlobalPos": $GlobalBlockPos
 "insertRegistryName": $ResourceLocation
 "insertChunkLoaded": boolean
 "insertFacing": $Direction
 "customName": string

constructor()
constructor(arg0: $GlobalBlockPos$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: $GlobalBlockPos$Type, arg4: $ResourceLocation$Type, arg5: boolean)

public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public static "from"(arg0: $BlockEntity$Type, arg1: $BlockEntity$Type): $MachineReference
public static "from"(arg0: $CompoundTag$Type): $MachineReference
public static "from"(arg0: $FriendlyByteBuf$Type): $MachineReference
public "isValidFor"(arg0: $Level$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getInsertItemStack"(): $ItemStack
public "getInsertItem"(): $Item
public "getExtractBlockEntity"(arg0: $Level$Type): $BlockEntity
public "getExtractItem"(): $Item
public "getExtractItemStack"(): $ItemStack
public "getInsertBlockEntity"(arg0: $Level$Type): $BlockEntity
get "insertItemStack"(): $ItemStack
get "insertItem"(): $Item
get "extractItem"(): $Item
get "extractItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineReference$Type = ($MachineReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineReference_ = $MachineReference$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$CrushingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CrushingRecipe, $CrushingRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$CrushingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CrushingRecipe$Serializer implements $RecipeSerializer<($CrushingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CrushingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CrushingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CrushingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CrushingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushingRecipe$Serializer$Type = ($CrushingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushingRecipe$Serializer_ = $CrushingRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/api/multiblock/$StateMatcher" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TriPredicate, $TriPredicate$Type} from "packages/com/klikli_dev/modonomicon/api/multiblock/$TriPredicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $StateMatcher {

 "getType"(): $ResourceLocation
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
 "getDisplayedState"(arg0: long): $BlockState
 "getStatePredicate"(): $TriPredicate<($BlockGetter), ($BlockPos), ($BlockState)>
 "countsTowardsTotalBlocks"(): boolean
}

export namespace $StateMatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateMatcher$Type = ($StateMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateMatcher_ = $StateMatcher$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$MinerRecipe$Serializer" {
import {$MinerRecipe, $MinerRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$MinerRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MinerRecipe$Serializer implements $RecipeSerializer<($MinerRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $MinerRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MinerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MinerRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MinerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinerRecipe$Serializer$Type = ($MinerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerRecipe$Serializer_ = $MinerRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$SpiritHealingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpiritHealingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritHealingItem$Type = ($SpiritHealingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritHealingItem_ = $SpiritHealingItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingManageMachineItem" {
import {$ItemMode, $ItemMode$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BookOfCallingItem, $BookOfCallingItem$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfCallingManageMachineItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
public "handleItemMode"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): $InteractionResult
public "setSpiritManagedMachineExtractLocation"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): boolean
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingManageMachineItem$Type = ($BookOfCallingManageMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingManageMachineItem_ = $BookOfCallingManageMachineItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$MinerSpiritItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinerSpiritItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(integer)>, arg2: $Supplier$Type<(integer)>, arg3: $Supplier$Type<(integer)>)

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinerSpiritItem$Type = ($MinerSpiritItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerSpiritItem_ = $MinerSpiritItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/network/$IMessage" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export interface $IMessage {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "onClientReceived"(arg0: $Minecraft$Type, arg1: $Player$Type, arg2: $NetworkEvent$Context$Type): void
 "onServerReceived"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $NetworkEvent$Context$Type): void
}

export namespace $IMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMessage$Type = ($IMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMessage_ = $IMessage$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingTransportItems" {
import {$ItemMode, $ItemMode$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookOfCallingItem, $BookOfCallingItem$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfCallingTransportItems extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingTransportItems$Type = ($BookOfCallingTransportItems);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingTransportItems_ = $BookOfCallingTransportItems$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$MinerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$WeightedOutputIngredient, $WeightedOutputIngredient$Type} from "packages/com/klikli_dev/occultism/common/misc/$WeightedOutputIngredient"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$MinerRecipe$Serializer, $MinerRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$MinerRecipe$Serializer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MinerRecipe implements $Recipe<($RecipeWrapper)> {
static "SERIALIZER": $MinerRecipe$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $WeightedOutputIngredient$Type)

public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public "getWeightedOutput"(): $WeightedOutputIngredient
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeWrapper$Type): $NonNullList<($ItemStack)>
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
get "weightedOutput"(): $WeightedOutputIngredient
get "special"(): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
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
export type $MinerRecipe$Type = ($MinerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerRecipe_ = $MinerRecipe$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookCommand" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"

export class $BookCommand {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: string, arg5: string)

public "execute"(arg0: $ServerPlayer$Type): void
public "getId"(): $ResourceLocation
public "build"(arg0: $Book$Type): void
public static "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BookCommand
public static "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BookCommand
public "getMaxUses"(): integer
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getSuccessMessage"(): string
public "getCommand"(): string
public "getBook"(): $Book
public "getPermissionLevel"(): integer
public "getFailureMessage"(): string
get "id"(): $ResourceLocation
get "maxUses"(): integer
get "successMessage"(): string
get "command"(): string
get "book"(): $Book
get "permissionLevel"(): integer
get "failureMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCommand$Type = ($BookCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCommand_ = $BookCommand$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/storage/$StableWormholeBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StableWormholeBlock extends $Block implements $EntityBlock {
static readonly "LINKED": $Property<(boolean)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWormholeBlock$Type = ($StableWormholeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableWormholeBlock_ = $StableWormholeBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritTradeRecipe$Serializer" {
import {$SpiritTradeRecipe, $SpiritTradeRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritTradeRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpiritTradeRecipe$Serializer implements $RecipeSerializer<($SpiritTradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpiritTradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpiritTradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpiritTradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpiritTradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTradeRecipe$Serializer$Type = ($SpiritTradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTradeRecipe$Serializer_ = $SpiritTradeRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHandleItemMode, $IHandleItemMode$Type} from "packages/com/klikli_dev/occultism/api/common/item/$IHandleItemMode"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ItemMode, $ItemMode$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfCallingItem extends $Item implements $IHandleItemMode {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: string, arg2: $Predicate$Type<($SpiritEntity$Type)>)

public "getTranslationKeyBase"(): string
public "getItemMode"(arg0: $ItemStack$Type): integer
public "getItemModes"(): $List<($ItemMode)>
public "setItemMode"(arg0: $ItemStack$Type, arg1: integer): void
public "getCurrentItemMode"(arg0: $ItemStack$Type): $ItemMode
public "modeValue"(arg0: $ItemMode$Type): integer
public "nextItemMode"(arg0: $ItemStack$Type): $ItemMode
public "useWorkAreaSize"(): boolean
public "handleItemMode"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "translationKeyBase"(): string
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingItem$Type = ($BookOfCallingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingItem_ = $BookOfCallingItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$ChalkGlyphBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ChalkGlyphBlock extends $Block {
static readonly "SIGN": $IntegerProperty
static readonly "MAX_SIGN": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(integer)>, arg2: $Supplier$Type<($Item$Type)>)

public "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $Fluid$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getChalk"(): $Item
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getColor"(): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
get "chalk"(): $Item
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkGlyphBlock$Type = ($ChalkGlyphBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkGlyphBlock_ = $ChalkGlyphBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$DimensionalMineshaftBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DimensionalMineshaftBlock extends $Block implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalMineshaftBlock$Type = ($DimensionalMineshaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalMineshaftBlock_ = $DimensionalMineshaftBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/storage/$StorageControllerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageControllerBlock extends $Block implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$Type = ($StorageControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlock_ = $StorageControllerBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$OtherworldPickaxeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IOtherworldTool, $IOtherworldTool$Type} from "packages/com/klikli_dev/occultism/api/common/item/$IOtherworldTool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OtherworldPickaxeItem extends $PickaxeItem implements $IOtherworldTool {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "getHarvestTier"(arg0: $ItemStack$Type): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldPickaxeItem$Type = ($OtherworldPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldPickaxeItem_ = $OtherworldPickaxeItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/item/$IHandleItemMode" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IHandleItemMode {

 "getItemMode"(arg0: $ItemStack$Type): integer
 "setItemMode"(arg0: $ItemStack$Type, arg1: integer): void
}

export namespace $IHandleItemMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandleItemMode$Type = ($IHandleItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandleItemMode_ = $IHandleItemMode$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/entity/familiar/$IFamiliar" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IFamiliar {

 "isEffectEnabled"(arg0: $LivingEntity$Type): boolean
 "curioTick"(arg0: $LivingEntity$Type): void
 "getFamiliarEntity"(): $Entity
 "getFamiliarOwner"(): $LivingEntity
 "getFamiliarEffects"(): $Iterable<($MobEffectInstance)>
 "setFamiliarOwner"(arg0: $LivingEntity$Type): void
 "blacksmithUpgrade"(): void
 "canBlacksmithUpgrade"(): boolean
}

export namespace $IFamiliar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFamiliar$Type = ($IFamiliar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFamiliar_ = $IFamiliar$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/entries/$ContentBookEntry" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$BookCategoryScreen, $BookCategoryScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookCategoryScreen"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$BookContentScreen, $BookContentScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookContentScreen"
import {$BookTextRenderer, $BookTextRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookEntry$BookEntryData, $BookEntry$BookEntryData$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry$BookEntryData"
import {$BookPage, $BookPage$Type} from "packages/com/klikli_dev/modonomicon/book/page/$BookPage"

export class $ContentBookEntry extends $BookEntry {

constructor(arg0: $ResourceLocation$Type, arg1: $BookEntry$BookEntryData$Type, arg2: $ResourceLocation$Type, arg3: $List$Type<($BookPage$Type)>)

public "getType"(): $ResourceLocation
public "build"(arg0: $Level$Type, arg1: $BookCategory$Type): void
public static "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: boolean): $ContentBookEntry
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ContentBookEntry
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getPages"(): $List<($BookPage)>
public "openEntry"(arg0: $BookCategoryScreen$Type): $BookContentScreen
public "prerenderMarkdown"(arg0: $BookTextRenderer$Type): void
public "matchesQuery"(arg0: string): boolean
public "getPageNumberForAnchor"(arg0: string): integer
public "getUnlockedPagesFor"(arg0: $Player$Type): $List<($BookPage)>
get "type"(): $ResourceLocation
get "pages"(): $List<($BookPage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentBookEntry$Type = ($ContentBookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentBookEntry_ = $ContentBookEntry$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe$Serializer" {
import {$ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory, $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ItemStackFakeInventoryRecipe, $ItemStackFakeInventoryRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemStackFakeInventoryRecipe$Serializer {

constructor()

public "write"<T extends $ItemStackFakeInventoryRecipe>(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "read"<T extends $ItemStackFakeInventoryRecipe>(arg0: $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory$Type<(T)>, arg1: $ResourceLocation$Type, arg2: $JsonObject$Type): T
public "read"<T extends $ItemStackFakeInventoryRecipe>(arg0: $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory$Type<(T)>, arg1: $ResourceLocation$Type, arg2: $FriendlyByteBuf$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackFakeInventoryRecipe$Serializer$Type = ($ItemStackFakeInventoryRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFakeInventoryRecipe$Serializer_ = $ItemStackFakeInventoryRecipe$Serializer$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/blockentity/$GoldenSacrificialBowlBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multiblock, $Multiblock$Type} from "packages/com/klikli_dev/modonomicon/api/multiblock/$Multiblock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RitualRecipe, $RitualRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SacrificialBowlBlockEntity, $SacrificialBowlBlockEntity$Type} from "packages/com/klikli_dev/occultism/common/blockentity/$SacrificialBowlBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldenSacrificialBowlBlockEntity extends $SacrificialBowlBlockEntity {
 "currentRitualRecipe": $RitualRecipe
 "currentRitualRecipeId": $ResourceLocation
 "castingPlayerId": $UUID
 "castingPlayer": $ServerPlayer
 "remainingAdditionalIngredients": $List<($Ingredient)>
 "consumedIngredients": $List<($ItemStack)>
 "sacrificeProvided": boolean
 "itemUseProvided": boolean
 "currentTime": integer
 "rightClickItemListener": $Consumer<($PlayerInteractEvent$RightClickItem)>
 "livingDeathEventListener": $Consumer<($LivingDeathEvent)>
 "lastChangeTime": long
 "itemStackHandler": $ItemStackHandler
 "lazyItemStackHandler": $LazyOptional<($ItemStackHandler)>
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(): void
public "onPlayerRightClickItem"(arg0: $PlayerInteractEvent$RightClickItem$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "restoreCastingPlayer"(): void
public "getCurrentRitualRecipe"(): $RitualRecipe
public static "getDifference"(arg0: $Multiblock$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $Map<($BlockPos), ($Block)>
public "stopRitual"(arg0: boolean): void
public "activate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $InteractionHand$Type, arg4: $Direction$Type): boolean
public "loadNetwork"(arg0: $CompoundTag$Type): void
public "saveNetwork"(arg0: $CompoundTag$Type): $CompoundTag
public "itemUseFulfilled"(): boolean
public "sacrificeFulfilled"(): boolean
public "notifySacrifice"(arg0: $LivingEntity$Type): void
public "notifyItemUse"(arg0: $PlayerInteractEvent$RightClickItem$Type): void
public "startRitual"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: $RitualRecipe$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "onLivingDeath"(arg0: $LivingDeathEvent$Type): void
get "currentRitualRecipe"(): $RitualRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenSacrificialBowlBlockEntity$Type = ($GoldenSacrificialBowlBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenSacrificialBowlBlockEntity_ = $GoldenSacrificialBowlBlockEntity$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/level/multichunk/$MultiChunkFeatureConfig" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $MultiChunkFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($MultiChunkFeatureConfig)>
readonly "maxChunksToRoot": integer
readonly "chanceToGenerate": integer
readonly "minGenerationHeight": integer
readonly "maxGenerationHeight": integer
readonly "featureSeedSalt": integer
readonly "grassChance": float
readonly "treeChance": float
readonly "vineChance": float
readonly "ceilingLightChance": float
readonly "otherworldTreeFeature": $Holder<($PlacedFeature)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: $Holder$Type<($PlacedFeature$Type)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiChunkFeatureConfig$Type = ($MultiChunkFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiChunkFeatureConfig_ = $MultiChunkFeatureConfig$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$OtherworldSaplingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SaplingBlock, $SaplingBlock$Type} from "packages/net/minecraft/world/level/block/$SaplingBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AbstractTreeGrower, $AbstractTreeGrower$Type} from "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower"

export class $OtherworldSaplingBlock extends $SaplingBlock {
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $AbstractTreeGrower$Type, arg1: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldSaplingBlock$Type = ($OtherworldSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldSaplingBlock_ = $OtherworldSaplingBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/armor/$OtherworldGogglesItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OtherworldGogglesItem extends $ArmorItem {
static readonly "NBT_GOGGLES": string
static readonly "TEXTURE": string
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public static "isGogglesItem"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldGogglesItem$Type = ($OtherworldGogglesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldGogglesItem_ = $OtherworldGogglesItem$Type;
}}
declare module "packages/com/klikli_dev/occultism_kubejs/$OccultismRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $OccultismRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "readOutputItem"(arg0: any): $OutputItem
public "writeOutputItem"(arg0: $OutputItem$Type): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OccultismRecipeJS$Type = ($OccultismRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OccultismRecipeJS_ = $OccultismRecipeJS$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$InfusedPickaxeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IOtherworldTool, $IOtherworldTool$Type} from "packages/com/klikli_dev/occultism/api/common/item/$IOtherworldTool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InfusedPickaxeItem extends $PickaxeItem implements $IOtherworldTool {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getHarvestTier"(arg0: $ItemStack$Type): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusedPickaxeItem$Type = ($InfusedPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusedPickaxeItem_ = $InfusedPickaxeItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/networking/$SyncBookUnlockStatesMessage" {
import {$Message, $Message$Type} from "packages/com/klikli_dev/modonomicon/networking/$Message"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookUnlockStates, $BookUnlockStates$Type} from "packages/com/klikli_dev/modonomicon/bookstate/$BookUnlockStates"

export class $SyncBookUnlockStatesMessage implements $Message {
static readonly "ID": $ResourceLocation
 "states": $BookUnlockStates

constructor(arg0: $BookUnlockStates$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "getId"(): $ResourceLocation
public "onClientReceived"(arg0: $Minecraft$Type, arg1: $Player$Type): void
public "onServerReceived"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncBookUnlockStatesMessage$Type = ($SyncBookUnlockStatesMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncBookUnlockStatesMessage_ = $SyncBookUnlockStatesMessage$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$SpiritWallTorchBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$WallTorchBlock, $WallTorchBlock$Type} from "packages/net/minecraft/world/level/block/$WallTorchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpiritWallTorchBlock extends $WallTorchBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritWallTorchBlock$Type = ($SpiritWallTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritWallTorchBlock_ = $SpiritWallTorchBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/entity/job/$SpiritJob" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$BrainActivityGroup, $BrainActivityGroup$Type} from "packages/net/tslat/smartbrainlib/api/core/$BrainActivityGroup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ExtendedSensor, $ExtendedSensor$Type} from "packages/net/tslat/smartbrainlib/api/core/sensor/$ExtendedSensor"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $SpiritJob implements $INBTSerializable<($CompoundTag)> {
 "entity": $SpiritEntity
 "factoryId": $ResourceLocation

constructor(arg0: $SpiritEntity$Type)

public "update"(): void
public "init"(): void
public "cleanup"(): void
public static "from"(arg0: $SpiritEntity$Type, arg1: $CompoundTag$Type): $SpiritJob
public "getDimensions"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): $EntityDimensions
public "canPickupItem"(arg0: $ItemEntity$Type): boolean
public "setFactoryId"(arg0: $ResourceLocation$Type): void
public "onChangeWorkArea"(): void
public "getFactoryID"(): $ResourceLocation
public "getItemsToPickUp"(): $List<($Ingredient)>
public "writeJobToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getIdleTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "readJobFromNBT"(arg0: $CompoundTag$Type): void
public "getCoreTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getSensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
public "handleAdditionalBrainSetup"(arg0: $Brain$Type<(any)>): void
set "factoryId"(value: $ResourceLocation$Type)
get "factoryID"(): $ResourceLocation
get "itemsToPickUp"(): $List<($Ingredient)>
get "idleTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "coreTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "sensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJob$Type = ($SpiritJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJob_ = $SpiritJob$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookTextHolder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $BookTextHolder {
static readonly "EMPTY": $BookTextHolder

constructor(arg0: string)
constructor(arg0: $Component$Type)

public "equals"(arg0: any): boolean
public "isEmpty"(): boolean
public "getKey"(): string
public "getString"(): string
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookTextHolder
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getComponent"(): $Component
public "hasComponent"(): boolean
get "empty"(): boolean
get "key"(): string
get "string"(): string
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTextHolder$Type = ($BookTextHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTextHolder_ = $BookTextHolder$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonDjinniTest" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonDjinniTest extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonDjinniTest$Type = ($SummonDjinniTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonDjinniTest_ = $SummonDjinniTest$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/item/$IOtherworldTool" {
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IOtherworldTool {

 "getHarvestTier"(arg0: $ItemStack$Type): $OtherworldBlockTier

(arg0: $ItemStack$Type): $OtherworldBlockTier
}

export namespace $IOtherworldTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOtherworldTool$Type = ($IOtherworldTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOtherworldTool_ = $IOtherworldTool$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/otherworld/$OtherworldBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OtherworldBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "m_41467_"(): string
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldBlockItem$Type = ($OtherworldBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldBlockItem_ = $OtherworldBlockItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$GoldenSacrificialBowlBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GoldenSacrificialBowlBlock extends $Block implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenSacrificialBowlBlock$Type = ($GoldenSacrificialBowlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenSacrificialBowlBlock_ = $GoldenSacrificialBowlBlock$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/networking/$Message" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $Message {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "getId"(): $ResourceLocation
 "onClientReceived"(arg0: $Minecraft$Type, arg1: $Player$Type): void
 "onServerReceived"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type): void
}

export namespace $Message {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/level/multichunk/$IMultiChunkSubFeature" {
import {$MultiChunkFeatureConfig, $MultiChunkFeatureConfig$Type} from "packages/com/klikli_dev/occultism/common/level/multichunk/$MultiChunkFeatureConfig"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IMultiChunkSubFeature {

 "place"(arg0: $WorldGenLevel$Type, arg1: $ChunkGenerator$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $AABB$Type, arg5: $MultiChunkFeatureConfig$Type): boolean

(arg0: $WorldGenLevel$Type, arg1: $ChunkGenerator$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $AABB$Type, arg5: $MultiChunkFeatureConfig$Type): boolean
}

export namespace $IMultiChunkSubFeature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiChunkSubFeature$Type = ($IMultiChunkSubFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiChunkSubFeature_ = $IMultiChunkSubFeature$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$ChalkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ChalkGlyphBlock, $ChalkGlyphBlock$Type} from "packages/com/klikli_dev/occultism/common/block/$ChalkGlyphBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChalkItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($ChalkGlyphBlock$Type)>)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkItem$Type = ($ChalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkItem_ = $ChalkItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$SpiritTorchBlock" {
import {$TorchBlock, $TorchBlock$Type} from "packages/net/minecraft/world/level/block/$TorchBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpiritTorchBlock extends $TorchBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTorchBlock$Type = ($SpiritTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTorchBlock_ = $SpiritTorchBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$OtherstoneNaturalBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOtherworldBlock, $IOtherworldBlock$Type} from "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OtherstoneNaturalBlock extends $Block implements $IOtherworldBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getUncoveredBlock"(): $Block
public "getCoveredBlock"(): $Block
public "getDescriptionId"(): string
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTier"(): $OtherworldBlockTier
public "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
get "uncoveredBlock"(): $Block
get "coveredBlock"(): $Block
get "descriptionId"(): string
get "tier"(): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherstoneNaturalBlock$Type = ($OtherstoneNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherstoneNaturalBlock_ = $OtherstoneNaturalBlock$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/$BookPaginatedScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookOverviewScreen, $BookOverviewScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookOverviewScreen"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookScreenWithButtons, $BookScreenWithButtons$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookScreenWithButtons"

export class $BookPaginatedScreen extends $Screen implements $BookScreenWithButtons {
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "BOOK_BACKGROUND_WIDTH": integer
static readonly "BOOK_BACKGROUND_HEIGHT": integer
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $Component$Type, arg1: $BookOverviewScreen$Type)

public "canSeeBackButton"(): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "back"(): void
public "handleBackButton"(arg0: $Button$Type): void
public "canSeeArrowButton"(arg0: boolean): boolean
public "handleArrowButton"(arg0: $Button$Type): void
public "handleExitButton"(arg0: $Button$Type): void
public "getBook"(): $Book
public "setTooltip"(arg0: $List$Type<($Component$Type)>): void
get "book"(): $Book
set "tooltip"(value: $List$Type<($Component$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPaginatedScreen$Type = ($BookPaginatedScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPaginatedScreen_ = $BookPaginatedScreen$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/$DummyTooltipItem" {
import {$GoldenSacrificialBowlBlockEntity, $GoldenSacrificialBowlBlockEntity$Type} from "packages/com/klikli_dev/occultism/common/blockentity/$GoldenSacrificialBowlBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DummyTooltipItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "performRitual"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $Player$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyTooltipItem$Type = ($DummyTooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyTooltipItem_ = $DummyTooltipItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfBindingBoundItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfBindingBoundItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfBindingBoundItem$Type = ($BookOfBindingBoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfBindingBoundItem_ = $BookOfBindingBoundItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$Book" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$BookCommand, $BookCommand$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCommand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BookFrameOverlay, $BookFrameOverlay$Type} from "packages/com/klikli_dev/modonomicon/book/$BookFrameOverlay"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$BookTextRenderer, $BookTextRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Book {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: string, arg3: $ResourceLocation$Type, arg4: boolean, arg5: $ResourceLocation$Type, arg6: string, arg7: $ResourceLocation$Type, arg8: $ResourceLocation$Type, arg9: $ResourceLocation$Type, arg10: $BookFrameOverlay$Type, arg11: $BookFrameOverlay$Type, arg12: $BookFrameOverlay$Type, arg13: $BookFrameOverlay$Type, arg14: $ResourceLocation$Type, arg15: $ResourceLocation$Type, arg16: $ResourceLocation$Type, arg17: integer, arg18: float, arg19: boolean, arg20: integer, arg21: integer, arg22: integer, arg23: integer, arg24: integer, arg25: integer, arg26: integer, arg27: integer)

public "getName"(): string
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$Type): void
public "getEntries"(): $Map<($ResourceLocation), ($BookEntry)>
public "build"(arg0: $Level$Type): void
public "getEntry"(arg0: $ResourceLocation$Type): $BookEntry
public static "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $Book
public static "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $Book
public "getBookItem"(): $ItemStack
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getCategory"(arg0: $ResourceLocation$Type): $BookCategory
public "getCommand"(arg0: $ResourceLocation$Type): $BookCommand
public "generateBookItem"(): boolean
public "getDefaultTitleColor"(): integer
public "addCategory"(arg0: $BookCategory$Type): void
public "getCustomBookItem"(): $ResourceLocation
public "getFrameTexture"(): $ResourceLocation
public "getTopFrameOverlay"(): $BookFrameOverlay
public "getTurnPageSound"(): $ResourceLocation
public "prerenderMarkdown"(arg0: $BookTextRenderer$Type): void
public "addCommand"(arg0: $BookCommand$Type): void
public "getBookTextOffsetWidth"(): integer
public "getModel"(): $ResourceLocation
public "getTooltip"(): string
public "getFont"(): $ResourceLocation
public "getCategories"(): $Map<($ResourceLocation), ($BookCategory)>
public "getCommands"(): $ConcurrentMap<($ResourceLocation), ($BookCommand)>
public "getCreativeTab"(): string
public "autoAddReadConditions"(): boolean
public "getBookTextOffsetY"(): integer
public "getBookTextOffsetX"(): integer
public "getCraftingTexture"(): $ResourceLocation
public "getCategoriesSorted"(): $List<($BookCategory)>
public "getBookContentTexture"(): $ResourceLocation
public "getLeftFrameOverlay"(): $BookFrameOverlay
public "getSearchButtonXOffset"(): integer
public "getReadAllButtonYOffset"(): integer
public "getCategoryButtonIconScale"(): float
public "getBookOverviewTexture"(): $ResourceLocation
public "getRightFrameOverlay"(): $BookFrameOverlay
public "getSearchButtonYOffset"(): integer
public "getCategoryButtonXOffset"(): integer
public "getCategoryButtonYOffset"(): integer
public "getBottomFrameOverlay"(): $BookFrameOverlay
get "name"(): string
get "id"(): $ResourceLocation
get "entries"(): $Map<($ResourceLocation), ($BookEntry)>
get "bookItem"(): $ItemStack
get "defaultTitleColor"(): integer
get "customBookItem"(): $ResourceLocation
get "frameTexture"(): $ResourceLocation
get "topFrameOverlay"(): $BookFrameOverlay
get "turnPageSound"(): $ResourceLocation
get "bookTextOffsetWidth"(): integer
get "model"(): $ResourceLocation
get "tooltip"(): string
get "font"(): $ResourceLocation
get "categories"(): $Map<($ResourceLocation), ($BookCategory)>
get "commands"(): $ConcurrentMap<($ResourceLocation), ($BookCommand)>
get "creativeTab"(): string
get "bookTextOffsetY"(): integer
get "bookTextOffsetX"(): integer
get "craftingTexture"(): $ResourceLocation
get "categoriesSorted"(): $List<($BookCategory)>
get "bookContentTexture"(): $ResourceLocation
get "leftFrameOverlay"(): $BookFrameOverlay
get "searchButtonXOffset"(): integer
get "readAllButtonYOffset"(): integer
get "categoryButtonIconScale"(): float
get "bookOverviewTexture"(): $ResourceLocation
get "rightFrameOverlay"(): $BookFrameOverlay
get "searchButtonYOffset"(): integer
get "categoryButtonXOffset"(): integer
get "categoryButtonYOffset"(): integer
get "bottomFrameOverlay"(): $BookFrameOverlay
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$Type = ($Book);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Book_ = $Book$Type;
}}
declare module "packages/com/klikli_dev/occultism/registry/$OccultismEffects$ModEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $OccultismEffects$ModEffect extends $MobEffect {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OccultismEffects$ModEffect$Type = ($OccultismEffects$ModEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OccultismEffects$ModEffect_ = $OccultismEffects$ModEffect$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/data/$GlobalBlockPos" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GlobalBlockPos implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $BlockPos$Type, arg1: $Level$Type)
constructor(arg0: $BlockPos$Type, arg1: $ResourceKey$Type<($Level$Type)>)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public static "from"(arg0: $FriendlyByteBuf$Type): $GlobalBlockPos
public static "from"(arg0: $BlockEntity$Type): $GlobalBlockPos
public static "from"(arg0: $CompoundTag$Type): $GlobalBlockPos
public "getDimensionKey"(): $ResourceKey<($Level)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getPos"(): $BlockPos
get "dimensionKey"(): $ResourceKey<($Level)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalBlockPos$Type = ($GlobalBlockPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobalBlockPos_ = $GlobalBlockPos$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/client/gui/book/$BookCategoryScreen" {
import {$BookContentScreen, $BookContentScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookContentScreen"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$ContentBookEntry, $ContentBookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$ContentBookEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BookOverviewScreen, $BookOverviewScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookOverviewScreen"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"
import {$BookCategoryBackgroundParallaxLayer, $BookCategoryBackgroundParallaxLayer$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategoryBackgroundParallaxLayer"

export class $BookCategoryScreen {
static readonly "ENTRY_GRID_SCALE": integer
static readonly "ENTRY_GAP": integer
static readonly "MAX_SCROLL": integer
static readonly "ENTRY_HEIGHT": integer
static readonly "ENTRY_WIDTH": integer

constructor(arg0: $BookOverviewScreen$Type, arg1: $BookCategory$Type)

public "onClose"(): void
public "getXOffset"(): float
public "zoom"(arg0: double): void
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "renderBackgroundParallaxLayer"(arg0: $GuiGraphics$Type, arg1: $BookCategoryBackgroundParallaxLayer$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: integer, arg13: integer, arg14: float): void
public "getCategory"(): $BookCategory
public "openEntry"(arg0: $BookEntry$Type): $BookContentScreen
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderBackground"(arg0: $GuiGraphics$Type): void
public "openContentEntry"(arg0: $ContentBookEntry$Type): $BookContentScreen
public "getYOffset"(): float
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "getBookOverviewScreen"(): $BookOverviewScreen
public "renderEntryTooltips"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "setOpenEntry"(arg0: $ResourceLocation$Type): void
public "onDisplay"(): void
public "onCloseEntry"(arg0: $BookContentScreen$Type): void
get "xOffset"(): float
get "category"(): $BookCategory
get "yOffset"(): float
get "bookOverviewScreen"(): $BookOverviewScreen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategoryScreen$Type = ($BookCategoryScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategoryScreen_ = $BookCategoryScreen$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/blockentity/$IStorageController" {
import {$MachineReference, $MachineReference$Type} from "packages/com/klikli_dev/occultism/api/common/data/$MachineReference"
import {$MessageUpdateStacks, $MessageUpdateStacks$Type} from "packages/com/klikli_dev/occultism/network/$MessageUpdateStacks"
import {$GlobalBlockPos, $GlobalBlockPos$Type} from "packages/com/klikli_dev/occultism/api/common/data/$GlobalBlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IItemStackComparator, $IItemStackComparator$Type} from "packages/com/klikli_dev/occultism/api/common/container/$IItemStackComparator"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IStorageController {

 "setMaxSlots"(arg0: integer): void
 "setLinkedMachines"(arg0: $Map$Type<($GlobalBlockPos$Type), ($MachineReference$Type)>): void
 "getUsedSlots"(): integer
 "getAvailableAmount"(arg0: $IItemStackComparator$Type): integer
 "addDepositOrder"(arg0: $GlobalBlockPos$Type, arg1: $IItemStackComparator$Type, arg2: integer): void
 "getMaxSlots"(): integer
 "linkMachine"(arg0: $MachineReference$Type): void
 "getLinkedMachines"(): $Map<($GlobalBlockPos), ($MachineReference)>
 "onContentsChanged"(): void
 "isBlacklisted"(arg0: $ItemStack$Type): boolean
 "insertStack"(arg0: $ItemStack$Type, arg1: boolean): integer
 "getItemStack"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: integer, arg2: boolean): $ItemStack
 "getStacks"(): $List<($ItemStack)>
 "getMessageUpdateStacks"(): $MessageUpdateStacks
 "getOneOfMostCommonItem"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: boolean): $ItemStack
 "addDepositOrderSpirit"(arg0: $GlobalBlockPos$Type, arg1: $UUID$Type): void
 "removeDepositOrderSpirit"(arg0: $GlobalBlockPos$Type): void
}

export namespace $IStorageController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageController$Type = ($IStorageController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageController_ = $IStorageController$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/storage/$StorageStabilizerBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $StorageStabilizerBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "notifyStorageControllers"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageStabilizerBlock$Type = ($StorageStabilizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageStabilizerBlock_ = $StorageStabilizerBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$OtherworldSaplingNaturalBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SaplingBlock, $SaplingBlock$Type} from "packages/net/minecraft/world/level/block/$SaplingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOtherworldBlock, $IOtherworldBlock$Type} from "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractTreeGrower, $AbstractTreeGrower$Type} from "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower"

export class $OtherworldSaplingNaturalBlock extends $SaplingBlock implements $IOtherworldBlock {
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $AbstractTreeGrower$Type, arg1: $BlockBehaviour$Properties$Type)

public "getUncoveredBlock"(): $Block
public "getCoveredBlock"(): $Block
public "getDescriptionId"(): string
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTier"(): $OtherworldBlockTier
public "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
get "uncoveredBlock"(): $Block
get "coveredBlock"(): $Block
get "descriptionId"(): string
get "tier"(): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldSaplingNaturalBlock$Type = ($OtherworldSaplingNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldSaplingNaturalBlock_ = $OtherworldSaplingNaturalBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingLumberjackItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemMode, $ItemMode$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BookOfCallingItem, $BookOfCallingItem$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfCallingLumberjackItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingLumberjackItem$Type = ($BookOfCallingLumberjackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingLumberjackItem_ = $BookOfCallingLumberjackItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/misc/$OutputIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OutputIngredient {

constructor(arg0: $Ingredient$Type)
constructor(arg0: $Ingredient$Type, arg1: $ItemStack$Type)

public "getStack"(): $ItemStack
public "getIngredient"(): $Ingredient
public "getOutputStackInfo"(): $ItemStack
get "stack"(): $ItemStack
get "ingredient"(): $Ingredient
get "outputStackInfo"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputIngredient$Type = ($OutputIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputIngredient_ = $OutputIngredient$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorkAreaSize, $WorkAreaSize$Type} from "packages/com/klikli_dev/occultism/api/common/data/$WorkAreaSize"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemMode {

constructor(arg0: string, arg1: boolean)
constructor(arg0: string)

public "toString"(): string
public "setValue"(arg0: integer): $ItemMode
public "handle"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $ItemStack$Type, arg5: $Direction$Type): boolean
public "openGUI"(arg0: $WorkAreaSize$Type): void
public "translationKey"(): string
public "setTranslationKey"(arg0: string): $ItemMode
public "hasSize"(): boolean
public "setHasSize"(arg0: boolean): $ItemMode
set "value"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMode$Type = ($ItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMode_ = $ItemMode$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry" {
import {$BookIcon, $BookIcon$Type} from "packages/com/klikli_dev/modonomicon/book/$BookIcon"
import {$BookCategory, $BookCategory$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCategory"
import {$BookCategoryScreen, $BookCategoryScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookCategoryScreen"
import {$BookCondition, $BookCondition$Type} from "packages/com/klikli_dev/modonomicon/book/conditions/$BookCondition"
import {$BookCommand, $BookCommand$Type} from "packages/com/klikli_dev/modonomicon/book/$BookCommand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$BookContentScreen, $BookContentScreen$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/$BookContentScreen"
import {$BookTextRenderer, $BookTextRenderer$Type} from "packages/com/klikli_dev/modonomicon/client/gui/book/markdown/$BookTextRenderer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BookEntry$BookEntryData, $BookEntry$BookEntryData$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry$BookEntryData"
import {$BookPage, $BookPage$Type} from "packages/com/klikli_dev/modonomicon/book/page/$BookPage"

export class $BookEntry {

constructor(arg0: $ResourceLocation$Type, arg1: $BookEntry$BookEntryData$Type, arg2: $ResourceLocation$Type)

public "getDescription"(): string
public "getY"(): integer
public "getName"(): string
public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "build"(arg0: $Level$Type, arg1: $BookCategory$Type): void
public "getCondition"(): $BookCondition
public "getIcon"(): $BookIcon
public "getParents"(): $List<(any)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getPages"(): $List<($BookPage)>
public "getCategory"(): $BookCategory
public "openEntry"(arg0: $BookCategoryScreen$Type): $BookContentScreen
public "getBook"(): $Book
public "prerenderMarkdown"(arg0: $BookTextRenderer$Type): void
public "getCategoryId"(): $ResourceLocation
public "matchesQuery"(arg0: string): boolean
public "hideWhileLocked"(): boolean
public "getX"(): integer
public "getEntryBackgroundVIndex"(): integer
public "getPageNumberForAnchor"(arg0: string): integer
public "showWhenAnyParentUnlocked"(): boolean
public "getCommandToRunOnFirstRead"(): $BookCommand
public "getUnlockedPagesFor"(arg0: $Player$Type): $List<($BookPage)>
public "getEntryBackgroundUIndex"(): integer
get "description"(): string
get "y"(): integer
get "name"(): string
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "condition"(): $BookCondition
get "icon"(): $BookIcon
get "parents"(): $List<(any)>
get "pages"(): $List<($BookPage)>
get "category"(): $BookCategory
get "book"(): $Book
get "categoryId"(): $ResourceLocation
get "x"(): integer
get "entryBackgroundVIndex"(): integer
get "commandToRunOnFirstRead"(): $BookCommand
get "entryBackgroundUIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$Type = ($BookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry_ = $BookEntry$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Ritual, $Ritual$Type} from "packages/com/klikli_dev/occultism/common/ritual/$Ritual"
import {$RitualRecipe$Serializer, $RitualRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe$Serializer"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Multiblock, $Multiblock$Type} from "packages/com/klikli_dev/modonomicon/api/multiblock/$Multiblock"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RitualRecipe implements $Recipe<($Container)> {
static "SERIALIZER": $RitualRecipe$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ItemStack$Type, arg4: $ItemStack$Type, arg5: $EntityType$Type<(any)>, arg6: $CompoundTag$Type, arg7: $Ingredient$Type, arg8: $NonNullList$Type<($Ingredient$Type)>, arg9: integer, arg10: integer, arg11: $ResourceLocation$Type, arg12: $TagKey$Type<($EntityType$Type<(any)>)>, arg13: string, arg14: $Ingredient$Type, arg15: string)

public "matches"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getDuration"(): integer
public "getEntityToSacrificeDisplayName"(): string
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getCommand"(): string
public "getActivationItem"(): $Ingredient
public "getPentacle"(): $Multiblock
public "getEntityNbt"(): $CompoundTag
public "requiresSacrifice"(): boolean
public "getSpiritMaxAge"(): integer
public "getItemToUse"(): $Ingredient
public "requiresItemUse"(): boolean
public "getEntityToSummon"(): $EntityType<(any)>
public "getRitualDummy"(): $ItemStack
public "getRitual"(): $Ritual
public "getPentacleId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getDurationPerIngredient"(): float
public "getEntityToSacrifice"(): $TagKey<($EntityType<(any)>)>
public "getSpiritJobType"(): $ResourceLocation
public "getRitualType"(): $ResourceLocation
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
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
get "duration"(): integer
get "entityToSacrificeDisplayName"(): string
get "special"(): boolean
get "id"(): $ResourceLocation
get "command"(): string
get "activationItem"(): $Ingredient
get "pentacle"(): $Multiblock
get "entityNbt"(): $CompoundTag
get "spiritMaxAge"(): integer
get "itemToUse"(): $Ingredient
get "entityToSummon"(): $EntityType<(any)>
get "ritualDummy"(): $ItemStack
get "ritual"(): $Ritual
get "pentacleId"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "durationPerIngredient"(): float
get "entityToSacrifice"(): $TagKey<($EntityType<(any)>)>
get "spiritJobType"(): $ResourceLocation
get "ritualType"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
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
export type $RitualRecipe$Type = ($RitualRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe_ = $RitualRecipe$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/container/$IItemStackComparator" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemStackComparator extends $INBTSerializable<($CompoundTag)>, $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$Type): boolean
 "matches"(arg0: $ItemStack$Type): boolean
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}

export namespace $IItemStackComparator {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackComparator$Type = ($IItemStackComparator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStackComparator_ = $IItemStackComparator$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$SummonFoliotLumberjackItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SummonFoliotLumberjackItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonFoliotLumberjackItem$Type = ($SummonFoliotLumberjackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotLumberjackItem_ = $SummonFoliotLumberjackItem$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/api/multiblock/$TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<A, B, C> {

 "test"(arg0: A, arg1: B, arg2: C): boolean

(arg0: A, arg1: B, arg2: C): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$Type<A, B, C> = ($TriPredicate<(A), (B), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<A, B, C> = $TriPredicate$Type<(A), (B), (C)>;
}}
declare module "packages/com/klikli_dev/modonomicon/book/$BookEntryParent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BookEntry, $BookEntry$Type} from "packages/com/klikli_dev/modonomicon/book/entries/$BookEntry"

export class $BookEntryParent {

constructor(arg0: $ResourceLocation$Type)

public "getEntry"(): $BookEntry
public static "fromJson"(arg0: $JsonObject$Type): $BookEntryParent
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $BookEntryParent
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getEntryId"(): $ResourceLocation
public "drawArrow"(): boolean
public "isLineReversed"(): boolean
public "isLineEnabled"(): boolean
get "entry"(): $BookEntry
get "entryId"(): $ResourceLocation
get "lineReversed"(): boolean
get "lineEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntryParent$Type = ($BookEntryParent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntryParent_ = $BookEntryParent$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingCleanerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemMode, $ItemMode$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/calling/$ItemMode"
import {$SpiritEntity, $SpiritEntity$Type} from "packages/com/klikli_dev/occultism/common/entity/spirit/$SpiritEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BookOfCallingItem, $BookOfCallingItem$Type} from "packages/com/klikli_dev/occultism/common/item/spirit/$BookOfCallingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BookOfCallingCleanerItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingCleanerItem$Type = ($BookOfCallingCleanerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingCleanerItem_ = $BookOfCallingCleanerItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritFireRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ItemStackFakeInventoryRecipe, $ItemStackFakeInventoryRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe"
import {$SpiritFireRecipe$Serializer, $SpiritFireRecipe$Serializer$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$SpiritFireRecipe$Serializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackFakeInventory, $ItemStackFakeInventory$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventory"

export class $SpiritFireRecipe extends $ItemStackFakeInventoryRecipe {
static "SERIALIZER": $SpiritFireRecipe$Serializer

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public "matches"(arg0: $ItemStackFakeInventory$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $ItemStackFakeInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
get "special"(): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireRecipe$Type = ($SpiritFireRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireRecipe_ = $SpiritFireRecipe$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/ritual/$Ritual" {
import {$GoldenSacrificialBowlBlockEntity, $GoldenSacrificialBowlBlockEntity$Type} from "packages/com/klikli_dev/occultism/common/blockentity/$GoldenSacrificialBowlBlockEntity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SacrificialBowlBlockEntity, $SacrificialBowlBlockEntity$Type} from "packages/com/klikli_dev/occultism/common/blockentity/$SacrificialBowlBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RitualRecipe, $RitualRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$RitualRecipe"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"

export class $Ritual {
static readonly "SACRIFICIAL_BOWL_RANGE": integer
static readonly "SACRIFICE_DETECTION_RANGE": integer
static readonly "SACRIFICE_DETECTION_RANGE_SQUARE": integer
static readonly "ITEM_USE_DETECTION_RANGE": integer
static readonly "ITEM_USE_DETECTION_RANGE_SQUARE": integer
 "recipe": $RitualRecipe
 "factoryId": $ResourceLocation

constructor(arg0: $RitualRecipe$Type)

public "update"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $Player$Type, arg4: $ItemStack$Type, arg5: integer): void
public "update"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $Player$Type, arg4: $ItemStack$Type, arg5: $List$Type<($Ingredient$Type)>, arg6: integer): void
public "start"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $ServerPlayer$Type, arg4: $ItemStack$Type): void
public "interrupt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $ServerPlayer$Type, arg4: $ItemStack$Type): void
public "finish"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $ServerPlayer$Type, arg4: $ItemStack$Type): void
public "isValid"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $Player$Type, arg4: $ItemStack$Type, arg5: $List$Type<($Ingredient$Type)>): boolean
public "setFactoryId"(arg0: $ResourceLocation$Type): void
public "getFactoryID"(): $ResourceLocation
public "getStartedMessage"(): string
public "getRitualID"(): string
public "identify"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getFinishedMessage"(): string
public "isValidItemUse"(arg0: $PlayerInteractEvent$RightClickItem$Type): boolean
public "isValidSacrifice"(arg0: $LivingEntity$Type): boolean
public "dropResult"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GoldenSacrificialBowlBlockEntity$Type, arg3: $Player$Type, arg4: $ItemStack$Type): void
public "requiresSacrifice"(): boolean
public "getRecipe"(): $RitualRecipe
public "require"(): boolean
public "consumeAdditionalIngredient"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($SacrificialBowlBlockEntity$Type)>, arg3: $Ingredient$Type, arg4: $List$Type<($ItemStack$Type)>): boolean
public static "getRemainingAdditionalIngredients"(arg0: $List$Type<($Ingredient$Type)>, arg1: $List$Type<($ItemStack$Type)>): $List<($Ingredient)>
public "getSacrificialBowls"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($SacrificialBowlBlockEntity)>
public "getConditionsMessage"(): string
public "consumeAdditionalIngredients"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: integer, arg4: $List$Type<($ItemStack$Type)>): boolean
public "areAdditionalIngredientsFulfilled"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($Ingredient$Type)>): boolean
public "getItemsOnSacrificialBowls"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($ItemStack)>
public "getInterruptedMessage"(): string
public "matchesAdditionalIngredients"(arg0: $List$Type<($Ingredient$Type)>, arg1: $List$Type<($ItemStack$Type)>): boolean
set "factoryId"(value: $ResourceLocation$Type)
get "factoryID"(): $ResourceLocation
get "startedMessage"(): string
get "ritualID"(): string
get "finishedMessage"(): string
get "recipe"(): $RitualRecipe
get "conditionsMessage"(): string
get "interruptedMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ritual$Type = ($Ritual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ritual_ = $Ritual$Type;
}}
declare module "packages/com/klikli_dev/modonomicon/item/$ModonomiconItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Book, $Book$Type} from "packages/com/klikli_dev/modonomicon/book/$Book"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModonomiconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public static "getBook"(arg0: $ItemStack$Type): $Book
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModonomiconItem$Type = ($ModonomiconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModonomiconItem_ = $ModonomiconItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $OtherworldBlockTier extends $Enum<($OtherworldBlockTier)> {
static readonly "NONE": $OtherworldBlockTier
static readonly "ONE": $OtherworldBlockTier
static readonly "TWO": $OtherworldBlockTier


public static "get"(arg0: integer): $OtherworldBlockTier
public static "values"(): ($OtherworldBlockTier)[]
public static "max"(arg0: $OtherworldBlockTier$Type, arg1: $OtherworldBlockTier$Type): $OtherworldBlockTier
public static "valueOf"(arg0: string): $OtherworldBlockTier
public "getLevel"(): integer
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldBlockTier$Type = (("one") | ("none") | ("two")) | ($OtherworldBlockTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldBlockTier_ = $OtherworldBlockTier$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/item/debug/$DebugWandItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DebugWandItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugWandItem$Type = ($DebugWandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugWandItem_ = $DebugWandItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/$SacrificialBowlBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $SacrificialBowlBlock extends $DirectionalBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificialBowlBlock$Type = ($SacrificialBowlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SacrificialBowlBlock_ = $SacrificialBowlBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory" {
import {$ItemStackFakeInventoryRecipe, $ItemStackFakeInventoryRecipe$Type} from "packages/com/klikli_dev/occultism/crafting/recipe/$ItemStackFakeInventoryRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory<T extends $ItemStackFakeInventoryRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): T

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): T
}

export namespace $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory$Type<T> = ($ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory_<T> = $ItemStackFakeInventoryRecipe$IItemStackFakeInventoryRecipeFactory$Type<(T)>;
}}
declare module "packages/com/klikli_dev/occultism/common/item/tool/$FamiliarRingItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IFamiliar, $IFamiliar$Type} from "packages/com/klikli_dev/occultism/common/entity/familiar/$IFamiliar"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FamiliarRingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "handleFamiliarTypeTag"(arg0: $CompoundTag$Type): void
public static "getFamiliar"(arg0: $ItemStack$Type, arg1: $Level$Type): $IFamiliar
public "verifyTagAfterLoad"(arg0: $CompoundTag$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarRingItem$Type = ($FamiliarRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarRingItem_ = $FamiliarRingItem$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/block/otherworld/$OtherworldLogNaturalBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$OtherworldBlockTier, $OtherworldBlockTier$Type} from "packages/com/klikli_dev/occultism/api/common/data/$OtherworldBlockTier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOtherworldBlock, $IOtherworldBlock$Type} from "packages/com/klikli_dev/occultism/common/block/otherworld/$IOtherworldBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OtherworldLogNaturalBlock extends $RotatedPillarBlock implements $IOtherworldBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getUncoveredBlock"(): $Block
public "getCoveredBlock"(): $Block
public "getDescriptionId"(): string
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getTier"(): $OtherworldBlockTier
public "getItem"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getHarvestState"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $ItemStack$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$Type, arg1: $ItemStack$Type): $OtherworldBlockTier
get "uncoveredBlock"(): $Block
get "coveredBlock"(): $Block
get "descriptionId"(): string
get "tier"(): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldLogNaturalBlock$Type = ($OtherworldLogNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldLogNaturalBlock_ = $OtherworldLogNaturalBlock$Type;
}}
declare module "packages/com/klikli_dev/occultism/common/blockentity/$SacrificialBowlBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NetworkedBlockEntity, $NetworkedBlockEntity$Type} from "packages/com/klikli_dev/occultism/common/blockentity/$NetworkedBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $SacrificialBowlBlockEntity extends $NetworkedBlockEntity {
 "lastChangeTime": long
 "itemStackHandler": $ItemStackHandler
 "lazyItemStackHandler": $LazyOptional<($ItemStackHandler)>
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "loadNetwork"(arg0: $CompoundTag$Type): void
public "saveNetwork"(arg0: $CompoundTag$Type): $CompoundTag
public "invalidateCaps"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificialBowlBlockEntity$Type = ($SacrificialBowlBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SacrificialBowlBlockEntity_ = $SacrificialBowlBlockEntity$Type;
}}
