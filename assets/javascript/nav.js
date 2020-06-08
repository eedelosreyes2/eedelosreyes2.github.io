let opened = false;

function toggleNav() {  
  if (!opened) {
    document.getElementById("mySidenav").style.width = "170px";
    document.getElementById("main").style.marginRight = "150px";
    document.getElementById("main").style.marginLeft = "-150px";
    document.getElementById("menu").classList.add("open");
    opened = true;
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").classList.remove("open");
    opened = false
  }
}