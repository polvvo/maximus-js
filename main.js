"use strict";function displayMessage(e){var t;try{t=e.data.action}catch(e){t=null}if("login"===t||"logout"===t){var o=void 0!==window.PrimeFaces;if("login"===t){var a,i;try{a=e.data.userName}catch(e){a=null}try{i=e.data.password}catch(e){i=null}if(!a)return void console.error("userName must be a string");if(!i)return void console.error("password must be a string");if(document.getElementById("user").value=a,document.getElementById("password").value=i,!o)return void document.getElementById("j_idt21").click();window.PrimeFaces.ab({source:"j_idt21",update:"formLogin"})}else{if(!o)return void document.getElementById("j_idt450").click();window.PrimeFaces.ab({source:"j_idt450"})}}else console.error('action must be one of "login" or "logout"')}window.addEventListener?window.addEventListener("message",displayMessage,!1):window.attachEvent("onmessage",displayMessage);
