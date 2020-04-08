import React from 'react';

function FragmentDemo() {
	const items = []
	return (
		// <> we can use this alternative
		<React.Fragment>
			{
				// we can use this
				// items.map(item => (
				// 	<React.Fragment key={item.id}>
				// 		<h1>{item.name}</h1>
				// 	</React.Fragment>
				// ))	
			}
			<h1>Fragment</h1>
			<p>This is a fragment demo</p>
		{/*</>*/}
		</React.Fragment>
	)
}

export default FragmentDemo;
