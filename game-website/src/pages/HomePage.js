import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <header>
            <h1>Tom's Poker Room</h1>
            <h3>Play poker online with friends! Start a lobby or join one to get started!</h3>
            </header>
            <body>
                <div>
                    <h1>Create a New Lobby</h1>
                    <button><Link to="/createlobby">Create</Link></button>
                </div>
                <div>
                    <h1>Join a Lobby</h1>
                </div>
            </body>
        </main>
    )
}

export default HomePage;