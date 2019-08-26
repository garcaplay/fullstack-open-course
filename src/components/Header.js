import React, {Component, Fragment} from 'react';

class Header extends Component{
render(){

    return(
        <h1>{this.props.course}</h1>
    )
}
}
export default Header;