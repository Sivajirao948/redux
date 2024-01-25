import React, { useState } from 'react'
import {connect} from 'react-redux'
function Todolist(props) {
    console.log("Todolist props::",props)
    var [nt,setNt]=useState('')
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
        <button onClick={()=>{props.addTodoItem(nt)}}>Add Todo</button>
        {props.todos.map((todo)=>{
            return <li>{todo}</li>
        })}
    </div>
  )
}
function mapStateToProps(state){
  return state.t
}
function mapDispatchToProps(dispatch){
  return {
    addTodoItem:(newTask)=>{dispatch({type:'ADDTODO',payload:newTask})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
