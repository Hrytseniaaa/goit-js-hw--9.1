const t={btn:document.querySelectorAll("button"),bodyEl:document.querySelector("body")};t.btn[0].addEventListener("click",(()=>{timerId=setInterval((()=>{t.bodyEl.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btn[0].disabled=!0,t.btn[1].disabled=!1})),t.btn[1].addEventListener("click",(()=>{clearInterval(timerId),t.btn[0].disabled=!1,t.btn[1].disabled=!0}));
//# sourceMappingURL=01-color-switcher.9b63ce22.js.map
