import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

const Portfolios = ({ posts }) => {
  console.log({ posts });
  return (
    <BaseLayout>
      <h1>I am portfolios page</h1>;
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = {};
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch (error) {
    console.log(error);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
