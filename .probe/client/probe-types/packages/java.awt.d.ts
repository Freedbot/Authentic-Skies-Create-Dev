declare module "packages/java/awt/event/$MouseMotionListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$MouseEvent, $MouseEvent$Type} from "packages/java/awt/event/$MouseEvent"

export interface $MouseMotionListener extends $EventListener {

 "mouseMoved"(arg0: $MouseEvent$Type): void
 "mouseDragged"(arg0: $MouseEvent$Type): void
}

export namespace $MouseMotionListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseMotionListener$Type = ($MouseMotionListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseMotionListener_ = $MouseMotionListener$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceContext" {
import {$DragSourceDropEvent, $DragSourceDropEvent$Type} from "packages/java/awt/dnd/$DragSourceDropEvent"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DragSource, $DragSource$Type} from "packages/java/awt/dnd/$DragSource"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$DragSourceDragEvent, $DragSourceDragEvent$Type} from "packages/java/awt/dnd/$DragSourceDragEvent"
import {$DragGestureEvent, $DragGestureEvent$Type} from "packages/java/awt/dnd/$DragGestureEvent"
import {$DragSourceEvent, $DragSourceEvent$Type} from "packages/java/awt/dnd/$DragSourceEvent"
import {$DragSourceListener, $DragSourceListener$Type} from "packages/java/awt/dnd/$DragSourceListener"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"
import {$DragSourceMotionListener, $DragSourceMotionListener$Type} from "packages/java/awt/dnd/$DragSourceMotionListener"

export class $DragSourceContext implements $DragSourceListener, $DragSourceMotionListener, $Serializable {

constructor(arg0: $DragGestureEvent$Type, arg1: $Cursor$Type, arg2: $Image$Type, arg3: $Point$Type, arg4: $Transferable$Type, arg5: $DragSourceListener$Type)

public "getTrigger"(): $DragGestureEvent
public "getComponent"(): $Component
public "getCursor"(): $Cursor
public "setCursor"(arg0: $Cursor$Type): void
public "dragEnter"(arg0: $DragSourceDragEvent$Type): void
public "dragOver"(arg0: $DragSourceDragEvent$Type): void
public "dropActionChanged"(arg0: $DragSourceDragEvent$Type): void
public "dragExit"(arg0: $DragSourceEvent$Type): void
public "addDragSourceListener"(arg0: $DragSourceListener$Type): void
public "removeDragSourceListener"(arg0: $DragSourceListener$Type): void
public "dragDropEnd"(arg0: $DragSourceDropEvent$Type): void
public "dragMouseMoved"(arg0: $DragSourceDragEvent$Type): void
public "getDragSource"(): $DragSource
public "getSourceActions"(): integer
public "transferablesFlavorsChanged"(): void
public "getTransferable"(): $Transferable
get "trigger"(): $DragGestureEvent
get "component"(): $Component
get "cursor"(): $Cursor
set "cursor"(value: $Cursor$Type)
get "dragSource"(): $DragSource
get "sourceActions"(): integer
get "transferable"(): $Transferable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceContext$Type = ($DragSourceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceContext_ = $DragSourceContext$Type;
}}
declare module "packages/java/awt/font/$GlyphJustificationInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlyphJustificationInfo {
static readonly "PRIORITY_KASHIDA": integer
static readonly "PRIORITY_WHITESPACE": integer
static readonly "PRIORITY_INTERCHAR": integer
static readonly "PRIORITY_NONE": integer
readonly "weight": float
readonly "growPriority": integer
readonly "growAbsorb": boolean
readonly "growLeftLimit": float
readonly "growRightLimit": float
readonly "shrinkPriority": integer
readonly "shrinkAbsorb": boolean
readonly "shrinkLeftLimit": float
readonly "shrinkRightLimit": float

constructor(arg0: float, arg1: boolean, arg2: integer, arg3: float, arg4: float, arg5: boolean, arg6: integer, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphJustificationInfo$Type = ($GlyphJustificationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphJustificationInfo_ = $GlyphJustificationInfo$Type;
}}
declare module "packages/java/awt/datatransfer/$Transferable" {
import {$DataFlavor, $DataFlavor$Type} from "packages/java/awt/datatransfer/$DataFlavor"

export interface $Transferable {

 "getTransferDataFlavors"(): ($DataFlavor)[]
 "isDataFlavorSupported"(arg0: $DataFlavor$Type): boolean
 "getTransferData"(arg0: $DataFlavor$Type): any
}

export namespace $Transferable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transferable$Type = ($Transferable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transferable_ = $Transferable$Type;
}}
declare module "packages/java/awt/im/$InputMethodHighlight" {
import {$TextAttribute, $TextAttribute$Type} from "packages/java/awt/font/$TextAttribute"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InputMethodHighlight {
static readonly "RAW_TEXT": integer
static readonly "CONVERTED_TEXT": integer
static readonly "UNSELECTED_RAW_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "SELECTED_RAW_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "UNSELECTED_CONVERTED_TEXT_HIGHLIGHT": $InputMethodHighlight
static readonly "SELECTED_CONVERTED_TEXT_HIGHLIGHT": $InputMethodHighlight

constructor(arg0: boolean, arg1: integer, arg2: integer, arg3: $Map$Type<($TextAttribute$Type), (any)>)
constructor(arg0: boolean, arg1: integer, arg2: integer)
constructor(arg0: boolean, arg1: integer)

public "getState"(): integer
public "isSelected"(): boolean
public "getStyle"(): $Map<($TextAttribute), (any)>
public "getVariation"(): integer
get "state"(): integer
get "selected"(): boolean
get "style"(): $Map<($TextAttribute), (any)>
get "variation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethodHighlight$Type = ($InputMethodHighlight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethodHighlight_ = $InputMethodHighlight$Type;
}}
declare module "packages/java/awt/image/$SampleModel" {
import {$DataBuffer, $DataBuffer$Type} from "packages/java/awt/image/$DataBuffer"

export class $SampleModel {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$Type): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$Type): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$Type): (float)[]
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$Type): void
public "getSampleSize"(): (integer)[]
public "getSampleSize"(arg0: integer): integer
public "getHeight"(): integer
public "getWidth"(): integer
public "getNumBands"(): integer
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$Type): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$Type): any
public "setDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$Type): void
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$Type): (integer)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$Type): (float)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$Type): (double)[]
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$Type): void
public "getDataType"(): integer
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$Type): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$Type): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$Type): (float)[]
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$Type): void
public "createDataBuffer"(): $DataBuffer
public "createSubsetSampleModel"(arg0: (integer)[]): $SampleModel
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: $DataBuffer$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $DataBuffer$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double, arg4: $DataBuffer$Type): void
public "getNumDataElements"(): integer
public "getTransferType"(): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): double
public "getSample"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): integer
get "sampleSize"(): (integer)[]
get "height"(): integer
get "width"(): integer
get "numBands"(): integer
get "dataType"(): integer
get "numDataElements"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleModel$Type = ($SampleModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SampleModel_ = $SampleModel$Type;
}}
declare module "packages/java/awt/$Dialog$ModalExclusionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Dialog$ModalExclusionType extends $Enum<($Dialog$ModalExclusionType)> {
static readonly "NO_EXCLUDE": $Dialog$ModalExclusionType
static readonly "APPLICATION_EXCLUDE": $Dialog$ModalExclusionType
static readonly "TOOLKIT_EXCLUDE": $Dialog$ModalExclusionType


public static "values"(): ($Dialog$ModalExclusionType)[]
public static "valueOf"(arg0: string): $Dialog$ModalExclusionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dialog$ModalExclusionType$Type = (("no_exclude") | ("toolkit_exclude") | ("application_exclude")) | ($Dialog$ModalExclusionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dialog$ModalExclusionType_ = $Dialog$ModalExclusionType$Type;
}}
declare module "packages/java/awt/$Color" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$ColorSpace, $ColorSpace$Type} from "packages/java/awt/color/$ColorSpace"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Paint, $Paint$Type} from "packages/java/awt/$Paint"
import {$PaintContext, $PaintContext$Type} from "packages/java/awt/$PaintContext"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Color implements $Paint, $Serializable {
static readonly "white": $Color
static readonly "WHITE": $Color
static readonly "lightGray": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "gray": $Color
static readonly "GRAY": $Color
static readonly "darkGray": $Color
static readonly "DARK_GRAY": $Color
static readonly "black": $Color
static readonly "BLACK": $Color
static readonly "red": $Color
static readonly "RED": $Color
static readonly "pink": $Color
static readonly "PINK": $Color
static readonly "orange": $Color
static readonly "ORANGE": $Color
static readonly "yellow": $Color
static readonly "YELLOW": $Color
static readonly "green": $Color
static readonly "GREEN": $Color
static readonly "magenta": $Color
static readonly "MAGENTA": $Color
static readonly "cyan": $Color
static readonly "CYAN": $Color
static readonly "blue": $Color
static readonly "BLUE": $Color

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorSpace$Type, arg1: (float)[], arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: string): $Color
public "getTransparency"(): integer
public static "HSBtoRGB"(arg0: float, arg1: float, arg2: float): integer
public static "RGBtoHSB"(arg0: integer, arg1: integer, arg2: integer, arg3: (float)[]): (float)[]
public "getColorSpace"(): $ColorSpace
public "brighter"(): $Color
public "darker"(): $Color
public static "getHSBColor"(arg0: float, arg1: float, arg2: float): $Color
public "getRGBComponents"(arg0: (float)[]): (float)[]
public "getRGBColorComponents"(arg0: (float)[]): (float)[]
public "getColorComponents"(arg0: (float)[]): (float)[]
public "getColorComponents"(arg0: $ColorSpace$Type, arg1: (float)[]): (float)[]
public static "getColor"(arg0: string): $Color
public static "getColor"(arg0: string, arg1: integer): $Color
public static "getColor"(arg0: string, arg1: $Color$Type): $Color
public "createContext"(arg0: $ColorModel$Type, arg1: $Rectangle$Type, arg2: $Rectangle2D$Type, arg3: $AffineTransform$Type, arg4: $RenderingHints$Type): $PaintContext
public "getComponents"(arg0: $ColorSpace$Type, arg1: (float)[]): (float)[]
public "getComponents"(arg0: (float)[]): (float)[]
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getRGB"(): integer
public "getAlpha"(): integer
get "transparency"(): integer
get "colorSpace"(): $ColorSpace
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "rGB"(): integer
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/java/awt/$FontMetrics" {
import {$CharacterIterator, $CharacterIterator$Type} from "packages/java/text/$CharacterIterator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$LineMetrics, $LineMetrics$Type} from "packages/java/awt/font/$LineMetrics"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$FontRenderContext, $FontRenderContext$Type} from "packages/java/awt/font/$FontRenderContext"

export class $FontMetrics implements $Serializable {


public "toString"(): string
public "charWidth"(arg0: integer): integer
public "charWidth"(arg0: character): integer
public "getHeight"(): integer
public "stringWidth"(arg0: string): integer
public "getFont"(): $Font
public "getFontRenderContext"(): $FontRenderContext
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: $CharacterIterator$Type, arg1: integer, arg2: integer, arg3: $Graphics$Type): $LineMetrics
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: integer, arg2: integer, arg3: $Graphics$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: $Graphics$Type): $LineMetrics
public "getStringBounds"(arg0: $CharacterIterator$Type, arg1: integer, arg2: integer, arg3: $Graphics$Type): $Rectangle2D
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: integer, arg2: integer, arg3: $Graphics$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: $Graphics$Type): $Rectangle2D
public "getAscent"(): integer
public "getDescent"(): integer
public "getLeading"(): integer
public "getMaxCharBounds"(arg0: $Graphics$Type): $Rectangle2D
public "getMaxAscent"(): integer
public "getMaxDescent"(): integer
/**
 * 
 * @deprecated
 */
public "getMaxDecent"(): integer
public "getMaxAdvance"(): integer
public "getWidths"(): (integer)[]
public "charsWidth"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "bytesWidth"(arg0: (byte)[], arg1: integer, arg2: integer): integer
get "height"(): integer
get "font"(): $Font
get "fontRenderContext"(): $FontRenderContext
get "ascent"(): integer
get "descent"(): integer
get "leading"(): integer
get "maxAscent"(): integer
get "maxDescent"(): integer
get "maxDecent"(): integer
get "maxAdvance"(): integer
get "widths"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontMetrics$Type = ($FontMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontMetrics_ = $FontMetrics$Type;
}}
declare module "packages/java/awt/geom/$Point2D" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Point2D implements $Cloneable {


public "getY"(): double
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "distanceSq"(arg0: double, arg1: double): double
public static "distanceSq"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distanceSq"(arg0: $Point2D$Type): double
public "setLocation"(arg0: $Point2D$Type): void
public "setLocation"(arg0: double, arg1: double): void
public static "distance"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distance"(arg0: $Point2D$Type): double
public "distance"(arg0: double, arg1: double): double
public "getX"(): double
get "y"(): double
set "location"(value: $Point2D$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2D$Type = ($Point2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point2D_ = $Point2D$Type;
}}
declare module "packages/java/awt/$Stroke" {
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"

export interface $Stroke {

 "createStrokedShape"(arg0: $Shape$Type): $Shape

(arg0: $Shape$Type): $Shape
}

export namespace $Stroke {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stroke$Type = ($Stroke);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stroke_ = $Stroke$Type;
}}
declare module "packages/java/awt/$Composite" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$CompositeContext, $CompositeContext$Type} from "packages/java/awt/$CompositeContext"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export interface $Composite {

 "createContext"(arg0: $ColorModel$Type, arg1: $ColorModel$Type, arg2: $RenderingHints$Type): $CompositeContext

(arg0: $ColorModel$Type, arg1: $ColorModel$Type, arg2: $RenderingHints$Type): $CompositeContext
}

export namespace $Composite {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Composite$Type = ($Composite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Composite_ = $Composite$Type;
}}
declare module "packages/java/awt/$Dialog$ModalityType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Dialog$ModalityType extends $Enum<($Dialog$ModalityType)> {
static readonly "MODELESS": $Dialog$ModalityType
static readonly "DOCUMENT_MODAL": $Dialog$ModalityType
static readonly "APPLICATION_MODAL": $Dialog$ModalityType
static readonly "TOOLKIT_MODAL": $Dialog$ModalityType


public static "values"(): ($Dialog$ModalityType)[]
public static "valueOf"(arg0: string): $Dialog$ModalityType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dialog$ModalityType$Type = (("application_modal") | ("modeless") | ("document_modal") | ("toolkit_modal")) | ($Dialog$ModalityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dialog$ModalityType_ = $Dialog$ModalityType$Type;
}}
declare module "packages/java/awt/dnd/$DragGestureRecognizer" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DragGestureListener, $DragGestureListener$Type} from "packages/java/awt/dnd/$DragGestureListener"
import {$DragSource, $DragSource$Type} from "packages/java/awt/dnd/$DragSource"
import {$InputEvent, $InputEvent$Type} from "packages/java/awt/event/$InputEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $DragGestureRecognizer implements $Serializable {


public "getComponent"(): $Component
public "setComponent"(arg0: $Component$Type): void
public "addDragGestureListener"(arg0: $DragGestureListener$Type): void
public "getDragSource"(): $DragSource
public "getSourceActions"(): integer
public "setSourceActions"(arg0: integer): void
public "getTriggerEvent"(): $InputEvent
public "resetRecognizer"(): void
public "removeDragGestureListener"(arg0: $DragGestureListener$Type): void
get "component"(): $Component
set "component"(value: $Component$Type)
get "dragSource"(): $DragSource
get "sourceActions"(): integer
set "sourceActions"(value: integer)
get "triggerEvent"(): $InputEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragGestureRecognizer$Type = ($DragGestureRecognizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragGestureRecognizer_ = $DragGestureRecognizer$Type;
}}
declare module "packages/java/awt/image/$VolatileImage" {
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"
import {$ImageProducer, $ImageProducer$Type} from "packages/java/awt/image/$ImageProducer"
import {$Graphics2D, $Graphics2D$Type} from "packages/java/awt/$Graphics2D"
import {$ImageCapabilities, $ImageCapabilities$Type} from "packages/java/awt/$ImageCapabilities"
import {$Image, $Image$Type} from "packages/java/awt/$Image"

export class $VolatileImage extends $Image implements $Transparency {
static readonly "IMAGE_OK": integer
static readonly "IMAGE_RESTORED": integer
static readonly "IMAGE_INCOMPATIBLE": integer
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer


public "validate"(arg0: $GraphicsConfiguration$Type): integer
public "getSource"(): $ImageProducer
public "getTransparency"(): integer
public "createGraphics"(): $Graphics2D
public "getHeight"(): integer
public "getWidth"(): integer
public "getSnapshot"(): $BufferedImage
public "getCapabilities"(): $ImageCapabilities
public "getGraphics"(): $Graphics
public "contentsLost"(): boolean
get "source"(): $ImageProducer
get "transparency"(): integer
get "height"(): integer
get "width"(): integer
get "snapshot"(): $BufferedImage
get "capabilities"(): $ImageCapabilities
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolatileImage$Type = ($VolatileImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolatileImage_ = $VolatileImage$Type;
}}
declare module "packages/java/awt/event/$AWTEventListener" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $AWTEventListener extends $EventListener {

 "eventDispatched"(arg0: $AWTEvent$Type): void

(arg0: $AWTEvent$Type): void
}

export namespace $AWTEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AWTEventListener$Type = ($AWTEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AWTEventListener_ = $AWTEventListener$Type;
}}
declare module "packages/java/awt/$MenuComponent" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Font, $Font$Type} from "packages/java/awt/$Font"

export class $MenuComponent implements $Serializable {

constructor()

public "getName"(): string
public "toString"(): string
public "getParent"(): $MenuContainer
public "setName"(arg0: string): void
public "removeNotify"(): void
public "setFont"(arg0: $Font$Type): void
public "getAccessibleContext"(): $AccessibleContext
public "dispatchEvent"(arg0: $AWTEvent$Type): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "getFont"(): $Font
get "name"(): string
get "parent"(): $MenuContainer
set "name"(value: string)
set "font"(value: $Font$Type)
get "accessibleContext"(): $AccessibleContext
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuComponent$Type = ($MenuComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuComponent_ = $MenuComponent$Type;
}}
declare module "packages/java/awt/$Event" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

/**
 * 
 * @deprecated
 */
export class $Event implements $Serializable {
static readonly "SHIFT_MASK": integer
static readonly "CTRL_MASK": integer
static readonly "META_MASK": integer
static readonly "ALT_MASK": integer
static readonly "HOME": integer
static readonly "END": integer
static readonly "PGUP": integer
static readonly "PGDN": integer
static readonly "UP": integer
static readonly "DOWN": integer
static readonly "LEFT": integer
static readonly "RIGHT": integer
static readonly "F1": integer
static readonly "F2": integer
static readonly "F3": integer
static readonly "F4": integer
static readonly "F5": integer
static readonly "F6": integer
static readonly "F7": integer
static readonly "F8": integer
static readonly "F9": integer
static readonly "F10": integer
static readonly "F11": integer
static readonly "F12": integer
static readonly "PRINT_SCREEN": integer
static readonly "SCROLL_LOCK": integer
static readonly "CAPS_LOCK": integer
static readonly "NUM_LOCK": integer
static readonly "PAUSE": integer
static readonly "INSERT": integer
static readonly "ENTER": integer
static readonly "BACK_SPACE": integer
static readonly "TAB": integer
static readonly "ESCAPE": integer
static readonly "DELETE": integer
static readonly "WINDOW_DESTROY": integer
static readonly "WINDOW_EXPOSE": integer
static readonly "WINDOW_ICONIFY": integer
static readonly "WINDOW_DEICONIFY": integer
static readonly "WINDOW_MOVED": integer
static readonly "KEY_PRESS": integer
static readonly "KEY_RELEASE": integer
static readonly "KEY_ACTION": integer
static readonly "KEY_ACTION_RELEASE": integer
static readonly "MOUSE_DOWN": integer
static readonly "MOUSE_UP": integer
static readonly "MOUSE_MOVE": integer
static readonly "MOUSE_ENTER": integer
static readonly "MOUSE_EXIT": integer
static readonly "MOUSE_DRAG": integer
static readonly "SCROLL_LINE_UP": integer
static readonly "SCROLL_LINE_DOWN": integer
static readonly "SCROLL_PAGE_UP": integer
static readonly "SCROLL_PAGE_DOWN": integer
static readonly "SCROLL_ABSOLUTE": integer
static readonly "SCROLL_BEGIN": integer
static readonly "SCROLL_END": integer
static readonly "LIST_SELECT": integer
static readonly "LIST_DESELECT": integer
static readonly "ACTION_EVENT": integer
static readonly "LOAD_FILE": integer
static readonly "SAVE_FILE": integer
static readonly "GOT_FOCUS": integer
static readonly "LOST_FOCUS": integer
 "target": any
 "when": long
 "id": integer
 "x": integer
 "y": integer
 "key": integer
 "modifiers": integer
 "clickCount": integer
 "arg": any
 "evt": $Event

constructor(arg0: any, arg1: long, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)
constructor(arg0: any, arg1: long, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: any)
constructor(arg0: any, arg1: integer, arg2: any)

public "toString"(): string
public "shiftDown"(): boolean
public "translate"(arg0: integer, arg1: integer): void
public "controlDown"(): boolean
public "metaDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type = ($Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_ = $Event$Type;
}}
declare module "packages/java/awt/font/$TextAttribute" {
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$Type} from "packages/java/text/$AttributedCharacterIterator$Attribute"

export class $TextAttribute extends $AttributedCharacterIterator$Attribute {
static readonly "FAMILY": $TextAttribute
static readonly "WEIGHT": $TextAttribute
static readonly "WEIGHT_EXTRA_LIGHT": float
static readonly "WEIGHT_LIGHT": float
static readonly "WEIGHT_DEMILIGHT": float
static readonly "WEIGHT_REGULAR": float
static readonly "WEIGHT_SEMIBOLD": float
static readonly "WEIGHT_MEDIUM": float
static readonly "WEIGHT_DEMIBOLD": float
static readonly "WEIGHT_BOLD": float
static readonly "WEIGHT_HEAVY": float
static readonly "WEIGHT_EXTRABOLD": float
static readonly "WEIGHT_ULTRABOLD": float
static readonly "WIDTH": $TextAttribute
static readonly "WIDTH_CONDENSED": float
static readonly "WIDTH_SEMI_CONDENSED": float
static readonly "WIDTH_REGULAR": float
static readonly "WIDTH_SEMI_EXTENDED": float
static readonly "WIDTH_EXTENDED": float
static readonly "POSTURE": $TextAttribute
static readonly "POSTURE_REGULAR": float
static readonly "POSTURE_OBLIQUE": float
static readonly "SIZE": $TextAttribute
static readonly "TRANSFORM": $TextAttribute
static readonly "SUPERSCRIPT": $TextAttribute
static readonly "SUPERSCRIPT_SUPER": integer
static readonly "SUPERSCRIPT_SUB": integer
static readonly "FONT": $TextAttribute
static readonly "CHAR_REPLACEMENT": $TextAttribute
static readonly "FOREGROUND": $TextAttribute
static readonly "BACKGROUND": $TextAttribute
static readonly "UNDERLINE": $TextAttribute
static readonly "UNDERLINE_ON": integer
static readonly "STRIKETHROUGH": $TextAttribute
static readonly "STRIKETHROUGH_ON": boolean
static readonly "RUN_DIRECTION": $TextAttribute
static readonly "RUN_DIRECTION_LTR": boolean
static readonly "RUN_DIRECTION_RTL": boolean
static readonly "BIDI_EMBEDDING": $TextAttribute
static readonly "JUSTIFICATION": $TextAttribute
static readonly "JUSTIFICATION_FULL": float
static readonly "JUSTIFICATION_NONE": float
static readonly "INPUT_METHOD_HIGHLIGHT": $TextAttribute
static readonly "INPUT_METHOD_UNDERLINE": $TextAttribute
static readonly "UNDERLINE_LOW_ONE_PIXEL": integer
static readonly "UNDERLINE_LOW_TWO_PIXEL": integer
static readonly "UNDERLINE_LOW_DOTTED": integer
static readonly "UNDERLINE_LOW_GRAY": integer
static readonly "UNDERLINE_LOW_DASHED": integer
static readonly "SWAP_COLORS": $TextAttribute
static readonly "SWAP_COLORS_ON": boolean
static readonly "NUMERIC_SHAPING": $TextAttribute
static readonly "KERNING": $TextAttribute
static readonly "KERNING_ON": integer
static readonly "LIGATURES": $TextAttribute
static readonly "LIGATURES_ON": integer
static readonly "TRACKING": $TextAttribute
static readonly "TRACKING_TIGHT": float
static readonly "TRACKING_LOOSE": float
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAttribute$Type = ($TextAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextAttribute_ = $TextAttribute$Type;
}}
declare module "packages/java/awt/geom/$PathIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathIterator {

 "next"(): void
 "isDone"(): boolean
 "currentSegment"(arg0: (float)[]): integer
 "currentSegment"(arg0: (double)[]): integer
 "getWindingRule"(): integer
}

export namespace $PathIterator {
const WIND_EVEN_ODD: integer
const WIND_NON_ZERO: integer
const SEG_MOVETO: integer
const SEG_LINETO: integer
const SEG_QUADTO: integer
const SEG_CUBICTO: integer
const SEG_CLOSE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathIterator$Type = ($PathIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathIterator_ = $PathIterator$Type;
}}
declare module "packages/java/awt/im/$InputContext" {
import {$Character$Subset, $Character$Subset$Type} from "packages/java/lang/$Character$Subset"
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $InputContext {


public static "getInstance"(): $InputContext
public "getLocale"(): $Locale
public "dispose"(): void
public "removeNotify"(arg0: $Component$Type): void
public "dispatchEvent"(arg0: $AWTEvent$Type): void
public "endComposition"(): void
public "selectInputMethod"(arg0: $Locale$Type): boolean
public "setCharacterSubsets"(arg0: ($Character$Subset$Type)[]): void
public "setCompositionEnabled"(arg0: boolean): void
public "isCompositionEnabled"(): boolean
public "reconvert"(): void
public "getInputMethodControlObject"(): any
get "instance"(): $InputContext
get "locale"(): $Locale
set "characterSubsets"(value: ($Character$Subset$Type)[])
set "compositionEnabled"(value: boolean)
get "compositionEnabled"(): boolean
get "inputMethodControlObject"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputContext$Type = ($InputContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputContext_ = $InputContext$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceListener" {
import {$DragSourceDragEvent, $DragSourceDragEvent$Type} from "packages/java/awt/dnd/$DragSourceDragEvent"
import {$DragSourceDropEvent, $DragSourceDropEvent$Type} from "packages/java/awt/dnd/$DragSourceDropEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$DragSourceEvent, $DragSourceEvent$Type} from "packages/java/awt/dnd/$DragSourceEvent"

export interface $DragSourceListener extends $EventListener {

 "dragEnter"(arg0: $DragSourceDragEvent$Type): void
 "dragOver"(arg0: $DragSourceDragEvent$Type): void
 "dropActionChanged"(arg0: $DragSourceDragEvent$Type): void
 "dragExit"(arg0: $DragSourceEvent$Type): void
 "dragDropEnd"(arg0: $DragSourceDropEvent$Type): void
}

export namespace $DragSourceListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceListener$Type = ($DragSourceListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceListener_ = $DragSourceListener$Type;
}}
declare module "packages/java/awt/event/$WindowEvent" {
import {$Window, $Window$Type} from "packages/java/awt/$Window"
import {$ComponentEvent, $ComponentEvent$Type} from "packages/java/awt/event/$ComponentEvent"

export class $WindowEvent extends $ComponentEvent {
static readonly "WINDOW_FIRST": integer
static readonly "WINDOW_OPENED": integer
static readonly "WINDOW_CLOSING": integer
static readonly "WINDOW_CLOSED": integer
static readonly "WINDOW_ICONIFIED": integer
static readonly "WINDOW_DEICONIFIED": integer
static readonly "WINDOW_ACTIVATED": integer
static readonly "WINDOW_DEACTIVATED": integer
static readonly "WINDOW_GAINED_FOCUS": integer
static readonly "WINDOW_LOST_FOCUS": integer
static readonly "WINDOW_STATE_CHANGED": integer
static readonly "WINDOW_LAST": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Window$Type, arg1: integer)
constructor(arg0: $Window$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Window$Type, arg1: integer, arg2: $Window$Type)
constructor(arg0: $Window$Type, arg1: integer, arg2: $Window$Type, arg3: integer, arg4: integer)

public "paramString"(): string
public "getOldState"(): integer
public "getNewState"(): integer
public "getWindow"(): $Window
public "getOppositeWindow"(): $Window
get "oldState"(): integer
get "newState"(): integer
get "window"(): $Window
get "oppositeWindow"(): $Window
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowEvent$Type = ($WindowEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowEvent_ = $WindowEvent$Type;
}}
declare module "packages/java/awt/image/$TileObserver" {
import {$WritableRenderedImage, $WritableRenderedImage$Type} from "packages/java/awt/image/$WritableRenderedImage"

export interface $TileObserver {

 "tileUpdate"(arg0: $WritableRenderedImage$Type, arg1: integer, arg2: integer, arg3: boolean): void

(arg0: $WritableRenderedImage$Type, arg1: integer, arg2: integer, arg3: boolean): void
}

export namespace $TileObserver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileObserver$Type = ($TileObserver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileObserver_ = $TileObserver$Type;
}}
declare module "packages/java/awt/$PrintJob" {
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"

export class $PrintJob {


/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "end"(): void
public "getGraphics"(): $Graphics
public "getPageDimension"(): $Dimension
public "getPageResolution"(): integer
public "lastPageFirst"(): boolean
get "graphics"(): $Graphics
get "pageDimension"(): $Dimension
get "pageResolution"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintJob$Type = ($PrintJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintJob_ = $PrintJob$Type;
}}
declare module "packages/java/awt/$ImageCapabilities" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $ImageCapabilities implements $Cloneable {

constructor(arg0: boolean)

public "clone"(): any
public "isAccelerated"(): boolean
public "isTrueVolatile"(): boolean
get "accelerated"(): boolean
get "trueVolatile"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageCapabilities$Type = ($ImageCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageCapabilities_ = $ImageCapabilities$Type;
}}
declare module "packages/java/awt/$CompositeContext" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"

export interface $CompositeContext {

 "compose"(arg0: $Raster$Type, arg1: $Raster$Type, arg2: $WritableRaster$Type): void
 "dispose"(): void
}

export namespace $CompositeContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeContext$Type = ($CompositeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeContext_ = $CompositeContext$Type;
}}
declare module "packages/java/awt/event/$ActionListener" {
import {$ActionEvent, $ActionEvent$Type} from "packages/java/awt/event/$ActionEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $ActionListener extends $EventListener {

 "actionPerformed"(arg0: $ActionEvent$Type): void

(arg0: $ActionEvent$Type): void
}

export namespace $ActionListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionListener$Type = ($ActionListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionListener_ = $ActionListener$Type;
}}
declare module "packages/java/awt/$PageAttributes$OrientationRequestedType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $PageAttributes$OrientationRequestedType extends $AttributeValue {
static readonly "PORTRAIT": $PageAttributes$OrientationRequestedType
static readonly "LANDSCAPE": $PageAttributes$OrientationRequestedType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$OrientationRequestedType$Type = ($PageAttributes$OrientationRequestedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes$OrientationRequestedType_ = $PageAttributes$OrientationRequestedType$Type;
}}
declare module "packages/java/awt/image/renderable/$RenderableImage" {
import {$Vector, $Vector$Type} from "packages/java/util/$Vector"
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$RenderContext, $RenderContext$Type} from "packages/java/awt/image/renderable/$RenderContext"
import {$RenderedImage, $RenderedImage$Type} from "packages/java/awt/image/$RenderedImage"

export interface $RenderableImage {

 "getProperty"(arg0: string): any
 "getPropertyNames"(): (string)[]
 "getHeight"(): float
 "getWidth"(): float
 "isDynamic"(): boolean
 "getSources"(): $Vector<($RenderableImage)>
 "getMinX"(): float
 "getMinY"(): float
 "createScaledRendering"(arg0: integer, arg1: integer, arg2: $RenderingHints$Type): $RenderedImage
 "createDefaultRendering"(): $RenderedImage
 "createRendering"(arg0: $RenderContext$Type): $RenderedImage
}

export namespace $RenderableImage {
const HINTS_OBSERVED: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableImage$Type = ($RenderableImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableImage_ = $RenderableImage$Type;
}}
declare module "packages/java/awt/event/$HierarchyListener" {
import {$HierarchyEvent, $HierarchyEvent$Type} from "packages/java/awt/event/$HierarchyEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $HierarchyListener extends $EventListener {

 "hierarchyChanged"(arg0: $HierarchyEvent$Type): void

(arg0: $HierarchyEvent$Type): void
}

export namespace $HierarchyListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HierarchyListener$Type = ($HierarchyListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HierarchyListener_ = $HierarchyListener$Type;
}}
declare module "packages/java/awt/$Image" {
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$ImageProducer, $ImageProducer$Type} from "packages/java/awt/image/$ImageProducer"
import {$ImageCapabilities, $ImageCapabilities$Type} from "packages/java/awt/$ImageCapabilities"

export class $Image {
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer


public "getProperty"(arg0: string, arg1: $ImageObserver$Type): any
public "flush"(): void
public "getSource"(): $ImageProducer
public "getScaledInstance"(arg0: integer, arg1: integer, arg2: integer): $Image
public "setAccelerationPriority"(arg0: float): void
public "getAccelerationPriority"(): float
public "getHeight"(arg0: $ImageObserver$Type): integer
public "getWidth"(arg0: $ImageObserver$Type): integer
public "getCapabilities"(arg0: $GraphicsConfiguration$Type): $ImageCapabilities
public "getGraphics"(): $Graphics
get "source"(): $ImageProducer
set "accelerationPriority"(value: float)
get "accelerationPriority"(): float
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Image$Type = ($Image);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Image_ = $Image$Type;
}}
declare module "packages/java/awt/event/$FocusEvent$Cause" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FocusEvent$Cause extends $Enum<($FocusEvent$Cause)> {
static readonly "UNKNOWN": $FocusEvent$Cause
static readonly "MOUSE_EVENT": $FocusEvent$Cause
static readonly "TRAVERSAL": $FocusEvent$Cause
static readonly "TRAVERSAL_UP": $FocusEvent$Cause
static readonly "TRAVERSAL_DOWN": $FocusEvent$Cause
static readonly "TRAVERSAL_FORWARD": $FocusEvent$Cause
static readonly "TRAVERSAL_BACKWARD": $FocusEvent$Cause
static readonly "ROLLBACK": $FocusEvent$Cause
static readonly "UNEXPECTED": $FocusEvent$Cause
static readonly "ACTIVATION": $FocusEvent$Cause
static readonly "CLEAR_GLOBAL_FOCUS_OWNER": $FocusEvent$Cause


public static "values"(): ($FocusEvent$Cause)[]
public static "valueOf"(arg0: string): $FocusEvent$Cause
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusEvent$Cause$Type = (("rollback") | ("traversal_up") | ("traversal_backward") | ("unexpected") | ("clear_global_focus_owner") | ("traversal") | ("activation") | ("traversal_down") | ("mouse_event") | ("unknown") | ("traversal_forward")) | ($FocusEvent$Cause);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusEvent$Cause_ = $FocusEvent$Cause$Type;
}}
declare module "packages/java/awt/$RenderingHints$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderingHints$Key {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isCompatibleValue"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Key$Type = ($RenderingHints$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints$Key_ = $RenderingHints$Key$Type;
}}
declare module "packages/java/awt/$Frame" {
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$MenuBar, $MenuBar$Type} from "packages/java/awt/$MenuBar"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$Window, $Window$Type} from "packages/java/awt/$Window"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$Image, $Image$Type} from "packages/java/awt/$Image"

export class $Frame extends $Window implements $MenuContainer {
/**
 * 
 * @deprecated
 */
static readonly "DEFAULT_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "CROSSHAIR_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "TEXT_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "WAIT_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "SW_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "SE_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "NW_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "NE_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "N_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "S_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "W_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "E_RESIZE_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "HAND_CURSOR": integer
/**
 * 
 * @deprecated
 */
static readonly "MOVE_CURSOR": integer
static readonly "NORMAL": integer
static readonly "ICONIFIED": integer
static readonly "MAXIMIZED_HORIZ": integer
static readonly "MAXIMIZED_VERT": integer
static readonly "MAXIMIZED_BOTH": integer
static readonly "TOP_ALIGNMENT": float
static readonly "CENTER_ALIGNMENT": float
static readonly "BOTTOM_ALIGNMENT": float
static readonly "LEFT_ALIGNMENT": float
static readonly "RIGHT_ALIGNMENT": float

constructor(arg0: string, arg1: $GraphicsConfiguration$Type)
constructor(arg0: string)
constructor(arg0: $GraphicsConfiguration$Type)
constructor()

public "remove"(arg0: $MenuComponent$Type): void
public "getState"(): integer
public "setState"(arg0: integer): void
public "removeNotify"(): void
public "addNotify"(): void
public "getAccessibleContext"(): $AccessibleContext
public "setShape"(arg0: $Shape$Type): void
public "setBackground"(arg0: $Color$Type): void
public "setUndecorated"(arg0: boolean): void
public "setResizable"(arg0: boolean): void
public "setTitle"(arg0: string): void
public "getTitle"(): string
public "setOpacity"(arg0: float): void
public static "getFrames"(): ($Frame)[]
/**
 * 
 * @deprecated
 */
public "setCursor"(arg0: integer): void
public "setMenuBar"(arg0: $MenuBar$Type): void
public "setMaximizedBounds"(arg0: $Rectangle$Type): void
public "getIconImage"(): $Image
public "getMenuBar"(): $MenuBar
public "getExtendedState"(): integer
public "setExtendedState"(arg0: integer): void
public "getMaximizedBounds"(): $Rectangle
/**
 * 
 * @deprecated
 */
public "getCursorType"(): integer
public "setIconImage"(arg0: $Image$Type): void
public "isResizable"(): boolean
public "isUndecorated"(): boolean
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "getFont"(): $Font
get "state"(): integer
set "state"(value: integer)
get "accessibleContext"(): $AccessibleContext
set "shape"(value: $Shape$Type)
set "background"(value: $Color$Type)
set "undecorated"(value: boolean)
set "resizable"(value: boolean)
set "title"(value: string)
get "title"(): string
set "opacity"(value: float)
get "frames"(): ($Frame)[]
set "cursor"(value: integer)
set "menuBar"(value: $MenuBar$Type)
set "maximizedBounds"(value: $Rectangle$Type)
get "iconImage"(): $Image
get "menuBar"(): $MenuBar
get "extendedState"(): integer
set "extendedState"(value: integer)
get "maximizedBounds"(): $Rectangle
get "cursorType"(): integer
set "iconImage"(value: $Image$Type)
get "resizable"(): boolean
get "undecorated"(): boolean
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frame$Type = ($Frame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frame_ = $Frame$Type;
}}
declare module "packages/java/awt/event/$HierarchyEvent" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $HierarchyEvent extends $AWTEvent {
static readonly "HIERARCHY_FIRST": integer
static readonly "HIERARCHY_CHANGED": integer
static readonly "ANCESTOR_MOVED": integer
static readonly "ANCESTOR_RESIZED": integer
static readonly "HIERARCHY_LAST": integer
static readonly "PARENT_CHANGED": integer
static readonly "DISPLAYABILITY_CHANGED": integer
static readonly "SHOWING_CHANGED": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: $Component$Type, arg3: $Container$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: $Component$Type, arg3: $Container$Type, arg4: long)

public "paramString"(): string
public "getComponent"(): $Component
public "getChanged"(): $Component
public "getChangedParent"(): $Container
public "getChangeFlags"(): long
get "component"(): $Component
get "changed"(): $Component
get "changedParent"(): $Container
get "changeFlags"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HierarchyEvent$Type = ($HierarchyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HierarchyEvent_ = $HierarchyEvent$Type;
}}
declare module "packages/java/awt/event/$MouseListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$MouseEvent, $MouseEvent$Type} from "packages/java/awt/event/$MouseEvent"

export interface $MouseListener extends $EventListener {

 "mouseExited"(arg0: $MouseEvent$Type): void
 "mouseEntered"(arg0: $MouseEvent$Type): void
 "mouseReleased"(arg0: $MouseEvent$Type): void
 "mousePressed"(arg0: $MouseEvent$Type): void
 "mouseClicked"(arg0: $MouseEvent$Type): void
}

export namespace $MouseListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseListener$Type = ($MouseListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseListener_ = $MouseListener$Type;
}}
declare module "packages/java/awt/$JobAttributes$DefaultSelectionType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $JobAttributes$DefaultSelectionType extends $AttributeValue {
static readonly "ALL": $JobAttributes$DefaultSelectionType
static readonly "RANGE": $JobAttributes$DefaultSelectionType
static readonly "SELECTION": $JobAttributes$DefaultSelectionType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$DefaultSelectionType$Type = ($JobAttributes$DefaultSelectionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes$DefaultSelectionType_ = $JobAttributes$DefaultSelectionType$Type;
}}
declare module "packages/java/awt/image/$IndexColorModel" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export class $IndexColorModel extends $ColorModel {

constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean, arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: integer, arg5: $BigInteger$Type)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: boolean, arg5: integer, arg6: integer)

/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isValid"(arg0: integer): boolean
public "isValid"(): boolean
public "getTransparentPixel"(): integer
public "getRGBs"(arg0: (integer)[]): void
public "convertToIntDiscrete"(arg0: $Raster$Type, arg1: boolean): $BufferedImage
public "getValidPixels"(): $BigInteger
public "getTransparency"(): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$Type): boolean
public "getReds"(arg0: (byte)[]): void
public "getGreens"(arg0: (byte)[]): void
public "getBlues"(arg0: (byte)[]): void
public "getAlphas"(arg0: (byte)[]): void
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "getMapSize"(): integer
public "isCompatibleRaster"(arg0: $Raster$Type): boolean
public "getComponentSize"(): (integer)[]
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getRed"(arg0: integer): integer
public "getGreen"(arg0: integer): integer
public "getBlue"(arg0: integer): integer
public "getRGB"(arg0: integer): integer
public "getAlpha"(arg0: integer): integer
get "valid"(): boolean
get "transparentPixel"(): integer
get "validPixels"(): $BigInteger
get "transparency"(): integer
get "mapSize"(): integer
get "componentSize"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndexColorModel$Type = ($IndexColorModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndexColorModel_ = $IndexColorModel$Type;
}}
declare module "packages/java/awt/dnd/$DragSource" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$FlavorMap, $FlavorMap$Type} from "packages/java/awt/datatransfer/$FlavorMap"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DragGestureListener, $DragGestureListener$Type} from "packages/java/awt/dnd/$DragGestureListener"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DragGestureRecognizer, $DragGestureRecognizer$Type} from "packages/java/awt/dnd/$DragGestureRecognizer"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$DragGestureEvent, $DragGestureEvent$Type} from "packages/java/awt/dnd/$DragGestureEvent"
import {$DragSourceListener, $DragSourceListener$Type} from "packages/java/awt/dnd/$DragSourceListener"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"
import {$DragSourceMotionListener, $DragSourceMotionListener$Type} from "packages/java/awt/dnd/$DragSourceMotionListener"

export class $DragSource implements $Serializable {
static readonly "DefaultCopyDrop": $Cursor
static readonly "DefaultMoveDrop": $Cursor
static readonly "DefaultLinkDrop": $Cursor
static readonly "DefaultCopyNoDrop": $Cursor
static readonly "DefaultMoveNoDrop": $Cursor
static readonly "DefaultLinkNoDrop": $Cursor

constructor()

public "getListeners"<T extends $EventListener>(arg0: $Class$Type<(T)>): (T)[]
public "createDragGestureRecognizer"<T extends $DragGestureRecognizer>(arg0: $Class$Type<(T)>, arg1: $Component$Type, arg2: integer, arg3: $DragGestureListener$Type): T
public "getFlavorMap"(): $FlavorMap
public static "getDefaultDragSource"(): $DragSource
public static "isDragImageSupported"(): boolean
public "startDrag"(arg0: $DragGestureEvent$Type, arg1: $Cursor$Type, arg2: $Transferable$Type, arg3: $DragSourceListener$Type): void
public "startDrag"(arg0: $DragGestureEvent$Type, arg1: $Cursor$Type, arg2: $Transferable$Type, arg3: $DragSourceListener$Type, arg4: $FlavorMap$Type): void
public "startDrag"(arg0: $DragGestureEvent$Type, arg1: $Cursor$Type, arg2: $Image$Type, arg3: $Point$Type, arg4: $Transferable$Type, arg5: $DragSourceListener$Type, arg6: $FlavorMap$Type): void
public "startDrag"(arg0: $DragGestureEvent$Type, arg1: $Cursor$Type, arg2: $Image$Type, arg3: $Point$Type, arg4: $Transferable$Type, arg5: $DragSourceListener$Type): void
public "createDefaultDragGestureRecognizer"(arg0: $Component$Type, arg1: integer, arg2: $DragGestureListener$Type): $DragGestureRecognizer
public "addDragSourceListener"(arg0: $DragSourceListener$Type): void
public "removeDragSourceListener"(arg0: $DragSourceListener$Type): void
public "getDragSourceListeners"(): ($DragSourceListener)[]
public "addDragSourceMotionListener"(arg0: $DragSourceMotionListener$Type): void
public "removeDragSourceMotionListener"(arg0: $DragSourceMotionListener$Type): void
public "getDragSourceMotionListeners"(): ($DragSourceMotionListener)[]
public static "getDragThreshold"(): integer
get "flavorMap"(): $FlavorMap
get "defaultDragSource"(): $DragSource
get "dragImageSupported"(): boolean
get "dragSourceListeners"(): ($DragSourceListener)[]
get "dragSourceMotionListeners"(): ($DragSourceMotionListener)[]
get "dragThreshold"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSource$Type = ($DragSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSource_ = $DragSource$Type;
}}
declare module "packages/java/awt/image/renderable/$RenderContext" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $RenderContext implements $Cloneable {

constructor(arg0: $AffineTransform$Type, arg1: $Shape$Type)
constructor(arg0: $AffineTransform$Type, arg1: $RenderingHints$Type)
constructor(arg0: $AffineTransform$Type)
constructor(arg0: $AffineTransform$Type, arg1: $Shape$Type, arg2: $RenderingHints$Type)

public "clone"(): any
public "getTransform"(): $AffineTransform
public "setTransform"(arg0: $AffineTransform$Type): void
public "setRenderingHints"(arg0: $RenderingHints$Type): void
public "getRenderingHints"(): $RenderingHints
public "preConcatenateTransform"(arg0: $AffineTransform$Type): void
/**
 * 
 * @deprecated
 */
public "preConcetenateTransform"(arg0: $AffineTransform$Type): void
public "concatenateTransform"(arg0: $AffineTransform$Type): void
/**
 * 
 * @deprecated
 */
public "concetenateTransform"(arg0: $AffineTransform$Type): void
public "setAreaOfInterest"(arg0: $Shape$Type): void
public "getAreaOfInterest"(): $Shape
get "transform"(): $AffineTransform
set "transform"(value: $AffineTransform$Type)
set "renderingHints"(value: $RenderingHints$Type)
get "renderingHints"(): $RenderingHints
set "areaOfInterest"(value: $Shape$Type)
get "areaOfInterest"(): $Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$Type = ($RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext_ = $RenderContext$Type;
}}
declare module "packages/java/awt/$EventQueue" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$SecondaryLoop, $SecondaryLoop$Type} from "packages/java/awt/$SecondaryLoop"

export class $EventQueue {

constructor()

public "push"(arg0: $EventQueue$Type): void
public static "isDispatchThread"(): boolean
public "getNextEvent"(): $AWTEvent
public "createSecondaryLoop"(): $SecondaryLoop
public static "invokeAndWait"(arg0: $Runnable$Type): void
public static "getMostRecentEventTime"(): long
public static "invokeLater"(arg0: $Runnable$Type): void
public static "getCurrentEvent"(): $AWTEvent
public "postEvent"(arg0: $AWTEvent$Type): void
public "peekEvent"(): $AWTEvent
public "peekEvent"(arg0: integer): $AWTEvent
get "dispatchThread"(): boolean
get "nextEvent"(): $AWTEvent
get "mostRecentEventTime"(): long
get "currentEvent"(): $AWTEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventQueue$Type = ($EventQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventQueue_ = $EventQueue$Type;
}}
declare module "packages/java/awt/dnd/$DropTargetEvent" {
import {$DropTargetContext, $DropTargetContext$Type} from "packages/java/awt/dnd/$DropTargetContext"
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"

export class $DropTargetEvent extends $EventObject {

constructor(arg0: $DropTargetContext$Type)

public "getDropTargetContext"(): $DropTargetContext
get "dropTargetContext"(): $DropTargetContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTargetEvent$Type = ($DropTargetEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTargetEvent_ = $DropTargetEvent$Type;
}}
declare module "packages/java/awt/$AttributeValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AttributeValue {


public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeValue$Type = ($AttributeValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeValue_ = $AttributeValue$Type;
}}
declare module "packages/java/awt/$Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Transparency {

 "getTransparency"(): integer

(): integer
}

export namespace $Transparency {
const OPAQUE: integer
const BITMASK: integer
const TRANSLUCENT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transparency$Type = ($Transparency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transparency_ = $Transparency$Type;
}}
declare module "packages/java/awt/$Graphics2D" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$GlyphVector, $GlyphVector$Type} from "packages/java/awt/font/$GlyphVector"
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$BufferedImageOp, $BufferedImageOp$Type} from "packages/java/awt/image/$BufferedImageOp"
import {$Stroke, $Stroke$Type} from "packages/java/awt/$Stroke"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$RenderedImage, $RenderedImage$Type} from "packages/java/awt/image/$RenderedImage"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Composite, $Composite$Type} from "packages/java/awt/$Composite"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$RenderableImage, $RenderableImage$Type} from "packages/java/awt/image/renderable/$RenderableImage"
import {$Paint, $Paint$Type} from "packages/java/awt/$Paint"
import {$FontRenderContext, $FontRenderContext$Type} from "packages/java/awt/font/$FontRenderContext"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"
import {$RenderingHints$Key, $RenderingHints$Key$Type} from "packages/java/awt/$RenderingHints$Key"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Graphics2D extends $Graphics {


public "scale"(arg0: double, arg1: double): void
public "transform"(arg0: $AffineTransform$Type): void
public "fill"(arg0: $Shape$Type): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "hit"(arg0: $Rectangle$Type, arg1: $Shape$Type, arg2: boolean): boolean
public "drawString"(arg0: $AttributedCharacterIterator$Type, arg1: float, arg2: float): void
public "drawString"(arg0: $AttributedCharacterIterator$Type, arg1: integer, arg2: integer): void
public "drawString"(arg0: string, arg1: float, arg2: float): void
public "drawString"(arg0: string, arg1: integer, arg2: integer): void
public "setBackground"(arg0: $Color$Type): void
public "setRenderingHint"(arg0: $RenderingHints$Key$Type, arg1: any): void
public "drawImage"(arg0: $Image$Type, arg1: $AffineTransform$Type, arg2: $ImageObserver$Type): boolean
public "drawImage"(arg0: $BufferedImage$Type, arg1: $BufferedImageOp$Type, arg2: integer, arg3: integer): void
public "getBackground"(): $Color
public "draw"(arg0: $Shape$Type): void
public "getTransform"(): $AffineTransform
public "translate"(arg0: double, arg1: double): void
public "translate"(arg0: integer, arg1: integer): void
public "clip"(arg0: $Shape$Type): void
public "shear"(arg0: double, arg1: double): void
public "setTransform"(arg0: $AffineTransform$Type): void
public "getComposite"(): $Composite
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "getPaint"(): $Paint
public "setPaint"(arg0: $Paint$Type): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "drawRenderedImage"(arg0: $RenderedImage$Type, arg1: $AffineTransform$Type): void
public "drawRenderableImage"(arg0: $RenderableImage$Type, arg1: $AffineTransform$Type): void
public "drawGlyphVector"(arg0: $GlyphVector$Type, arg1: float, arg2: float): void
public "getDeviceConfiguration"(): $GraphicsConfiguration
public "setComposite"(arg0: $Composite$Type): void
public "setStroke"(arg0: $Stroke$Type): void
public "getRenderingHint"(arg0: $RenderingHints$Key$Type): any
public "setRenderingHints"(arg0: $Map$Type<(any), (any)>): void
public "addRenderingHints"(arg0: $Map$Type<(any), (any)>): void
public "getRenderingHints"(): $RenderingHints
public "getStroke"(): $Stroke
public "getFontRenderContext"(): $FontRenderContext
set "background"(value: $Color$Type)
get "background"(): $Color
get "composite"(): $Composite
get "paint"(): $Paint
set "paint"(value: $Paint$Type)
get "deviceConfiguration"(): $GraphicsConfiguration
set "composite"(value: $Composite$Type)
set "stroke"(value: $Stroke$Type)
set "renderingHints"(value: $Map$Type<(any), (any)>)
get "renderingHints"(): $RenderingHints
get "stroke"(): $Stroke
get "fontRenderContext"(): $FontRenderContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics2D$Type = ($Graphics2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graphics2D_ = $Graphics2D$Type;
}}
declare module "packages/java/awt/$GraphicsDevice$WindowTranslucency" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GraphicsDevice$WindowTranslucency extends $Enum<($GraphicsDevice$WindowTranslucency)> {
static readonly "PERPIXEL_TRANSPARENT": $GraphicsDevice$WindowTranslucency
static readonly "TRANSLUCENT": $GraphicsDevice$WindowTranslucency
static readonly "PERPIXEL_TRANSLUCENT": $GraphicsDevice$WindowTranslucency


public static "values"(): ($GraphicsDevice$WindowTranslucency)[]
public static "valueOf"(arg0: string): $GraphicsDevice$WindowTranslucency
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsDevice$WindowTranslucency$Type = (("perpixel_transparent") | ("translucent") | ("perpixel_translucent")) | ($GraphicsDevice$WindowTranslucency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsDevice$WindowTranslucency_ = $GraphicsDevice$WindowTranslucency$Type;
}}
declare module "packages/java/awt/event/$WindowFocusListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$WindowEvent, $WindowEvent$Type} from "packages/java/awt/event/$WindowEvent"

export interface $WindowFocusListener extends $EventListener {

 "windowGainedFocus"(arg0: $WindowEvent$Type): void
 "windowLostFocus"(arg0: $WindowEvent$Type): void
}

export namespace $WindowFocusListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowFocusListener$Type = ($WindowFocusListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowFocusListener_ = $WindowFocusListener$Type;
}}
declare module "packages/java/awt/dnd/$DropTargetDragEvent" {
import {$DropTargetContext, $DropTargetContext$Type} from "packages/java/awt/dnd/$DropTargetContext"
import {$DataFlavor, $DataFlavor$Type} from "packages/java/awt/datatransfer/$DataFlavor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DropTargetEvent, $DropTargetEvent$Type} from "packages/java/awt/dnd/$DropTargetEvent"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export class $DropTargetDragEvent extends $DropTargetEvent {

constructor(arg0: $DropTargetContext$Type, arg1: $Point$Type, arg2: integer, arg3: integer)

public "getLocation"(): $Point
public "isDataFlavorSupported"(arg0: $DataFlavor$Type): boolean
public "getSourceActions"(): integer
public "getTransferable"(): $Transferable
public "getDropAction"(): integer
public "getCurrentDataFlavors"(): ($DataFlavor)[]
public "getCurrentDataFlavorsAsList"(): $List<($DataFlavor)>
public "acceptDrag"(arg0: integer): void
public "rejectDrag"(): void
get "location"(): $Point
get "sourceActions"(): integer
get "transferable"(): $Transferable
get "dropAction"(): integer
get "currentDataFlavors"(): ($DataFlavor)[]
get "currentDataFlavorsAsList"(): $List<($DataFlavor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTargetDragEvent$Type = ($DropTargetDragEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTargetDragEvent_ = $DropTargetDragEvent$Type;
}}
declare module "packages/java/awt/$PageAttributes$PrintQualityType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $PageAttributes$PrintQualityType extends $AttributeValue {
static readonly "HIGH": $PageAttributes$PrintQualityType
static readonly "NORMAL": $PageAttributes$PrintQualityType
static readonly "DRAFT": $PageAttributes$PrintQualityType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$PrintQualityType$Type = ($PageAttributes$PrintQualityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes$PrintQualityType_ = $PageAttributes$PrintQualityType$Type;
}}
declare module "packages/java/awt/$DisplayMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DisplayMode {
static readonly "BIT_DEPTH_MULTI": integer
static readonly "REFRESH_RATE_UNKNOWN": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: $DisplayMode$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRefreshRate"(): integer
public "getHeight"(): integer
public "getWidth"(): integer
public "getBitDepth"(): integer
get "refreshRate"(): integer
get "height"(): integer
get "width"(): integer
get "bitDepth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayMode$Type = ($DisplayMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayMode_ = $DisplayMode$Type;
}}
declare module "packages/java/awt/event/$FocusEvent" {
import {$FocusEvent$Cause, $FocusEvent$Cause$Type} from "packages/java/awt/event/$FocusEvent$Cause"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$ComponentEvent, $ComponentEvent$Type} from "packages/java/awt/event/$ComponentEvent"

export class $FocusEvent extends $ComponentEvent {
static readonly "FOCUS_FIRST": integer
static readonly "FOCUS_LAST": integer
static readonly "FOCUS_GAINED": integer
static readonly "FOCUS_LOST": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer)
constructor(arg0: $Component$Type, arg1: integer, arg2: boolean)
constructor(arg0: $Component$Type, arg1: integer, arg2: boolean, arg3: $Component$Type, arg4: $FocusEvent$Cause$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: boolean, arg3: $Component$Type)

public "getCause"(): $FocusEvent$Cause
public "paramString"(): string
public "isTemporary"(): boolean
public "getOppositeComponent"(): $Component
get "cause"(): $FocusEvent$Cause
get "temporary"(): boolean
get "oppositeComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusEvent$Type = ($FocusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusEvent_ = $FocusEvent$Type;
}}
declare module "packages/java/awt/$MenuBar" {
import {$MenuShortcut, $MenuShortcut$Type} from "packages/java/awt/$MenuShortcut"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$Accessible, $Accessible$Type} from "packages/javax/accessibility/$Accessible"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Menu, $Menu$Type} from "packages/java/awt/$Menu"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$MenuItem, $MenuItem$Type} from "packages/java/awt/$MenuItem"

export class $MenuBar extends $MenuComponent implements $MenuContainer, $Accessible {

constructor()

public "add"(arg0: $Menu$Type): $Menu
public "remove"(arg0: $MenuComponent$Type): void
public "remove"(arg0: integer): void
public "removeNotify"(): void
public "addNotify"(): void
public "getAccessibleContext"(): $AccessibleContext
public "getMenu"(arg0: integer): $Menu
public "getMenuCount"(): integer
public "getHelpMenu"(): $Menu
public "setHelpMenu"(arg0: $Menu$Type): void
/**
 * 
 * @deprecated
 */
public "countMenus"(): integer
public "getShortcutMenuItem"(arg0: $MenuShortcut$Type): $MenuItem
public "shortcuts"(): $Enumeration<($MenuShortcut)>
public "deleteShortcut"(arg0: $MenuShortcut$Type): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "getFont"(): $Font
get "accessibleContext"(): $AccessibleContext
get "menuCount"(): integer
get "helpMenu"(): $Menu
set "helpMenu"(value: $Menu$Type)
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBar$Type = ($MenuBar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBar_ = $MenuBar$Type;
}}
declare module "packages/java/awt/$Window" {
import {$Dialog$ModalExclusionType, $Dialog$ModalExclusionType$Type} from "packages/java/awt/$Dialog$ModalExclusionType"
import {$AWTKeyStroke, $AWTKeyStroke$Type} from "packages/java/awt/$AWTKeyStroke"
import {$WindowListener, $WindowListener$Type} from "packages/java/awt/event/$WindowListener"
import {$Accessible, $Accessible$Type} from "packages/javax/accessibility/$Accessible"
import {$WindowStateListener, $WindowStateListener$Type} from "packages/java/awt/event/$WindowStateListener"
import {$BufferCapabilities, $BufferCapabilities$Type} from "packages/java/awt/$BufferCapabilities"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$BufferStrategy, $BufferStrategy$Type} from "packages/java/awt/image/$BufferStrategy"
import {$WindowFocusListener, $WindowFocusListener$Type} from "packages/java/awt/event/$WindowFocusListener"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$Window$Type, $Window$Type$Type} from "packages/java/awt/$Window$Type"
import {$InputContext, $InputContext$Type} from "packages/java/awt/im/$InputContext"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$PropertyChangeListener, $PropertyChangeListener$Type} from "packages/java/beans/$PropertyChangeListener"
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$ResourceBundle, $ResourceBundle$Type} from "packages/java/util/$ResourceBundle"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Frame, $Frame$Type} from "packages/java/awt/$Frame"
import {$Toolkit, $Toolkit$Type} from "packages/java/awt/$Toolkit"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"

export class $Window extends $Container implements $Accessible {
static readonly "TOP_ALIGNMENT": float
static readonly "CENTER_ALIGNMENT": float
static readonly "BOTTOM_ALIGNMENT": float
static readonly "LEFT_ALIGNMENT": float
static readonly "RIGHT_ALIGNMENT": float

constructor(arg0: $Frame$Type)
constructor(arg0: $Window$Type)
constructor(arg0: $Window$Type, arg1: $GraphicsConfiguration$Type)

public "getShape"(): $Shape
public "setType"(arg0: $Window$Type$Type): void
public "pack"(): void
public "getType"(): $Window$Type
public "isOpaque"(): boolean
public "isActive"(): boolean
public "getOwner"(): $Window
public "getLocale"(): $Locale
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "dispose"(): void
public "isAlwaysOnTop"(): boolean
public "removeNotify"(): void
public "isFocusCycleRoot"(): boolean
public "addNotify"(): void
public "getFocusOwner"(): $Component
public "isValidateRoot"(): boolean
public "isShowing"(): boolean
public "getMostRecentFocusOwner"(): $Component
public "getFocusTraversalKeys"(arg0: integer): $Set<($AWTKeyStroke)>
public "getFocusCycleRootAncestor"(): $Container
public "setFocusCycleRoot"(arg0: boolean): void
public "getAccessibleContext"(): $AccessibleContext
public "setBounds"(arg0: $Rectangle$Type): void
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setShape"(arg0: $Shape$Type): void
/**
 * 
 * @deprecated
 */
public "hide"(): void
public "setBackground"(arg0: $Color$Type): void
public "setModalExclusionType"(arg0: $Dialog$ModalExclusionType$Type): void
public "getModalExclusionType"(): $Dialog$ModalExclusionType
public "getOpacity"(): float
public "getListeners"<T extends $EventListener>(arg0: $Class$Type<(T)>): (T)[]
public "isFocused"(): boolean
public "addWindowListener"(arg0: $WindowListener$Type): void
public "addWindowFocusListener"(arg0: $WindowFocusListener$Type): void
public "setAlwaysOnTop"(arg0: boolean): void
public "getToolkit"(): $Toolkit
public "getInputContext"(): $InputContext
public "getBackground"(): $Color
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setMinimumSize"(arg0: $Dimension$Type): void
public "createBufferStrategy"(arg0: integer): void
public "createBufferStrategy"(arg0: integer, arg1: $BufferCapabilities$Type): void
public "getBufferStrategy"(): $BufferStrategy
public "isFocusableWindow"(): boolean
public "isAlwaysOnTopSupported"(): boolean
public "setOpacity"(arg0: float): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: integer, arg1: integer): void
public "addPropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
public "addPropertyChangeListener"(arg0: $PropertyChangeListener$Type): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "setLocationRelativeTo"(arg0: $Component$Type): void
public "setVisible"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "show"(): void
public "paint"(arg0: $Graphics$Type): void
public "setCursor"(arg0: $Cursor$Type): void
public "setLocationByPlatform"(arg0: boolean): void
public "getIconImages"(): $List<($Image)>
public "setIconImages"(arg0: $List$Type<(any)>): void
public "setIconImage"(arg0: $Image$Type): void
public "toBack"(): void
public "getWarningString"(): string
public "getOwnedWindows"(): ($Window)[]
public static "getWindows"(): ($Window)[]
public static "getOwnerlessWindows"(): ($Window)[]
public "addWindowStateListener"(arg0: $WindowStateListener$Type): void
public "removeWindowListener"(arg0: $WindowListener$Type): void
public "removeWindowStateListener"(arg0: $WindowStateListener$Type): void
public "removeWindowFocusListener"(arg0: $WindowFocusListener$Type): void
public "getWindowListeners"(): ($WindowListener)[]
public "getWindowFocusListeners"(): ($WindowFocusListener)[]
public "getWindowStateListeners"(): ($WindowStateListener)[]
public "getFocusableWindowState"(): boolean
public "setFocusableWindowState"(arg0: boolean): void
public "setAutoRequestFocus"(arg0: boolean): void
public "isAutoRequestFocus"(): boolean
/**
 * 
 * @deprecated
 */
public "applyResourceBundle"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "applyResourceBundle"(arg0: $ResourceBundle$Type): void
public "isLocationByPlatform"(): boolean
public "toFront"(): void
get "shape"(): $Shape
set "type"(value: $Window$Type$Type)
get "type"(): $Window$Type
get "opaque"(): boolean
get "active"(): boolean
get "owner"(): $Window
get "locale"(): $Locale
set "size"(value: $Dimension$Type)
get "alwaysOnTop"(): boolean
get "focusCycleRoot"(): boolean
get "focusOwner"(): $Component
get "validateRoot"(): boolean
get "showing"(): boolean
get "mostRecentFocusOwner"(): $Component
get "focusCycleRootAncestor"(): $Container
set "focusCycleRoot"(value: boolean)
get "accessibleContext"(): $AccessibleContext
set "bounds"(value: $Rectangle$Type)
set "shape"(value: $Shape$Type)
set "background"(value: $Color$Type)
set "modalExclusionType"(value: $Dialog$ModalExclusionType$Type)
get "modalExclusionType"(): $Dialog$ModalExclusionType
get "opacity"(): float
get "focused"(): boolean
set "alwaysOnTop"(value: boolean)
get "toolkit"(): $Toolkit
get "inputContext"(): $InputContext
get "background"(): $Color
set "minimumSize"(value: $Dimension$Type)
get "bufferStrategy"(): $BufferStrategy
get "focusableWindow"(): boolean
get "alwaysOnTopSupported"(): boolean
set "opacity"(value: float)
set "location"(value: $Point$Type)
set "locationRelativeTo"(value: $Component$Type)
set "visible"(value: boolean)
set "cursor"(value: $Cursor$Type)
set "locationByPlatform"(value: boolean)
get "iconImages"(): $List<($Image)>
set "iconImages"(value: $List$Type<(any)>)
set "iconImage"(value: $Image$Type)
get "warningString"(): string
get "ownedWindows"(): ($Window)[]
get "windows"(): ($Window)[]
get "ownerlessWindows"(): ($Window)[]
get "windowListeners"(): ($WindowListener)[]
get "windowFocusListeners"(): ($WindowFocusListener)[]
get "windowStateListeners"(): ($WindowStateListener)[]
get "focusableWindowState"(): boolean
set "focusableWindowState"(value: boolean)
set "autoRequestFocus"(value: boolean)
get "autoRequestFocus"(): boolean
get "locationByPlatform"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$Type = ($Window);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Window_ = $Window$Type;
}}
declare module "packages/java/awt/$LayoutManager" {
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export interface $LayoutManager {

 "removeLayoutComponent"(arg0: $Component$Type): void
 "addLayoutComponent"(arg0: string, arg1: $Component$Type): void
 "layoutContainer"(arg0: $Container$Type): void
 "preferredLayoutSize"(arg0: $Container$Type): $Dimension
 "minimumLayoutSize"(arg0: $Container$Type): $Dimension
}

export namespace $LayoutManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayoutManager$Type = ($LayoutManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayoutManager_ = $LayoutManager$Type;
}}
declare module "packages/java/awt/event/$ComponentListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$ComponentEvent, $ComponentEvent$Type} from "packages/java/awt/event/$ComponentEvent"

export interface $ComponentListener extends $EventListener {

 "componentResized"(arg0: $ComponentEvent$Type): void
 "componentMoved"(arg0: $ComponentEvent$Type): void
 "componentShown"(arg0: $ComponentEvent$Type): void
 "componentHidden"(arg0: $ComponentEvent$Type): void
}

export namespace $ComponentListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentListener$Type = ($ComponentListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentListener_ = $ComponentListener$Type;
}}
declare module "packages/java/awt/$PageAttributes$ColorType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $PageAttributes$ColorType extends $AttributeValue {
static readonly "COLOR": $PageAttributes$ColorType
static readonly "MONOCHROME": $PageAttributes$ColorType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$ColorType$Type = ($PageAttributes$ColorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes$ColorType_ = $PageAttributes$ColorType$Type;
}}
declare module "packages/java/awt/$FocusTraversalPolicy" {
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Window, $Window$Type} from "packages/java/awt/$Window"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $FocusTraversalPolicy {


public "getDefaultComponent"(arg0: $Container$Type): $Component
public "getComponentAfter"(arg0: $Container$Type, arg1: $Component$Type): $Component
public "getComponentBefore"(arg0: $Container$Type, arg1: $Component$Type): $Component
public "getInitialComponent"(arg0: $Window$Type): $Component
public "getFirstComponent"(arg0: $Container$Type): $Component
public "getLastComponent"(arg0: $Container$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusTraversalPolicy$Type = ($FocusTraversalPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusTraversalPolicy_ = $FocusTraversalPolicy$Type;
}}
declare module "packages/java/awt/image/$BufferStrategy" {
import {$BufferCapabilities, $BufferCapabilities$Type} from "packages/java/awt/$BufferCapabilities"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"

export class $BufferStrategy {


public "dispose"(): void
public "getCapabilities"(): $BufferCapabilities
public "show"(): void
public "getDrawGraphics"(): $Graphics
public "contentsRestored"(): boolean
public "contentsLost"(): boolean
get "capabilities"(): $BufferCapabilities
get "drawGraphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferStrategy$Type = ($BufferStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferStrategy_ = $BufferStrategy$Type;
}}
declare module "packages/java/awt/image/$ImageConsumer" {
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export interface $ImageConsumer {

 "setProperties"(arg0: $Hashtable$Type<(any), (any)>): void
 "imageComplete"(arg0: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$Type, arg5: (integer)[], arg6: integer, arg7: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$Type, arg5: (byte)[], arg6: integer, arg7: integer): void
 "setColorModel"(arg0: $ColorModel$Type): void
 "setDimensions"(arg0: integer, arg1: integer): void
 "setHints"(arg0: integer): void
}

export namespace $ImageConsumer {
const RANDOMPIXELORDER: integer
const TOPDOWNLEFTRIGHT: integer
const COMPLETESCANLINES: integer
const SINGLEPASS: integer
const SINGLEFRAME: integer
const IMAGEERROR: integer
const SINGLEFRAMEDONE: integer
const STATICIMAGEDONE: integer
const IMAGEABORTED: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageConsumer$Type = ($ImageConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageConsumer_ = $ImageConsumer$Type;
}}
declare module "packages/java/awt/image/$ImageObserver" {
import {$Image, $Image$Type} from "packages/java/awt/$Image"

export interface $ImageObserver {

 "imageUpdate"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean

(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
}

export namespace $ImageObserver {
const WIDTH: integer
const HEIGHT: integer
const PROPERTIES: integer
const SOMEBITS: integer
const FRAMEBITS: integer
const ALLBITS: integer
const ERROR: integer
const ABORT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageObserver$Type = ($ImageObserver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageObserver_ = $ImageObserver$Type;
}}
declare module "packages/java/awt/$GraphicsDevice" {
import {$GraphicsDevice$WindowTranslucency, $GraphicsDevice$WindowTranslucency$Type} from "packages/java/awt/$GraphicsDevice$WindowTranslucency"
import {$GraphicsConfigTemplate, $GraphicsConfigTemplate$Type} from "packages/java/awt/$GraphicsConfigTemplate"
import {$Window, $Window$Type} from "packages/java/awt/$Window"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$DisplayMode, $DisplayMode$Type} from "packages/java/awt/$DisplayMode"

export class $GraphicsDevice {
static readonly "TYPE_RASTER_SCREEN": integer
static readonly "TYPE_PRINTER": integer
static readonly "TYPE_IMAGE_BUFFER": integer


public "getConfigurations"(): ($GraphicsConfiguration)[]
public "getType"(): integer
public "getIDstring"(): string
public "getDefaultConfiguration"(): $GraphicsConfiguration
public "isWindowTranslucencySupported"(arg0: $GraphicsDevice$WindowTranslucency$Type): boolean
public "getDisplayMode"(): $DisplayMode
public "setDisplayMode"(arg0: $DisplayMode$Type): void
public "getBestConfiguration"(arg0: $GraphicsConfigTemplate$Type): $GraphicsConfiguration
public "isFullScreenSupported"(): boolean
public "setFullScreenWindow"(arg0: $Window$Type): void
public "getFullScreenWindow"(): $Window
public "isDisplayChangeSupported"(): boolean
public "getDisplayModes"(): ($DisplayMode)[]
public "getAvailableAcceleratedMemory"(): integer
get "configurations"(): ($GraphicsConfiguration)[]
get "type"(): integer
get "iDstring"(): string
get "defaultConfiguration"(): $GraphicsConfiguration
get "displayMode"(): $DisplayMode
set "displayMode"(value: $DisplayMode$Type)
get "fullScreenSupported"(): boolean
set "fullScreenWindow"(value: $Window$Type)
get "fullScreenWindow"(): $Window
get "displayChangeSupported"(): boolean
get "displayModes"(): ($DisplayMode)[]
get "availableAcceleratedMemory"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsDevice$Type = ($GraphicsDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsDevice_ = $GraphicsDevice$Type;
}}
declare module "packages/java/awt/image/$ColorModel" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$ColorSpace, $ColorSpace$Type} from "packages/java/awt/color/$ColorSpace"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"

export class $ColorModel implements $Transparency {

constructor(arg0: integer)

/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getTransparency"(): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$Type): boolean
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "hasAlpha"(): boolean
public "isAlphaPremultiplied"(): boolean
public "isCompatibleRaster"(arg0: $Raster$Type): boolean
public static "getRGBdefault"(): $ColorModel
public "coerceData"(arg0: $WritableRaster$Type, arg1: boolean): $ColorModel
public "getColorSpace"(): $ColorSpace
public "getComponentSize"(arg0: integer): integer
public "getComponentSize"(): (integer)[]
public "getPixelSize"(): integer
public "getNumComponents"(): integer
public "getAlphaRaster"(arg0: $WritableRaster$Type): $WritableRaster
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (float)[], arg1: integer, arg2: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getTransferType"(): integer
public "getNumColorComponents"(): integer
public "getUnnormalizedComponents"(arg0: (float)[], arg1: integer, arg2: (integer)[], arg3: integer): (integer)[]
public "getNormalizedComponents"(arg0: (integer)[], arg1: integer, arg2: (float)[], arg3: integer): (float)[]
public "getNormalizedComponents"(arg0: any, arg1: (float)[], arg2: integer): (float)[]
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getDataElement"(arg0: (float)[], arg1: integer): integer
public "getRed"(arg0: any): integer
public "getRed"(arg0: integer): integer
public "getGreen"(arg0: integer): integer
public "getGreen"(arg0: any): integer
public "getBlue"(arg0: any): integer
public "getBlue"(arg0: integer): integer
public "getRGB"(arg0: any): integer
public "getRGB"(arg0: integer): integer
public "getAlpha"(arg0: integer): integer
public "getAlpha"(arg0: any): integer
get "transparency"(): integer
get "alphaPremultiplied"(): boolean
get "rGBdefault"(): $ColorModel
get "colorSpace"(): $ColorSpace
get "componentSize"(): (integer)[]
get "pixelSize"(): integer
get "numComponents"(): integer
get "transferType"(): integer
get "numColorComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorModel$Type = ($ColorModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorModel_ = $ColorModel$Type;
}}
declare module "packages/java/awt/datatransfer/$ClipboardOwner" {
import {$Clipboard, $Clipboard$Type} from "packages/java/awt/datatransfer/$Clipboard"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export interface $ClipboardOwner {

 "lostOwnership"(arg0: $Clipboard$Type, arg1: $Transferable$Type): void

(arg0: $Clipboard$Type, arg1: $Transferable$Type): void
}

export namespace $ClipboardOwner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClipboardOwner$Type = ($ClipboardOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClipboardOwner_ = $ClipboardOwner$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceEvent" {
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DragSourceContext, $DragSourceContext$Type} from "packages/java/awt/dnd/$DragSourceContext"
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"

export class $DragSourceEvent extends $EventObject {

constructor(arg0: $DragSourceContext$Type)
constructor(arg0: $DragSourceContext$Type, arg1: integer, arg2: integer)

public "getY"(): integer
public "getLocation"(): $Point
public "getX"(): integer
public "getDragSourceContext"(): $DragSourceContext
get "y"(): integer
get "location"(): $Point
get "x"(): integer
get "dragSourceContext"(): $DragSourceContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceEvent$Type = ($DragSourceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceEvent_ = $DragSourceEvent$Type;
}}
declare module "packages/java/awt/event/$KeyListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$KeyEvent, $KeyEvent$Type} from "packages/java/awt/event/$KeyEvent"

export interface $KeyListener extends $EventListener {

 "keyTyped"(arg0: $KeyEvent$Type): void
 "keyReleased"(arg0: $KeyEvent$Type): void
 "keyPressed"(arg0: $KeyEvent$Type): void
}

export namespace $KeyListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyListener$Type = ($KeyListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyListener_ = $KeyListener$Type;
}}
declare module "packages/java/awt/image/$BufferedImageOp" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"

export interface $BufferedImageOp {

 "filter"(arg0: $BufferedImage$Type, arg1: $BufferedImage$Type): $BufferedImage
 "getBounds2D"(arg0: $BufferedImage$Type): $Rectangle2D
 "getRenderingHints"(): $RenderingHints
 "createCompatibleDestImage"(arg0: $BufferedImage$Type, arg1: $ColorModel$Type): $BufferedImage
 "getPoint2D"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
}

export namespace $BufferedImageOp {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImageOp$Type = ($BufferedImageOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedImageOp_ = $BufferedImageOp$Type;
}}
declare module "packages/java/awt/$AWTKeyStroke" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$KeyEvent, $KeyEvent$Type} from "packages/java/awt/event/$KeyEvent"

export class $AWTKeyStroke implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getKeyChar"(): character
public "getKeyCode"(): integer
public static "getAWTKeyStroke"(arg0: integer, arg1: integer, arg2: boolean): $AWTKeyStroke
public static "getAWTKeyStroke"(arg0: integer, arg1: integer): $AWTKeyStroke
public static "getAWTKeyStroke"(arg0: character, arg1: integer): $AWTKeyStroke
public static "getAWTKeyStroke"(arg0: character): $AWTKeyStroke
public static "getAWTKeyStroke"(arg0: string): $AWTKeyStroke
public static "getAWTKeyStrokeForEvent"(arg0: $KeyEvent$Type): $AWTKeyStroke
public "isOnKeyRelease"(): boolean
public "getKeyEventType"(): integer
get "modifiers"(): integer
get "keyChar"(): character
get "keyCode"(): integer
get "onKeyRelease"(): boolean
get "keyEventType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AWTKeyStroke$Type = ($AWTKeyStroke);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AWTKeyStroke_ = $AWTKeyStroke$Type;
}}
declare module "packages/java/awt/geom/$RectangularShape" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Dimension2D, $Dimension2D$Type} from "packages/java/awt/geom/$Dimension2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $RectangularShape implements $Shape, $Cloneable {


public "intersects"(arg0: $Rectangle2D$Type): boolean
public "getY"(): double
public "clone"(): any
public "isEmpty"(): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "getBounds"(): $Rectangle
public "setFrame"(arg0: $Point2D$Type, arg1: $Dimension2D$Type): void
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrame"(arg0: $Rectangle2D$Type): void
public "setFrameFromDiagonal"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "setFrameFromDiagonal"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromCenter"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromCenter"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "getHeight"(): double
public "getWidth"(): double
public "getMinX"(): double
public "getMaxY"(): double
public "getMinY"(): double
public "getMaxX"(): double
public "getCenterX"(): double
public "getCenterY"(): double
public "getFrame"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getX"(): double
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
get "y"(): double
get "empty"(): boolean
get "bounds"(): $Rectangle
set "frame"(value: $Rectangle2D$Type)
get "height"(): double
get "width"(): double
get "minX"(): double
get "maxY"(): double
get "minY"(): double
get "maxX"(): double
get "centerX"(): double
get "centerY"(): double
get "frame"(): $Rectangle2D
get "x"(): double
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RectangularShape$Type = ($RectangularShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RectangularShape_ = $RectangularShape$Type;
}}
declare module "packages/java/awt/$Polygon" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Polygon implements $Shape, $Serializable {
 "npoints": integer
 "xpoints": (integer)[]
 "ypoints": (integer)[]

constructor()
constructor(arg0: (integer)[], arg1: (integer)[], arg2: integer)

public "intersects"(arg0: $Rectangle2D$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "invalidate"(): void
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Point$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getBounds"(): $Rectangle
public "reset"(): void
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "translate"(arg0: integer, arg1: integer): void
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
/**
 * 
 * @deprecated
 */
public "getBoundingBox"(): $Rectangle
public "addPoint"(arg0: integer, arg1: integer): void
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
get "boundingBox"(): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Polygon$Type = ($Polygon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Polygon_ = $Polygon$Type;
}}
declare module "packages/java/awt/datatransfer/$FlavorMap" {
import {$DataFlavor, $DataFlavor$Type} from "packages/java/awt/datatransfer/$DataFlavor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FlavorMap {

 "getNativesForFlavors"(arg0: ($DataFlavor$Type)[]): $Map<($DataFlavor), (string)>
 "getFlavorsForNatives"(arg0: (string)[]): $Map<(string), ($DataFlavor)>
}

export namespace $FlavorMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlavorMap$Type = ($FlavorMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlavorMap_ = $FlavorMap$Type;
}}
declare module "packages/java/awt/$Component" {
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$PopupMenu, $PopupMenu$Type} from "packages/java/awt/$PopupMenu"
import {$ImageProducer, $ImageProducer$Type} from "packages/java/awt/image/$ImageProducer"
import {$InputMethodListener, $InputMethodListener$Type} from "packages/java/awt/event/$InputMethodListener"
import {$ComponentListener, $ComponentListener$Type} from "packages/java/awt/event/$ComponentListener"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$InputContext, $InputContext$Type} from "packages/java/awt/im/$InputContext"
import {$HierarchyListener, $HierarchyListener$Type} from "packages/java/awt/event/$HierarchyListener"
import {$MouseListener, $MouseListener$Type} from "packages/java/awt/event/$MouseListener"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$ComponentOrientation, $ComponentOrientation$Type} from "packages/java/awt/$ComponentOrientation"
import {$FocusListener, $FocusListener$Type} from "packages/java/awt/event/$FocusListener"
import {$HierarchyBoundsListener, $HierarchyBoundsListener$Type} from "packages/java/awt/event/$HierarchyBoundsListener"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$FocusEvent$Cause, $FocusEvent$Cause$Type} from "packages/java/awt/event/$FocusEvent$Cause"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Toolkit, $Toolkit$Type} from "packages/java/awt/$Toolkit"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$InputMethodRequests, $InputMethodRequests$Type} from "packages/java/awt/im/$InputMethodRequests"
import {$KeyListener, $KeyListener$Type} from "packages/java/awt/event/$KeyListener"
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$MouseMotionListener, $MouseMotionListener$Type} from "packages/java/awt/event/$MouseMotionListener"
import {$AWTKeyStroke, $AWTKeyStroke$Type} from "packages/java/awt/$AWTKeyStroke"
import {$Component$BaselineResizeBehavior, $Component$BaselineResizeBehavior$Type} from "packages/java/awt/$Component$BaselineResizeBehavior"
import {$MouseWheelListener, $MouseWheelListener$Type} from "packages/java/awt/event/$MouseWheelListener"
import {$DropTarget, $DropTarget$Type} from "packages/java/awt/dnd/$DropTarget"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$PropertyChangeListener, $PropertyChangeListener$Type} from "packages/java/beans/$PropertyChangeListener"
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FontMetrics, $FontMetrics$Type} from "packages/java/awt/$FontMetrics"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$VolatileImage, $VolatileImage$Type} from "packages/java/awt/image/$VolatileImage"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$ImageCapabilities, $ImageCapabilities$Type} from "packages/java/awt/$ImageCapabilities"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $Component implements $ImageObserver, $MenuContainer, $Serializable {
static readonly "TOP_ALIGNMENT": float
static readonly "CENTER_ALIGNMENT": float
static readonly "BOTTOM_ALIGNMENT": float
static readonly "LEFT_ALIGNMENT": float
static readonly "RIGHT_ALIGNMENT": float


public "invalidate"(): void
public "getY"(): integer
public "getName"(): string
public "add"(arg0: $PopupMenu$Type): void
public "remove"(arg0: $MenuComponent$Type): void
public "toString"(): string
public "update"(arg0: $Graphics$Type): void
public "contains"(arg0: $Point$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "size"(): $Dimension
public "getBounds"(): $Rectangle
public "getBounds"(arg0: $Rectangle$Type): $Rectangle
public "validate"(): void
public "getLocation"(): $Point
public "getLocation"(arg0: $Point$Type): $Point
public "getParent"(): $Container
public "setName"(arg0: string): void
public "list"(arg0: $PrintStream$Type, arg1: integer): void
public "list"(): void
public "list"(arg0: $PrintStream$Type): void
public "list"(arg0: $PrintWriter$Type): void
public "list"(arg0: $PrintWriter$Type, arg1: integer): void
public "print"(arg0: $Graphics$Type): void
/**
 * 
 * @deprecated
 */
public "location"(): $Point
public "getSize"(arg0: $Dimension$Type): $Dimension
public "getSize"(): $Dimension
public "isOpaque"(): boolean
/**
 * 
 * @deprecated
 */
public "resize"(arg0: $Dimension$Type): void
/**
 * 
 * @deprecated
 */
public "resize"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "action"(arg0: $Event$Type, arg1: any): boolean
/**
 * 
 * @deprecated
 */
public "move"(arg0: integer, arg1: integer): void
public "getLocale"(): $Locale
public "setLocale"(arg0: $Locale$Type): void
public "isValid"(): boolean
/**
 * 
 * @deprecated
 */
public "bounds"(): $Rectangle
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "enable"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "enable"(): void
public "getTreeLock"(): any
public "getGraphicsConfiguration"(): $GraphicsConfiguration
public "removeNotify"(): void
public "isDisplayable"(): boolean
public "isFocusCycleRoot"(arg0: $Container$Type): boolean
public "isLightweight"(): boolean
public "addNotify"(): void
public "isFocusOwner"(): boolean
public "transferFocus"(): void
public "doLayout"(): void
public "setFont"(arg0: $Font$Type): void
/**
 * 
 * @deprecated
 */
public "preferredSize"(): $Dimension
public "isPreferredSizeSet"(): boolean
public "getMinimumSize"(): $Dimension
public "isMinimumSizeSet"(): boolean
public "getMaximumSize"(): $Dimension
public "isMaximumSizeSet"(): boolean
public "getAlignmentX"(): float
public "getAlignmentY"(): float
public "isShowing"(): boolean
/**
 * 
 * @deprecated
 */
public "deliverEvent"(arg0: $Event$Type): void
public "getComponentAt"(arg0: $Point$Type): $Component
public "getComponentAt"(arg0: integer, arg1: integer): $Component
public "getMousePosition"(): $Point
public "transferFocusBackward"(): void
public "setFocusTraversalKeys"(arg0: integer, arg1: $Set$Type<(any)>): void
public "getFocusTraversalKeys"(arg0: integer): $Set<($AWTKeyStroke)>
public "areFocusTraversalKeysSet"(arg0: integer): boolean
public "getFocusCycleRootAncestor"(): $Container
public "firePropertyChange"(arg0: string, arg1: float, arg2: float): void
public "firePropertyChange"(arg0: string, arg1: long, arg2: long): void
public "firePropertyChange"(arg0: string, arg1: character, arg2: character): void
public "firePropertyChange"(arg0: string, arg1: short, arg2: short): void
public "firePropertyChange"(arg0: string, arg1: byte, arg2: byte): void
public "firePropertyChange"(arg0: string, arg1: double, arg2: double): void
public "requestFocus"(arg0: $FocusEvent$Cause$Type): void
public "requestFocus"(): void
public "applyComponentOrientation"(arg0: $ComponentOrientation$Type): void
public "getAccessibleContext"(): $AccessibleContext
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setBounds"(arg0: $Rectangle$Type): void
public "dispatchEvent"(arg0: $AWTEvent$Type): void
/**
 * 
 * @deprecated
 */
public "handleEvent"(arg0: $Event$Type): boolean
/**
 * 
 * @deprecated
 */
public "hide"(): void
public "setBackground"(arg0: $Color$Type): void
public "getListeners"<T extends $EventListener>(arg0: $Class$Type<(T)>): (T)[]
public "setFocusable"(arg0: boolean): void
public "getHeight"(): integer
public "getWidth"(): integer
public "getPreferredSize"(): $Dimension
public "isVisible"(): boolean
public "setDropTarget"(arg0: $DropTarget$Type): void
public "getDropTarget"(): $DropTarget
public "getToolkit"(): $Toolkit
public "getLocationOnScreen"(): $Point
public "isDoubleBuffered"(): boolean
public "enableInputMethods"(arg0: boolean): void
public "getInputContext"(): $InputContext
public "repaint"(): void
public "repaint"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "repaint"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "repaint"(arg0: long): void
public "getForeground"(): $Color
public "setForeground"(arg0: $Color$Type): void
public "isForegroundSet"(): boolean
public "getBackground"(): $Color
public "isBackgroundSet"(): boolean
public "isFontSet"(): boolean
public "getColorModel"(): $ColorModel
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setPreferredSize"(arg0: $Dimension$Type): void
public "setMinimumSize"(arg0: $Dimension$Type): void
public "setMaximumSize"(arg0: $Dimension$Type): void
public "getBaseline"(arg0: integer, arg1: integer): integer
public "getBaselineResizeBehavior"(): $Component$BaselineResizeBehavior
public "revalidate"(): void
public "getFontMetrics"(arg0: $Font$Type): $FontMetrics
public "isCursorSet"(): boolean
public "paintAll"(arg0: $Graphics$Type): void
public "printAll"(arg0: $Graphics$Type): void
public "imageUpdate"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "createImage"(arg0: integer, arg1: integer): $Image
public "createImage"(arg0: $ImageProducer$Type): $Image
public "createVolatileImage"(arg0: integer, arg1: integer): $VolatileImage
public "createVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$Type): $VolatileImage
public "checkImage"(arg0: $Image$Type, arg1: $ImageObserver$Type): integer
public "checkImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$Type): integer
public "setIgnoreRepaint"(arg0: boolean): void
public "getIgnoreRepaint"(): boolean
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "addComponentListener"(arg0: $ComponentListener$Type): void
public "removeComponentListener"(arg0: $ComponentListener$Type): void
public "getComponentListeners"(): ($ComponentListener)[]
public "addFocusListener"(arg0: $FocusListener$Type): void
public "removeFocusListener"(arg0: $FocusListener$Type): void
public "getFocusListeners"(): ($FocusListener)[]
public "addHierarchyListener"(arg0: $HierarchyListener$Type): void
public "removeHierarchyListener"(arg0: $HierarchyListener$Type): void
public "getHierarchyListeners"(): ($HierarchyListener)[]
public "addHierarchyBoundsListener"(arg0: $HierarchyBoundsListener$Type): void
public "removeHierarchyBoundsListener"(arg0: $HierarchyBoundsListener$Type): void
public "getHierarchyBoundsListeners"(): ($HierarchyBoundsListener)[]
public "addKeyListener"(arg0: $KeyListener$Type): void
public "removeKeyListener"(arg0: $KeyListener$Type): void
public "getKeyListeners"(): ($KeyListener)[]
public "addMouseListener"(arg0: $MouseListener$Type): void
public "removeMouseListener"(arg0: $MouseListener$Type): void
public "getMouseListeners"(): ($MouseListener)[]
public "addMouseMotionListener"(arg0: $MouseMotionListener$Type): void
public "removeMouseMotionListener"(arg0: $MouseMotionListener$Type): void
public "getMouseMotionListeners"(): ($MouseMotionListener)[]
public "addMouseWheelListener"(arg0: $MouseWheelListener$Type): void
public "removeMouseWheelListener"(arg0: $MouseWheelListener$Type): void
public "getMouseWheelListeners"(): ($MouseWheelListener)[]
public "addInputMethodListener"(arg0: $InputMethodListener$Type): void
public "removeInputMethodListener"(arg0: $InputMethodListener$Type): void
public "getInputMethodListeners"(): ($InputMethodListener)[]
public "getPropertyChangeListeners"(arg0: string): ($PropertyChangeListener)[]
public "getPropertyChangeListeners"(): ($PropertyChangeListener)[]
public "getInputMethodRequests"(): $InputMethodRequests
/**
 * 
 * @deprecated
 */
public "mouseEnter"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "mouseExit"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "mouseMove"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "mouseDown"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "mouseDrag"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "mouseUp"(arg0: $Event$Type, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "keyDown"(arg0: $Event$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "keyUp"(arg0: $Event$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "gotFocus"(arg0: $Event$Type, arg1: any): boolean
/**
 * 
 * @deprecated
 */
public "lostFocus"(arg0: $Event$Type, arg1: any): boolean
/**
 * 
 * @deprecated
 */
public "isFocusTraversable"(): boolean
public "setFocusTraversalKeysEnabled"(arg0: boolean): void
public "getFocusTraversalKeysEnabled"(): boolean
public "requestFocusInWindow"(arg0: $FocusEvent$Cause$Type): boolean
public "requestFocusInWindow"(): boolean
/**
 * 
 * @deprecated
 */
public "nextFocus"(): void
public "transferFocusUpCycle"(): void
public "hasFocus"(): boolean
public "setComponentOrientation"(arg0: $ComponentOrientation$Type): void
public "getComponentOrientation"(): $ComponentOrientation
public "setMixingCutoutShape"(arg0: $Shape$Type): void
/**
 * 
 * @deprecated
 */
public "disable"(): void
/**
 * 
 * @deprecated
 */
public "minimumSize"(): $Dimension
/**
 * 
 * @deprecated
 */
public "layout"(): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: integer, arg1: integer): void
public "removePropertyChangeListener"(arg0: $PropertyChangeListener$Type): void
public "removePropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
public "addPropertyChangeListener"(arg0: $PropertyChangeListener$Type): void
public "addPropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "prepareImage"(arg0: $Image$Type, arg1: $ImageObserver$Type): boolean
public "prepareImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$Type): boolean
public "getCursor"(): $Cursor
/**
 * 
 * @deprecated
 */
public "locate"(arg0: integer, arg1: integer): $Component
public "getGraphics"(): $Graphics
public "setVisible"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "show"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "show"(): void
public "paint"(arg0: $Graphics$Type): void
public "setEnabled"(arg0: boolean): void
public "getFont"(): $Font
public "getX"(): integer
public "setCursor"(arg0: $Cursor$Type): void
public "isFocusable"(): boolean
get "y"(): integer
get "name"(): string
get "parent"(): $Container
set "name"(value: string)
get "opaque"(): boolean
get "locale"(): $Locale
set "locale"(value: $Locale$Type)
get "valid"(): boolean
get "enabled"(): boolean
get "treeLock"(): any
get "graphicsConfiguration"(): $GraphicsConfiguration
get "displayable"(): boolean
get "lightweight"(): boolean
get "focusOwner"(): boolean
set "font"(value: $Font$Type)
get "preferredSizeSet"(): boolean
get "minimumSizeSet"(): boolean
get "maximumSize"(): $Dimension
get "maximumSizeSet"(): boolean
get "alignmentX"(): float
get "alignmentY"(): float
get "showing"(): boolean
get "mousePosition"(): $Point
get "focusCycleRootAncestor"(): $Container
get "accessibleContext"(): $AccessibleContext
set "background"(value: $Color$Type)
set "focusable"(value: boolean)
get "height"(): integer
get "width"(): integer
get "visible"(): boolean
set "dropTarget"(value: $DropTarget$Type)
get "dropTarget"(): $DropTarget
get "toolkit"(): $Toolkit
get "locationOnScreen"(): $Point
get "doubleBuffered"(): boolean
get "inputContext"(): $InputContext
get "foreground"(): $Color
set "foreground"(value: $Color$Type)
get "foregroundSet"(): boolean
get "background"(): $Color
get "backgroundSet"(): boolean
get "fontSet"(): boolean
get "colorModel"(): $ColorModel
set "maximumSize"(value: $Dimension$Type)
get "baselineResizeBehavior"(): $Component$BaselineResizeBehavior
get "cursorSet"(): boolean
set "ignoreRepaint"(value: boolean)
get "ignoreRepaint"(): boolean
get "componentListeners"(): ($ComponentListener)[]
get "focusListeners"(): ($FocusListener)[]
get "hierarchyListeners"(): ($HierarchyListener)[]
get "hierarchyBoundsListeners"(): ($HierarchyBoundsListener)[]
get "keyListeners"(): ($KeyListener)[]
get "mouseListeners"(): ($MouseListener)[]
get "mouseMotionListeners"(): ($MouseMotionListener)[]
get "mouseWheelListeners"(): ($MouseWheelListener)[]
get "inputMethodListeners"(): ($InputMethodListener)[]
get "propertyChangeListeners"(): ($PropertyChangeListener)[]
get "inputMethodRequests"(): $InputMethodRequests
get "focusTraversable"(): boolean
set "focusTraversalKeysEnabled"(value: boolean)
get "focusTraversalKeysEnabled"(): boolean
set "componentOrientation"(value: $ComponentOrientation$Type)
get "componentOrientation"(): $ComponentOrientation
set "mixingCutoutShape"(value: $Shape$Type)
get "cursor"(): $Cursor
get "graphics"(): $Graphics
set "visible"(value: boolean)
set "enabled"(value: boolean)
get "font"(): $Font
get "x"(): integer
set "cursor"(value: $Cursor$Type)
get "focusable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$Type = ($Component);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Component_ = $Component$Type;
}}
declare module "packages/java/awt/font/$GlyphMetrics" {
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"

export class $GlyphMetrics {
static readonly "STANDARD": byte
static readonly "LIGATURE": byte
static readonly "COMBINING": byte
static readonly "COMPONENT": byte
static readonly "WHITESPACE": byte

constructor(arg0: float, arg1: $Rectangle2D$Type, arg2: byte)
constructor(arg0: boolean, arg1: float, arg2: float, arg3: $Rectangle2D$Type, arg4: byte)

public "isWhitespace"(): boolean
public "getType"(): integer
public "isStandard"(): boolean
public "getBounds2D"(): $Rectangle2D
public "getAdvance"(): float
public "getAdvanceX"(): float
public "getAdvanceY"(): float
public "getLSB"(): float
public "getRSB"(): float
public "isLigature"(): boolean
public "isCombining"(): boolean
public "isComponent"(): boolean
get "whitespace"(): boolean
get "type"(): integer
get "standard"(): boolean
get "bounds2D"(): $Rectangle2D
get "advance"(): float
get "advanceX"(): float
get "advanceY"(): float
get "lSB"(): float
get "rSB"(): float
get "ligature"(): boolean
get "combining"(): boolean
get "component"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphMetrics$Type = ($GlyphMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphMetrics_ = $GlyphMetrics$Type;
}}
declare module "packages/java/awt/im/$InputMethodRequests" {
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$Type} from "packages/java/text/$AttributedCharacterIterator$Attribute"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$TextHitInfo, $TextHitInfo$Type} from "packages/java/awt/font/$TextHitInfo"

export interface $InputMethodRequests {

 "getSelectedText"(arg0: ($AttributedCharacterIterator$Attribute$Type)[]): $AttributedCharacterIterator
 "getTextLocation"(arg0: $TextHitInfo$Type): $Rectangle
 "getLocationOffset"(arg0: integer, arg1: integer): $TextHitInfo
 "getInsertPositionOffset"(): integer
 "getCommittedText"(arg0: integer, arg1: integer, arg2: ($AttributedCharacterIterator$Attribute$Type)[]): $AttributedCharacterIterator
 "getCommittedTextLength"(): integer
 "cancelLatestCommittedText"(arg0: ($AttributedCharacterIterator$Attribute$Type)[]): $AttributedCharacterIterator
}

export namespace $InputMethodRequests {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethodRequests$Type = ($InputMethodRequests);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethodRequests_ = $InputMethodRequests$Type;
}}
declare module "packages/java/awt/$GraphicsConfiguration" {
import {$GraphicsDevice, $GraphicsDevice$Type} from "packages/java/awt/$GraphicsDevice"
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$VolatileImage, $VolatileImage$Type} from "packages/java/awt/image/$VolatileImage"
import {$BufferCapabilities, $BufferCapabilities$Type} from "packages/java/awt/$BufferCapabilities"
import {$ImageCapabilities, $ImageCapabilities$Type} from "packages/java/awt/$ImageCapabilities"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $GraphicsConfiguration {


public "getBounds"(): $Rectangle
public "getDevice"(): $GraphicsDevice
public "isTranslucencyCapable"(): boolean
public "getColorModel"(): $ColorModel
public "getColorModel"(arg0: integer): $ColorModel
public "createCompatibleImage"(arg0: integer, arg1: integer, arg2: integer): $BufferedImage
public "createCompatibleImage"(arg0: integer, arg1: integer): $BufferedImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$Type): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$Type, arg3: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: integer): $VolatileImage
public "getDefaultTransform"(): $AffineTransform
public "getNormalizingTransform"(): $AffineTransform
public "getBufferCapabilities"(): $BufferCapabilities
public "getImageCapabilities"(): $ImageCapabilities
get "bounds"(): $Rectangle
get "device"(): $GraphicsDevice
get "translucencyCapable"(): boolean
get "colorModel"(): $ColorModel
get "defaultTransform"(): $AffineTransform
get "normalizingTransform"(): $AffineTransform
get "bufferCapabilities"(): $BufferCapabilities
get "imageCapabilities"(): $ImageCapabilities
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsConfiguration$Type = ($GraphicsConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsConfiguration_ = $GraphicsConfiguration$Type;
}}
declare module "packages/java/awt/event/$MouseWheelEvent" {
import {$MouseEvent, $MouseEvent$Type} from "packages/java/awt/event/$MouseEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $MouseWheelEvent extends $MouseEvent {
static readonly "WHEEL_UNIT_SCROLL": integer
static readonly "WHEEL_BLOCK_SCROLL": integer
static readonly "MOUSE_FIRST": integer
static readonly "MOUSE_LAST": integer
static readonly "MOUSE_CLICKED": integer
static readonly "MOUSE_PRESSED": integer
static readonly "MOUSE_RELEASED": integer
static readonly "MOUSE_MOVED": integer
static readonly "MOUSE_ENTERED": integer
static readonly "MOUSE_EXITED": integer
static readonly "MOUSE_DRAGGED": integer
static readonly "MOUSE_WHEEL": integer
static readonly "NOBUTTON": integer
static readonly "BUTTON1": integer
static readonly "BUTTON2": integer
static readonly "BUTTON3": integer
/**
 * 
 * @deprecated
 */
static readonly "SHIFT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "CTRL_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "META_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_GRAPH_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON1_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON2_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON3_MASK": integer
static readonly "SHIFT_DOWN_MASK": integer
static readonly "CTRL_DOWN_MASK": integer
static readonly "META_DOWN_MASK": integer
static readonly "ALT_DOWN_MASK": integer
static readonly "BUTTON1_DOWN_MASK": integer
static readonly "BUTTON2_DOWN_MASK": integer
static readonly "BUTTON3_DOWN_MASK": integer
static readonly "ALT_GRAPH_DOWN_MASK": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: integer, arg11: integer, arg12: integer, arg13: double)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: integer, arg11: integer, arg12: integer)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: integer, arg9: integer, arg10: integer)

public "paramString"(): string
public "getScrollType"(): integer
public "getScrollAmount"(): integer
public "getWheelRotation"(): integer
public "getPreciseWheelRotation"(): double
public "getUnitsToScroll"(): integer
get "scrollType"(): integer
get "scrollAmount"(): integer
get "wheelRotation"(): integer
get "preciseWheelRotation"(): double
get "unitsToScroll"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseWheelEvent$Type = ($MouseWheelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseWheelEvent_ = $MouseWheelEvent$Type;
}}
declare module "packages/java/awt/event/$FocusListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$FocusEvent, $FocusEvent$Type} from "packages/java/awt/event/$FocusEvent"

export interface $FocusListener extends $EventListener {

 "focusGained"(arg0: $FocusEvent$Type): void
 "focusLost"(arg0: $FocusEvent$Type): void
}

export namespace $FocusListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusListener$Type = ($FocusListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusListener_ = $FocusListener$Type;
}}
declare module "packages/java/awt/$JobAttributes$MultipleDocumentHandlingType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $JobAttributes$MultipleDocumentHandlingType extends $AttributeValue {
static readonly "SEPARATE_DOCUMENTS_COLLATED_COPIES": $JobAttributes$MultipleDocumentHandlingType
static readonly "SEPARATE_DOCUMENTS_UNCOLLATED_COPIES": $JobAttributes$MultipleDocumentHandlingType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$MultipleDocumentHandlingType$Type = ($JobAttributes$MultipleDocumentHandlingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes$MultipleDocumentHandlingType_ = $JobAttributes$MultipleDocumentHandlingType$Type;
}}
declare module "packages/java/awt/event/$MouseWheelListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$MouseWheelEvent, $MouseWheelEvent$Type} from "packages/java/awt/event/$MouseWheelEvent"

export interface $MouseWheelListener extends $EventListener {

 "mouseWheelMoved"(arg0: $MouseWheelEvent$Type): void

(arg0: $MouseWheelEvent$Type): void
}

export namespace $MouseWheelListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseWheelListener$Type = ($MouseWheelListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseWheelListener_ = $MouseWheelListener$Type;
}}
declare module "packages/java/awt/image/$WritableRaster" {
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"

export class $WritableRaster extends $Raster {


public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: $Raster$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: any): void
public "createWritableChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $WritableRaster
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): void
public "setRect"(arg0: $Raster$Type): void
public "setRect"(arg0: integer, arg1: integer, arg2: $Raster$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[]): void
public "getWritableParent"(): $WritableRaster
public "createWritableTranslatedChild"(arg0: integer, arg1: integer): $WritableRaster
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
set "rect"(value: $Raster$Type)
get "writableParent"(): $WritableRaster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRaster$Type = ($WritableRaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableRaster_ = $WritableRaster$Type;
}}
declare module "packages/java/awt/event/$WindowListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$WindowEvent, $WindowEvent$Type} from "packages/java/awt/event/$WindowEvent"

export interface $WindowListener extends $EventListener {

 "windowOpened"(arg0: $WindowEvent$Type): void
 "windowClosing"(arg0: $WindowEvent$Type): void
 "windowClosed"(arg0: $WindowEvent$Type): void
 "windowIconified"(arg0: $WindowEvent$Type): void
 "windowDeiconified"(arg0: $WindowEvent$Type): void
 "windowActivated"(arg0: $WindowEvent$Type): void
 "windowDeactivated"(arg0: $WindowEvent$Type): void
}

export namespace $WindowListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowListener$Type = ($WindowListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowListener_ = $WindowListener$Type;
}}
declare module "packages/java/awt/$GraphicsConfigTemplate" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"

export class $GraphicsConfigTemplate implements $Serializable {
static readonly "REQUIRED": integer
static readonly "PREFERRED": integer
static readonly "UNNECESSARY": integer

constructor()

public "getBestConfiguration"(arg0: ($GraphicsConfiguration$Type)[]): $GraphicsConfiguration
public "isGraphicsConfigSupported"(arg0: $GraphicsConfiguration$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsConfigTemplate$Type = ($GraphicsConfigTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsConfigTemplate_ = $GraphicsConfigTemplate$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceDropEvent" {
import {$DragSourceEvent, $DragSourceEvent$Type} from "packages/java/awt/dnd/$DragSourceEvent"
import {$DragSourceContext, $DragSourceContext$Type} from "packages/java/awt/dnd/$DragSourceContext"

export class $DragSourceDropEvent extends $DragSourceEvent {

constructor(arg0: $DragSourceContext$Type)
constructor(arg0: $DragSourceContext$Type, arg1: integer, arg2: boolean, arg3: integer, arg4: integer)
constructor(arg0: $DragSourceContext$Type, arg1: integer, arg2: boolean)

public "getDropAction"(): integer
public "getDropSuccess"(): boolean
get "dropAction"(): integer
get "dropSuccess"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceDropEvent$Type = ($DragSourceDropEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceDropEvent_ = $DragSourceDropEvent$Type;
}}
declare module "packages/java/awt/font/$TextHitInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextHitInfo {


public "equals"(arg0: any): boolean
public "equals"(arg0: $TextHitInfo$Type): boolean
public "toString"(): string
public "hashCode"(): integer
public "getInsertionIndex"(): integer
public "getCharIndex"(): integer
public static "leading"(arg0: integer): $TextHitInfo
public static "trailing"(arg0: integer): $TextHitInfo
public "isLeadingEdge"(): boolean
public static "beforeOffset"(arg0: integer): $TextHitInfo
public static "afterOffset"(arg0: integer): $TextHitInfo
public "getOtherHit"(): $TextHitInfo
public "getOffsetHit"(arg0: integer): $TextHitInfo
get "insertionIndex"(): integer
get "charIndex"(): integer
get "leadingEdge"(): boolean
get "otherHit"(): $TextHitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextHitInfo$Type = ($TextHitInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextHitInfo_ = $TextHitInfo$Type;
}}
declare module "packages/java/awt/$Point" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Point extends $Point2D implements $Serializable {
 "x": integer
 "y": integer

constructor()
constructor(arg0: integer, arg1: integer)
constructor(arg0: $Point$Type)

public "getY"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: integer, arg1: integer): void
public "getX"(): double
get "y"(): double
get "location"(): $Point
set "location"(value: $Point$Type)
get "x"(): double
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
declare module "packages/java/awt/$JobAttributes$DestinationType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $JobAttributes$DestinationType extends $AttributeValue {
static readonly "FILE": $JobAttributes$DestinationType
static readonly "PRINTER": $JobAttributes$DestinationType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$DestinationType$Type = ($JobAttributes$DestinationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes$DestinationType_ = $JobAttributes$DestinationType$Type;
}}
declare module "packages/java/awt/geom/$AffineTransform" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"

export class $AffineTransform implements $Cloneable, $Serializable {
static readonly "TYPE_IDENTITY": integer
static readonly "TYPE_TRANSLATION": integer
static readonly "TYPE_UNIFORM_SCALE": integer
static readonly "TYPE_GENERAL_SCALE": integer
static readonly "TYPE_MASK_SCALE": integer
static readonly "TYPE_FLIP": integer
static readonly "TYPE_QUADRANT_ROTATION": integer
static readonly "TYPE_GENERAL_ROTATION": integer
static readonly "TYPE_MASK_ROTATION": integer
static readonly "TYPE_GENERAL_TRANSFORM": integer

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: (float)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: (double)[])
constructor()
constructor(arg0: $AffineTransform$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "scale"(arg0: double, arg1: double): void
public "transform"(arg0: (float)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "transform"(arg0: (float)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: ($Point2D$Type)[], arg1: integer, arg2: ($Point2D$Type)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "getType"(): integer
public "isIdentity"(): boolean
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double): void
public "rotate"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getScaleX"(): double
public "getScaleY"(): double
public "concatenate"(arg0: $AffineTransform$Type): void
public "invert"(): void
public "translate"(arg0: double, arg1: double): void
public "shear"(arg0: double, arg1: double): void
public "setTransform"(arg0: $AffineTransform$Type): void
public "setTransform"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "getMatrix"(arg0: (double)[]): void
public static "getTranslateInstance"(arg0: double, arg1: double): $AffineTransform
public "setToTranslation"(arg0: double, arg1: double): void
public static "getRotateInstance"(arg0: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double, arg3: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double): $AffineTransform
public "setToRotation"(arg0: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setToRotation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double): void
public static "getQuadrantRotateInstance"(arg0: integer): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer, arg1: double, arg2: double): $AffineTransform
public "setToQuadrantRotation"(arg0: integer): void
public "setToQuadrantRotation"(arg0: integer, arg1: double, arg2: double): void
public static "getScaleInstance"(arg0: double, arg1: double): $AffineTransform
public "setToScale"(arg0: double, arg1: double): void
public static "getShearInstance"(arg0: double, arg1: double): $AffineTransform
public "setToShear"(arg0: double, arg1: double): void
public "getDeterminant"(): double
public "getShearX"(): double
public "getShearY"(): double
public "getTranslateX"(): double
public "getTranslateY"(): double
public "quadrantRotate"(arg0: integer): void
public "quadrantRotate"(arg0: integer, arg1: double, arg2: double): void
public "setToIdentity"(): void
public "preConcatenate"(arg0: $AffineTransform$Type): void
public "createInverse"(): $AffineTransform
public "inverseTransform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "inverseTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "deltaTransform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "deltaTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "createTransformedShape"(arg0: $Shape$Type): $Shape
get "type"(): integer
get "identity"(): boolean
get "scaleX"(): double
get "scaleY"(): double
set "toRotation"(value: double)
set "toQuadrantRotation"(value: integer)
get "determinant"(): double
get "shearX"(): double
get "shearY"(): double
get "translateX"(): double
get "translateY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffineTransform$Type = ($AffineTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffineTransform_ = $AffineTransform$Type;
}}
declare module "packages/java/awt/$Container" {
import {$ComponentOrientation, $ComponentOrientation$Type} from "packages/java/awt/$ComponentOrientation"
import {$PropertyChangeListener, $PropertyChangeListener$Type} from "packages/java/beans/$PropertyChangeListener"
import {$AWTKeyStroke, $AWTKeyStroke$Type} from "packages/java/awt/$AWTKeyStroke"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LayoutManager, $LayoutManager$Type} from "packages/java/awt/$LayoutManager"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$Insets, $Insets$Type} from "packages/java/awt/$Insets"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$FocusTraversalPolicy, $FocusTraversalPolicy$Type} from "packages/java/awt/$FocusTraversalPolicy"
import {$ContainerListener, $ContainerListener$Type} from "packages/java/awt/event/$ContainerListener"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"

export class $Container extends $Component {
static readonly "TOP_ALIGNMENT": float
static readonly "CENTER_ALIGNMENT": float
static readonly "BOTTOM_ALIGNMENT": float
static readonly "LEFT_ALIGNMENT": float
static readonly "RIGHT_ALIGNMENT": float

constructor()

public "invalidate"(): void
public "add"(arg0: $Component$Type, arg1: any): void
public "add"(arg0: $Component$Type): $Component
public "add"(arg0: string, arg1: $Component$Type): $Component
public "add"(arg0: $Component$Type, arg1: integer): $Component
public "add"(arg0: $Component$Type, arg1: any, arg2: integer): void
public "remove"(arg0: $Component$Type): void
public "remove"(arg0: integer): void
public "update"(arg0: $Graphics$Type): void
public "validate"(): void
public "list"(arg0: $PrintWriter$Type, arg1: integer): void
public "list"(arg0: $PrintStream$Type, arg1: integer): void
public "print"(arg0: $Graphics$Type): void
public "removeAll"(): void
public "getComponentCount"(): integer
/**
 * 
 * @deprecated
 */
public "countComponents"(): integer
public "getInsets"(): $Insets
/**
 * 
 * @deprecated
 */
public "insets"(): $Insets
public "getComponentZOrder"(arg0: $Component$Type): integer
public "removeNotify"(): void
public "isFocusCycleRoot"(): boolean
public "isFocusCycleRoot"(arg0: $Container$Type): boolean
public "getFocusTraversalPolicy"(): $FocusTraversalPolicy
public "setComponentZOrder"(arg0: $Component$Type, arg1: integer): void
public "addNotify"(): void
public "doLayout"(): void
public "isValidateRoot"(): boolean
public "setFont"(arg0: $Font$Type): void
/**
 * 
 * @deprecated
 */
public "preferredSize"(): $Dimension
public "getMinimumSize"(): $Dimension
public "getMaximumSize"(): $Dimension
public "getAlignmentX"(): float
public "getAlignmentY"(): float
public "paintComponents"(arg0: $Graphics$Type): void
public "printComponents"(arg0: $Graphics$Type): void
public "addContainerListener"(arg0: $ContainerListener$Type): void
public "removeContainerListener"(arg0: $ContainerListener$Type): void
public "getContainerListeners"(): ($ContainerListener)[]
/**
 * 
 * @deprecated
 */
public "deliverEvent"(arg0: $Event$Type): void
public "getComponentAt"(arg0: integer, arg1: integer): $Component
public "getComponentAt"(arg0: $Point$Type): $Component
public "getMousePosition"(arg0: boolean): $Point
public "findComponentAt"(arg0: $Point$Type): $Component
public "findComponentAt"(arg0: integer, arg1: integer): $Component
public "isAncestorOf"(arg0: $Component$Type): boolean
public "setFocusTraversalKeys"(arg0: integer, arg1: $Set$Type<(any)>): void
public "getFocusTraversalKeys"(arg0: integer): $Set<($AWTKeyStroke)>
public "areFocusTraversalKeysSet"(arg0: integer): boolean
public "setFocusTraversalPolicy"(arg0: $FocusTraversalPolicy$Type): void
public "isFocusTraversalPolicyProvider"(): boolean
public "isFocusTraversalPolicySet"(): boolean
public "setFocusCycleRoot"(arg0: boolean): void
public "setFocusTraversalPolicyProvider"(arg0: boolean): void
public "transferFocusDownCycle"(): void
public "applyComponentOrientation"(arg0: $ComponentOrientation$Type): void
public "getListeners"<T extends $EventListener>(arg0: $Class$Type<(T)>): (T)[]
public "getPreferredSize"(): $Dimension
public "getLayout"(): $LayoutManager
/**
 * 
 * @deprecated
 */
public "minimumSize"(): $Dimension
public "setLayout"(arg0: $LayoutManager$Type): void
/**
 * 
 * @deprecated
 */
public "layout"(): void
public "getComponent"(arg0: integer): $Component
public "getComponents"(): ($Component)[]
public "addPropertyChangeListener"(arg0: $PropertyChangeListener$Type): void
public "addPropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
/**
 * 
 * @deprecated
 */
public "locate"(arg0: integer, arg1: integer): $Component
public "paint"(arg0: $Graphics$Type): void
get "componentCount"(): integer
get "focusCycleRoot"(): boolean
get "focusTraversalPolicy"(): $FocusTraversalPolicy
get "validateRoot"(): boolean
set "font"(value: $Font$Type)
get "maximumSize"(): $Dimension
get "alignmentX"(): float
get "alignmentY"(): float
get "containerListeners"(): ($ContainerListener)[]
set "focusTraversalPolicy"(value: $FocusTraversalPolicy$Type)
get "focusTraversalPolicyProvider"(): boolean
get "focusTraversalPolicySet"(): boolean
set "focusCycleRoot"(value: boolean)
set "focusTraversalPolicyProvider"(value: boolean)
get "components"(): ($Component)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Type = ($Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container_ = $Container$Type;
}}
declare module "packages/java/awt/$Shape" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export interface $Shape {

 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "intersects"(arg0: $Rectangle2D$Type): boolean
 "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "contains"(arg0: $Point2D$Type): boolean
 "contains"(arg0: double, arg1: double): boolean
 "contains"(arg0: $Rectangle2D$Type): boolean
 "getBounds"(): $Rectangle
 "getBounds2D"(): $Rectangle2D
 "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
 "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
}

export namespace $Shape {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shape$Type = ($Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shape_ = $Shape$Type;
}}
declare module "packages/java/awt/event/$InputMethodListener" {
import {$InputMethodEvent, $InputMethodEvent$Type} from "packages/java/awt/event/$InputMethodEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $InputMethodListener extends $EventListener {

 "inputMethodTextChanged"(arg0: $InputMethodEvent$Type): void
 "caretPositionChanged"(arg0: $InputMethodEvent$Type): void
}

export namespace $InputMethodListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethodListener$Type = ($InputMethodListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethodListener_ = $InputMethodListener$Type;
}}
declare module "packages/java/awt/geom/$Rectangle2D" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Line2D, $Line2D$Type} from "packages/java/awt/geom/$Line2D"
import {$RectangularShape, $RectangularShape$Type} from "packages/java/awt/geom/$RectangularShape"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Rectangle2D extends $RectangularShape {
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer


public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "add"(arg0: double, arg1: double): void
public "add"(arg0: $Rectangle2D$Type): void
public "add"(arg0: $Point2D$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public static "union"(arg0: $Rectangle2D$Type, arg1: $Rectangle2D$Type, arg2: $Rectangle2D$Type): void
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setRect"(arg0: $Rectangle2D$Type): void
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: $Point2D$Type): integer
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$Type): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
public "intersectsLine"(arg0: $Line2D$Type): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "intersect"(arg0: $Rectangle2D$Type, arg1: $Rectangle2D$Type, arg2: $Rectangle2D$Type): void
set "rect"(value: $Rectangle2D$Type)
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle2D$Type = ($Rectangle2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle2D_ = $Rectangle2D$Type;
}}
declare module "packages/java/awt/$SecondaryLoop" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SecondaryLoop {

 "exit"(): boolean
 "enter"(): boolean
}

export namespace $SecondaryLoop {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecondaryLoop$Type = ($SecondaryLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecondaryLoop_ = $SecondaryLoop$Type;
}}
declare module "packages/java/awt/$Menu" {
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$Accessible, $Accessible$Type} from "packages/javax/accessibility/$Accessible"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$MenuItem, $MenuItem$Type} from "packages/java/awt/$MenuItem"

export class $Menu extends $MenuItem implements $MenuContainer, $Accessible {

constructor(arg0: string, arg1: boolean)
constructor(arg0: string)
constructor()

public "add"(arg0: string): void
public "add"(arg0: $MenuItem$Type): $MenuItem
public "remove"(arg0: integer): void
public "remove"(arg0: $MenuComponent$Type): void
public "insert"(arg0: string, arg1: integer): void
public "insert"(arg0: $MenuItem$Type, arg1: integer): void
public "paramString"(): string
public "removeAll"(): void
public "getItemCount"(): integer
public "getItem"(arg0: integer): $MenuItem
public "removeNotify"(): void
public "addNotify"(): void
public "getAccessibleContext"(): $AccessibleContext
/**
 * 
 * @deprecated
 */
public "countItems"(): integer
public "isTearOff"(): boolean
public "addSeparator"(): void
public "insertSeparator"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "getFont"(): $Font
get "itemCount"(): integer
get "accessibleContext"(): $AccessibleContext
get "tearOff"(): boolean
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Menu$Type = ($Menu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Menu_ = $Menu$Type;
}}
declare module "packages/java/awt/dnd/$DropTargetDropEvent" {
import {$DropTargetContext, $DropTargetContext$Type} from "packages/java/awt/dnd/$DropTargetContext"
import {$DataFlavor, $DataFlavor$Type} from "packages/java/awt/datatransfer/$DataFlavor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DropTargetEvent, $DropTargetEvent$Type} from "packages/java/awt/dnd/$DropTargetEvent"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export class $DropTargetDropEvent extends $DropTargetEvent {

constructor(arg0: $DropTargetContext$Type, arg1: $Point$Type, arg2: integer, arg3: integer)
constructor(arg0: $DropTargetContext$Type, arg1: $Point$Type, arg2: integer, arg3: integer, arg4: boolean)

public "getLocation"(): $Point
public "rejectDrop"(): void
public "isDataFlavorSupported"(arg0: $DataFlavor$Type): boolean
public "getSourceActions"(): integer
public "getTransferable"(): $Transferable
public "getDropAction"(): integer
public "getCurrentDataFlavors"(): ($DataFlavor)[]
public "getCurrentDataFlavorsAsList"(): $List<($DataFlavor)>
public "acceptDrop"(arg0: integer): void
public "dropComplete"(arg0: boolean): void
public "isLocalTransfer"(): boolean
get "location"(): $Point
get "sourceActions"(): integer
get "transferable"(): $Transferable
get "dropAction"(): integer
get "currentDataFlavors"(): ($DataFlavor)[]
get "currentDataFlavorsAsList"(): $List<($DataFlavor)>
get "localTransfer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTargetDropEvent$Type = ($DropTargetDropEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTargetDropEvent_ = $DropTargetDropEvent$Type;
}}
declare module "packages/java/awt/datatransfer/$FlavorListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$FlavorEvent, $FlavorEvent$Type} from "packages/java/awt/datatransfer/$FlavorEvent"

export interface $FlavorListener extends $EventListener {

 "flavorsChanged"(arg0: $FlavorEvent$Type): void

(arg0: $FlavorEvent$Type): void
}

export namespace $FlavorListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlavorListener$Type = ($FlavorListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlavorListener_ = $FlavorListener$Type;
}}
declare module "packages/java/awt/$Component$BaselineResizeBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Component$BaselineResizeBehavior extends $Enum<($Component$BaselineResizeBehavior)> {
static readonly "CONSTANT_ASCENT": $Component$BaselineResizeBehavior
static readonly "CONSTANT_DESCENT": $Component$BaselineResizeBehavior
static readonly "CENTER_OFFSET": $Component$BaselineResizeBehavior
static readonly "OTHER": $Component$BaselineResizeBehavior


public static "values"(): ($Component$BaselineResizeBehavior)[]
public static "valueOf"(arg0: string): $Component$BaselineResizeBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$BaselineResizeBehavior$Type = (("other") | ("center_offset") | ("constant_descent") | ("constant_ascent")) | ($Component$BaselineResizeBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Component$BaselineResizeBehavior_ = $Component$BaselineResizeBehavior$Type;
}}
declare module "packages/java/awt/dnd/$DropTarget" {
import {$DropTargetDropEvent, $DropTargetDropEvent$Type} from "packages/java/awt/dnd/$DropTargetDropEvent"
import {$DropTargetContext, $DropTargetContext$Type} from "packages/java/awt/dnd/$DropTargetContext"
import {$DropTargetDragEvent, $DropTargetDragEvent$Type} from "packages/java/awt/dnd/$DropTargetDragEvent"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DropTargetListener, $DropTargetListener$Type} from "packages/java/awt/dnd/$DropTargetListener"
import {$FlavorMap, $FlavorMap$Type} from "packages/java/awt/datatransfer/$FlavorMap"
import {$DropTargetEvent, $DropTargetEvent$Type} from "packages/java/awt/dnd/$DropTargetEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $DropTarget implements $DropTargetListener, $Serializable {

constructor(arg0: $Component$Type, arg1: integer, arg2: $DropTargetListener$Type)
constructor(arg0: $Component$Type, arg1: $DropTargetListener$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: $DropTargetListener$Type, arg3: boolean, arg4: $FlavorMap$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: $DropTargetListener$Type, arg3: boolean)
constructor()

public "drop"(arg0: $DropTargetDropEvent$Type): void
public "isActive"(): boolean
public "removeNotify"(): void
public "addNotify"(): void
public "getComponent"(): $Component
public "setActive"(arg0: boolean): void
public "setComponent"(arg0: $Component$Type): void
public "getDropTargetContext"(): $DropTargetContext
public "getDefaultActions"(): integer
public "removeDropTargetListener"(arg0: $DropTargetListener$Type): void
public "dragEnter"(arg0: $DropTargetDragEvent$Type): void
public "dragOver"(arg0: $DropTargetDragEvent$Type): void
public "dropActionChanged"(arg0: $DropTargetDragEvent$Type): void
public "dragExit"(arg0: $DropTargetEvent$Type): void
public "getFlavorMap"(): $FlavorMap
public "setFlavorMap"(arg0: $FlavorMap$Type): void
public "setDefaultActions"(arg0: integer): void
public "addDropTargetListener"(arg0: $DropTargetListener$Type): void
get "active"(): boolean
get "component"(): $Component
set "active"(value: boolean)
set "component"(value: $Component$Type)
get "dropTargetContext"(): $DropTargetContext
get "defaultActions"(): integer
get "flavorMap"(): $FlavorMap
set "flavorMap"(value: $FlavorMap$Type)
set "defaultActions"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTarget$Type = ($DropTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTarget_ = $DropTarget$Type;
}}
declare module "packages/java/awt/$PopupMenu" {
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$MenuContainer, $MenuContainer$Type} from "packages/java/awt/$MenuContainer"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$Menu, $Menu$Type} from "packages/java/awt/$Menu"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $PopupMenu extends $Menu {

constructor()
constructor(arg0: string)

public "getParent"(): $MenuContainer
public "addNotify"(): void
public "getAccessibleContext"(): $AccessibleContext
public "show"(arg0: $Component$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
public "postEvent"(arg0: $Event$Type): boolean
public "getFont"(): $Font
get "parent"(): $MenuContainer
get "accessibleContext"(): $AccessibleContext
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PopupMenu$Type = ($PopupMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PopupMenu_ = $PopupMenu$Type;
}}
declare module "packages/java/awt/image/$ImageProducer" {
import {$ImageConsumer, $ImageConsumer$Type} from "packages/java/awt/image/$ImageConsumer"

export interface $ImageProducer {

 "addConsumer"(arg0: $ImageConsumer$Type): void
 "isConsumer"(arg0: $ImageConsumer$Type): boolean
 "removeConsumer"(arg0: $ImageConsumer$Type): void
 "startProduction"(arg0: $ImageConsumer$Type): void
 "requestTopDownLeftRightResend"(arg0: $ImageConsumer$Type): void
}

export namespace $ImageProducer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageProducer$Type = ($ImageProducer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageProducer_ = $ImageProducer$Type;
}}
declare module "packages/java/awt/datatransfer/$DataFlavor" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Externalizable, $Externalizable$Type} from "packages/java/io/$Externalizable"
import {$ObjectOutput, $ObjectOutput$Type} from "packages/java/io/$ObjectOutput"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$ObjectInput, $ObjectInput$Type} from "packages/java/io/$ObjectInput"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export class $DataFlavor implements $Externalizable, $Cloneable {
static readonly "stringFlavor": $DataFlavor
static readonly "imageFlavor": $DataFlavor
/**
 * 
 * @deprecated
 */
static readonly "plainTextFlavor": $DataFlavor
static readonly "javaSerializedObjectMimeType": string
static readonly "javaFileListFlavor": $DataFlavor
static readonly "javaJVMLocalObjectMimeType": string
static readonly "javaRemoteObjectMimeType": string
static readonly "selectionHtmlFlavor": $DataFlavor
static readonly "fragmentHtmlFlavor": $DataFlavor
static readonly "allHtmlFlavor": $DataFlavor

constructor(arg0: string, arg1: string)
constructor(arg0: $Class$Type<(any)>, arg1: string)
constructor(arg0: string, arg1: string, arg2: $ClassLoader$Type)
constructor(arg0: string)
constructor()

public "getParameter"(arg0: string): string
public "equals"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "equals"(arg0: string): boolean
public "equals"(arg0: $DataFlavor$Type): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "match"(arg0: $DataFlavor$Type): boolean
public "writeExternal"(arg0: $ObjectOutput$Type): void
public "readExternal"(arg0: $ObjectInput$Type): void
public "getPrimaryType"(): string
public "getMimeType"(): string
public "getSubType"(): string
public "isRepresentationClassInputStream"(): boolean
public "isRepresentationClassByteBuffer"(): boolean
public static "getTextPlainUnicodeFlavor"(): $DataFlavor
public static "selectBestTextFlavor"(arg0: ($DataFlavor$Type)[]): $DataFlavor
public "isFlavorTextType"(): boolean
public "getReaderForText"(arg0: $Transferable$Type): $Reader
public "getRepresentationClass"(): $Class<(any)>
public "getHumanPresentableName"(): string
public "setHumanPresentableName"(arg0: string): void
public "isMimeTypeEqual"(arg0: $DataFlavor$Type): boolean
public "isMimeTypeEqual"(arg0: string): boolean
public "isRepresentationClassReader"(): boolean
public "isRepresentationClassCharBuffer"(): boolean
public "isMimeTypeSerializedObject"(): boolean
public "getDefaultRepresentationClass"(): $Class<(any)>
public "getDefaultRepresentationClassAsString"(): string
public "isRepresentationClassSerializable"(): boolean
public "isRepresentationClassRemote"(): boolean
public "isFlavorSerializedObjectType"(): boolean
public "isFlavorRemoteObjectType"(): boolean
public "isFlavorJavaFileListType"(): boolean
get "primaryType"(): string
get "mimeType"(): string
get "subType"(): string
get "representationClassInputStream"(): boolean
get "representationClassByteBuffer"(): boolean
get "textPlainUnicodeFlavor"(): $DataFlavor
get "flavorTextType"(): boolean
get "representationClass"(): $Class<(any)>
get "humanPresentableName"(): string
set "humanPresentableName"(value: string)
get "representationClassReader"(): boolean
get "representationClassCharBuffer"(): boolean
get "mimeTypeSerializedObject"(): boolean
get "defaultRepresentationClass"(): $Class<(any)>
get "defaultRepresentationClassAsString"(): string
get "representationClassSerializable"(): boolean
get "representationClassRemote"(): boolean
get "flavorSerializedObjectType"(): boolean
get "flavorRemoteObjectType"(): boolean
get "flavorJavaFileListType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFlavor$Type = ($DataFlavor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFlavor_ = $DataFlavor$Type;
}}
declare module "packages/java/awt/geom/$Dimension2D" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Dimension2D implements $Cloneable {


public "clone"(): any
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: $Dimension2D$Type): void
public "getHeight"(): double
public "getWidth"(): double
set "size"(value: $Dimension2D$Type)
get "height"(): double
get "width"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension2D$Type = ($Dimension2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension2D_ = $Dimension2D$Type;
}}
declare module "packages/java/awt/$RenderingHints" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RenderingHints$Key, $RenderingHints$Key$Type} from "packages/java/awt/$RenderingHints$Key"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $RenderingHints implements $Map<(any), (any)>, $Cloneable {
static readonly "KEY_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_ANTIALIAS_ON": any
static readonly "VALUE_ANTIALIAS_OFF": any
static readonly "VALUE_ANTIALIAS_DEFAULT": any
static readonly "KEY_RENDERING": $RenderingHints$Key
static readonly "VALUE_RENDER_SPEED": any
static readonly "VALUE_RENDER_QUALITY": any
static readonly "VALUE_RENDER_DEFAULT": any
static readonly "KEY_DITHERING": $RenderingHints$Key
static readonly "VALUE_DITHER_DISABLE": any
static readonly "VALUE_DITHER_ENABLE": any
static readonly "VALUE_DITHER_DEFAULT": any
static readonly "KEY_TEXT_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_TEXT_ANTIALIAS_ON": any
static readonly "VALUE_TEXT_ANTIALIAS_OFF": any
static readonly "VALUE_TEXT_ANTIALIAS_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_GASP": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HBGR": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VBGR": any
static readonly "KEY_TEXT_LCD_CONTRAST": $RenderingHints$Key
static readonly "KEY_FRACTIONALMETRICS": $RenderingHints$Key
static readonly "VALUE_FRACTIONALMETRICS_OFF": any
static readonly "VALUE_FRACTIONALMETRICS_ON": any
static readonly "VALUE_FRACTIONALMETRICS_DEFAULT": any
static readonly "KEY_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_INTERPOLATION_NEAREST_NEIGHBOR": any
static readonly "VALUE_INTERPOLATION_BILINEAR": any
static readonly "VALUE_INTERPOLATION_BICUBIC": any
static readonly "KEY_ALPHA_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_ALPHA_INTERPOLATION_SPEED": any
static readonly "VALUE_ALPHA_INTERPOLATION_QUALITY": any
static readonly "VALUE_ALPHA_INTERPOLATION_DEFAULT": any
static readonly "KEY_COLOR_RENDERING": $RenderingHints$Key
static readonly "VALUE_COLOR_RENDER_SPEED": any
static readonly "VALUE_COLOR_RENDER_QUALITY": any
static readonly "VALUE_COLOR_RENDER_DEFAULT": any
static readonly "KEY_STROKE_CONTROL": $RenderingHints$Key
static readonly "VALUE_STROKE_DEFAULT": any
static readonly "VALUE_STROKE_NORMALIZE": any
static readonly "VALUE_STROKE_PURE": any
static readonly "KEY_RESOLUTION_VARIANT": $RenderingHints$Key
static readonly "VALUE_RESOLUTION_VARIANT_DEFAULT": any
static readonly "VALUE_RESOLUTION_VARIANT_BASE": any
static readonly "VALUE_RESOLUTION_VARIANT_SIZE_FIT": any
static readonly "VALUE_RESOLUTION_VARIANT_DPI_FIT": any

constructor(arg0: $Map$Type<($RenderingHints$Key$Type), (any)>)
constructor(arg0: $RenderingHints$Key$Type, arg1: any)

public "add"(arg0: $RenderingHints$Type): void
public "remove"(arg0: any): any
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(any), (any)>
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $Map<(any), (any)>
public static "of"<K, V>(): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any, arg18: any, arg19: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any): $Map<(any), (any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$Type<(any), (any), (any)>): any
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$Type<(any), (any)>): any
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(any), (any)>
public static "entry"<K, V>(arg0: any, arg1: any): $Map$Entry<(any), (any)>
[index: string | number]: any
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Type = ($RenderingHints);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints_ = $RenderingHints$Type;
}}
declare module "packages/java/awt/event/$InputEvent" {
import {$ComponentEvent, $ComponentEvent$Type} from "packages/java/awt/event/$ComponentEvent"

export class $InputEvent extends $ComponentEvent {
/**
 * 
 * @deprecated
 */
static readonly "SHIFT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "CTRL_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "META_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_GRAPH_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON1_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON2_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON3_MASK": integer
static readonly "SHIFT_DOWN_MASK": integer
static readonly "CTRL_DOWN_MASK": integer
static readonly "META_DOWN_MASK": integer
static readonly "ALT_DOWN_MASK": integer
static readonly "BUTTON1_DOWN_MASK": integer
static readonly "BUTTON2_DOWN_MASK": integer
static readonly "BUTTON3_DOWN_MASK": integer
static readonly "ALT_GRAPH_DOWN_MASK": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer


/**
 * 
 * @deprecated
 */
public "getModifiers"(): integer
public "isControlDown"(): boolean
public "isAltDown"(): boolean
public "isConsumed"(): boolean
public "getWhen"(): long
public "isShiftDown"(): boolean
public "consume"(): void
public "getModifiersEx"(): integer
public static "getModifiersExText"(arg0: integer): string
public static "getMaskForButton"(arg0: integer): integer
public "isMetaDown"(): boolean
public "isAltGraphDown"(): boolean
get "modifiers"(): integer
get "controlDown"(): boolean
get "altDown"(): boolean
get "consumed"(): boolean
get "when"(): long
get "shiftDown"(): boolean
get "modifiersEx"(): integer
get "metaDown"(): boolean
get "altGraphDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$Type = ($InputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent_ = $InputEvent$Type;
}}
declare module "packages/java/awt/image/$Raster" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$DataBuffer, $DataBuffer$Type} from "packages/java/awt/image/$DataBuffer"

export class $Raster {


public "getBounds"(): $Rectangle
public "getParent"(): $Raster
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): (float)[]
public "createCompatibleWritableRaster"(arg0: $Rectangle$Type): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $WritableRaster
public "createCompatibleWritableRaster"(): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: (integer)[], arg4: $Point$Type): $WritableRaster
public "getHeight"(): integer
public "getWidth"(): integer
public "getNumBands"(): integer
public "getSampleModel"(): $SampleModel
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: any): any
public "getDataBuffer"(): $DataBuffer
public "getSampleModelTranslateX"(): integer
public "getSampleModelTranslateY"(): integer
public static "createWritableRaster"(arg0: $SampleModel$Type, arg1: $Point$Type): $WritableRaster
public static "createWritableRaster"(arg0: $SampleModel$Type, arg1: $DataBuffer$Type, arg2: $Point$Type): $WritableRaster
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): (float)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): (integer)[]
public "getMinX"(): integer
public "getMinY"(): integer
public static "createRaster"(arg0: $SampleModel$Type, arg1: $DataBuffer$Type, arg2: $Point$Type): $Raster
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[]): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createBandedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public "getNumDataElements"(): integer
public "createTranslatedChild"(arg0: integer, arg1: integer): $Raster
public "createChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $Raster
public "getTransferType"(): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer): double
public "getSample"(arg0: integer, arg1: integer, arg2: integer): integer
get "bounds"(): $Rectangle
get "parent"(): $Raster
get "height"(): integer
get "width"(): integer
get "numBands"(): integer
get "sampleModel"(): $SampleModel
get "dataBuffer"(): $DataBuffer
get "sampleModelTranslateX"(): integer
get "sampleModelTranslateY"(): integer
get "minX"(): integer
get "minY"(): integer
get "numDataElements"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Raster$Type = ($Raster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Raster_ = $Raster$Type;
}}
declare module "packages/java/awt/$Insets" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Insets implements $Cloneable, $Serializable {
 "top": integer
 "left": integer
 "bottom": integer
 "right": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insets$Type = ($Insets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Insets_ = $Insets$Type;
}}
declare module "packages/java/awt/image/$WritableRenderedImage" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Vector, $Vector$Type} from "packages/java/util/$Vector"
import {$TileObserver, $TileObserver$Type} from "packages/java/awt/image/$TileObserver"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$RenderedImage, $RenderedImage$Type} from "packages/java/awt/image/$RenderedImage"

export interface $WritableRenderedImage extends $RenderedImage {

 "addTileObserver"(arg0: $TileObserver$Type): void
 "removeTileObserver"(arg0: $TileObserver$Type): void
 "isTileWritable"(arg0: integer, arg1: integer): boolean
 "getWritableTileIndices"(): ($Point)[]
 "hasTileWriters"(): boolean
 "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
 "releaseWritableTile"(arg0: integer, arg1: integer): void
 "setData"(arg0: $Raster$Type): void
 "getProperty"(arg0: string): any
 "getData"(arg0: $Rectangle$Type): $Raster
 "getData"(): $Raster
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$Type): $WritableRaster
 "getHeight"(): integer
 "getWidth"(): integer
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getSources"(): $Vector<($RenderedImage)>
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
 "getMinX"(): integer
 "getMinY"(): integer
}

export namespace $WritableRenderedImage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRenderedImage$Type = ($WritableRenderedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableRenderedImage_ = $WritableRenderedImage$Type;
}}
declare module "packages/java/awt/event/$ContainerListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$ContainerEvent, $ContainerEvent$Type} from "packages/java/awt/event/$ContainerEvent"

export interface $ContainerListener extends $EventListener {

 "componentAdded"(arg0: $ContainerEvent$Type): void
 "componentRemoved"(arg0: $ContainerEvent$Type): void
}

export namespace $ContainerListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$Type = ($ContainerListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerListener_ = $ContainerListener$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceMotionListener" {
import {$DragSourceDragEvent, $DragSourceDragEvent$Type} from "packages/java/awt/dnd/$DragSourceDragEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $DragSourceMotionListener extends $EventListener {

 "dragMouseMoved"(arg0: $DragSourceDragEvent$Type): void

(arg0: $DragSourceDragEvent$Type): void
}

export namespace $DragSourceMotionListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceMotionListener$Type = ($DragSourceMotionListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceMotionListener_ = $DragSourceMotionListener$Type;
}}
declare module "packages/java/awt/event/$ComponentEvent" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $ComponentEvent extends $AWTEvent {
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer)

public "paramString"(): string
public "getComponent"(): $Component
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentEvent$Type = ($ComponentEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentEvent_ = $ComponentEvent$Type;
}}
declare module "packages/java/awt/$Toolkit" {
import {$Dialog$ModalExclusionType, $Dialog$ModalExclusionType$Type} from "packages/java/awt/$Dialog$ModalExclusionType"
import {$PrintJob, $PrintJob$Type} from "packages/java/awt/$PrintJob"
import {$ImageProducer, $ImageProducer$Type} from "packages/java/awt/image/$ImageProducer"
import {$DragGestureRecognizer, $DragGestureRecognizer$Type} from "packages/java/awt/dnd/$DragGestureRecognizer"
import {$Clipboard, $Clipboard$Type} from "packages/java/awt/datatransfer/$Clipboard"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$AWTEventListener, $AWTEventListener$Type} from "packages/java/awt/event/$AWTEventListener"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$GraphicsConfiguration, $GraphicsConfiguration$Type} from "packages/java/awt/$GraphicsConfiguration"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$EventQueue, $EventQueue$Type} from "packages/java/awt/$EventQueue"
import {$PropertyChangeListener, $PropertyChangeListener$Type} from "packages/java/beans/$PropertyChangeListener"
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Dialog$ModalityType, $Dialog$ModalityType$Type} from "packages/java/awt/$Dialog$ModalityType"
import {$FontMetrics, $FontMetrics$Type} from "packages/java/awt/$FontMetrics"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$DragGestureListener, $DragGestureListener$Type} from "packages/java/awt/dnd/$DragGestureListener"
import {$Insets, $Insets$Type} from "packages/java/awt/$Insets"
import {$Properties, $Properties$Type} from "packages/java/util/$Properties"
import {$DragSource, $DragSource$Type} from "packages/java/awt/dnd/$DragSource"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$PageAttributes, $PageAttributes$Type} from "packages/java/awt/$PageAttributes"
import {$InputMethodHighlight, $InputMethodHighlight$Type} from "packages/java/awt/im/$InputMethodHighlight"
import {$Frame, $Frame$Type} from "packages/java/awt/$Frame"
import {$JobAttributes, $JobAttributes$Type} from "packages/java/awt/$JobAttributes"
import {$TextAttribute, $TextAttribute$Type} from "packages/java/awt/font/$TextAttribute"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Toolkit {


public static "getProperty"(arg0: string, arg1: string): string
public "sync"(): void
public "beep"(): void
public static "getDefaultToolkit"(): $Toolkit
public "getColorModel"(): $ColorModel
/**
 * 
 * @deprecated
 */
public "getFontMetrics"(arg0: $Font$Type): $FontMetrics
public "createImage"(arg0: (byte)[], arg1: integer, arg2: integer): $Image
public "createImage"(arg0: $ImageProducer$Type): $Image
public "createImage"(arg0: string): $Image
public "createImage"(arg0: (byte)[]): $Image
public "createImage"(arg0: $URL$Type): $Image
public "checkImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$Type): integer
public "getPropertyChangeListeners"(): ($PropertyChangeListener)[]
public "getPropertyChangeListeners"(arg0: string): ($PropertyChangeListener)[]
public "setDynamicLayout"(arg0: boolean): void
public "isDynamicLayoutActive"(): boolean
public "getScreenSize"(): $Dimension
public "getScreenResolution"(): integer
public "getScreenInsets"(arg0: $GraphicsConfiguration$Type): $Insets
/**
 * 
 * @deprecated
 */
public "getFontList"(): (string)[]
public "getPrintJob"(arg0: $Frame$Type, arg1: string, arg2: $JobAttributes$Type, arg3: $PageAttributes$Type): $PrintJob
public "getPrintJob"(arg0: $Frame$Type, arg1: string, arg2: $Properties$Type): $PrintJob
public "getSystemClipboard"(): $Clipboard
public "getSystemSelection"(): $Clipboard
/**
 * 
 * @deprecated
 */
public "getMenuShortcutKeyMask"(): integer
public "getMenuShortcutKeyMaskEx"(): integer
public "getLockingKeyState"(arg0: integer): boolean
public "setLockingKeyState"(arg0: integer, arg1: boolean): void
public "createCustomCursor"(arg0: $Image$Type, arg1: $Point$Type, arg2: string): $Cursor
public "getBestCursorSize"(arg0: integer, arg1: integer): $Dimension
public "getMaximumCursorColors"(): integer
public "isFrameStateSupported"(arg0: integer): boolean
public "getSystemEventQueue"(): $EventQueue
public "createDragGestureRecognizer"<T extends $DragGestureRecognizer>(arg0: $Class$Type<(T)>, arg1: $DragSource$Type, arg2: $Component$Type, arg3: integer, arg4: $DragGestureListener$Type): T
public "getDesktopProperty"(arg0: string): any
public "isAlwaysOnTopSupported"(): boolean
public "isModalityTypeSupported"(arg0: $Dialog$ModalityType$Type): boolean
public "isModalExclusionTypeSupported"(arg0: $Dialog$ModalExclusionType$Type): boolean
public "addAWTEventListener"(arg0: $AWTEventListener$Type, arg1: long): void
public "removeAWTEventListener"(arg0: $AWTEventListener$Type): void
public "getAWTEventListeners"(arg0: long): ($AWTEventListener)[]
public "getAWTEventListeners"(): ($AWTEventListener)[]
public "mapInputMethodHighlight"(arg0: $InputMethodHighlight$Type): $Map<($TextAttribute), (any)>
public "areExtraMouseButtonsEnabled"(): boolean
public "removePropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
public "addPropertyChangeListener"(arg0: string, arg1: $PropertyChangeListener$Type): void
public "prepareImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$Type): boolean
public "getImage"(arg0: $URL$Type): $Image
public "getImage"(arg0: string): $Image
get "defaultToolkit"(): $Toolkit
get "colorModel"(): $ColorModel
get "propertyChangeListeners"(): ($PropertyChangeListener)[]
set "dynamicLayout"(value: boolean)
get "dynamicLayoutActive"(): boolean
get "screenSize"(): $Dimension
get "screenResolution"(): integer
get "fontList"(): (string)[]
get "systemClipboard"(): $Clipboard
get "systemSelection"(): $Clipboard
get "menuShortcutKeyMask"(): integer
get "menuShortcutKeyMaskEx"(): integer
get "maximumCursorColors"(): integer
get "systemEventQueue"(): $EventQueue
get "alwaysOnTopSupported"(): boolean
get "aWTEventListeners"(): ($AWTEventListener)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toolkit$Type = ($Toolkit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Toolkit_ = $Toolkit$Type;
}}
declare module "packages/java/awt/$Font" {
import {$CharacterIterator, $CharacterIterator$Type} from "packages/java/text/$CharacterIterator"
import {$GlyphVector, $GlyphVector$Type} from "packages/java/awt/font/$GlyphVector"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$Type} from "packages/java/text/$AttributedCharacterIterator$Attribute"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$TextAttribute, $TextAttribute$Type} from "packages/java/awt/font/$TextAttribute"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$LineMetrics, $LineMetrics$Type} from "packages/java/awt/font/$LineMetrics"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$FontRenderContext, $FontRenderContext$Type} from "packages/java/awt/font/$FontRenderContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Font implements $Serializable {
static readonly "DIALOG": string
static readonly "DIALOG_INPUT": string
static readonly "SANS_SERIF": string
static readonly "SERIF": string
static readonly "MONOSPACED": string
static readonly "PLAIN": integer
static readonly "BOLD": integer
static readonly "ITALIC": integer
static readonly "ROMAN_BASELINE": integer
static readonly "CENTER_BASELINE": integer
static readonly "HANGING_BASELINE": integer
static readonly "TRUETYPE_FONT": integer
static readonly "TYPE1_FONT": integer
static readonly "LAYOUT_LEFT_TO_RIGHT": integer
static readonly "LAYOUT_RIGHT_TO_LEFT": integer
static readonly "LAYOUT_NO_START_CONTEXT": integer
static readonly "LAYOUT_NO_LIMIT_CONTEXT": integer

constructor(arg0: $Map$Type<(any), (any)>)
constructor(arg0: string, arg1: integer, arg2: integer)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: string): $Font
public "getSize"(): integer
public "getAttributes"(): $Map<($TextAttribute), (any)>
public "getFamily"(): string
public "getFamily"(arg0: $Locale$Type): string
public "isBold"(): boolean
public "getTransform"(): $AffineTransform
public "isTransformed"(): boolean
public "isPlain"(): boolean
public "getStyle"(): integer
public static "getFont"(arg0: string, arg1: $Font$Type): $Font
public static "getFont"(arg0: string): $Font
public static "getFont"(arg0: $Map$Type<(any), (any)>): $Font
public "getNumGlyphs"(): integer
public "hasLayoutAttributes"(): boolean
public "getFontName"(): string
public "getFontName"(arg0: $Locale$Type): string
public static "textRequiresLayout"(arg0: (character)[], arg1: integer, arg2: integer): boolean
public static "createFonts"(arg0: $InputStream$Type): ($Font)[]
public static "createFonts"(arg0: $File$Type): ($Font)[]
public static "createFont"(arg0: integer, arg1: $InputStream$Type): $Font
public static "createFont"(arg0: integer, arg1: $File$Type): $Font
public "getPSName"(): string
public "getSize2D"(): float
public "isItalic"(): boolean
public "getMissingGlyphCode"(): integer
public "getBaselineFor"(arg0: character): byte
public "getAvailableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
public "deriveFont"(arg0: $Map$Type<(any), (any)>): $Font
public "deriveFont"(arg0: integer, arg1: $AffineTransform$Type): $Font
public "deriveFont"(arg0: integer, arg1: float): $Font
public "deriveFont"(arg0: float): $Font
public "deriveFont"(arg0: integer): $Font
public "deriveFont"(arg0: $AffineTransform$Type): $Font
public "canDisplay"(arg0: integer): boolean
public "canDisplay"(arg0: character): boolean
public "canDisplayUpTo"(arg0: string): integer
public "canDisplayUpTo"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "canDisplayUpTo"(arg0: $CharacterIterator$Type, arg1: integer, arg2: integer): integer
public "getItalicAngle"(): float
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: $FontRenderContext$Type): $LineMetrics
public "getLineMetrics"(arg0: $CharacterIterator$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $LineMetrics
public "getStringBounds"(arg0: string, arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: $FontRenderContext$Type): $Rectangle2D
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $Rectangle2D
public "getStringBounds"(arg0: $CharacterIterator$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$Type): $Rectangle2D
public "getMaxCharBounds"(arg0: $FontRenderContext$Type): $Rectangle2D
public "createGlyphVector"(arg0: $FontRenderContext$Type, arg1: string): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$Type, arg1: (character)[]): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$Type, arg1: (integer)[]): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$Type, arg1: $CharacterIterator$Type): $GlyphVector
public "layoutGlyphVector"(arg0: $FontRenderContext$Type, arg1: (character)[], arg2: integer, arg3: integer, arg4: integer): $GlyphVector
get "name"(): string
get "size"(): integer
get "attributes"(): $Map<($TextAttribute), (any)>
get "family"(): string
get "bold"(): boolean
get "transform"(): $AffineTransform
get "transformed"(): boolean
get "plain"(): boolean
get "style"(): integer
get "numGlyphs"(): integer
get "fontName"(): string
get "pSName"(): string
get "size2D"(): float
get "italic"(): boolean
get "missingGlyphCode"(): integer
get "availableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
get "italicAngle"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$Type = ($Font);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Font_ = $Font$Type;
}}
declare module "packages/java/awt/font/$LineMetrics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LineMetrics {


public "getHeight"(): float
public "getAscent"(): float
public "getDescent"(): float
public "getLeading"(): float
public "getNumChars"(): integer
public "getBaselineIndex"(): integer
public "getBaselineOffsets"(): (float)[]
public "getStrikethroughOffset"(): float
public "getStrikethroughThickness"(): float
public "getUnderlineOffset"(): float
public "getUnderlineThickness"(): float
get "height"(): float
get "ascent"(): float
get "descent"(): float
get "leading"(): float
get "numChars"(): integer
get "baselineIndex"(): integer
get "baselineOffsets"(): (float)[]
get "strikethroughOffset"(): float
get "strikethroughThickness"(): float
get "underlineOffset"(): float
get "underlineThickness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LineMetrics$Type = ($LineMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LineMetrics_ = $LineMetrics$Type;
}}
declare module "packages/java/awt/$JobAttributes$SidesType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $JobAttributes$SidesType extends $AttributeValue {
static readonly "ONE_SIDED": $JobAttributes$SidesType
static readonly "TWO_SIDED_LONG_EDGE": $JobAttributes$SidesType
static readonly "TWO_SIDED_SHORT_EDGE": $JobAttributes$SidesType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$SidesType$Type = ($JobAttributes$SidesType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes$SidesType_ = $JobAttributes$SidesType$Type;
}}
declare module "packages/java/awt/$JobAttributes$DialogType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $JobAttributes$DialogType extends $AttributeValue {
static readonly "COMMON": $JobAttributes$DialogType
static readonly "NATIVE": $JobAttributes$DialogType
static readonly "NONE": $JobAttributes$DialogType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$DialogType$Type = ($JobAttributes$DialogType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes$DialogType_ = $JobAttributes$DialogType$Type;
}}
declare module "packages/java/awt/dnd/$DropTargetListener" {
import {$DropTargetDropEvent, $DropTargetDropEvent$Type} from "packages/java/awt/dnd/$DropTargetDropEvent"
import {$DropTargetDragEvent, $DropTargetDragEvent$Type} from "packages/java/awt/dnd/$DropTargetDragEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$DropTargetEvent, $DropTargetEvent$Type} from "packages/java/awt/dnd/$DropTargetEvent"

export interface $DropTargetListener extends $EventListener {

 "drop"(arg0: $DropTargetDropEvent$Type): void
 "dragEnter"(arg0: $DropTargetDragEvent$Type): void
 "dragOver"(arg0: $DropTargetDragEvent$Type): void
 "dropActionChanged"(arg0: $DropTargetDragEvent$Type): void
 "dragExit"(arg0: $DropTargetEvent$Type): void
}

export namespace $DropTargetListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTargetListener$Type = ($DropTargetListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTargetListener_ = $DropTargetListener$Type;
}}
declare module "packages/java/awt/$PageAttributes$OriginType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $PageAttributes$OriginType extends $AttributeValue {
static readonly "PHYSICAL": $PageAttributes$OriginType
static readonly "PRINTABLE": $PageAttributes$OriginType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$OriginType$Type = ($PageAttributes$OriginType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes$OriginType_ = $PageAttributes$OriginType$Type;
}}
declare module "packages/java/awt/dnd/$DragGestureListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$DragGestureEvent, $DragGestureEvent$Type} from "packages/java/awt/dnd/$DragGestureEvent"

export interface $DragGestureListener extends $EventListener {

 "dragGestureRecognized"(arg0: $DragGestureEvent$Type): void

(arg0: $DragGestureEvent$Type): void
}

export namespace $DragGestureListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragGestureListener$Type = ($DragGestureListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragGestureListener_ = $DragGestureListener$Type;
}}
declare module "packages/java/awt/$JobAttributes" {
import {$JobAttributes$DefaultSelectionType, $JobAttributes$DefaultSelectionType$Type} from "packages/java/awt/$JobAttributes$DefaultSelectionType"
import {$JobAttributes$DialogType, $JobAttributes$DialogType$Type} from "packages/java/awt/$JobAttributes$DialogType"
import {$JobAttributes$SidesType, $JobAttributes$SidesType$Type} from "packages/java/awt/$JobAttributes$SidesType"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$JobAttributes$DestinationType, $JobAttributes$DestinationType$Type} from "packages/java/awt/$JobAttributes$DestinationType"
import {$JobAttributes$MultipleDocumentHandlingType, $JobAttributes$MultipleDocumentHandlingType$Type} from "packages/java/awt/$JobAttributes$MultipleDocumentHandlingType"

export class $JobAttributes implements $Cloneable {

constructor(arg0: integer, arg1: $JobAttributes$DefaultSelectionType$Type, arg2: $JobAttributes$DestinationType$Type, arg3: $JobAttributes$DialogType$Type, arg4: string, arg5: integer, arg6: integer, arg7: $JobAttributes$MultipleDocumentHandlingType$Type, arg8: ((integer)[])[], arg9: string, arg10: $JobAttributes$SidesType$Type)
constructor(arg0: $JobAttributes$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "set"(arg0: $JobAttributes$Type): void
public "getFileName"(): string
public "getDestination"(): $JobAttributes$DestinationType
public "getSides"(): $JobAttributes$SidesType
public "setDestination"(arg0: $JobAttributes$DestinationType$Type): void
public "setFileName"(arg0: string): void
public "setCopiesToDefault"(): void
public "setDefaultSelection"(arg0: $JobAttributes$DefaultSelectionType$Type): void
public "setDialog"(arg0: $JobAttributes$DialogType$Type): void
public "setMaxPage"(arg0: integer): void
public "setMinPage"(arg0: integer): void
public "setMultipleDocumentHandlingToDefault"(): void
public "setSidesToDefault"(): void
public "setCopies"(arg0: integer): void
public "setMultipleDocumentHandling"(arg0: $JobAttributes$MultipleDocumentHandlingType$Type): void
public "setPageRanges"(arg0: ((integer)[])[]): void
public "setPrinter"(arg0: string): void
public "setSides"(arg0: $JobAttributes$SidesType$Type): void
public "getCopies"(): integer
public "getDefaultSelection"(): $JobAttributes$DefaultSelectionType
public "getDialog"(): $JobAttributes$DialogType
public "getFromPage"(): integer
public "getMinPage"(): integer
public "setFromPage"(arg0: integer): void
public "getMaxPage"(): integer
public "getMultipleDocumentHandling"(): $JobAttributes$MultipleDocumentHandlingType
public "getPageRanges"(): ((integer)[])[]
public "getToPage"(): integer
public "getPrinter"(): string
public "setToPage"(arg0: integer): void
get "fileName"(): string
get "destination"(): $JobAttributes$DestinationType
get "sides"(): $JobAttributes$SidesType
set "destination"(value: $JobAttributes$DestinationType$Type)
set "fileName"(value: string)
set "defaultSelection"(value: $JobAttributes$DefaultSelectionType$Type)
set "dialog"(value: $JobAttributes$DialogType$Type)
set "maxPage"(value: integer)
set "minPage"(value: integer)
set "copies"(value: integer)
set "multipleDocumentHandling"(value: $JobAttributes$MultipleDocumentHandlingType$Type)
set "pageRanges"(value: ((integer)[])[])
set "printer"(value: string)
set "sides"(value: $JobAttributes$SidesType$Type)
get "copies"(): integer
get "defaultSelection"(): $JobAttributes$DefaultSelectionType
get "dialog"(): $JobAttributes$DialogType
get "fromPage"(): integer
get "minPage"(): integer
set "fromPage"(value: integer)
get "maxPage"(): integer
get "multipleDocumentHandling"(): $JobAttributes$MultipleDocumentHandlingType
get "pageRanges"(): ((integer)[])[]
get "toPage"(): integer
get "printer"(): string
set "toPage"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobAttributes$Type = ($JobAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobAttributes_ = $JobAttributes$Type;
}}
declare module "packages/java/awt/dnd/$DropTargetContext" {
import {$DropTarget, $DropTarget$Type} from "packages/java/awt/dnd/$DropTarget"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $DropTargetContext implements $Serializable {


public "getDropTarget"(): $DropTarget
public "getComponent"(): $Component
public "dropComplete"(arg0: boolean): void
get "dropTarget"(): $DropTarget
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropTargetContext$Type = ($DropTargetContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropTargetContext_ = $DropTargetContext$Type;
}}
declare module "packages/java/awt/font/$GlyphVector" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$GlyphJustificationInfo, $GlyphJustificationInfo$Type} from "packages/java/awt/font/$GlyphJustificationInfo"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$GlyphMetrics, $GlyphMetrics$Type} from "packages/java/awt/font/$GlyphMetrics"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$FontRenderContext, $FontRenderContext$Type} from "packages/java/awt/font/$FontRenderContext"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $GlyphVector implements $Cloneable {
static readonly "FLAG_HAS_TRANSFORMS": integer
static readonly "FLAG_HAS_POSITION_ADJUSTMENTS": integer
static readonly "FLAG_RUN_RTL": integer
static readonly "FLAG_COMPLEX_GLYPHS": integer
static readonly "FLAG_MASK": integer


public "equals"(arg0: $GlyphVector$Type): boolean
public "getVisualBounds"(): $Rectangle2D
public "getFont"(): $Font
public "getOutline"(): $Shape
public "getOutline"(arg0: float, arg1: float): $Shape
public "getFontRenderContext"(): $FontRenderContext
public "performDefaultLayout"(): void
public "getNumGlyphs"(): integer
public "getGlyphCode"(arg0: integer): integer
public "getGlyphCodes"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getGlyphCharIndex"(arg0: integer): integer
public "getGlyphCharIndices"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getLogicalBounds"(): $Rectangle2D
public "getPixelBounds"(arg0: $FontRenderContext$Type, arg1: float, arg2: float): $Rectangle
public "getGlyphOutline"(arg0: integer): $Shape
public "getGlyphOutline"(arg0: integer, arg1: float, arg2: float): $Shape
public "getGlyphPosition"(arg0: integer): $Point2D
public "setGlyphPosition"(arg0: integer, arg1: $Point2D$Type): void
public "getGlyphTransform"(arg0: integer): $AffineTransform
public "setGlyphTransform"(arg0: integer, arg1: $AffineTransform$Type): void
public "getLayoutFlags"(): integer
public "getGlyphPositions"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getGlyphLogicalBounds"(arg0: integer): $Shape
public "getGlyphVisualBounds"(arg0: integer): $Shape
public "getGlyphPixelBounds"(arg0: integer, arg1: $FontRenderContext$Type, arg2: float, arg3: float): $Rectangle
public "getGlyphMetrics"(arg0: integer): $GlyphMetrics
public "getGlyphJustificationInfo"(arg0: integer): $GlyphJustificationInfo
get "visualBounds"(): $Rectangle2D
get "font"(): $Font
get "outline"(): $Shape
get "fontRenderContext"(): $FontRenderContext
get "numGlyphs"(): integer
get "logicalBounds"(): $Rectangle2D
get "layoutFlags"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphVector$Type = ($GlyphVector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphVector_ = $GlyphVector$Type;
}}
declare module "packages/java/awt/color/$ColorSpace" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $ColorSpace implements $Serializable {
static readonly "TYPE_XYZ": integer
static readonly "TYPE_Lab": integer
static readonly "TYPE_Luv": integer
static readonly "TYPE_YCbCr": integer
static readonly "TYPE_Yxy": integer
static readonly "TYPE_RGB": integer
static readonly "TYPE_GRAY": integer
static readonly "TYPE_HSV": integer
static readonly "TYPE_HLS": integer
static readonly "TYPE_CMYK": integer
static readonly "TYPE_CMY": integer
static readonly "TYPE_2CLR": integer
static readonly "TYPE_3CLR": integer
static readonly "TYPE_4CLR": integer
static readonly "TYPE_5CLR": integer
static readonly "TYPE_6CLR": integer
static readonly "TYPE_7CLR": integer
static readonly "TYPE_8CLR": integer
static readonly "TYPE_9CLR": integer
static readonly "TYPE_ACLR": integer
static readonly "TYPE_BCLR": integer
static readonly "TYPE_CCLR": integer
static readonly "TYPE_DCLR": integer
static readonly "TYPE_ECLR": integer
static readonly "TYPE_FCLR": integer
static readonly "CS_sRGB": integer
static readonly "CS_LINEAR_RGB": integer
static readonly "CS_CIEXYZ": integer
static readonly "CS_PYCC": integer
static readonly "CS_GRAY": integer


public "getName"(arg0: integer): string
public static "getInstance"(arg0: integer): $ColorSpace
public "getType"(): integer
public "isCS_sRGB"(): boolean
public "fromRGB"(arg0: (float)[]): (float)[]
public "getMinValue"(arg0: integer): float
public "getMaxValue"(arg0: integer): float
public "getNumComponents"(): integer
public "toRGB"(arg0: (float)[]): (float)[]
public "toCIEXYZ"(arg0: (float)[]): (float)[]
public "fromCIEXYZ"(arg0: (float)[]): (float)[]
get "type"(): integer
get "cS_sRGB"(): boolean
get "numComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSpace$Type = ($ColorSpace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorSpace_ = $ColorSpace$Type;
}}
declare module "packages/java/awt/image/$BufferedImage" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$ImageProducer, $ImageProducer$Type} from "packages/java/awt/image/$ImageProducer"
import {$RenderedImage, $RenderedImage$Type} from "packages/java/awt/image/$RenderedImage"
import {$Vector, $Vector$Type} from "packages/java/util/$Vector"
import {$WritableRenderedImage, $WritableRenderedImage$Type} from "packages/java/awt/image/$WritableRenderedImage"
import {$IndexColorModel, $IndexColorModel$Type} from "packages/java/awt/image/$IndexColorModel"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$TileObserver, $TileObserver$Type} from "packages/java/awt/image/$TileObserver"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"
import {$Graphics2D, $Graphics2D$Type} from "packages/java/awt/$Graphics2D"
import {$Image, $Image$Type} from "packages/java/awt/$Image"

export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
static readonly "TYPE_CUSTOM": integer
static readonly "TYPE_INT_RGB": integer
static readonly "TYPE_INT_ARGB": integer
static readonly "TYPE_INT_ARGB_PRE": integer
static readonly "TYPE_INT_BGR": integer
static readonly "TYPE_3BYTE_BGR": integer
static readonly "TYPE_4BYTE_ABGR": integer
static readonly "TYPE_4BYTE_ABGR_PRE": integer
static readonly "TYPE_USHORT_565_RGB": integer
static readonly "TYPE_USHORT_555_RGB": integer
static readonly "TYPE_BYTE_GRAY": integer
static readonly "TYPE_USHORT_GRAY": integer
static readonly "TYPE_BYTE_BINARY": integer
static readonly "TYPE_BYTE_INDEXED": integer
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $IndexColorModel$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorModel$Type, arg1: $WritableRaster$Type, arg2: boolean, arg3: $Hashtable$Type<(any), (any)>)

public "getProperty"(arg0: string): any
public "getProperty"(arg0: string, arg1: $ImageObserver$Type): any
public "toString"(): string
public "getType"(): integer
public "getSource"(): $ImageProducer
public "getData"(): $Raster
public "getData"(arg0: $Rectangle$Type): $Raster
public "getPropertyNames"(): (string)[]
public "getTransparency"(): integer
public "copyData"(arg0: $WritableRaster$Type): $WritableRaster
public "isAlphaPremultiplied"(): boolean
public "createGraphics"(): $Graphics2D
public "getHeight"(): integer
public "getHeight"(arg0: $ImageObserver$Type): integer
public "getWidth"(): integer
public "getWidth"(arg0: $ImageObserver$Type): integer
public "getColorModel"(): $ColorModel
public "coerceData"(arg0: boolean): void
public "getSampleModel"(): $SampleModel
public "getRaster"(): $WritableRaster
public "getAlphaRaster"(): $WritableRaster
public "setRGB"(arg0: integer, arg1: integer, arg2: integer): void
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): void
public "getSubimage"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BufferedImage
public "getSources"(): $Vector<($RenderedImage)>
public "getNumXTiles"(): integer
public "getNumYTiles"(): integer
public "getMinTileX"(): integer
public "getMinTileY"(): integer
public "getTileWidth"(): integer
public "getTileHeight"(): integer
public "getTileGridXOffset"(): integer
public "getTileGridYOffset"(): integer
public "getTile"(arg0: integer, arg1: integer): $Raster
public "addTileObserver"(arg0: $TileObserver$Type): void
public "removeTileObserver"(arg0: $TileObserver$Type): void
public "isTileWritable"(arg0: integer, arg1: integer): boolean
public "getWritableTileIndices"(): ($Point)[]
public "hasTileWriters"(): boolean
public "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
public "releaseWritableTile"(arg0: integer, arg1: integer): void
public "setData"(arg0: $Raster$Type): void
public "getMinX"(): integer
public "getMinY"(): integer
public "getGraphics"(): $Graphics
public "getRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): (integer)[]
public "getRGB"(arg0: integer, arg1: integer): integer
get "type"(): integer
get "source"(): $ImageProducer
get "data"(): $Raster
get "propertyNames"(): (string)[]
get "transparency"(): integer
get "alphaPremultiplied"(): boolean
get "height"(): integer
get "width"(): integer
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "raster"(): $WritableRaster
get "alphaRaster"(): $WritableRaster
get "sources"(): $Vector<($RenderedImage)>
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "writableTileIndices"(): ($Point)[]
set "data"(value: $Raster$Type)
get "minX"(): integer
get "minY"(): integer
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImage$Type = ($BufferedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedImage_ = $BufferedImage$Type;
}}
declare module "packages/java/awt/$Dimension" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Dimension2D, $Dimension2D$Type} from "packages/java/awt/geom/$Dimension2D"

export class $Dimension extends $Dimension2D implements $Serializable {
 "width": integer
 "height": integer

constructor(arg0: $Dimension$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: integer, arg1: integer): void
public "getHeight"(): double
public "getWidth"(): double
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
get "height"(): double
get "width"(): double
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
declare module "packages/java/awt/$Graphics" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$Polygon, $Polygon$Type} from "packages/java/awt/$Polygon"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$FontMetrics, $FontMetrics$Type} from "packages/java/awt/$FontMetrics"
import {$Font, $Font$Type} from "packages/java/awt/$Font"
import {$ImageObserver, $ImageObserver$Type} from "packages/java/awt/image/$ImageObserver"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$Image, $Image$Type} from "packages/java/awt/$Image"

export class $Graphics {


/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "toString"(): string
public "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Graphics
public "create"(): $Graphics
public "setColor"(arg0: $Color$Type): void
public "dispose"(): void
public "setFont"(arg0: $Font$Type): void
public "clearRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: $AttributedCharacterIterator$Type, arg1: integer, arg2: integer): void
public "drawString"(arg0: string, arg1: integer, arg2: integer): void
public "setClip"(arg0: $Shape$Type): void
public "setClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$Type): boolean
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ImageObserver$Type): boolean
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $Color$Type, arg10: $ImageObserver$Type): boolean
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Color$Type, arg6: $ImageObserver$Type): boolean
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: $Color$Type, arg4: $ImageObserver$Type): boolean
public "drawImage"(arg0: $Image$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $ImageObserver$Type): boolean
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getFontMetrics"(): $FontMetrics
public "getFontMetrics"(arg0: $Font$Type): $FontMetrics
public "getClip"(): $Shape
public "getClipBounds"(arg0: $Rectangle$Type): $Rectangle
public "getClipBounds"(): $Rectangle
public "getColor"(): $Color
public "translate"(arg0: integer, arg1: integer): void
public "drawRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getFont"(): $Font
public "drawArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "clipRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setPaintMode"(): void
public "setXORMode"(arg0: $Color$Type): void
public "copyArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "fillOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "fillArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawPolyline"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawPolygon"(arg0: $Polygon$Type): void
public "fillPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "fillPolygon"(arg0: $Polygon$Type): void
public "drawChars"(arg0: (character)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawBytes"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
public "getClipRect"(): $Rectangle
public "hitClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
set "color"(value: $Color$Type)
set "font"(value: $Font$Type)
set "clip"(value: $Shape$Type)
get "fontMetrics"(): $FontMetrics
get "clip"(): $Shape
get "clipBounds"(): $Rectangle
get "color"(): $Color
get "font"(): $Font
set "xORMode"(value: $Color$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics$Type = ($Graphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graphics_ = $Graphics$Type;
}}
declare module "packages/java/awt/event/$ActionEvent" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"

export class $ActionEvent extends $AWTEvent {
static readonly "SHIFT_MASK": integer
static readonly "CTRL_MASK": integer
static readonly "META_MASK": integer
static readonly "ALT_MASK": integer
static readonly "ACTION_FIRST": integer
static readonly "ACTION_LAST": integer
static readonly "ACTION_PERFORMED": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: any, arg1: integer, arg2: string, arg3: long, arg4: integer)
constructor(arg0: any, arg1: integer, arg2: string, arg3: integer)
constructor(arg0: any, arg1: integer, arg2: string)

public "getModifiers"(): integer
public "paramString"(): string
public "getWhen"(): long
public "getActionCommand"(): string
get "modifiers"(): integer
get "when"(): long
get "actionCommand"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionEvent$Type = ($ActionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionEvent_ = $ActionEvent$Type;
}}
declare module "packages/java/awt/event/$WindowStateListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$WindowEvent, $WindowEvent$Type} from "packages/java/awt/event/$WindowEvent"

export interface $WindowStateListener extends $EventListener {

 "windowStateChanged"(arg0: $WindowEvent$Type): void

(arg0: $WindowEvent$Type): void
}

export namespace $WindowStateListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowStateListener$Type = ($WindowStateListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowStateListener_ = $WindowStateListener$Type;
}}
declare module "packages/java/awt/$MenuItem" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$MenuShortcut, $MenuShortcut$Type} from "packages/java/awt/$MenuShortcut"
import {$ActionListener, $ActionListener$Type} from "packages/java/awt/event/$ActionListener"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Accessible, $Accessible$Type} from "packages/javax/accessibility/$Accessible"
import {$AccessibleContext, $AccessibleContext$Type} from "packages/javax/accessibility/$AccessibleContext"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"

export class $MenuItem extends $MenuComponent implements $Accessible {

constructor(arg0: string, arg1: $MenuShortcut$Type)
constructor(arg0: string)
constructor()

public "paramString"(): string
public "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "enable"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "enable"(): void
public "addNotify"(): void
public "getAccessibleContext"(): $AccessibleContext
public "getLabel"(): string
public "getListeners"<T extends $EventListener>(arg0: $Class$Type<(T)>): (T)[]
public "setLabel"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "disable"(): void
public "setEnabled"(arg0: boolean): void
public "getActionCommand"(): string
public "getShortcut"(): $MenuShortcut
public "deleteShortcut"(): void
public "setShortcut"(arg0: $MenuShortcut$Type): void
public "setActionCommand"(arg0: string): void
public "addActionListener"(arg0: $ActionListener$Type): void
public "removeActionListener"(arg0: $ActionListener$Type): void
public "getActionListeners"(): ($ActionListener)[]
get "enabled"(): boolean
get "accessibleContext"(): $AccessibleContext
get "label"(): string
set "label"(value: string)
set "enabled"(value: boolean)
get "actionCommand"(): string
get "shortcut"(): $MenuShortcut
set "shortcut"(value: $MenuShortcut$Type)
set "actionCommand"(value: string)
get "actionListeners"(): ($ActionListener)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuItem$Type = ($MenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuItem_ = $MenuItem$Type;
}}
declare module "packages/java/awt/event/$HierarchyBoundsListener" {
import {$HierarchyEvent, $HierarchyEvent$Type} from "packages/java/awt/event/$HierarchyEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $HierarchyBoundsListener extends $EventListener {

 "ancestorMoved"(arg0: $HierarchyEvent$Type): void
 "ancestorResized"(arg0: $HierarchyEvent$Type): void
}

export namespace $HierarchyBoundsListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HierarchyBoundsListener$Type = ($HierarchyBoundsListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HierarchyBoundsListener_ = $HierarchyBoundsListener$Type;
}}
declare module "packages/java/awt/$Cursor" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Cursor implements $Serializable {
static readonly "DEFAULT_CURSOR": integer
static readonly "CROSSHAIR_CURSOR": integer
static readonly "TEXT_CURSOR": integer
static readonly "WAIT_CURSOR": integer
static readonly "SW_RESIZE_CURSOR": integer
static readonly "SE_RESIZE_CURSOR": integer
static readonly "NW_RESIZE_CURSOR": integer
static readonly "NE_RESIZE_CURSOR": integer
static readonly "N_RESIZE_CURSOR": integer
static readonly "S_RESIZE_CURSOR": integer
static readonly "W_RESIZE_CURSOR": integer
static readonly "E_RESIZE_CURSOR": integer
static readonly "HAND_CURSOR": integer
static readonly "MOVE_CURSOR": integer
static readonly "CUSTOM_CURSOR": integer

constructor(arg0: integer)

public "getName"(): string
public "toString"(): string
public "getType"(): integer
public static "getPredefinedCursor"(arg0: integer): $Cursor
public static "getSystemCustomCursor"(arg0: string): $Cursor
public static "getDefaultCursor"(): $Cursor
get "name"(): string
get "type"(): integer
get "defaultCursor"(): $Cursor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cursor$Type = ($Cursor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cursor_ = $Cursor$Type;
}}
declare module "packages/java/awt/$BufferCapabilities" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BufferCapabilities$FlipContents, $BufferCapabilities$FlipContents$Type} from "packages/java/awt/$BufferCapabilities$FlipContents"
import {$ImageCapabilities, $ImageCapabilities$Type} from "packages/java/awt/$ImageCapabilities"

export class $BufferCapabilities implements $Cloneable {

constructor(arg0: $ImageCapabilities$Type, arg1: $ImageCapabilities$Type, arg2: $BufferCapabilities$FlipContents$Type)

public "clone"(): any
public "isPageFlipping"(): boolean
public "getFrontBufferCapabilities"(): $ImageCapabilities
public "getBackBufferCapabilities"(): $ImageCapabilities
public "getFlipContents"(): $BufferCapabilities$FlipContents
public "isFullScreenRequired"(): boolean
public "isMultiBufferAvailable"(): boolean
get "pageFlipping"(): boolean
get "frontBufferCapabilities"(): $ImageCapabilities
get "backBufferCapabilities"(): $ImageCapabilities
get "flipContents"(): $BufferCapabilities$FlipContents
get "fullScreenRequired"(): boolean
get "multiBufferAvailable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCapabilities$Type = ($BufferCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferCapabilities_ = $BufferCapabilities$Type;
}}
declare module "packages/java/awt/$Window$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Window$Type extends $Enum<($Window$Type)> {
static readonly "NORMAL": $Window$Type
static readonly "UTILITY": $Window$Type
static readonly "POPUP": $Window$Type


public static "values"(): ($Window$Type)[]
public static "valueOf"(arg0: string): $Window$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$Type$Type = (("normal") | ("popup") | ("utility")) | ($Window$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Window$Type_ = $Window$Type$Type;
}}
declare module "packages/java/awt/event/$ContainerEvent" {
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$ComponentEvent, $ComponentEvent$Type} from "packages/java/awt/event/$ComponentEvent"

export class $ContainerEvent extends $ComponentEvent {
static readonly "CONTAINER_FIRST": integer
static readonly "CONTAINER_LAST": integer
static readonly "COMPONENT_ADDED": integer
static readonly "COMPONENT_REMOVED": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: $Component$Type)

public "getChild"(): $Component
public "paramString"(): string
public "getContainer"(): $Container
get "child"(): $Component
get "container"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerEvent$Type = ($ContainerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerEvent_ = $ContainerEvent$Type;
}}
declare module "packages/java/awt/datatransfer/$Clipboard" {
import {$DataFlavor, $DataFlavor$Type} from "packages/java/awt/datatransfer/$DataFlavor"
import {$FlavorListener, $FlavorListener$Type} from "packages/java/awt/datatransfer/$FlavorListener"
import {$ClipboardOwner, $ClipboardOwner$Type} from "packages/java/awt/datatransfer/$ClipboardOwner"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export class $Clipboard {

constructor(arg0: string)

public "getName"(): string
public "getContents"(arg0: any): $Transferable
public "getData"(arg0: $DataFlavor$Type): any
public "setContents"(arg0: $Transferable$Type, arg1: $ClipboardOwner$Type): void
public "getAvailableDataFlavors"(): ($DataFlavor)[]
public "isDataFlavorAvailable"(arg0: $DataFlavor$Type): boolean
public "addFlavorListener"(arg0: $FlavorListener$Type): void
public "removeFlavorListener"(arg0: $FlavorListener$Type): void
public "getFlavorListeners"(): ($FlavorListener)[]
get "name"(): string
get "availableDataFlavors"(): ($DataFlavor)[]
get "flavorListeners"(): ($FlavorListener)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clipboard$Type = ($Clipboard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clipboard_ = $Clipboard$Type;
}}
declare module "packages/java/awt/$Rectangle" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
 "x": integer
 "y": integer
 "width": integer
 "height": integer
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer

constructor(arg0: $Point$Type, arg1: $Dimension$Type)
constructor(arg0: $Dimension$Type)
constructor(arg0: $Point$Type)
constructor()
constructor(arg0: $Rectangle$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer)

public "intersects"(arg0: $Rectangle$Type): boolean
public "getY"(): double
public "add"(arg0: $Rectangle$Type): void
public "add"(arg0: $Point$Type): void
public "add"(arg0: integer, arg1: integer): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "isEmpty"(): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "contains"(arg0: $Rectangle$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: $Point$Type): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "resize"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "move"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "union"(arg0: $Rectangle$Type): $Rectangle
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setBounds"(arg0: $Rectangle$Type): void
public "getHeight"(): double
public "getWidth"(): double
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "intersection"(arg0: $Rectangle$Type): $Rectangle
public "translate"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: integer, arg1: integer): void
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$Type): $Rectangle2D
public "getX"(): double
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle2D$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
get "y"(): double
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
set "bounds"(value: $Rectangle$Type)
get "height"(): double
get "width"(): double
set "location"(value: $Point$Type)
get "bounds2D"(): $Rectangle2D
get "x"(): double
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
declare module "packages/java/awt/event/$MouseEvent" {
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$InputEvent, $InputEvent$Type} from "packages/java/awt/event/$InputEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $MouseEvent extends $InputEvent {
static readonly "MOUSE_FIRST": integer
static readonly "MOUSE_LAST": integer
static readonly "MOUSE_CLICKED": integer
static readonly "MOUSE_PRESSED": integer
static readonly "MOUSE_RELEASED": integer
static readonly "MOUSE_MOVED": integer
static readonly "MOUSE_ENTERED": integer
static readonly "MOUSE_EXITED": integer
static readonly "MOUSE_DRAGGED": integer
static readonly "MOUSE_WHEEL": integer
static readonly "NOBUTTON": integer
static readonly "BUTTON1": integer
static readonly "BUTTON2": integer
static readonly "BUTTON3": integer
/**
 * 
 * @deprecated
 */
static readonly "SHIFT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "CTRL_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "META_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_GRAPH_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON1_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON2_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON3_MASK": integer
static readonly "SHIFT_DOWN_MASK": integer
static readonly "CTRL_DOWN_MASK": integer
static readonly "META_DOWN_MASK": integer
static readonly "ALT_DOWN_MASK": integer
static readonly "BUTTON1_DOWN_MASK": integer
static readonly "BUTTON2_DOWN_MASK": integer
static readonly "BUTTON3_DOWN_MASK": integer
static readonly "ALT_GRAPH_DOWN_MASK": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: integer)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: integer)

public "getY"(): integer
public "paramString"(): string
public "getButton"(): integer
public "getLocationOnScreen"(): $Point
public "getXOnScreen"(): integer
public "getYOnScreen"(): integer
public "getClickCount"(): integer
public "isPopupTrigger"(): boolean
public "getPoint"(): $Point
public "getX"(): integer
public "getModifiersEx"(): integer
public "translatePoint"(arg0: integer, arg1: integer): void
public static "getMouseModifiersText"(arg0: integer): string
get "y"(): integer
get "button"(): integer
get "locationOnScreen"(): $Point
get "xOnScreen"(): integer
get "yOnScreen"(): integer
get "clickCount"(): integer
get "popupTrigger"(): boolean
get "point"(): $Point
get "x"(): integer
get "modifiersEx"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEvent$Type = ($MouseEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseEvent_ = $MouseEvent$Type;
}}
declare module "packages/java/awt/image/$DataBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataBuffer {
static readonly "TYPE_BYTE": integer
static readonly "TYPE_USHORT": integer
static readonly "TYPE_SHORT": integer
static readonly "TYPE_INT": integer
static readonly "TYPE_FLOAT": integer
static readonly "TYPE_DOUBLE": integer
static readonly "TYPE_UNDEFINED": integer


public "getSize"(): integer
public "getOffset"(): integer
public "getOffsets"(): (integer)[]
public static "getDataTypeSize"(arg0: integer): integer
public "getDataType"(): integer
public "setElem"(arg0: integer, arg1: integer): void
public "setElem"(arg0: integer, arg1: integer, arg2: integer): void
public "getElem"(arg0: integer): integer
public "getElem"(arg0: integer, arg1: integer): integer
public "getNumBanks"(): integer
public "getElemFloat"(arg0: integer): float
public "getElemFloat"(arg0: integer, arg1: integer): float
public "setElemFloat"(arg0: integer, arg1: integer, arg2: float): void
public "setElemFloat"(arg0: integer, arg1: float): void
public "getElemDouble"(arg0: integer, arg1: integer): double
public "getElemDouble"(arg0: integer): double
public "setElemDouble"(arg0: integer, arg1: double): void
public "setElemDouble"(arg0: integer, arg1: integer, arg2: double): void
get "size"(): integer
get "offset"(): integer
get "offsets"(): (integer)[]
get "dataType"(): integer
get "numBanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataBuffer$Type = ($DataBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataBuffer_ = $DataBuffer$Type;
}}
declare module "packages/java/awt/event/$KeyEvent" {
import {$InputEvent, $InputEvent$Type} from "packages/java/awt/event/$InputEvent"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $KeyEvent extends $InputEvent {
static readonly "KEY_FIRST": integer
static readonly "KEY_LAST": integer
static readonly "KEY_TYPED": integer
static readonly "KEY_PRESSED": integer
static readonly "KEY_RELEASED": integer
static readonly "VK_ENTER": integer
static readonly "VK_BACK_SPACE": integer
static readonly "VK_TAB": integer
static readonly "VK_CANCEL": integer
static readonly "VK_CLEAR": integer
static readonly "VK_SHIFT": integer
static readonly "VK_CONTROL": integer
static readonly "VK_ALT": integer
static readonly "VK_PAUSE": integer
static readonly "VK_CAPS_LOCK": integer
static readonly "VK_ESCAPE": integer
static readonly "VK_SPACE": integer
static readonly "VK_PAGE_UP": integer
static readonly "VK_PAGE_DOWN": integer
static readonly "VK_END": integer
static readonly "VK_HOME": integer
static readonly "VK_LEFT": integer
static readonly "VK_UP": integer
static readonly "VK_RIGHT": integer
static readonly "VK_DOWN": integer
static readonly "VK_COMMA": integer
static readonly "VK_MINUS": integer
static readonly "VK_PERIOD": integer
static readonly "VK_SLASH": integer
static readonly "VK_0": integer
static readonly "VK_1": integer
static readonly "VK_2": integer
static readonly "VK_3": integer
static readonly "VK_4": integer
static readonly "VK_5": integer
static readonly "VK_6": integer
static readonly "VK_7": integer
static readonly "VK_8": integer
static readonly "VK_9": integer
static readonly "VK_SEMICOLON": integer
static readonly "VK_EQUALS": integer
static readonly "VK_A": integer
static readonly "VK_B": integer
static readonly "VK_C": integer
static readonly "VK_D": integer
static readonly "VK_E": integer
static readonly "VK_F": integer
static readonly "VK_G": integer
static readonly "VK_H": integer
static readonly "VK_I": integer
static readonly "VK_J": integer
static readonly "VK_K": integer
static readonly "VK_L": integer
static readonly "VK_M": integer
static readonly "VK_N": integer
static readonly "VK_O": integer
static readonly "VK_P": integer
static readonly "VK_Q": integer
static readonly "VK_R": integer
static readonly "VK_S": integer
static readonly "VK_T": integer
static readonly "VK_U": integer
static readonly "VK_V": integer
static readonly "VK_W": integer
static readonly "VK_X": integer
static readonly "VK_Y": integer
static readonly "VK_Z": integer
static readonly "VK_OPEN_BRACKET": integer
static readonly "VK_BACK_SLASH": integer
static readonly "VK_CLOSE_BRACKET": integer
static readonly "VK_NUMPAD0": integer
static readonly "VK_NUMPAD1": integer
static readonly "VK_NUMPAD2": integer
static readonly "VK_NUMPAD3": integer
static readonly "VK_NUMPAD4": integer
static readonly "VK_NUMPAD5": integer
static readonly "VK_NUMPAD6": integer
static readonly "VK_NUMPAD7": integer
static readonly "VK_NUMPAD8": integer
static readonly "VK_NUMPAD9": integer
static readonly "VK_MULTIPLY": integer
static readonly "VK_ADD": integer
static readonly "VK_SEPARATER": integer
static readonly "VK_SEPARATOR": integer
static readonly "VK_SUBTRACT": integer
static readonly "VK_DECIMAL": integer
static readonly "VK_DIVIDE": integer
static readonly "VK_DELETE": integer
static readonly "VK_NUM_LOCK": integer
static readonly "VK_SCROLL_LOCK": integer
static readonly "VK_F1": integer
static readonly "VK_F2": integer
static readonly "VK_F3": integer
static readonly "VK_F4": integer
static readonly "VK_F5": integer
static readonly "VK_F6": integer
static readonly "VK_F7": integer
static readonly "VK_F8": integer
static readonly "VK_F9": integer
static readonly "VK_F10": integer
static readonly "VK_F11": integer
static readonly "VK_F12": integer
static readonly "VK_F13": integer
static readonly "VK_F14": integer
static readonly "VK_F15": integer
static readonly "VK_F16": integer
static readonly "VK_F17": integer
static readonly "VK_F18": integer
static readonly "VK_F19": integer
static readonly "VK_F20": integer
static readonly "VK_F21": integer
static readonly "VK_F22": integer
static readonly "VK_F23": integer
static readonly "VK_F24": integer
static readonly "VK_PRINTSCREEN": integer
static readonly "VK_INSERT": integer
static readonly "VK_HELP": integer
static readonly "VK_META": integer
static readonly "VK_BACK_QUOTE": integer
static readonly "VK_QUOTE": integer
static readonly "VK_KP_UP": integer
static readonly "VK_KP_DOWN": integer
static readonly "VK_KP_LEFT": integer
static readonly "VK_KP_RIGHT": integer
static readonly "VK_DEAD_GRAVE": integer
static readonly "VK_DEAD_ACUTE": integer
static readonly "VK_DEAD_CIRCUMFLEX": integer
static readonly "VK_DEAD_TILDE": integer
static readonly "VK_DEAD_MACRON": integer
static readonly "VK_DEAD_BREVE": integer
static readonly "VK_DEAD_ABOVEDOT": integer
static readonly "VK_DEAD_DIAERESIS": integer
static readonly "VK_DEAD_ABOVERING": integer
static readonly "VK_DEAD_DOUBLEACUTE": integer
static readonly "VK_DEAD_CARON": integer
static readonly "VK_DEAD_CEDILLA": integer
static readonly "VK_DEAD_OGONEK": integer
static readonly "VK_DEAD_IOTA": integer
static readonly "VK_DEAD_VOICED_SOUND": integer
static readonly "VK_DEAD_SEMIVOICED_SOUND": integer
static readonly "VK_AMPERSAND": integer
static readonly "VK_ASTERISK": integer
static readonly "VK_QUOTEDBL": integer
static readonly "VK_LESS": integer
static readonly "VK_GREATER": integer
static readonly "VK_BRACELEFT": integer
static readonly "VK_BRACERIGHT": integer
static readonly "VK_AT": integer
static readonly "VK_COLON": integer
static readonly "VK_CIRCUMFLEX": integer
static readonly "VK_DOLLAR": integer
static readonly "VK_EURO_SIGN": integer
static readonly "VK_EXCLAMATION_MARK": integer
static readonly "VK_INVERTED_EXCLAMATION_MARK": integer
static readonly "VK_LEFT_PARENTHESIS": integer
static readonly "VK_NUMBER_SIGN": integer
static readonly "VK_PLUS": integer
static readonly "VK_RIGHT_PARENTHESIS": integer
static readonly "VK_UNDERSCORE": integer
static readonly "VK_WINDOWS": integer
static readonly "VK_CONTEXT_MENU": integer
static readonly "VK_FINAL": integer
static readonly "VK_CONVERT": integer
static readonly "VK_NONCONVERT": integer
static readonly "VK_ACCEPT": integer
static readonly "VK_MODECHANGE": integer
static readonly "VK_KANA": integer
static readonly "VK_KANJI": integer
static readonly "VK_ALPHANUMERIC": integer
static readonly "VK_KATAKANA": integer
static readonly "VK_HIRAGANA": integer
static readonly "VK_FULL_WIDTH": integer
static readonly "VK_HALF_WIDTH": integer
static readonly "VK_ROMAN_CHARACTERS": integer
static readonly "VK_ALL_CANDIDATES": integer
static readonly "VK_PREVIOUS_CANDIDATE": integer
static readonly "VK_CODE_INPUT": integer
static readonly "VK_JAPANESE_KATAKANA": integer
static readonly "VK_JAPANESE_HIRAGANA": integer
static readonly "VK_JAPANESE_ROMAN": integer
static readonly "VK_KANA_LOCK": integer
static readonly "VK_INPUT_METHOD_ON_OFF": integer
static readonly "VK_CUT": integer
static readonly "VK_COPY": integer
static readonly "VK_PASTE": integer
static readonly "VK_UNDO": integer
static readonly "VK_AGAIN": integer
static readonly "VK_FIND": integer
static readonly "VK_PROPS": integer
static readonly "VK_STOP": integer
static readonly "VK_COMPOSE": integer
static readonly "VK_ALT_GRAPH": integer
static readonly "VK_BEGIN": integer
static readonly "VK_UNDEFINED": integer
static readonly "CHAR_UNDEFINED": character
static readonly "KEY_LOCATION_UNKNOWN": integer
static readonly "KEY_LOCATION_STANDARD": integer
static readonly "KEY_LOCATION_LEFT": integer
static readonly "KEY_LOCATION_RIGHT": integer
static readonly "KEY_LOCATION_NUMPAD": integer
/**
 * 
 * @deprecated
 */
static readonly "SHIFT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "CTRL_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "META_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "ALT_GRAPH_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON1_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON2_MASK": integer
/**
 * 
 * @deprecated
 */
static readonly "BUTTON3_MASK": integer
static readonly "SHIFT_DOWN_MASK": integer
static readonly "CTRL_DOWN_MASK": integer
static readonly "META_DOWN_MASK": integer
static readonly "ALT_DOWN_MASK": integer
static readonly "BUTTON1_DOWN_MASK": integer
static readonly "BUTTON2_DOWN_MASK": integer
static readonly "BUTTON3_DOWN_MASK": integer
static readonly "ALT_GRAPH_DOWN_MASK": integer
static readonly "COMPONENT_FIRST": integer
static readonly "COMPONENT_LAST": integer
static readonly "COMPONENT_MOVED": integer
static readonly "COMPONENT_RESIZED": integer
static readonly "COMPONENT_SHOWN": integer
static readonly "COMPONENT_HIDDEN": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: character)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer, arg5: character, arg6: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: integer, arg4: integer)

public "paramString"(): string
public "setKeyChar"(arg0: character): void
public "getKeyChar"(): character
public "getExtendedKeyCode"(): integer
public "getKeyCode"(): integer
public "setKeyCode"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setModifiers"(arg0: integer): void
public "isActionKey"(): boolean
public "getKeyLocation"(): integer
public static "getKeyText"(arg0: integer): string
/**
 * 
 * @deprecated
 */
public static "getKeyModifiersText"(arg0: integer): string
public static "getExtendedKeyCodeForChar"(arg0: integer): integer
set "keyChar"(value: character)
get "keyChar"(): character
get "extendedKeyCode"(): integer
get "keyCode"(): integer
set "keyCode"(value: integer)
set "modifiers"(value: integer)
get "actionKey"(): boolean
get "keyLocation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEvent$Type = ($KeyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEvent_ = $KeyEvent$Type;
}}
declare module "packages/java/awt/dnd/$DragSourceDragEvent" {
import {$DragSourceEvent, $DragSourceEvent$Type} from "packages/java/awt/dnd/$DragSourceEvent"
import {$DragSourceContext, $DragSourceContext$Type} from "packages/java/awt/dnd/$DragSourceContext"

export class $DragSourceDragEvent extends $DragSourceEvent {

constructor(arg0: $DragSourceContext$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $DragSourceContext$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "getTargetActions"(): integer
public "getGestureModifiers"(): integer
public "getGestureModifiersEx"(): integer
public "getUserAction"(): integer
public "getDropAction"(): integer
get "targetActions"(): integer
get "gestureModifiers"(): integer
get "gestureModifiersEx"(): integer
get "userAction"(): integer
get "dropAction"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragSourceDragEvent$Type = ($DragSourceDragEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragSourceDragEvent_ = $DragSourceDragEvent$Type;
}}
declare module "packages/java/awt/image/$RenderedImage" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Vector, $Vector$Type} from "packages/java/util/$Vector"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export interface $RenderedImage {

 "getProperty"(arg0: string): any
 "getData"(arg0: $Rectangle$Type): $Raster
 "getData"(): $Raster
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$Type): $WritableRaster
 "getHeight"(): integer
 "getWidth"(): integer
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getSources"(): $Vector<($RenderedImage)>
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
 "getMinX"(): integer
 "getMinY"(): integer
}

export namespace $RenderedImage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedImage$Type = ($RenderedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderedImage_ = $RenderedImage$Type;
}}
declare module "packages/java/awt/$PageAttributes" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$PageAttributes$MediaType, $PageAttributes$MediaType$Type} from "packages/java/awt/$PageAttributes$MediaType"
import {$PageAttributes$ColorType, $PageAttributes$ColorType$Type} from "packages/java/awt/$PageAttributes$ColorType"
import {$PageAttributes$OrientationRequestedType, $PageAttributes$OrientationRequestedType$Type} from "packages/java/awt/$PageAttributes$OrientationRequestedType"
import {$PageAttributes$OriginType, $PageAttributes$OriginType$Type} from "packages/java/awt/$PageAttributes$OriginType"
import {$PageAttributes$PrintQualityType, $PageAttributes$PrintQualityType$Type} from "packages/java/awt/$PageAttributes$PrintQualityType"

export class $PageAttributes implements $Cloneable {

constructor(arg0: $PageAttributes$ColorType$Type, arg1: $PageAttributes$MediaType$Type, arg2: $PageAttributes$OrientationRequestedType$Type, arg3: $PageAttributes$OriginType$Type, arg4: $PageAttributes$PrintQualityType$Type, arg5: (integer)[])
constructor(arg0: $PageAttributes$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "set"(arg0: $PageAttributes$Type): void
public "setColor"(arg0: $PageAttributes$ColorType$Type): void
public "getOrigin"(): $PageAttributes$OriginType
public "getColor"(): $PageAttributes$ColorType
public "setMediaToDefault"(): void
public "setOrientationRequestedToDefault"(): void
public "setOrigin"(arg0: $PageAttributes$OriginType$Type): void
public "setPrintQualityToDefault"(): void
public "setPrinterResolutionToDefault"(): void
public "setMedia"(arg0: $PageAttributes$MediaType$Type): void
public "setOrientationRequested"(arg0: integer): void
public "setOrientationRequested"(arg0: $PageAttributes$OrientationRequestedType$Type): void
public "setPrintQuality"(arg0: $PageAttributes$PrintQualityType$Type): void
public "setPrintQuality"(arg0: integer): void
public "setPrinterResolution"(arg0: (integer)[]): void
public "setPrinterResolution"(arg0: integer): void
public "getMedia"(): $PageAttributes$MediaType
public "getOrientationRequested"(): $PageAttributes$OrientationRequestedType
public "getPrintQuality"(): $PageAttributes$PrintQualityType
public "getPrinterResolution"(): (integer)[]
set "color"(value: $PageAttributes$ColorType$Type)
get "origin"(): $PageAttributes$OriginType
get "color"(): $PageAttributes$ColorType
set "origin"(value: $PageAttributes$OriginType$Type)
set "media"(value: $PageAttributes$MediaType$Type)
set "orientationRequested"(value: integer)
set "orientationRequested"(value: $PageAttributes$OrientationRequestedType$Type)
set "printQuality"(value: $PageAttributes$PrintQualityType$Type)
set "printQuality"(value: integer)
set "printerResolution"(value: (integer)[])
set "printerResolution"(value: integer)
get "media"(): $PageAttributes$MediaType
get "orientationRequested"(): $PageAttributes$OrientationRequestedType
get "printQuality"(): $PageAttributes$PrintQualityType
get "printerResolution"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$Type = ($PageAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes_ = $PageAttributes$Type;
}}
declare module "packages/java/awt/$MenuShortcut" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $MenuShortcut implements $Serializable {

constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)

public "equals"(arg0: $MenuShortcut$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getKey"(): integer
public "usesShiftModifier"(): boolean
get "key"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuShortcut$Type = ($MenuShortcut);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuShortcut_ = $MenuShortcut$Type;
}}
declare module "packages/java/awt/font/$FontRenderContext" {
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $FontRenderContext {

constructor(arg0: $AffineTransform$Type, arg1: any, arg2: any)
constructor(arg0: $AffineTransform$Type, arg1: boolean, arg2: boolean)

public "equals"(arg0: any): boolean
public "equals"(arg0: $FontRenderContext$Type): boolean
public "hashCode"(): integer
public "getTransform"(): $AffineTransform
public "isTransformed"(): boolean
public "getTransformType"(): integer
public "isAntiAliased"(): boolean
public "usesFractionalMetrics"(): boolean
public "getAntiAliasingHint"(): any
public "getFractionalMetricsHint"(): any
get "transform"(): $AffineTransform
get "transformed"(): boolean
get "transformType"(): integer
get "antiAliased"(): boolean
get "antiAliasingHint"(): any
get "fractionalMetricsHint"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontRenderContext$Type = ($FontRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontRenderContext_ = $FontRenderContext$Type;
}}
declare module "packages/java/awt/geom/$Line2D" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Line2D implements $Shape, $Cloneable {


public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle2D$Type): boolean
public "clone"(): any
public "contains"(arg0: $Rectangle2D$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "getBounds"(): $Rectangle
public "getX1"(): double
public "getY1"(): double
public "getX2"(): double
public "getY2"(): double
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "intersectsLine"(arg0: $Line2D$Type): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "setLine"(arg0: $Line2D$Type): void
public "setLine"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "setLine"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getP1"(): $Point2D
public "getP2"(): $Point2D
public "relativeCCW"(arg0: $Point2D$Type): integer
public static "relativeCCW"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): integer
public "relativeCCW"(arg0: double, arg1: double): integer
public static "linesIntersect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): boolean
public "ptSegDistSq"(arg0: double, arg1: double): double
public static "ptSegDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptSegDistSq"(arg0: $Point2D$Type): double
public "ptSegDist"(arg0: $Point2D$Type): double
public "ptSegDist"(arg0: double, arg1: double): double
public static "ptSegDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDistSq"(arg0: $Point2D$Type): double
public "ptLineDistSq"(arg0: double, arg1: double): double
public static "ptLineDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: double, arg1: double): double
public "ptLineDist"(arg0: $Point2D$Type): double
public static "ptLineDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "getBounds2D"(): $Rectangle2D
get "bounds"(): $Rectangle
get "x1"(): double
get "y1"(): double
get "x2"(): double
get "y2"(): double
set "line"(value: $Line2D$Type)
get "p1"(): $Point2D
get "p2"(): $Point2D
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Line2D$Type = ($Line2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Line2D_ = $Line2D$Type;
}}
declare module "packages/java/awt/event/$InputMethodEvent" {
import {$AWTEvent, $AWTEvent$Type} from "packages/java/awt/$AWTEvent"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$TextHitInfo, $TextHitInfo$Type} from "packages/java/awt/font/$TextHitInfo"
import {$Component, $Component$Type} from "packages/java/awt/$Component"

export class $InputMethodEvent extends $AWTEvent {
static readonly "INPUT_METHOD_FIRST": integer
static readonly "INPUT_METHOD_TEXT_CHANGED": integer
static readonly "CARET_POSITION_CHANGED": integer
static readonly "INPUT_METHOD_LAST": integer
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: $Component$Type, arg1: integer, arg2: $TextHitInfo$Type, arg3: $TextHitInfo$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: $AttributedCharacterIterator$Type, arg3: integer, arg4: $TextHitInfo$Type, arg5: $TextHitInfo$Type)
constructor(arg0: $Component$Type, arg1: integer, arg2: long, arg3: $AttributedCharacterIterator$Type, arg4: integer, arg5: $TextHitInfo$Type, arg6: $TextHitInfo$Type)

public "paramString"(): string
public "getText"(): $AttributedCharacterIterator
public "getCaret"(): $TextHitInfo
public "getCommittedCharacterCount"(): integer
public "isConsumed"(): boolean
public "getWhen"(): long
public "consume"(): void
public "getVisiblePosition"(): $TextHitInfo
get "text"(): $AttributedCharacterIterator
get "caret"(): $TextHitInfo
get "committedCharacterCount"(): integer
get "consumed"(): boolean
get "when"(): long
get "visiblePosition"(): $TextHitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputMethodEvent$Type = ($InputMethodEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputMethodEvent_ = $InputMethodEvent$Type;
}}
declare module "packages/java/awt/$ComponentOrientation" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ResourceBundle, $ResourceBundle$Type} from "packages/java/util/$ResourceBundle"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $ComponentOrientation implements $Serializable {
static readonly "LEFT_TO_RIGHT": $ComponentOrientation
static readonly "RIGHT_TO_LEFT": $ComponentOrientation
static readonly "UNKNOWN": $ComponentOrientation


public "isLeftToRight"(): boolean
/**
 * 
 * @deprecated
 */
public static "getOrientation"(arg0: $ResourceBundle$Type): $ComponentOrientation
public static "getOrientation"(arg0: $Locale$Type): $ComponentOrientation
public "isHorizontal"(): boolean
get "leftToRight"(): boolean
get "horizontal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentOrientation$Type = ($ComponentOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentOrientation_ = $ComponentOrientation$Type;
}}
declare module "packages/java/awt/datatransfer/$FlavorEvent" {
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"
import {$Clipboard, $Clipboard$Type} from "packages/java/awt/datatransfer/$Clipboard"

export class $FlavorEvent extends $EventObject {

constructor(arg0: $Clipboard$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlavorEvent$Type = ($FlavorEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlavorEvent_ = $FlavorEvent$Type;
}}
declare module "packages/java/awt/$PaintContext" {
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export interface $PaintContext {

 "dispose"(): void
 "getColorModel"(): $ColorModel
 "getRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Raster
}

export namespace $PaintContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintContext$Type = ($PaintContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintContext_ = $PaintContext$Type;
}}
declare module "packages/java/awt/$PageAttributes$MediaType" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $PageAttributes$MediaType extends $AttributeValue {
static readonly "ISO_4A0": $PageAttributes$MediaType
static readonly "ISO_2A0": $PageAttributes$MediaType
static readonly "ISO_A0": $PageAttributes$MediaType
static readonly "ISO_A1": $PageAttributes$MediaType
static readonly "ISO_A2": $PageAttributes$MediaType
static readonly "ISO_A3": $PageAttributes$MediaType
static readonly "ISO_A4": $PageAttributes$MediaType
static readonly "ISO_A5": $PageAttributes$MediaType
static readonly "ISO_A6": $PageAttributes$MediaType
static readonly "ISO_A7": $PageAttributes$MediaType
static readonly "ISO_A8": $PageAttributes$MediaType
static readonly "ISO_A9": $PageAttributes$MediaType
static readonly "ISO_A10": $PageAttributes$MediaType
static readonly "ISO_B0": $PageAttributes$MediaType
static readonly "ISO_B1": $PageAttributes$MediaType
static readonly "ISO_B2": $PageAttributes$MediaType
static readonly "ISO_B3": $PageAttributes$MediaType
static readonly "ISO_B4": $PageAttributes$MediaType
static readonly "ISO_B5": $PageAttributes$MediaType
static readonly "ISO_B6": $PageAttributes$MediaType
static readonly "ISO_B7": $PageAttributes$MediaType
static readonly "ISO_B8": $PageAttributes$MediaType
static readonly "ISO_B9": $PageAttributes$MediaType
static readonly "ISO_B10": $PageAttributes$MediaType
static readonly "JIS_B0": $PageAttributes$MediaType
static readonly "JIS_B1": $PageAttributes$MediaType
static readonly "JIS_B2": $PageAttributes$MediaType
static readonly "JIS_B3": $PageAttributes$MediaType
static readonly "JIS_B4": $PageAttributes$MediaType
static readonly "JIS_B5": $PageAttributes$MediaType
static readonly "JIS_B6": $PageAttributes$MediaType
static readonly "JIS_B7": $PageAttributes$MediaType
static readonly "JIS_B8": $PageAttributes$MediaType
static readonly "JIS_B9": $PageAttributes$MediaType
static readonly "JIS_B10": $PageAttributes$MediaType
static readonly "ISO_C0": $PageAttributes$MediaType
static readonly "ISO_C1": $PageAttributes$MediaType
static readonly "ISO_C2": $PageAttributes$MediaType
static readonly "ISO_C3": $PageAttributes$MediaType
static readonly "ISO_C4": $PageAttributes$MediaType
static readonly "ISO_C5": $PageAttributes$MediaType
static readonly "ISO_C6": $PageAttributes$MediaType
static readonly "ISO_C7": $PageAttributes$MediaType
static readonly "ISO_C8": $PageAttributes$MediaType
static readonly "ISO_C9": $PageAttributes$MediaType
static readonly "ISO_C10": $PageAttributes$MediaType
static readonly "ISO_DESIGNATED_LONG": $PageAttributes$MediaType
static readonly "EXECUTIVE": $PageAttributes$MediaType
static readonly "FOLIO": $PageAttributes$MediaType
static readonly "INVOICE": $PageAttributes$MediaType
static readonly "LEDGER": $PageAttributes$MediaType
static readonly "NA_LETTER": $PageAttributes$MediaType
static readonly "NA_LEGAL": $PageAttributes$MediaType
static readonly "QUARTO": $PageAttributes$MediaType
static readonly "A": $PageAttributes$MediaType
static readonly "B": $PageAttributes$MediaType
static readonly "C": $PageAttributes$MediaType
static readonly "D": $PageAttributes$MediaType
static readonly "E": $PageAttributes$MediaType
static readonly "NA_10X15_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_10X14_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_10X13_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_9X12_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_9X11_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_7X9_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_6X9_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_9_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_10_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_11_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_12_ENVELOPE": $PageAttributes$MediaType
static readonly "NA_NUMBER_14_ENVELOPE": $PageAttributes$MediaType
static readonly "INVITE_ENVELOPE": $PageAttributes$MediaType
static readonly "ITALY_ENVELOPE": $PageAttributes$MediaType
static readonly "MONARCH_ENVELOPE": $PageAttributes$MediaType
static readonly "PERSONAL_ENVELOPE": $PageAttributes$MediaType
static readonly "A0": $PageAttributes$MediaType
static readonly "A1": $PageAttributes$MediaType
static readonly "A2": $PageAttributes$MediaType
static readonly "A3": $PageAttributes$MediaType
static readonly "A4": $PageAttributes$MediaType
static readonly "A5": $PageAttributes$MediaType
static readonly "A6": $PageAttributes$MediaType
static readonly "A7": $PageAttributes$MediaType
static readonly "A8": $PageAttributes$MediaType
static readonly "A9": $PageAttributes$MediaType
static readonly "A10": $PageAttributes$MediaType
static readonly "B0": $PageAttributes$MediaType
static readonly "B1": $PageAttributes$MediaType
static readonly "B2": $PageAttributes$MediaType
static readonly "B3": $PageAttributes$MediaType
static readonly "B4": $PageAttributes$MediaType
static readonly "ISO_B4_ENVELOPE": $PageAttributes$MediaType
static readonly "B5": $PageAttributes$MediaType
static readonly "ISO_B5_ENVELOPE": $PageAttributes$MediaType
static readonly "B6": $PageAttributes$MediaType
static readonly "B7": $PageAttributes$MediaType
static readonly "B8": $PageAttributes$MediaType
static readonly "B9": $PageAttributes$MediaType
static readonly "B10": $PageAttributes$MediaType
static readonly "C0": $PageAttributes$MediaType
static readonly "ISO_C0_ENVELOPE": $PageAttributes$MediaType
static readonly "C1": $PageAttributes$MediaType
static readonly "ISO_C1_ENVELOPE": $PageAttributes$MediaType
static readonly "C2": $PageAttributes$MediaType
static readonly "ISO_C2_ENVELOPE": $PageAttributes$MediaType
static readonly "C3": $PageAttributes$MediaType
static readonly "ISO_C3_ENVELOPE": $PageAttributes$MediaType
static readonly "C4": $PageAttributes$MediaType
static readonly "ISO_C4_ENVELOPE": $PageAttributes$MediaType
static readonly "C5": $PageAttributes$MediaType
static readonly "ISO_C5_ENVELOPE": $PageAttributes$MediaType
static readonly "C6": $PageAttributes$MediaType
static readonly "ISO_C6_ENVELOPE": $PageAttributes$MediaType
static readonly "C7": $PageAttributes$MediaType
static readonly "ISO_C7_ENVELOPE": $PageAttributes$MediaType
static readonly "C8": $PageAttributes$MediaType
static readonly "ISO_C8_ENVELOPE": $PageAttributes$MediaType
static readonly "C9": $PageAttributes$MediaType
static readonly "ISO_C9_ENVELOPE": $PageAttributes$MediaType
static readonly "C10": $PageAttributes$MediaType
static readonly "ISO_C10_ENVELOPE": $PageAttributes$MediaType
static readonly "ISO_DESIGNATED_LONG_ENVELOPE": $PageAttributes$MediaType
static readonly "STATEMENT": $PageAttributes$MediaType
static readonly "TABLOID": $PageAttributes$MediaType
static readonly "LETTER": $PageAttributes$MediaType
static readonly "NOTE": $PageAttributes$MediaType
static readonly "LEGAL": $PageAttributes$MediaType
static readonly "ENV_10X15": $PageAttributes$MediaType
static readonly "ENV_10X14": $PageAttributes$MediaType
static readonly "ENV_10X13": $PageAttributes$MediaType
static readonly "ENV_9X12": $PageAttributes$MediaType
static readonly "ENV_9X11": $PageAttributes$MediaType
static readonly "ENV_7X9": $PageAttributes$MediaType
static readonly "ENV_6X9": $PageAttributes$MediaType
static readonly "ENV_9": $PageAttributes$MediaType
static readonly "ENV_10": $PageAttributes$MediaType
static readonly "ENV_11": $PageAttributes$MediaType
static readonly "ENV_12": $PageAttributes$MediaType
static readonly "ENV_14": $PageAttributes$MediaType
static readonly "ENV_INVITE": $PageAttributes$MediaType
static readonly "ENV_ITALY": $PageAttributes$MediaType
static readonly "ENV_MONARCH": $PageAttributes$MediaType
static readonly "ENV_PERSONAL": $PageAttributes$MediaType
static readonly "INVITE": $PageAttributes$MediaType
static readonly "ITALY": $PageAttributes$MediaType
static readonly "MONARCH": $PageAttributes$MediaType
static readonly "PERSONAL": $PageAttributes$MediaType


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageAttributes$MediaType$Type = ($PageAttributes$MediaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageAttributes$MediaType_ = $PageAttributes$MediaType$Type;
}}
declare module "packages/java/awt/$MenuContainer" {
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$MenuComponent, $MenuComponent$Type} from "packages/java/awt/$MenuComponent"
import {$Font, $Font$Type} from "packages/java/awt/$Font"

export interface $MenuContainer {

 "remove"(arg0: $MenuComponent$Type): void
/**
 * 
 * @deprecated
 */
 "postEvent"(arg0: $Event$Type): boolean
 "getFont"(): $Font
}

export namespace $MenuContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuContainer$Type = ($MenuContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuContainer_ = $MenuContainer$Type;
}}
declare module "packages/java/awt/$Paint" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$PaintContext, $PaintContext$Type} from "packages/java/awt/$PaintContext"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export interface $Paint extends $Transparency {

 "createContext"(arg0: $ColorModel$Type, arg1: $Rectangle$Type, arg2: $Rectangle2D$Type, arg3: $AffineTransform$Type, arg4: $RenderingHints$Type): $PaintContext
 "getTransparency"(): integer
}

export namespace $Paint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paint$Type = ($Paint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paint_ = $Paint$Type;
}}
declare module "packages/java/awt/dnd/$DragGestureEvent" {
import {$Cursor, $Cursor$Type} from "packages/java/awt/$Cursor"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$InputEvent, $InputEvent$Type} from "packages/java/awt/event/$InputEvent"
import {$DragSource, $DragSource$Type} from "packages/java/awt/dnd/$DragSource"
import {$DragGestureRecognizer, $DragGestureRecognizer$Type} from "packages/java/awt/dnd/$DragGestureRecognizer"
import {$Component, $Component$Type} from "packages/java/awt/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$DragSourceListener, $DragSourceListener$Type} from "packages/java/awt/dnd/$DragSourceListener"
import {$Image, $Image$Type} from "packages/java/awt/$Image"
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"
import {$Transferable, $Transferable$Type} from "packages/java/awt/datatransfer/$Transferable"

export class $DragGestureEvent extends $EventObject {

constructor(arg0: $DragGestureRecognizer$Type, arg1: integer, arg2: $Point$Type, arg3: $List$Type<(any)>)

public "toArray"(arg0: (any)[]): (any)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<($InputEvent)>
public "getComponent"(): $Component
public "startDrag"(arg0: $Cursor$Type, arg1: $Image$Type, arg2: $Point$Type, arg3: $Transferable$Type, arg4: $DragSourceListener$Type): void
public "startDrag"(arg0: $Cursor$Type, arg1: $Transferable$Type, arg2: $DragSourceListener$Type): void
public "startDrag"(arg0: $Cursor$Type, arg1: $Transferable$Type): void
public "getDragSource"(): $DragSource
public "getTriggerEvent"(): $InputEvent
public "getSourceAsDragGestureRecognizer"(): $DragGestureRecognizer
public "getDragOrigin"(): $Point
public "getDragAction"(): integer
get "component"(): $Component
get "dragSource"(): $DragSource
get "triggerEvent"(): $InputEvent
get "sourceAsDragGestureRecognizer"(): $DragGestureRecognizer
get "dragOrigin"(): $Point
get "dragAction"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragGestureEvent$Type = ($DragGestureEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragGestureEvent_ = $DragGestureEvent$Type;
}}
declare module "packages/java/awt/$BufferCapabilities$FlipContents" {
import {$AttributeValue, $AttributeValue$Type} from "packages/java/awt/$AttributeValue"

export class $BufferCapabilities$FlipContents extends $AttributeValue {
static readonly "UNDEFINED": $BufferCapabilities$FlipContents
static readonly "BACKGROUND": $BufferCapabilities$FlipContents
static readonly "PRIOR": $BufferCapabilities$FlipContents
static readonly "COPIED": $BufferCapabilities$FlipContents


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCapabilities$FlipContents$Type = ($BufferCapabilities$FlipContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferCapabilities$FlipContents_ = $BufferCapabilities$FlipContents$Type;
}}
declare module "packages/java/awt/$AWTEvent" {
import {$Event, $Event$Type} from "packages/java/awt/$Event"
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"

export class $AWTEvent extends $EventObject {
static readonly "COMPONENT_EVENT_MASK": long
static readonly "CONTAINER_EVENT_MASK": long
static readonly "FOCUS_EVENT_MASK": long
static readonly "KEY_EVENT_MASK": long
static readonly "MOUSE_EVENT_MASK": long
static readonly "MOUSE_MOTION_EVENT_MASK": long
static readonly "WINDOW_EVENT_MASK": long
static readonly "ACTION_EVENT_MASK": long
static readonly "ADJUSTMENT_EVENT_MASK": long
static readonly "ITEM_EVENT_MASK": long
static readonly "TEXT_EVENT_MASK": long
static readonly "INPUT_METHOD_EVENT_MASK": long
static readonly "PAINT_EVENT_MASK": long
static readonly "INVOCATION_EVENT_MASK": long
static readonly "HIERARCHY_EVENT_MASK": long
static readonly "HIERARCHY_BOUNDS_EVENT_MASK": long
static readonly "MOUSE_WHEEL_EVENT_MASK": long
static readonly "WINDOW_STATE_EVENT_MASK": long
static readonly "WINDOW_FOCUS_EVENT_MASK": long
static readonly "RESERVED_ID_MAX": integer

constructor(arg0: any, arg1: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Event$Type)

public "toString"(): string
public "paramString"(): string
public "getID"(): integer
public "setSource"(arg0: any): void
get "iD"(): integer
set "source"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AWTEvent$Type = ($AWTEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AWTEvent_ = $AWTEvent$Type;
}}
