¿Para qué sirve useEffect?
El hook useEffect en React sirve para manejar efectos secundarios (side effects) en tus componentes funcionales.

En esencia, te permite ejecutar código después de que React ha actualizado el DOM (Document Object Model). Es el equivalente, en componentes de clase, a la combinación de los métodos del ciclo de vida componentDidMount, componentDidUpdate y componentWillUnmount.

Casos de Uso Comunes:
Obtención de datos (data fetching) desde una API.

Suscripciones a eventos externos (como listeners para el tamaño de la ventana).

Manipulación manual del DOM (aunque React lo maneja generalmente, a veces es necesario).

Temporizadores o timers (como setTimeout o setInterval).

El useEffect recibe dos argumentos:

Una función que contiene la lógica del efecto.

Un array de dependencias (opcional) que le dice a React cuándo debe volver a ejecutar el efecto.

¿Qué son los Side Effects (Efectos Secundarios)?
Los efectos secundarios (side effects) son cualquier operación que afecta algo fuera del alcance de la función que se está ejecutando.

En el contexto de React, un componente funcional debe ser una función pura, lo que significa que siempre devuelve la misma salida (el renderizado) para las mismas entradas (las props y el state), y no causa mutaciones visibles fuera de su alcance durante el renderizado.

Cuando necesitas realizar una acción que no está directamente relacionada con el renderizado, como las mencionadas anteriormente (interacciones con el navegador, APIs, etc.), estás lidiando con un efecto secundario.

Ejemplos de Efectos Secundarios:

Hacer una llamada fetch a una base de datos.

Cambiar el título del documento (ej. document.title = 'Nuevo Título').

Guardar datos en el localStorage.

¿Cómo puedo obtener datos de un formulario con React?
Hay dos enfoques principales para manejar formularios y obtener sus datos en React: componentes controlados y componentes no controlados.

1. Componentes Controlados (Recomendado)
En este enfoque, los datos del formulario son manejados completamente por el estado (state) de React.

Asignas un valor del state al atributo value del elemento del formulario.

Usas el hook useState para crear y actualizar el estado.

Con el manejador de eventos onChange, actualizas el estado cada vez que el valor del formulario cambia.

Ejemplo Básico:
JavaScript

import React, { useState } from 'react';

function FormularioControlado() {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    // Almacena el valor actual del input en el estado 'nombre'
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    // Previene el comportamiento por defecto de recargar la página
    event.preventDefault(); 
    
    // Aquí es donde obtienes el dato: está en la variable 'nombre'
    console.log('El nombre enviado es:', nombre); 
    
    // Opcional: limpiar el formulario
    setNombre(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input 
          type="text" 
          value={nombre} // Valor controlado por el estado
          onChange={handleChange} // Actualiza el estado con cada pulsación
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
2. Componentes No Controlados (Con useRef)
En este enfoque, dejas que el DOM maneje los datos del formulario, y React accede a ellos directamente cuando es necesario, generalmente al hacer submit.

Usas el hook useRef para obtener una referencia directa al elemento del formulario.

Al hacer submit, accedes al valor del campo a través de la propiedad .current.value de la referencia.

Ejemplo Básico (para campos simples):
JavaScript

import React, { useRef } from 'react';

function FormularioNoControlado() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Accede directamente al valor del input a través de la referencia
    console.log('El nombre enviado es:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" ref={inputRef} /> {/* El ref se adjunta al input */}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}