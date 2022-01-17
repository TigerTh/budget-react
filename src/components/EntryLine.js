import React from 'react'
import { Fragment } from 'react';
import { Grid,Segment } from 'semantic-ui-react';
function EntryLine({id,description,value,isExpense=false,deleteEntry,editEntry}) {
  return (
    <Fragment>
      <Segment color={isExpense?'red':'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column width={3}>
            <button onClick={()=>editEntry(id)}>edit</button>
            <button onClick={()=>deleteEntry(id)}>trash</button>
              {/* <Icon name="edit" bordered></Icon>
              <Icon name="trash"></Icon> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine
