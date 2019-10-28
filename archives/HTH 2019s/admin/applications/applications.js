var isLoading = true;
var applications = [];
var selectedApplication;

function logout(){
    // axios.get("http://hacktheheights.co.nf/api/logout.php", {withCredentials:true});
    // axios({
    //     method: 'get',
    //     crossDomain: true,
    //     withCredentials: true,
    //     url: "http://hacktheheights.co.nf/api/logout.php",
    //     headers: { 'Cache-Control': 'no-store' }
    // })
    // .then(function (response) {
    //     console.log("Response: \n");
    //     console.log(response.data);
    //     if(response.data["logout"] == "success"){
    //         window.location.href = (response.data["redirect"]);
    //     }
    // });

    // NEW JWT IMPLEMENTATION: LOGOUT
    Cookies.remove('adminToken');
    window.location.href = "/login/?mode=admin";
}

function getApplications(appID){
    console.log("time to get admin applications!");

    var bodyFormData = new FormData();
    bodyFormData.set("type", "get-applications");

    axios({
        method: 'post',
        crossDomain: true,
        withCredentials: true,
        url: 'http://www.hacktheheights.co.nf/api/admin.php',
        data: bodyFormData,
        params: {token: Cookies.get('adminToken')},
        headers: { 'Cache-Control': 'no-store' }
    })
    .then(function (response) {
        // console.log("Response: \n");
        // console.log(response.data);
        if(response.data.hasOwnProperty('failed')){
            // not logged in
            window.location.href = ('/login/?mode=admin');
        } else {
            // update values of elements on screen & display them
            var responseData = response.data;
            if (responseData["result"] == "success"){
                applications = responseData["applications"];
                var appTable = document.getElementById("table-body");
                for(i=0;i<applications.length;i++){
                    var currentApplication = applications[i];
                    console.log(currentApplication);
                    const tableRow = (`
                    <tr id="row_${i}">
                        <td class="date-col text-left">${currentApplication["submissionDate"]}</td>
                        <td class="name-col text-left">${currentApplication["fullName"]}</td>
                        <td class="role-col text-left">${currentApplication["role"]}</td>
                        <td class="status-col text-left">${currentApplication["status"]}</td>
                        <td class="btn-col text-center"><a class="view-button-filled" onclick="showDetails(applications[${i}])">VIEW</a></td>
                    </tr>
                    `);

                    // OLD WAY: <td class="btn-col text-left"><a class="view-button-filled" href="?id=${i}&type=${currentApplication["role"].toLowerCase()}" onclick="showDetails(applications[${i}])">VIEW DETAILS</a></td>

                    appTable.insertAdjacentHTML("beforeend", tableRow);
                }
                if (appID){
                    showDetails(applications[appID]);
                }
            }

            isLoading = false;
            document.getElementById("page-loader").style.display = "none";
        }
    });
}

function showDetails(currentApplication){
    console.log("LETS VIEW");
    selectedApplication = currentApplication;
    var appType = currentApplication["role"];
    document.getElementById(`${appType}-details`).style = "display:block;";

    // var bodyFormData = new FormData();
    // bodyFormData.set("type", "get-application-info");
    // bodyFormData.set("app_id", appID);
    // bodyFormData.set("app_type", appType);

    // axios({
    //     method: 'post',
    //     crossDomain: true,
    //     withCredentials: true,
    //     url: 'http://www.hacktheheights.co.nf/api/admin.php',
    //     data: bodyFormData
    // })
    // .then(function (response) {
    //     // console.log("Response: \n");
    //     // console.log(response.data);
    //     if(response.data.hasOwnProperty('failed')){
    //         // not logged in
    //         window.location.href = ('/login/?mode=admin');
    //     } else {
    //         // update values of elements on screen & display them
    //         var responseData = response.data;
    //         if (responseData["result"] == "success"){
    //             var currentApplication = responseData["application"];
    console.log(currentApplication);

    if (appType=="hacker"){
        document.getElementById("mentor-details").style.display = "none";
        document.getElementById("sponsor-details").style.display = "none";
        document.getElementById("hacker-name").innerText = currentApplication["fullName"];
        document.getElementById("hacker-email").innerText = currentApplication["email"];
        document.getElementById("hacker-major").innerText = currentApplication["major"];
        document.getElementById("hacker-school").innerText = currentApplication["school"];
        document.getElementById("hacker-year").innerText = currentApplication["classYear"];
        document.getElementById("hacker-status").innerText = currentApplication["status"];
        document.getElementById("hacker-submissionDate").innerText = currentApplication["submissionDate"];
        document.getElementById("hacker-dietary").innerText = currentApplication["details"]["dietary"];
        document.getElementById("hacker-interests").innerText = currentApplication["details"]["interests"];
        document.getElementById("hacker-numHacks").innerText = currentApplication["details"]["numHackathons"];
        document.getElementById("hacker-priorXP").innerText = currentApplication["details"]["priorExperience"];
        document.getElementById("hacker-resume").innerText = currentApplication["details"]["resume"];
        document.getElementById("hacker-resume").href = currentApplication["details"]["resume"];
        document.getElementById("hacker-shirtSize").innerText = currentApplication["details"]["shirtSize"];
    } else if (appType == "mentor"){
        document.getElementById("hacker-details").style.display = "none";
        document.getElementById("sponsor-details").style.display = "none";
        document.getElementById("mentor-name").innerText = currentApplication["fullName"];
        document.getElementById("mentor-email").innerText = currentApplication["email"];
        document.getElementById("mentor-major").innerText = currentApplication["major"];
        document.getElementById("mentor-school").innerText = currentApplication["school"];
        document.getElementById("mentor-year").innerText = currentApplication["classYear"];
        document.getElementById("mentor-status").innerText = currentApplication["status"];
        document.getElementById("mentor-submissionDate").innerText = currentApplication["submissionDate"];
        document.getElementById("mentor-interests").innerText = currentApplication["details"]["interests"];
        document.getElementById("mentor-priorXP").innerText = currentApplication["details"]["priorExperience"];
    } else if (appType == "sponsor"){
        document.getElementById("hacker-details").style.display = "none";
        document.getElementById("mentor-details").style.display = "none";
        document.getElementById("sponsor-name").innerText = currentApplication["fullName"];
        document.getElementById("sponsor-email").innerText = currentApplication["email"];
        document.getElementById("sponsor-status").innerText = currentApplication["status"];
        document.getElementById("sponsor-submissionDate").innerText = currentApplication["submissionDate"];
        document.getElementById("sponsor-comments").innerText = currentApplication["details"]["comments"];
    }
    
    
    document.getElementById("details-overlay").style = "display:block;"
    if (currentApplication["status"] == "approved"){
        document.getElementById(`${appType}-box-approveBtn`).style.display = "none";
        document.getElementById(`${appType}-box-declineBtn`).style.display = "none";
    } else {
        document.getElementById(`${appType}-box-approveBtn`).style.display = "inline";
        document.getElementById(`${appType}-box-declineBtn`).style.display = "inline";
    }
}

function closeDetails(){
    document.getElementById("details-overlay").style = "display:none;"
}

function approveApp(){
    if (confirm("Are you sure you want to approve this user's application? They'll be notified of this update.")) {
        // Save it!
        // POST with selectedApplication
        var bodyFormData = new FormData();
        bodyFormData.set("type", "approve-application");
        bodyFormData.set("app_type", selectedApplication["role"]);
        bodyFormData.set("app_id", selectedApplication["id"]);
        bodyFormData.set("name", selectedApplication["fullName"]);
        bodyFormData.set("email", selectedApplication["email"]);

        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: 'http://www.hacktheheights.co.nf/api/admin.php',
            data: bodyFormData,
            params: {token: Cookies.get('adminToken')},
            headers: { 'Cache-Control': 'no-store' }
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data.hasOwnProperty('failed')){
                // not logged in
                window.location.href = ('/login/?mode=admin');
            } else {
                // update values of elements on screen & display them
                var responseData = response.data;
                if (responseData["result"] == "success"){
                    alert("Application successfully approved, the user's now being notified!");
                    location.reload();
                }
            }
        });
    } else {
        // Do nothing!
    }
}

function declineApp(){
    if (confirm("Are you sure you want to decline this user's application? They'll be notified of this status change.")) {
        // Save it!
         // POST with selectedApplication
         var bodyFormData = new FormData();
         bodyFormData.set("type", "decline-application");
         bodyFormData.set("app_type", selectedApplication["role"]);
         bodyFormData.set("app_id", selectedApplication["id"]);
         bodyFormData.set("name", selectedApplication["fullName"]);
         bodyFormData.set("email", selectedApplication["email"]);
 
         axios({
             method: 'post',
             crossDomain: true,
             withCredentials: true,
             url: 'http://www.hacktheheights.co.nf/api/admin.php',
             data: bodyFormData,
             params: {token: Cookies.get('adminToken')},
             headers: { 'Cache-Control': 'no-store' }
         })
         .then(function (response) {
             // console.log("Response: \n");
             // console.log(response.data);
             if(response.data.hasOwnProperty('failed')){
                 // not logged in
                 window.location.href = ('/login/?mode=admin');
             } else {
                 // update values of elements on screen & display them
                 var responseData = response.data;
                 if (responseData["result"] == "success"){
                     alert("Application successfully declined, the user's now being notified!");
                     location.reload();
                 }
             }
         });
    } else {
        // Do nothing!
    }
}

function initializePage(){

    // viewport = document.querySelector("meta[name=viewport]");
    // viewport.setAttribute('content', 'width=1024');

    var urlParams = new URLSearchParams(window.location.search);
    if (isLoading){
        // document.getElementById("page-loader");
    }
    if (urlParams.has("id") && urlParams.has("type")) {
        // document.getElementById("greeting").innerText = "application details";
        // document.getElementById("applications-table").hidden = true;
        getApplications(urlParams.get("id"));
    } else {
        getApplications();
    }    
}

window.onload = initializePage();