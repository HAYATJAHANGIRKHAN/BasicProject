function createPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("solved done");
            resolve(10);

        },5000)
    })
}

async function main(){
    console.log("inside function ");
    const response = await createPromise();
    console.log("response is", response);
}
main();