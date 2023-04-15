import { useSelector, useDispatch } from "react-redux"
import { clearCompletedAsync,selectItemsCompleted } from "../Redux/todos/todosSlice" 

function ClearButton() {

	const dispatch = useDispatch()

	const handleClear = () => {
		if (window.confirm("Are you sure to delete all completed tasks?"))
			dispatch(clearCompletedAsync())
	}

	const itemsCompleted = useSelector(selectItemsCompleted)

	return <button className="clear-completed" onClick={() => handleClear()} hidden={!itemsCompleted}>Clear Completed</button>
}

export default ClearButton