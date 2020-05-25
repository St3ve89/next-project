import Header from '../shared/Header/Header';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default BaseLayout;
