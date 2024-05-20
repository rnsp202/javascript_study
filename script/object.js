//객체
//2개 이상의 데이터를 담을 수 있다.
//배열 = 2개 이상의 데이터 "값"
//객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type: '코리안 숏헤어',
    age: 2,
    color: ['흰색','갈색'],
}
console.log(obj1)
console.log(obj1.type)
console.log(`고양이 종은 ${obj1.type} 입니다.`)
console.log(obj1.color[0], obj1.color[1])
const cat1 = {
    name: '러블',
    type: '러시안 블루',
    color: '회색',
    age: 1,
    gender: '암컷',
    health: '양호',
    birth: '5/20',
    birth_message: function(){
        return ` ${this.name}아, ${this.birth} 생일축하해~!`
    },
}
console.log(cat1)
console.log(cat1.birth_message()) //러블아 5/20 생일축하해~!
console.log(`----------------------`)
const movie = [
    {
        ko_name: '퓨리오사-매드맥스 사가',
        en_name: 'Furiosa: A Mad Max Saga',
        director: '조지 밀러',
        actor: ['안야 테일러 조이','크리스 헴스워스','톰 버크'],
        genre: '액션',
        time: '148분',
        age: '15세이상관람가',
        country: '미국',
        open: '2024.05.22',
        rate: '37.4%'
    },
    {
        ko_name: '청춘18x2 너에게로 이어지는 길',
        en_name: '18x2 Beyond Youthful Days',
        director: '후지이 미치히토',
        actor: ['허광한','키요하라 카야','장효전','미치에다 슌스케','쿠로키 하루','마츠시게 유타카','구로키 히토미'],
        genre: ['로맨스','멜로'],
        time: '124분',
        age: '12세이상관람가',
        country: '일본',
        open: '2024.05.22',
        rate: '12.3%'
    }
]
console.log(movie)
// console.log(`<img src="${movie.poster}" alt="${movie.ko_name}">`)
console.log(`----------------------`)
// 고양이1: 코숏, 1살, 수컷, 갈흰검, 중성화 유
// 고양이2: 코숏, 2살, 암컷, 검흰, 중성화 무
// 고양이3: 코숏, 3살, 수컷, 흰회, 중성화 유
const cat_shelter = [
    {
        type: '코리안 숏헤어',
        age: 1,
        gen: '수컷',
        color: ['갈색','흰색','검정색'],
        neutrifi: '중성화 유',
    },
    {
        type: '코리안 숏헤어',
        age: 2,
        gen: '암컷',
        color: ['검정색','흰색'],
        neutrifi: '중성화 무',
    },
    {
        type: '코리안 숏헤어',
        age: 3,
        gen: '수컷',
        color: ['흰색','회색'],
        neutrifi: '중성화 유',
    }
]
console.log(cat_shelter)
console.log(cat_shelter[0])
console.log(cat_shelter[1])
console.log(cat_shelter[2])
console.log(cat_shelter.length)
console.log(`현재 보호소의 고양이는 ${cat_shelter.length}마리입니다.`)
console.log(`현재 보호소의 고양이들의 나이대는 ${cat_shelter[0].age}살, ${cat_shelter[1].age}살, ${cat_shelter[2].age}살 입니다.`)