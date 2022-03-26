import '../assets/css/home.scss';
import {menu} from './menu';
import {spendings} from './spendings/Spendings'

function home() {
    return (
      <div className="home">
        <header className="home__header">
          <h1 className='home__title'>
            Spender
          </h1>
          <p className='home__subtitle'>Track your spendings</p>
        </header>
        <div className='home__menu'>{menu()}</div>
        <div className='home__content'></div>
        <div className='Main'>
          <h2>Recent:</h2>
          {spendings()}
        </div>
      </div>
    );
  }

  export default home;