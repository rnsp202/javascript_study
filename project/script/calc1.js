//num1, num2 사용자가 숫자 값을 입력하고
//결과버튼을 클릭했을 때
//#result 결과 위치에 "`정답은 ${total}입니다!`" 출력
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btn = document.querySelector('button')
const result = document.getElementById('result')
btn.addEventListener('click',function(){
    let total = Number(num1.value)+Number(num2.value)
    result.value = `정답은 ${total.toLocaleString('ko-kr')}입니다!`
})