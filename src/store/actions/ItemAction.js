import {db} from '../../config/Firebase'
import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
export const Fetch_ITEMS = 'Fetch_ITEMS'


export const fetchItem = (setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      let Items = [];
      let snapshot = await getDocs(collection(db, 'cart'))
          snapshot.docs.forEach((doc) => {
            Items.push({
              ...doc.data()
              , uid: doc.id
            });
  
          })
      dispatch({
        type: Fetch_ITEMS,
        payload: Items,
      });
    } catch (error) {
      console.log("error", error);
  
    } finally {
      setLoading(false);
    }
}