import Header from '../shared/Header';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default BaseLayout;
