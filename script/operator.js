let num1 = 4
let num2 = 2
let result =  num1+num2
console.log(result)
result = num1-num2 
console.log(result)
reult = num1*num2
console.log(result)
result = num1/num2 
console.log(result)
result = num1%num2 
console.log(result)
//나머지 연산자를 이용할 경우는 0또는 1의 결과가 필요한 경우 사용
//홀 짝 구분 가능
console.log('-----------------------------------')
let x = 5;
let y = x++
console.log(`x=${x}`)//6
console.log(`y=${y}`)//5
console.log('-----------------------------------')
let a = 10
let b = a++
console.log(a, b)
let c = 4
let d = --c;
console.log(c,d)
console.log('-----------------------------------')
a = 10
b = 20
c = 30
d = 40
console.log(a,b,c,d)
a++ //
b-- //
c++ //
d-- //
console.log(a,b,c,d) //11, 19, 31, 39
a = ++b
b = a++
// 21, 20, 31, 39
console.log(a,b,c,d)
c = a+b
d = ++c
//21, 20, 42, 42
console.log(a,b,c,d)
a = ++c + 10
b = --d + 1
//53, 42, 43, 41
console.log(a,b,c,d)
console.log('-----------------------------------')
// 복합대입연산자
// 1 이상의 값을 산술연산자와 함계 대입하고 싶을 때
// 복합대입은 += 문자열연결용으로 많이 활용한다.
let number = 10;
console.log(number) //10
number += 5 //number = number+5
console.log(number)
number-= 5; //number = number-5
console.log(number)
number *= 5; //number
console.log(number)
number /= 5 //
console.log(number)
number %= 2; //2로 나눈 나머지 값 대입
console.log(number)
console.log('-----------------------------------')
//삼황연산자
x = 5;
y = x+10
//x 와 y의 값을 비교해서 비교에 따른 결과 ox 출력하기
let total = y == 15
console.log(total) //true
total = y ==15 ? 'O' : 'X' ;
console.log(total)

let age = prompt('몇살인가요?')
total = age >=19 ? '성인' : '청소년'
console.log(total)

//게임스코어
//1위 이웹 1000점
//2위 김웹 900점
const game_score = [{
    id:'이웹',
    score:1000
},{
    id:'김웹',
    score:900
}]
let max_score = game_score[0].score > game_score[1].score ? game_score[0]: game_score[1]
console.log(`${max_score.id}의 최고점수는 ${max_score.score}점이다.`)







