import React from 'react'
import Header from '../Header/Header';

function LayOut({children}) {
  return (
    
<>
<Header/>
<div>{children}</div>
</>
 )
}

export default LayOut