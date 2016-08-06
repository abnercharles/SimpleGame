var smileId = 0;
var level = 1;
var t;
function updateLevel() {
    var levelText = document.getElementById("level");
    ++level;
    levelText.value = level;
}

function showSmile() {
    var smile = document.getElementById("face");

    smile.style.top = generateAccord() + "px";
    smile.style.left = generateAccord() + "px";

    smile2 = smile.cloneNode(true);
    smile2.id = ""
    smile3 = smile.cloneNode(true);
    smile3.id = ""
    smile2.style.visibility = "visible";
    smile3.style.visibility = "visible";

    var leftdiv = document.getElementById("leftSide");
    var rightdiv = document.getElementById("rightSide");
    leftdiv.appendChild(smile2);
    rightdiv.appendChild(smile3);
}

function addOneMore() {
    var smile = document.getElementById("face");
    smile.style.top = generateAccord() + "px";
    smile.style.left = generateAccord() + "px";
    smileOneMore = smile.cloneNode(true);
    smileOneMore.id = "win";
    smileOneMore.onclick = youWin;
    smileOneMore.style.visibility = "visible";

    var leftdiv = document.getElementById("leftSide");
    leftdiv.appendChild(smileOneMore);
}


function generateAccord() {
    return (Math.floor(Math.random() * 350))
}

function removeAllChildren(element) {
    while (element.firstChild)
        element.removeChild(element.firstChild);
}

function generateLevel() {
    var time = document.getElementById("timerBox");
    clearTimeout(t);
    time.value = 10;
    var div1 = document.getElementById("leftSide");
    var div2 = document.getElementById("rightSide");
    removeAllChildren(div1);
    removeAllChildren(div2);
    timer();
    for (var i = 0; i < 4 * level; ++i)
        showSmile();
    addOneMore();
}

function fail(){
    alert("你输了，你这个傻逼");
    document.getElementById("timerBox").value = 0;
    clearTimeout(t);
}

function youWin(){
    updateLevel();
    generateLevel();
}

function timer(){
    var time = document.getElementById("timerBox");
    time.value -= 1;
    t = setTimeout("timer()", 1000);
    if(time.value < 0)
        fail();
}