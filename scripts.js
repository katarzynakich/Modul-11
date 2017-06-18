function Phone(brand, price, color, oS, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.oS = oS;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". The operating system is " + this.oS + ". The camera has " + this.camera + " MP.");
};

var iPhone7 = new Phone("Apple", "$595.00", "silver", "IOS 10", 12);
var samsungGalaxyS6 = new Phone("Samsung", "$329.00", "black", "Android", 16);
var huaweiP10 = new Phone("Huawei", "$569.00", "gold", "Android", 20);
var Lumia930 = new Phone("Microsoft", "$255.00", "green", "Windows Phone", 20);

huaweiP10.printInfo();
