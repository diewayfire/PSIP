function position(letter){
    let Answer;
    if(((letter.charCodeAt(0) > 96) && (letter.charCodeAt(0) < 123))||((letter.charCodeAt(0) > 64) && (letter.charCodeAt(0) < 91))){
        if (letter === letter.toUpperCase()) {
            Answer = ("Position of alphabet:",letter.charCodeAt(0)-64);
        } else {
            Answer = ("Position of alphabet:",letter.charCodeAt(0) - 96);
        }
    }   
    console.log(Answer);
    console.log(typeof Answer);
    return Answer;
}

    position('a')



String.prototype.toJadenCase = function () {

};

let text = "bla bla bla bla suka"

console.log(text.toJadenCase)