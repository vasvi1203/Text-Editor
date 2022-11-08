import { NavDropdown } from 'react-bootstrap'

function DropdownItem({ name, content }) {
  return (
    <NavDropdown title={name} id="menu-dropdown">
      {content.map((c) => (
        c.items.map((item, index1) => (
            <NavDropdown.Item href="#" key={index1}><i className={c.icons[index1]}></i> {item} {item === "Text" ?
              <><i className="fa-solid fa-caret-right"></i>  
              <div className='dropdown-menu dropdown-submenu'>
                {c.subitems.map((subitem, index2) => (
                  <NavDropdown.Item href="#" key={index2}><i className={c.subicons[index2]}></i> {subitem} </NavDropdown.Item>))    }            
                </div>
              </> : null
              }
            </NavDropdown.Item>
        ))
      ))}
    </NavDropdown>
  )
}

export default DropdownItem