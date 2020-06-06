import Link from '../../Link/Link';

const Header = () => (
  <header>
    <div className='container'>
      <nav>
        <div className='logo'>Logo</div>
        <div className='navbar'>
          <ul>
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
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
