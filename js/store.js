var num = 0;
var mob = 0;
var ww = window.innerWidth;

if (ww > 0 && ww <= 360) {
    mob = 1;
} else if (ww > 360 && ww <= 500) {
    mob = 2;
} else if (ww > 500 && ww <= 900) {
    mob = 3;
};
console.log(window.innerWidth);
console.log(mob);

function store_show(num){
	for(i=0; i<4; i++){
	document.getElementsByClassName("store_total_list")[i].style.display="none";
	}
	document.getElementsByClassName("store_total_list")[num].style.display="flex";
}	
