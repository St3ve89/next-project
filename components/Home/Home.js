import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <section className='home'>
    <div className='container'>
      <div className='home-container'>
        <div className='home-item'>
          <div className='home-info'>
            <div className='home-promo'>
              <span>Hello I'm</span>
            </div>
            <h2>Istvan Acs</h2>
            <h4>Software Engineer</h4>
            <ul className='social-icons'>
              <li>
                <div className='fa'>
                  <a href={'https://github.com/St3ve89'} target='_blank'>
                    <FaGithubAlt />
                  </a>
                </div>
              </li>
              <li>
                <div className='fa'>
                  <a
                    href={'https://www.linkedin.com/in/istvan-acs-b24479160/'}
                    target='_blank'
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='home-item'>
          <div className='home-hero-img'></div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
