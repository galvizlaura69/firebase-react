import axios from 'axios';

  const API =
    'https://waco-api.herokuapp.com/';

  const getPostList = async (uid) => {
    try{
    const { data } = await axios.get(API + 'api/users/'+uid+'/post');
    const posts = data.data;
    console.log(posts, 'service posts by user');
    return posts.reverse();      
    }catch(error){
      console.log(error);
      return error.message;
    }

  };

  export default getPostList;