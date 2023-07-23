document.querySelector("form").addEventListener("submit",MyTodo);
function MyTodo(){
    event.preventDefault();

    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    console.log(task,priority)
    
    var tr = document.createElement("tr");


    var td1 = document.createElement("td")
    td1.innerText = task;
    var td2 = document.createElement("td")
    td2.innerText = priority;
    if(priority == "High"){
        td2.setAttribute("id","High")

    } else if ( priority == "Medium"){
        td2.setAttribute("id","Medium")

    } else{
        td2.setAttribute("class", "Low")
    }

    var td3 = document.createElement("td")
    td3.innerText = "Delete";
    td3.addEventListener("click", DeleteTodo);
    
    tr.append(td1,td2,td3);

    document.querySelector("tbody").append(tr)
}
function DeleteTodo(){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}