import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    if (open) {
      setOpen(false);
    } else {
      return;
    }
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
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                // onSetActive={handleSetActive}
                duration={1000}
                offset={-100}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className={`${open ? 'fade' : ''}`}>
              <Link
                activeClass='active'
                to='about'
                smooth={true}
                spy={true}
                duration={1000}
                // onSetActive={handleSetActive}
                offset={-100}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            {/* <li className={`${open ? 'fade' : ''}`}>
              <Link href='/portfolios'>
                <a>Portfolios</a>
              </Link>
            </li> */}
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
