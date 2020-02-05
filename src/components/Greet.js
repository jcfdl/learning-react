import React from 'react'

// function Greet() {
// 	return <h1>Hello JC!</h1>;
// }

// export const Greet = () => <h1>Hello JC!</h1>
const Greet = (props) => {
	console.log(props)
	return (
		<div>
			<h1>Hello {props.name} from School: {props.schoolName}</h1>
			{props.children}
		</div>
	)
}
export default Greet