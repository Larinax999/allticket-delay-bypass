// ==UserScript==
// @name         all ticket loading bypass
// @namespace    https://github.com/Larinax999/allticket-delay-bypass
// @version      2025-02-21
// @description  abc
// @author       Larina
// @match        https://www.allticket.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allticket.com
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

const setTimeoutX=window.setTimeout;
unsafeWindow.setTimeout=function(...args){
    const funcstr = args[0].toString();
    if (funcstr.includes("{if(9999===")||funcstr.includes("validateBuyTicketBtn")) {
        console.log(args[0],funcstr,args[1]);
        args[1]=0;
    }
    return setTimeoutX.apply(this,args);
};
