document.getElementById('toggleNav').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

document.querySelectorAll("nav ul li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        loadPage(this.href);
    });
});

function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
            document.getElementById("sidebar").classList.remove('open');
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function() {
    var menuTrigger = document.querySelector('.menu-trigger');
    var sidebar = document.getElementById('sidebar');
    
    menuTrigger.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    document.querySelectorAll("nav ul li a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            loadPage(this.href);
        });
    });

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("content").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", page, true);
        xhttp.send();
    }
});

