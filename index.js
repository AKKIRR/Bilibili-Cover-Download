// ==UserScript==
// @name         哔哩哔哩封面获取
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log(document.getElementsByTagName("meta")[12].content)
    var div = document.createElement("DIV");
      div.id = "addDiv";
      div.style.cssText =
        "color: #1989fa;font-size: 21px;font-family: cursive;z-index: 1000;width: 50px;font-weight: 700;height: 50px;background: #f2f5f6;position: fixed;left: 50px;top: 820px;display: flex;align-items: center;justify-content: space-around;border-radius: 10px;box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);";
      document.body.insertBefore(div, document.body.childNodes[0]);
      let a = document.createElement("a"); //a标签
      a.innerHTML = "点击";
      a.onclick = function () {
        console.log(canvas.toDataURL());
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = "download";
        link.click();
      };
      document.getElementById("addDiv").appendChild(a);//a标签插入到div中
      let canvas = document.createElement("canvas"); //创建画板
      let img = document.createElement("img"); //创建图片
      img.src = document.getElementsByTagName("meta")[12].content; //设置图片属性
      img.setAttribute("crossOrigin", "Anonymous"); //跨域
      let ctx = canvas.getContext("2d"); //创建画板对象
      img.onload = () => {
        //图片加载完成触发
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
    // Your code here...
})();
