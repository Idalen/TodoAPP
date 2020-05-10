import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { description: '',taskName: '' ,list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.handleSearch = this.handleSearch.bind(this)

        this.handleClear = this.handleClear.bind(this)

        this.handleAddTask = this.handleAddTask.bind(this)
        this.handleRemoveTask=this.handleRemoveTask.bind(this)
        this.handleChangeTask = this.handleChangeTask.bind(this)
       
        this.handleMarkTaskAsDone = this.handleMarkTaskAsDone.bind(this)
        this.handleChangeColor  = this.handleChangeColor.bind(this)
        this.handleChangePriority= this.handleChangePriority.bind(this)

        this.handleEditListName = this.handleEditListName.bind(this)
        this.handleSetAllDone = this.handleSetAllDone.bind(this)


        this.refresh()
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleChangeColor(todo){
        let color;
        if(todo.color==="#fff") color = "#70A1D7"//azul
        else if(todo.color==="#70A1D7") color = "#957DAD"//roxo
        else if(todo.color==="#957DAD") color = "#87ba7b"//verde
        else if(todo.color==="#87ba7b") color = "#F47C7C"//vermelho
        else if(todo.color==="#F47C7C") color = "#704523"//marrom
        else if(todo.color==="#704523") color = "#fff"//branco
        
        axios.put(`${URL}/${todo._id}`, { ...todo, color: color })
            .then(resp => this.refresh())
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=createdAt${search}`)
            .then(resp => this.setState({
                ...this.state, description, list:
                    resp.data
            }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleChangeTask(e){
        this.setState({...this.state, taskName: e.target.value})
    }

    handleAddTask(todo){
        const taskName = {name:this.state.taskName}
        todo.list.push(taskName)

        axios.put(`${URL}/${todo._id}`, {...todo})
            .then(resp => this.refresh())
    }

    handleRemoveTask(todo, father){
        let list =father.list
        father.list= list.filter(value=>(
            !(value._id===todo._id)
        ))
        
        axios.put(`${URL}/${father._id}`, {...father})
        .then(resp => this.refresh())

    }

    handleMarkTaskAsDone(todo, father){

        for(var i=0; i<father.list.length; i++){
            if(father.list[i]._id===todo._id){
                if(father.list[i].done)
                    father.list[i].done = false;
                else 
                    father.list[i].done = true;
            }
        }

        axios.put(`${URL}/${father._id}`, { ...father})
        .then(resp => this.refresh())
    }

    handleChangePriority(todo, father){
        for(var i=0; i<father.list.length; i++){
            if(father.list[i]._id===todo._id){
                father.list[i].priority= (father.list[i].priority+1)%3
            }
        }

        axios.put(`${URL}/${father._id}`, { ...father})
        .then(resp => this.refresh())
    }

    handleEditListName(todo){
        const taskName = this.state.taskName
        todo.description= taskName
     
        axios.put(`${URL}/${todo._id}`, { ...todo})
        .then(resp => this.refresh())
    }

    handleSetAllDone(todo){
        for(var i=0; i<todo.list.length; i++){
            todo.list[i].done=true
        }

        axios.put(`${URL}/${todo._id}`, { ...todo})
        .then(resp => this.refresh())
    }



    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleAddTask={this.handleAddTask} 
                    handleRemoveTask={this.handleRemoveTask}
                    handleChangeTask={this.handleChangeTask}
                    handleMarkTaskAsDone = {this.handleMarkTaskAsDone}
                    handleChangeColor={this.handleChangeColor}
                    handleChangePriority={this.handleChangePriority}
                    handleEditListName = {this.handleEditListName}
                    handleSetAllDone = {this.handleSetAllDone}
                    />
            </div>
        )
    }
}