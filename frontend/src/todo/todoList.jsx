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

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`
    }
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td style={{ borderLeft: "10px solid" + todo.color }}>
                    
                    <p style={{color:'#858585', fontWeight: 'bold', letterSpacing: '1px', fontSize: '12px'}}>
                    {formatDate(todo.createdAt)}<br></br>{ratio(todo.list)}</p>

                    <p style={{color: '#526066', fontWeight: 'bold', letterSpacing: '4px', fontSize: '20px'}}>
                    {todo.description}</p>
                    
                    
                    
                    <hr></hr>
                    <p>Adicionar tarefas / Alterar nome da lista:</p>
                    <textarea type = 'text'
                    placeholder='Escreva aqui'
                    onChange = {props.handleChangeTask}
                    value = {props.task}
                    style = {{border:'1px solid gray', marginBottom: '10px', height:'30%', width:'100%', resize:'none'}}
                    />
                    <br></br>
                    <IconButton style='primary' icon='plus'
                    onClick={()=>
                    props.handleAddTask(todo)}/>

                    <IconButton style='default' icon='pencil-square' 
                    onClick={() => 
                    props.handleEditListName(todo)}/>

                    <br></br><br></br><br></br>
                    <p>Outras ações:</p>
                    <p>
                        <IconButton style='default' icon='check' onClick={() => props.handleSetAllDone(todo)}></IconButton>
                        <IconButton style='default' icon='star' onClick={() => props.handleChangeColor(todo)}></IconButton>
                        <IconButton style='default' icon='trash-o' onClick={() => props.handleRemove(todo)}></IconButton>
                    </p>

                </td>
                
                <td style={{  }}>
                    <TodoTask 
                    father={todo} 
                    handleMarkTaskAsDone = {props.handleMarkTaskAsDone}
                    handleRemoveTask = {props.handleRemoveTask}
                    handleChangePriority={props.handleChangePriority}
                    handleEditTaskName = {props.handleEditTaskName}
                    formatDate={formatDate}/>     
                </td>
            </tr>
            
            
        ))
    }
    return (
        <table style={{tableLayout:'fixed', overflow:'hidden', wordWrap:'break-word'}} className='table'>
            <thead>
                <tr>
                    <th style={{width:'30%', borderBottom:"2px solid gray"}} className=''>Listas</th>
                    <th style={{width:'70%', borderBottom:"2px solid gray"}} className=''>Tarefas</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}