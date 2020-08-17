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

// 광클금지변수
var sprot = 0;


var k = 0;
document.getElementById("btn_toggle").onclick = function () {
    if (k == 0) {
        document.getElementsByClassName("gnb_sub")[0].style.display = "block";
        k = 1;
    } else {
        document.getElementsByClassName("gnb_sub")[0].style.display = "none";
        k = 0;
    }
};


function btn_after() {

    /// 광클금지 //////////////////
    if (sprot === 1) return false; //돌아가!
    sprot = 1; //잠금
    setTimeout(function () {
        sprot = 0;// 해제
    }, 1000);/// setTimeout///
    ////////////////////////////
	
    var tg = document.getElementsByClassName("main_visual_movielist")[0].getElementsByTagName("li");
    document.getElementsByClassName("main_visual_movielist")[0].insertBefore(tg[tg.length - 1], tg[0]);

    if (mob == 0) {
        document.getElementsByClassName("main_visual_movielist")[0].style.left = "-25%";
		document.getElementsByClassName("main_visual_movielist")[0].style.transition = "none";
    } else if (mob == 2) {
        document.getElementsByClassName("main_visual_movielist")[0].style.left = "-50%";
		document.getElementsByClassName("main_visual_movielist")[0].style.transition = "none";
    };
	
    // 약간의 시차로 left값 차이를 인식시킴!
    setTimeout(function () {
        document.getElementsByClassName("main_visual_movielist")[0].style.left = "0%";
        document.getElementsByClassName("main_visual_movielist")[0].style.transition = "left .5s ease-in-out";
    }, 10);
}


function btn_prev() {
    /// 광클금지 //////////////////
    if (sprot === 1) return false; //돌아가!
    sprot = 1; //잠금
    setTimeout(function () {
        sprot = 0;// 해제
    }, 900);/// setTimeout///
    ////////////////////////////

    
    
    if (mob == 0) {
        document.getElementsByClassName("main_visual_movielist")[0].style.left = "-25%";
    } else if (mob == 2) {
        document.getElementsByClassName("main_visual_movielist")[0].style.left = "-50%";
    };
    document.getElementsByClassName("main_visual_movielist")[0].style.transition = "left .5s ease-in-out";

    // 이동후 맨앞li 잘라서 맨뒤로 이동과 트랜지션없이 left값 0만들기!!!
    setTimeout(function () {
        var tg = document.getElementsByClassName("main_visual_movielist")[0].getElementsByTagName("li");
        document.getElementsByClassName("main_visual_movielist")[0].appendChild(tg[0]);

        document.getElementsByClassName("main_visual_movielist")[0].style.left = "0%";
        document.getElementsByClassName("main_visual_movielist")[0].style.transition = "none";
    }, 800);

}


function mvposter_show(obj, num) {
    console.log(obj.style.backgroundImage);
    document.getElementById("curation_mv").style.backgroundImage = obj.style.backgroundImage;

    var mv = new Array();
    mv[0] = "https://www.youtube.com/embed/vLMkFGTHvsU";
    mv[1] = "https://www.youtube.com/embed/gXU0eB47YlY";
    mv[2] = "https://www.youtube.com/embed/XUhRA_ObaDo";
    mv[3] = "https://www.youtube.com/embed/d2VN6NNa9BE";

    console.log(document.getElementsByClassName("curation_middle_right")[0].getElementsByTagName("iframe")[0].src);

    document.getElementsByClassName("curation_middle_right")[0].getElementsByTagName("iframe")[0].src = mv[num];

}

/*****************서브페이지 변환******************/
/*
0: 반도 
1: 결백 
2: 살아있다
3: 밤쉘
4: 원워드
5: 블루아워
6: 원데이
7: 비바리움


*/
var name;
function page_change(num){
	switch(num) {
		case 0:
			location.href="movie.html"
			name="반도";
			break;
		case 1:
			location.href="movie.html"
			name="결백";
			break;
		case 2:
			location.href="movie.html"
			name="살아있다";
			break;
		case 3:
			location.href="movie.html"
			name="밤쉘";
			break;
		case 4:
			location.href="movie.html"
			name="온워드";
			break;
		case 5:
			location.href="movie.html"
			name="블루아워";
			break;
		case 6:
			location.href="movie.html"
			name="원데이";
			break;
		case 7:
			location.href="movie.html"
			name="비바리움";
			break;
	}
}
/*****************로그인창******************/
function login_popup(){
	document.querySelector(".login_bg").style.display="block";
}
function login_close(){
	document.querySelector(".login_bg").style.display="none";
}

function login_btn(){
	var login_id=document.querySelector(".id");
	var login_pw=document.querySelector(".pw");
	if(login_id.value.trim()==""){
		alert("아이디를 입력해주세요");
		login_id.focus();
		return;
	}
	if(login_pw.value.trim()==""){
		alert("비밀번호를 입력해주세요");
		login_pw.focus();
		return;
	}
}