/// <reference path="typings/browser.d.ts" />
$('document').ready(function(){ 

class Vehicle {
    div: HTMLDivElement;
    speed: number;
    damageLimit: number;
    constructor(){
        this.div = document.createElement('div');
        this.div.addEventListener('click', (e) => {
            this.damage(this.damageLimit);
        })
    }
    insert(){
        document.getElementById('vehicleHolder').appendChild(this.div);
         //Random Placement Engine
         var randomNumber = String(Math.floor(Math.random()*90)*10);
         var randomPx = randomNumber.concat('px');
         var randomNumber2 = String(Math.floor(Math.random()*110)*10);
         var randomPx2 = randomNumber2.concat('px');
         this.div.style.marginTop = randomPx;
         this.div.style.marginLeft = randomPx2;
    }
    move(speed: number){
        this.speed = speed;
        $(this.div).animate({left: '+=1000px'}, 10000/speed);
    }
    damage(damageLimit: number){
        let counter = 0;
        this.damageLimit = damageLimit;
        $(this.div).click(function(){
            counter ++;
            if (counter == damageLimit){
                this.remove();
            }
        })
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.damageLimit = 1;
    }
    move(){
        super.move(1);
    }
    insert(){
        super.insert();
        this.div.className = 'car';
    }
    damage(){
        super.damage(this.damageLimit);
    } 
    reverse(){
        console.log('reversing');
    }
}

class CopCar extends Car{
    constructor(){
        super();
        this.speed =1;
        this.damageLimit = 2;
    }
    insert(){
        super.insert();
        this.div.className = 'copCar';
    }
    move(){
       $(this.div).animate({top: '-=1000px'}, 10000/this.speed); 
    }
    damage() {
        super.damage();
        
    }
    
}

class Motorcycle extends Vehicle{
    constructor(){
        super();
        this.damageLimit = 0;
        this.speed = 4;
    }
    insert(){
        super.insert();
        this.div.className = 'moto';
    }
    move(){
        $(this.div).animate({top: '-=1000px', left: '+=1000px'}, 10000/this.speed);
    }
    damage() {
        super.damage(1);
    }
}

class Tank extends Vehicle{
    constructor(){
        super();
        this.damageLimit = 9;
        this.speed = 0.5;
    }
    insert(){
        super.insert();
        this.div.className = 'tank';
    }
    move(){
        super.move(this.speed);
    }
    damage(){
        super.damage(this.damageLimit);
        
    }
}

$('.addCar').click(function(){
    let car = new Car();
    car.insert();
    car.move();
});

$('.addCopCar').click(function(){
    let copcar = new CopCar();
    copcar.insert();
    copcar.move();
});

$('.addMoto').click(function(){
    let moto = new Motorcycle();
    moto.insert();
    moto.move(); 
});

$('.addTank').click(function(){
    let tank = new Tank();
    tank.insert();
    tank.move();
})


});





