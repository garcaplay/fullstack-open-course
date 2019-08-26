import React, {Component} from 'react';

class Part extends Component{
render(){

    return(
        <p>{this.props.part} {this.props.exercises}</p>
    )
}
}
export default Part;