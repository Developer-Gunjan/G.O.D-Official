let a = localStorage.getItem("lcName");
let b = localStorage.getItem("lcPass");
let c = localStorage.getItem("lcD.id");
let d = localStorage.getItem("lcG.id");
if (a == "Ariyan Sen" && b == "Ar@92" && c == "7149838" && d == 7) {
    Home()
} else if (a == "Gourab Das" && b == "G#12" && c == "7256295" && d == 7) {
    Home()
} else if (a == "Gunjan Das" && b == "Gunjan#01" && c == "7369395" && d == 7) {
    Home()
} else if (a == "Koustab Roy" && b == "KK@65" && c == "7471429" && d == 7) {
    Home()
} else {
    console.log("notfound")
}

GetWallpaper()
function GetWallpaper() {
    var random = Math.floor(Math.random() * 31) + 1;
    if (random == 1) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/1.jpg")'
    } else if (random == 2) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/2.jpg")'
    } else if (random == 3) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/3.jpg")'
    } else if (random == 4) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/4.jpg")'
    } else if (random == 5) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/5.jpg")'
    } else if (random == 6) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/6.jpg")'
    } else if (random == 7) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/7.jpg")'
    } else if (random == 8) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/8.jpg")'
    } else if (random == 9) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/9.jpg")'
    } else if (random == 10) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/10.jpg")'
    } else if (random == 11) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/11.jpg")'
    } else if (random == 12) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/12.jpg")'
    } else if (random == 13) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/13.jpg")'
    } else if (random == 14) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/14.jpg")'
    } else if (random == 15) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/15.jpg")'
    } else if (random == 16) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/16.jpg")'
    } else if (random == 17) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/17.jpg")'
    } else if (random == 18) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/18.jpg")'
    } else if (random == 19) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/19.jpg")'
    } else if (random == 21) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/21.jpg")'
    } else if (random == 22) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/22.jpg")'
    } else if (random == 23) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/23.jpg")'
    } else if (random == 24) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/24.jpg")'
    } else if (random == 25) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/25.jpg")'
    } else if (random == 26) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/26.jpg")'
    } else if (random == 27) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/27.jpg")'
    } else if (random == 29) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/28.jpg")'
    } else if (random == 30) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/29.jpg")'
    } else if (random == 31) {
        document.getElementById("body").style.backgroundImage = 'url("Extentions/Images/30.jpg")'
    }
}
function navchangeover(btn) {
    if (btn == 'help') {
        document.getElementById("help").style.backgroundColor = "rgb(57, 118, 230)"
    } else if (btn == 'home') {
        document.getElementById("home").style.backgroundColor = "rgb(57, 118, 230)"
    } else if (btn == 'about') {
        document.getElementById("about").style.backgroundColor = "rgb(57, 118, 230)"
    }
}
function navchangeout(changeto) {
    if (changeto == 'help') {
        document.getElementById("help").style.backgroundColor = "cornflowerblue"
    } else if (changeto == 'home') {
        document.getElementById("home").style.backgroundColor = "cornflowerblue"
    } else if (changeto == 'about') {
        document.getElementById("about").style.backgroundColor = "cornflowerblue"
    }
}
//index.js

// Functions
function Link() {
    const ab = document.getElementById("uname").value;
    const bc = document.getElementById("ipass").value;
    const cd = document.getElementById("iG").value;
    const de = document.getElementById("iD").value;
    if (ab == "Ariyan Sen" && bc == "Ar@92" && de == "7149838" && cd == 7) {
        localStorage.setItem("lcName", ab)
        localStorage.setItem("lcPass", bc)
        localStorage.setItem("lcG.id", cd)
        localStorage.setItem("lcD.id", de)
        window.location.href = "/home.html"
    } else if (ab == "Gourab Das" && bc == "G#12" && de == "7256295" && cd == 7) {
        localStorage.setItem("lcName", ab)
        localStorage.setItem("lcPass", bc)
        localStorage.setItem("lcG.id", cd)
        localStorage.setItem("lcD.id", de)
        window.location.href = "/home.html"
    } else if (ab == "Gunjan Das" && bc == "Gunjan#01" && de == "7369395" && cd == 7) {
        localStorage.setItem("lcName", ab)
        localStorage.setItem("lcPass", bc)
        localStorage.setItem("lcG.id", cd)
        localStorage.setItem("lcD.id", de)
        window.location.href = "/home.html"
    } else if (ab == "Koustab Roy" || bc == "KK@65" || de == "7471429" || cd == 7) {
        localStorage.setItem("lcName", ab)
        localStorage.setItem("lcPass", bc)
        localStorage.setItem("lcG.id", cd)
        localStorage.setItem("lcD.id", de)
        window.location.href = "/home.html"
    } else {
        alert("Incorrect Credintials")
    }
}
function Home() {
    window.location.href="/home.html"
}
function Unlink() {
    localStorage.clear();
}
