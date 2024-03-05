const clock = document.querySelector('#clock');
setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
    console.log(date);
    clock.innerHTML = time;
},2000);

