export interface Weather {
    name: string
    code: string
  }
  export class Weather {

    constructor(
      public name: string,
      public code: string,
    ) { }
  
  }
  