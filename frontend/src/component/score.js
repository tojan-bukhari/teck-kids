 // to make link between this companent and react redux
 import React ,{Component} from 'react';

 import {connect } from 'react-redux';
 //to take the value of state and pass this as aprps to this component
 class Score extends Component{

    

    render(){
        console.log(this.props)
        return(
            <div className="Score">
              <button onClick={this.props.increase}> submit</button>

              <div>{this.props.score}</div>

            </div>
        )
    }}
    
 function mapStateToProps(state){
     return {
         //the same state in reducer
         score:state.score
     }

 
 }
  //   dispatch to connect between action with reducer
 function mapDispatchToProps(dispatch){
    return {
       // SEND INCREACE AS a props to this component
       increase:()=> dispatch( {
        type:"INCREASE"
    })
    }


}
 export default connect(mapStateToProps,mapDispatchToProps)(Score)