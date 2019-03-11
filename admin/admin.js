var isLoading = true;

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

function getAdminDetails(){
    console.log("time to get admin details!");

    var bodyFormData = new FormData();
    bodyFormData.set("type", "get-dash-details");

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
            window.location.replace('/login/?mode=admin');
        } else {
            // update values of elements on screen & display them
            var responseData = response.data;
            document.getElementById("accounts-created-text").innerText = responseData["account_creations"] + " accounts created";
            
            document.getElementById("hackers-data").innerText = responseData["hackers"];
            document.getElementById("sponsors-data").innerText = responseData["sponsors"];
            document.getElementById("mentors-data").innerText = responseData["mentors"];
            document.getElementById("hackers-pending-data").innerText = responseData["hackers-pending"];
            document.getElementById("sponsors-pending-data").innerText = responseData["sponsors-pending"];
            document.getElementById("mentors-pending-data").innerText = responseData["mentors-pending"];


            isLoading = false;
            document.getElementById("page-loader").style.display = "none";
        }
    });
}

function initializePage(){

    // viewport = document.querySelector("meta[name=viewport]");
    // viewport.setAttribute('content', 'width=1024');

    var urlParams = new URLSearchParams(window.location.search);
    if (isLoading){
        // document.getElementById("page-loader");
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var currentMonth = months[date.getMonth()];
    document.getElementById("date-text").textContent = currentMonth + " " + date.getDate() + ", " + date.getFullYear(); 


    getAdminDetails();
}

window.onload = initializePage();