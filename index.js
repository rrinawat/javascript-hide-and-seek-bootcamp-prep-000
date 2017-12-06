//simple implementation of querySelector
function getFirstSelector(selector){
  return document.querySelector(selector)
}
//remember since nested in an id, can use # to select ID, then use .target to find that class name under that branch
function nestedTarget(){
   return document.querySelector('#nested .target')
}
//iterate down to the deepest child
function deepestChild(){
   return  document.querySelectorAll('#grand-node div div div div')
}
