// alert(screen.height)

function hide(){
    document.getElementById('mainBoxFlex').innerHTML = '';
    document.getElementById('mainBoxFlex').innerHTML = '<div id="loader"></div>';
    var showNewPage = setTimeout(show,4000);
}


function show(){
    window.open("main.html", "_self");
}