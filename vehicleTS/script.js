var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="typings/browser.d.ts" />
$('document').ready(function () {
    var Vehicle = (function () {
        function Vehicle() {
            var _this = this;
            this.div = document.createElement('div');
            this.div.addEventListener('click', function (e) {
                _this.damage(_this.damageLimit);
            });
        }
        Vehicle.prototype.insert = function () {
            document.getElementById('vehicleHolder').appendChild(this.div);
            //Random Placement Engine
            var randomNumber = String(Math.floor(Math.random() * 90) * 10);
            var randomPx = randomNumber.concat('px');
            var randomNumber2 = String(Math.floor(Math.random() * 110) * 10);
            var randomPx2 = randomNumber2.concat('px');
            this.div.style.marginTop = randomPx;
            this.div.style.marginLeft = randomPx2;
        };
        Vehicle.prototype.move = function (speed) {
            this.speed = speed;
            $(this.div).animate({ left: '+=1000px' }, 10000 / speed);
        };
        Vehicle.prototype.damage = function (damageLimit) {
            var counter = 0;
            this.damageLimit = damageLimit;
            $(this.div).click(function () {
                counter++;
                if (counter == damageLimit) {
                    this.remove();
                }
            });
        };
        return Vehicle;
    }());
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car() {
            _super.call(this);
            this.damageLimit = 1;
        }
        Car.prototype.move = function () {
            _super.prototype.move.call(this, 1);
        };
        Car.prototype.insert = function () {
            _super.prototype.insert.call(this);
            this.div.className = 'car';
        };
        Car.prototype.damage = function () {
            _super.prototype.damage.call(this, this.damageLimit);
        };
        Car.prototype.reverse = function () {
            console.log('reversing');
        };
        return Car;
    }(Vehicle));
    var CopCar = (function (_super) {
        __extends(CopCar, _super);
        function CopCar() {
            _super.call(this);
            this.speed = 1;
            this.damageLimit = 2;
        }
        CopCar.prototype.insert = function () {
            _super.prototype.insert.call(this);
            this.div.className = 'copCar';
        };
        CopCar.prototype.move = function () {
            $(this.div).animate({ top: '-=1000px' }, 10000 / this.speed);
        };
        CopCar.prototype.damage = function () {
            _super.prototype.damage.call(this);
        };
        return CopCar;
    }(Car));
    var Motorcycle = (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            _super.call(this);
            this.damageLimit = 0;
            this.speed = 4;
        }
        Motorcycle.prototype.insert = function () {
            _super.prototype.insert.call(this);
            this.div.className = 'moto';
        };
        Motorcycle.prototype.move = function () {
            $(this.div).animate({ top: '-=1000px', left: '+=1000px' }, 10000 / this.speed);
        };
        Motorcycle.prototype.damage = function () {
            _super.prototype.damage.call(this, 1);
        };
        return Motorcycle;
    }(Vehicle));
    var Tank = (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            _super.call(this);
            this.damageLimit = 9;
            this.speed = 0.5;
        }
        Tank.prototype.insert = function () {
            _super.prototype.insert.call(this);
            this.div.className = 'tank';
        };
        Tank.prototype.move = function () {
            _super.prototype.move.call(this, this.speed);
        };
        Tank.prototype.damage = function () {
            _super.prototype.damage.call(this, this.damageLimit);
        };
        return Tank;
    }(Vehicle));
    $('.addCar').click(function () {
        var car = new Car();
        car.insert();
        car.move();
    });
    $('.addCopCar').click(function () {
        var copcar = new CopCar();
        copcar.insert();
        copcar.move();
    });
    $('.addMoto').click(function () {
        var moto = new Motorcycle();
        moto.insert();
        moto.move();
    });
    $('.addTank').click(function () {
        var tank = new Tank();
        tank.insert();
        tank.move();
    });
});
