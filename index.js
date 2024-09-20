function onChange() {
    const s = document.getElementById("textarea1").value;
    console.log(typeof(s));
    let l = s.length;
    console.log(l);

    if (l > 50) {
        document.getElementById("textarea1").textContent = "";
        document.getElementById("para1").style.visibility = "hidden";
        document.getElementById("para2").style.visibility = "hidden";
        document.getElementById("limitPara").style.visibility = "visible";
    } else {
        document.getElementById("totalSpan").textContent = String(l);
        document.getElementById("remainingSpan").textContent = String(50 - l);
        document.getElementById("para1").style.visibility = "visible";
        document.getElementById("para2").style.visibility = "visible";
        document.getElementById("limitPara").style.visibility = "hidden";


    }


}