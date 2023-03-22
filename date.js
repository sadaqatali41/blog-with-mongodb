const date = new Date();
console.log(date);

const today = function(){
    console.log('Today function is added');
}
today();

const fullYear => () {
    console.log('Full Year from Date : ' + date.getFullYear());
}
fullYear();