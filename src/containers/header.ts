import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header, { IPropsActions, IPropsHeader } from '../components/header'
import { IState } from '../reducers'

const mapStateToProps = (state: IState): IPropsHeader => ({
  options: state.views.options,
  selectedOption: state.router.location.pathname,
})

const mapDispatchToProps = (dispatch): IPropsActions =>
  bindActionCreators(
    {
      onSelectOption: push,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
