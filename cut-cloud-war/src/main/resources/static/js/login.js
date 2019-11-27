function birthdayCake() {
    //修改密码请改此处
    event.preventDefault();
    requestFullScreen();
    window.location.href = "BirthdayCake.html";
}

$('#login-button').click(function (event) {
    //修改密码请改此处
    event.preventDefault();
    $('.wrapper').addClass('form-success');
    window.location.href = "box.html";
});

function requestFullScreen(element) {
    var element = document.documentElement;
    var requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen || //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
    if (requestMethod) {
        requestMethod.call(element);
    }
    else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
