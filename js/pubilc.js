
/*个人中心模块*/
var metn = document.getElementById("btn_me");
var meheight = document.getElementById("me_list");
var minbtn = document.getElementById("btnnav");
var smallnav = document.getElementById("snav");
//pc端导航
var btnnav = document.getElementById("nav2btn");
var nav2 = document.getElementById("nav2");
//手机端导航
var btnnav1 = document.getElementById("smnavbtn");
var nav21 = document.getElementById("smnav2");
//个人中心点击状态
var fleng = true;
//一级导航点击事件状态
var fleng1 = true;
//pc端导航2级导航事件状态
var flag = true;
//手机端2级导航事件判断
var flag1 = true;
metn.onclick = function () {
    smallnav.classList.remove("after");
    smallnav.classList.add("orgin");
    fleng1 = true;
    if (fleng) {
        meheight.style.height = 140 + 'px';
        fleng = false;
    }
    else {
        meheight.style.height = '0px';
        meheight.style.transition = '1s';
        fleng = true;
    }
}

minbtn.onclick = function () {
    meheight.style.height = '0px';
    meheight.style.transition = '1s';
    fleng = true;
    if (fleng1) {
        smallnav.classList.add("after");
        smallnav.classList.remove("orgin");
        fleng1 = false;
        console.log(fleng1);
    }
    else {
        smallnav.classList.remove("after");
        smallnav.classList.add("orgin");
        fleng1 = true;
        console.log(fleng1);
    }
}
console.log(metn);
/*PC端*/


btnnav.onclick = function () {
    if (flag) {
        nav2.classList.remove("ycxiala");
        nav2.classList.add("xiala");
        flag = false;
    } else {
        nav2.classList.remove("xiala");
        nav2.classList.add("ycxiala");
        flag = true;
    }
}
/*手机端*/


btnnav1.onclick = function () {

    if (flag1) {
        nav21.classList.remove("smycxiala");
        nav21.classList.add("smxiala");
        flag1 = false;
    } else {
        nav21.classList.remove("smxiala");
        nav21.classList.add("smycxiala");
        flag1 = true;
    }
}
//二维码鼠标移动事件
document.getElementById("wechatbtn").onmouseover = function () {
    document.getElementById("wechatk").style.display = "block";

}
document.getElementById("wechatbtn"), onmouseout = function () {
    console.log(window.innerWidth);
    if (window.innerWidth > 1055) {
        document.getElementById("wechatk").style.display = "none";
    }
}
//图片点击
var rightdetailbtn = document.getElementById("rightdetailbtn");
var leftdetailbtn = document.getElementById("leftdetailbtn");
var imglisttk = document.getElementById("imglisttk");
var imgkk = document.getElementById("imgkk");
var imgwidth = $("#imgkk li img").width();
var imgnum = $("#imgkk li");
console.log(imgnum + ".................");
imgkk.style.width = imgnum.length * imgwidth + "px";
var winwidth = window.innerWidth;
$("#imgkk li img").css("width", winwidth + "px");
if(winwidth<=800){
    var imgwidth = $("#imgkk li img").width();
}

console.log(winwidth);
/*  alert(imgwidth); */
index = 0;
rightdetailbtn.onclick = function () {
    if (index < imgnum.length - 1) {
        index++;
        imgkk.style.marginLeft = -index * imgwidth + "px";
    } else {
        alert("到头了");
    }
}
leftdetailbtn.onclick = function () {
    if (index > 0) {
        index--;
        imgkk.style.marginLeft = -index * imgwidth + "px";
    } else {
        alert("到头了");
    }
}
//关闭图片弹框
var closeimgbtn = document.getElementById("closeimgbtn");
closeimgbtn.onclick = function () {
    /* alert(1); */
    imgkk.style.marginLeft = "0px";
    imglisttk.style.display = "none";
}
//加载图片弹框
function imglistfc() {
    var winwidth = window.innerWidth;
    imglisttk.style.display = "block";
    if (winwidth <= 800) {
        var imgnum = $("#imgkk li");
        var imgwidth = $("#imgkk li img").width();
        imgkk.style.width = imgnum.length * imgwidth + "px";

        $("#imgkk li img").css("width", winwidth + "px");
    }else {
        $("#imgkk li img").css("width", "800px");
    }

    index = 0;
}