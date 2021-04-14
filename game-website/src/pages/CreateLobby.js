import React from 'react';

class CreateLobby extends React.Component {
    state = {
        lobbyCode: null,
        username: null,
    };

    generateLobby = () => {
        let chars = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
        let result = [];
        for (let i = 0; i < 4; i++) {
            result.push(chars.charAt(Math.floor(Math.random() * chars.length)))
        };
        return result.join('');
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
            </div>
            
        )
    }
}

export default CreateLobby;