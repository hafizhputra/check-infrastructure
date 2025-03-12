/* NAVBAR, SIDE BAR, DAN FOOTER */

document.getElementById("sidebarToggle").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("hide");
  document.getElementById("content").classList.toggle("hide");
});


// Efek Nyala & Mati Saat Cursor ke Menu
const menuItems = document.querySelectorAll("#sidebar .nav-link");

menuItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.backgroundColor = "#F48120";
        item.style.color = "white";
    });

    item.addEventListener("mouseout", function() {
        item.style.backgroundColor = "transparent";
        // item.style.color = "#333";
    });
});


/* NAVBAR, SIDE BAR, DAN FOOTER */



/*      menampilkan data      */







/*      menmapilkan data penutup      */