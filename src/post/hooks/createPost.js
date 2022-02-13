import axios from 'axios';

  const API =
    'https://waco-api.herokuapp.com/';
  

  const createPost = async (uid,title,body) => {
    try{
      const payLoad = {
        title,
        body,
        user_uuid: uid
      };

    const { data } = await axios.post(API + 'api/posts', payLoad);
    const posts = data.data;
    return posts;
    }catch(error){
      console.log(error);
      return error.message;
    }
  };

  export default createPost;