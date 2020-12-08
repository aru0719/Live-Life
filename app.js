//firebaseSDKのキー設定を追加する
    const firebaseConfig = {
    apiKey: "AIzaSyC_CttxTSDt0eLfO3RqorHMw_CH8F3yYrg",
    authDomain: "livelife-18347.firebaseapp.com",
    databaseURL: "https://livelife-18347.firebaseio.com",
    projectId: "livelife-18347",
    storageBucket: "livelife-18347.appspot.com",
    messagingSenderId: "195051012597",
    appId: "1:195051012597:web:851c41092a49e935c320bc",
    measurementId: "G-RT38GMXE4X"
};
    // Retrieve an instance of Firebase Messaging so that it can handle background messages.
    
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
    //オブジェクトの取得
const txtEmail = document.getElementById('txtEmail');       //メール
const txtPassword = document.getElementById('txtPassword'); //パスワード
const btnLogin = document.getElementById('btnLogin');       //log inボタン
const btnLogout = document.getElementById('btnLogout');     //Log outボタン 
    //log inボタンのclickイベント
    //クリックされた時に実行する処理
btnLogin.addEventListener('click', e => {
    var email = txtEmail.value;   //メールを取得
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.update(email);
    var hash = shaObj.getHash("HEX");
    localStorage.setItem('shamail',hash);
    const pass = txtPassword.value; //パスワードを取得
    const auth = firebase.auth();   //FirebaseAuthenticationを取得
    const promise = auth.signInWithEmailAndPassword(email, pass);   //メールとパスワードでサインイン可
    promise.catch(e => console.log(e.message)); //結果をconsoleに表示
    console.log(hash);
    var _mail = localStorage.getItem("shamail");
    console.log(_mail);
    //document.location.assign('singup.html');
});
   
    //Log outボタンのclickイベント
    //クリックされた時に実行する処理
btnLogout.addEventListener('click', e =>   {
    firebase.auth().signOut();  //サインアウト
});
    
    //ログインしているユーザー情報を返す非同期（コールバック）処理
    //認証状態を取得
firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser){
        console.log(firebaseUser.email);    //認証済みの場合はユーザ情報のメールをconsoleに表示
    } else {
        console.log('not logged in');       //未認証の場合は「not logged in」をconsoleに表示
    };
});