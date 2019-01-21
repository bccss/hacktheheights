function initializePage(){
    // check for type in url
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("type")) {
        var appType = urlParams.get("type");
        if (appType == "mentor"){
            // show mentor form
        } else if (appType == "sponsor"){
            //show sponsor form
        } else {
            // show hacker form
        }
    }
}

window.onload = initializePage();