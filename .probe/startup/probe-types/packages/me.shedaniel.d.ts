declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$Result" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $ClickArea$Result {

 "execute"(): boolean
 "category"(arg0: $CategoryIdentifier$Type<(any)>): $ClickArea$Result
 "executor"(arg0: $BooleanSupplier$Type): $ClickArea$Result
 "isSuccessful"(): boolean
 "categories"(categories: $Iterable$Type<(any)>): $ClickArea$Result
 "getTooltips"(): ($Component)[]
 "getCategories"(): $Stream<($CategoryIdentifier<(any)>)>
 "tooltip"(arg0: $Supplier$Type<(($Component$Type)[])>): $ClickArea$Result
}

export namespace $ClickArea$Result {
function fail(): $ClickArea$Result
function success(): $ClickArea$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickArea$Result$Type = ($ClickArea$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickArea$Result_ = $ClickArea$Result$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRule" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$FilteringContext, $FilteringContext$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringContext"
import {$FilteringResult, $FilteringResult$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResult"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FilteringResultFactory, $FilteringResultFactory$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResultFactory"
import {$FilteringRuleType, $FilteringRuleType$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRuleType"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export interface $FilteringRule<Cache> {

 "getType"(): $FilteringRuleType<(any)>
 "processFilteredStacks"(arg0: $FilteringContext$Type, arg1: $FilteringResultFactory$Type, arg2: Cache, arg3: boolean): $FilteringResult
 "markDirty"(stacks: $Collection$Type<($EntryStack$Type<(any)>)>, hashes: $LongCollection$Type): void
 "prepareCache"(async: boolean): Cache
 "isReloading"(): boolean
}

export namespace $FilteringRule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringRule$Type<Cache> = ($FilteringRule<(Cache)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringRule_<Cache> = $FilteringRule$Type<(Cache)>;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType$Registry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$SystemFavoriteEntryProvider, $SystemFavoriteEntryProvider$Type} from "packages/me/shedaniel/rei/api/client/favorites/$SystemFavoriteEntryProvider"
import {$FavoriteEntryType, $FavoriteEntryType$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$FavoriteEntry, $FavoriteEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$FavoriteEntryType$Section, $FavoriteEntryType$Section$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType$Section"

export interface $FavoriteEntryType$Registry extends $Reloadable<($REIClientPlugin)> {

 "get"<A extends $FavoriteEntry>(arg0: $ResourceLocation$Type): $FavoriteEntryType<(A)>
 "register"(arg0: $ResourceLocation$Type, arg1: $FavoriteEntryType$Type<(any)>): void
 "getId"(arg0: $FavoriteEntryType$Type<(any)>): $ResourceLocation
 "sections"(): $Iterable<($FavoriteEntryType$Section)>
 "getOrCrateSection"(arg0: $Component$Type): $FavoriteEntryType$Section
/**
 * 
 * @deprecated
 */
 "registerSystemFavorites"<A extends $FavoriteEntry>(arg0: $SystemFavoriteEntryProvider$Type<(A)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $FavoriteEntryType$Registry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavoriteEntryType$Registry$Type = ($FavoriteEntryType$Registry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavoriteEntryType$Registry_ = $FavoriteEntryType$Registry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Context" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $TransferHandler$Context {

 "getContainerScreen"(): $AbstractContainerScreen<(any)>
 "getMenu"(): $AbstractContainerMenu
 "getDisplay"(): $Display
 "isStackedCrafting"(): boolean
 "isActuallyCrafting"(): boolean
 "getMinecraft"(): $Minecraft
}

export namespace $TransferHandler$Context {
function create(actuallyCrafting: boolean, stackedCrafting: boolean, containerScreen: $AbstractContainerScreen$Type<(any)>, display: $Display$Type): $TransferHandler$Context
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandler$Context$Type = ($TransferHandler$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandler$Context_ = $TransferHandler$Context$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea" {
import {$ClickArea$ClickAreaContext, $ClickArea$ClickAreaContext$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$ClickAreaContext"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ClickArea$Result, $ClickArea$Result$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$Result"

export interface $ClickArea<T extends $Screen> {

 "handle"(arg0: $ClickArea$ClickAreaContext$Type<(T)>): $ClickArea$Result

(arg0: $ClickArea$ClickAreaContext$Type<(T)>): $ClickArea$Result
}

export namespace $ClickArea {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickArea$Type<T> = ($ClickArea<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickArea_<T> = $ClickArea$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/view/$ViewSearchBuilder" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$DisplaySpec, $DisplaySpec$Type} from "packages/me/shedaniel/rei/impl/display/$DisplaySpec"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ViewSearchBuilder {

 "open"(): boolean
 "getPreferredOpenedCategory"(): $CategoryIdentifier<(any)>
 "processingVisibilityHandlers"(arg0: boolean): $ViewSearchBuilder
 "setPreferredOpenedCategory"(arg0: $CategoryIdentifier$Type<(any)>): $ViewSearchBuilder
 "getFilteringCategories"(): $Set<($CategoryIdentifier<(any)>)>
 "isProcessingVisibilityHandlers"(): boolean
 "filterCategory"(arg0: $CategoryIdentifier$Type<(any)>): $ViewSearchBuilder
 "getRecipesFor"(): $List<($EntryStack<(any)>)>
 "addCategory"(arg0: $CategoryIdentifier$Type<(any)>): $ViewSearchBuilder
 "addCategories"(arg0: $Collection$Type<($CategoryIdentifier$Type<(any)>)>): $ViewSearchBuilder
 "addAllCategories"(): $ViewSearchBuilder
 "filterCategories"(arg0: $Collection$Type<($CategoryIdentifier$Type<(any)>)>): $ViewSearchBuilder
 "getUsagesFor"(): $List<($EntryStack<(any)>)>
 "mergingDisplays"(arg0: boolean): $ViewSearchBuilder
 "isMergingDisplays"(): boolean
 "streamDisplays"(): $Stream<($DisplaySpec)>
 "addUsagesFor"<T>(arg0: $EntryStack$Type<(T)>): $ViewSearchBuilder
 "addRecipesFor"<T>(arg0: $EntryStack$Type<(T)>): $ViewSearchBuilder
 "getCategories"(): $Set<($CategoryIdentifier<(any)>)>
 "buildMapInternal"(): $Map<($DisplayCategory<(any)>), ($List<($DisplaySpec)>)>
}

export namespace $ViewSearchBuilder {
function builder(): $ViewSearchBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewSearchBuilder$Type = ($ViewSearchBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewSearchBuilder_ = $ViewSearchBuilder$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/simple/$DumpHandler" {
import {$MenuInfoContext, $MenuInfoContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

/**
 * 
 * @deprecated
 */
export interface $DumpHandler<T extends $AbstractContainerMenu, D extends $Display> {

 "dump"(arg0: $MenuInfoContext$Type<(T), (any), (D)>, arg1: $ItemStack$Type): boolean

(stack: $ItemStack$Type, inventoryStacks: $Iterable$Type<($SlotAccessor$Type)>): $SlotAccessor
}

export namespace $DumpHandler {
function getOccupiedSlotWithRoomForStack(stack: $ItemStack$Type, inventoryStacks: $Iterable$Type<($SlotAccessor$Type)>): $SlotAccessor
function getEmptySlot(inventoryStacks: $Iterable$Type<($SlotAccessor$Type)>): $SlotAccessor
function canStackAddMore(existingStack: $ItemStack$Type, stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DumpHandler$Type<T, D> = ($DumpHandler<(T), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DumpHandler_<T, D> = $DumpHandler$Type<(T), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparator" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ComparisonContext, $ComparisonContext$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export interface $EntryComparator<T> {

 "hash"(arg0: $ComparisonContext$Type, arg1: T): long
 "then"(other: $EntryComparator$Type<(T)>): $EntryComparator<(T)>
 "onlyExact"(): $EntryComparator<(T)>

(arg0: $ComparisonContext$Type, arg1: T): long
}

export namespace $EntryComparator {
function fluidNbt(): $EntryComparator<($FluidStack)>
function itemNbt(): $EntryComparator<($ItemStack)>
function noop<T>(): $EntryComparator<(T)>
function nbt(...ignoredKeys: (string)[]): $EntryComparator<($Tag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryComparator$Type<T> = ($EntryComparator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryComparator_<T> = $EntryComparator$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitorWidget" {
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DraggableComponentVisitor, $DraggableComponentVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitor"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$DraggableBoundsProvider, $DraggableBoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableComponentVisitorWidget {

 "acceptDragged"(context: $DraggingContext$Type<($Screen$Type)>, component: $DraggableComponent$Type<(any)>): $DraggedAcceptorResult
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<($Screen$Type)>, component: $DraggableComponent$Type<(any)>): $Stream<($DraggableBoundsProvider)>
}

export namespace $DraggableComponentVisitorWidget {
function from(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableComponentVisitorWidget$Type)>)>): $DraggableComponentVisitorWidget
function toVisitor(widget: $DraggableComponentVisitorWidget$Type): $DraggableComponentVisitor<($Screen)>
function toVisitor(widget: $DraggableComponentVisitorWidget$Type, priority: double): $DraggableComponentVisitor<($Screen)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableComponentVisitorWidget$Type = ($DraggableComponentVisitorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableComponentVisitorWidget_ = $DraggableComponentVisitorWidget$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/plugins/$REIPluginProvider" {
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $REIPluginProvider<P extends $REIPlugin<(any)>> {

 "provide"(): $Collection<(P)>
 "getPluginProviderName"(): string
 "getPluginProviderClass"(): $Class<(P)>
}

export namespace $REIPluginProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $REIPluginProvider$Type<P> = ($REIPluginProvider<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $REIPluginProvider_<P> = $REIPluginProvider$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$ApplicabilityResult" {
import {$TransferHandler$Result, $TransferHandler$Result$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Result"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $TransferHandler$ApplicabilityResult {

 "getError"(): $TransferHandler$Result
 "isSuccessful"(): boolean
 "isApplicable"(): boolean
}

export namespace $TransferHandler$ApplicabilityResult {
function createApplicable(): $TransferHandler$ApplicabilityResult
function createApplicableWithError(error: $Component$Type): $TransferHandler$ApplicabilityResult
function createApplicableWithError(result: $TransferHandler$Result$Type): $TransferHandler$ApplicabilityResult
function createNotApplicable(): $TransferHandler$ApplicabilityResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandler$ApplicabilityResult$Type = ($TransferHandler$ApplicabilityResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandler$ApplicabilityResult_ = $TransferHandler$ApplicabilityResult$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererRegistry$TooltipTransformer" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $EntryRendererRegistry$TooltipTransformer<T> {

 "transform"(arg0: $EntryStack$Type<(T)>, arg1: $Point$Type, arg2: $Tooltip$Type): $Tooltip

(arg0: $EntryStack$Type<(T)>, arg1: $Point$Type, arg2: $Tooltip$Type): $Tooltip
}

export namespace $EntryRendererRegistry$TooltipTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryRendererRegistry$TooltipTransformer$Type<T> = ($EntryRendererRegistry$TooltipTransformer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryRendererRegistry$TooltipTransformer_<T> = $EntryRendererRegistry$TooltipTransformer$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/search/method/$InputMethodRegistry" {
import {$InputMethod, $InputMethod$Type} from "packages/me/shedaniel/rei/api/client/search/method/$InputMethod"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $InputMethodRegistry extends $Reloadable<($REIClientPlugin)> {

 "add"(arg0: $ResourceLocation$Type, arg1: $InputMethod$Type<(any)>): void
 "get"(arg0: $ResourceLocation$Type): $InputMethod<(any)>
 "getOrDefault"(arg0: $ResourceLocation$Type): $InputMethod<(any)>
 "getAll"(): $Map<($ResourceLocation), ($InputMethod<(any)>)>
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $InputMethodRegistry {
function getInstance(): $InputMethodRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethodRegistry$Type = ($InputMethodRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethodRegistry_ = $InputMethodRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider$Provider" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$CompoundEventResult, $CompoundEventResult$Type} from "packages/dev/architectury/event/$CompoundEventResult"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export interface $FluidSupportProvider$Provider {

 "itemToFluid"(arg0: $EntryStack$Type<(any)>): $CompoundEventResult<($Stream<($EntryStack<($FluidStack)>)>)>

(arg0: $EntryStack$Type<(any)>): $CompoundEventResult<($Stream<($EntryStack<($FluidStack)>)>)>
}

export namespace $FluidSupportProvider$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSupportProvider$Provider$Type = ($FluidSupportProvider$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSupportProvider$Provider_ = $FluidSupportProvider$Provider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitorWidget" {
import {$DraggableComponentVisitorWidget, $DraggableComponentVisitorWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitorWidget"
import {$DraggableStackVisitor$BoundsProvider, $DraggableStackVisitor$BoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor$BoundsProvider"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DraggableComponentVisitor, $DraggableComponentVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitor"
import {$DraggableStack, $DraggableStack$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack"
import {$DraggableStackVisitor, $DraggableStackVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$DraggableBoundsProvider, $DraggableBoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider"

export interface $DraggableStackVisitorWidget extends $DraggableComponentVisitorWidget {

 "acceptDragged"(context: $DraggingContext$Type<($Screen$Type)>, component: $DraggableComponent$Type<(any)>): $DraggedAcceptorResult
 "acceptDraggedStack"(context: $DraggingContext$Type<($Screen$Type)>, stack: $DraggableStack$Type): $DraggedAcceptorResult
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<($Screen$Type)>, component: $DraggableComponent$Type<(any)>): $Stream<($DraggableBoundsProvider)>
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<($Screen$Type)>, stack: $DraggableStack$Type): $Stream<($DraggableStackVisitor$BoundsProvider)>
}

export namespace $DraggableStackVisitorWidget {
function from(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableStackVisitorWidget$Type)>)>): $DraggableStackVisitorWidget
function toVisitor(widget: $DraggableStackVisitorWidget$Type, priority: double): $DraggableStackVisitor<($Screen)>
function toVisitor(widget: $DraggableStackVisitorWidget$Type): $DraggableStackVisitor<($Screen)>
function toVisitor(widget: $DraggableComponentVisitorWidget$Type): $DraggableComponentVisitor<($Screen)>
function toVisitor(widget: $DraggableComponentVisitorWidget$Type, priority: double): $DraggableComponentVisitor<($Screen)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStackVisitorWidget$Type = ($DraggableStackVisitorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStackVisitorWidget_ = $DraggableStackVisitorWidget$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip$Entry" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $Tooltip$Entry {

 "isText"(): boolean
 "isTooltipComponent"(): boolean
 "getAsText"(): $Component
 "getAsTooltipComponent"(): $TooltipComponent
}

export namespace $Tooltip$Entry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$Entry$Type = ($Tooltip$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tooltip$Entry_ = $Tooltip$Entry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/$DisplayRenderer" {
import {$Renderer, $Renderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$Renderer"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CrashReport, $CrashReport$Type} from "packages/net/minecraft/$CrashReport"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export class $DisplayRenderer implements $Renderer {

constructor()

public "getHeight"(): integer
public "getWidth"(): integer
public "getTooltip"(mouse: $TooltipContext$Type): $Tooltip
public "fillCrashReport"(report: $CrashReport$Type, category: $CrashReportCategory$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: float): void
get "height"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayRenderer$Type = ($DisplayRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayRenderer_ = $DisplayRenderer$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$EntryStack$Settings" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$EntryRenderer, $EntryRenderer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

/**
 * 
 * @deprecated
 */
export class $EntryStack$Settings<R> {
static "RENDERER": $EntryStack$Settings<($Function<($EntryStack<(any)>), ($EntryRenderer<(any)>)>)>
static "TOOLTIP_PROCESSOR": $EntryStack$Settings<($BiFunction<($EntryStack<(any)>), ($Tooltip), ($Tooltip)>)>
static "CONTAINING_NS": $EntryStack$Settings<($BiFunction<($EntryStack<(any)>), (string), (string)>)>
static "TOOLTIP_APPEND_EXTRA": $EntryStack$Settings<($Function<($EntryStack<(any)>), ($List<($Component)>)>)>
/**
 * 
 * @deprecated
 */
static "FLUID_AMOUNT_VISIBLE": $EntryStack$Settings<(boolean)>
static "FLUID_RENDER_RATIO": $EntryStack$Settings<(float)>

constructor(defaultValue: R)

public "getId"(): short
public "getDefaultValue"(): R
public static "getById"<R>(id: short): $EntryStack$Settings<(R)>
get "id"(): short
get "defaultValue"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryStack$Settings$Type<R> = ($EntryStack$Settings<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryStack$Settings_<R> = $EntryStack$Settings$Type<(R)>;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/$RecipeFinderPopulator" {
import {$MenuInfoContext, $MenuInfoContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext"
import {$RecipeFinder, $RecipeFinder$Type} from "packages/me/shedaniel/rei/api/common/transfer/$RecipeFinder"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

/**
 * 
 * @deprecated
 */
export interface $RecipeFinderPopulator<T extends $AbstractContainerMenu, D extends $Display> {

 "populate"(arg0: $MenuInfoContext$Type<(T), (any), (D)>, arg1: $RecipeFinder$Type): void

(arg0: $MenuInfoContext$Type<(T), (any), (D)>, arg1: $RecipeFinder$Type): void
}

export namespace $RecipeFinderPopulator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFinderPopulator$Type<T, D> = ($RecipeFinderPopulator<(T), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFinderPopulator_<T, D> = $RecipeFinderPopulator$Type<(T), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapterRegistry" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$EntrySettingsAdapter, $EntrySettingsAdapter$Type} from "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapter"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$EntryStack$Settings, $EntryStack$Settings$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack$Settings"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"

export interface $EntrySettingsAdapterRegistry extends $Reloadable<($REIPlugin<(any)>)> {

 "register"<T, S>(arg0: $EntryType$Type<(T)>, arg1: $EntryStack$Settings$Type<(S)>, arg2: $EntrySettingsAdapter$Type<(T), (S)>): void
 "adapt"<T, S>(arg0: $EntryStack$Type<(T)>, arg1: $EntryStack$Settings$Type<(S)>, arg2: S): S
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $EntrySettingsAdapterRegistry {
function getInstance(): $EntrySettingsAdapterRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntrySettingsAdapterRegistry$Type = ($EntrySettingsAdapterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntrySettingsAdapterRegistry_ = $EntrySettingsAdapterRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ExclusionZones" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DisplayPanelLocation, $DisplayPanelLocation$Type} from "packages/me/shedaniel/rei/api/client/gui/config/$DisplayPanelLocation"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$OverlayDecider, $OverlayDecider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayDecider"
import {$OverlayRendererProvider, $OverlayRendererProvider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayRendererProvider"
import {$ExclusionZonesProvider, $ExclusionZonesProvider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ExclusionZonesProvider"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $ExclusionZones extends $OverlayDecider {

 "register"<T>(arg0: $Class$Type<(any)>, arg1: $ExclusionZonesProvider$Type<(any)>): void
 "getZonesCount"(): integer
/**
 * 
 * @deprecated
 */
 "getExclusionZones"(currentScreenClass: $Class$Type<(any)>): $List<($Rectangle)>
 "getExclusionZones"(arg0: $Screen$Type, arg1: boolean): $List<($Rectangle)>
 "getExclusionZones"(screen: $Screen$Type): $List<($Rectangle)>
/**
 * 
 * @deprecated
 */
 "getExclusionZones"(arg0: $Class$Type<(any)>, arg1: boolean): $List<($Rectangle)>
 "compareTo"(o: $OverlayDecider$Type): integer
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: $Class$Type<(R)>): boolean
 "isInZone"(mouseX: double, mouseY: double): $InteractionResult
 "shouldScreenBeOverlaid"<R extends $Screen>(screen: R): $InteractionResult
/**
 * 
 * @deprecated
 */
 "shouldScreenBeOverlaid"(screen: $Class$Type<(any)>): $InteractionResult
 "shouldRecalculateArea"(location: $DisplayPanelLocation$Type, rectangle: $Rectangle$Type): boolean
 "getRendererProvider"(): $OverlayRendererProvider
}

export namespace $ExclusionZones {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionZones$Type = ($ExclusionZones);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExclusionZones_ = $ExclusionZones$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/comparison/$FluidComparatorRegistry" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$EntryComparator, $EntryComparator$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparator"
import {$EntryComparatorRegistry, $EntryComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparatorRegistry"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$ComparisonContext, $ComparisonContext$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export interface $FluidComparatorRegistry extends $EntryComparatorRegistry<($FluidStack), ($Fluid)> {

 "registerNbt"(fluid: $Fluid$Type): void
 "registerNbt"(...fluids: ($Fluid$Type)[]): void
 "register"(arg0: $EntryComparator$Type<($FluidStack$Type)>, arg1: $Fluid$Type): void
 "register"(comparator: $EntryComparator$Type<($FluidStack$Type)>, ...entries: ($Fluid$Type)[]): void
 "containsComparator"(arg0: $Fluid$Type): boolean
 "comparatorSize"(): integer
 "registerGlobal"(arg0: $EntryComparator$Type<($FluidStack$Type)>): void
 "hashOf"(arg0: $ComparisonContext$Type, arg1: $FluidStack$Type): long
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $FluidComparatorRegistry {
function getInstance(): $FluidComparatorRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidComparatorRegistry$Type = ($FluidComparatorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidComparatorRegistry_ = $FluidComparatorRegistry$Type;
}}
declare module "packages/me/shedaniel/math/$FloatingPoint" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export class $FloatingPoint implements $Cloneable {
 "x": double
 "y": double

constructor()
constructor(arg0: double, arg1: double)
constructor(arg0: $FloatingPoint$Type)
constructor(arg0: $Point$Type)

public "getY"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLocation"(): $Point
public "move"(arg0: double, arg1: double): void
public "translate"(arg0: double, arg1: double): void
public "setLocation"(arg0: double, arg1: double): void
public "getFloatingLocation"(): $FloatingPoint
public "getX"(): double
get "y"(): double
get "location"(): $Point
get "floatingLocation"(): $FloatingPoint
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingPoint$Type = ($FloatingPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingPoint_ = $FloatingPoint$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry$Serializer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $SlotAccessorRegistry$Serializer {

 "read"(arg0: $AbstractContainerMenu$Type, arg1: $Player$Type, arg2: $CompoundTag$Type): $SlotAccessor
 "save"(arg0: $AbstractContainerMenu$Type, arg1: $Player$Type, arg2: $SlotAccessor$Type): $CompoundTag
}

export namespace $SlotAccessorRegistry$Serializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessorRegistry$Serializer$Type = ($SlotAccessorRegistry$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessorRegistry$Serializer_ = $SlotAccessorRegistry$Serializer$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/overlay/$ScreenOverlay" {
import {$OverlayListWidget, $OverlayListWidget$Type} from "packages/me/shedaniel/rei/api/client/overlay/$OverlayListWidget"
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$WidgetWithBounds, $WidgetWithBounds$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$WidgetWithBounds"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $ScreenOverlay extends $WidgetWithBounds {

constructor()

public "queueReloadSearch"(): void
public "getEntryList"(): $OverlayListWidget
public "getFavoritesList"(): $Optional<($OverlayListWidget)>
public "getDraggingContext"(): $DraggingContext<(any)>
public "queueReloadOverlay"(): void
public "isNotInExclusionZones"(arg0: double, arg1: double): boolean
get "entryList"(): $OverlayListWidget
get "favoritesList"(): $Optional<($OverlayListWidget)>
get "draggingContext"(): $DraggingContext<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenOverlay$Type = ($ScreenOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenOverlay_ = $ScreenOverlay$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/registry/$ReloadStage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ReloadStage extends $Enum<($ReloadStage)> {
static readonly "START": $ReloadStage
static readonly "END": $ReloadStage


public static "values"(): ($ReloadStage)[]
public static "valueOf"(name: string): $ReloadStage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadStage$Type = (("start") | ("end")) | ($ReloadStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadStage_ = $ReloadStage$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRuleType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FilteringRule, $FilteringRule$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRule"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FilteringRuleType<T extends $FilteringRule<(any)>> {

 "createNew"(): T
 "getId"(): $ResourceLocation
 "readFrom"(arg0: $CompoundTag$Type): T
 "getTitle"(rule: T): $Component
 "isSingular"(): boolean
 "saveTo"(arg0: T, arg1: $CompoundTag$Type): $CompoundTag
 "createEntryScreen"(rule: T): $Function<($Screen), ($Screen)>
 "getSubtitle"(rule: T): $Component
}

export namespace $FilteringRuleType {
function read(tag: $CompoundTag$Type): $FilteringRule<(any)>
function save(rule: $FilteringRule$Type<(any)>, tag: $CompoundTag$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringRuleType$Type<T> = ($FilteringRuleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringRuleType_<T> = $FilteringRuleType$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ScreenRegistry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DisplayPanelLocation, $DisplayPanelLocation$Type} from "packages/me/shedaniel/rei/api/client/gui/config/$DisplayPanelLocation"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponentProvider, $DraggableComponentProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProvider"
import {$ClickArea$Result, $ClickArea$Result$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$Result"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$ClickArea$ClickAreaContext, $ClickArea$ClickAreaContext$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$ClickAreaContext"
import {$FocusedStackProvider, $FocusedStackProvider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$FocusedStackProvider"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$DraggableStackVisitorWidget, $DraggableStackVisitorWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitorWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DraggableStackVisitor, $DraggableStackVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor"
import {$DraggableComponentProviderWidget, $DraggableComponentProviderWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProviderWidget"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ExclusionZones, $ExclusionZones$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ExclusionZones"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"
import {$DraggableComponentVisitorWidget, $DraggableComponentVisitorWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitorWidget"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$OverlayDecider, $OverlayDecider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayDecider"
import {$SimpleClickArea, $SimpleClickArea$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$SimpleClickArea"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$DraggableComponentVisitor, $DraggableComponentVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitor"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$DraggableStackProviderWidget, $DraggableStackProviderWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackProviderWidget"
import {$ClickArea, $ClickArea$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea"
import {$DraggableStackProvider, $DraggableStackProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackProvider"

export interface $ScreenRegistry extends $Reloadable<($REIClientPlugin)> {

 "getScreenBounds"<T extends $Screen>(arg0: T): $Rectangle
 "exclusionZones"(): $ExclusionZones
 "registerClickArea"<T extends $Screen>(area: $SimpleClickArea$Type<(T)>, screenClass: $Class$Type<(any)>, ...categories: ($CategoryIdentifier$Type<(any)>)[]): void
 "registerClickArea"<T extends $Screen>(arg0: $Class$Type<(any)>, arg1: $ClickArea$Type<(T)>): void
 "getOverlayBounds"<T extends $Screen>(arg0: $DisplayPanelLocation$Type, arg1: T): $Rectangle
 "registerDecider"(arg0: $OverlayDecider$Type): void
 "getFocusedStack"<T extends $Screen>(arg0: T, arg1: $Point$Type): $EntryStack<(any)>
 "evaluateClickArea"<T extends $Screen>(arg0: $Class$Type<(T)>, arg1: $ClickArea$ClickAreaContext$Type<(T)>): $List<($ClickArea$Result)>
 "executeClickArea"<T extends $Screen>(screenClass: $Class$Type<(T)>, context: $ClickArea$ClickAreaContext$Type<(T)>): boolean
/**
 * 
 * @deprecated
 */
 "handleClickArea"<T extends $Screen>(screenClass: $Class$Type<(T)>, context: $ClickArea$ClickAreaContext$Type<(T)>): $Set<($CategoryIdentifier<(any)>)>
 "getDeciders"<R extends $Screen>(arg0: R): $List<($OverlayDecider)>
 "getDeciders"(): $List<($OverlayDecider)>
 "getDraggableComponentProviders"(): $Iterable<($DraggableComponentProvider<($Screen), (any)>)>
 "registerDraggableComponentVisitor"<T extends $Screen>(arg0: $DraggableComponentVisitor$Type<(T)>): void
 "registerDraggableComponentVisitor"<T extends $Screen>(visitor: $DraggableComponentVisitorWidget$Type): void
 "registerDraggableComponentVisitor"<T extends $Screen>(priority: double, visitor: $DraggableComponentVisitorWidget$Type): void
 "registerContainerClickArea"<C extends $AbstractContainerMenu, T extends $AbstractContainerScreen<(C)>>(area: $Rectangle$Type, screenClass: $Class$Type<(any)>, ...categories: ($CategoryIdentifier$Type<(any)>)[]): void
 "registerContainerClickArea"<C extends $AbstractContainerMenu, T extends $AbstractContainerScreen<(C)>>(arg0: $SimpleClickArea$Type<(T)>, arg1: $Class$Type<(any)>, ...arg2: ($CategoryIdentifier$Type<(any)>)[]): void
 "getDraggableComponentVisitors"(): $Iterable<($DraggableComponentVisitor<($Screen)>)>
 "registerDraggableStackVisitor"<T extends $Screen>(arg0: $DraggableStackVisitor$Type<(T)>): void
 "registerDraggableStackVisitor"<T extends $Screen>(visitor: $DraggableStackVisitorWidget$Type): void
 "registerDraggableStackVisitor"<T extends $Screen>(priority: double, visitor: $DraggableStackVisitorWidget$Type): void
 "getClickAreaTooltips"<T extends $Screen>(screenClass: $Class$Type<(T)>, context: $ClickArea$ClickAreaContext$Type<(T)>): $List<($Component)>
 "registerFocusedStack"(arg0: $FocusedStackProvider$Type): void
 "registerDraggableStackProvider"<T extends $Screen>(arg0: $DraggableStackProvider$Type<(T)>): void
 "registerDraggableStackProvider"<T extends $Screen>(provider: $DraggableStackProviderWidget$Type): void
 "registerDraggableStackProvider"<T extends $Screen>(priority: double, provider: $DraggableStackProviderWidget$Type): void
 "registerDraggableComponentProvider"<T extends $Screen, A>(provider: $DraggableComponentProviderWidget$Type<(A)>): void
 "registerDraggableComponentProvider"<T extends $Screen, A>(arg0: $DraggableComponentProvider$Type<(T), (A)>): void
 "registerDraggableComponentProvider"<T extends $Screen, A>(priority: double, provider: $DraggableComponentProviderWidget$Type<(A)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $ScreenRegistry {
function getInstance(): $ScreenRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenRegistry$Type = ($ScreenRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenRegistry_ = $ScreenRegistry$Type;
}}
declare module "packages/me/shedaniel/math/$Dimension" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$FloatingDimension, $FloatingDimension$Type} from "packages/me/shedaniel/math/$FloatingDimension"

export class $Dimension implements $Cloneable {
 "width": integer
 "height": integer

constructor(arg0: double, arg1: double)
constructor(arg0: integer, arg1: integer)
constructor(arg0: $FloatingDimension$Type)
constructor(arg0: $Dimension$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: $FloatingDimension$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "getFloatingSize"(): $FloatingDimension
public "getHeight"(): integer
public "getWidth"(): integer
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
set "size"(value: $FloatingDimension$Type)
get "floatingSize"(): $FloatingDimension
get "height"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension$Type = ($Dimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension_ = $Dimension$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/visibility/$DisplayVisibilityPredicate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"

export interface $DisplayVisibilityPredicate extends $Comparable<($DisplayVisibilityPredicate)> {

 "compareTo"(o: $DisplayVisibilityPredicate$Type): integer
 "getPriority"(): double
 "handleDisplay"(arg0: $DisplayCategory$Type<(any)>, arg1: $Display$Type): $EventResult

(o: $DisplayVisibilityPredicate$Type): integer
}

export namespace $DisplayVisibilityPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayVisibilityPredicate$Type = ($DisplayVisibilityPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayVisibilityPredicate_ = $DisplayVisibilityPredicate$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RegionEntry, $RegionEntry$Type} from "packages/me/shedaniel/rei/api/client/entry/region/$RegionEntry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Renderer, $Renderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$Renderer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Slot, $Slot$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Slot"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FavoriteMenuEntry, $FavoriteMenuEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteMenuEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FavoriteEntry implements $RegionEntry<($FavoriteEntry)> {
static readonly "TYPE_KEY": string

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public static "read"(object: $CompoundTag$Type): $FavoriteEntry
public "save"(tag: $CompoundTag$Type): $CompoundTag
public "copy"(): $FavoriteEntry
public "getType"(): $ResourceLocation
public "isInvalid"(): boolean
public static "delegate"(supplier: $Supplier$Type<($FavoriteEntry$Type)>, toJson: $Supplier$Type<($CompoundTag$Type)>): $FavoriteEntry
public "doAction"(arg0: integer): boolean
public "getRenderer"(arg0: boolean): $Renderer
public static "readResult"(object: $CompoundTag$Type): $DataResult<($FavoriteEntry)>
public static "delegateResult"(supplier: $Supplier$Type<($DataResult$Type<($FavoriteEntry$Type)>)>, toJson: $Supplier$Type<($CompoundTag$Type)>): $FavoriteEntry
public static "readDelegated"(object: $CompoundTag$Type): $FavoriteEntry
public "isEntryInvalid"(): boolean
public "getMenuEntries"(): $Optional<($Supplier<($Collection<($FavoriteMenuEntry)>)>)>
public "asFavorite"(): $FavoriteEntry
public "getUnwrapped"(): $FavoriteEntry
public "isSame"(arg0: $FavoriteEntry$Type): boolean
public static "fromDisplay"(display: $Display$Type): $FavoriteEntry
public "hashIgnoreAmount"(): long
public "toStack"(): $EntryStack<(any)>
public static "fromEntryStack"(stack: $EntryStack$Type<(any)>): $FavoriteEntry
public "getUuid"(): $UUID
public "asDraggableComponent"(slot: $Slot$Type): $DraggableComponent<(any)>
get "type"(): $ResourceLocation
get "invalid"(): boolean
get "entryInvalid"(): boolean
get "menuEntries"(): $Optional<($Supplier<($Collection<($FavoriteMenuEntry)>)>)>
get "unwrapped"(): $FavoriteEntry
get "uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavoriteEntry$Type = ($FavoriteEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavoriteEntry_ = $FavoriteEntry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/search/method/$InputMethod$ProgressCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InputMethod$ProgressCallback {

 "onProgress"(arg0: double): void

(arg0: double): void
}

export namespace $InputMethod$ProgressCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethod$ProgressCallback$Type = ($InputMethod$ProgressCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethod$ProgressCallback_ = $InputMethod$ProgressCallback$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext" {
import {$DraggableStack, $DraggableStack$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $DraggingContext<S extends $Screen> {

 "cast"<T extends $Screen>(): $DraggingContext<(T)>
 "getScreen"(): S
 "renderToVoid"(component: $DraggableComponent$Type<(any)>): void
 "renderToVoid"(stack: $DraggableStack$Type): void
 "isDraggingStack"(): boolean
 "getCurrentBounds"(): $Rectangle
 "getDragged"(): $DraggableComponent<(any)>
 "renderBack"(arg0: $DraggableComponent$Type<(any)>, arg1: $Rectangle$Type, arg2: $Supplier$Type<($Rectangle$Type)>): void
 "renderBack"(arg0: $DraggableComponent$Type<(any)>, arg1: $Point$Type, arg2: $Supplier$Type<($Point$Type)>): void
 "getCurrentStack"(): $DraggableStack
 "getCurrentPosition"(): $Point
 "renderBackToPosition"(stack: $DraggableStack$Type, initialPosition: $Rectangle$Type, bounds: $Supplier$Type<($Rectangle$Type)>): void
 "renderBackToPosition"(stack: $DraggableStack$Type, initialPosition: $Point$Type, position: $Supplier$Type<($Point$Type)>): void
 "isDraggingComponent"(): boolean
}

export namespace $DraggingContext {
function getInstance(): $DraggingContext<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggingContext$Type<S> = ($DraggingContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggingContext_<S> = $DraggingContext$Type<(S)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/category/$ButtonArea" {
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $ButtonArea {

 "get"(arg0: $Rectangle$Type): $Rectangle
 "getButtonText"(): string

(arg0: $Rectangle$Type): $Rectangle
}

export namespace $ButtonArea {
function defaultArea(): $ButtonArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonArea$Type = ($ButtonArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonArea_ = $ButtonArea$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$FocusedStackProvider" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$CompoundEventResult, $CompoundEventResult$Type} from "packages/dev/architectury/event/$CompoundEventResult"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $FocusedStackProvider extends $Comparable<($FocusedStackProvider)> {

 "compareTo"(o: $FocusedStackProvider$Type): integer
 "getPriority"(): double
 "provide"(arg0: $Screen$Type, arg1: $Point$Type): $CompoundEventResult<($EntryStack<(any)>)>

(o: $FocusedStackProvider$Type): integer
}

export namespace $FocusedStackProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusedStackProvider$Type = ($FocusedStackProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusedStackProvider_ = $FocusedStackProvider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$WidgetWithBounds" {
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export class $WidgetWithBounds extends $Widget {

constructor()

public "getBounds"(): $Rectangle
public "withPaddingVertical"(padY: integer): $WidgetWithBounds
public "withPaddingHorizontal"(padX: integer): $WidgetWithBounds
public "containsMouse"(mouseX: double, mouseY: double): boolean
public "withPadding"(padLeft: integer, padRight: integer, padTop: integer, padBottom: integer): $WidgetWithBounds
public "withPadding"(padX: integer, padY: integer): $WidgetWithBounds
public "withPadding"(padding: integer): $WidgetWithBounds
/**
 * 
 * @deprecated
 */
public "render"(graphics: $GuiGraphics$Type, bounds: $Rectangle$Type, mouseX: integer, mouseY: integer, delta: float): void
public "withScissors"(): $WidgetWithBounds
get "bounds"(): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetWithBounds$Type = ($WidgetWithBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetWithBounds_ = $WidgetWithBounds$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/entry/$EntryRegistry" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$LongPredicate, $LongPredicate$Type} from "packages/java/util/function/$LongPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$FilteringRule, $FilteringRule$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRule"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export interface $EntryRegistry extends $Reloadable<($REIClientPlugin)> {

 "size"(): integer
 "addEntry"(stack: $EntryStack$Type<(any)>): void
 "removeEntryIf"(arg0: $Predicate$Type<(any)>): boolean
 "removeEntry"(arg0: $EntryStack$Type<(any)>): boolean
 "refilterNew"(arg0: boolean, arg1: $Collection$Type<($EntryStack$Type<(any)>)>): $Collection<($EntryStack<(any)>)>
 "alreadyContain"(arg0: $EntryStack$Type<(any)>): boolean
 "addEntryAfter"(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>): void
 "addEntriesAfter"(arg0: $EntryStack$Type<(any)>, arg1: $Collection$Type<(any)>): void
 "addEntriesAfter"(afterStack: $EntryStack$Type<(any)>, ...stacks: ($EntryStack$Type<(any)>)[]): void
 "markFilteringRuleDirty"<Cache>(arg0: $FilteringRule$Type<(Cache)>, arg1: $Collection$Type<($EntryStack$Type<(any)>)>, arg2: $LongCollection$Type): void
 "getPreFilteredList"(): $List<($EntryStack<(any)>)>
 "addEntries"(...stacks: ($EntryStack$Type<(any)>)[]): void
 "addEntries"(stacks: $Collection$Type<(any)>): void
 "refilter"(): void
 "getEntryStacks"(): $Stream<($EntryStack<(any)>)>
 "isReloading"(): boolean
 "removeEntryExactHashIf"(arg0: $LongPredicate$Type): boolean
 "removeEntryFuzzyHashIf"(arg0: $LongPredicate$Type): boolean
/**
 * 
 * @deprecated
 */
 "appendStacksForItem"(arg0: $Item$Type): $List<($ItemStack)>
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $EntryRegistry {
function getInstance(): $EntryRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryRegistry$Type = ($EntryRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryRegistry_ = $EntryRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoProvider" {
import {$MenuSerializationContext, $MenuSerializationContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$MenuInfo, $MenuInfo$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfo"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

/**
 * 
 * @deprecated
 */
export interface $MenuInfoProvider<T extends $AbstractContainerMenu, D extends $Display> {

 "provideClient"(arg0: D, arg1: $MenuSerializationContext$Type<(T), (any), (D)>, arg2: T): $Optional<($MenuInfo<(T), (D)>)>
 "provide"(arg0: $CategoryIdentifier$Type<(D)>, arg1: T, arg2: $MenuSerializationContext$Type<(T), (any), (D)>, arg3: $CompoundTag$Type): $Optional<($MenuInfo<(T), (D)>)>
}

export namespace $MenuInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuInfoProvider$Type<T, D> = ($MenuInfoProvider<(T), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuInfoProvider_<T, D> = $MenuInfoProvider$Type<(T), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $DraggableBoundsProvider {

 "bounds"(): $VoxelShape

(providers: $Iterable$Type<($DraggableBoundsProvider$Type)>): $DraggableBoundsProvider
}

export namespace $DraggableBoundsProvider {
function concat(providers: $Iterable$Type<($DraggableBoundsProvider$Type)>): $DraggableBoundsProvider
function empty(): $DraggableBoundsProvider
function ofRectangle(bounds: $Rectangle$Type): $DraggableBoundsProvider
function ofRectangles(bounds: $Iterable$Type<($Rectangle$Type)>): $DraggableBoundsProvider
function ofShape(shape: $VoxelShape$Type): $DraggableBoundsProvider
function fromRectangle(bounds: $Rectangle$Type): $VoxelShape
function ofShapes(shapes: $Iterable$Type<($VoxelShape$Type)>): $DraggableBoundsProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableBoundsProvider$Type = ($DraggableBoundsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableBoundsProvider_ = $DraggableBoundsProvider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$CloseableScissors" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"

export interface $CloseableScissors extends $Closeable {

 "close"(): void

(): void
}

export namespace $CloseableScissors {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloseableScissors$Type = ($CloseableScissors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CloseableScissors_ = $CloseableScissors$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext" {
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $TooltipContext {

 "getFlag"(): $TooltipFlag
 "getPoint"(): $Point
 "isSearch"(): boolean
}

export namespace $TooltipContext {
function of(point: $Point$Type, flag: $TooltipFlag$Type, isSearch: boolean): $TooltipContext
function of(point: $Point$Type, flag: $TooltipFlag$Type): $TooltipContext
function of(point: $Point$Type): $TooltipContext
function of(): $TooltipContext
function ofMouse(): $TooltipContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipContext$Type = ($TooltipContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipContext_ = $TooltipContext$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/region/$RegionEntry" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Slot, $Slot$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Slot"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FavoriteMenuEntry, $FavoriteMenuEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteMenuEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FavoriteEntry, $FavoriteEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $RegionEntry<T extends $RegionEntry<(T)>> {

 "copy"(): T
 "doAction"(button: integer): boolean
 "isEntryInvalid"(): boolean
 "getMenuEntries"(): $Optional<($Supplier<($Collection<($FavoriteMenuEntry)>)>)>
 "asFavorite"(): $FavoriteEntry
 "asDraggableComponent"(slot: $Slot$Type): $DraggableComponent<(any)>
 "toStack"(): $EntryStack<(any)>
 "getUuid"(): $UUID
}

export namespace $RegionEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionEntry$Type<T> = ($RegionEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionEntry_<T> = $RegionEntry$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/$RecipeFinder" {
import {$Int2IntMap, $Int2IntMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntMap"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $RecipeFinder {
readonly "idToAmountMap": $Int2IntMap

constructor()

public "clear"(): void
public "contains"(itemId: integer): boolean
public "take"(itemId: integer, amount: integer): integer
public "findRecipe"(ingredients: $NonNullList$Type<($Ingredient$Type)>, intList_1: $IntList$Type, maxCrafts: integer): boolean
public "findRecipe"(ingredients: $NonNullList$Type<($Ingredient$Type)>, intList_1: $IntList$Type): boolean
public "addItem"(stack: $ItemStack$Type): void
public "addItem"(stack: $ItemStack$Type, count: integer): void
public "addNormalItem"(stack: $ItemStack$Type): void
public static "getItemId"(stack: $ItemStack$Type): integer
public "countRecipeCrafts"(ingredients: $NonNullList$Type<($Ingredient$Type)>, intList_1: $IntList$Type): integer
public "countRecipeCrafts"(ingredients: $NonNullList$Type<($Ingredient$Type)>, maxCrafts: integer, intList_1: $IntList$Type): integer
public static "getStackFromId"(itemId: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFinder$Type = ($RecipeFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFinder_ = $RecipeFinder$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeRegistry" {
import {$EntryDefinition, $EntryDefinition$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryDefinition"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EntryTypeBridge, $EntryTypeBridge$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeBridge"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $EntryTypeRegistry extends $Reloadable<($REIPlugin<(any)>)> {

 "get"<T>(type: $EntryType$Type<(T)>): $EntryDefinition<(T)>
 "get"(arg0: $ResourceLocation$Type): $EntryDefinition<(any)>
 "values"(): $Set<($EntryDefinition<(any)>)>
 "register"<T>(type: $EntryType$Type<(T)>, definition: $EntryDefinition$Type<(T)>): void
 "register"<T>(arg0: $ResourceLocation$Type, arg1: $EntryDefinition$Type<(T)>): void
 "keySet"(): $Set<($ResourceLocation)>
 "getBridgesFor"<A, B>(arg0: $EntryType$Type<(A)>, arg1: $EntryType$Type<(B)>): $Iterable<($EntryTypeBridge<(A), (B)>)>
 "registerBridge"<A, B>(arg0: $EntryType$Type<(A)>, arg1: $EntryType$Type<(B)>, arg2: $EntryTypeBridge$Type<(A), (B)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $EntryTypeRegistry {
function getInstance(): $EntryTypeRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryTypeRegistry$Type = ($EntryTypeRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryTypeRegistry_ = $EntryTypeRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Tooltip$Entry, $Tooltip$Entry$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip$Entry"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $Tooltip {

 "getY"(): integer
 "add"(arg0: $TooltipComponent$Type): $Tooltip
 "add"(arg0: $Component$Type): $Tooltip
 "addAll"(...text: ($Component$Type)[]): $Tooltip
 "addAll"(...components: ($TooltipComponent$Type)[]): $Tooltip
 "queue"(): void
 "copy"(): $Tooltip
 "entries"(): $List<($Tooltip$Entry)>
 "getContextStack"(): $EntryStack<(any)>
 "addAllTooltipComponents"(text: $Iterable$Type<($TooltipComponent$Type)>): $Tooltip
 "addAllTexts"(text: $Iterable$Type<($Component$Type)>): $Tooltip
 "getX"(): integer
 "withContextStack"(arg0: $EntryStack$Type<(any)>): $Tooltip
}

export namespace $Tooltip {
function entry(text: $Component$Type): $Tooltip$Entry
function entry(text: $TooltipComponent$Type): $Tooltip$Entry
function create(...texts: ($Component$Type)[]): $Tooltip
function create(point: $Point$Type, texts: $Collection$Type<($Component$Type)>): $Tooltip
function create(point: $Point$Type, ...texts: ($Component$Type)[]): $Tooltip
function create(texts: $Collection$Type<($Component$Type)>): $Tooltip
function from(point: $Point$Type, ...entries: ($Tooltip$Entry$Type)[]): $Tooltip
function from(entries: $Collection$Type<($Tooltip$Entry$Type)>): $Tooltip
function from(...entries: ($Tooltip$Entry$Type)[]): $Tooltip
function from(point: $Point$Type, entries: $Collection$Type<($Tooltip$Entry$Type)>): $Tooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$Type = ($Tooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tooltip_ = $Tooltip$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Result" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TransferHandlerRenderer, $TransferHandlerRenderer$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandlerRenderer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TransferHandler$Context, $TransferHandler$Context$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Context"
import {$TransferHandler$Result$TooltipSink, $TransferHandler$Result$TooltipSink$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Result$TooltipSink"
import {$Tooltip$Entry, $Tooltip$Entry$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip$Entry"
import {$TransferHandler, $TransferHandler$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"
import {$EntryIngredient, $EntryIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient"

export interface $TransferHandler$Result {

 "isBlocking"(): boolean
 "color"(arg0: integer): $TransferHandler$Result
 "getError"(): $Component
 "getRenderer"(arg0: $TransferHandler$Type, arg1: $TransferHandler$Context$Type): $TransferHandlerRenderer
 "blocksFurtherHandling"(arg0: boolean): $TransferHandler$Result
 "blocksFurtherHandling"(): $TransferHandler$Result
 "isReturningToScreen"(): boolean
 "isSuccessful"(): boolean
 "getColor"(): integer
 "renderer"(arg0: $TransferHandlerRenderer$Type): $TransferHandler$Result
 "getTooltipRenderer"(): $BiConsumer<($Point), ($TransferHandler$Result$TooltipSink)>
 "tooltipMissing"(arg0: $List$Type<($EntryIngredient$Type)>): $TransferHandler$Result
 "isApplicable"(): boolean
 "tooltip"(arg0: $TooltipComponent$Type): $TransferHandler$Result
 "tooltip"(arg0: $Component$Type): $TransferHandler$Result
 "overrideTooltipRenderer"(arg0: $BiConsumer$Type<($Point$Type), ($TransferHandler$Result$TooltipSink$Type)>): $TransferHandler$Result
 "fillTooltip"(arg0: $List$Type<($Tooltip$Entry$Type)>): void
}

export namespace $TransferHandler$Result {
function createFailedCustomButtonColor(error: $Component$Type, color: integer): $TransferHandler$Result
function createFailed(error: $Component$Type): $TransferHandler$Result
function createSuccessful(): $TransferHandler$Result
function createNotApplicable(): $TransferHandler$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandler$Result$Type = ($TransferHandler$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandler$Result_ = $TransferHandler$Result$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResult" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $FilteringResult {

 "hide"(arg0: $EntryStack$Type<(any)>): $FilteringResult
 "hide"(arg0: $Collection$Type<(any)>): $FilteringResult
 "show"(arg0: $Collection$Type<(any)>): $FilteringResult
 "show"(arg0: $EntryStack$Type<(any)>): $FilteringResult
}

export namespace $FilteringResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringResult$Type = ($FilteringResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringResult_ = $FilteringResult$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProvider" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableComponentProvider<T extends $Screen, A> extends $Comparable<($DraggableComponentProvider<(T), (A)>)> {

 "compareTo"(o: $DraggableComponentProvider$Type<(T), (A)>): integer
 "getContext"(): $DraggingContext<(T)>
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: R): boolean
 "getHovered"(arg0: $DraggingContext$Type<(T)>, arg1: double, arg2: double): $DraggableComponent<(A)>
}

export namespace $DraggableComponentProvider {
function from<T, A>(providers: $Supplier$Type<(any)>): $DraggableComponentProvider<(T), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableComponentProvider$Type<T, A> = ($DraggableComponentProvider<(T), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableComponentProvider_<T, A> = $DraggableComponentProvider$Type<(T), (A)>;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererRegistry" {
import {$EntryRenderer, $EntryRenderer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$EntryRendererRegistry$TooltipTransformer, $EntryRendererRegistry$TooltipTransformer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererRegistry$TooltipTransformer"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$EntryRendererProvider, $EntryRendererProvider$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererProvider"

export interface $EntryRendererRegistry extends $Reloadable<($REIClientPlugin)> {

 "get"<T>(arg0: $EntryStack$Type<(T)>): $EntryRenderer<(T)>
 "register"<T>(arg0: $EntryType$Type<(T)>, arg1: $EntryRendererProvider$Type<(T)>): void
 "transformTooltip"<T>(type: $EntryType$Type<(T)>, transformer: $EntryRendererRegistry$TooltipTransformer$Type<(T)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $EntryRendererRegistry {
function getInstance(): $EntryRendererRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryRendererRegistry$Type = ($EntryRendererRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryRendererRegistry_ = $EntryRendererRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/overlay/$OverlayListWidget" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $OverlayListWidget {

 "getEntries"(): $Stream<($EntryStack<(any)>)>
 "getFocusedStack"(): $EntryStack<(any)>
 "containsMouse"(arg0: $Point$Type): boolean
}

export namespace $OverlayListWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayListWidget$Type = ($OverlayListWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayListWidget_ = $OverlayListWidget$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$SystemFavoriteEntryProvider" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FavoriteEntry, $FavoriteEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry"

/**
 * 
 * @deprecated
 */
export interface $SystemFavoriteEntryProvider<T extends $FavoriteEntry> {

 "provide"(): $List<(T)>
 "updateInterval"(): long

(): $List<(T)>
}

export namespace $SystemFavoriteEntryProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SystemFavoriteEntryProvider$Type<T> = ($SystemFavoriteEntryProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SystemFavoriteEntryProvider_<T> = $SystemFavoriteEntryProvider$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/plugins/$PluginView" {
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$REIPluginProvider, $REIPluginProvider$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPluginProvider"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIServerPlugin, $REIServerPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIServerPlugin"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"

export interface $PluginView<P extends $REIPlugin<(any)>> {

 "pre"(arg0: $ReloadStage$Type): void
 "registerPlugin"(arg0: $REIPluginProvider$Type<(any)>): void
 "then"(view: $PluginView$Type<(any)>): $PluginView<(P)>
 "post"(arg0: $ReloadStage$Type): void
}

export namespace $PluginView {
function getInstance(): $PluginView<($REIPlugin<(any)>)>
function getClientInstance(): $PluginView<($REIClientPlugin)>
function getServerInstance(): $PluginView<($REIServerPlugin)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PluginView$Type<P> = ($PluginView<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PluginView_<P> = $PluginView$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererProvider" {
import {$EntryRenderer, $EntryRenderer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"

export interface $EntryRendererProvider<T> {

 "provide"(arg0: $EntryStack$Type<(T)>, arg1: $EntryRenderer$Type<(T)>): $EntryRenderer<(T)>

(): $EntryRendererProvider<(T)>
}

export namespace $EntryRendererProvider {
function empty<T>(): $EntryRendererProvider<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryRendererProvider$Type<T> = ($EntryRendererProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryRendererProvider_<T> = $EntryRendererProvider$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$EntryStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntryRenderer, $EntryRenderer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TextRepresentable, $TextRepresentable$Type} from "packages/me/shedaniel/rei/api/common/util/$TextRepresentable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CrashReport, $CrashReport$Type} from "packages/net/minecraft/$CrashReport"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$EntryDefinition, $EntryDefinition$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryDefinition"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Renderer, $Renderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$Renderer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$EntryStack$Settings, $EntryStack$Settings$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack$Settings"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$Unit, $Unit$Type} from "packages/net/minecraft/util/$Unit"

export interface $EntryStack<T> extends $TextRepresentable, $Renderer {

 "getIdentifier"(): $ResourceLocation
 "get"<R>(arg0: $EntryStack$Settings$Type<(R)>): R
/**
 * 
 * @deprecated
 */
 "equals"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "hashCode"(): integer
 "cast"<O>(): $EntryStack<(O)>
 "isEmpty"(): boolean
 "getValue"(): T
/**
 * 
 * @deprecated
 */
 "save"(): $CompoundTag
 "copy"(): $EntryStack<(T)>
 "getType"(): $EntryType<(T)>
 "getDefinition"(): $EntryDefinition<(T)>
 "normalize"(): $EntryStack<(T)>
 "wildcard"(): $EntryStack<(T)>
 "getRenderer"(): $EntryRenderer<(T)>
 "cheatsAs"(): $EntryStack<($ItemStack)>
 "getContainingNamespace"(): string
 "setting"<R>(arg0: $EntryStack$Settings$Type<(R)>, arg1: R): $EntryStack<(T)>
 "supportSaving"(): boolean
 "castValue"<R>(): R
 "saveStack"(): $CompoundTag
 "removeSetting"<R>(arg0: $EntryStack$Settings$Type<(R)>): $EntryStack<(T)>
 "getTagsFor"(): $Stream<($TagKey<(any)>)>
 "clearSettings"(): $EntryStack<(T)>
 "rewrap"(): $EntryStack<(T)>
 "tooltipProcessor"(tooltipProcessor: $BiFunction$Type<($EntryStack$Type<(T)>), ($Tooltip$Type), ($Tooltip$Type)>): $EntryStack<(T)>
 "withRenderer"(renderer: $Function$Type<($EntryStack$Type<(T)>), ($EntryRenderer$Type<(any)>)>): $EntryStack<(T)>
 "withRenderer"(renderer: $EntryRenderer$Type<(any)>): $EntryStack<(T)>
 "getValueType"(): $Class<(T)>
 "getNullable"<R>(arg0: $EntryStack$Settings$Type<(R)>): R
 "getTooltip"(context: $TooltipContext$Type): $Tooltip
 "getTooltip"(arg0: $TooltipContext$Type, arg1: boolean): $Tooltip
 "tooltip"(...tooltips: ($Component$Type)[]): $EntryStack<(T)>
 "tooltip"(tooltips: $List$Type<($Component$Type)>): $EntryStack<(T)>
 "tooltip"(tooltipProvider: $Function$Type<($EntryStack$Type<(any)>), ($List$Type<($Component$Type)>)>): $EntryStack<(T)>
 "asFormatStrippedText"(): $Component
 "asFormattedText"(context: $TooltipContext$Type): $Component
 "asFormattedText"(): $Component
 "fillCrashReport"(report: $CrashReport$Type, category: $CrashReportCategory$Type): void
 "render"(arg0: $GuiGraphics$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: float): void
}

export namespace $EntryStack {
function of<T>(definition: $EntryDefinition$Type<(T)>, value: T): $EntryStack<(T)>
function of<T>(type: $EntryType$Type<(T)>, value: T): $EntryStack<(T)>
function empty(): $EntryStack<($Unit)>
function read(tag: $CompoundTag$Type): $EntryStack<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryStack$Type<T> = ($EntryStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryStack_<T> = $EntryStack$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/search/method/$InputMethod" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputMethod$Locale, $InputMethod$Locale$Type} from "packages/me/shedaniel/rei/api/client/search/method/$InputMethod$Locale"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputMethod$ProgressCallback, $InputMethod$ProgressCallback$Type} from "packages/me/shedaniel/rei/api/client/search/method/$InputMethod$ProgressCallback"
import {$FavoriteMenuEntry, $FavoriteMenuEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteMenuEntry"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $InputMethod<T> {

 "getDescription"(): $Component
 "getName"(): $Component
 "contains"(arg0: string, arg1: T): boolean
 "prepare"(arg0: $Executor$Type): $CompletableFuture<(void)>
 "prepare"(executor: $Executor$Type, progressCallback: $InputMethod$ProgressCallback$Type): $CompletableFuture<(void)>
 "dispose"(executor: $Executor$Type, progressCallback: $InputMethod$ProgressCallback$Type): $CompletableFuture<(void)>
 "dispose"(arg0: $Executor$Type): $CompletableFuture<(void)>
 "expendFilter"(arg0: string): $Iterable<(T)>
 "getMatchingLocales"(): $List<($InputMethod$Locale)>
 "suggestInputString"(str: string): string
 "getOptionsMenuEntries"(): $List<($FavoriteMenuEntry)>
}

export namespace $InputMethod {
function active(): $InputMethod<(any)>
function getAllLocales(): $List<($InputMethod$Locale)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethod$Type<T> = ($InputMethod<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethod_<T> = $InputMethod$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayRendererProvider" {
import {$OverlayRendererProvider$Sink, $OverlayRendererProvider$Sink$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayRendererProvider$Sink"

export interface $OverlayRendererProvider {

 "onApplied"(sink: $OverlayRendererProvider$Sink$Type): void
 "onRemoved"(): void
}

export namespace $OverlayRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayRendererProvider$Type = ($OverlayRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayRendererProvider_ = $OverlayRendererProvider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackProviderWidget" {
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$DraggableStack, $DraggableStack$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack"
import {$DraggableComponentProviderWidget, $DraggableComponentProviderWidget$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProviderWidget"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponentProvider, $DraggableComponentProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProvider"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"
import {$DraggableStackProvider, $DraggableStackProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackProvider"

export interface $DraggableStackProviderWidget extends $DraggableComponentProviderWidget<($EntryStack<(any)>)> {

 "getHovered"(context: $DraggingContext$Type<($Screen$Type)>, mouseX: double, mouseY: double): $DraggableComponent<($EntryStack<(any)>)>
 "getHoveredStack"(arg0: $DraggingContext$Type<($Screen$Type)>, arg1: double, arg2: double): $DraggableStack

(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableStackProviderWidget$Type)>)>): $DraggableStackProviderWidget
}

export namespace $DraggableStackProviderWidget {
function from(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableStackProviderWidget$Type)>)>): $DraggableStackProviderWidget
function toProvider(widget: $DraggableStackProviderWidget$Type): $DraggableStackProvider<($Screen)>
function toProvider(widget: $DraggableStackProviderWidget$Type, priority: double): $DraggableStackProvider<($Screen)>
function toProvider<A>(widget: $DraggableComponentProviderWidget$Type<($EntryStack$Type<(any)>)>, priority: double): $DraggableComponentProvider<($Screen), ($EntryStack<(any)>)>
function toProvider<A>(widget: $DraggableComponentProviderWidget$Type<($EntryStack$Type<(any)>)>): $DraggableComponentProvider<($Screen), ($EntryStack<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStackProviderWidget$Type = ($DraggableStackProviderWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStackProviderWidget_ = $DraggableStackProviderWidget$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$FavoriteMenuEntry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$BooleanValue, $BooleanValue$Type} from "packages/dev/architectury/utils/value/$BooleanValue"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $FavoriteMenuEntry extends $Widget {
 "closeMenu": $Runnable

constructor()

public "getEntryWidth"(): integer
public static "createToggle"(text: $Component$Type, value: $BooleanValue$Type): $FavoriteMenuEntry
public "getEntryHeight"(): integer
public "updateInformation"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean, arg4: boolean, arg5: integer): void
public static "createSubMenu"(text: $Component$Type, entries: $List$Type<($FavoriteMenuEntry$Type)>): $FavoriteMenuEntry
public "closeMenu"(): void
get "entryWidth"(): integer
get "entryHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavoriteMenuEntry$Type = ($FavoriteMenuEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavoriteMenuEntry_ = $FavoriteMenuEntry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/display/$Display" {
import {$MenuSerializationContext, $MenuSerializationContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext"
import {$DisplaySpec, $DisplaySpec$Type} from "packages/me/shedaniel/rei/impl/display/$DisplaySpec"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$MenuInfo, $MenuInfo$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfo"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InputIngredient, $InputIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$InputIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntryIngredient, $EntryIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient"

export interface $Display extends $DisplaySpec {

 "getCategoryIdentifier"(): $CategoryIdentifier<(any)>
 "getOutputEntries"(): $List<($EntryIngredient)>
/**
 * 
 * @deprecated
 */
 "getInputEntries"(context: $MenuSerializationContext$Type<(any), (any), (any)>, info: $MenuInfo$Type<(any), (any)>, fill: boolean): $List<($EntryIngredient)>
 "getInputEntries"(): $List<($EntryIngredient)>
 "getRequiredEntries"(): $List<($EntryIngredient)>
 "getDisplayLocation"(): $Optional<($ResourceLocation)>
 "getInputIngredients"(menu: $AbstractContainerMenu$Type, player: $Player$Type): $List<($InputIngredient<($EntryStack<(any)>)>)>
/**
 * 
 * @deprecated
 */
 "getInputIngredients"(context: $MenuSerializationContext$Type<(any), (any), (any)>, info: $MenuInfo$Type<(any), (any)>, fill: boolean): $List<($InputIngredient<($EntryStack<(any)>)>)>
 "provideInternalDisplay"(): $Display
 "provideInternalDisplayIds"(): $Collection<($ResourceLocation)>
}

export namespace $Display {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Display$Type = ($Display);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Display_ = $Display$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoRegistry" {
import {$MenuSerializationContext, $MenuSerializationContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$MenuInfo, $MenuInfo$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfo"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$MenuInfoProvider, $MenuInfoProvider$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoProvider"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIServerPlugin, $REIServerPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIServerPlugin"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

/**
 * 
 * @deprecated
 */
export interface $MenuInfoRegistry extends $Reloadable<($REIServerPlugin)> {

 "get"<C extends $AbstractContainerMenu, D extends $Display>(arg0: $CategoryIdentifier$Type<(D)>, arg1: C, arg2: $MenuSerializationContext$Type<(C), (any), (D)>, arg3: $CompoundTag$Type): $MenuInfo<(C), (D)>
 "register"<C extends $AbstractContainerMenu, D extends $Display>(arg0: $CategoryIdentifier$Type<(D)>, arg1: $Class$Type<(C)>, arg2: $MenuInfoProvider$Type<(C), (D)>): void
 "infoSize"(): integer
 "getClient"<C extends $AbstractContainerMenu, D extends $Display>(arg0: D, arg1: $MenuSerializationContext$Type<(C), (any), (D)>, arg2: C): $MenuInfo<(C), (D)>
 "registerGeneric"<D extends $Display>(arg0: $Predicate$Type<($CategoryIdentifier$Type<(any)>)>, arg1: $MenuInfoProvider$Type<(any), (D)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>, plugin: $REIServerPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>, plugin: $REIServerPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIServerPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIServerPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $MenuInfoRegistry {
function getInstance(): $MenuInfoRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuInfoRegistry$Type = ($MenuInfoRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuInfoRegistry_ = $MenuInfoRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$InputIngredient" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"

export interface $InputIngredient<T> {

 "get"(): $List<(T)>
 "getIndex"(): integer
 "getDisplayIndex"(): integer
}

export namespace $InputIngredient {
function of<T>(index: integer, displayIndex: integer, ingredient: $List$Type<(T)>): $InputIngredient<(T)>
function of<T>(index: integer, ingredient: $List$Type<(T)>): $InputIngredient<(T)>
function empty<T>(index: integer): $InputIngredient<(T)>
function withType<T>(ingredient: $InputIngredient$Type<($EntryStack$Type<(any)>)>, type: $EntryType$Type<(T)>): $InputIngredient<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputIngredient$Type<T> = ($InputIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputIngredient_<T> = $InputIngredient$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/category/$CategoryRegistry$CategoryConfiguration" {
import {$DisplayCategoryView, $DisplayCategoryView$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategoryView"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Identifiable, $Identifiable$Type} from "packages/me/shedaniel/rei/api/common/util/$Identifiable"
import {$ButtonArea, $ButtonArea$Type} from "packages/me/shedaniel/rei/api/client/registry/category/$ButtonArea"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$CategoryExtensionProvider, $CategoryExtensionProvider$Type} from "packages/me/shedaniel/rei/api/client/registry/category/extension/$CategoryExtensionProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"
import {$EntryIngredient, $EntryIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient"

export interface $CategoryRegistry$CategoryConfiguration<T extends $Display> extends $Identifiable {

 "getIdentifier"(): $ResourceLocation
 "getCategoryIdentifier"(): $CategoryIdentifier<(any)>
 "setPlusButtonArea"(arg0: $ButtonArea$Type): void
 "addWorkstations"(...arg0: ($EntryIngredient$Type)[]): void
 "addWorkstations"(...stations: ($EntryStack$Type<(any)>)[]): void
/**
 * 
 * @deprecated
 */
 "removePlusButton"(): void
 "registerExtension"(arg0: $CategoryExtensionProvider$Type<(T)>): void
 "isQuickCraftingEnabledByDefault"(): boolean
 "getCategory"(): $DisplayCategory<(T)>
 "getWorkstations"(): $List<($EntryIngredient)>
 "getView"(arg0: T): $DisplayCategoryView<(T)>
 "getPlusButtonArea"(): $Optional<($ButtonArea)>
 "setQuickCraftingEnabledByDefault"(arg0: boolean): void
}

export namespace $CategoryRegistry$CategoryConfiguration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryRegistry$CategoryConfiguration$Type<T> = ($CategoryRegistry$CategoryConfiguration<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryRegistry$CategoryConfiguration_<T> = $CategoryRegistry$CategoryConfiguration$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MenuInfoContext, $MenuInfoContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

/**
 * 
 * @deprecated
 */
export interface $MenuSerializationContext<T extends $AbstractContainerMenu, P extends $Player, D extends $Display> {

 "getCategoryIdentifier"(): $CategoryIdentifier<(D)>
 "getMenu"(): T
 "withDisplay"(display: D): $MenuInfoContext<(T), (P), (D)>
 "getPlayerEntity"(): P
}

export namespace $MenuSerializationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuSerializationContext$Type<T, P, D> = ($MenuSerializationContext<(T), (P), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuSerializationContext_<T, P, D> = $MenuSerializationContext$Type<(T), (P), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/$DisplayRegistry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DynamicDisplayGenerator, $DynamicDisplayGenerator$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DynamicDisplayGenerator"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecipeManagerContext, $RecipeManagerContext$Type} from "packages/me/shedaniel/rei/api/common/registry/$RecipeManagerContext"
import {$DisplayAdditionReasons, $DisplayAdditionReasons$Type} from "packages/me/shedaniel/rei/api/client/registry/display/reason/$DisplayAdditionReasons"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$DisplayVisibilityPredicate, $DisplayVisibilityPredicate$Type} from "packages/me/shedaniel/rei/api/client/registry/display/visibility/$DisplayVisibilityPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$DisplayAdditionReason, $DisplayAdditionReason$Type} from "packages/me/shedaniel/rei/api/client/registry/display/reason/$DisplayAdditionReason"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DisplayRegistry extends $RecipeManagerContext<($REIClientPlugin)> {

 "add"(arg0: $Display$Type, arg1: any): void
 "add"(display: $Display$Type): void
 "add"(object: any): void
 "get"<D extends $Display>(categoryId: $CategoryIdentifier$Type<(D)>): $List<(D)>
 "getAll"(): $Map<($CategoryIdentifier<(any)>), ($List<($Display)>)>
 "registerFiller"<D extends $Display>(arg0: $Predicate$Type<(any)>, arg1: $Function$Type<(any), (D)>): void
 "registerFiller"<T, D extends $Display>(typeClass: $Class$Type<(T)>, filler: $Function$Type<(any), (D)>): void
 "registerFiller"<T, D extends $Display>(arg0: $Class$Type<(T)>, arg1: $BiPredicate$Type<(any), ($DisplayAdditionReasons$Type)>, arg2: $Function$Type<(any), (D)>): void
 "registerFiller"<T, D extends $Display>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>, arg2: $Function$Type<(any), (D)>): void
 "tryFillDisplay"<T>(value: T): $Collection<($Display)>
 "tryFillDisplay"<T>(arg0: T, ...arg1: ($DisplayAdditionReason$Type)[]): $Collection<($Display)>
 "getDisplayOrigin"(arg0: $Display$Type): any
 "isDisplayInvisible"(display: $Display$Type): boolean
 "addWithReason"(object: any, ...reasons: ($DisplayAdditionReason$Type)[]): void
 "displaySize"(): integer
 "isDisplayVisible"(arg0: $Display$Type): boolean
 "getCategoryDisplayGenerators"(): $Map<($CategoryIdentifier<(any)>), ($List<($DynamicDisplayGenerator<(any)>)>)>
 "getCategoryDisplayGenerators"<D extends $Display>(categoryId: $CategoryIdentifier$Type<(D)>): $List<($DynamicDisplayGenerator<(any)>)>
 "getGlobalDisplayGenerators"(): $List<($DynamicDisplayGenerator<(any)>)>
 "registerDisplayGenerator"<A extends $Display>(arg0: $CategoryIdentifier$Type<(A)>, arg1: $DynamicDisplayGenerator$Type<(A)>): void
 "registerVisibilityPredicate"(arg0: $DisplayVisibilityPredicate$Type): void
 "registerDisplaysFiller"<T, D extends $Display>(arg0: $Class$Type<(T)>, arg1: $BiPredicate$Type<(any), ($DisplayAdditionReasons$Type)>, arg2: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerDisplaysFiller"<T, D extends $Display>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>, arg2: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerDisplaysFiller"<D extends $Display>(arg0: $Predicate$Type<(any)>, arg1: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerDisplaysFiller"<T, D extends $Display>(typeClass: $Class$Type<(T)>, filler: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerRecipeFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $Predicate$Type<($RecipeType$Type<(any)>)>, filler: $Function$Type<(any), (D)>): void
 "registerRecipeFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $Predicate$Type<($RecipeType$Type<(any)>)>, predicate: $Predicate$Type<(any)>, filler: $Function$Type<(any), (D)>): void
 "registerRecipeFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $RecipeType$Type<(any)>, filler: $Function$Type<(any), (D)>): void
 "registerRecipesFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $Predicate$Type<($RecipeType$Type<(any)>)>, predicate: $Predicate$Type<(any)>, filler: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerRecipesFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $Predicate$Type<($RecipeType$Type<(any)>)>, filler: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerRecipesFiller"<T extends $Recipe<(any)>, D extends $Display>(typeClass: $Class$Type<(T)>, recipeType: $RecipeType$Type<(any)>, filler: $Function$Type<(any), ($Collection$Type<(any)>)>): void
 "registerGlobalDisplayGenerator"<A extends $Display>(arg0: $DynamicDisplayGenerator$Type<(A)>): void
 "getVisibilityPredicates"(): $List<($DisplayVisibilityPredicate)>
 "getAllSortedRecipes"(): $List<($Recipe<(any)>)>
 "byId"(tag: $CompoundTag$Type, key: string): $Recipe<(any)>
 "byId"(location: $ResourceLocation$Type): $Recipe<(any)>
 "getRecipeManager"(): $RecipeManager
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $DisplayRegistry {
function getInstance(): $DisplayRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayRegistry$Type = ($DisplayRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayRegistry_ = $DisplayRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/config/addon/$ConfigAddonRegistry" {
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$ConfigAddon, $ConfigAddon$Type} from "packages/me/shedaniel/rei/api/client/config/addon/$ConfigAddon"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"

export interface $ConfigAddonRegistry extends $Reloadable<($REIClientPlugin)> {

 "register"(arg0: $ConfigAddon$Type): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $ConfigAddonRegistry {
function getInstance(): $ConfigAddonRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigAddonRegistry$Type = ($ConfigAddonRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigAddonRegistry_ = $ConfigAddonRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DisplayCategoryView, $DisplayCategoryView$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategoryView"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$Identifiable, $Identifiable$Type} from "packages/me/shedaniel/rei/api/common/util/$Identifiable"
import {$Renderer, $Renderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$Renderer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$DisplayMerger, $DisplayMerger$Type} from "packages/me/shedaniel/rei/api/common/display/$DisplayMerger"
import {$DisplayRenderer, $DisplayRenderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$DisplayRenderer"

export interface $DisplayCategory<T extends $Display> extends $DisplayCategoryView<(T)>, $Identifiable {

 "getIdentifier"(): $ResourceLocation
 "getCategoryIdentifier"(): $CategoryIdentifier<(any)>
 "getIcon"(): $Renderer
 "getDisplayWidth"(display: T): integer
 "getDisplayRenderer"(display: T): $DisplayRenderer
 "getDisplayHeight"(): integer
 "getTitle"(): $Component
 "getDisplayMerger"(): $DisplayMerger<(T)>
 "setupDisplay"(display: T, bounds: $Rectangle$Type): $List<($Widget)>
 "getMaximumDisplaysPerPage"(): integer
 "getFixedDisplaysPerPage"(): integer
}

export namespace $DisplayCategory {
function getContentMerger<T>(): $DisplayMerger<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCategory$Type<T> = ($DisplayCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCategory_<T> = $DisplayCategory$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $DraggableComponent<T> extends $Supplier<(T)> {

 "release"(result: $DraggedAcceptorResult$Type): void
 "drag"(): void
 "getHeight"(): integer
 "getWidth"(): integer
 "getIf"<A>(...typeHack: (A)[]): $Optional<($DraggableComponent<(A)>)>
 "render"(graphics: $GuiGraphics$Type, bounds: $Rectangle$Type, mouseX: integer, mouseY: integer, delta: float): void
 "render"(graphics: $GuiGraphics$Type, position: $Point$Type, mouseX: integer, mouseY: integer, delta: float): void
 "getOriginBounds"(mouse: $Point$Type): $Rectangle
 "ifMatches"<A>(consumer: $Predicate$Type<(A)>, ...typeHack: (A)[]): boolean
 "ifMatches"<A>(consumer: $Consumer$Type<(A)>, ...typeHack: (A)[]): boolean
 "get"(): T
}

export namespace $DraggableComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableComponent$Type<T> = ($DraggableComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableComponent_<T> = $DraggableComponent$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/util/$Identifiable" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $Identifiable {

 "getIdentifier"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $Identifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Identifiable$Type = ($Identifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Identifiable_ = $Identifiable$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/plugins/$REIServerPlugin" {
import {$EntrySettingsAdapterRegistry, $EntrySettingsAdapterRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapterRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntryTypeRegistry, $EntryTypeRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeRegistry"
import {$FluidSupportProvider, $FluidSupportProvider$Type} from "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider"
import {$ItemComparatorRegistry, $ItemComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ItemComparatorRegistry"
import {$MenuInfoRegistry, $MenuInfoRegistry$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoRegistry"
import {$SlotAccessorRegistry, $SlotAccessorRegistry$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry"
import {$FluidComparatorRegistry, $FluidComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$FluidComparatorRegistry"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$PluginManager, $PluginManager$Type} from "packages/me/shedaniel/rei/api/common/plugins/$PluginManager"
import {$DisplaySerializerRegistry, $DisplaySerializerRegistry$Type} from "packages/me/shedaniel/rei/api/common/display/$DisplaySerializerRegistry"

export interface $REIServerPlugin extends $REIPlugin<($REIServerPlugin)> {

 "registerMenuInfo"(registry: $MenuInfoRegistry$Type): void
 "getPluginProviderClass"(): $Class<($REIServerPlugin)>
 "compareTo"(o: $REIPlugin$Type<(any)>): integer
 "getPriority"(): double
 "registerEntryTypes"(registry: $EntryTypeRegistry$Type): void
 "preStage"(manager: $PluginManager$Type<($REIServerPlugin$Type)>, stage: $ReloadStage$Type): void
 "postStage"(manager: $PluginManager$Type<($REIServerPlugin$Type)>, stage: $ReloadStage$Type): void
 "provide"(): $Collection<($REIServerPlugin)>
 "registerFluidComparators"(registry: $FluidComparatorRegistry$Type): void
 "registerFluidSupport"(support: $FluidSupportProvider$Type): void
 "registerSlotAccessors"(registry: $SlotAccessorRegistry$Type): void
 "shouldBeForcefullyDoneOnMainThread"(reloadable: $Reloadable$Type<(any)>): boolean
 "registerItemComparators"(registry: $ItemComparatorRegistry$Type): void
 "registerDisplaySerializer"(registry: $DisplaySerializerRegistry$Type): void
 "registerEntrySettingsAdapters"(registry: $EntrySettingsAdapterRegistry$Type): void
 "getPluginProviderName"(): string
}

export namespace $REIServerPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $REIServerPlugin$Type = ($REIServerPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $REIServerPlugin_ = $REIServerPlugin$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$SlotAccessorRegistry$Serializer, $SlotAccessorRegistry$Serializer$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry$Serializer"
import {$REIServerPlugin, $REIServerPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIServerPlugin"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SlotAccessorRegistry extends $Reloadable<($REIServerPlugin)> {

 "get"(arg0: $ResourceLocation$Type): $SlotAccessorRegistry$Serializer
 "register"(arg0: $ResourceLocation$Type, arg1: $Predicate$Type<($SlotAccessor$Type)>, arg2: $SlotAccessorRegistry$Serializer$Type): void
 "read"(arg0: $AbstractContainerMenu$Type, arg1: $Player$Type, arg2: $CompoundTag$Type): $SlotAccessor
 "save"(arg0: $AbstractContainerMenu$Type, arg1: $Player$Type, arg2: $SlotAccessor$Type): $CompoundTag
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>, plugin: $REIServerPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>, plugin: $REIServerPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIServerPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIServerPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIServerPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $SlotAccessorRegistry {
function getInstance(): $SlotAccessorRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessorRegistry$Type = ($SlotAccessorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessorRegistry_ = $SlotAccessorRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea$ClickAreaContext" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $ClickArea$ClickAreaContext<T extends $Screen> {

 "getMousePosition"(): $Point
 "getScreen"(): T
}

export namespace $ClickArea$ClickAreaContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickArea$ClickAreaContext$Type<T> = ($ClickArea$ClickAreaContext<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickArea$ClickAreaContext_<T> = $ClickArea$ClickAreaContext$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor" {
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$DraggableComponentVisitor, $DraggableComponentVisitor$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitor"
import {$DraggableStack, $DraggableStack$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$DraggableStackVisitor$BoundsProvider, $DraggableStackVisitor$BoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor$BoundsProvider"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DraggableBoundsProvider, $DraggableBoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableStackVisitor<T extends $Screen> extends $DraggableComponentVisitor<(T)> {

 "compareTo"(o: $DraggableStackVisitor$Type<(T)>): integer
 "getContext"(): $DraggingContext<(T)>
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: R): boolean
 "acceptDragged"(context: $DraggingContext$Type<(T)>, component: $DraggableComponent$Type<(any)>): $DraggedAcceptorResult
 "acceptDraggedStack"(context: $DraggingContext$Type<(T)>, stack: $DraggableStack$Type): $DraggedAcceptorResult
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<(T)>, component: $DraggableComponent$Type<(any)>): $Stream<($DraggableBoundsProvider)>
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<(T)>, stack: $DraggableStack$Type): $Stream<($DraggableStackVisitor$BoundsProvider)>
 "compareTo"(o: $DraggableComponentVisitor$Type<(T)>): integer

(o: $DraggableStackVisitor$Type<(T)>): integer
}

export namespace $DraggableStackVisitor {
function from<T>(visitors: $Supplier$Type<($Iterable$Type<($DraggableStackVisitor$Type<(T)>)>)>): $DraggableStackVisitor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStackVisitor$Type<T> = ($DraggableStackVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStackVisitor_<T> = $DraggableStackVisitor$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapter" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$EntryStack$Settings, $EntryStack$Settings$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack$Settings"

export interface $EntrySettingsAdapter<T, S> {

 "provide"(arg0: $EntryStack$Type<(T)>, arg1: $EntryStack$Settings$Type<(S)>, arg2: S): S

(): $EntrySettingsAdapter<(T), (S)>
}

export namespace $EntrySettingsAdapter {
function empty<T, S>(): $EntrySettingsAdapter<(T), (S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntrySettingsAdapter$Type<T, S> = ($EntrySettingsAdapter<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntrySettingsAdapter_<T, S> = $EntrySettingsAdapter$Type<(T), (S)>;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FavoriteEntryType$Registry, $FavoriteEntryType$Registry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType$Registry"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FavoriteEntry, $FavoriteEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FavoriteEntryType<T extends $FavoriteEntry> {

 "read"(arg0: $CompoundTag$Type): $DataResult<(T)>
 "save"(arg0: T, arg1: $CompoundTag$Type): $CompoundTag
 "fromArgs"(...arg0: (any)[]): $DataResult<(T)>
}

export namespace $FavoriteEntryType {
const ENTRY_STACK: $ResourceLocation
const DISPLAY: $ResourceLocation
function registry(): $FavoriteEntryType$Registry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavoriteEntryType$Type<T> = ($FavoriteEntryType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavoriteEntryType_<T> = $FavoriteEntryType$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparatorRegistry" {
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$EntryComparator, $EntryComparator$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparator"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$ComparisonContext, $ComparisonContext$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext"

export interface $EntryComparatorRegistry<T, S> extends $Reloadable<($REIPlugin<(any)>)> {

 "register"(arg0: $EntryComparator$Type<(T)>, arg1: S): void
 "register"(comparator: $EntryComparator$Type<(T)>, ...entries: (S)[]): void
 "containsComparator"(arg0: S): boolean
 "comparatorSize"(): integer
 "registerGlobal"(arg0: $EntryComparator$Type<(T)>): void
 "hashOf"(arg0: $ComparisonContext$Type, arg1: T): long
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $EntryComparatorRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryComparatorRegistry$Type<T, S> = ($EntryComparatorRegistry<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryComparatorRegistry_<T, S> = $EntryComparatorRegistry$Type<(T), (S)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackProvider" {
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$DraggableStack, $DraggableStack$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponentProvider, $DraggableComponentProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProvider"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableStackProvider<T extends $Screen> extends $DraggableComponentProvider<(T), ($EntryStack<(any)>)> {

 "compareTo"(o: $DraggableStackProvider$Type<(T)>): integer
 "getContext"(): $DraggingContext<(T)>
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: R): boolean
 "getHovered"(context: $DraggingContext$Type<(T)>, mouseX: double, mouseY: double): $DraggableComponent<($EntryStack<(any)>)>
 "getHoveredStack"(arg0: $DraggingContext$Type<(T)>, arg1: double, arg2: double): $DraggableStack
 "compareTo"(o: $DraggableComponentProvider$Type<(T), ($EntryStack$Type<(any)>)>): integer
}

export namespace $DraggableStackProvider {
function from<T>(providers: $Supplier$Type<($Iterable$Type<($DraggableStackProvider$Type<(T)>)>)>): $DraggableStackProvider<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStackProvider$Type<T> = ($DraggableStackProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStackProvider_<T> = $DraggableStackProvider$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Result$TooltipSink" {
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"

export interface $TransferHandler$Result$TooltipSink {

 "accept"(arg0: $Tooltip$Type): void

(arg0: $Tooltip$Type): void
}

export namespace $TransferHandler$Result$TooltipSink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandler$Result$TooltipSink$Type = ($TransferHandler$Result$TooltipSink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandler$Result$TooltipSink_ = $TransferHandler$Result$TooltipSink$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$Slot" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$WidgetWithBounds, $WidgetWithBounds$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$WidgetWithBounds"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export class $Slot extends $WidgetWithBounds {
static readonly "UN_MARKED": byte
static readonly "INPUT": byte
static readonly "OUTPUT": byte

constructor()

public "entry"(arg0: $EntryStack$Type<(any)>): $Slot
public "entries"(arg0: $Collection$Type<(any)>): $Slot
public "getEntries"(): $List<($EntryStack<(any)>)>
public "isInteractable"(): boolean
public "setInteractableFavorites"(arg0: boolean): void
public "isInteractableFavorites"(): boolean
public "interactableFavorites"(interactableFavorites: boolean): $Slot
public "noFavoritesInteractable"(): $Slot
public "unmarkInputOrOutput"(): $Slot
public "notFavoritesInteractable"(): $Slot
public "setBackgroundEnabled"(arg0: boolean): void
public "setHighlightEnabled"(arg0: boolean): void
public "isBackgroundEnabled"(): boolean
public "markInput"(): $Slot
public "getNoticeMark"(): byte
public "setInteractable"(arg0: boolean): void
public "markOutput"(): $Slot
public "noInteractable"(): $Slot
public "notInteractable"(): $Slot
public "setNoticeMark"(arg0: byte): void
public "interactable"(interactable: boolean): $Slot
public "disableBackground"(): $Slot
public "getInnerBounds"(): $Rectangle
public "tooltipsEnabled"(tooltipsEnabled: boolean): $Slot
public "disableHighlight"(): $Slot
public "isTooltipsEnabled"(): boolean
public "backgroundEnabled"(backgroundEnabled: boolean): $Slot
public "getCurrentEntry"(): $EntryStack<(any)>
public "disableTooltips"(): $Slot
public "getCurrentTooltip"(context: $TooltipContext$Type): $Tooltip
public "clearEntries"(): $Slot
public "highlightEnabled"(highlight: boolean): $Slot
public "isHighlightEnabled"(): boolean
public "setTooltipsEnabled"(arg0: boolean): void
get "noticeMark"(): byte
set "noticeMark"(value: byte)
get "innerBounds"(): $Rectangle
get "currentEntry"(): $EntryStack<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slot$Type = ($Slot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Slot_ = $Slot$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/category/visibility/$CategoryVisibilityPredicate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"

export interface $CategoryVisibilityPredicate extends $Comparable<($CategoryVisibilityPredicate)> {

 "compareTo"(o: $CategoryVisibilityPredicate$Type): integer
 "getPriority"(): double
 "handleCategory"(arg0: $DisplayCategory$Type<(any)>): $EventResult

(o: $CategoryVisibilityPredicate$Type): integer
}

export namespace $CategoryVisibilityPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryVisibilityPredicate$Type = ($CategoryVisibilityPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryVisibilityPredicate_ = $CategoryVisibilityPredicate$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/util/$TextRepresentable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"

export interface $TextRepresentable {

 "asFormatStrippedText"(): $Component
 "asFormattedText"(context: $TooltipContext$Type): $Component
 "asFormattedText"(): $Component
}

export namespace $TextRepresentable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextRepresentable$Type = ($TextRepresentable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextRepresentable_ = $TextRepresentable$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeBridge" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$CompoundEventResult, $CompoundEventResult$Type} from "packages/dev/architectury/event/$CompoundEventResult"

export interface $EntryTypeBridge<A, B> {

 "bridge"(arg0: $EntryStack$Type<(A)>): $CompoundEventResult<($Stream<($EntryStack<(B)>)>)>

(arg0: $EntryStack$Type<(A)>): $CompoundEventResult<($Stream<($EntryStack<(B)>)>)>
}

export namespace $EntryTypeBridge {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryTypeBridge$Type<A, B> = ($EntryTypeBridge<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryTypeBridge_<A, B> = $EntryTypeBridge$Type<(A), (B)>;
}}
declare module "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$FluidSupportProvider$Provider, $FluidSupportProvider$Provider$Type} from "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider$Provider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $FluidSupportProvider extends $Reloadable<($REIPlugin<(any)>)>, $List<($FluidSupportProvider$Provider)> {

 "register"(arg0: $FluidSupportProvider$Provider$Type): void
 "itemToFluids"(arg0: $EntryStack$Type<(any)>): $Optional<($Stream<($EntryStack<($FluidStack)>)>)>
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
 "add"(arg0: integer, arg1: $FluidSupportProvider$Provider$Type): void
 "add"(arg0: $FluidSupportProvider$Provider$Type): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): $FluidSupportProvider$Provider
 "get"(arg0: integer): $FluidSupportProvider$Provider
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "isEmpty"(): boolean
 "lastIndexOf"(arg0: any): integer
 "contains"(arg0: any): boolean
 "replaceAll"(arg0: $UnaryOperator$Type<($FluidSupportProvider$Provider$Type)>): void
 "size"(): integer
 "subList"(arg0: integer, arg1: integer): $List<($FluidSupportProvider$Provider)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<($FluidSupportProvider$Provider)>
 "spliterator"(): $Spliterator<($FluidSupportProvider$Provider)>
 "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "set"(arg0: integer, arg1: $FluidSupportProvider$Provider$Type): $FluidSupportProvider$Provider
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "listIterator"(arg0: integer): $ListIterator<($FluidSupportProvider$Provider)>
 "listIterator"(): $ListIterator<($FluidSupportProvider$Provider)>
 "sort"(arg0: $Comparator$Type<(any)>): void
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<($FluidSupportProvider$Provider)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<($FluidSupportProvider$Provider)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $FluidSupportProvider {
function getInstance(): $FluidSupportProvider
function copyOf<E>(arg0: $Collection$Type<(any)>): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type, arg5: $FluidSupportProvider$Provider$Type, arg6: $FluidSupportProvider$Provider$Type, arg7: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type, arg5: $FluidSupportProvider$Provider$Type, arg6: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type, arg5: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type, arg5: $FluidSupportProvider$Provider$Type, arg6: $FluidSupportProvider$Provider$Type, arg7: $FluidSupportProvider$Provider$Type, arg8: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
function of<E>(...arg0: ($FluidSupportProvider$Provider$Type)[]): $List<($FluidSupportProvider$Provider)>
function of<E>(arg0: $FluidSupportProvider$Provider$Type, arg1: $FluidSupportProvider$Provider$Type, arg2: $FluidSupportProvider$Provider$Type, arg3: $FluidSupportProvider$Provider$Type, arg4: $FluidSupportProvider$Provider$Type, arg5: $FluidSupportProvider$Provider$Type, arg6: $FluidSupportProvider$Provider$Type, arg7: $FluidSupportProvider$Provider$Type, arg8: $FluidSupportProvider$Provider$Type, arg9: $FluidSupportProvider$Provider$Type): $List<($FluidSupportProvider$Provider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSupportProvider$Type = ($FluidSupportProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSupportProvider_ = $FluidSupportProvider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$ExclusionZonesProvider" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $ExclusionZonesProvider<T> {

 "provide"(arg0: T): $Collection<($Rectangle)>

(arg0: T): $Collection<($Rectangle)>
}

export namespace $ExclusionZonesProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionZonesProvider$Type<T> = ($ExclusionZonesProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExclusionZonesProvider_<T> = $ExclusionZonesProvider$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/plugins/$PluginManager" {
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$REIPluginProvider, $REIPluginProvider$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPluginProvider"
import {$PluginView, $PluginView$Type} from "packages/me/shedaniel/rei/api/common/plugins/$PluginView"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIServerPlugin, $REIServerPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIServerPlugin"
import {$ParentReloadable, $ParentReloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$ParentReloadable"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $PluginManager<P extends $REIPlugin<(any)>> extends $ParentReloadable<(P)> {

 "get"<T extends $Reloadable<(any)>>(arg0: $Class$Type<(T)>): T
 "getPlugins"(): $Iterable<(P)>
 "view"(): $PluginView<(P)>
 "getPluginProviders"(): $List<($REIPluginProvider<(P)>)>
 "isReloading"(): boolean
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "getReloadables"(): $List<($Reloadable<(P)>)>
 "endReload"(stage: $ReloadStage$Type): void
 "endReload"(): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "registerReloadable"(arg0: $Reloadable$Type<(any)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: P, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: P): void
 "getStage"(): $ReloadStage
}

export namespace $PluginManager {
function getInstance(): $PluginManager<($REIPlugin<(any)>)>
function getClientInstance(): $PluginManager<($REIClientPlugin)>
function getActiveInstances(): $List<($PluginManager<(any)>)>
function areAnyReloading(): boolean
function getServerInstance(): $PluginManager<($REIServerPlugin)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PluginManager$Type<P> = ($PluginManager<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PluginManager_<P> = $PluginManager$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/config/$DisplayPanelLocation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DisplayPanelLocation extends $Enum<($DisplayPanelLocation)> {
static readonly "LEFT": $DisplayPanelLocation
static readonly "RIGHT": $DisplayPanelLocation


public "toString"(): string
public static "values"(): ($DisplayPanelLocation)[]
public static "valueOf"(name: string): $DisplayPanelLocation
public "mirror"(): $DisplayPanelLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayPanelLocation$Type = (("left") | ("right")) | ($DisplayPanelLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayPanelLocation_ = $DisplayPanelLocation$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/settings/$EntryIngredientSetting" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $EntryIngredientSetting<T> {

}

export namespace $EntryIngredientSetting {
const FOCUS_UUID: $EntryIngredientSetting<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryIngredientSetting$Type<T> = ($EntryIngredientSetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryIngredientSetting_<T> = $EntryIngredientSetting$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/base/$BasicFilteringRule$MarkDirty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BasicFilteringRule$MarkDirty {

 "markDirty"(): void

(): void
}

export namespace $BasicFilteringRule$MarkDirty {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFilteringRule$MarkDirty$Type = ($BasicFilteringRule$MarkDirty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFilteringRule$MarkDirty_ = $BasicFilteringRule$MarkDirty$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/config/addon/$ConfigAddon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ConfigAddon {

 "getDescription"(): $Component
 "getName"(): $Component
 "createScreen"(arg0: $Screen$Type): $Screen
}

export namespace $ConfigAddon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigAddon$Type = ($ConfigAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigAddon_ = $ConfigAddon$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayDecider" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DisplayPanelLocation, $DisplayPanelLocation$Type} from "packages/me/shedaniel/rei/api/client/gui/config/$DisplayPanelLocation"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$OverlayRendererProvider, $OverlayRendererProvider$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayRendererProvider"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $OverlayDecider extends $Comparable<($OverlayDecider)> {

 "compareTo"(o: $OverlayDecider$Type): integer
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: $Class$Type<(R)>): boolean
 "isInZone"(mouseX: double, mouseY: double): $InteractionResult
 "shouldScreenBeOverlaid"<R extends $Screen>(screen: R): $InteractionResult
/**
 * 
 * @deprecated
 */
 "shouldScreenBeOverlaid"(screen: $Class$Type<(any)>): $InteractionResult
 "shouldRecalculateArea"(location: $DisplayPanelLocation$Type, rectangle: $Rectangle$Type): boolean
 "getRendererProvider"(): $OverlayRendererProvider

(o: $OverlayDecider$Type): integer
}

export namespace $OverlayDecider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayDecider$Type = ($OverlayDecider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayDecider_ = $OverlayDecider$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/reason/$DisplayAdditionReason" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DisplayAdditionReason {

}

export namespace $DisplayAdditionReason {
const NONE: ($DisplayAdditionReason)[]
const RECIPE_MANAGER: $DisplayAdditionReason
function simple(): $DisplayAdditionReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayAdditionReason$Type = ($DisplayAdditionReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayAdditionReason_ = $DisplayAdditionReason$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/clean/$InputCleanHandler" {
import {$MenuInfoContext, $MenuInfoContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext"
import {$DumpHandler, $DumpHandler$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/simple/$DumpHandler"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * 
 * @deprecated
 */
export interface $InputCleanHandler<T extends $AbstractContainerMenu, D extends $Display> {

 "clean"(arg0: $MenuInfoContext$Type<(T), (any), (D)>): void

(arg0: $MenuInfoContext$Type<(T), (any), (D)>): void
}

export namespace $InputCleanHandler {
function error(translationKey: string): void
function dumpGenericsFtw<T, D, D2>(context: $MenuInfoContext$Type<(T), (any), (D2)>, dumpHandler: $DumpHandler$Type<(T), (D)>, stackToInsert: $ItemStack$Type): boolean
function returnSlotsToPlayerInventory<T>(context: $MenuInfoContext$Type<(T), (any), (any)>, dumpHandler: $DumpHandler$Type<(T), (any)>, slotAccessor: $SlotAccessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputCleanHandler$Type<T, D> = ($InputCleanHandler<(T), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputCleanHandler_<T, D> = $InputCleanHandler$Type<(T), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStack" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export interface $DraggableStack extends $DraggableComponent<($EntryStack<(any)>)> {

 "get"(): $EntryStack<(any)>
 "release"(result: $DraggedAcceptorResult$Type): void
 "getStack"(): $EntryStack<(any)>
 "drag"(): void
 "getHeight"(): integer
 "getWidth"(): integer
 "render"(graphics: $GuiGraphics$Type, bounds: $Rectangle$Type, mouseX: integer, mouseY: integer, delta: float): void
 "getIf"<A>(...typeHack: (A)[]): $Optional<($DraggableComponent<(A)>)>
 "render"(graphics: $GuiGraphics$Type, position: $Point$Type, mouseX: integer, mouseY: integer, delta: float): void
 "getOriginBounds"(mouse: $Point$Type): $Rectangle
 "ifMatches"<A>(consumer: $Predicate$Type<(A)>, ...typeHack: (A)[]): boolean
 "ifMatches"<A>(consumer: $Consumer$Type<(A)>, ...typeHack: (A)[]): boolean
}

export namespace $DraggableStack {
function from(component: $DraggableComponent$Type<($EntryStack$Type<(any)>)>): $DraggableStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStack$Type = ($DraggableStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStack_ = $DraggableStack$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/registry/$Reloadable" {
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"

export interface $Reloadable<P extends $REIPlugin<(any)>> {

 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: P, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: P): void
 "getStage"(): $ReloadStage

(stage: $ReloadStage$Type): void
}

export namespace $Reloadable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reloadable$Type<P> = ($Reloadable<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reloadable_<P> = $Reloadable$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/common/display/$DisplaySerializer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

export interface $DisplaySerializer<D extends $Display> {

 "read"(arg0: $CompoundTag$Type): D
 "save"(arg0: $CompoundTag$Type, arg1: D): $CompoundTag
 "isPersistent"(): boolean
}

export namespace $DisplaySerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySerializer$Type<D> = ($DisplaySerializer<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySerializer_<D> = $DisplaySerializer$Type<(D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget" {
import {$AbstractContainerEventHandler, $AbstractContainerEventHandler$Type} from "packages/me/shedaniel/rei/api/client/gui/$AbstractContainerEventHandler"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$CrashReport, $CrashReport$Type} from "packages/net/minecraft/$CrashReport"
import {$Renderer, $Renderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$Renderer"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$CloseableScissors, $CloseableScissors$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$CloseableScissors"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export class $Widget extends $AbstractContainerEventHandler implements $Renderable, $Renderer {

constructor()

public "getZRenderingPriority"(): double
public static "translateMouse"(pose: $Matrix4f$Type): $Point
public static "translateMouse"(x: double, y: double, z: double): $Point
public static "translateMouse"(poses: $PoseStack$Type): $Point
public "containsMouse"(mouseX: integer, mouseY: integer): boolean
public "containsMouse"(mouseX: double, mouseY: double): boolean
public "containsMouse"(point: $Point$Type): boolean
public static "pushMouse"(mouse: $Point$Type): $Point
public static "scissor"(graphics: $GuiGraphics$Type, bounds: $Rectangle$Type): $CloseableScissors
public static "scissor"(matrix: $Matrix4f$Type, bounds: $Rectangle$Type): $CloseableScissors
public static "popMouse"(): $Point
public static "mouse"(): $Point
/**
 * 
 * @deprecated
 */
public "render"(graphics: $GuiGraphics$Type, bounds: $Rectangle$Type, mouseX: integer, mouseY: integer, delta: float): void
public "isMouseOver"(mouseX: double, mouseY: double): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "fillCrashReport"(report: $CrashReport$Type, category: $CrashReportCategory$Type): void
public "getTooltip"(context: $TooltipContext$Type): $Tooltip
get "zRenderingPriority"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType$Section" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FavoriteEntry, $FavoriteEntry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntry"

export interface $FavoriteEntryType$Section {

 "add"(...entries: ($FavoriteEntry$Type)[]): void
 "add"(arg0: boolean, ...arg1: ($FavoriteEntry$Type)[]): void
 "getEntries"(): $List<($FavoriteEntry)>
 "getText"(): $Component
 "getDefaultEntries"(): $List<($FavoriteEntry)>
}

export namespace $FavoriteEntryType$Section {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FavoriteEntryType$Section$Type = ($FavoriteEntryType$Section);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FavoriteEntryType$Section_ = $FavoriteEntryType$Section$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DraggedAcceptorResult extends $Enum<($DraggedAcceptorResult)> {
static readonly "CONSUMED": $DraggedAcceptorResult
static readonly "ACCEPTED": $DraggedAcceptorResult
static readonly "PASS": $DraggedAcceptorResult


public static "values"(): ($DraggedAcceptorResult)[]
public static "valueOf"(name: string): $DraggedAcceptorResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggedAcceptorResult$Type = (("consumed") | ("pass") | ("accepted")) | ($DraggedAcceptorResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggedAcceptorResult_ = $DraggedAcceptorResult$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/display/$DisplayMerger" {
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

export interface $DisplayMerger<T extends $Display> {

 "hashOf"(arg0: T): integer
 "canMerge"(arg0: T, arg1: T): boolean
}

export namespace $DisplayMerger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayMerger$Type<T> = ($DisplayMerger<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayMerger_<T> = $DisplayMerger$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$SimpleClickArea" {
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$ClickArea, $ClickArea$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ClickArea"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $SimpleClickArea<T extends $Screen> {

 "toClickArea"(categories: $Supplier$Type<(($CategoryIdentifier$Type<(any)>)[])>): $ClickArea<(T)>
 "provide"(arg0: T): $Rectangle

(categories: $Supplier$Type<(($CategoryIdentifier$Type<(any)>)[])>): $ClickArea<(T)>
}

export namespace $SimpleClickArea {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleClickArea$Type<T> = ($SimpleClickArea<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleClickArea_<T> = $SimpleClickArea$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient$Builder" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntryIngredient, $EntryIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient"

export interface $EntryIngredient$Builder {

 "add"(arg0: $EntryStack$Type<(any)>): $EntryIngredient$Builder
 "add"(...arg0: ($EntryStack$Type<(any)>)[]): $EntryIngredient$Builder
 "addAll"(arg0: $Iterable$Type<(any)>): $EntryIngredient$Builder
 "build"(): $EntryIngredient
}

export namespace $EntryIngredient$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryIngredient$Builder$Type = ($EntryIngredient$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryIngredient$Builder_ = $EntryIngredient$Builder$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandlerRenderer" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $TransferHandlerRenderer {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: $List$Type<($Widget$Type)>, arg5: $Rectangle$Type, arg6: $Display$Type): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: $List$Type<($Widget$Type)>, arg5: $Rectangle$Type, arg6: $Display$Type): void
}

export namespace $TransferHandlerRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandlerRenderer$Type = ($TransferHandlerRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandlerRenderer_ = $TransferHandlerRenderer$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/reason/$DisplayAdditionReasons" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DisplayAdditionReason, $DisplayAdditionReason$Type} from "packages/me/shedaniel/rei/api/client/registry/display/reason/$DisplayAdditionReason"

export interface $DisplayAdditionReasons {

 "get"<T extends $DisplayAdditionReason>(arg0: $Class$Type<(any)>): T
 "get"<T extends $DisplayAdditionReason>(arg0: T): T
 "has"<T extends $DisplayAdditionReason>(arg0: T): boolean
 "has"<T extends $DisplayAdditionReason>(arg0: $Class$Type<(any)>): boolean
}

export namespace $DisplayAdditionReasons {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayAdditionReasons$Type = ($DisplayAdditionReasons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayAdditionReasons_ = $DisplayAdditionReasons$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/category/extension/$CategoryExtensionProvider" {
import {$DisplayCategoryView, $DisplayCategoryView$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategoryView"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"

export interface $CategoryExtensionProvider<T extends $Display> {

 "provide"(arg0: T, arg1: $DisplayCategory$Type<(T)>, arg2: $DisplayCategoryView$Type<(T)>): $DisplayCategoryView<(T)>

(arg0: T, arg1: $DisplayCategory$Type<(T)>, arg2: $DisplayCategoryView$Type<(T)>): $DisplayCategoryView<(T)>
}

export namespace $CategoryExtensionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryExtensionProvider$Type<T> = ($CategoryExtensionProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryExtensionProvider_<T> = $CategoryExtensionProvider$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ComparisonContext extends $Enum<($ComparisonContext)> {
static readonly "FUZZY": $ComparisonContext
static readonly "EXACT": $ComparisonContext


public static "values"(): ($ComparisonContext)[]
public static "valueOf"(name: string): $ComparisonContext
public "isExact"(): boolean
public "isFuzzy"(): boolean
get "exact"(): boolean
get "fuzzy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparisonContext$Type = (("exact") | ("fuzzy")) | ($ComparisonContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComparisonContext_ = $ComparisonContext$Type;
}}
declare module "packages/me/shedaniel/rei/impl/display/$DisplaySpec" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $DisplaySpec {

 "provideInternalDisplay"(): $Display
 "provideInternalDisplayIds"(): $Collection<($ResourceLocation)>
}

export namespace $DisplaySpec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySpec$Type = ($DisplaySpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySpec_ = $DisplaySpec$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfo" {
import {$MenuSerializationContext, $MenuSerializationContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$InputCleanHandler, $InputCleanHandler$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/clean/$InputCleanHandler"
import {$MenuInfoContext, $MenuInfoContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext"
import {$InputIngredient, $InputIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$InputIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor"
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$RecipeFinderPopulator, $RecipeFinderPopulator$Type} from "packages/me/shedaniel/rei/api/common/transfer/$RecipeFinderPopulator"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"

/**
 * 
 * @deprecated
 */
export interface $MenuInfo<T extends $AbstractContainerMenu, D extends $Display> {

 "validate"(context: $MenuInfoContext$Type<(T), (any), (D)>): void
 "save"(context: $MenuSerializationContext$Type<(T), (any), (D)>, display: D): $CompoundTag
/**
 * 
 * @deprecated
 */
 "getInputs"(context: $MenuInfoContext$Type<(T), (any), (D)>, fill: boolean): $List<($List<($ItemStack)>)>
 "markDirty"(context: $MenuInfoContext$Type<(T), (any), (D)>): void
 "getInputCleanHandler"(): $InputCleanHandler<(T), (D)>
 "getDisplay"(): D
 "getInventorySlots"(arg0: $MenuInfoContext$Type<(T), (any), (D)>): $Iterable<($SlotAccessor)>
 "getInputSlots"(arg0: $MenuInfoContext$Type<(T), (any), (D)>): $Iterable<($SlotAccessor)>
 "renderMissingInput"(context: $MenuInfoContext$Type<(T), (any), (D)>, inputs: $List$Type<($InputIngredient$Type<($ItemStack$Type)>)>, missing: $List$Type<($InputIngredient$Type<($ItemStack$Type)>)>, missingIndices: $IntSet$Type, graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, delta: float, widgets: $List$Type<($Widget$Type)>, bounds: $Rectangle$Type): void
/**
 * 
 * @deprecated
 */
 "renderMissingInput"(context: $MenuInfoContext$Type<(T), (any), (D)>, inputs: $List$Type<($List$Type<($ItemStack$Type)>)>, missingIndices: $IntList$Type, graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, delta: float, widgets: $List$Type<($Widget$Type)>, bounds: $Rectangle$Type): void
 "getInputsIndexed"(context: $MenuInfoContext$Type<(T), (any), (D)>, fill: boolean): $List<($InputIngredient<($ItemStack)>)>
 "getRecipeFinderPopulator"(): $RecipeFinderPopulator<(T), (D)>
}

export namespace $MenuInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuInfo$Type<T, D> = ($MenuInfo<(T), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuInfo_<T, D> = $MenuInfo$Type<(T), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/type/$EntryType" {
import {$EntryDefinition, $EntryDefinition$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Identifiable, $Identifiable$Type} from "packages/me/shedaniel/rei/api/common/util/$Identifiable"

export interface $EntryType<T> extends $Identifiable {

 "getIdentifier"(): $ResourceLocation
 "cast"<O>(): $EntryType<(O)>
 "getId"(): $ResourceLocation
 "getDefinition"(): $EntryDefinition<(T)>
}

export namespace $EntryType {
function deferred<T>(id: $ResourceLocation$Type): $EntryType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryType$Type<T> = ($EntryType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryType_<T> = $EntryType$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/registry/$RecipeManagerContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $RecipeManagerContext<P extends $REIPlugin<(any)>> extends $Reloadable<(P)> {

 "getAllSortedRecipes"(): $List<($Recipe<(any)>)>
 "byId"(tag: $CompoundTag$Type, key: string): $Recipe<(any)>
 "byId"(location: $ResourceLocation$Type): $Recipe<(any)>
 "getRecipeManager"(): $RecipeManager
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: P, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: P): void
 "getStage"(): $ReloadStage
}

export namespace $RecipeManagerContext {
function getInstance(): $RecipeManagerContext<($REIPlugin<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerContext$Type<P> = ($RecipeManagerContext<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerContext_<P> = $RecipeManagerContext$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/common/display/$DisplaySerializerRegistry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$DisplaySerializer, $DisplaySerializer$Type} from "packages/me/shedaniel/rei/api/common/display/$DisplaySerializer"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

export interface $DisplaySerializerRegistry extends $Reloadable<($REIPlugin<(any)>)> {

 "register"<D extends $Display>(arg0: $CategoryIdentifier$Type<(any)>, arg1: $DisplaySerializer$Type<(D)>): void
 "read"<D extends $Display>(arg0: $CategoryIdentifier$Type<(any)>, arg1: $CompoundTag$Type): D
 "save"<D extends $Display>(arg0: D, arg1: $CompoundTag$Type): $CompoundTag
 "registerNotSerializable"<D extends $Display>(arg0: $CategoryIdentifier$Type<(D)>): void
 "hasSerializer"<D extends $Display>(arg0: $CategoryIdentifier$Type<(D)>): boolean
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $DisplaySerializerRegistry {
function getInstance(): $DisplaySerializerRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySerializerRegistry$Type = ($DisplaySerializerRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySerializerRegistry_ = $DisplaySerializerRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier" {
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Identifiable, $Identifiable$Type} from "packages/me/shedaniel/rei/api/common/util/$Identifiable"

export interface $CategoryIdentifier<D extends $Display> extends $Identifiable {

 "cast"<O extends $Display>(): $CategoryIdentifier<(O)>
 "getPath"(): string
 "getNamespace"(): string
 "getIdentifier"(): $ResourceLocation

(): $CategoryIdentifier<(O)>
}

export namespace $CategoryIdentifier {
function of<D>(str: string): $CategoryIdentifier<(D)>
function of<D>(identifier: $ResourceLocation$Type): $CategoryIdentifier<(D)>
function of<D>(namespace: string, path: string): $CategoryIdentifier<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryIdentifier$Type<D> = ($CategoryIdentifier<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryIdentifier_<D> = $CategoryIdentifier$Type<(D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/$Renderer" {
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CrashReport, $CrashReport$Type} from "packages/net/minecraft/$CrashReport"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $Renderer {

 "fillCrashReport"(report: $CrashReport$Type, category: $CrashReportCategory$Type): void
 "render"(arg0: $GuiGraphics$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: float): void
 "getTooltip"(context: $TooltipContext$Type): $Tooltip

(report: $CrashReport$Type, category: $CrashReportCategory$Type): void
}

export namespace $Renderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderer$Type = ($Renderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Renderer_ = $Renderer$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/base/$BasicFilteringRule" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FilteringResult, $FilteringResult$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResult"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$BasicFilteringRule$MarkDirty, $BasicFilteringRule$MarkDirty$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/base/$BasicFilteringRule$MarkDirty"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$FilteringContext, $FilteringContext$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringContext"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$FilteringResultFactory, $FilteringResultFactory$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResultFactory"
import {$FilteringRuleType, $FilteringRuleType$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRuleType"
import {$FilteringRule, $FilteringRule$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringRule"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export interface $BasicFilteringRule<Cache> extends $Reloadable<($REIClientPlugin)>, $FilteringRule<(Cache)>, $FilteringResult {

 "hide"(arg0: $Supplier$Type<($Collection$Type<($EntryStack$Type<(any)>)>)>): $BasicFilteringRule$MarkDirty
 "show"(arg0: $Supplier$Type<($Collection$Type<($EntryStack$Type<(any)>)>)>): $BasicFilteringRule$MarkDirty
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
 "getType"(): $FilteringRuleType<(any)>
 "processFilteredStacks"(arg0: $FilteringContext$Type, arg1: $FilteringResultFactory$Type, arg2: Cache, arg3: boolean): $FilteringResult
 "markDirty"(stacks: $Collection$Type<($EntryStack$Type<(any)>)>, hashes: $LongCollection$Type): void
 "prepareCache"(async: boolean): Cache
 "isReloading"(): boolean
 "hide"(arg0: $EntryStack$Type<(any)>): $FilteringResult
 "hide"(arg0: $Collection$Type<(any)>): $FilteringResult
 "show"(arg0: $Collection$Type<(any)>): $FilteringResult
 "show"(arg0: $EntryStack$Type<(any)>): $FilteringResult
}

export namespace $BasicFilteringRule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFilteringRule$Type<Cache> = ($BasicFilteringRule<(Cache)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFilteringRule_<Cache> = $BasicFilteringRule$Type<(Cache)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProviderWidget" {
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DraggableComponentProvider, $DraggableComponentProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentProvider"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableComponentProviderWidget<A> {

 "getHovered"(arg0: $DraggingContext$Type<($Screen$Type)>, arg1: double, arg2: double): $DraggableComponent<(A)>

(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableComponentProviderWidget$Type<(A)>)>)>): $DraggableComponentProviderWidget<(A)>
}

export namespace $DraggableComponentProviderWidget {
function from<A>(providers: $Function$Type<($DraggingContext$Type<($Screen$Type)>), ($Iterable$Type<($DraggableComponentProviderWidget$Type<(A)>)>)>): $DraggableComponentProviderWidget<(A)>
function toProvider<A>(widget: $DraggableComponentProviderWidget$Type<(A)>, priority: double): $DraggableComponentProvider<($Screen), (A)>
function toProvider<A>(widget: $DraggableComponentProviderWidget$Type<(A)>): $DraggableComponentProvider<($Screen), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableComponentProviderWidget$Type<A> = ($DraggableComponentProviderWidget<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableComponentProviderWidget_<A> = $DraggableComponentProviderWidget$Type<(A)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TransferHandler$Result, $TransferHandler$Result$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Result"
import {$TransferHandler$Context, $TransferHandler$Context$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$Context"
import {$TransferHandler$ApplicabilityResult, $TransferHandler$ApplicabilityResult$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler$ApplicabilityResult"

export interface $TransferHandler extends $Comparable<($TransferHandler)> {

 "compareTo"(o: $TransferHandler$Type): integer
 "getPriority"(): double
 "handle"(arg0: $TransferHandler$Context$Type): $TransferHandler$Result
 "checkApplicable"(context: $TransferHandler$Context$Type): $TransferHandler$ApplicabilityResult

(o: $TransferHandler$Type): integer
}

export namespace $TransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandler$Type = ($TransferHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandler_ = $TransferHandler$Type;
}}
declare module "packages/me/shedaniel/math/$Rectangle" {
import {$FloatingPoint, $FloatingPoint$Type} from "packages/me/shedaniel/math/$FloatingPoint"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Dimension, $Dimension$Type} from "packages/me/shedaniel/math/$Dimension"
import {$FloatingDimension, $FloatingDimension$Type} from "packages/me/shedaniel/math/$FloatingDimension"
import {$FloatingRectangle, $FloatingRectangle$Type} from "packages/me/shedaniel/math/$FloatingRectangle"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export class $Rectangle implements $Cloneable {
 "x": integer
 "y": integer
 "width": integer
 "height": integer

constructor(arg0: $FloatingPoint$Type)
constructor(arg0: $Dimension$Type)
constructor(arg0: $Point$Type)
constructor(arg0: $FloatingDimension$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: $FloatingRectangle$Type)
constructor()
constructor(arg0: $Rectangle$Type)
constructor(arg0: $FloatingPoint$Type, arg1: $FloatingDimension$Type)
constructor(arg0: $FloatingPoint$Type, arg1: $Dimension$Type)
constructor(arg0: $Point$Type, arg1: $FloatingDimension$Type)
constructor(arg0: $Point$Type, arg1: $Dimension$Type)

public "intersects"(arg0: $Rectangle$Type): boolean
public "getY"(): integer
public "add"(arg0: $Rectangle$Type): void
public "add"(arg0: $Point$Type): void
public "add"(arg0: $FloatingPoint$Type): void
public "add"(arg0: integer, arg1: integer): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): $Rectangle
public "isEmpty"(): boolean
public "contains"(arg0: $Rectangle$Type): boolean
public "contains"(arg0: $FloatingRectangle$Type): boolean
public "contains"(arg0: $FloatingPoint$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "contains"(arg0: $Point$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: integer, arg1: integer): void
public "resize"(arg0: integer, arg1: integer): void
public "move"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $FloatingDimension$Type): void
public "union"(arg0: $Rectangle$Type): $Rectangle
public "setBounds"(arg0: $Rectangle$Type): void
public "setBounds"(arg0: $FloatingRectangle$Type): void
public "setBounds"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getFloatingBounds"(): $FloatingRectangle
public "getFloatingSize"(): $FloatingDimension
public "getHeight"(): integer
public "getWidth"(): integer
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "inside"(arg0: integer, arg1: integer): boolean
public "intersection"(arg0: $Rectangle$Type): $Rectangle
public "getMinX"(): integer
public "getMaxY"(): integer
public "getMinY"(): integer
public "getMaxX"(): integer
public "translate"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $FloatingPoint$Type): void
public "getCenterX"(): integer
public "getCenterY"(): integer
public "getFloatingLocation"(): $FloatingPoint
public "getX"(): integer
get "y"(): integer
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
set "size"(value: $FloatingDimension$Type)
set "bounds"(value: $Rectangle$Type)
set "bounds"(value: $FloatingRectangle$Type)
get "floatingBounds"(): $FloatingRectangle
get "floatingSize"(): $FloatingDimension
get "height"(): integer
get "width"(): integer
get "minX"(): integer
get "maxY"(): integer
get "minY"(): integer
get "maxX"(): integer
set "location"(value: $Point$Type)
set "location"(value: $FloatingPoint$Type)
get "centerX"(): integer
get "centerY"(): integer
get "floatingLocation"(): $FloatingPoint
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Type = ($Rectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle_ = $Rectangle$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SlotAccessor {

 "allowModification"(player: $Player$Type): boolean
 "canPlace"(stack: $ItemStack$Type): boolean
 "getItemStack"(): $ItemStack
 "takeStack"(arg0: integer): $ItemStack
 "setItemStack"(arg0: $ItemStack$Type): void
}

export namespace $SlotAccessor {
function fromContainer(container: $Container$Type, index: integer): $SlotAccessor
function fromSlot(slot: $Slot$Type): $SlotAccessor
function fromPlayerInventory(player: $Player$Type, index: integer): $SlotAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableStackVisitor$BoundsProvider" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$DraggableBoundsProvider, $DraggableBoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $DraggableStackVisitor$BoundsProvider extends $DraggableBoundsProvider {

 "bounds"(): $VoxelShape

(providers: $Iterable$Type<($DraggableStackVisitor$BoundsProvider$Type)>): $DraggableStackVisitor$BoundsProvider
}

export namespace $DraggableStackVisitor$BoundsProvider {
function concat(providers: $Iterable$Type<($DraggableStackVisitor$BoundsProvider$Type)>): $DraggableStackVisitor$BoundsProvider
function empty(): $DraggableStackVisitor$BoundsProvider
function ofRectangle(bounds: $Rectangle$Type): $DraggableStackVisitor$BoundsProvider
function ofRectangles(bounds: $Iterable$Type<($Rectangle$Type)>): $DraggableStackVisitor$BoundsProvider
function ofShape(shape: $VoxelShape$Type): $DraggableStackVisitor$BoundsProvider
function fromRectangle(bounds: $Rectangle$Type): $VoxelShape
function ofShapes(shapes: $Iterable$Type<($VoxelShape$Type)>): $DraggableStackVisitor$BoundsProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableStackVisitor$BoundsProvider$Type = ($DraggableStackVisitor$BoundsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableStackVisitor$BoundsProvider_ = $DraggableStackVisitor$BoundsProvider$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/comparison/$ItemComparatorRegistry" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$EntryComparator, $EntryComparator$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparator"
import {$EntryComparatorRegistry, $EntryComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$EntryComparatorRegistry"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$ComparisonContext, $ComparisonContext$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemComparatorRegistry extends $EntryComparatorRegistry<($ItemStack), ($Item)> {

 "registerNbt"(item: $Item$Type): void
 "registerNbt"(...items: ($Item$Type)[]): void
 "register"(arg0: $EntryComparator$Type<($ItemStack$Type)>, arg1: $Item$Type): void
 "register"(comparator: $EntryComparator$Type<($ItemStack$Type)>, ...entries: ($Item$Type)[]): void
 "containsComparator"(arg0: $Item$Type): boolean
 "comparatorSize"(): integer
 "registerGlobal"(arg0: $EntryComparator$Type<($ItemStack$Type)>): void
 "hashOf"(arg0: $ComparisonContext$Type, arg1: $ItemStack$Type): long
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>, plugin: $REIPlugin$Type<(any)>): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIPlugin$Type<(any)>)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIPlugin$Type<(any)>): void
 "getStage"(): $ReloadStage
}

export namespace $ItemComparatorRegistry {
function getInstance(): $ItemComparatorRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemComparatorRegistry$Type = ($ItemComparatorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemComparatorRegistry_ = $ItemComparatorRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandlerRegistry" {
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TransferHandler, $TransferHandler$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandler"

export interface $TransferHandlerRegistry extends $Reloadable<($REIClientPlugin)>, $Iterable<($TransferHandler)> {

 "register"(arg0: $TransferHandler$Type): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
 "iterator"(): $Iterator<($TransferHandler)>
 "spliterator"(): $Spliterator<($TransferHandler)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $TransferHandlerRegistry {
function getInstance(): $TransferHandlerRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferHandlerRegistry$Type = ($TransferHandlerRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferHandlerRegistry_ = $TransferHandlerRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/subsets/$SubsetsRegistry" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"

/**
 * 
 * @deprecated
 */
export interface $SubsetsRegistry extends $Reloadable<($REIClientPlugin)> {

 "getEntryPaths"(arg0: $EntryStack$Type<(any)>): $List<(string)>
 "registerPathEntry"(arg0: string, arg1: $EntryStack$Type<(any)>): void
 "getPathEntries"(arg0: string): $Set<($EntryStack<(any)>)>
 "getPaths"(): $Set<(string)>
 "getOrCreatePathEntries"(arg0: string): $Set<($EntryStack<(any)>)>
 "registerPathEntries"(arg0: string, arg1: $Collection$Type<(any)>): void
 "registerPathEntries"(path: string, ...stacks: ($EntryStack$Type<(any)>)[]): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $SubsetsRegistry {
function getInstance(): $SubsetsRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubsetsRegistry$Type = ($SubsetsRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubsetsRegistry_ = $SubsetsRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/search/method/$InputMethod$Locale" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $InputMethod$Locale extends $Record {

constructor(code: string, name: $Component$Type)

public "name"(): $Component
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethod$Locale$Type = ($InputMethod$Locale);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethod$Locale_ = $InputMethod$Locale$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$EntrySerializer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"

export interface $EntrySerializer<T> {

 "read"(arg0: $CompoundTag$Type): T
 "save"(arg0: $EntryStack$Type<(T)>, arg1: T): $CompoundTag
 "supportSaving"(): boolean
 "supportReading"(): boolean
}

export namespace $EntrySerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntrySerializer$Type<T> = ($EntrySerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntrySerializer_<T> = $EntrySerializer$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntryIngredientSetting, $EntryIngredientSetting$Type} from "packages/me/shedaniel/rei/api/common/entry/settings/$EntryIngredientSetting"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$EntryIngredient$Builder, $EntryIngredient$Builder$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient$Builder"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $EntryIngredient extends $List<($EntryStack<(any)>)> {

/**
 * 
 * @deprecated
 */
 "cast"<T>(): $List<($EntryStack<(T)>)>
 "map"(arg0: $UnaryOperator$Type<($EntryStack$Type<(any)>)>): $EntryIngredient
 "filter"(arg0: $Predicate$Type<($EntryStack$Type<(any)>)>): $EntryIngredient
/**
 * 
 * @deprecated
 */
 "save"(): $ListTag
 "saveIngredient"(): $ListTag
 "castAsList"<T>(): $List<($EntryStack<(T)>)>
 "setting"<T>(arg0: $EntryIngredientSetting$Type<(T)>, arg1: T): $EntryIngredient
 "getSetting"<T>(arg0: $EntryIngredientSetting$Type<(T)>): T
 "add"(arg0: integer, arg1: $EntryStack$Type<(any)>): void
 "add"(arg0: $EntryStack$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): $EntryStack<(any)>
 "get"(arg0: integer): $EntryStack<(any)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "isEmpty"(): boolean
 "lastIndexOf"(arg0: any): integer
 "contains"(arg0: any): boolean
 "replaceAll"(arg0: $UnaryOperator$Type<($EntryStack$Type<(any)>)>): void
 "size"(): integer
 "subList"(arg0: integer, arg1: integer): $List<($EntryStack<(any)>)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<($EntryStack<(any)>)>
 "spliterator"(): $Spliterator<($EntryStack<(any)>)>
 "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "set"(arg0: integer, arg1: $EntryStack$Type<(any)>): $EntryStack<(any)>
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "listIterator"(arg0: integer): $ListIterator<($EntryStack<(any)>)>
 "listIterator"(): $ListIterator<($EntryStack<(any)>)>
 "sort"(arg0: $Comparator$Type<(any)>): void
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<($EntryStack<(any)>)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<($EntryStack<(any)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $EntryIngredient {
function of<T>(stacks: $Iterable$Type<(any)>): $EntryIngredient
function of<T>(...stacks: ($EntryStack$Type<(T)>)[]): $EntryIngredient
function of<T>(stack: $EntryStack$Type<(T)>): $EntryIngredient
function empty(): $EntryIngredient
function read(tag: $ListTag$Type): $EntryIngredient
function collector(): $Collector<($EntryStack<(any)>), (any), ($EntryIngredient)>
function builder(): $EntryIngredient$Builder
function builder(initialCapacity: integer): $EntryIngredient$Builder
function unifyFocuses(...ingredients: ($EntryIngredient$Type)[]): void
function copyOf<E>(arg0: $Collection$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>, arg5: $EntryStack$Type<(any)>, arg6: $EntryStack$Type<(any)>, arg7: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>, arg5: $EntryStack$Type<(any)>, arg6: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>, arg5: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>, arg5: $EntryStack$Type<(any)>, arg6: $EntryStack$Type<(any)>, arg7: $EntryStack$Type<(any)>, arg8: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
function of<E>(...arg0: ($EntryStack$Type<(any)>)[]): $List<($EntryStack<(any)>)>
function of<E>(arg0: $EntryStack$Type<(any)>, arg1: $EntryStack$Type<(any)>, arg2: $EntryStack$Type<(any)>, arg3: $EntryStack$Type<(any)>, arg4: $EntryStack$Type<(any)>, arg5: $EntryStack$Type<(any)>, arg6: $EntryStack$Type<(any)>, arg7: $EntryStack$Type<(any)>, arg8: $EntryStack$Type<(any)>, arg9: $EntryStack$Type<(any)>): $List<($EntryStack<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryIngredient$Type = ($EntryIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryIngredient_ = $EntryIngredient$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResultFactory" {
import {$FilteringResult, $FilteringResult$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringResult"

export interface $FilteringResultFactory {

 "create"(): $FilteringResult

(): $FilteringResult
}

export namespace $FilteringResultFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringResultFactory$Type = ($FilteringResultFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringResultFactory_ = $FilteringResultFactory$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategoryView" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Widget"
import {$DisplayRenderer, $DisplayRenderer$Type} from "packages/me/shedaniel/rei/api/client/gui/$DisplayRenderer"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $DisplayCategoryView<T extends $Display> {

 "getDisplayRenderer"(arg0: T): $DisplayRenderer
 "setupDisplay"(arg0: T, arg1: $Rectangle$Type): $List<($Widget)>
}

export namespace $DisplayCategoryView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCategoryView$Type<T> = ($DisplayCategoryView<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCategoryView_<T> = $DisplayCategoryView$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/transfer/info/$MenuInfoContext" {
import {$MenuSerializationContext, $MenuSerializationContext$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/$MenuSerializationContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

/**
 * 
 * @deprecated
 */
export interface $MenuInfoContext<T extends $AbstractContainerMenu, P extends $Player, D extends $Display> extends $MenuSerializationContext<(T), (P), (D)> {

 "getDisplay"(): D
 "getCategoryIdentifier"(): $CategoryIdentifier<(D)>
 "getMenu"(): T
 "withDisplay"(display: D): $MenuInfoContext<(T), (P), (D)>
 "getPlayerEntity"(): P
}

export namespace $MenuInfoContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuInfoContext$Type<T, P, D> = ($MenuInfoContext<(T), (P), (D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuInfoContext_<T, P, D> = $MenuInfoContext$Type<(T), (P), (D)>;
}}
declare module "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin" {
import {$CollapsibleEntryRegistry, $CollapsibleEntryRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/entry/$CollapsibleEntryRegistry"
import {$InputMethodRegistry, $InputMethodRegistry$Type} from "packages/me/shedaniel/rei/api/client/search/method/$InputMethodRegistry"
import {$FavoriteEntryType$Registry, $FavoriteEntryType$Registry$Type} from "packages/me/shedaniel/rei/api/client/favorites/$FavoriteEntryType$Registry"
import {$ScreenRegistry, $ScreenRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ScreenRegistry"
import {$EntrySettingsAdapterRegistry, $EntrySettingsAdapterRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapterRegistry"
import {$TransferHandlerRegistry, $TransferHandlerRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/transfer/$TransferHandlerRegistry"
import {$DisplayRegistry, $DisplayRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayRegistry"
import {$FluidSupportProvider, $FluidSupportProvider$Type} from "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider"
import {$SlotAccessorRegistry, $SlotAccessorRegistry$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry"
import {$FluidComparatorRegistry, $FluidComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$FluidComparatorRegistry"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$PluginManager, $PluginManager$Type} from "packages/me/shedaniel/rei/api/common/plugins/$PluginManager"
import {$EntryRendererRegistry, $EntryRendererRegistry$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererRegistry"
import {$SubsetsRegistry, $SubsetsRegistry$Type} from "packages/me/shedaniel/rei/api/client/subsets/$SubsetsRegistry"
import {$ExclusionZones, $ExclusionZones$Type} from "packages/me/shedaniel/rei/api/client/registry/screen/$ExclusionZones"
import {$BasicFilteringRule, $BasicFilteringRule$Type} from "packages/me/shedaniel/rei/api/client/entry/filtering/base/$BasicFilteringRule"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntryTypeRegistry, $EntryTypeRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeRegistry"
import {$ItemComparatorRegistry, $ItemComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ItemComparatorRegistry"
import {$CategoryRegistry, $CategoryRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/category/$CategoryRegistry"
import {$EntryRegistry, $EntryRegistry$Type} from "packages/me/shedaniel/rei/api/client/registry/entry/$EntryRegistry"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$ConfigAddonRegistry, $ConfigAddonRegistry$Type} from "packages/me/shedaniel/rei/api/client/config/addon/$ConfigAddonRegistry"
import {$DisplaySerializerRegistry, $DisplaySerializerRegistry$Type} from "packages/me/shedaniel/rei/api/common/display/$DisplaySerializerRegistry"

export interface $REIClientPlugin extends $REIPlugin<($REIClientPlugin)> {

 "registerFavorites"(registry: $FavoriteEntryType$Registry$Type): void
 "registerCategories"(registry: $CategoryRegistry$Type): void
 "registerScreens"(registry: $ScreenRegistry$Type): void
/**
 * 
 * @deprecated
 */
 "registerSubsets"(registry: $SubsetsRegistry$Type): void
 "registerEntries"(registry: $EntryRegistry$Type): void
 "registerDisplays"(registry: $DisplayRegistry$Type): void
 "registerExclusionZones"(zones: $ExclusionZones$Type): void
 "registerBasicEntryFiltering"(rule: $BasicFilteringRule$Type<(any)>): void
 "registerCollapsibleEntries"(registry: $CollapsibleEntryRegistry$Type): void
 "registerTransferHandlers"(registry: $TransferHandlerRegistry$Type): void
 "registerConfigAddons"(registry: $ConfigAddonRegistry$Type): void
 "registerEntryRenderers"(registry: $EntryRendererRegistry$Type): void
 "registerInputMethods"(registry: $InputMethodRegistry$Type): void
 "getPluginProviderClass"(): $Class<($REIClientPlugin)>
 "compareTo"(o: $REIPlugin$Type<(any)>): integer
 "getPriority"(): double
 "registerEntryTypes"(registry: $EntryTypeRegistry$Type): void
 "preStage"(manager: $PluginManager$Type<($REIClientPlugin$Type)>, stage: $ReloadStage$Type): void
 "postStage"(manager: $PluginManager$Type<($REIClientPlugin$Type)>, stage: $ReloadStage$Type): void
 "provide"(): $Collection<($REIClientPlugin)>
 "registerFluidComparators"(registry: $FluidComparatorRegistry$Type): void
 "registerFluidSupport"(support: $FluidSupportProvider$Type): void
 "registerSlotAccessors"(registry: $SlotAccessorRegistry$Type): void
 "shouldBeForcefullyDoneOnMainThread"(reloadable: $Reloadable$Type<(any)>): boolean
 "registerItemComparators"(registry: $ItemComparatorRegistry$Type): void
 "registerDisplaySerializer"(registry: $DisplaySerializerRegistry$Type): void
 "registerEntrySettingsAdapters"(registry: $EntrySettingsAdapterRegistry$Type): void
 "getPluginProviderName"(): string
}

export namespace $REIClientPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $REIClientPlugin$Type = ($REIClientPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $REIClientPlugin_ = $REIClientPlugin$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/category/$CategoryRegistry" {
import {$CategoryIdentifier, $CategoryIdentifier$Type} from "packages/me/shedaniel/rei/api/common/category/$CategoryIdentifier"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$CategoryVisibilityPredicate, $CategoryVisibilityPredicate$Type} from "packages/me/shedaniel/rei/api/client/registry/category/visibility/$CategoryVisibilityPredicate"
import {$ButtonArea, $ButtonArea$Type} from "packages/me/shedaniel/rei/api/client/registry/category/$ButtonArea"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$CategoryRegistry$CategoryConfiguration, $CategoryRegistry$CategoryConfiguration$Type} from "packages/me/shedaniel/rei/api/client/registry/category/$CategoryRegistry$CategoryConfiguration"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$DisplayCategory, $DisplayCategory$Type} from "packages/me/shedaniel/rei/api/client/registry/display/$DisplayCategory"
import {$EntryIngredient, $EntryIngredient$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryIngredient"

export interface $CategoryRegistry extends $Reloadable<($REIClientPlugin)>, $Iterable<($CategoryRegistry$CategoryConfiguration<(any)>)> {

 "configure"<T extends $Display>(arg0: $CategoryIdentifier$Type<(T)>, arg1: $Consumer$Type<($CategoryRegistry$CategoryConfiguration$Type<(T)>)>): void
 "tryGet"<T extends $Display>(arg0: $CategoryIdentifier$Type<(T)>): $Optional<($CategoryRegistry$CategoryConfiguration<(T)>)>
 "add"<T extends $Display>(...categories: ($DisplayCategory$Type<(any)>)[]): void
 "add"<T extends $Display>(categories: $Iterable$Type<($DisplayCategory$Type<(any)>)>): void
 "add"<T extends $Display>(arg0: $DisplayCategory$Type<(T)>, arg1: $Consumer$Type<($CategoryRegistry$CategoryConfiguration$Type<(T)>)>): void
 "add"<T extends $Display>(category: $DisplayCategory$Type<(T)>): void
 "get"<T extends $Display>(arg0: $CategoryIdentifier$Type<(T)>): $CategoryRegistry$CategoryConfiguration<(T)>
 "size"(): integer
 "stream"(): $Stream<($CategoryRegistry$CategoryConfiguration<(any)>)>
 "isCategoryVisible"(arg0: $DisplayCategory$Type<(any)>): boolean
 "setPlusButtonArea"<D extends $Display>(category: $CategoryIdentifier$Type<(D)>, area: $ButtonArea$Type): void
 "addWorkstations"<D extends $Display>(category: $CategoryIdentifier$Type<(D)>, ...stations: ($EntryIngredient$Type)[]): void
 "addWorkstations"<D extends $Display>(category: $CategoryIdentifier$Type<(D)>, ...stations: ($EntryStack$Type<(any)>)[]): void
/**
 * 
 * @deprecated
 */
 "removePlusButton"<D extends $Display>(category: $CategoryIdentifier$Type<(D)>): void
 "isCategoryInvisible"(category: $DisplayCategory$Type<(any)>): boolean
 "registerVisibilityPredicate"(arg0: $CategoryVisibilityPredicate$Type): void
 "getVisibilityPredicates"(): $List<($CategoryVisibilityPredicate)>
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
 "iterator"(): $Iterator<($CategoryRegistry$CategoryConfiguration<(any)>)>
 "spliterator"(): $Spliterator<($CategoryRegistry$CategoryConfiguration<(any)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $CategoryRegistry {
function getInstance(): $CategoryRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryRegistry$Type = ($CategoryRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryRegistry_ = $CategoryRegistry$Type;
}}
declare module "packages/me/shedaniel/math/$Point" {
import {$FloatingPoint, $FloatingPoint$Type} from "packages/me/shedaniel/math/$FloatingPoint"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Point implements $Cloneable {
 "x": integer
 "y": integer

constructor(arg0: double, arg1: double)
constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: $FloatingPoint$Type)
constructor(arg0: $Point$Type)

public "getY"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): $Point
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: double, arg1: double): void
public "getFloatingLocation"(): $FloatingPoint
public "getX"(): integer
get "y"(): integer
get "location"(): $Point
get "floatingLocation"(): $FloatingPoint
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point$Type = ($Point);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point_ = $Point$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$REIPluginProvider, $REIPluginProvider$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPluginProvider"
import {$EntrySettingsAdapterRegistry, $EntrySettingsAdapterRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/settings/$EntrySettingsAdapterRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EntryTypeRegistry, $EntryTypeRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryTypeRegistry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FluidSupportProvider, $FluidSupportProvider$Type} from "packages/me/shedaniel/rei/api/common/fluid/$FluidSupportProvider"
import {$ItemComparatorRegistry, $ItemComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ItemComparatorRegistry"
import {$SlotAccessorRegistry, $SlotAccessorRegistry$Type} from "packages/me/shedaniel/rei/api/common/transfer/info/stack/$SlotAccessorRegistry"
import {$FluidComparatorRegistry, $FluidComparatorRegistry$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$FluidComparatorRegistry"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$PluginManager, $PluginManager$Type} from "packages/me/shedaniel/rei/api/common/plugins/$PluginManager"
import {$DisplaySerializerRegistry, $DisplaySerializerRegistry$Type} from "packages/me/shedaniel/rei/api/common/display/$DisplaySerializerRegistry"

export interface $REIPlugin<P extends $REIPlugin<(any)>> extends $Comparable<($REIPlugin<(P)>)>, $REIPluginProvider<(P)> {

 "compareTo"(o: $REIPlugin$Type<(any)>): integer
 "getPriority"(): double
 "registerEntryTypes"(registry: $EntryTypeRegistry$Type): void
 "preStage"(manager: $PluginManager$Type<(P)>, stage: $ReloadStage$Type): void
 "postStage"(manager: $PluginManager$Type<(P)>, stage: $ReloadStage$Type): void
 "provide"(): $Collection<(P)>
 "registerFluidComparators"(registry: $FluidComparatorRegistry$Type): void
 "registerFluidSupport"(support: $FluidSupportProvider$Type): void
 "registerSlotAccessors"(registry: $SlotAccessorRegistry$Type): void
 "shouldBeForcefullyDoneOnMainThread"(reloadable: $Reloadable$Type<(any)>): boolean
 "registerItemComparators"(registry: $ItemComparatorRegistry$Type): void
 "registerDisplaySerializer"(registry: $DisplaySerializerRegistry$Type): void
 "registerEntrySettingsAdapters"(registry: $EntrySettingsAdapterRegistry$Type): void
 "getPluginProviderName"(): string
 "getPluginProviderClass"(): $Class<(P)>

(o: $REIPlugin$Type<(any)>): integer
}

export namespace $REIPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $REIPlugin$Type<P> = ($REIPlugin<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $REIPlugin_<P> = $REIPlugin$Type<(P)>;
}}
declare module "packages/me/shedaniel/math/$FloatingDimension" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Dimension, $Dimension$Type} from "packages/me/shedaniel/math/$Dimension"

export class $FloatingDimension implements $Cloneable {
 "width": double
 "height": double

constructor(arg0: double, arg1: double)
constructor(arg0: $FloatingDimension$Type)
constructor(arg0: $Dimension$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $FloatingDimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: $Dimension$Type): void
public "getFloatingSize"(): $FloatingDimension
public "getHeight"(): double
public "getWidth"(): double
get "size"(): $Dimension
set "size"(value: $FloatingDimension$Type)
set "size"(value: $Dimension$Type)
get "floatingSize"(): $FloatingDimension
get "height"(): double
get "width"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingDimension$Type = ($FloatingDimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingDimension_ = $FloatingDimension$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/entry/$CollapsibleEntryRegistry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"
import {$REIClientPlugin, $REIClientPlugin$Type} from "packages/me/shedaniel/rei/api/client/plugins/$REIClientPlugin"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CollapsibleEntryRegistry extends $Reloadable<($REIClientPlugin)> {

 "group"<T>(id: $ResourceLocation$Type, name: $Component$Type, type: $EntryType$Type<(T)>, predicate: $Predicate$Type<($EntryStack$Type<(T)>)>): void
 "group"<T>(id: $ResourceLocation$Type, name: $Component$Type, ...stacks: ($EntryStack$Type<(any)>)[]): void
 "group"<T>(arg0: $ResourceLocation$Type, arg1: $Component$Type, arg2: $List$Type<(any)>): void
 "group"(arg0: $ResourceLocation$Type, arg1: $Component$Type, arg2: $Predicate$Type<(any)>): void
 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>, plugin: $REIClientPlugin$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "endReload"(): void
 "endReload"(stage: $ReloadStage$Type): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<($REIClientPlugin$Type)>): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: $REIClientPlugin$Type, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: $REIClientPlugin$Type): void
 "getStage"(): $ReloadStage
}

export namespace $CollapsibleEntryRegistry {
function getInstance(): $CollapsibleEntryRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollapsibleEntryRegistry$Type = ($CollapsibleEntryRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollapsibleEntryRegistry_ = $CollapsibleEntryRegistry$Type;
}}
declare module "packages/me/shedaniel/rei/api/common/entry/type/$EntryDefinition" {
import {$EntryRenderer, $EntryRenderer$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CrashReport, $CrashReport$Type} from "packages/net/minecraft/$CrashReport"
import {$EntrySerializer, $EntrySerializer$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntrySerializer"
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$ComparisonContext, $ComparisonContext$Type} from "packages/me/shedaniel/rei/api/common/entry/comparison/$ComparisonContext"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$EntryType, $EntryType$Type} from "packages/me/shedaniel/rei/api/common/entry/type/$EntryType"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"

export interface $EntryDefinition<T> {

 "getIdentifier"(arg0: $EntryStack$Type<(T)>, arg1: T): $ResourceLocation
 "add"(o1: T, o2: T): T
 "equals"(arg0: T, arg1: T, arg2: $ComparisonContext$Type): boolean
 "cast"<O>(): $EntryDefinition<(O)>
 "hash"(arg0: $EntryStack$Type<(T)>, arg1: T, arg2: $ComparisonContext$Type): long
 "isEmpty"(arg0: $EntryStack$Type<(T)>, arg1: T): boolean
 "copy"(arg0: $EntryStack$Type<(T)>, arg1: T): T
 "getType"(): $EntryType<(T)>
 "normalize"(arg0: $EntryStack$Type<(T)>, arg1: T): T
 "wildcard"(arg0: $EntryStack$Type<(T)>, arg1: T): T
 "getRenderer"(): $EntryRenderer<(T)>
 "fillCrashReport"(report: $CrashReport$Type, category: $CrashReportCategory$Type, entry: $EntryStack$Type<(T)>): void
 "cheatsAs"(entry: $EntryStack$Type<(T)>, value: T): $ItemStack
 "getContainingNamespace"(entry: $EntryStack$Type<(T)>, value: T): string
 "acceptsNull"(): boolean
 "getSerializer"(): $EntrySerializer<(T)>
 "getTagsFor"(arg0: $EntryStack$Type<(T)>, arg1: T): $Stream<(any)>
 "asFormattedText"(entry: $EntryStack$Type<(T)>, value: T, context: $TooltipContext$Type): $Component
 "asFormattedText"(arg0: $EntryStack$Type<(T)>, arg1: T): $Component
 "getValueType"(): $Class<(T)>
}

export namespace $EntryDefinition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDefinition$Type<T> = ($EntryDefinition<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryDefinition_<T> = $EntryDefinition$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/display/$DynamicDisplayGenerator" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$ViewSearchBuilder, $ViewSearchBuilder$Type} from "packages/me/shedaniel/rei/api/client/view/$ViewSearchBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Display, $Display$Type} from "packages/me/shedaniel/rei/api/common/display/$Display"

export interface $DynamicDisplayGenerator<T extends $Display> {

 "generate"(builder: $ViewSearchBuilder$Type): $Optional<($List<(T)>)>
 "getRecipeFor"(entry: $EntryStack$Type<(any)>): $Optional<($List<(T)>)>
 "getUsageFor"(entry: $EntryStack$Type<(any)>): $Optional<($List<(T)>)>
}

export namespace $DynamicDisplayGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicDisplayGenerator$Type<T> = ($DynamicDisplayGenerator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicDisplayGenerator_<T> = $DynamicDisplayGenerator$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponentVisitor" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$DraggingContext, $DraggingContext$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggingContext"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$DraggedAcceptorResult, $DraggedAcceptorResult$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggedAcceptorResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DraggableBoundsProvider, $DraggableBoundsProvider$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/$DraggableBoundsProvider"
import {$DraggableComponent, $DraggableComponent$Type} from "packages/me/shedaniel/rei/api/client/gui/drag/component/$DraggableComponent"

export interface $DraggableComponentVisitor<T extends $Screen> extends $Comparable<($DraggableComponentVisitor<(T)>)> {

 "compareTo"(o: $DraggableComponentVisitor$Type<(T)>): integer
 "getContext"(): $DraggingContext<(T)>
 "getPriority"(): double
 "isHandingScreen"<R extends $Screen>(arg0: R): boolean
 "acceptDragged"(context: $DraggingContext$Type<(T)>, component: $DraggableComponent$Type<(any)>): $DraggedAcceptorResult
 "getDraggableAcceptingBounds"(context: $DraggingContext$Type<(T)>, component: $DraggableComponent$Type<(any)>): $Stream<($DraggableBoundsProvider)>

(o: $DraggableComponentVisitor$Type<(T)>): integer
}

export namespace $DraggableComponentVisitor {
function from<T>(visitors: $Supplier$Type<(any)>): $DraggableComponentVisitor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableComponentVisitor$Type<T> = ($DraggableComponentVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableComponentVisitor_<T> = $DraggableComponentVisitor$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/common/registry/$ParentReloadable" {
import {$Reloadable, $Reloadable$Type} from "packages/me/shedaniel/rei/api/common/registry/$Reloadable"
import {$REIPlugin, $REIPlugin$Type} from "packages/me/shedaniel/rei/api/common/plugins/$REIPlugin"
import {$ReloadStage, $ReloadStage$Type} from "packages/me/shedaniel/rei/api/common/registry/$ReloadStage"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ParentReloadable<P extends $REIPlugin<(any)>> extends $Reloadable<(P)> {

 "preStage"(stage: $ReloadStage$Type): void
 "postStage"(stage: $ReloadStage$Type): void
 "startReload"(stage: $ReloadStage$Type): void
 "startReload"(): void
 "getReloadables"(): $List<($Reloadable<(P)>)>
 "endReload"(stage: $ReloadStage$Type): void
 "endReload"(): void
 "afterReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "registerReloadable"(arg0: $Reloadable$Type<(any)>): void
 "beforeReloadable"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>): void
 "beforeReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "afterReloadablePlugin"(stage: $ReloadStage$Type, other: $Reloadable$Type<(P)>, plugin: P): void
 "isConcurrent"(): boolean
 "acceptPlugin"(plugin: P, stage: $ReloadStage$Type): void
 "acceptPlugin"(plugin: P): void
 "getStage"(): $ReloadStage
}

export namespace $ParentReloadable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentReloadable$Type<P> = ($ParentReloadable<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParentReloadable_<P> = $ParentReloadable$Type<(P)>;
}}
declare module "packages/me/shedaniel/rei/api/client/gui/$AbstractContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ContainerEventHandler, $ContainerEventHandler$Type} from "packages/net/minecraft/client/gui/components/events/$ContainerEventHandler"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export class $AbstractContainerEventHandler implements $ContainerEventHandler {

constructor()

public "setFocused"(focused: $GuiEventListener$Type): void
public "setDragging"(isDragging: boolean): void
public "isDragging"(): boolean
public "getFocused"(): $GuiEventListener
public "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "setFocused"(arg0: boolean): void
public "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "isFocused"(): boolean
public "magicalSpecialHackyFocus"(arg0: $GuiEventListener$Type): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "children"(): $List<(any)>
public "mouseMoved"(arg0: double, arg1: double): void
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
set "focused"(value: $GuiEventListener$Type)
set "dragging"(value: boolean)
get "dragging"(): boolean
get "focused"(): $GuiEventListener
get "currentFocusPath"(): $ComponentPath
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerEventHandler$Type = ($AbstractContainerEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerEventHandler_ = $AbstractContainerEventHandler$Type;
}}
declare module "packages/me/shedaniel/math/$FloatingRectangle" {
import {$FloatingPoint, $FloatingPoint$Type} from "packages/me/shedaniel/math/$FloatingPoint"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Dimension, $Dimension$Type} from "packages/me/shedaniel/math/$Dimension"
import {$FloatingDimension, $FloatingDimension$Type} from "packages/me/shedaniel/math/$FloatingDimension"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"
import {$Point, $Point$Type} from "packages/me/shedaniel/math/$Point"

export class $FloatingRectangle implements $Cloneable {
 "x": double
 "y": double
 "width": double
 "height": double

constructor(arg0: $Point$Type)
constructor(arg0: $FloatingPoint$Type)
constructor(arg0: $FloatingPoint$Type, arg1: $FloatingDimension$Type)
constructor(arg0: $Dimension$Type)
constructor(arg0: $FloatingDimension$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: integer, arg1: integer)
constructor(arg0: $Rectangle$Type)
constructor()
constructor(arg0: $FloatingRectangle$Type)
constructor(arg0: $FloatingPoint$Type, arg1: $Dimension$Type)
constructor(arg0: $Point$Type, arg1: $FloatingDimension$Type)
constructor(arg0: $Point$Type, arg1: $Dimension$Type)

public "intersects"(arg0: $FloatingRectangle$Type): boolean
public "getY"(): double
public "add"(arg0: $FloatingPoint$Type): void
public "add"(arg0: $Point$Type): void
public "add"(arg0: double, arg1: double): void
public "add"(arg0: $FloatingRectangle$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): $FloatingRectangle
public "isEmpty"(): boolean
public "contains"(arg0: $Rectangle$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: $Point$Type): boolean
public "contains"(arg0: $FloatingPoint$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $FloatingRectangle$Type): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: double, arg1: double): void
public "resize"(arg0: double, arg1: double): void
public "move"(arg0: double, arg1: double): void
public "setSize"(arg0: $FloatingDimension$Type): void
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "union"(arg0: $FloatingRectangle$Type): $FloatingRectangle
public "setBounds"(arg0: $FloatingRectangle$Type): void
public "setBounds"(arg0: $Rectangle$Type): void
public "setBounds"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getFloatingBounds"(): $FloatingRectangle
public "getHeight"(): double
public "getWidth"(): double
public "reshape"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "inside"(arg0: double, arg1: double): boolean
public "intersection"(arg0: $FloatingRectangle$Type): $FloatingRectangle
public "getMinX"(): double
public "getMaxY"(): double
public "getMinY"(): double
public "getMaxX"(): double
public "translate"(arg0: double, arg1: double): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: $FloatingPoint$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "getCenterX"(): double
public "getCenterY"(): double
public "getFloatingLocation"(): $FloatingPoint
public "getX"(): double
get "y"(): double
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $FloatingDimension$Type)
set "size"(value: $Dimension$Type)
set "bounds"(value: $FloatingRectangle$Type)
set "bounds"(value: $Rectangle$Type)
get "floatingBounds"(): $FloatingRectangle
get "height"(): double
get "width"(): double
get "minX"(): double
get "maxY"(): double
get "minY"(): double
get "maxX"(): double
set "location"(value: $Point$Type)
set "location"(value: $FloatingPoint$Type)
get "centerX"(): double
get "centerY"(): double
get "floatingLocation"(): $FloatingPoint
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingRectangle$Type = ($FloatingRectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingRectangle_ = $FloatingRectangle$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/filtering/$FilteringContext" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export interface $FilteringContext {

 "getShownExactHashes"(): $LongCollection
 "getUnsetExactHashes"(): $LongCollection
 "getHiddenExactHashes"(): $LongCollection
 "getShownStacks"(): $Collection<($EntryStack<(any)>)>
 "getUnsetStacks"(): $Collection<($EntryStack<(any)>)>
 "getHiddenStacks"(): $Collection<($EntryStack<(any)>)>
}

export namespace $FilteringContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringContext$Type = ($FilteringContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteringContext_ = $FilteringContext$Type;
}}
declare module "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRenderer" {
import {$EntryStack, $EntryStack$Type} from "packages/me/shedaniel/rei/api/common/entry/$EntryStack"
import {$TooltipContext, $TooltipContext$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$TooltipContext"
import {$Tooltip, $Tooltip$Type} from "packages/me/shedaniel/rei/api/client/gui/widgets/$Tooltip"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$EntryRendererProvider, $EntryRendererProvider$Type} from "packages/me/shedaniel/rei/api/client/entry/renderer/$EntryRendererProvider"
import {$Rectangle, $Rectangle$Type} from "packages/me/shedaniel/math/$Rectangle"

export interface $EntryRenderer<T> extends $EntryRendererProvider<(T)> {

 "cast"<O>(): $EntryRenderer<(O)>
 "provide"(entry: $EntryStack$Type<(T)>, last: $EntryRenderer$Type<(T)>): $EntryRenderer<(T)>
 "render"(arg0: $EntryStack$Type<(T)>, arg1: $GuiGraphics$Type, arg2: $Rectangle$Type, arg3: integer, arg4: integer, arg5: float): void
 "getTooltip"(arg0: $EntryStack$Type<(T)>, arg1: $TooltipContext$Type): $Tooltip
}

export namespace $EntryRenderer {
function empty<T>(): $EntryRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryRenderer$Type<T> = ($EntryRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryRenderer_<T> = $EntryRenderer$Type<(T)>;
}}
declare module "packages/me/shedaniel/rei/api/client/registry/screen/$OverlayRendererProvider$Sink" {
import {$ScreenOverlay, $ScreenOverlay$Type} from "packages/me/shedaniel/rei/api/client/overlay/$ScreenOverlay"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $OverlayRendererProvider$Sink {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "getOverlay"(): $ScreenOverlay
 "lateRender"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
}

export namespace $OverlayRendererProvider$Sink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayRendererProvider$Sink$Type = ($OverlayRendererProvider$Sink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayRendererProvider$Sink_ = $OverlayRendererProvider$Sink$Type;
}}
