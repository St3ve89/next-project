import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <section className='home'>
    <div className='container'>
      <div className='home-container'>
        <div className='home-item'>
          <div className='home-info'>
            <div className='home-promo fadeInUp'>
              <span>Hello I'm</span>
            </div>
            <h2 className='fadeInUp delay02'>Istvan Acs</h2>
            <h4 className='fadeInUp delay03'>Software Engineer</h4>
            <ul className='social-icons fadeInUp delay07 '>
              <li>
                <a
                  className='fa'
                  href={'https://github.com/St3ve89'}
                  target='_blank'
                >
                  <FaGithubAlt />
                </a>
              </li>
              <li>
                <a
                  className='fa'
                  href={'https://www.linkedin.com/in/istvan-acs-b24479160/'}
                  target='_blank'
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='home-item'>
          <div className='home-hero-img fadeInUp delay08'>
            <img src='/images/IMG_E98602.jpg' alt='Image of myself' />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
