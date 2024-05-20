// 배열
let yoil = []// 빈 배열
console.log(yoil)
yoil = ['월','화','수','목','금','토','일']
console.log(yoil)
console.log(`오늘은 ${yoil[0]}요일입니다.`)//오늘은 월요일입니다.
// 배열 작성법 2
let yoil_v2 = new Array(2);
console.log(yoil_v2)
console.log(yoil_v2[1])//undefined
yoil_v2 = '일'
console.log(yoil_v2)
yoil_v2[1] = '월'
console.log(yoil_v2[1])
console.log(`--------------------------`)
// 배열 기초 문제
// 1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔결과 예) 좋아하는 색상은 o, o 입니다.
const color = ['빨강','노랑','주황','초록','파랑','보라']
console.log(color)
console.log(`좋아하는 색상은 ${color[4]}, ${color[5]}입니다.`)
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
const fruit = ['망고','자몽','레몬','사과','바나나']
console.log(`${fruit[4]}`)
console.log(`${fruit[3]}`)
console.log(`${fruit[2]}`)
console.log(`${fruit[1]}`)
console.log(`${fruit[0]}`)
//3. 날씨카드(맑음,흐림,비,눈)을 배열로 생성하고 이번주 기상예보를 출력하세요
// 결과)
// 월요일: 맑음
// 화요일: 눈   ....등
const wether = ['맑음','흐림','비','눈']
console.log(`${yoil[0]}요일: ${wether[0]}`)
console.log(`${yoil[1]}요일: ${wether[3]}`)
console.log(`${yoil[2]}요일: ${wether[2]}`)
console.log(`${yoil[3]}요일: ${wether[1]}`)
console.log(`${yoil[4]}요일: ${wether[0]}`)
console.log(`${yoil[5]}요일: ${wether[0]}`)
console.log(`${yoil[6]}요일: ${wether[3]}`)
console.log(`--------------------------`)
let cgv = new Array(8);
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
console.log(`--------------------------`)
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B1')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop()
console.log(megabox)
megabox.shift()
console.log(megabox)
megabox.push('F5','F6')
console.log(megabox)
console.log(`--------------------------`)
let lottecinema = []
console.log(lottecinema)
lottecinema.unshift('I7')
console.log(lottecinema)
lottecinema.push('G8','G9','G10')
console.log(lottecinema)
lottecinema.pop()
console.log(lottecinema)
lottecinema.shift()
console.log(lottecinema)
lottecinema.unshift('G7')
console.log(lottecinema)
let price = 10000
function func1(){
    total = (`예매하신 좌석은 총${lottecinema.length}좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price}원입니다.`) 
    console.log(total)
}
func1();
//뒤로가기 인원 수정
lottecinema.pop()
//결제하기 클릭 후 메세지 출력
func1();
//뒤로가기 인원 수정
lottecinema.push('G11','G12')
//결제하기 클릭 후 메세지 출력
func1();