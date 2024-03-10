import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    // async,await xử lý bất đồng bộ
    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id);
        console.log("componemt res", data);

        if (data && data.EC === 0) {
            // EM là EM "Create a new participant succeed"
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user.email =
                    <b>
                        {dataDelete && dataDelete.email ? dataDelete.email : ""}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;