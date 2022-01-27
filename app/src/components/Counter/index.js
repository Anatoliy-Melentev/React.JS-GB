import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h3 className="rotate">{count}</h3>
			<button className="rotate button" onClick={() => setCount(count + 1)}>Click</button>
		</div>
	)
}