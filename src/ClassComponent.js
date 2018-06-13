import React, { Component } from 'react';
import Function from '../src/FunctionalComponent'




class Test extends Component {


    render() {
        
      return (
        <div>

<Function number={this.props.clicks}/>

        </div>
      );
    }
  }
  
  export default Test;