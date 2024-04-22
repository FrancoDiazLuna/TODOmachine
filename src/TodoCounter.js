import './TodoCounter.css'


// const estilos = {
//   backgroundColor: 'red'
// }
//
// function TodoCounter({total,completed}) {
//   return ( 
//     <h1 style={estilos}>Has completado {completed} de {total} TODOs</h1>
//   );
// }

// function TodoCounter({total,completed}) {
//   return ( 
//     <h1 style={{
//       fontSize: '24px',
//       textAlign: 'center',
//       margin: 0,
//       padding: '48px'
//     }}>Has completado {completed} de {total} TODOs</h1>
//   );
// }

function TodoCounter({total,completed}) {
  return ( 
    <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
  );
}

export {TodoCounter};