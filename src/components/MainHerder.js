import React from 'react'
import {Header} from 'semantic-ui-react'

function MainHerder({title,type="h1"}) {
  return (
    <div>
      <Header as={type}>{title}</Header>
    </div>
  )
}

export default MainHerder
