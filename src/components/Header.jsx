import React, { Component } from 'react';


class Header extends Component {
    render() { 
        return (
            <header style={headerStyle} className='text-center p-3 text-app-theme'>
                <h2>Todo List Application</h2>
            </header>
        );
    }
}
 
let headerStyle = {
    background: '#1f7988'
}

export default Header;