import React from 'react'

class Describtion extends React.Component {
    constructor(props){
      super(props);
      this.state = 'The describtion goes here';
    }
    render() {
      return (
        <div style={{border:'1px solid red', backgroundColor: 'grey'}}>
          <h1> {this.state}</h1>
        </div> 
      );
    }
  }
  export default Describtion;