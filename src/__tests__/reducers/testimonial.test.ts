import { LoadReviewsInformation } from '../../actions'
import { testReducer } from '../util'
import testimonial from './../jsons/testimonial.json'

describe('Testimonial reducer', () => {
  it('loads the data for testimonial view', () => {
    testReducer(
      LoadReviewsInformation(testimonial),
      s => undefined,
      s => {
        s.testimonial.title = testimonial.slider.title
        s.testimonial.reviews = testimonial.slider.reviews
      },
    )
  })

  it('loads the data for testimonial view with errors', () => {
    const response = new Error()
    testReducer(
      LoadReviewsInformation(response),
      s => undefined,
      s => undefined,
    )
  })
})
