(function (window, document) {
document.getElementById('toggle').addEventListener('click', function (e) {
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
});

var dts = document.getElementsByTagName("dt");
var last = null;
for(var i = 0; i < dts.length; i++) {
    dts[i].addEventListener('click', function (e) {
        e.target.classList.toggle("active");
        var active = e.target.nextElementSibling.classList.toggle("active");

        e.stopImmediatePropagation();

        if(active && e.target && e.target.dataset  && e.target.dataset["image"]){
            document.getElementById("ReF").src = e.target.dataset["image"];
        }

        if(last && last !== e.target){
            last.nextElementSibling.classList.toggle("active");
            last.classList.toggle("active");
        }

        if(last != e.target)
          last = e.target;
        else
          last = null;


    })
}



})(this, this.document);