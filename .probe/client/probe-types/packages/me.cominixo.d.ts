declare module "packages/me/cominixo/betterf3/ducks/$ChunkBuilderAccess" {
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ChunkBuilderAccess {

 "getQueuedTaskCount"(): integer
 "getUploadQueue"(): $Queue<($Runnable)>
 "getBufferCount"(): integer
}

export namespace $ChunkBuilderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccess$Type = ($ChunkBuilderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderAccess_ = $ChunkBuilderAccess$Type;
}}
