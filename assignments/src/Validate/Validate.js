import React from 'react';

const validate = (props) => {

return (
  <React.Fragment>
    <p>{props.length}</p>
    <p>{props.text}</p>
  </React.Fragment>
  )
}

export default validate;