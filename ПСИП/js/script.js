function calculate() {
    const x = 2;
    const y = 3;

    const f = Math.log(Math.abs(y - Math.sqrt(Math.abs(x))) * (x - (y / (x + (Math.pow(x, 2) / 4 )))));
    document.getElementById("result").value = f;
}

function proc() {
    const S1 = "Я люблю Беларусь";
    const S2 = "Я стану лучшим программистом Беларуси";

    const lengths1 = S1.length;
    const better = S2.includes("лучшим");
    const ascii7 = S2.charCodeAt(6);

    document.getElementById("S1").value = S1;
    document.getElementById("S2").value = S2;
    document.getElementById("lengths1").value = lengths1;
    document.getElementById("better").value = better;
    document.getElementById("ascii7").value = ascii7;
}
