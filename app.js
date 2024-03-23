// 初始化 Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZ0cidn0hbZQsokFZwu4uRDPksk9Ys9sk",
  authDomain: "test-addd1.firebaseapp.com",
  projectId: "test-addd1",
  storageBucket: "test-addd1.appspot.com",
  messagingSenderId: "308863996580",
  appId: "1:308863996580:web:9750cea4a0b5ba1c69cc31",
  measurementId: "G-DSZB9LFZ36"
};

firebase.initializeApp(firebaseConfig);

// 登入函數
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // 登入成功
        console.log("登入成功");
        const user = userCredential.user;
        // 在此處執行用戶登入後的操作，例如導航到另一個頁面
    })
    .catch((error) => {
        // 登入失敗
        console.error("登入失敗", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // 在此處處理登入失敗的情況，例如顯示錯誤消息給用戶
    });
}
