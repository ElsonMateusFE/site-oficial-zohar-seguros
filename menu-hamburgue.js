function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.overflow = "hidden"; /* Impede a rolagem do corpo */
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflow = "visible"; /* Permite a rolagem do corpo */
}