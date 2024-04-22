import './TodoSearch.css';

function TodoSearch() {
  return (
    <input
      placeholder="Nueva tarea"
      className="TodoSearch"
      onChange={(event) => {
        console.log('escribiste en el TodoSearch')
        console.log(event)
        console.log(event.target.value)

      }}
    />
  );
}

export { TodoSearch }