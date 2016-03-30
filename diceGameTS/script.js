/// <reference path="typings/browser.d.ts" />
var Dice = (function () {
    function Dice() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'rotateDiv';
        this.roll();
        var count = 0;
        this.div.addEventListener('click', function (e) {
            _this.roll();
            var div = e.target;
            count += 30;
            var d = 30 + count;
            $(div).css({
                '-moz-transform': 'rotate(' + d + 'deg)',
                '-webkit-transform': 'rotate(' + d + 'deg)',
                '-o-transform': 'rotate(' + d + 'deg)',
                '-ms-transform': 'rotate(' + d + 'deg)',
                'transform': 'rotate(' + d + 'deg)'
            });
        });
        this.div.addEventListener('dblclick', function (e) {
            _this.div.parentNode.removeChild(_this.div);
            _this.remove();
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
    Dice.prototype.remove = function () {
        console.log(dieArray);
        this.value = 0;
    };
    return Dice;
}());
var dieArray = [];
function addDie() {
    var die = new Dice();
    die.add();
    var container = document.body.childNodes;
    container[11].appendChild(die.div);
    console.log(die);
}
var counter = 0;
function rollDie() {
    for (var i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
    console.log(dieArray);
    counter += 30;
    AnimateRotate(30 + counter);
}
function sumDie() {
    var sum = 0;
    for (var i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    alert('the sum is ' + sum);
}
function AnimateRotate(d) {
    $('.rotateDiv').css({
        '-moz-transform': 'rotate(' + d + 'deg)',
        '-webkit-transform': 'rotate(' + d + 'deg)',
        '-o-transform': 'rotate(' + d + 'deg)',
        '-ms-transform': 'rotate(' + d + 'deg)',
        'transform': 'rotate(' + d + 'deg)'
    });
}
