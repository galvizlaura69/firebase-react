import axios from 'axios';

  const API =
    'https://waco-api.herokuapp.com/';
  

  const updatePost = async (id, title, body) => {

    const payLoad = {
        title,
        body,
      };
    try{
      const { data } = await axios.put(API + 'api/posts/' + id , payLoad);
      const posts = data.data;
      return posts;
    }catch(error){
      console.log(error);
      return error.message;
    }

  };

  export default updatePost;