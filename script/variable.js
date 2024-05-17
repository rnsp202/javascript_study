var box1; //변수 생성은 됐지만 데이터는 정의되지 않은 상태
console.log(box1) //undefined
var box1 = 1; //중복 선언해도 에러는 나지 않는다.
box_all() //변수가 없어도 undefined가 출력된다.
var box2 = "box1" + 1;
box_all()
var box3 = "1" + (1 + 1);
console.log(box1); //1
console.log(box2);
console.log(box3);
box_all()
// -------------------------
function box_all(){
    console.log("all=>", box1, box2, box3);
    console.log(`"all=>${box1}과 ${box2}와 ${box3}입니다."`);
    console.log(`"all=>${box1, box2, box3}"`);
} 
// =====================회원의 나이를 저장하고 있는 함수
var lee =20
var kim = 21
var oo =22
function user_age(){
    console.log(`"당신의 나이는 ${kim}살 입니다."`)
}
// =====================상품 수량 증가 함수
var num = 0; //기본수량
function productNum(){
    num = num+1
    console.log(`${num}`)
}
console.log('---------------------')
//var vs elts
var a = 1; //초기설정
var a = 2; //이미 생성한 변수를 중복 선언해도 문제 없음
let b = 3;
b = 4; 
// let 변하는 변수 vs const 변하지 않는 상수(underfined)
const c =5;
//자바스크립트는 절차적언어이다.
//자바스크립트는 객체지향언어이다.
//자바스크립트는 함수형언언어이다.
const js = "자바스크립트" ;
let js_lang = "절차적" ;
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang = "객체지향" ;
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang = "함수형" ;
console.log(`${js}는 ${js_lang}언어이다.`)
console.log('---------------------')
//const는 변하지 않는 상수를 가지는 변수이다.
//let은 변하는 데이터 값을 가지는 변수이다.
//var는 변하는 데이터 값을 가지는 변수이다.
let mem = "const는"
let na = "변하지 않는 상수를"
console.log(`${mem} ${na} 가지는 변수이다.`)
mem = "let은"
na = "변하는 데이터 값을"
console.log(`${mem} ${na} 가지는 변수이다.`)
mem = "var는"
console.log(`${mem} ${na} 가지는 변수이다.`)
console.log('---------------------')
//회원 정보 저장 변수
//이름 : 홍길동
//나이 : 20
//혈액형 : O
//mbti: enfj
//거주지 : 인천시 부평구
//성별: 남성
let mem_name = "홍길동"
let mem_age = 20
const mem_bt = "O"
let mem_mbti = "enfj"
let mem_where = "인천시 부평구"
let mem_gen = "남성"
console.log("회원정보")
console.log(`이름: ${mem_name}`)
console.log(`나이: ${mem_age}`)
console.log(`혈액형: ${mem_bt}`)
console.log(`mbti: ${mem_mbti}`)
console.log(`거주지: ${mem_where}`)
console.log(`성별: ${mem_gen}`)
console.log(`${mem_name}은 작년에 ${mem_age - 1}세 였습니다.`)
console.log(`${mem_name}은 내년에 ${mem_age + 1}세가 됩니다.`)
console.log('---------------------')
let global_variable = 1;
function local_func(){
    let local_variable = 2 + global_variable;
    console.log(local_variable)
}
console.log(global_variable)
local_func()
// null(비어있는, 삭제된) vs undefined(정의안됨)
let cart1 = 10; //장바구니 10개 상품
console.log(cart1);
cart1 = null //장바구니 비움
console.log(cart1)
let cart2; //처음 사용자가 아무것도 물건을 담지 않았을 떄
console.log(cart2);//undefined
//하루 총 지출액 가계부 만들기
//커피 1500원, 도시락 6000원, 대중교통 2천원
//오늘 총 지출액은 ooo원 입니다.
let cost_coffie = 1500
let cost_bentto = 6000
let cost_bus = 2000
let phone = 2000000
function allCost(){
    let result = cost_coffie+cost_bentto+cost_bus
    console.log(`오늘 총 지출액은 ${result}원입니다.`)
}
let phone_result = phone / 6
function phone_m_cost(){
    console.log(`이번 달 핸드폰 할부 비용은 ${phone_result}원입니다.`)
}
function allCost2(){
    let result = cost_coffie+cost_bentto+cost_bus+phone_result
    console.log(`할부 포함 이번 달 총 지출액은 ${result}원입니다.`)
}