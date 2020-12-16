//firebaseSDKのキー設定を追加する
const firebaseConfig = {
    apiKey: "AIzaSyDgMBTHoIta-EzF2JkTQbHvgPEqtzKPatM",
    authDomain: "life-live-join.firebaseapp.com",
    projectId: "life-live-join",
    storageBucket: "life-live-join.appspot.com",
    messagingSenderId: "56409696436",
    appId: "1:56409696436:web:3c6ef0af6fb01ccdef8fe1",
    measurementId: "G-5RWQKGXJZG"
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
    const pass = txtPassword.value; //パスワードを取得
    if (email == "" || pass ==""){
        alert("入力欄に入力がありません")
    }
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.update(email);
    var hash = shaObj.getHash("HEX");
    localStorage.setItem('shamail',hash);
    console.log(hash);
    var _mail = localStorage.getItem("shamail");
    console.log(_mail);
    firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
        document.location.assign('お気に入りリスト'+'/sample.html');
    },error => {
        alert("メールアドレス又はパスワードが間違っています")
    })   //メールとパスワードでサインイン可
    //document.location.assign('お気に入りリスト'+'/sample.html');
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
        //document.location.assign('お気に入りリスト'+'/sample.html');
    } else {
        console.log('not logged in');       //未認証の場合は「not logged in」をconsoleに表示
    };
});