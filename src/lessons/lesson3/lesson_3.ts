console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let prom: Promise<number> = new Promise((res, rej)=> {
  // any
  // async
  res(5); // good
  //rej(0); // bad
});

// Promise methods: then, catch, finally;

console.log('Promise', prom);

// prom
//   .then((res: number) => {
//       console.log('resolve', res);
//       // one more async request
//       // return result
//       return res + 5;
//     }, (rej) => {
//     console.log('reject', rej);
//     //throw -1;
//     return rej + 2;
//   })
//   .then((res2) => {
//     console.log('then2', res2);
//   }, (rej2) => {
//     console.log('rej2', rej2);
//   })

// prom
//   .then((res: number) => {
//     console.log('resolve', res);
//     // one more async request
//     // return result
//     return res + 5;
//   })
//   .catch((rej) => {
//     console.log('reject', rej);
//     //throw -1;
//     return rej + 2;
//   })
//   .then((res2) => {
//     console.log('then2', res2);
//   })
//   .catch((rej2) => {
//     console.log('rej2', rej2);
//   })

// prom
//   .then((res: number) => {
//     console.log('resolve', res);
//     // one more async request
//     // return result
//     //throw -5;
//     return res + 5;
//   })
//   .then((res2) => {
//     console.log('then2', res2);
//     return res2;
//   })
//   //@ts-ignore
//   .finally((a:any) => {
//     console.log('finally', a);
//     //return a;
//   })
//   .then((res3) => {
//     console.log('then3', res3);
//     return res3;
//   })
//   .catch((rej) => {
//     console.log('rej', rej);
//   })


setTimeout(() => {} , 0);


// just a plug
export default ()=>{};