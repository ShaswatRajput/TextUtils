


export default function LetterCounter(input){
   
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            count++;
        }
    }
    return count;
}



          







