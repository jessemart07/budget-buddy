import React from 'react'

function DrawerForm(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '50%',
            width: '300px',
            paddingTop: '50px'}}>
            {props.children}
        </div>
    )
}

export default DrawerForm
