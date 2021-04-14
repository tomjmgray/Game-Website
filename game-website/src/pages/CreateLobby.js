import React from 'react';

class CreateLobby extends React.Component {
    state = {
        lobbyCode: '',
        username: '',
        gameType: 'Texas Holdem',
        openLobby: false,
        startingChips: 1000,
        smallBlind: 5,
        bigBlind: 10
    };

    generateLobby = () => {
        let chars = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
        let result = [];
        for (let i = 0; i < 4; i++) {
            result.push(chars.charAt(Math.floor(Math.random() * chars.length)))
        };
        return result.join('');
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    componentDidMount(){
        let code = this.generateLobby();
        this.setState({
            lobbyCode: code
        });
    }

    render() {
        return (
            <div>
                <h1>New Lobby</h1>
                <h2>Lobby Code: {this.state.lobbyCode}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <br/>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required></input>
                    <br/>
                    <label htmlFor="startingChips">Starting Chips</label>
                    <br/>
                    <input type="number" name="startingChips" id="startingChips" value={this.state.startingChips} onChange={this.handleChange}></input>
                    <br/>
                    <label htmlFor="smallBlind">Small Blinds</label>
                    <br/>
                    <input type="number" name="smallBlind" id="smallBlind" value={this.state.smallBlind} onChange={this.handleChange}></input>
                    <br/>
                    <label htmlFor="bigBlind">Big Blinds</label>
                    <br/>
                    <input type="number" name="bigBlind" id="bigBlind" value={this.state.bigBlind} onChange={this.handleChange}></input>
                    <br/>
                    <br/>
                    <button type="submit">Create Lobby</button>

                </form>
            </div>
            
        )
    }
}

export default CreateLobby;