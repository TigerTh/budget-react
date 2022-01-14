import React from 'react'
import { Button } from 'semantic-ui-react';

function ButtonSaveIrCancel() {
  return (
    <Button.Group style={{marginTop:20}}>
    <Button>Cancel</Button>
    <Button.Or>
      <Button>Ok</Button>
    </Button.Or>
  </Button.Group>
  )
}

export default ButtonSaveIrCancel
