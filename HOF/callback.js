function h(x,fn){
//h-> is a HOF
//fn-> is a callback
console.log(x*x)
fn(x*x)
}
// h(10,function(){
//     console.log("call back done")
// })

h(10,exec);
function exec (n){
    console.log("squared value is ", n);
}

setTimeout (function hh(){
    console.log("time done after 5s")
},5000)

