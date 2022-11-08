import { useContext, useState } from 'react'
import { Button, Col, Form, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import ToolbarContext from "../context/ToolbarContext"
import { openModal } from '../features/modal/modalSlice'

function ToolbarItem({ type, cols, icons, options, names }) {
    const dispatch = useDispatch();
    const {execFunc, copyText, selectFont, fontSize} = useContext(ToolbarContext)
    
    return (
        <Col xs={{span: cols.xs[0], offset: cols.xs[1]}} sm={{span: cols.sm[0], offset: cols.sm[1]}} md={{span: cols.md[0], offset: cols.md[1]}} lg={{span: cols.lg[0], offset: cols.lg[1]}} xxl={{span: cols.xxl[0], offset: cols.xxl[1]}}>
            {type === "form1" && 
                <OverlayTrigger
                key="form1"
                placement="bottom"
                overlay={
                    <Tooltip>
                    Select font
                    </Tooltip>
                }>
                    <Form>
                        <Form.Select aria-label="font" id="font"  onChange={e => selectFont(e.target.value)}>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </Form>
                </OverlayTrigger>
            } 
            
            {type === "form2" && 
                <OverlayTrigger
                key="form2"
                placement="bottom"
                overlay={
                    <Tooltip>
                    Change font size
                    </Tooltip>
                }>
                    <Form>
                        {/* <Form.Control type="number" id="fontSize" name="fontSize" min="1" max="7" step="1" onChange={fontSize}/> */}
                        <Form.Select aria-label="fontSize" id="fontSize"  onChange={e => fontSize(e.target.value)}>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </Form>
                </OverlayTrigger>
            }

            {type === "button" && 
                icons.map((icon, index) => (
                    <OverlayTrigger
                        key={index}
                        placement="bottom"
                        overlay={
                            <Tooltip>
                            {names[index].charAt(0).toUpperCase() + names[index].slice(1)}
                            </Tooltip>
                    }>
                        <Button key={index} variant='dark' id={names[index]} onClick={
                            names[index] === "text color" || names[index] === "highlight color" ? () => { dispatch(openModal(names[index])); } 
                            : (e) => execFunc(e.target.id)}>
                            <i className={icon}></i>
                        </Button>
                    </OverlayTrigger>
                ))
            }
        </Col>
    )
}

export default ToolbarItem