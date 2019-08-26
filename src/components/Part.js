import React, {Component} from 'react';

class Part extends Component{
render(){

    return(
        <p>{this.props.part.name} {this.props.part.exercises}</p>
    )
}
}
export default Part;