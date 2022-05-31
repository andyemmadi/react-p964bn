import React from 'react';
import Axios from 'axios';
import axiosRetry from 'axios-retry';

const Table = () => {
  const [posts, setPosts] = React.useState([]);

  axiosRetry(Axios, { retries: 3 });

  const getPosts = async () => {
    const resp = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    if (resp.status === 200) {
      setPosts(resp.data);
    } else {
      setPosts([]);
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      {posts?.length === 0 && (
        <tr>
          <td>No Data Found</td>
        </tr>
      )}
      {posts &&
        posts.map((post) => {
          return (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })}
    </table>
  );
};

export default Table;
