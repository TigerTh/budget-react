import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveIrCancel from './ButtonSaveIrCancel';
import EntryForm from './EntryForm';
function NewEntryForm({addEntry,description, value, isExpense, setDescription, setValue, setIsExpense}) {

  return (
    <Form unstackable>
      <EntryForm 
      description={description} 
      value={value}
      isExpense={isExpense}
      setValue={setValue}
      setDescription={setDescription}
      setIsExpense={setIsExpense}
      > </EntryForm>
    <ButtonSaveIrCancel addEntry={addEntry} />
  </Form>
  )
}

export default NewEntryForm
