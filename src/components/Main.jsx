import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import History from './History'
import Events from './Events'
import Contact from './Contact'
import EachInfo from './EachInfo'
import { Switch, Route, Redirect } from 'react-router-dom'
import {GROUP_PIC} from '../data/group'
import {FLAG} from '../data/flag'
import {INDIVIDUAL} from '../data/individual'
import { EVENTS } from '../data/events'

class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            group_pic : GROUP_PIC,
            flags : FLAG,
            single : INDIVIDUAL,
            events : EVENTS
        }
    }

    render(){

        const HomePage = () => {
            return(
                <Home group = {this.state.group_pic} />
            )
        }

        const HistoryPage = () => {
            return(
                <History single={this.state.single} />
            )
        }

        const IndividualInfo = ({match}) => {
            return(
                <EachInfo single={this.state.single.filter((person) => person.id == parseInt(match.params.id, 10))[0]}/>
            )
        }

        return(
            <div>
                <Header flag = {this.state.flags.filter((flag) => flag.id === 9)[0]}/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/history" component={HistoryPage}/>
                        <Route exact path="/history/:id" component={IndividualInfo}/>
                        <Route exact path="/events" component={() => <Events events={this.state.events}/>}/>
                    </Switch>
                    <span style={{position : "fixed", bottom : "2%", right : "2%", fontSize : "2em"}}>
                        <a href="#" title="Up to Navbar"><i className="fa fa-angle-double-up fa-lg"></i></a>
                    </span>
                <Footer flags={this.state.flags.filter(flag => flag.id < 9)}/>
            </div>
        )
    }
}

export default Main;
