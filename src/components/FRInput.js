import React, { PropTypes } from 'react';

const FrInput = React.forwardRef((props, ref) => {
    return (
        <>
        	<input type="text" ref={ref} />
        </>
    );
});



export default FrInput;
