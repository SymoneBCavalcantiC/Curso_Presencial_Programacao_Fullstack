import React from 'react'

const FahrenheitParaCelsius = (props) => {

    let celsius = (props.temperatura - 32) * 5/9;
  return (
    <div>
        <h1>{props.temperatura}ºF é o mesmo que {celsius} ºC</h1>
    </div>
  )
}

export default FahrenheitParaCelsius