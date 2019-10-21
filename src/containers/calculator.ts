import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Calculator, {
  IPropsActions,
  IPropsCalculator,
} from '../components/calculator'
import { IState } from '../reducers'
import { UpdateFullTime, UpdateSpending } from './../actions'

const mapStateToProps = (state: IState): IPropsCalculator => ({
  title: state.calculator.title,
  footCost: state.calculator.footCost,
  fullTime: state.calculator.fullTime,
  spending: state.calculator.spending,
  description: state.calculator.description,
  annualSaving: state.calculator.annualSaving,
})

const mapDispatchToProps = (dispatch): IPropsActions =>
  bindActionCreators(
    {
      onChangeSpending: UpdateSpending,
      onChangeFullTime: UpdateFullTime,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator)
