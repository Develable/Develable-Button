/*! 
 * Team. Develable
 * Whatever you imagine, We develop.
 * Since 2018.07.06
 * 
 * Copyright 2018-2021 Develable.
 * 
 * Github : https://github.com/Develable/Develable-Button
 */

var objLink = document.createElement("link");
objLink.rel = "stylesheet";
objLink.type = "text/css";
objLink.href = "https://login-button.develable.xyz/dev05_files/dev05.css";

document.head.appendChild(objLink);

var loginButtons = document.getElementsByTagName("devlogin");
for (var i = 0; i < loginButtons.length; i++) {
    var button = loginButtons.item(i);
    var link;
    if ($(button).attr("href")) {
        link = $(button).attr("href");
    } else {
        link = "javascript:void(0);";
    }
    $(button).each(function () {
        if ($(this).hasClass("dev05-round") === true) {
            $(this).html("<a class=\"dev05-base dev05-login dev05-round\" href=\"" + link + "\"><i class=\"dev05-ico-dev05\"></i><hr class=\"dev05-line\"></hr><span class=\"text\">Develable로 로그인</span></a>");
        }
        if ($(this).hasClass("dev05-square-round") === true) {
            $(this).html("<a class=\"dev05-base dev05-login dev05-square-round\" href=\"" + link + "\"><i class=\"dev05-ico-dev05\"></i><hr class=\"dev05-line\"></hr><span class=\"text\">Develable로 로그인</span></a>");
        }
        if ($(this).hasClass("dev05-square") === true) {
            $(this).html("<a class=\"dev05-base dev05-login dev05-square\" href=\"" + link + "\"><i class=\"dev05-ico-dev05\"></i><hr class=\"dev05-line\"></hr><span class=\"text\">Develable로 로그인</span></a>");
        }
    });
}
