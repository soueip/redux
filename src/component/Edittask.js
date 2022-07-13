import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updtask } from '../redux/todoSlice/TodoSlice';
import { useDispatch } from 'react-redux';

function Edittask({id}) {

  const dispatch = useDispatch();
  const [edited, setEdited] = useState({
    title:"",
    description:"",
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div> <>
    <Button variant="primary" onClick={handleShow}>
      Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit task</Modal.Title>
      </Modal.Header>
      <Modal.Body>    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setEdited({...edited, title:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setEdited({...edited, description:e.target.value})}/>
      </Form.Group>

     
    </Form></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>dispatch(updtask({id:id, edited}))}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default Edittask