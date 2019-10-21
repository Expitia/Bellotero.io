import { shallow } from 'enzyme'
import React from 'react'
import Testimonial from '../../components/testimonial'

describe('Testimonial', () => {
  it('should render Testimonial component', () => {
    const component = shallow(
      <Testimonial
        title="Titulo de prueba"
        reviews={[
          {
            name: 'Juan Prueba',
            position: 'Probador profesional',
            comment: 'Fue una prueba muy placentera',
          },
        ]}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
