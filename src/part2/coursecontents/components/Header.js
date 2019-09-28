import React from 'react';

const Header = (props) => {
    console.log("PROPS", props);

    return <h2>{props.name}</h2>
}

export default Header;