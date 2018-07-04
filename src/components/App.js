import React, { Component } from 'react'
import {addRecipe} from '../actions' 

class App extends Component {
  state={
    calendar:null
  }

componentDidMount(){
    const {store}=this.props
    store.subscribe(()=>(      //监听store的状态变化事件，有值改变时，调用setState方法
      this.setState({
        calendar:store.getState()
      })
    ))
  }

sunbmitFood=()=>{
  this.props.store.dispatch(addRecipe({
    day:'monday',
    meal:'breakfast',
    recipe:{
      label:this.input.value
    }
  }))
  this.input.value=''
}

render() {
    console.log('props',this.props)
    console.log('calendar',this.state.calendar)
    return (
      <div className="App">
        <input 
          type='text'
          ref={(inputlable)=>this.input=inputlable}//通过ref参数拿到其它函数能拿到input组件
          placeholder="Monday's Breakfast"
      />
         <button onClick={this.sunbmitFood}>Submit</button> 
          <pre>
            Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
          </pre>
      </div>
    );
  }
}

export default App;
