import { Context } from "./context.model"
import { Geometry } from "./geometry.model"
import { Properties } from "./properties.model"

export interface Root {
    "@context": [string, Context]
    type: string
    geometry: Geometry
    properties: Properties
  }