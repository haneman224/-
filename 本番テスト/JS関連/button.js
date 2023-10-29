"use strict";
const HTML_button = document.getElementById("button1");//HTMLからIDの参照
const HTML_task = document.getElementById("task");
const HTML_textbox = document.getElementById("text1");



HTML_button.addEventListener("click",function(){  
    //ボタンクリック時にリスト要素を生成。
const li = document.createElement("li");
li.textContent = HTML_textbox.value;
HTML_textbox.value="";//空を代入するよ
HTML_task.appendChild(li);//新しいリストを追加するよ。
})
