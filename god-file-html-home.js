var dshbrdopncls = "close"
console.warn("Our Technology is Encrypted by Cyber Security, Do not try to hack, or Cyber Security Will be alerted!");
var a;
var b;
var c;
var d;
a = localStorage.getItem("lcName")
b = localStorage.getItem("lcPass")
c = localStorage.getItem("lcD.id")
d = localStorage.getItem("lcG.id")

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))

if (b == "Ar@92" || b == "G#12" || b == "Gunjan#01" || b == "KK@65") {

} else {
    for (let a65 = 0; a65 < 50; a65++) {
        document.write("reference error: at line 364, Cyber Security alerted");
        console.error("reference error: at line 364, Cyber Security alerted");
        setInterval(function () { window.location.href = "/index.html" }, 3000);
    }
}
if (c == "7149838" || c == "726295" || c == "7369395" || c == "7471429") {

} else {
    for (let a65 = 0; a65 < 50; a65++) {
        document.write("reference error: at line 364, Cyber Security alerted");
        console.error("reference error: at line 364, Cyber Security alerted");
        setInterval(function () { window.location.href = "/index.html" }, 3000);
    }
}

document.getElementById("cpy").value = getverid()
function getverid() {
    let abde = new Date;
    return abde.getFullYear() / abde.getMonth() * 32 / 6444 * 77;
}
function Copy() {

    const inp77 = document.getElementById("cpy");
    const cpy0 = document.getElementById("copy");
    inp77.select();
    document.execCommand("copy");
    alert("In the next page, please enter the name and in the verification id, paste the code")
    window.location.href = "https://forms.zohopublic.in/gdas40054/form/Verify/formperma/klTG_dfvNbiceWQccuKFpSUT43dfIXCKNMpSoDKBQL4"
}
function Unlink() {
    localStorage.clear();
    window.location.href = "/index.html"
}
document.getElementById("Name").value = localStorage.getItem("lcName")
function dashboard() {
    if (dshbrdopncls == "close") {
        document.getElementById("nme").innerText = localStorage.getItem("lcName")
        document.getElementById("dmm").innerText = localStorage.getItem("lcD.id")
        document.getElementById("glx").innerText = localStorage.getItem("lcG.id")
        document.getElementById("dob").innerText = getdob();
        document.getElementById("DashboardProperties1").style.visibility = "visible"
        document.getElementById("DashboardProperties2").style.visibility = "visible"
        document.getElementById("DashboardProperties3").style.visibility = "visible"
        document.getElementById("DashboardProperties4").style.visibility = "visible"
        dshbrdopncls = "Open"
    } else {
        document.getElementById("DashboardProperties1").style.visibility = "hidden"
        document.getElementById("DashboardProperties2").style.visibility = "hidden"
        document.getElementById("DashboardProperties3").style.visibility = "hidden"
        document.getElementById("DashboardProperties4").style.visibility = "hidden"
        dshbrdopncls = "close"
    }
    document.getElementById("nme").innerText = localStorage.getItem("lcName")
    document.getElementById("dmm").innerText = localStorage.getItem("lcD.id")
    document.getElementById("glx").innerText = localStorage.getItem("lcG.id")
    document.getElementById("dob").innerText = getdob();
}
function getdob() {
    const a9 = localStorage.getItem("lcName")
    if (a9 == "Gunjan Das") {
        return "30/05/2010";
    } else if (a9 == "Koustab Roy") {
        return "Unknown";
    } else if (a9 == "Gourab Das") {
        return "16/05/2011";
    } else if (a9 == "Ariyan Sen") {
        return "02/07/2011";
    } else {
        for (let a65 = 0; a65 < 50; a65++) {
            document.write("reference error: at line 364, Cyber Security alerted");
            console.error("reference error: at line 364, Cyber Security alerted");
        }
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