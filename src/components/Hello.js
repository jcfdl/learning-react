import React from 'react'

const Hello = () => {
	// return (
	// 	<div>
	// 		<h1 className='dummyClass'>Hello Jc</h1>
	// 	</div>
	// )

	return React.createElement(
		'div',
		{id: 'hello', className: 'dummyClass'},
		React.createElement('h1', null, 'Hello Jc')
	)
}

export default Hello