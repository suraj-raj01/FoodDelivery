let b = document.getElementsByTagName('body');
function mode() {
    document.body.classList.toggle('demo')
}

let i = 0
let a = 0;
let id = 0;
function fun1()
{
    x = 230;
    a+=x;
    i++;
    id="1";
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}

function fun2()
{
    x = 330;
    a+=x;
    i++;
    id="2";
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}
function fun3()
{
    x = 299;
    a+=x;
    i++;
    id="3";
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}
function fun4()
{
    x = 399;
    a+=x;
    i++;
    id="4";
    alert("Item Added");
    document.getElementById("res").innerHTML=a;
    document.getElementById("itm").innerHTML=i;
}


function display()
{
    document.getElementById("item").style.display = "block";
}

function hide()
{
    document.getElementById("item").style.display = "none";
}

function order()
{
    document.querySelector("table").style.display="block";
}


function add()
{
    alert("Ordered Successfull!!")
    let data = {
        "id":id,
        "items":i,
        "price":a
    }
    fetch("http://localhost:3000/delivery",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    });
}

async function fet()
{
    let a = await fetch("http://localhost:3000/delivery");
    let b = await a.json();
    let d = document.getElementById("displayData");
    let p = b.map((e) => 
    `
    <tr>
    <td>${e.id}</td>
    <td>${e.items}</td>
    <td>${e.price}</td>
    <td><button onclick="mydelete('${e.id}');">Cancel</button></td>
    </tr>
    `).join(" ");
    d.innerHTML = p;
}
fet();

// delete 
function mydelete(id)
{
    fetch(`http://localhost:3000/delivery/${id}`,{
        method:"DELETE"
    }).then(res=>alert("Data Cancelled Successfully!!"))
}