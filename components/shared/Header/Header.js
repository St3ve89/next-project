import Link from '../../Link/Link';

const Header = () => (
  <header>
    <div className='container'>
      <nav>
        <div className='logo'>Logo</div>
        <ul className='navbar'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/portfolios'>
              <a>Portfolios</a>
            </Link>
          </li>
        </ul>
        <div className='burger'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
