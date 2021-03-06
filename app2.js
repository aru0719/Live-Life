//firebaseSDKのキー設定を追加する
const firebaseConfig = {
    apiKey: "AIzaSyDuGjBb3ybcOncfoukk8o-3wIqV7WIEDTo",
    authDomain: "live-life-3eaa6.firebaseapp.com",
    projectId: "live-life-3eaa6",
    storageBucket: "live-life-3eaa6.appspot.com",
    messagingSenderId: "698245895223",
    appId: "1:698245895223:web:15e26e07db0d07ee339bb2",
    measurementId: "G-69YCJJ4MQZ"
};
    // Retrieve an instance of Firebase Messaging so that it can handle background messages.
    
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
    //オブジェクトの取得
const txtEmail = document.getElementById('txtEmail');       //メール
const txtPassword = document.getElementById('txtPassword'); //パスワード
const btnSignUp = document.getElementById('btnSignUp');     //Sign Upボタン
    //log inボタンのclickイベント
    //クリックされた時に実行する処理
    
    //Sign Upボタンのclickイベント
    //クリックされた時に実行する処理
btnSignUp.addEventListener('click', e => {
    var email = txtEmail.value;   //メールを取得
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.update(email);
    var hash = shaObj.getHash("HEX");
    localStorage.setItem('shamail',hash);
    console.log(hash);
    const pass = txtPassword.value; //パスワードを取得
    const auth = firebase.auth();   //FirebaseAuthenticationを取得
    var mail_2 = localStorage.getItem("shamail");
    console.log(mail_2);
    const promise = auth.createUserWithEmailAndPassword(email, pass);   //メールとパスワードでサインイン
    db.collection(hash).doc("like").set({
    })
    db.collection(hash).doc("organizer").set({
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    });
    
    promise.catch(function(e){console.log(e.message)}); //結果をconsoleに表示

});

   
    
    //ログインしているユーザー情報を返す非同期（コールバック）処理
    //認証状態を取得
firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser){
        console.log(firebaseUser.email);    //認証済みの場合はユーザ情報のメールをconsoleに表示
        alert("ログイン画面に移ります")
        document.location.assign("login.html");
    } else {
        console.log('not logged in');       //未認証の場合は「not logged in」をconsoleに表示

    };
});