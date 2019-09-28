import React, {Component} from 'react';

class Total extends Component{
render(){


    return(
        <p>Number of exercises {this.props.parts[0].exercises + this.props.parts[1].exercises  + this.props.parts[2].exercises }</p>
    )
}
}
export default Total;