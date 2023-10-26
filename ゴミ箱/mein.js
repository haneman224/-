
//document.getElementById(<label><input type="radio" name="2">完了！</label>) 惜しい。
// p id ="test"でクラスをあげてあればよかった。
//let text = document.getElementById('test').textContent; //宣言をしてあげる
// document.getElementById('test').textContent = '完了！';
//230926


//まずは宣言をし、ＨＴＭＬの値を取得するためのコードを記述。
//次はイベントリスナーの追加を行い、クリックされた場合に関数が動き出す。
//動き出した関数がテキストボックスの追加を行うコードの記述。

let taskStatusElement =document.getElementById("taskStatus")
let toggleButton = document.getElementById('taskStatus');

toggleButton.addEventListener("click",function(){
    let currentStatus = taskStatusElement.textContent;
    if(currentStatus === "未完了") {
    taskStatusElement.textContent = "完了";        
    } else{
    taskStatusElement.textContent ="未完了";
    }
});