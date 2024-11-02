function h(x,fn){
//h-> is a HOF
//fn-> is a callback
console.log(x*x)
fn()
}
h(10,function(){
    console.log("call back done")
})