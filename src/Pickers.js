import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Pickers extends Component {

    state = {
        date: new Date(),
        showDate: false
    }

    onChange = date =>{
        this.setState({
            date
        });
    }

    validation = () =>{
        this.setState({
            showDate: true
        })
    }

    render() {
        return (
            <div style = {{boxShadow:" 5px 5px 25px"}}>
                <Calendar 
                onChange={this.onChange}
                selectRange={true}
                value={this.state.date}
                />
                {/*<p>Date choisie : {this.state.date.toLocaleDateString()}</p>*/}
                <button onClick={this.validation}>Valider</button>
                {this.state.showDate ? (
                    <div>
                        <p>Du : {this.state.date[0].toLocaleDateString()}</p>
                        <p>Au : {this.state.date[1].toLocaleDateString()}</p>
                    </div>
                ): null}
            </div>
        )
    }
}
