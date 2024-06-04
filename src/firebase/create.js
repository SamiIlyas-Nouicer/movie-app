import { db } from "./firebase"; // Adjust the path if needed
import { collection, addDoc } from "firebase/firestore";
export const createUser = async (name, email) => {
  try {
    const userDocument = {
      UserName: name,
      Email: email,
      WatchList: [], // Should be an array of document references
      WatchedMovies: [], // Should be an array of document references
      Friends: [], // Should be an array of document references
      Lists: [], // Should be an array of document references
    };

    // Add the document to the Users collection with an auto-generated ID
    const docRef = await addDoc(collection(db, "Users"), userDocument);

    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
