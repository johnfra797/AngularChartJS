import { Elevation } from "./elevation.model"
import { Period } from "./period.model"

export interface Properties {
    updated: string
    units: string
    forecastGenerator: string
    generatedAt: string
    updateTime: string
    validTimes: string
    elevation: Elevation
    periods: Period[]
  }