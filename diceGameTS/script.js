var Dice = (function () {
    function Dice() {
        var _this = this;
        this.div = document.createElement('div');
        this.roll();
        this.div.addEventListener('click', function (e) {
            _this.roll();
        });
        this.div.addEventListener('dblclick', function (e) {
            _this.div.parentNode.removeChild(_this.div);
        });
    }
    Dice.prototype.roll = function () {
        var randomNumber = Math.floor(Math.random() * 6 + 1);
        this.value = randomNumber;
        this.div.innerText = String(this.value);
        return randomNumber;
    };
    Dice.prototype.add = function () {
        dieArray.push(this);
    };
    return Dice;
}());
var dieArray = [];
function addDie() {
    var die = new Dice();
    die.add();
    var container = document.body.childNodes;
    container[9].appendChild(die.div);
    console.log(die);
}
function rollDie() {
    for (var i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
    console.log(dieArray);
}
function sumDie() {
    var sum = 0;
    for (var i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    alert('the sum is ' + sum);
}
