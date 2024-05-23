const data = [
    {//1번째
        title:'나를 소모하지 않는 현명한 태도에 관하여',
        author:'마티아스 뇔케',
        translate:'이미옥',
        public:'퍼스트펭귄',
        date:'2024년 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#이달의 굿즈', '#나를바라보다', '#인간관계에대하여']
    },{//2번째
        title:'하루 한 장 나의 어휘력을 위한 필사 노트[양장]',
        author:'유선경',
        translate:'',
        public:'위즈덤하우스',
        date:'2024년 03월',
        price:23800,
        sale:10,
        tag:['#얼리리더', '#필사', '#쓰는맛']
    },{//3번째
        title:'불변의 법칙[양장]',
        author:'모건 하우절',
        translate:'이수경',
        public:'서삼독',
        date:'2024년 02월',
        price:25000,
        sale:10,
        tag:['#얼리리더', '#부자되는법', '#부자만들기', '#돈좀벌어보자', '#돈모으고싶을때']
    }
]
console.log(data)
dataTotal0 = data[0].price*((100-data[0].sale)/100)
let item ="";
const section = document.querySelector('section')
console.log(item,section)
item = `<h1>${data[0].title}</h1>`
item += `<div class="at">`
item += `<span class="author">${data[0].author}  |  </span>`
item += `<span class="transl">${data[0].translate}</span>`
item += `</div>`
item += `<div class="pd">`
item += `<span class="public">${data[0].public}  |  </span>`
item += `<span class="date">${data[0].date}</span>`
item += `</div>`
item += `<div class="ps">`
item += `<span class="sale">${data[0].sale}%  |  </span>`
item += `<span class="price">${dataTotal0.toLocaleString('ko-kr')}원</span>`
item += `</div>`
item += `<p class="tag">${data[0].tag[0]} ${data[0].tag[1]} ${data[0].tag[2]} ${data[0].tag[3]}</p>`
console.log(item)
section.innerHTML = item