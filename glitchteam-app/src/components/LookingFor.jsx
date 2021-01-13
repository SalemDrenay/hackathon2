import React from 'react';
import '../assets/css/styles.css';

function LookingFor() {const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div>
            <Select options={options} />
        </div>    
    )
}

export default LookingFor;