declare module "packages/questsadditions/mixinutils/$IMixinQuest" {
import {$QuestObject, $QuestObject$Type} from "packages/dev/ftb/mods/ftbquests/quest/$QuestObject"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IMixinQuest {

 "getIncompatibleQuests"(): $List<($QuestObject)>
 "getMinRequiredTasks"(): integer
 "isRepeatable"(): boolean
}

export namespace $IMixinQuest {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinQuest$Type = ($IMixinQuest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinQuest_ = $IMixinQuest$Type;
}}
