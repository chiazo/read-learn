!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=!1,r=[],l=(document.createElement("input-form"),document.getElementById("submit_b")),c=document.getElementById("finish_s"),i=document.getElementById("restart_s"),u=document.getElementById("story");document.getElementsByTagName("span");i.onclick=function(e){o&&window.location.reload()},l.onclick=function(e){console.log("is this working..."),console.log(u),$("span").click(function(){$(this).css("background-color","red")}),function(){o=!1;var e=u.value,t=e.split(" ",e.length-1),n=document.createElement("p");document.getElementById("storyDisplay").appendChild(n);for(var l=function(e){var o=document.createElement("span");o.innerText=t[e]+" ",o.addEventListener("click",function(){r[r.length]=o.innerText,o.style.backgroundColor="yellow"}),n.appendChild(o)},c=0;c<t.length;c++)l(c)}()},c.onclick=function(e){var t=document.createElement("div");t.className+=" fourth";for(var n=document.getElementById("listDisplay"),l=0;l<r.length;l++){var c=document.createElement("div");c.innerText=r[l],t.appendChild(c)}n.appendChild(t),r=[],o=!0}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmluaXNoZWQiLCJjbGlja2VkTGlzdCIsInN1Ym1pdEJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluaXNoQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsInN0b3J5SW5wdXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm9uY2xpY2siLCJldmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsIiQiLCJjbGljayIsInRoaXMiLCJjc3MiLCJpbnB1dCIsIndvcmRzIiwic3BsaXQiLCJsZW5ndGgiLCJhUGFyIiwiYXBwZW5kQ2hpbGQiLCJhU3BhbiIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNhdmVTdG9yeSIsImFDb250YWluZXIiLCJjbGFzc05hbWUiLCJsaXN0ZGlzcGxheSIsIndvcmQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFB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QyxXQUFhLFVBRXhCLElBREEsSUFBSUMsRUFBY2hDLFNBQVNFLGVBQWUsZUFDakNyQyxFQUFJLEVBQUdBLEVBQUlpQyxFQUFZdUIsT0FBUXhELElBQUssQ0FDekMsSUFBSW9FLEVBQU9qQyxTQUFTQyxjQUFjLE9BQ2xDZ0MsRUFBS1IsVUFBWTNCLEVBQVlqQyxHQUM3QmlFLEVBQVdQLFlBQVlVLEdBRTNCRCxFQUFZVCxZQUFZTyxHQUN4QmhDLEVBQWMsR0FDZEQsR0FBVyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbmxldCBmaW5pc2hlZCA9IGZhbHNlO1xubGV0IGNsaWNrZWRMaXN0OiBzdHJpbmdbXSA9IFtdO1xubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dC1mb3JtXCIpO1xubGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X2JcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5pc2hfc1wiKSBhcyBIVE1MRWxlbWVudDtcbmxldCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0X3NcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgc3RvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbmxldCBzcGFuV29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIik7XG5cbmxldCBjbGlja2VkV29yZCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGxldCBjdXJyV29yZCA9IChldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpXG4gICAgY2xpY2tlZExpc3RbY2xpY2tlZExpc3QubGVuZ3RoXSA9IGN1cnJXb3JkLmlubmVyVGV4dDtcbiAgICBjdXJyV29yZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xufTtcblxubGV0IHNhdmVTdG9yeSA9ICgpID0+IHtcbiAgICAvLyBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIC8vIGxldCBpbnB1dCA9IHN0b3J5SW5wdXQudmFsdWU7XG4gICAgLy8gbGV0IHdvcmRzID0gaW5wdXQuc3BsaXQoXCIgXCIsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgIC8vIGxldCBhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBhQ29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiAgdGhpcmRcIjtcbiAgICAvLyBsZXQgYVBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIGFQYXIuY2xhc3NOYW1lICs9IFwiIHNwYW4tcGFyIFwiO1xuICAgIC8vIGxldCBzcGVjaWFsQ2hhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikhLmFwcGVuZENoaWxkKGFQYXIpO1xuICAgIC8vIGxldCBzdG9yeWRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKSE7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBsZXQgZm9ybWF0ID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dLztcbiAgICAvLyAgICAgbGV0IHMgPSBcIlwiO1xuICAgIC8vICAgICBpZiAoZm9ybWF0LnRlc3Qod29yZHNbaV0uY2hhckF0KHdvcmRzW2ldLmxlbmd0aCAtIDEpKSkge1xuICAgIC8vICAgICAgICAgc3BlY2lhbENoYXIgPSB0cnVlO1xuICAgIC8vICAgICAgICAgcyA9IFwiPHNwYW4+XCIgKyB3b3Jkc1tpXS5zdWJzdHJpbmcoMCwgd29yZHNbaV0ubGVuZ3RoIC0gMSkgKyBcIjwvc3Bhbj5cIiArIHdvcmRzW2ldLmNoYXJBdCh3b3Jkc1tpXS5sZW5ndGggLSAxKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHMgPSBcIjxzcGFuPlwiICsgd29yZHNbaV0gKyBcIjwvc3Bhbj5cIlxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgYVBhci5pbm5lckhUTUwgKz0gcyArIFwiIFwiO1xuXG4gICAgLy8gfVxuICAgIC8vIGFDb250YWluZXIuYXBwZW5kQ2hpbGQoYVBhcik7XG4gICAgLy8gc3RvcnlkaXNwbGF5LmFwcGVuZENoaWxkKGFDb250YWluZXIpO1xuXG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgaW5wdXQgPSBzdG9yeUlucHV0LnZhbHVlO1xuICAgIGxldCB3b3JkcyA9IGlucHV0LnNwbGl0KFwiIFwiLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICBsZXQgYVBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlEaXNwbGF5XCIpIS5hcHBlbmRDaGlsZChhUGFyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgIGkrKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGFuV29yZHMod29yZHNbaV0sIFwiIFwiKSk7XG4gICAgICAgIGxldCBhU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBhU3Bhbi5pbm5lclRleHQgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgICBhU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbGlja2VkTGlzdFtjbGlja2VkTGlzdC5sZW5ndGhdID0gYVNwYW4uaW5uZXJUZXh0O1xuICAgICAgICAgICAgYVNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGFQYXIuYXBwZW5kQ2hpbGQoYVNwYW4pO1xuICAgIH1cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKS5pbm5lclRleHQgPSBpbnB1dDtcbn07XG5cbmxldCBwcm9jZXNzU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd29ya2luZy4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yeUlucHV0KTtcblxuICAgICQoXCJzcGFuXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmVkXCIpO1xuICAgIH0pO1xufTtcblxucmVzdGFydEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG59O1xuXG5zdWJtaXRCdXR0b24ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIC8vIGlmIChmaW5pc2hlZCkge1xuICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKSk7XG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdERpc3BsYXlcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0RGlzcGxheVwiKSk7XG4gICAgLy8gfVxuICAgIHByb2Nlc3NTdWJtaXNzaW9uKCk7XG4gICAgc2F2ZVN0b3J5KCk7XG59O1xuXG5maW5pc2hCdXR0b24ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGxldCBhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhQ29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiBmb3VydGhcIjtcbiAgICBsZXQgbGlzdGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaXNwbGF5XCIpITtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd29yZC5pbm5lclRleHQgPSBjbGlja2VkTGlzdFtpXTtcbiAgICAgICAgYUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3JkKTtcbiAgICB9XG4gICAgbGlzdGRpc3BsYXkuYXBwZW5kQ2hpbGQoYUNvbnRhaW5lcik7XG4gICAgY2xpY2tlZExpc3QgPSBbXTtcbiAgICBmaW5pc2hlZCA9IHRydWU7XG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==