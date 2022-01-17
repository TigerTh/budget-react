import React from 'react'
import { Button } from 'semantic-ui-react';

function ButtonSaveIrCancel({addEntry}) {
  return (
    <Button.Group style={{marginTop:20}}>
    <Button>Cancel</Button>
    <Button.Or>
      <Button onClick={()=>{addEntry()}}>Ok</Button>
    </Button.Or>
  </Button.Group>
  )
}

export default ButtonSaveIrCancel
