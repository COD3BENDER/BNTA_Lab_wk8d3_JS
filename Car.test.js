const Car = require("./Car")

beforeEach(()=> {
    BMW = new Car("BMW",20000,"Petrol")
  })

describe('access properties of car', () =>{ 


    test('can set manufacturer', () => {
        // Arrange
        const expected = "Audi";
        // Act
        BMW.setManufacturer("Audi");
        const actual = BMW.getManufacturer();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can get manufacturer', () => {
        // Arrange
        const expected = "BMW";
        // Act
        const actual = BMW.getManufacturer();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can set price', () => {  
        // Arrange
        const expected = 30000;
        // Act
        BMW.setPrice(30000);
        const actual = BMW.getPrice();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can get price', () => { 
        // Arrange
        const expected = 20000;
        // Act
        const actual = BMW.getPrice();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can get engineType', () => { 
        // Arrange
        const expected = "Petrol";
        // Act
        const actual = BMW.getEngineType();
        // Assert
        expect(actual).toBe(expected);
    
    });

    test('can set engineType', () => {  
        // Arrange
        const expected = "Diesel";
        // Act
        BMW.setEngineType("Diesel");
        const actual = BMW.getEngineType();
        // Assert
        expect(actual).toBe(expected);
    
    });

}) 

