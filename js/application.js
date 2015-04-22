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

    var t = document.getElementById('KunderTable');
    


    var input = document.getElementById('Filter');

    input.addEventListener(
        'input',
        function(){
            if(input.value===""){
                for(var i = 0; i < t.rows.length; i++){
                    t.rows[i].classList.remove("filterShow");
                    t.rows[i].classList.remove("filterHide");
                }
                return ;
            }

            for(var i = 0; i < t.rows.length; i++)
            {

                if(t.rows[i].innerHTML.search(new RegExp(input.value, "i")) !== -1){
                    t.rows[i].classList.add("filterShow");
                    t.rows[i].classList.remove("filterHide");
                } else{
                    t.rows[i].classList.remove("filterShow");
                    t.rows[i].classList.add("filterHide");
                }
            }
        })  ;


    var fylke = document.getElementById("Fylke");
    fylke.onchange=function (){
        debugger;
        if(fylke.value === "- Alle fylkene -"){
            for(var i = 0; i < t.rows.length; i++){
                t.rows[i].classList.remove("fylkeShow");
                t.rows[i].classList.remove("fylkeHide");
            }
            return ;
        }
        for(var i = 0; i < t.rows.length; i++)
        {


            if(t.rows[i].innerHTML.search(new RegExp(fylke.value, "i")) !== -1){

                t.rows[i].classList.add("fylkeShow");
                t.rows[i].classList.remove("fylkeHide");
            } else{
                t.rows[i].classList.remove("fylkeShow");
                t.rows[i].classList.add("fylkeHide");
            }
        }

    };


})(this, this.document);
