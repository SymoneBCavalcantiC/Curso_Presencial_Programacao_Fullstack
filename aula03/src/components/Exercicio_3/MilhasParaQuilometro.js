import React from 'react'

const MilhasParaQuilometro = (props) => {
    let km = (props.milhas * 1.609);
  return (
    <div>
        <h1>{props.milhas} milhas é equivalente a {km} quilômetros </h1>
    </div>
  )
}

export default MilhasParaQuilometro