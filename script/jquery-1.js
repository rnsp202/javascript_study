//제이쿼리 시작
//자바스크립트의 DOM 제어를 쉽게 도와주는 라이브러리 언어
//제이쿼리 사용을 위해서는 cdnJs 섪치파일을 링크로 연결해야 사용할 수 있다.(필수!)
const h1 = document.querySelector('h1')
console.log(h1)
h1.style.backgroundColor = 'darkgreen'

//jquery DOM 스타일 적용법
//jquery 방식으로 변수를 선택했을 땐 자바스크립트의 DOM 속성 및 메서드를 사용할 수 없다.
const $h1 = $('h1');
//제이쿼리변수.css('속성','값')
$h1.css('background-color','aliceblue')
//제이쿼리변수와 자바스크립트 속성 및 메서드를 사용하고 싶다면 그 중간에 추가 속성을 붙여야한다.
$h1.get(0).style.color = 'grey'
//웹사이트에서 자주 이용하는 동적기능을 제이쿼리는 일부 간단한 메서드 명령으로 제공해준다.
//DOM 숨기기, 보이기 display = none or block
const test = document.querySelector('.test')
// test.style.display = 'none'
const $test = $('.test');
// $test.css('display','none');
// $test.get(0).style.display = 'none';
$test.hide() //display:none 호출함수명
$test.show() //display:block 호출함수명
$test.css({
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'skyblue',
})
const $btn = $('#btn');
const $btn2 = $('#btn2');
$btn.on('click',function(){
    $('h1+p').css('background-color', 'lime')
})
$btn2.on('click',function(){
    $('img').attr('src','./project/casper/images/advantage2.png')
})
const $p = $('p')
console.log($p.length)
//반복문(for) 없이도 변수 하나로 전체를 인식한다.
$p.css('border','1px solid black')

const p = document.querySelectorAll('p')
for(let i of p){i.style.border = '2px solid purple'}

$p.eq(1).css('border','5px solid black')
$p.filter('.first').css('transform','scaleY(1.5)')
$p.find('em').css({backgroundColor:'coral'})
$p.not('.first').css('transform','rotate(2deg)')