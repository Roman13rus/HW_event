(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var l=s.getElementsByTagName("script");if(l.length)for(var n=l.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=l[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class t{constructor(e,t){this.table=e,this.person=t,this.previousValue=0}getTableCell(){return this.table.querySelectorAll(".cell")}randomCell(){return Math.floor(Math.random()*this.getTableCell().length)}addPersonInCell(){let e=this.randomCell();this.previousValue===e&&(e=this.randomCell());const t=this.getTableCell()[e],s=document.createElement("img");s.className="image",s.src=this.person,t.appendChild(s),this.previousValue=e}dellPersonCell(){const e=this.table.querySelector(".image");e&&e.remove()}}class s{constructor(e){this.table=e,this.conterClick=0,this.counterWin=0,this.counterLose=0,this.getGameResult=this.getGameResult.bind(this),this.outputGameResult=this.outputGameResult.bind(this),this.onclickCell=this.onclickCell.bind(this),this.table.addEventListener("click",this.onclickCell)}onclickCell(e){for(;this.conterClick<1;)!e.target.hasChildNodes()&&e.target.classList.contains("cell")?(this.counterLose++,this.conterClick++):(e.target.classList.contains("image")||e.target.children&&e.target.children[0].classList.contains("image"))&&(this.counterWin++,this.conterClick++)}getGameResult(){return{counterWin:this.counterWin,counterLose:this.counterLose}}outputGameResult(){const e=this.getGameResult();if(5===e.counterLose){const t=document.createElement("div");t.className="banner",t.textContent=`Игра окончена. Вы набрали ${e.counterWin} очка(ов).`,this.table.insertAdjacentElement("beforebegin",t)}}}const l=e.p+"2dbd01ce16c0fa83cb67e20c73dedb66.png";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".playing-field"),n=new t(e,l),r=new s(e),i=setInterval((()=>{n.dellPersonCell(),n.randomCell(),n.addPersonInCell(),0===r.conterClick&&r.counterLose++,r.conterClick=0,5===r.counterLose&&(clearInterval(i),r.outputGameResult(),n.dellPersonCell())}),1e3)}))})();