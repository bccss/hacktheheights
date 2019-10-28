function submitHacker(){
    
    var studyLevel = document.getElementById("studyLevelField").value;
    var shirtSizeList = document.getElementsByName("shirt-size");
    var shirtSize = "";
    for (i=0; i<shirtSizeList.length; i++){
        if (shirtSizeList[i].checked){
            shirtSize = shirtSizeList[i].value;
            break;
        }
    }

    var dietaryRestrictions = document.getElementById("dietaryField").value;
    
    var hackathonAttendanceList = document.getElementsByName("hackathon-attendance");
    var numHackathons = "";
    for (i=0; i<hackathonAttendanceList.length; i++){
        if (hackathonAttendanceList[i].checked){
            numHackathons = hackathonAttendanceList[i].value;
        }
    }
    
    var priorExperience = document.getElementById("hackerPriorExperienceField").value;
    
    var learningInterestBoxes = document.getElementsByName("learning-interest");
    var learningInterests = "";
    for (i=0; i<learningInterestBoxes.length; i++){
        if (learningInterestBoxes[i].checked){
            if (i > 0){
                learningInterests += (", " + learningInterestBoxes[i].value);
            } else {
                learningInterests += learningInterestBoxes[i].value;
            }
        }
    }

    var eventExpectations = document.getElementById("eventExpectationsField").value;
    var additionalComments = document.getElementById("additionalCommentsField").value;

    var mlhBoxesMarked = false;
    var mlhBoxes = document.getElementsByName("mlh-checkbox");
    if ((mlhBoxes[0].checked == true) && (mlhBoxes[1].checked == true)){
        mlhBoxesMarked = true;
    }
    
    var resumeLink = document.getElementById("resumeLinkField").value;

    if (studyLevel.length < 1 || shirtSize.length < 1 || dietaryRestrictions.length < 1 || numHackathons.length < 1 || priorExperience.length < 1 || learningInterests.length < 1 || eventExpectations.length < 1 || additionalComments.length < 1 || resumeLink.length < 1 || mlhBoxesMarked == false){
        console.log("missing field!");
        alert("Please fill in all the missing fields & MLH checkboxes to continue.");
        // responseText.innerText = "please fill in all fields to continue.";
        // responseText.style.display = "block";
        // responseText.style.color = "darkred";
    } else {

        var requestURL = "http://hacktheheights.co.nf/api/apply.php";
        var bodyFormData = new FormData();
        bodyFormData.set("type", "hacker");
        bodyFormData.set("studyLevel", studyLevel);
        bodyFormData.set("shirtSize", shirtSize);
        bodyFormData.set("dietary", dietaryRestrictions);
        bodyFormData.set("numHackathons", numHackathons);
        bodyFormData.set("priorExperience", priorExperience);
        bodyFormData.set("eventExpectations", eventExpectations);
        bodyFormData.set("interests", learningInterests);
        bodyFormData.set("resume", resumeLink);
        bodyFormData.set("comments", additionalComments);

        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: requestURL,
            data: bodyFormData,
            params: {token: Cookies.get('token')}
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["result"] == "success"){
                // responseText.innerText = "registration successful!";
                // responseText.style.display = "block";
                // responseText.style.color = "#3E5087";
                if(confirm("Your application has been submitted. You should be hearing from us shortly.")){
                    window.location.href = (response.data["redirect"]);
                }
            } else {
                //handle failed login
                // var reason = response.data["reason"];
                // if (reason == "email already exists"){
                //     responseText.innerText = "account with this email already exists.";
                //     responseText.style.display = "block";
                //     responseText.style.color = "darkred";
                // }
            }
        });
    }
}

function submitMentor(){
    console.log("MENTOR");
    var priorExperience = document.getElementById("priorExperienceField").value;
    var learningInterestBoxes = document.getElementsByName("learning-interest");
    var learningInterests = "";
    for (i=0; i<learningInterestBoxes.length; i++){
        if (learningInterestBoxes[i].checked){
            if (i > 0){
                learningInterests += (", " + learningInterestBoxes[i].value);
            } else {
                learningInterests += learningInterestBoxes[i].value;
            }
        }
    }

    if (priorExperience.length < 1 || learningInterests.length < 1){
        console.log("missing field!");
        alert("Please fill in all the missing fields to continue.");
        // responseText.innerText = "please fill in all fields to continue.";
        // responseText.style.display = "block";
        // responseText.style.color = "darkred";
    } else {

        var requestURL = "http://hacktheheights.co.nf/api/apply.php";
        var bodyFormData = new FormData();
        bodyFormData.set("type", "mentor");
        bodyFormData.set("priorExperience", priorExperience);
        bodyFormData.set("interests", learningInterests);

        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: requestURL,
            data: bodyFormData,
            params: {token: Cookies.get('token')}
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["result"] == "success"){
                // responseText.innerText = "registration successful!";
                // responseText.style.display = "block";
                // responseText.style.color = "#3E5087";
                if(confirm("Your application has been submitted. You should be hearing from us shortly.")){
                    window.location.href = (response.data["redirect"]);
                }
            } else {
                //handle failed login
                // var reason = response.data["reason"];
                // if (reason == "email already exists"){
                //     responseText.innerText = "account with this email already exists.";
                //     responseText.style.display = "block";
                //     responseText.style.color = "darkred";
                // }
            }
        });
    }
}

function submitSponsor(){
    var fullName = document.getElementById("fullNameField").value;
    var email = document.getElementById("emailField").value;
    var comments = document.getElementById("commentsField").value;

    if (fullName.length < 1 || email.length < 1 || comments.length < 1){
        console.log("missing field!");
        alert("Please fill in all the missing fields to continue.");
        // responseText.innerText = "please fill in all fields to continue.";
        // responseText.style.display = "block";
        // responseText.style.color = "darkred";
    } else {

        var requestURL = "http://hacktheheights.co.nf/api/apply.php";
        var bodyFormData = new FormData();
        bodyFormData.set("type", "sponsor");
        bodyFormData.set("fullName", fullName);
        bodyFormData.set("email", email);
        bodyFormData.set("comments", comments);

        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: requestURL,
            data: bodyFormData
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["result"] == "success"){
                // responseText.innerText = "registration successful!";
                // responseText.style.display = "block";
                // responseText.style.color = "#3E5087";
                if(confirm("Your application has been submitted. You should be hearing from us shortly.")){
                    window.location.href = (response.data["redirect"]);
                }
            } else {
            //     //handle failed login
            //     var reason = response.data["reason"];
            //     if (reason == "email already exists"){
            //         responseText.innerText = "account with this email already exists.";
            //         responseText.style.display = "block";
            //         responseText.style.color = "darkred";
            //     }
            }
        });
    }
}

function checkLogin(){
    axios({
        method: 'get',
        crossDomain: true,
        withCredentials: true,
        url: "http://hacktheheights.co.nf/api/status.php",
        params: {token: Cookies.get('token')}
    })
    .then(function (response) {
        console.log("Response: \n");
        console.log(response.data);
    });
}

function initializePage(){

    checkLogin();
    // check for type in url
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("type")) {
        var appType = urlParams.get("type");
        if (appType == "mentor"){
            // show mentor form
            document.getElementById("hacker-form").style = true;
            document.getElementById("mentor-form").hidden = false;
            document.getElementById("sponsor-form").hidden = true;
        } else if (appType == "sponsor"){
            //show sponsor form
            document.getElementById("hacker-form").hidden = true;
            document.getElementById("mentor-form").hidden = true;
            document.getElementById("sponsor-form").hidden = false;
        } else {
            // show hacker form
            document.getElementById("hacker-form").hidden = false;
            document.getElementById("mentor-form").hidden = true;
            document.getElementById("sponsor-form").hidden = true;
        }
    } else {
        // show hacker form
        document.getElementById("hacker-form").hidden = false;
        document.getElementById("mentor-form").hidden = true;
        document.getElementById("sponsor-form").hidden = true;
    }
}

window.onload = initializePage();