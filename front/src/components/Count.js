import React, { useState } from "react";

export default function Count () {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>contador {count}</p>
            <button onClick={()=> setCount (count +1)}>
                </button>
        </div>
    );
}

/*
useCounter.js
javascript
Copiar
import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
////////////////////////////////////////////////////////////
CounterComponent.js
javascript
Copiar
import React from 'react';
import { useCounter } from './useCounter'; // Importamos nuestro custom hook

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default CounterComponent;
  */