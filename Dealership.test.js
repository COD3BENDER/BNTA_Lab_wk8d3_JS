const Car = require("./Car")
const Dealership = require("./Dealership")

beforeEach(()=> {
    dealership = new Dealership("Los Santos Customs",10)
  })

describe('access properties of car', () =>{ 

    test('can set name', () => {
        // Arrange
        const expected = "Bennys Original Motorworks";
        // Act
        dealership.setName("Bennys Original Motorworks");
        const actual = dealership.getName();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can get dealership name', () => {
        // Arrange
        const expected = "Los Santos Customs";
        // Act
        const actual = dealership.getName();
        // Assert
        expect(actual).toBe(expected);
    });

    test('can set maximum cars', () => {
        // Arrange
        const expected = 20;
        // Act
        dealership.setMaxNumCars(20);
        const actual = dealership.getMaxNumCars();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can get maximum cars', () => {
        // Arrange
        const expected = 10;
        // Act
        const actual = dealership.getMaxNumCars();
        // Assert
        expect(actual).toBe(expected);
    });

    test('can get cars in stock', () => {
        car = new Car("Audi",25000,"Petrol")
        dealership.addCar(car);
        const actual = dealership.getCarsInStock();
        // Assert
        console.log("can get cars in stock",actual)
    });

    test('can get cars in stock', () => {
        car = new Car("Audi",25000,"Petrol")
        dealership.addCar(car);
        const actual = dealership.getCarsInStock();
        // Assert
        console.log("can get cars in stock",actual)
    });

    test('can get count cars in stock and also tests adding car', () => {

        car = new Car("Audi",25000,"Petrol")
        dealership.addCar(car);

        // Arrange
        const expected = 1;
        // Act
        const actual = dealership.countCars();
        // Assert
        expect(actual).toBe(expected);
    });

    test('show car manufacturers', () => {
        car = new Car("Audi",25000,"Petrol")
        dealership.addCar(car);
        const actual = dealership.showCarManufacturer();
        // Assert
        console.log("can show manufacturers",actual)
    });

    test('show car manufacturers', () => {
        audi = new Car("Audi",25000,"Petrol")
        bmw = new Car("BMW",35000,"Petrol")

        dealership.addCar(audi);
        dealership.addCar(bmw);

        const actual = dealership.findAllCarsByManufacturers("BMW");
        // Assert
        console.log("can show BMW",actual)
    });

    test('show car Values', () => {
        audi = new Car("Audi",25000,"Petrol")
        bmw = new Car("BMW",35000,"Petrol")

        dealership.addCar(audi);
        dealership.addCar(bmw);

        // Arrange
        const expected = 60000;
        //Act
        const actual = dealership.getAllValuesofCars();
        // Assert
        expect(actual).toBe(expected);
    });
}) 