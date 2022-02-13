import axios from 'axios';

  const API =
    'https://waco-api.herokuapp.com/';

  const getPostListAll = async () => {
    try{
    const { data } = await axios.get(API + 'api/posts/all');
    const posts = data.data.slice(-20).reverse();
    console.log(posts, 'service posts by user');
    return posts;      
    }catch(error){
      console.log(error);
      return error.message;
    }

  };

  export default getPostListAll;