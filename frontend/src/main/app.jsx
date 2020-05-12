import React from 'react'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/menu'
import Routes from './routes'
import Footer from '../template/footer'

export default props => (
    <div style={{padding: '10px', width: "100%"}}> {/*Style tem que ser entre {{}}*/}
        <Menu />
        <Routes />
    </div>
)