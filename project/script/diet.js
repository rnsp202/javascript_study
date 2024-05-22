// 계산식) 적정체중 = (본인신장-100)*0.9
/*  -현재 키와 몸무게를 자유롭게 입력하고
    -버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
    결과 예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.    */
const height = document.querySelector('#height')
console.log(height)
const weight = document.querySelector('#weight')
console.log(weight)
const goals = document.querySelector('#goals')
console.log(goals)
const result = document.getElementById('result')
result.addEventListener('click',function(){
    let total = (Number(height.value) - 100) * 0.9
    let over = total-Number(weight.value)
    goals.value = `적정체중은 ${total}kg 이며 ${over}kg 초과되셨습니다.`
})