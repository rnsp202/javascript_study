const header = document.getElementsByTagName('header')
console.log(header)
//tag, class 등과 같이 다수가 존재할 수 있는 대상을 DOM으로 선택하면 특정 대상 1개만 잡히는 게 아닌 Collection 기준으로 여러개가 잡히기 때문에 원하는 대상 사용 시 정확히 그 ㅡ대상을 인덱스로 선택해야 한다.
console.log(header[0])
const logoCls = document.getElementsByClassName('logo')
console.log(logoCls)
console.log(logoCls[1])
//클래스, 태그 대상을 정확히 어떤 대상만 변수로 저장
const aTag1 = document.getElementsByTagName('a');
const aTag2 = document.getElementsByTagName('a')[0];
/* 
변수 생성 시 인덱스를 작성하지 않으면 호출할 때 인덱스를 작성하여 자유롭게 원하는 대상을 가져올 수 있다.
console.log(aTag1[0])
console.log(aTag1[5])
console.log(aTag1[10])
*/
/* 
변수 선언 시 인덱스를 작성하고 선언했다면 변수 사용시 인덱스를 붙이지 않고 변수명만 간편하게 쓸 수 있다. 대신, 인덱스가 고정되므로 다른 인덱스 번호에 해당하는 태그나 클래스를 사용하고 싶을 때 변수를 새로 만들어야 한다.
*/
const gnb = document.getElementById('gnb')
console.log(gnb)
// id 는 단 하나로 증복할 수 없으므로 index가 들어가지 않느다.
console.log('-------------------------------')
const headerTag = document.querySelector('header')
console.log(headerTag)
//querySelector는 tag, class 선택 시 메서드 괄호안 문자열 대상 기준으로 가장 먼저 인싱된 대상을 출력해준다ㅣ.
const aQ = document.querySelector('a')
console.log(aQ)
const logoQ = document.querySelector('.logo')
console.log(logoQ)
const gnbQ = document.querySelector('#gnb')
console.log(gnbQ)
console.log('-------------------------------')
const aQAll = document.querySelectorAll('a')
console.log(aQAll)
console.log(aQAll[2])
const logoAll = document.querySelectorAll('.logo')
console.log(logoAll)
console.log(logoAll[0])
console.log('-------------------------------')
const order = document.querySelector('#order')
const input_text = document.querySelector('#text')
const input_num = document.querySelector('#num')
const btn = document.querySelector('#btn')
//버튼 클릭 시 아래 함수 호출하기
console.log(order, input_text,input_num,btn)
function btn_func1(){
    //위 변수에 대한 데이터타입 출력하기(큰 솔 한 줄씩 한줄)
        // console.log(typeof order)
        // console.log(typeof input_text)
        // console.log(typeof input_num)
        // console.log(typeof btn)
        console.log(input_text.value)
        console.log(typeof input_text.value)
        console.log(input_num.value)
        console.log(typeof Number(input_num.value))
}
function btn_func2(){
    //#num 입력칸에 숫자 2를 입력했을 때
    //주문 버튼을 클릭하면
    //+1 이벤트로 숫자3이 #num 입력칸에 입력되는 코드 작성
        // console.log(input_text.value)
        // console.log(typeof input_text.value)
        // if(input_num.value == 2){console.log(Number(input_num.value)+1)}
        // if(input_num.value != 2){console.log(Number(input_num.value))}
        // console.log(typeof Number(input_num.value))
        input_num.value = Number(input_num.value)+1
}
function btn_func3(){
    //사용자가 요청사항을 입력 후 주문 버튼을 클릭하면
    //윈도우 경고창으로 다음과 같이 출력하기
    //"사용자 요청사항은 oooo입니다."
        // console.log(input_text.value)
        let total = input_text.value;
        alert(`사용자 요청사항은 "${total}"입니다.`);
}
function btn_func4(){
    //사용자 요청사항과 주문수량을 확인하고
    //주문 버튼을 클릭하면 다음과 같이 경고창 출력하기
    //요청사항은 oooo, 주문 수량은 n개, 총 결제금액은 n000원 입니다.
    //제품1개당 1000원
    price = 1000
    let order = input_text.value;
    let num = Number(input_num.value)
    let money = num*price
    alert(`요청사항은 "${order}", 주문 수량은 ${num}개, 총 결제금액은 ${money}원 입니다.`);
}