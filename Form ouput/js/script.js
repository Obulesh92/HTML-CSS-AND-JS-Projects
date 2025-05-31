let main = document.getElementById("mainform");
let usname = document.getElementById("inputname");
let email = document.getElementById("eemail");
let tel = document.getElementById("telphone");
let h2 = document.getElementById("outputh2");
console.log(h2);
let outname = document.getElementById("myuser");
let outmail = document.getElementById("mail");
let outtel = document.getElementById("mobile");

main.addEventListener("submit", function(e) {
    e.preventDefault();
    h2.style.display = "block";
    const users = usname.value;
    outname.innerText = "Username:   " + users;

    const mail = email.value;
    outmail.innerText = "Email:" + mail;

    const mobile = tel.value;
    outtel.innerText = "Phone Number: " + mobile;

    main.reset()
})
