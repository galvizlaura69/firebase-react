import { deleteDoc, doc } from "firebase/firestore/lite";
import { db } from "../../config/fb";

const deleteFavorite = async (id) => {
    const response = await deleteDoc(doc(db, "favorites", id.toString()));
    console.log(response);
    return response;
};
export default deleteFavorite;