function openNav() {
    document.getElementById("mySidenav").style.width = "30%"; // Adjust this value to change the width
    document.querySelector('.closebtn').style.display = 'block'; // Show the close button
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('.closebtn').style.display = 'none'; // Hide the close button
}
