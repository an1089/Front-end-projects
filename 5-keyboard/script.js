const insert = document.getElementById('insert');
window.addEventListener("keypress", (e) => {
    e.preventDefault();
    if(e.key === " "|| e.key === "Spacebar"){
        insert.innerHTML = `You pressed Space`;
    }else if(e.key === "Enter"){
        insert.innerHTML = `You pressed Enter`;
    }
    insert.innerHTML = `You pressed ${e.key}`;
    console.log(e.key);
});