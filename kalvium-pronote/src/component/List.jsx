import { Component } from 'react'

export class List extends Component {
  render() {
    return (
        <div id='list'>

        {
          this.props.data.map((el,index)=>{

            return ( <div key={index}>
              <h1>{el}</h1>
              <button onClick={()=>this.props.handleDelete(index)}>Delete</button>
              <button onClick={()=>this.props.handleUpdate(index)}>Update</button>
            </div>

          )})
        }


      </div>
    )
  }
}

export default List
