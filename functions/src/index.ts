import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.userDeleted = functions.firestore.document('users/{uid}')
  .onDelete((snapshot, context) => {
  return admin.auth().deleteUser(context.params.uid).then(() => {
    console.log("Deleted user")
  }).catch(e => {
    console.log("Error: ", e);
  })
});

exports.deleteProduct = functions.firestore.document('products/{id}').onDelete((snapshot) => {
  const deletedProduct = snapshot.data();
  return deletedProduct;
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
