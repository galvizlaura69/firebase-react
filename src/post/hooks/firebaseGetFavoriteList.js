import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "../../config/fb";

  const firebaseGetFavoritesList = async () => {
    try{
    const favoritesCollection = collection(db,'favorites');
    const favoritesSnapshot = await getDocs(favoritesCollection);
    const favoritesList = favoritesSnapshot.docs.map(doc => doc.data());
    return favoritesList.reverse();      
    } catch (error) {
      console.log(error);
      return error.message;
    }

  };

  export default firebaseGetFavoritesList;