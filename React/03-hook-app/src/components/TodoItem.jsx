
export const TodoItem = ({description}) => {
  return (
		<li
			className="list-group-item d-flex justify-content-between align-items-center"
		>
			<span>{description}</span>
			<button className="btn btn-outline-danger">Borrar</button>
		</li>
	);
}
