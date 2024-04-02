let getUsers = fetch("https://jsonplaceholder.typicode.com/users");
let users;
getUsers.then((res) => {
     return users = res.json();
}).then((data) => {
    for(let user of data) {
        let nav = document.getElementById("navBar");
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.innerHTML = user.name;
        btn.setAttribute("onClick", `getPost(${user.id})`)
        li.appendChild(btn);
        nav.appendChild(li);
    }
}).catch((err) => {
    console.log(err);
});

async function getPost(id) {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id);
    let posts = await data.json();
    let container = document.getElementById("postContainer");
    container.innerHTML = '';
    for(let post of posts) {
        let p = document.createElement("p");
        p.innerHTML = post.body;
        container.appendChild(p);
    }
}

getPost(1);




