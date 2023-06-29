const x = 8;
const y = 10;

function calculate(x,y) {
    const f = (1+y) * (((2*x+Math.sqrt(y)-(x+y))/(y+(1/(Math.pow(x,2)-4)))));
    return f;
}

document.write("<br> X = " + x);
document.write("<br> Y = " + y);
document.write("<br> F = " + calculate(x,y));