import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../config/fb";

const updateOrCreateFavorite = async (id, title, body) => {
  try {
    const response = await setDoc(doc(db, "favorites", id.toString()), {
      idPost: id,
      title,
      body
    });
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
export default updateOrCreateFavorite;
