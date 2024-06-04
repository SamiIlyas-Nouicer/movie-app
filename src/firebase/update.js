import { db } from "./firebase"; // Adjust the path if needed
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useState } from "react";

export const updateWatched = async (Email, idMovie, option) => {
  try {
    console.log(
      `Starting updateWatchlist with Email: ${Email}, idMovie: ${idMovie}, option: ${option}`
    );

    // Query the collection for the document with the specified Email
    const q = query(collection(db, "Users"), where("Email", "==", Email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log(
        `Found ${querySnapshot.size} document(s) with the specified Email`
      );
      querySnapshot.forEach(async (document) => {
        // Get the document ID
        const docId = document.id;
        const docData = document.data();
        console.log(`Document ID: ${docId}`);

        // Check if idMovie is in WatchList
        if (
          option === "add" &&
          docData.WatchList &&
          docData.WatchList.includes(idMovie)
        ) {
          console.log(
            `Movie ID: ${idMovie} is in WatchList, adding to WatchedMovies and removing from WatchList`
          );

          // Add the movie ID to the WatchedMovies array and remove from WatchList
          await updateDoc(doc(db, "Users", docId), {
            WatchedMovies: arrayUnion(idMovie),
            WatchList: arrayRemove(idMovie),
            updatedAt: new Date(),
          });
          console.log(
            `Movie ID: ${idMovie} added to WatchedMovies and removed from WatchList`
          );
        } else if (option === "add") {
          console.log(`Adding movie ID: ${idMovie} to WatchedMovies`);
          await updateDoc(doc(db, "Users", docId), {
            WatchedMovies: arrayUnion(idMovie),
            WatchList: arrayRemove(idMovie),
            updatedAt: new Date(),
          });
          console.log(`Movie ID: ${idMovie} added to WatchedMovies `);
        } else if (option === "delete") {
          console.log(`Removing movie ID: ${idMovie} from WatchedMovies`);

          // Remove the movie ID from the WatchedMovies array if it exists
          await updateDoc(doc(db, "Users", docId), {
            WatchedMovies: arrayRemove(idMovie),
            updatedAt: new Date(),
          });
          console.log(`Movie ID: ${idMovie} removed from WatchedMovies`);
        }

        // Update local state if needed
        // This line assumes you have a setWatchlist function and relevant state
        // Uncomment and adjust if needed
        // setWatchlist(option === "add");
      });
    } else {
      console.log("No document found with the specified Email");
    }
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const updateWatchList = async (Email, idMovie, option) => {
  try {
    console.log(
      `Starting updateWatchlist with Email: ${Email}, idMovie: ${idMovie}, option: ${option}`
    );

    // Query the collection for the document with the specified Email
    const q = query(collection(db, "Users"), where("Email", "==", Email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log(
        `Found ${querySnapshot.size} document(s) with the specified Email`
      );
      querySnapshot.forEach(async (document) => {
        // Get the document ID
        const docId = document.id;
        console.log(`Document ID: ${docId}`);

        // Determine the update based on the option
        if (option === "add") {
          console.log(`Adding movie ID: ${idMovie} to WatchList`);
          // Add the movie ID to the WatchList array
          await updateDoc(doc(db, "Users", docId), {
            WatchList: arrayUnion(idMovie),
            updatedAt: new Date(),
          });
          console.log(`Movie ID: ${idMovie} added to WatchList`);
        } else if (option === "delete") {
          console.log(`Removing movie ID: ${idMovie} from WatchList`);
          // Remove the movie ID from the WatchList array if it exists
          await updateDoc(doc(db, "Users", docId), {
            WatchList: arrayRemove(idMovie),
            updatedAt: new Date(),
          });
          console.log(`Movie ID: ${idMovie} removed from WatchList`);
        }

        // Update local state if needed
      });
    } else {
      console.log("No document found with the specified Email");
    }
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
