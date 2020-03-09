import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.userDeleted = functions.firestore.document('users/{uid}').onDelete((snapshot, context) => {
  const db = admin.firestore();
  return db.doc('users/' + context.params.uid).delete()
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
