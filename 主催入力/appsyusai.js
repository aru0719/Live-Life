// Initialize Firebase

//firestore コンソールからコピー＆ペーストしてください。
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHbrOnK8bqipXOg6CpHeEpVhm96oFyGyM",
  authDomain: "s192163.firebaseapp.com",
  databaseURL: "https://s192163.firebaseio.com",
  projectId: "s192163",
  storageBucket: "s192163.appspot.com",
  messagingSenderId: "760303758886",
  appId: "1:760303758886:web:2e73e1a16e7641708e80e7",
  measurementId: "G-S4YD2S1FWQ"
};
  

// Retrieve an instance of Firebase Messaging so that it can handle background messages.

var app = firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore(app);

var firestore = firebase.firestore();

// // データの場所（パス）
// const docRef = firestore.doc("samples/sandwichData");

// const docRef2 = firestore.doc("samples2/sandwichData2");

// var usersCollectionRef = firestore.collection('users');

// outputHeader←見出し（idはhotDogOutput）
// const outputHeader = document.querySelector("#hotDogOutput");

// inputTextField←テキストボックス（idはlatestHotDogStatus）
const artist = document.querySelector("#artist");

// inputTextField←テキストボックス（idはlatestHotDogStatusid）
const eventname = document.querySelector("#eventname");

const eventques = document.querySelector("#eventques");

const genreques = document.querySelector("#genreques");

// inputTextField←テキストボックス（idはlatestHotDogStatusid）
const date = document.querySelector("#date");

const where = document.querySelector("#where");

const ticket = document.querySelector("#tik");

const durink = document.querySelector("#dur");

// saveButton←Saveボタン（idはsaveButton）
const saveButton = document.querySelector("#saveButton");

// loadButton←Loadボタン（idはloadButton）
const loadButton = document.querySelector("#loadButton");

var str = localStorage.getItem("mycount");
var result = Number(str);
if(result != 0){
    var str = localStorage.getItem("mycount");
    var result = Number(str);
    var count = result;
}else{
    var count = 0;
}
// var count = 0;
// firestore.collection("user").add({ name: "taro"

// }).then(docRef => {
//     // success
// }).catch(error => {
//     // error
// })
// saveButtonボタンが押されたら実行する処理
// var citiesRef = firestore.collection("aaa");
// var query = citiesRef.where("country", "==", "c");
// console.log(query)
// saveButton.addEventListener("click", function(){
//     firestore.collection("eventlist").where("artist", "==", "マイヘア")
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());

            
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
//     // firestore.collection("eventlist").get().then(function(querySnapshot) {
//     //     querySnapshot.forEach(function(doc) {
//     //         // doc.data() is never undefined for query doc snapshots
//     //         console.log(doc.id, " => ", doc.data());
//     //     });
//     // });
//     // firestore.collection("aaa").where("name", "==", true)
//     //     .get()
//     //     .then(function(querySnapshot) {
//     //         querySnapshot.forEach(function(doc) {
//     //            // doc.data() is never undefined for query doc snapshots
//     //          console.log(doc.id, " => ", doc.data());
//     //         });
//     //     })
//     //     .catch(function(error) {
//     //         console.log("Error getting documents: ", error);
//     //     });
//     // const docRef2 = firestore.collection("ivent").doc("id2");
//     // docRef2.get().then(function(doc){
//     //     if(doc && doc.exists){
//     //         const myData = doc.data();
//     //         console.log("Got an error:", myData);
//     //         // outputHeader.innerText = "Hot dog status:" + myData.hotDogStatus;
//     //     }
//     // }).catch(function(error){
//     //     console.log("Got an error:", error);
//     // });
//      // Add a new document in collection "cities"
//      return output =
//      firestore.collection("コウキ").add({
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     // })
//     // const textTo = inputTextField.value;
//     // const textToSave = inputTextyourID.value;
//     // const name = inputTextmyID.value;
//     // console.log("I am going to save" + textToSave + "to Firestore");
//     // docRef.add({
//     //     myId:name,
//     //     yourID: textToSave,
//     //     id: textTo
//     // })
//     // docRef2.set({
//     //     myId:name,
//     //     yourID: textToSave,
//     //     id: textTo
//     }).then(function(){
//         console.log("Status saved!");
//     }).catch(function (error){
//         console.log("Got an error:", error);
//     });
// });

// myStorage = localStorage;

// loadButtonボタンが押されたら実行する処理
saveButton.addEventListener("click", function(){ 
    const textartist = artist.value;
    const texteventname = eventname.value;
    const textwhere = where.value;
    const texteventques = eventques.value;
    const textgenreques = genreques.value;
    const textdate = date.value;
    const textticket = ticket.value;
    const textdurink = durink.value;
    // var output =
    // [START set_document]
    // Add a new document in collection "cities"
    count = count + 1;
    localStorage.setItem('mycount', count);

    firestore.collection("eventlist").doc("eventid"+count).set({
        id: "id"+count,
        artist: textartist,
        event: texteventname,
        where: textwhere,
        eventgenre: texteventques,
        artistgenre: textgenreques,
        date: textdate,
        ticket: textticket,
        durink: textdurink,
        bool: true
    }).then(function(){
        console.log("Status saved!");
    }).catch(function (error){
        console.log("Got an error:", error);
    });
    // return output;
});

// データが変更されたら自動的に実行する処理
// getRealtimeUpdates = function(){
//     docRef.onSnapshot(function(doc){
//     	const textid = inputTextField.value; 
//     	const textmyid = inputTextmyID.value;
//     	const textyourid = inputTextyourID.value;
//         if(doc && doc.exists){
//             const myData = doc.data();
//             console.log("Check out this document I received" + doc);
            
//             if(myData.hotDogStatus == textmyid){
//                 alert('Hello trident !!');
//             }else if(textmyid.length > 0 && textmyid == textyourid){
//                 alert('Hello myid !!');
//             }else{
//             	outputHeader.innerText = "Hot dog status:" + myData.id;
//                 inputTextField.value = myData.id;
//             }

//         }
//     });
// }



// getRealtimeUpdates();
