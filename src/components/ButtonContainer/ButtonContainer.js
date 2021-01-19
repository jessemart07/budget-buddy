import React from 'react'

function ButtonContainer(props) {
    return (
        <div style={{
            marginTop:'20px',
            width:'100%',
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {props.children}
        </div>
    )
};

export default ButtonContainer;
