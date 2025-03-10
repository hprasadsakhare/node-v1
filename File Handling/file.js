// const fs = require("fs");


// fs.writeFileSync('./test.txt', "hello everyone")

// fs.writeFile('./test.txt', "hello everyone",(err) =>{});

// const result = fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log(result);
//     }
// })


const fs = require("fs");
// fs.appendFileSync('./test.txt', new Date().toLocaleString());


fs.appendFileSync("./test.txt",'Hey There \n');

// fs.cpSync('./test.txt','./copy.txt');

// fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt"));