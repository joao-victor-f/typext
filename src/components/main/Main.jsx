import './main.css';
import Logo from '../logo/Logo';

const Main = () => {
    return (
        <main>
            <div className='main-container'>
                <Logo/>

                <div className='site-info'>
                    <p id='site-subject'>Um site de testes de <u>velocidade de digitação</u></p>
                    <button className='btn-get-started'>Começar</button>
                </div>
            </div>
        </main>
    )
}

export default Main;