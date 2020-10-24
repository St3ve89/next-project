import { useState } from 'react';
import Link from '../../Link/Link';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className='container'>
        <nav>
          <div className='logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <ul className={`${open ? 'open' : ''} navbar`}>
            <li className={`${open ? 'fade' : ''}`}>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className={`${open ? 'fade' : ''}`}>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li className={`${open ? 'fade' : ''}`}>
              <Link href='/portfolios'>
                <a>Portfolios</a>
              </Link>
            </li>
          </ul>
          <button onClick={handleNavClick} className='burger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
