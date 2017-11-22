$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

$('.grayscale').click(function (){
    $('link[href="style.css"]').attr('href','styleDark.css');
});

$('.original').click(function (){
    $('link[href="styleDark.css"]').attr('href','style.css');
});
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
