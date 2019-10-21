import { shallow } from 'enzyme'
import React from 'react'
import Header from '../../components/header'
import { Views } from '../../domain/models'

describe('Header', () => {
  it('should render Header component', () => {
    const component = shallow(
      <Header
        options={[
          {
            text: 'Calculator example',
            route: Views.CALCULATOR,
          },
        ]}
        onSelectOption={() => undefined}
        selectedOption={Views.CALCULATOR}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
