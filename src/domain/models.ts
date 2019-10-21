export interface IOption {
  text: string
  route: string
}

export interface IReview {
  name: string
  comment: string
  position: string
}

export enum Views {
  DEFAULT = '/',
  REVIEWS = '/page-1',
  CALCULATOR = '/page-2',
}

export interface IResponseMenu {
  menu: {
    items: IOption[]
  }
}

export interface IResponseSlider {
  slider: {
    title: string
    reviews: IReview[]
  }
}

export interface IResponseCalculator {
  calculator: {
    title: string
    description: string
  }
}
