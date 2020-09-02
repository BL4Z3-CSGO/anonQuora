// ==UserScript==
// @name         anonQuora
// @version      1.0
// @description  lets you use quora without having to log in
// @author       felix12340000
// @match        https://www.quora.com/*
// ==/UserScript==
if (window.location.href.slice(-8) != "?share=1") {
    window.location.replace(window.location.href + "?share=1");
}
