import React from 'react'
import { Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({isOpen,setIsOpen,description, value, isExpense, setDescription, setValue, setIsExpense}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
                  description={description} 
                  value={value}
                  isExpense={isExpense}
                  setValue={setValue}
                  setDescription={setDescription}
                  setIsExpense={setIsExpense}></EntryForm>
        <Modal.Actions>
          <button onClick={()=>setIsOpen(false)}>close</button>
          <button onClick={()=>setIsOpen(false)}>Ok</button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  )
}

export default ModalEdit
