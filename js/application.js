(function (window, document) {
document.getElementById('toggle').addEventListener('click', function (e) {
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
});

var dts = document.getElementsByTagName("dt");

for(var i = 0; i < dts.length; i++) {

    dts[i].addEventListener('click', function (e) {

        e.target.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("active");
        e.stopImmediatePropagation()
    })


}



})(this, this.document);