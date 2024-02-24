import React from 'react'
import { useState } from 'react';

const HookContador = () => {
    const [contador, setContador] = useState(0);

    function incrementaContador() {
        setContador(contador + 1);
    }

  return (
    <div>
        <h1>Contador com useState: </h1>
        <button onClick={incrementaContador}>Incrementar Contador</button>
        <h2>O contador está em: </h2>
    </div>
  )
}

export default HookContador