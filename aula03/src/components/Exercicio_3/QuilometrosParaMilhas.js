import React from 'react'

const QuilometrosParaMilhas = (props) => {
  return (
    <div>
        <h1>{props.dist1} km é equivalente a {(props.dist1 / 1.609)} milhas</h1>
    </div>
  )
}

export default QuilometrosParaMilhas