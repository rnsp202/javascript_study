const like = document.querySelector('.like')
const comment = document.querySelector('.comment')
const paper = document.querySelector('.paper')
console.log(like, comment, paper)
console.log(like.children[0])
console.log(like.children[0].src)
const like_func = () => {
    like.children[0].src = "./image/like_on.png"
}
const comment_func = () => {
    comment.children[0].src = "./image/comment_on.png"
}
const paper_func = () => {
    paper.children[0].src = "./image/paper_on.png"
}
like.addEventListener('click', like_func)
comment.addEventListener('click', comment_func)
paper.addEventListener('click', paper_func)