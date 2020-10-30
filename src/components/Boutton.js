import React, { Component } from 'react';
import './button.css';
import Modal from './Modal';

export default class Boutton extends Component {
    render() {
        return (
            <div>
                <button className="button">Clique moi</button>
                <Modal />
            </div>
        )
    }
}


