import firebase from './Firebase'
// import { AsyncStorage } from 'react-native'

//  var UserId = ''
class NoteDataManager {
//   async retrieveUserId() {
//     try {
//       const retrievedUserId = await AsyncStorage.getItem('userId');
//       const userId = retrievedUserId
//       return userId;
//     } catch (error) {
//       console.log(error.message);
//     }
//     return
//   }

  userNotes(callback) {
    firebase.database.database().ref('Notes').on('value', function (snapshot) {
        var userObject = snapshot.val()
        //userObj.push(userObject)
        callback(userObject)
        console.log('all Notes from database',userObject)
      })
  }

}
export default NoteDataManager