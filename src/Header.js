import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <p>{this.props.name}</p>
        )
    }
}

export default Header;