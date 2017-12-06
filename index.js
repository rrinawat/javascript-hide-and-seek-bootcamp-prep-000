//simple implementation of querySelector
function getFirstSelector(selector){
  return document.querySelector(selector)
}
//remember since nested in an id, can use # to select ID, then use .target to find that class name under that branch
function nestedTarget(){
   return document.querySelector('#nested .target')
}
//iterate down to the deepest child...brute force version
function deepestChild(){
   return  document.querySelector('#grand-node div div div div')
}
// randklist iteration
function increaseRankBy(n){
  const ranks=document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = (i + n).toString()
}
}
