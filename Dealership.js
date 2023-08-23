
const Dealership = function(name,maxNumCars){
    this.name = name;
    this.maxNumCars = maxNumCars;
    this.carsInStock = []
}

// getters and setters

Dealership.prototype.setName = function(name){
    this.name = name;
}

Dealership.prototype.getName = function(){
    return this.name;
}

Dealership.prototype.setMaxNumCars = function(maxNumCars){
    this.maxNumCars = maxNumCars;
}

Dealership.prototype.getMaxNumCars = function(){
    return this.maxNumCars;
}

Dealership.prototype.getCarsInStock = function(){
    return this.carsInStock;
}

//Add methods to Dealership to:

// Count the number of cars in stock

Dealership.prototype.countCars = function(){
    return this.carsInStock.length;
}

// Add a car to stock

Dealership.prototype.addCar = function(car){
    this.carsInStock.push(car);
}

// Return an array containing each car's manufacturer ()

Dealership.prototype.showCarManufacturer = function(){
    return this.carsInStock.map((car) => {
        return car.manufacturer;
    });
}

// Find all the cars from a given manufacturer (filter)

Dealership.prototype.findAllCarsByManufacturers = function(manufacturer) {
   return this.carsInStock.filter((car) => {return car.manufacturer === manufacturer});
}

// Find the total value of all the cars in stock

Dealership.prototype.getAllValuesofCars = function(){
    return this.carsInStock.reduce((reducer, car) => {
        return car.price + reducer;
    }, 0);
}

module.exports = Dealership;

