declare module "packages/com/corosus/mobtimizations/$MobtimizationEntityFields" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobtimizationEntityFields {

 "getlastPlayerScanTime"(): long
 "setlastPlayerScanTime"(arg0: long): void
 "setlastWanderTime"(arg0: long): void
 "getlastWanderTime"(): long
 "isplayerInRange"(): boolean
 "setplayerInRange"(arg0: boolean): void
}

export namespace $MobtimizationEntityFields {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobtimizationEntityFields$Type = ($MobtimizationEntityFields);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobtimizationEntityFields_ = $MobtimizationEntityFields$Type;
}}
