let score =11;

function one(){
 let score = 0;
 console.log(score)
}
function two(){
    let score=5;
    console.log(score);
}

function three(){
    console.log(score);
}


// one();
// two();
// three();
// console.log(score);


function outerFun(){
    let outerVar='i am at scope level 1';
    function innerFun(){
        let innerVar='i am at scope level 2';
        console.log(outerVar);
    }
    console.log(innerVar);
    innerFun();
}
// outerFun();

const myglobalValue= 0;
function  func(){
   const val1=1;
   console.log(myglobalValue,val1)

   function innerofffunc(){
    const val2 =2;
    console.log(val1 , val2,myglobalValue)

    function inneroffinnerfanc(){
        const val3 =3;
        console.log(val3,val2,val1,myglobalValue)
    }
    inneroffinnerfanc();
   }
   innerofffunc();
}
// func();

//closure 
function superfunc(){
    let outerValue= 'i am outer value'
    function minorfunction(){
        console.log(outerValue);
    }
    minorfunction();
}
// superfunc();

const errormessage='file not found';

setTimeout(function callbacks(){
    console.log(errormessage);
},2000);

let pagecount=0;

const items=[2,3,4,5];
items.forEach(function iterator(num){
    pagecount++;
    console.log(pagecount,num);
})
console.log("pageCount",pagecount);