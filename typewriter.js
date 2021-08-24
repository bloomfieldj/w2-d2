const sentence = "hello there from lighthouse labs";



// function typewritter(sentence, callback){

typewriter = function(string){
  let timer = 0;
  for (const char of string) {   
    setTimeout(() => {
      process.stdout.write(char)}, timer);
      timer += 50;  
    }
    setTimeout(() => {
      process.stdout.write('\n')}, timer);
}

typewriter(sentence);