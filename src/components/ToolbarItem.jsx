import { Button, Col, Form } from 'react-bootstrap'

function ToolbarItem({ type, cols, icons, options }) {
    return (
        <Col xs={{span: cols.xs[0], offset: cols.xs[1]}} sm={{span: cols.sm[0], offset: cols.sm[1]}} md={{span: cols.md[0], offset: cols.md[1]}} lg={{span: cols.lg[0], offset: cols.lg[1]}} xxl={{span: cols.xxl[0], offset: cols.xxl[1]}}>
            {type == "form1" && 
                <Form>
                    <Form.Select aria-label="font">
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Form.Select>
                </Form>
            } 
            
            {type == "form2" && 
                <Form>
                    <Form.Control type="number" id="fontSize" name="fontSize" min="1" max="20" />
                </Form>
            }

            {type == "button" && 
                icons.map((icon, index) => (
                    <Button key={index} variant='dark'>
                        <i className={icon}></i>
                    </Button>
                ))
            }
        </Col>
    )
}

export default ToolbarItem