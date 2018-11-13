import React, { Component } from 'react';
import Card from './Card';
import Logo from './logo.png';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            load: false
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => {
                this.setState({ films: data })
            })
    }

    handleSubmit() {
        this.setState({
            load: true
        })
    }

    render() {
        if (this.state.load === false) {
            return (
                <>
                    <img src={Logo} />
                    <button type="button" class="btn btn-outline-secondary" onClick={(e) => this.handleSubmit(e)}>Load Films</button>
                </>
            )
        } else {
            return (
                <div>
                    <Card films={this.state.films} />
                </div>
            )
        }

    }
}

export default App