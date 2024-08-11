declare module "packages/qinomed/kubejsdelight/block/custom/$FeastBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $FeastBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "hasLeftovers"(arg0: boolean): $FeastBlockBuilder
public "servingsAmount"(arg0: integer): $FeastBlockBuilder
public "servingItems"(arg0: ($ResourceLocation$Type)[]): $FeastBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeastBlockBuilder$Type = ($FeastBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeastBlockBuilder_ = $FeastBlockBuilder$Type;
}}
declare module "packages/qinomed/kubejsdelight/item/custom/$KnifeItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KnifeItemBuilder extends $HandheldItemBuilder {
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
export type $KnifeItemBuilder$Type = ($KnifeItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnifeItemBuilder_ = $KnifeItemBuilder$Type;
}}
declare module "packages/qinomed/kubejsdelight/block/custom/$PieBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $PieBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "sliceItem"(arg0: $ResourceLocation$Type): $PieBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PieBlockBuilder$Type = ($PieBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PieBlockBuilder_ = $PieBlockBuilder$Type;
}}
