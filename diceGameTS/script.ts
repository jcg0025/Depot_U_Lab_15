class Dice {
    value: number;
    div: HTMLDivElement;
    constructor(){
      this.div = document.createElement('div');
      this.roll();
      this.div.addEventListener('click', (e) => {
      this.roll();
      });  
      this.div.addEventListener('dblclick', (e) => {
         this.div.parentNode.removeChild(this.div);
         this.remove();
      });
    }
    roll() {
        let randomNumber = Math.floor(Math.random()*6+1);
        this.value = randomNumber;
        this.div.innerText = String(this.value);
        return randomNumber
    }
    add() {
        dieArray.push(this);
    }
    remove() {
        console.log(dieArray);
        this.value = 0;
    }
}

let dieArray = [];

function addDie(){
    let die = new Dice();
    die.add();
    
    let container = document.body.childNodes;
    container[9].appendChild(die.div);
    console.log(die);  
}

function rollDie() {
    for (let i = 0; i <dieArray.length; i++) {
        dieArray[i].roll();
    } 
    console.log(dieArray);  
}

function sumDie() {
    let sum =0;
    for (let i=0; i < dieArray.length; i++){
        sum += dieArray[i].value;
    }
    alert('the sum is '+sum);
}




    





