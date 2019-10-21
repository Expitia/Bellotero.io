import { shallow } from 'enzyme'
import React from 'react'
import Calculator from '../../components/calculator'

describe('Calculator', () => {
  it('should render Calculator component', () => {
    const component = shallow(
      <Calculator
        title="Testing"
        footCost={15}
        fullTime={50}
        spending={150}
        annualSaving={150}
        description="Testing component"
        onChangeSpending={() => undefined}
        onChangeFullTime={() => undefined}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
