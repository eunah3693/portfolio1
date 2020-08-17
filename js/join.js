var member_name=document.querySelector("#name");
var member_birth=document.querySelector("#birth");
var member_id=document.querySelector("#id");
var member_pw=document.querySelector("#pw");
var member_pw2=document.querySelector("#pw2");
var member_mail=document.querySelector("#mail");
var member_mail2=document.querySelector("#mail_txt");
var member_popup=document.querySelector(".join_popup");
var member_popup_txt=document.querySelector(".popup_txt");

function join_check(){
	
	if(member_name.value.trim()==""){
		alert("성명을 입력해주세요");
		member_name.focus();
		return;
	}
	if(member_birth.value.trim()==""){
		alert("생년월일을 입력해주세요");
		member_birth.focus();
	}else if(member_birth.value.length != 6){
		alert("생년월일을 바르게 입력해주세요");
		member_birth.focus();
		return;
	}
	if(member_id.value.length < 3){
		alert("아이디를 3글자이상 입력해주세요");
		member_id.focus();
		return;
	}
	/*영어,숫자만 가능*/
	var regType1 = /^[A-Za-z0-9+]*$/;
	if(!regType1.test(member_id.value)){
		alert("아이디는 영문, 숫자만 가능합니다");
		member_id.focus();
		return;
	}

	if(member_pw.value.length > 12 || member_pw.value.length < 4){
		alert("비밀번호는 4~12자만 가능합니다");
		member_pw.focus();
		return;
	}

	if(member_pw2.value != member_pw.value){
		alert("비밀번호가 동일하지않습니다");
		member_pw.focus();
		return;
	}
	if(member_mail.value.trim()=="" || member_mail2.value.trim()==""){
		alert("메일을 입력해주세요");
		member_mail.focus();
		return;
	}
	else{
		alert("회원가입을 축하합니다");
		window.location="index.html";
	}

}
function mail_input(){
var member_mail_select=document.querySelector(".member_select");
console.log(member_mail_select.value);
	if(member_mail_select.value=="네이버"){
		document.querySelector("#mail_txt").value=".naver.com";
	}
	if(member_mail_select.value=="다음"){
		document.querySelector("#mail_txt").value=".daum.net";
	}
}
