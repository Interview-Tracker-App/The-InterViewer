
	const inputRef = useRef(null);
function handleChange () {
	// console.log(inputRef.current.value);
	return (
		<div>
		<input
		ref={inputRef}
		type="text"
		id="task"
		name="task"
		value={task}
		/>
		<button onClick={handleClick}> Input task</button>
		</div>
		
		)
};

