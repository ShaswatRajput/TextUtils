export default function WordCounter(input){

   
    
        // Remove leading and trailing white spaces
        input = input.trim();

        if (input === '') {
          return 0;
        }
      
        const words = input.split(/[\s.]+/);
      
        // Checking if the last character is a full stop
        const lastCharacter = input[input.length - 1];
        const endsWithFullStop = lastCharacter === '.';
      
        // Adjust the word count if the input ends with a full stop
        const wordCount = endsWithFullStop ? words.length - 1 : words.length;
      
        return wordCount;
      
      

}