import React from 'react'
import CardList from './CardList'
import {Switch,Route} from 'react-router-dom'
import listPlay from './pages/ListPlay'

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">
                NavBar
            </div>
            <div className="mainContent">
                
             <Switch>
                 <Route path="/" exact component={CardList}></Route>
                 <Route path="/search">Search</Route>
                 <Route path="/your-library">library</Route>
                    <Route path="/playlist/:id" component={listPlay}></Route>
             </Switch>
            </div>
        </div>
    )
}

export default Main
