addLoadEvent(listShow);

function listShow() {
    var arts = document.getElementsByClassName("arttitle");
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject(Microsoft.XMLHTTP);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var listJson = xmlHttp.responseText;
            listJson = JSON.parse(listJson);
            for (let i = 0; i < 5; i++) {
                if (arts[i]) {
                    arts[i].innerHTML = listJson.title[i];
                }
                if (arts[i + 5]) {
                    arts[i + 5].innerHTML = listJson.title[i];
                }
            }
        }
    };
    xmlHttp.open("get", "data/list.json?t=" + Math.random(), true);
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