import React, { Component } from 'react';


export default class FormInputs extends Component {

    state = {
        nom:"",
        prenom:"",
        ville:"",
        age:"",
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
        //console.log(this.state.nom);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom:"",
            prenom:"",
            ville:"",
            age:"",
            items: [...this.state.items, {nom: this.state.nom, prenom: this.state.prenom, 
                    ville: this.state.ville, age: this.state.age}]
        });
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-body mb-4">
                        <h2>{item.nom}{item.prenom}</h2>
                        <hr />
                        <p>Tu as {item.age} ans .</p>
                        <p>Tu vis a {item.ville}.</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
               <div className="card my-3">
                   <div className="card-header">Ajouter une personne </div>
                   <div className="card-body">

                       <form action="" onSubmit={this.onSubmit}>

                        <div className="form-group col-md-4">
                            <label htmlFor="nom">Nom</label>
                            <input type="text"
                            className="form-control form-control-lg"
                            name="nom"
                            onChange={this.onChange}
                            value={this.state.nom}/>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text"
                            className="form-control form-control-lg"
                            name="prenom"
                            onChange={this.onChange}
                            value={this.state.prenom}/>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="ville">Ville</label>
                            <input type="text"
                            className="form-control form-control-lg"
                            name="ville"
                            onChange={this.onChange}
                            value={this.state.ville}/>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="age">Âge</label>
                            <input type="text"
                            className="form-control form-control-lg"
                            name="age"
                            onChange={this.onChange}
                            value={this.state.age}/>
                        </div>

                        <button className="btn btn-primary">Envoyer</button>
                       </form>
                   </div>
               </div>
               {this.renderCard()}
            </div>
        )
    }
}
