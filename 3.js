class Temperature {
    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    get getCelsius() {
        return this.celsius;
    }

    set setCelsius(value) {
        if (typeof value === 'number') {
            this.celsius = value;
            this.fahrenheit = (value * 9 / 5) + 32;
        } else {
            console.log('Invalid input.');
        }
    }
    get getFahrenheit() {
        return this.fahrenheit;
    }
    set setFahrenheit(value) {
        if (typeof value === 'number') {
            this.fahrenheit = value;
            this.celsius = (value - 32) * 5 / 9;
        } else {
            console.log('Invalid input.');
        }
    }
}
const temp = new Temperature();

console.log(`Initial Celsius: ${temp.getCelsius}°C`); 
console.log(`Initial Fahrenheit: ${temp.getFahrenheit}°F`);

temp.setCelsius = 25;
console.log(`Celsius: ${temp.getCelsius}°C`); 
console.log(`Fahrenheit: ${temp.getFahrenheit}°F`); 

temp.setFahrenheit = 68;
console.log(`Celsius: ${temp.getCelsius}°C`);
console.log(`Fahrenheit: ${temp.getFahrenheit}°F`); 

