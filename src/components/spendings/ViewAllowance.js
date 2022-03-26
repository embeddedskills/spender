import React from 'react';

const ViewAllowance = (props) => {
	return (
		<>
			<span>Allowance: {props.allowance}€</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewAllowance;