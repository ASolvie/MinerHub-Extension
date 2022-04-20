if (typeof browser === "undefined") {
    var browser = chrome;
}

//document.body.style.border = "5px solid red";
//console.log(browser.extension.getURL("images/minerHubNew.png"));
var address = browser.extension.getURL("images/minerHubNew.png");
//console.log(document.getElementsByClassName('topbar__icon-large'));

function changeLogos(){
    try{
        document.getElementsByClassName('hidden-xs hidden-sm hidden-md')[0].src = address;
        document.getElementsByClassName('img-responsive mx-auto')[0].src = address;
        document.getElementsByClassName('hidden-lg')[0].src = address;
    } catch(error){};
    try{
        document.getElementsByClassName('topbar__icon-small')[0].src = address;
        document.getElementsByClassName('topbar__icon-large')[0].src = address;
        document.getElementsByClassName('topbar__icon-small')[0].style = "max-height: 74px; max-width: 90px; margin: 5px -20px;";
    } catch(error){};
}

setInterval(changeLogos, 200);

console.log("working?");
