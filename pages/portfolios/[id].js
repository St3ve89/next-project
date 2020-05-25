import BaseLayout from '../../components/layouts/BaseLayout';

import { withRouter } from 'next/router';

const Portfolio = ({ router }) => (
  <BaseLayout>
    <h1>{`I am portfolio page ${router.query.id}`}</h1>
  </BaseLayout>
);

export default withRouter(Portfolio);
