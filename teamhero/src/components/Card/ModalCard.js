import Modal from 'react-bootstrap/Modal'

const ModalCard = props => {
    return (
        <Modal
            size="sm"
            show={props.show}
            onHide={props.showHandler}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
        </Modal>
    )
}

export default ModalCard;