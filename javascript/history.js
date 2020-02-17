// here i will be the data in form of table
// my algorithm comes here
// this function will get data from the localstorage
const get_todos = ()=>{
  let todos = new Array();
  let todos_str = localStorage.getItem("todo");
  if(todos_str !== null){
    todos = JSON.parse(todos_str);
    console.log(todos[1]);
  }
  return todos;
}
//this function will show the data in the localstorage in table format
const show = ()=>{
  let todos = get_todos();
  let text = "";
  for(let i = 0; i < todos.length; i++){
      let allData = todos[i];
      let eventName = allData.Eventname;
      let location = allData.Location;
      let date = allData.Date;
      console.log(i);
      text += "<tr>";
      text += "<td>" + eventName + "</td>";
      text += "<td>" + location + "</td>";
      text += "<td>" + date + "</td>";
      text += "<td>" + "<button class='buttons'>Pending</button>" + "</td>";
      text += "<td>" + "<i id='remove' class='fas fa-trash-alt btndelete'></i>" + "</td></tr>";

  }
  //the data gotten from the localstorage will be here
  let table = document.querySelector("#table > tbody");
  table.innerHTML = text;
}
  // let button = document.querySelectorAll(".buttons");
  // button.forEach(click =>{
    
  //   click.onclick = (e)=>{
  //      let get = localStorage.getItem("background");
  //      if(get){
  //       e.target.className += " change";
  //       localStorage.setItem("background", e.target.className);
  //      }
  //      else{
  //       e.target.className += " change";
  //       localStorage.setItem("background", e.target.className);
  //      }
      
    
  //   }
  // });
// }
// const remove = ()=>{
//     let todo = get_todos();
//     let thead = document.querySelector("thead");
//     let tr = document.querySelectorAll("tr");
//     let remove = document.getElementById("remove");
//     remove.onclick = ()=>{
//       thead.removeChild(tr);
//     }

// }
// remove();
  
window.addEventListener("DOMContentLoaded", ()=>{
  show();
});
