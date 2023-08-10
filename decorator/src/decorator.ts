// decorator design pattern example from Head first design pattern in Typescript

// Component interface
interface Beverage {
  cost(): number;
  description(): string;
}

// Concrete Component
class BaseBeverage implements Beverage {
  cost(): number {
    return 0; // Base cost
  }

  description(): string {
    return "Unknown Beverage";
  }
}

// Concrete Beverages
class Espresso extends BaseBeverage {
  cost(): number {
    return 1.99;
  }

  description(): string {
    return "Espresso";
  }
}

class HouseBlend extends BaseBeverage {
  cost(): number {
    return 0.89;
  }

  description(): string {
    return "House Blend Coffee";
  }
}

// Decorator abstract class
abstract class CondimentDecorator implements Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  abstract cost(): number;
  abstract description(): string;
}

// Concrete Decorators
class Milk extends CondimentDecorator {
  cost(): number {
    return this.beverage.cost() + 0.1;
  }

  description(): string {
    return this.beverage.description() + ", Milk";
  }
}

class Mocha extends CondimentDecorator {
  cost(): number {
    return this.beverage.cost() + 0.2;
  }

  description(): string {
    return this.beverage.description() + ", Mocha";
  }
}

let beverage: Beverage = new Espresso();
console.log(beverage.description(), "$" + beverage.cost());

beverage = new HouseBlend();
beverage = new Milk(beverage);
beverage = new Mocha(beverage);
console.log(beverage.description(), "$" + beverage.cost());
