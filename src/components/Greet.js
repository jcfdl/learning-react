import React from 'react'

// function Greet() {
// 	return <h1>Hello JC!</h1>;
// }

// export const Greet = () => <h1>Hello JC!</h1>
const Greet = (props) => {
	// console.log(props)
	const {name, schoolName, children} = props
	return (
		<div>
			<h1>Hello {name} from School: {schoolName}</h1>
			{children}
		</div>
	)
}
export default Greet