import { useContext } from "react";
import { Button, Modal } from 'react-bootstrap'
import { ColorPicker, useColor } from "react-color-palette"
import { useDispatch,useSelector } from 'react-redux';
import ToolbarContext from "../context/ToolbarContext";
import { closeModal } from "../features/modal/modalSlice";

function ColorModal({ isModalOpen }) {
    const dispatch = useDispatch();
    const [color, setColor] = useColor("hex", "#a30808");
    const { execFunc } = useContext(ToolbarContext);
    const { modalName } = useSelector((state) => state.modal);

    return (
        <>
            <Modal show={isModalOpen} onHide={() => { dispatch(closeModal()); }}>
                <Modal.Header closeButton>
                <Modal.Title>Select Color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
                </Modal.Body>
                <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={() => {
                        dispatch(closeModal());
                    }}>
                    Close
                </Button>

                <Button 
                    variant="primary"
                    onClick={() => {
                        dispatch(closeModal())
                        execFunc(modalName, color.hex)
                    }}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ColorModal