import { connect } from 'react-redux'
import Testimonial, { IProps } from '../components/testimonial'
import { IState } from '../reducers'

const mapStateToProps = (state: IState): IProps => ({
  title: state.testimonial.title,
  reviews: state.testimonial.reviews,
})

export default connect(mapStateToProps)(Testimonial)
