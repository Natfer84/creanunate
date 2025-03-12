import React, { useState } from "react";

/**
 * Componente de contador simple.
 *
 * - Usa el hook `useState` para manejar el estado del contador.
 * - Muestra el valor actual del contador en un `<p>`.
 * - Tiene un botón que incrementa el contador en `1` cada vez que se presiona.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa un contador con botón de incremento.
 */

export default function Count() {
  /**
   * Estado que almacena el valor del contador.
   * @type {[number, Function]}
   */
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Muestra el valor actual del contador */}
      <p>contador {count}</p>

      {/* Botón que incrementa el contador al hacer clic */}
      <button onClick={() => setCount(count + 1)}></button>
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
