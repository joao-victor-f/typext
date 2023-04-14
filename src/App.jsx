import './App.css';

const App = () => {

  return (
    <div className="App">
      <header>
        <div className='logo'>
          <a>typ<span>e</span>xt</a>
        </div>
      </header>

      <main>
        <div className='main-container'>
          <div className='main-intro-container'>
            <div className='logo'>
              <a>typ<span>e</span>xt</a>
            </div>

            <div className='site-info'>
              <h4 id='site-name-info'>A aglutinação de "type text"</h4>
              <p id='site-subject'>Um site de testes de velocidade de digitação</p>
              <button className='btn-get-started'>Começar</button>
            </div>
          </div>

          <div className='img-container'>
            <img src='../public/keyboard-icon.png'></img>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
