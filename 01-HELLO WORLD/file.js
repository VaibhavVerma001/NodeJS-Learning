const fs = require("fs");
const os = require("os");

//  Sync...
// fs.writeFileSync('./test.txt', "Hello World");

//  Async...
// fs.writeFile('./test.txt', "Hello World", (err) => {});


// Reading Sync....
// const result = fs.readFileSync("./contacts", "utf-8");
// console.log(result);


// Reading Async....
// fs.readFile("./contacts", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// })


//Update Sync
// fs.appendFileSync("./test", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test", `${Date.now()} Hey There\n`);

// //copy
// fs.cpSync("./test", "./copy.txt");

//delete
// fs.unlinkSync("./copy.txt");

// //Status
// console.log(fs.statSync("./test"));
// console.log(fs.statSync("./test").isFile());

//making Dir or making Folders
// fs.mkdirSync("my-docs/a/b", {recursive: true})


// console.log(os.cpus().length);


// Blocking --- Sync
// console.log("1");
// const result = fs.readFileSync("./contacts", "utf-8");
// console.log(result);
// console.log("2");
// console.log("3");
// console.log("4");



// Non - Blocking --- Async

console.log("1");

fs.readFile("./contacts", "utf-8", (err, result) => {
    console.log(result);
});


console.log("2");
console.log("3");
console.log("4");

