import React from 'react'

function PhotoFrame({ text, children }) {
  return (
    <div style={{border: "20px solid chocolate"}}>
        <h1>{text}</h1>
        {children}
    </div>
  )
}

export default PhotoFrame