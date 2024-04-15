import { Component } from 'react';

import './App.css'
import Input from './component/Input';
import List from './component/List';

class App extends Component{

  constructor(){
    super()

    this.state={
      value:"",
      data:[]
    }
  }

    // handle change functionality
    handleChange=(text)=>{
      this.setState({value:text})
    }

    // handle submit functionality
    handleSubmit=()=>{
      if(this.state.value!==""){
      this.state.data.push(this.state.value)
      this.setState({value:""})
      }
    }

    // handle delete functionality
    handleDelete=(index)=>{

      this.state.data.splice(index,1)
      this.setState({data:this.state.data})

    }

    // handle update functionality
    handleUpdate = (index)=>{

      const data = prompt()

      if(data!==""){
      this.state.data[index] = data
      this.setState({data: this.state.data})
      }
    }

  render(){

  return (
    <>
      {/* <div id='input'>

        <input type="text" placeholder='Enter Text' value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} />
        <button onClick={this.handleSubmit}>Create</button>

      </div> */}

      <Input inputValue = {this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

      <div id='text'>

        <h1>{this.state.value}</h1>
      </div>

      < List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />

      {/* <div id='list'>

        {
          this.state.data.map((el,index)=>{

            return <div key={index}>
              <h1>{el}</h1>
              <button onClick={()=>this.handleDelete(index)}>Delete</button>
              <button onClick={()=>this.handleUpdate(index)}>Update</button>
            </div>

          })
        }


      </div> */}



    </>
  )
}
}

export default App
