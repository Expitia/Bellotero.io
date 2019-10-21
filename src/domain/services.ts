import axios from 'axios'
import { IResponseCalculator, IResponseMenu, IResponseSlider } from './models'

const serviceURL =
  'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master'

const executeRequest = async options => {
  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => error)
}

export const getOptions = (): Promise<IResponseMenu | Error> =>
  executeRequest({
    method: 'GET',
    url: `${serviceURL}/app.json`,
  })

export const getReviews = (): Promise<IResponseSlider | Error> =>
  executeRequest({
    method: 'GET',
    url: `${serviceURL}/page1.json`,
  })

export const getCalculatorInfo = (): Promise<IResponseCalculator | Error> =>
  executeRequest({
    method: 'GET',
    url: `${serviceURL}/page2.json`,
  })
