import React from 'react'
import IconButton from '../template/iconButton'
import TodoTask from './todoTask'


export default props => {
    
    const ratio = list =>{
        let total=0, done=0;

        for(total=0;total<list.length;total++){
            if(list[total].done) done++;
        }

        return total ? `${Math.round(done/total*100)}%` : '';
    }

    const formatDate = (createdAt) =>{
        const date = new Date(createdAt)
        const formatNumber= (number)=>(
            number<10 ? `0${number}` : number
        )

        return `${date.getDate()}/${date.getMonth()}/${date.getYear()}  ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`
    }
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td style={{ backgroundColor: todo.color}}>
                    
                    <p style={{color:'#fff', fontWeight: 'bold', letterSpacing: '1px', fontSize: '12px',
                    textShadow: '-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black'}}>
                    {formatDate(todo.createdAt)}</p>

                    <p style={{color: ratio(todo.list) != 100 ? '#000' : '#fff', fontWeight: 'bold', letterSpacing: '4px', fontSize: '20px',
                    textShadow: ratio(todo.list) != 100 ? '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white' : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
                    {todo.description}</p><br></br>
                    
                    <p style={{color: ratio(todo.list) != 100 ? '#000' : '#fff', fontWeight: 'bold', letterSpacing: '6px', fontSize: '32px',
                    textShadow: ratio(todo.list) != 100 ? '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white' : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
                    {ratio(todo.list)}</p>
                    
                    <p>
                        <IconButton style='default' icon='square' onClick={() => props.handleChangeColor(todo)}></IconButton>
                        <IconButton style='default' icon='trash-o' onClick={() => props.handleRemove(todo)}></IconButton>
                        <IconButton style='default' icon='check' onClick={() => props.handleSetAllDone(todo)}></IconButton>
                    </p>

                    <input type = 'text'
                    placeholder='Adicione uma tarefa'
                    onChange = {props.handleChangeTask}
                    value = {props.task}
                    style = {{marginRight: '5px'}}
                    />

                    <IconButton style='primary' icon='plus'
                    onClick={()=>
                    props.handleAddTask(todo)}/>

                    <IconButton style='default' icon='pencil-square' 
                    onClick={() => 
                    props.handleEditListName(todo)}/>

                </td>
                
            <td style={{ backgroundColor: todo.color }}>
                <TodoTask 
                father={todo} 
                handleMarkTaskAsDone = {props.handleMarkTaskAsDone}
                handleRemoveTask = {props.handleRemoveTask}
                handleChangePriority={props.handleChangePriority}
                formatDate={formatDate}/>     
            </td>

            </tr>
            
        ))
    }
    return (
        <table style={{tableLayout:'fixed', overflow:'hidden', wordWrap:'break-word'}} className='table'>
            <thead>
                <tr>
                    <th style={{width:'30%'}} className=''>Descrição</th>
                    <th style={{width:'70%'}} className=''>Tarefas</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}