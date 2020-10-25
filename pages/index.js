import BaseLayout from '../components/layouts/BaseLayout';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const Index = () => (
  <BaseLayout>
    <main>
      <Home />
      <About />
    </main>
  </BaseLayout>
);

export default Index;
