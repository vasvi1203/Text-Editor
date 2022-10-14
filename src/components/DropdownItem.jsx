import { NavDropdown } from 'react-bootstrap'

function DropdownItem({ name, content }) {
  return (
    <NavDropdown title={name} id="basic-nav-dropdown">
      {content.map((c) => (
        c.items.map((item, index) => (
          <NavDropdown.Item href="#"><i className={c.icons[index]}></i>  {item}</NavDropdown.Item>
        ))
      ))}
    </NavDropdown>
  )
}

export default DropdownItem