var isLoading = true;

function logout(){
    axios.get("http://hacktheheights.co.nf/api/logout.php", {withCredentials:true});
    window.location.replace("/");
}

function getUserDetails(){
    console.log("time to get user details!");

    isLoading = false;
    document.getElementById("page-loader").style.display = "none";
}

function initializePage(){
    console.log("Page Initialized");

    var urlParams = new URLSearchParams(window.location.search);
    if (isLoading){
        // document.getElementById("page-loader");
    }

    getUserDetails();
}

window.onload = initializePage();