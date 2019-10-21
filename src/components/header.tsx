import classnames from 'classnames'
import React from 'react'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { IOption, Views } from '../domain/models'

const Header = (props: IProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Navbar color="white" light expand="md">
      <div className="container d-flex w-100">
        <NavbarBrand href={Views.DEFAULT}>
          <img src="bellotero.png" />
        </NavbarBrand>
        <NavbarToggler color="red" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {props.options.map((option, index) => (
              <NavItem key={index}>
                <NavLink
                  onClick={() => props.onSelectOption(`/${option.route}`)}
                  className={classnames('nav-link', {
                    'nav-selected': `/${option.route}` === props.selectedOption,
                  })}
                >
                  {option.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

type IProps = IPropsHeader & IPropsActions

export interface IPropsHeader {
  options: IOption[]
  selectedOption: string
}

export interface IPropsActions {
  onSelectOption: (route: string) => void
}

export default Header
