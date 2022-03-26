import React, {useContext, useState} from 'react';
import EditAllowance from './EditAllowance';
import { AppContext } from '../../context/AppContext';
import ViewAllowance from './ViewAllowance';

const Allowance = () => {
    const { allowance, dispatch } = useContext(AppContext);

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};


    return(
        <div className='allowance'>
            <div className='allowance__wrapper'>
                <div className="allowance__title">
                Total Allowance:         
                </div>

                {isEditing ? (
				<EditAllowance handleSaveClick={handleSaveClick} allowance={allowance} />
                ) : (
                    // For part 1 render component inline rather than create a seperate one
                    <ViewAllowance handleEditClick={handleEditClick} allowance={allowance} />
                )}
                {/* <span> {allowance} € </span> */}
            </div>
        </div>
    );
}

export default Allowance;
