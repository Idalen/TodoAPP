import React from 'react'

export default props => (
    <div className='pure-menu pure-menu-horizontal pure-menu-fixed'>
        <a href='#' className='pure-menu-heading'>TODO App</a>
        <ul className='pure-menu-list'>
            <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Home</a></li>
            <li className='pure-menu-item'><a href='#/todos' className='pure-menu-link'>Listas</a></li>
        </ul>
    </div>
)