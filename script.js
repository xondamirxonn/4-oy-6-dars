
// let i=0;
// function a(){
//   console.log(++i);
//   a();
// }

// a()

// setTimeout(() => {
  
// }, 0);

// let btn = document.querySelector("button")

// btn.addEventListener("click", () => {

//     let i = 0;
//     function a() {
//       console.log(++i);
//       a();
//     }
//     a();

// })

// setTimeout(() => {
//     let i = 0;
//     function a() {
//       console.log(++i);
//       a();
//     }
//     a();
// }, 2_000);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
// })

// const wait = (time)

// async function getUsers(){
//   try{
//     console.log("Sending request");
//     let res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     console.log("Response");
//     console.log("Converting to JSON");
//     console.time("json");
//     let data = await res.json();
//     console.timeEnd("json")
//     console.log("Convertes to JSON");
//     console.log(data);
//   } catch(err){
//     console.log(err);
//   } finally{

//   }
// }

// getUsers()

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// queueMicrotask(() => {
//   console.log(5);
// });

// Promise.resolve().then(() => {
//   console.log(3);
// });

// console.log(4);

// let arrr = [1, 2, 3, 4];
// let arr2 = arrr.slice(1, 4);
// console.log(arrr)
// (async function getData() {
//   let baseUrl = "https://jsonplaceholder.typicode.com";
//   let users = fetch(`${baseUrl}/users`).then((res) => res.json());
//   let posts = fetch(`${baseUrl}/posts`).then((res) => res.json());
//   let comments = fetch(`${baseUrl}/comments`).then((res) => res.json());
//   let photos = fetch(`${baseUrl}/photos`).then((res) => res.json());
//   let albums = fetch(`${baseUrl}/albums`).then((res) => res.json());
//   let todos = fetch(`${baseUrl}/todos`).then((res) => res.json());

//   let data = await Promise.all([users, posts, comments, photos, albums, todos]);
//   console.log(data);
// })();



// (async function users(){

//   let url = "https://jsonplaceholder.typicode.com/";
//   let mail = fetch(`${url}/users`).then((res) => res.json());
  
//   console.log(arr);
// })()


// fetch("http://jsonplaceholder.typicode.com").then((response) => {
//     return response.json();
//   }).then((data) => {
//     console.log(data);
//   });


 let qizil = document.getElementById("qizil");
 let sariq = document.getElementById("sariq");
 let yashil = document.getElementById("yashil");

 let kutish = (vaqt) => new Promise((trafficLight) => setTimeout(trafficLight, vaqt));


async function tl(){
    qizil.style.backgroundColor = "red";
    sariq.style.background = "gray";
    yashil.style.backgroundColor = "gray"
    await kutish(3000);
    sariq.style.backgroundColor = "yellow";
    
    qizil.style.backgroundColor = "gray";
    yashil.style.backgroundColor = "gray";
    await kutish(1000);
     yashil.style.backgroundColor = "green";
     sariq.style.backgroundColor = "gray";

await kutish(3000)
tl()
   
}
tl()