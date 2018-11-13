import React, { Component } from 'react';
import Card from './Card';
import Species from './Species';
import Logo from './logo.png';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            species: [],
            loadFilms: false,
            loadSpecies: false
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => {
                this.setState({ films: data })
            })
        fetch('https://ghibliapi.herokuapp.com/Species')
            .then(spec => spec.json())
            .then(specData => {
                this.setState({ species: specData })
            })
    }

    handleFilms() {
        this.setState({
            loadFilms: true
        })
    }

    handleSpecies() {
        this.setState({
            loadSpecies: true
        })
    }

    reset() {
        this.setState({
            loadFilms: false,
            loadSpecies: false
        })
    }

    render() {
        if (this.state.loadFilms === false && this.state.loadSpecies === false) {
            return (
                <>
                    <div className="row p-2 mx-5">
                        <img src={Logo} alt='' />
                    </div>
                    <div className="row p-2 mx-5">
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.handleFilms(e)}>Load Films</button>
                    </div>
                    <div className="row p-2 mx-5">
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.handleSpecies(e)}>Load Species</button>
                    </div>
                </>
            )
        } if (this.state.loadFilms === true) {
            return (
                <div>
                    <Card films={this.state.films} />
                    <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.reset(e)}>Go Back</button>
                </div>
            )
        } if (this.state.loadSpecies === true) {
            return (
                <div>
                    <Species species={this.state.species} />
                    <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.reset(e)}>Go Back</button>
                </div>
            )
        }

    }
}

export default App