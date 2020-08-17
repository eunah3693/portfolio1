console.log(window.innerWidth);

var num = 0;
var mob = 0;
var ww = window.innerWidth;

if (ww > 0 && ww <= 468) {
	mob = 1;
}

console.log(mob);



var k = 0;
document.getElementById("btn_toggle").onclick = function () {
	if (k == 0) {
		document.getElementsByClassName("gnb_sub")[0].style.display = "block";
		k = 1;
	} else {
		document.getElementsByClassName("gnb_sub")[0].style.display = "none";
		k = 0;
	}
}

document.getElementsByClassName("story_title")[0].onclick = function () {
	if (mob == 0) {
		return false;
	} else if (mob == 1) {
		document.getElementsByClassName("actor")[0].style.display = "none";
		document.getElementsByClassName("story_wrap")[0].style.display = "block";
		document.getElementsByClassName("story_wrap")[0].style.width = "100%";
	}
}
document.getElementsByClassName("actor_title")[0].onclick = function () {
	if (mob == 0) {
		return false;
	} else if (mob == 1) {
		console.log("나나");
		document.getElementsByClassName("story_wrap")[0].style.display = "none";
		document.getElementsByClassName("actor")[0].style.display = "block";
		document.getElementsByClassName("actor")[0].style.width = "80%";
		document.getElementsByClassName("actor")[0].style.margin = "0 auto";

	}

}

function play_division(num) {
	if (mob == 0) {
		play_show(num);
	} else if (mob == 1) {
		play_mobile(num);
	}
}
var shows = {
	"반도": ["https://www.youtube.com/embed/fcueArgm800", "https://www.youtube.com/embed/zw0UL4efb6Y", "https://www.youtube.com/embed/h2Q5ZFAXhKk"],
	"결백": ["https://www.youtube.com/embed/5QWeKTO9NpY", "https://www.youtube.com/embed/B5FEiLoBBFo", "https://www.youtube.com/embed/YZKFefHl-3Y"],
	"살아있다": ["https://www.youtube.com/embed/ifyPEnKreJI", "https://www.youtube.com/embed/2TLSmW-ItpA", "https://www.youtube.com/embed/U_j51Q-Sjco"],
	"비바리움": ["https://www.youtube.com/embed/7Qpy5OfacM8", "https://www.youtube.com/embed/F3L2FYlROjk", "https://www.youtube.com/embed/Gn7mGpEyrEQ"],
	"원데이": ["https://www.youtube.com/embed/oUua2qX7qF4", "https://www.youtube.com/embed/E0s2-jz_qq0", "https://www.youtube.com/embed/kySPsIYRGAs"],
	"블루아워": ["https://www.youtube.com/embed/7me9MQMNkuk", "https://www.youtube.com/embed/7VadUyb3Lwk", "https://www.youtube.com/embed/VrIJQKuK7dA"],
	"온워드": ["https://www.youtube.com/embed/7CyeDl6wNok", "https://www.youtube.com/embed/xJxwfkBBs8Y", "https://www.youtube.com/embed/Vnmae60--b8"],
	"밤쉘": ["https://www.youtube.com/embed/rEOGEjWag68", "https://www.youtube.com/embed/_qShY2yrlpM", "https://www.youtube.com/embed/uqL-hzx0heI"]

}

function play_show(num) {

	document.querySelectorAll(".play_main iframe")[0].src = shows[name][num];
}

function play_mobile(num) {
	console.log("fkfk");

	/*console.log(document.querySelectorAll(".play_list li")[num].querySelector("img"));*/
	console.log(shows[name]);
	document.querySelectorAll(".play_list li")[num].querySelector(".play").innerHTML = "<iframe src=" + shows[name][num] + " frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
}
var mov = {
	"결백": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_2.jpg);"></div>',
		"movie_info_0": "결백",
		"movie_info_1": "드라마 | 한국 | 110분",
		"movie_info_2": "15세 관람가 | 예매율 2위",
		"story_0": "[대천의 장례식장에서 농약 막걸리 살인사건 발생. 용의자 긴급 체포]",
		"story_1": '유명 로펌의 에이스 변호사 ‘정인(신혜선)’은 아빠의 장례식장에서 농약 막걸리 살인사건이 일어났음을 알게 된다.<br>치매에 걸린 엄마 ‘화자(배종옥)’가 용의자로 지목되고,그녀의 결백을 주장하기 위해 고향으로 내려가 직접 변호를 맡는다.<br>사건을 추적하던 중 시장 ‘추인회(허준호)’를 중심으로 한 마을 사람들의 조직적 은폐와 거짓 진술 등 수상한 정황을 포착한 ‘정인’. 그날의 기억을 모두 잃은 ‘화자’의 결백을 입증하기 위해 모든 사람들과 맞서기 시작하는데…!<br><br><br>파헤칠수록 커지는 의혹,과연 진실은 무엇인가?',
		"actor_0": '<img src="images/gyul_actor1.jpg">',
		"actor_1": '<img src="images/gyul_actor2.jpg">',
		"actor_2": '<img src="images/gyul_actor3.jpg">',
		"actor_3": '<img src="images/gyul_actor4.jpg">',
		"actor_4": '<img src="images/gyul_actor5.jpg">',
		"actor_5": '<img src="images/gyul_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/B5FEiLoBBFo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/gyul_main.png">',
		"play_img_1": '<img src="images/gyul_making.png">',
		"play_img_2": '<img src="images/gyul_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/gyul1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/gyul2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/gyul3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/gyul4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/gyul5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/gyul6.jpg);"></div>'
	},
	"살아있다": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_3.jpg);"></div>',
		"movie_info_0": "살아있다",
		"movie_info_1": "드라마 | 한국 | 98분",
		"movie_info_2": "15세 관람가 | 예매율 3위",
		"story_0": "[원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시]",
		"story_1": ' 영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에 혼자 고립된 것을 알게 된다.데이터, 와이파이, 문자, 전화 모든 것이 끊긴 채 고립된 상황.<br>연락이 두절된 가족에 이어 최소한의 식량마저 바닥이 나자 더 이상 버티기 힘들어진 ‘준우’.하지만 그 순간 건너편 아파트에서 누군가 시그널을 보내온다.<br>또 다른 생존자 ‘유빈’(박신혜)이 아직 살아있음을 알게 된 ‘준우’는 함께 살아남기 위한 방법을 찾아 나서는데...!<br><br>꼭 살아남아야 한다',
		"actor_0": '<img src="images/sal_actor1.jpg">',
		"actor_1": '<img src="images/sal_actor2.jpg">',
		"actor_2": '<img src="images/sal_actor3.jpg">',
		"actor_3": '<img src="images/sal_actor4.jpg">',
		"actor_4": '<img src="images/sal_actor5.jpg">',
		"actor_5": '<img src="images/sal_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/ifyPEnKreJI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/sal_main.PNG">',
		"play_img_1": '<img src="images/sal_making.PNG">',
		"play_img_2": '<img src="images/sal_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/sal1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/sal2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/sal3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/sal4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/sal5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/sal6.jpg);"></div>'
	},
	"밤쉘": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_4.jpg);"></div>',
		"movie_info_0": "밤쉘",
		"movie_info_1": "드라마 | 미국,캐나다 | 109분",
		"movie_info_2": "15세 관람가 | 예매율 4위",
		"story_0": "[판단은 날카롭게, 외침은 당당하게, 행동은 과감하게!]",
		"story_1": ' 대선후보 토론회에서 트럼프와 설전을 벌인 폭스뉴스의 간판 앵커 메긴 켈리(샤를리즈 테론)는 트럼프의 계속되는 트위터 공격으로 화제의 중심에 선다.<br> 한편, 동료 앵커인 그레천 칼슨(니콜 키드먼)은 ‘언론 권력의 제왕’이라 불리는 폭스뉴스 회장을 고소하고 이에 메긴은 물론, 야심 있는 폭스의 뉴페이스 케일라 포스피실(마고 로비) 역시 충격을 감추지 못하는데… <br>최대 권력을 날려버릴 폭탄선언 이제 이들의 통쾌하고 짜릿한 역전극이 시작된다!',
		"actor_0": '<img src="images/bam_actor1.jpg">',
		"actor_1": '<img src="images/bam_actor2.jpg">',
		"actor_2": '<img src="images/bam_actor3.jpg">',
		"actor_3": '<img src="images/bam_actor4.jpg">',
		"actor_4": '<img src="images/bam_actor5.jpg">',
		"actor_5": '<img src="images/bam_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/NAbSpmh6ocY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/bam_main.PNG">',
		"play_img_1": '<img src="images/bam_making.PNG">',
		"play_img_2": '<img src="images/bam_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/bam1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/bam2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/bam3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/bam4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/bam5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/bam6.jpg);"></div>'
	},
	"비바리움": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_8.jpg);"></div>',
		"movie_info_0": "비바리움",
		"movie_info_1": "드라마 | 미국,덴마크 | 97분",
		"movie_info_2": "15세 관람가 | 예매율 8위",
		"story_0": "[“가장 완벽한 안식처가 되어줄 거에요, 영원히”]",
		"story_1": ' 함께 살 곳을 찾던 ‘톰’과 ‘젬마’ 중개인으로부터 ‘욘더’라는 독특한 마을의 9호 집을 소개받는다.<br><br> 똑같은 모양의 주택들이 즐비한 곳에서 알 수 없는 기묘함에 사로잡힌 순간, 중개인은 사라져 버린다.<br><br> 어떤 방향으로 향해도 집 앞에 다다르는 이곳에서 우리의 선택은 없다, 오직 살아갈 뿐!',
		"actor_0": '<img src="images/vi_actor1.jpg">',
		"actor_1": '<img src="images/vi_actor2.jpg">',
		"actor_2": '<img src="images/vi_actor3.jpg">',
		"actor_3": '<img src="images/vi_actor4.jpg">',
		"actor_4": '<img src="images/vi_actor5.jpg">',
		"actor_5": '<img src="images/vi_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/7Qpy5OfacM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/vi_main.PNG">',
		"play_img_1": '<img src="images/vi_making.PNG">',
		"play_img_2": '<img src="images/vi_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/vi1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/vi2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/vi3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/vi4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/vi5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/vi6.jpg);"></div>'
	},
	"원데이": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_7.jpg);"></div>',
		"movie_info_0": "원데이",
		"movie_info_1": "드라마,멜로 | 미국 | 107분",
		"movie_info_2": "15세 관람가 | 예매율 7위",
		"story_0": "[“내일이 어떻게 되든 오늘은 함께 있잖아”]",
		"story_1": ' 현실의 벽에 부딪혀도 작가의 꿈을 놓지 않는 ‘엠마’ 그저 세상을 즐기며 살고 싶은 ‘덱스터’ 7월 15일, 대학교 졸업식 날 처음 만난 두 사람.<br><br> 사랑과 우정 사이를 맴돌며 함께 만들어낸 스무 번의 특별한 하루! <br><br>다시 시작될 그날, 우리의 기념일♥',
		"actor_0": '<img src="images/one_actor1.jpg">',
		"actor_1": '<img src="images/one_actor2.jpg">',
		"actor_2": '<img src="images/one_actor3.jpg">',
		"actor_3": '<img src="images/one_actor4.jpg">',
		"actor_4": '<img src="images/one_actor5.jpg">',
		"actor_5": '<img src="images/one_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/iDMo9sg5PuY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/one_main.PNG">',
		"play_img_1": '<img src="images/one_making.PNG">',
		"play_img_2": '<img src="images/one_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/one1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/one2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/one3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/one4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/one5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/one6.jpg);"></div>'
	},
	"블루아워": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_6.jpg);"></div>',
		"movie_info_0": "블루아워",
		"movie_info_1": "드라마 | 일본 | 92분",
		"movie_info_2": "12세 관람가 | 예매율 6위",
		"story_0": "[“나도 모르는 사이 어른이 되어버린 느낌, 너도 알지?”]",
		"story_1": '  완벽하게 지친 CF 감독 스나다(카호) 고향으로 오라는 엄마의 전화에자유로운 친구 ‘기요우라’(심은경)는 당장 떠나자고 말한다.<br><br>돌아가고 싶지 않던 그곳이지만,어쩌면- 괜찮을지도 몰라! <br><br>몸과 마음이 지친 당신을 위한 <블루 아워>',
		"actor_0": '<img src="images/blu_actor1.jpg">',
		"actor_1": '<img src="images/blu_actor2.jpg">',
		"actor_2": '<img src="images/blu_actor3.jpg">',
		"actor_3": '<img src="images/blu_actor4.jpg">',
		"actor_4": '<img src="images/blu_actor5.jpg">',
		"actor_5": '<img src="images/blu_actor6.jpg">',
		"play_main": '<iframe  src="https://www.youtube.com/embed/7me9MQMNkuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/blu_main.PNG">',
		"play_img_1": '<img src="images/blu_making.PNG">',
		"play_img_2": '<img src="images/blu_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/blu1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/blu2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/blu3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/blu4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/blu5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/blu6.jpg);"></div>'
	},
	"온워드": {
		"movie_poster_img": '<div class="movie_poster" style="background-image:url(images/main_5.jpg);"></div>',
		"movie_info_0": "온워드",
		"movie_info_1": "판타지,모험 | 미국 | 102분",
		"movie_info_2": "전체 관람가 | 예매율 5위",
		"story_0": "[마법이 허락된 단 하루, 지금 만나고 싶은 사람이 있나요?]",
		"story_1": '마법이 사라진 세상에 살고 있는 취향과 성격 모두 정반대의 두 형제인철든 동생 ‘이안’(톰 홀랜드)과 의욕충만 형 ‘발리’(크리스 프랫).‘이안’은 태어나서 얼굴도 본 적 없는 아빠를 그리워하던 중, 서프라이즈 생일 선물로 아빠의 마법 지팡이를 받게 된다.<br><br> 그러나 실수로, 아빠의 반쪽만 소환시키는 위기가 발생하는데!! 주어진 시간은 단 하루, 두 형제는 완벽한 모습의 아빠를 찾기 위해 모험을 떠나고 마법으로 절벽을 건너고, 까마귀 봉우리의 힌트를 따라 관문을 통과하지만 서로 다른 성격으로 인해, 사사건건 부딪히게 되고, 위험이 발생하는데… 과연 이들은 무사히 기적을 이룰 수 있을까?<br> 기적을 향한 출발, 지금 당신을 만나러 갑니다.',
		"actor_0": '<img src="images/on_actor1.jpg">',
		"actor_1": '<img src="images/on_actor2.jpg">',
		"actor_2": '<img src="images/on_actor3.jpg">',
		"actor_3": '<img src="images/on_actor4.jpg">',
		"actor_4": '<img src="images/on_actor5.jpg">',
		"actor_5": '<img src="images/on_actor6.jpg">',
		"play_main": '<iframe src="https://www.youtube.com/embed/7CyeDl6wNok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		"play_img_0": '<img src="images/on_main.PNG">',
		"play_img_1": '<img src="images/on_making.PNG">',
		"play_img_2": '<img src="images/on_teaser.PNG">',
		"main_photo": '<div class="main_photo change" style="background-image: url(images/on1.jpg);"></div>',
		"photo_0": '<div class="photo " style="background-image: url(images/on2.jpg);"></div>',
		"photo_1": '<div class="photo " style="background-image: url(images/on3.jpg);"></div>',
		"photo_2": '<div class="photo " style="background-image: url(images/on4.jpg);"></div>',
		"photo_3": '<div class="photo " style="background-image: url(images/on5.jpg);"></div>',
		"photo_4": '<div class="photo " style="background-image: url(images/on6.jpg);"></div>'
	}

}


for (var x in mov[name]) {

	document.getElementsByClassName(x)[0].innerHTML = mov[name][x];
}
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
function photo_show(num) {
	if(mob==1) return false;
	if (name == "반도") {
		document.querySelector(".main_photo_img").style.backgroundImage = "url(images/bando" + num + ".jpg)";
	} else if(name=="결백"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/gyul'+num+'.jpg);"></div>';
	}else if(name=="살아있다"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/sal'+num+'.jpg);"></div>';
	}else if(name=="밤쉘"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/bam'+num+'.jpg);"></div>';
	}else if(name=="온워드"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/on'+num+'.jpg);"></div>';
	}else if(name=="블루아워"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/blu'+num+'.jpg);"></div>';
	}else if(name=="원데이"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/one'+num+'.jpg);"></div>';
	}else if(name=="비바리움"){
		document.querySelector(".main_photo").innerHTML= '<div class="main_photo_img" style="background-image: url(images/vi'+num+'.jpg);"></div>';
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