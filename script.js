// SIGNUP
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if(user === "" || pass === ""){
        alert("Fill all fields 😤");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Signup successful 🎉");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // go to home
    } else {
        alert("Invalid login ❌");
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}