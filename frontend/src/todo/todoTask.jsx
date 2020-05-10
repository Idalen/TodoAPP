import React from 'react'
import IconButton from '../template/iconButton'

export default (props) =>{
    

    const color = (priority)=>{
        if(priority==0){
            return '#33ff49'
        }else if(priority==1){
            return '#fff333'
        }else{
            return '#ff3333'
        }
    }

    const renderRows= () =>{
        const list = props.father.list || []
        return list.map(todo=>(
            <tr key={todo._id}>
                
                {/* So consegui colocar duas cores para diferentes prioridades com o if ternario */}
                {/*<td style={{backgroundColor: todo.priority == 0 ? '#ccffff' : '#ffcccc'}}>*/}
                <td style={{ backgroundColor: `${color(todo.priority)}`}}> 
                <p style={{color: todo.done ? '#C4B47E' : '#685206', fontWeight: 'italic', letterSpacing: '1px', fontSize: '12px'}}><b style={{textDecoration: todo.done ? 'line-through' : ''}}></b>{props.formatDate(todo.createdAt)}</p>
                <p style={{color: todo.done ? '#C4B47E' : '#685206', fontFamily: 'Open Sans', fontSize: '14px', lineHeight: '24px', margin: '0 0 10px', textAlign: 'justify', textJustify: 'inter-word'}}>
                    <b style={{textDecoration: todo.done ? 'line-through' : ''}}>{todo.name}</b>
                </p>
                
                    <IconButton style='danger' icon='circle' hide={todo.done}
                        onClick={() => props.handleMarkTaskAsDone(todo, props.father)}></IconButton>
                    <IconButton style='success' icon='check' hide={!todo.done}
                        onClick={() => props.handleMarkTaskAsDone(todo, props.father)}></IconButton>
                    <IconButton style='default' icon='star' 
                        onClick={() => props.handleChangePriority(todo, props.father)}></IconButton>
                    <IconButton style='default' icon='trash-o' 
                        onClick={() => props.handleRemoveTask(todo, props.father)}></IconButton>
                </td>
            </tr>
        ))
    }

    return <table style={{tableLayout:'fixed', overflow:'hidden',wordWrap:'break-word'}} className='table'>
    <thead>
    </thead>
    <tbody>
        {renderRows()}
    </tbody>
</table>
} 