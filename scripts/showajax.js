addLoadEvent(writeContent);



function writeContent() {
    var info = window.location.search;
    var title = decodeURI(info.split("=")[1]);
    document.getElementsByClassName("maintitle")[0].innerHTML = title;
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject(Microsoft.MXLHTTP);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var listJson = xmlHttp.responseText;
            listJson = JSON.parse(listJson);
            var i = listJson.title.indexOf(title);
            document.getElementsByClassName("arttext")[0].innerHTML = listJson.content[i];
        }
    };
    xmlHttp.open("get", "data/list.json", true);
    xmlHttp.send();
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}