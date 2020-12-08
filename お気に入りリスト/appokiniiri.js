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
}

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
        bool:"ture"
    }).then(function(){
        console.log("Status saved!");
    }).catch(function (error){
        console.log("Got an error:", error);
    });
    // return output;
});
// b.collection("cities").where("capital", "==", true)
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
// firestore.collection("eventlist").where("bool", "==", true)
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.id, " => ", doc.data());
//                 const myData = doc.data();
//                 artist.innerText = "アーティスト名:" + myData.artist;
//                 let table = document.getElementById('targetTable');
//                 let newRow = table.insertRow();

//                 let newCell = newRow.insertCell();
//                 let newText = document.createTextNode(myData.artist);
//                 newCell.appendChild(newText);
                
                    // HTML テンプレートを生成
                    // const html = `
                    // <li class="list-group-item d-flex justify-content-between align-items-center">
                    //     <a href="aaa">
                    //         <span>${myData.artist}</span>
                    //     </a>
                    //     <i class="far fa-trash-alt delete"></i>
                    // </li>
                    // `;
                
                    // list.innerHTML += html;
                    // // ########## 追加 ###########
                    // saveTaskToLocalStorage(myData.artist, html); 
                
            
        // });
    // });
    var country = [];
            firestore.collection("eventlist").where("bool", "==", true)
                .get()
                .then(function(querySnapshot) {
                 querySnapshot.forEach(function(doc) {
                     // doc.data() is never undefined for query doc snapshots
                         console.log(doc.id, " => ", doc.data());
                         const myData = doc.data();
                         country.push(myData.artist)
                         artist.innerText = "アーティスト名:" + myData.artist;
                        //  let table = document.getElementById('targetTable');
                        //  let newRow = table.insertRow();

                        //  let newCell = newRow.insertCell();
                        //  let newText = document.createTextNode(myData.artist);
                        //  newCell.appendChild(newText);

                         var tr_element = document.createElement('tr')
                         var parent_object = document.getElementById('targetTable');
                         tr_element.innerHTML = '<tr><td><a href="file:///C:/Users/s192163/Desktop/android2%E5%B9%B4Web/201014_FirebaseCloudFirestore/%E4%B8%BB%E5%82%AC%E3%83%AA%E3%82%B9%E3%83%88/%E4%B8%BB%E5%82%AC%E5%85%A5%E5%8A%9B.html">'
                         +myData.artist+'</a></td></tr>';
                         parent_object.appendChild(tr_element);

                        //   var linkID = "yahoo";	// リンクを設定するタグのID
                        //   var linkURL = "http://www.yahoo.co.jp/";
                        //   var baseTag = document.getElementById(linkID);
                        // //   var link1 = baseTag.firstChild.nodeValue;
                        //   var link1 = document.createTextNode(myData.artist); 
                        //   var newDiv = document.createElement("div"); 

                        //   var aTag = document.createElement("a");
                        //   aTag.href = linkURL;
                        //   aTag.appendChild(link1);
                        //   console.log(link1)
                        //   var currenta = document.getElementById("a1"); 
                        //   document.body.insertBefore(aTag, currenta); 
                          
                        //   var currentDiv = document.getElementById("div1"); 
                        //   document.body.insertBefore(newDiv, currentDiv); 
                        // //   document.body.insertBefore(newDiv, currentDiv);

                        //   var newDiv = document.createElement("div"); 
                        //   // いくつかの内容を与えます 
                        //   var newContent = document.createTextNode(myData.artist); 
                        //   // テキストノードを新規作成した div に追加します
                        //   aTag.href = linkURL;
                        //   newDiv.appendChild(newContent);  
                        
                        //   // DOM に新しく作られた要素とその内容を追加します 
                        //   var currentDiv = document.getElementById("div1"); 
                        //   document.body.insertBefore(newDiv, currentDiv); 
                        

            
        });
    });
    // var country = ['日本', 'アメリカ', 'イギリス', 'ロシア', 'フランス'];

            // ul要素を取得
            var ul = document.getElementById('country_list');

            // ul要素にli要素を追加
            for (var count = 0; count < country.length; count++) {
	            // li要素を作成
	            var li = document.createElement('li');

	            // テキスト情報を作成
	            var text = document.createTextNode(country[count]);

	            // ul要素に追加
	            li.appendChild(text);
	            ul.appendChild(li);
            }
// function myMethod () {
//     let table = document.getElementById('targetTable');
//     let newRow = table.insertRow();

//     let newCell = newRow.insertCell();
//     let newText = document.createTextNode('山田');
//     newCell.appendChild(newText);

//     ewCell = newRow.insertCell();
//     newText = document.createTextNode(18);
//     newCell.appendChild(newText);
// }
// var docRef = firestore.collection("eventlist").where("bool","==",ture);

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

// var okini = firestore.collection("eventlist").doc("eventid11");
// // データが変更されたら自動的に実行する処理
// getRealtimeUpdates = function(){
//     okini.onSnapshot(function(doc){
//     	// const textid = inputTextField.value; 
//     	// const textmyid = inputTextmyID.value;
//     	// const textyourid = inputTextyourID.value;
//         if(doc && doc.exists){
//             const myData = doc.data();
//             console.log("Check out this document I received" + doc + myData.artist);
//         }

//     });
// }



// getRealtimeUpdates();