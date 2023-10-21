function myFunction() {
    let x = "Hello "
    let y = document.getElementById("fName").value
    let z = ",I hope you are doing well. You are worth more than gold and you are loved. I would really love to work with someone like you."
    let msg = x + y + z;
    const output = document.getElementById("msgOutput");
    output.style.display = "block";
    output.innerHTML = msg;
}

