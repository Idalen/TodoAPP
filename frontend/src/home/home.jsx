import React from 'react'

export default props => (
    <div>

        <div className='banner' style={{height: '600px'}}>
            <h1 className='banner-head'>
                <p>Lista de tarefas</p>
                <a href="#/todos" className='pure-button pure-button-primary' style={{background:'#2c4985'}}>Partiu</a>
            </h1>
        </div>

        <div className='l-content'>
            <div className='pricing-tables pure-g'>
                <div className='pure-u-1 pure-u-md-1-4'>
                    <div className='pricing-table pricing-table-free'>
                        <div className='pricing-table-header' style={{background:'#2c4985'}}>
                            <h2>Bonitu</h2>

                            <span className='pricing-table-price'>
                                I <span>Texto</span>
                            </span>
                        </div>

                        <ul className='pricing-table-list'>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                        </ul>

                        <button className='button-choose pure-button'>Ver mais</button>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-4'>
                    <div className='pricing-table pricing-table-free'>
                        <div className='pricing-table-header' style={{background:'#b4bd3b'}}>
                            <h2>Rápido</h2>

                            <span className='pricing-table-price'>
                                C <span>Texto</span>
                            </span>
                        </div>

                        <ul className='pricing-table-list'>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                        </ul>

                        <button className='button-choose pure-button'>Ver mais</button>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-4'>
                    <div className='pricing-table pricing-table-biz pricing-table-selected'>
                        <div className='pricing-table-header'>
                            <h2>Eficiente</h2>

                            <span className='pricing-table-price'>
                                M <span>Texto</span>
                            </span>
                        </div>

                        <ul className='pricing-table-list'>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                        </ul>

                        <button className='button-choose pure-button'>Ver mais</button>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-4'>
                    <div className='pricing-table pricing-table-enterprise'>
                        <div className='pricing-table-header' style={{background:'#b4bd3b'}}>
                            <h2>Aberto</h2>

                            <span className='pricing-table-price'>
                                C <span>Texto</span>
                            </span>
                        </div>

                        <ul className='pricing-table-list'>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                            <li>Ponto bom</li>
                        </ul>

                        <button className='button-choose pure-button'>Ver mais</button>
                    </div>
                </div>
            </div>

            <div className='information pure-g'>
                <div className='pure-u-1 pure-u-md-1-2'>
                    <div className='l-box'>
                        <h3 className='information-head'>José da Silva</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-2'>
                    <div className='l-box'>
                        <h3 className='information-head'>Fulano de Tal</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-2'>
                    <div className='l-box'>
                        <h3 className='information-head'>Sicrano de la</h3>
                        <p>
                            Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className='pure-u-1 pure-u-md-1-2'>
                    <div className='l-box'>
                        <h3 className='information-head'>Deko</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div> 
            <div style={{height:'40px'}}></div>
        </div>

    </div>
)