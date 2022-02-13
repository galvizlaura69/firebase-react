import axios from "axios";

const API = "https://waco-api.herokuapp.com/";

const getPostById = async (id) => {
  try {
    const { data } = await axios.get(API + "api/posts/" + id);
    const posts = data.data;
    return posts;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getPostById;
