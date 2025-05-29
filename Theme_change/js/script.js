let btn = document.querySelector("#theme");
console.dir(btn);
let cl = prompt("Enter a COLOR to Background:")
btn.onclick = () => {
    if (cl == "white") {
        document.body.style.background = cl;
    } else {
        document.body.style.background = cl;
        document.body.style.color = "white";
    }
}
