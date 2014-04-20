var menu = '<li><a href="#" data-transition="slide" onclick="home()"><h2>Home</h2></a></li> \n\
            <li><a href="#" data-transition="slide" onclick="maps()"><h2>Map</h2></a></li> \n\
            <li><a href="#" data-transition="slide" onclick="cari()"><h2>Place</h2></a></li> \n\
            <li><a href="#" data-transition="slide" onclick="about()"><h2>About</h2></a></li>';

function getMenu() {
    $('#menu').html(menu);
    $('#menu:visible').listview('refresh');
    
}
function home() {
    $(location).attr('href', 'home.html');
}

function maps() {
    $(location).attr('href', 'peta.html');
}

function cari() {
    $(location).attr('href', 'search.html');
}

function about() {
    $(location).attr('href', 'about.html');
}

