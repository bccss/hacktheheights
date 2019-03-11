$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

function loginPressed(){
    // console.log("LOGIN!");

    var responseText = document.getElementById("response-text");

    // Form Vars //
    var userEmail = (document.getElementById("login-emailField").value).toLowerCase();
    var userPassword = document.getElementById("login-passwordField").value;

    // var submissionBody = {"email":"laneo1232@gmail.com", "password":"test123"};

    // // API Request: Axios POST
    // // axios.post('http://hacktheheights.co.nf/api/login.php', {
    // //     email: "laneo1232@gmail.com",
    // //     password: "test123"
    // // })
    // // .then(function (response) {
    // //   console.log(response.data);
    // // });

    var url = "http://hacktheheights.co.nf/api/login.php";
    var bodyFormData = new FormData();
    bodyFormData.set("email", userEmail);
    bodyFormData.set("password", userPassword);

    // fetch(url, {
    //     method: 'post',
    //     mode: 'no-cors',
    //     body: bodyFormData
    //   }).then((response) => {
    //     console.log(response);
    //   });

    // .then((myJson) => {
    //     console.log(myJson);
    //   });

    // API Request: Axios POST
    // axios.post('https://postman-echo.com/post', )
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    if (userEmail.length < 1 || userPassword.length < 1){
        console.log("missing field!");
        responseText.innerText = "please fill in all fields to continue.";
        responseText.style.display = "block";
        responseText.style.color = "darkred";
        // responseText.style.textAlign = "center";
    } else {
        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: 'http://www.hacktheheights.co.nf/api/login.php',
            data: bodyFormData,
            headers: { 'Cache-Control': 'no-store' }
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["login"] == "success"){
                responseText.innerText = "login success!";
                responseText.style.display = "block";
                responseText.style.color = "#3E5087";
                // time to set auth token cookie
                Cookies.set('token', response.data["token"], {expires: (1/48), domain: window.location.hostname});
                window.location.href = (response.data["redirect"]);
            } else {
                //handle failed login
                var reason = response.data["reason"];
                if (reason == "incorrect password"){
                    responseText.innerText = "incorrect password.";
                    responseText.style.display = "block";
                    responseText.style.color = "darkred";
                } else if (reason == "no account found"){
                    responseText.innerText = "account with this email not found. please register below!";
                    responseText.style.display = "block";
                    responseText.style.color = "darkred";
                }
            }
        });
    }
}

function createPressed(){
    console.log("CREATE ACCOUNT!");

    var responseText = document.getElementById("response-text");

    var firstName = document.getElementById("firstNameField").value;
    var lastName = document.getElementById("lastNameField").value;
    var school = document.getElementById("schoolField").value;
    var major = document.getElementById("majorField").value;
    var gradYear = document.getElementById("gradYearField").value;
    var phoneNum = document.getElementById("phoneField").value;
    var birthDate = document.getElementById("birthDateField").value;
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;
    var gender = document.getElementById("genderField").value;
    if (gender == "other"){
        gender = otherGenderField.value;
    }
    var ethnicity = document.getElementById("ethnicityField").value;
    if (ethnicity == "other"){
        ethnicity = document.getElementById("otherEthnicityField").value;
    }

    if (firstName.length < 1 || lastName.length < 1 || school.length < 1 || major.length < 1 || gradYear.length < 1 || phoneNum.length < 1 || birthDate.length < 1 || email.length < 1 || password.length < 1 || gender.length < 1 || ethnicity.length < 1){
        console.log("missing field!");
        responseText.innerText = "please fill in all fields to continue.";
        responseText.style.display = "block";
        responseText.style.color = "darkred";
        // responseText.style.textAlign = "center";
    } else {

        var requestURL = "http://hacktheheights.co.nf/api/register.php";
        var bodyFormData = new FormData();
        bodyFormData.set("firstName", firstName);
        bodyFormData.set("lastName", lastName);
        bodyFormData.set("school", school);
        bodyFormData.set("major", major);
        bodyFormData.set("gradYear", gradYear);
        bodyFormData.set("phone", phoneNum);
        bodyFormData.set("birthDate", birthDate);
        bodyFormData.set("email", email);
        bodyFormData.set("password", password);
        bodyFormData.set("gender", gender);
        bodyFormData.set("ethnicity", ethnicity);

        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: requestURL,
            data: bodyFormData,
            // headers: { 'Cache-Control': 'no-store' }
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["registration"] == "success"){
                responseText.innerText = "registration successful!";
                responseText.style.display = "block";
                responseText.style.color = "#3E5087";
                // time to set auth token cookie
                Cookies.set('token', response.data["token"], {expires: (1/48), domain: window.location.hostname});
                window.location.href = (response.data["redirect"]);
            } else {
                //handle failed login
                var reason = response.data["reason"];
                if (reason == "email already exists"){
                    responseText.innerText = "account with this email already exists.";
                    responseText.style.display = "block";
                    responseText.style.color = "darkred";
                }
            }
        });
    }
}

function showAdminLogin(){
    document.getElementById("normal-login-form").style.display = "none";
    document.getElementById("admin-login-form").style.display = "block";
}

function adminLoginPressed(){
    var responseText = document.getElementById("admin-response-text");

    // Form Vars //
    var adminPassword = document.getElementById("admin-pass-field").value;

    var bodyFormData = new FormData();
    bodyFormData.set("type", "login");
    bodyFormData.set("password", adminPassword);

    if (adminPassword.length < 1){
        console.log("missing field!");
        responseText.innerText = "please fill in missing field to continue.";
        responseText.style.display = "block";
        responseText.style.color = "darkred";
    } else {
        axios({
            method: 'post',
            crossDomain: true,
            withCredentials: true,
            url: 'http://www.hacktheheights.co.nf/api/admin.php',
            data: bodyFormData,
            headers: { 'Cache-Control': 'no-store' }
        })
        .then(function (response) {
            console.log("Response: \n");
            console.log(response.data);
            if(response.data["login"] == "success"){
                responseText.innerText = "login success!";
                responseText.style.display = "block";
                responseText.style.color = "#3E5087";
                // time to set auth token cookie
                Cookies.set('adminToken', response.data["token"], {expires: (1/48), domain: window.location.hostname});
                window.location.href = (response.data["redirect"]);
            } else {
                //handle failed login
                var reason = response.data["reason"];
                if (reason == "incorrect password"){
                    responseText.innerText = "incorrect password.";
                    responseText.style.display = "block";
                    responseText.style.color = "darkred";
                }
            }
        });
    }
}

// function populateSchools(){
//     var schoolList = document.getElementById("schools-list");
//     fetch("./data/schools.json")
//     .then(res => res.json())
//     .then(data =>{
//         // console.log(data);
//         // schoolList.insertAdjacentHTML("afterbegin", '<!--[if lte IE 9]><select data-datalist="schools-list"><![endif]-->');
//         for (i=0; i<10; i++){
//             var school = '<option value="' + data[i].institution + '">';
//             schoolList.insertAdjacentHTML('beforeend', school);
//         }
//     //    schoolList.insertAdjacentHTML("beforeend", "<!--[if lte IE 9]></select><![endif]-->");
//     });
// }

function showGenderField(){
    if(document.getElementById("genderField").value == "other"){
        document.getElementById("otherGenderField").style.display = "block";
    } else {
        document.getElementById("otherGenderField").style.display = "none";
    }
}

function showEthnicityField(){
    if(document.getElementById("ethnicityField").value == "other"){
        document.getElementById("otherEthnicityField").style.display = "block";
    } else {
        document.getElementById("otherEthnicityField").style.display = "none";
    }
}

function initializePage(){
    // viewport = document.querySelector("meta[name=viewport]");
    // viewport.setAttribute('content', 'width=1024');

    // populateSchools();

    // check for mode in url
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("mode")) {
        var loginMode = urlParams.get("mode");
        if (loginMode == "admin"){
            showAdminLogin();
        }
    }
}

window.onload = initializePage();