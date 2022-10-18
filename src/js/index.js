
import '../sass/style.scss'
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


function scroll(){
    if (document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparrent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}
window.onscroll= function(){
    scroll();
}
