import React,{Fragment} from 'react'
import loading from './loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img src={`/${loading}`} alt="Loading..." style={{width : "200px",display : "block",margin : "auto",marginTop : "180px"}}/>
    </Fragment>
  )
}

export default Loading
