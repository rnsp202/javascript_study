//자바스크립트 외부 파일
//객체 속성 메소드 이벤트
//목표1. 개발자 도구 콘솔창에 hello js 출력
//입력 데이터가 문자라면 큰 또는 작은 따옴표에 묶어서 "글"
console.log("hello js");
//변수
//var bowl; //빈 데이터를 가지고 있는 빈 변수 undefined(정의되지 않음)
var bowl = "rice";
console.log(bowl) //변수에러 점검용
var bowl = "been";
console.log(bowl)
console.log("======================")
var a;
var b;
var c;
abc_result_v3()
a = 10;
abc_result_v3()
a = 20;
abc_result_v3()
b = a;
abc_result_v3()
c = a+b
abc_result_v3()
console.log("======================")
// a,b,c 변수값 확인하는 재사용 console용 함수 생성
function abc_result(){
    console.log("-----------")
    console.log("a=", a)
    console.log("b=", b)
    console.log("c=", c)
}
// 생성 끝
function abc_result_v2(){
    console.log("-----------")
    console.log("a:",a,"b:",b,"c:",c)
}
//------------------------
// 함수 v3 생성
// v3 출력 예시) a의 값은 a이고 b의 값은 b이며 c의 값은 c입니다.
function abc_result_v3(){
    console.log("-----------")
    // console.log("a의 값은", a,"이고" ,"b의 값은", b,'이며',"c의 값은", c,"입니다.")
    console.log("a의 값은 "+ a+"이고 b의 값은 "+ b+"이며 c의 값은 "+ c+"입니다.")
    console.log("1+1=", 1+1);
    console.log("1+1="+ 1+1);
}