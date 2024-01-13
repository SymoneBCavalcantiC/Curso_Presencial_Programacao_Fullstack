import React from 'react'

const CelsiusParaFahrenheit = (props) => {
  return (
    <div>
        <h1> {props.Celsius1}ºC é o mesmo que {(props.Celsius1 * 1.8) + 32}ºF</h1>
    </div>
  )
}

export default CelsiusParaFahrenheit