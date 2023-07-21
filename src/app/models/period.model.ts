import { Dewpoint } from "./dewpoint.model"
import { ProbabilityOfPrecipitation } from "./probabilityOfPrecipitation.model"
import { RelativeHumidity } from "./relativeHumidity.model"

export interface Period {
    number: number
    name: string
    startTime: string
    endTime: string
    isDaytime: boolean
    temperature: number
    temperatureUnit: string
    temperatureTrend: any
    probabilityOfPrecipitation: ProbabilityOfPrecipitation
    dewpoint: Dewpoint
    relativeHumidity: RelativeHumidity
    windSpeed: string
    windDirection: string
    icon: string
    shortForecast: string
    detailedForecast: string
  }