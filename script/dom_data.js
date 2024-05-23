//DB 만들기(객체+배열)
//2. HTML DOM 자바스크립트 내 생성
//3. 화면(section) 출력
const data = [
    {//첫번째 상품
        delivery:'샛별배송',
        name:'성주 참외 1.5kg',
        detail:'뽀얀 과육, 시원한 닷맛',
        price:15800,
        sale:12,
        review:9999,
    }, {//2번째 상품
        delivery:'샛별배송',
        name:'대추방울토마토 750g',
        detail:'믿고 먹을 수 있는 상품',
        price:8990,
        sale:22,
        review:9999,
    }, {//3번째 상품
        delivery:'샛별배송',
        name:'국산 블루베리 100g',
        detail:'보랏빛 달콤함',
        price:8800,
        sale:20,
        review:9999,
    }
]
console.log(data)
//HTML DOM
//main > p .delivery
//main > h1
//main > p.details
//main > p.oriwin_price
//main > div.price > span.sale + span.total_price
//main > p.review
dataTotal0 = data[0].price*((100-data[0].sale)/100)
let item = "";
const section = document.querySelector('section')
console.log (item,section)
item = `<h1>${data[0].name}</h1>`
item = `<p class="details">${data[0].detail}</p>`
console.log('-------------------------------------')
item = `<p class="delivery">${data[0].delivery}</p>`
item += `<h1>${data[0].name}</h1>`
item += `<p class="details">${data[0].detail}</p>`
item += `<p class="origin_price">${data[0].price}</p>`
item += `<div class="price">`
item += `<span class="sale">${data[0].sale}% ${dataTotal0.toLocaleString('ko-kr')}원</span>`
item += `</div>`
item += `<p class="review">${data[0].review}</p>`
// += 복합 대입 연산자(기존 값에 더한다.)
console.log(item)
section.innerHTML = item
console.log('-------------------------------------')
// console.log(${data[0].price-(data[0].price/data[0].sale)}+${data[1].price-(data[1].price/data[1].sale)}+${data[2].price-(data[2].price/data[2].sale)})

