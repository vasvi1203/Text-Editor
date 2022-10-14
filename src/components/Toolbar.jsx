import { Container, Navbar } from "react-bootstrap"
import ToolbarList from "./ToolbarList"

function Toolbar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid className="text-center">
                <Navbar.Toggle aria-controls="external-toggle"/>
                <Navbar.Collapse id="external-toggle" className="bg-dark p-1 row gx-2">
                    <ToolbarList />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Toolbar