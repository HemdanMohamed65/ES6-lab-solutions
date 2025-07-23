export class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
    this.name = name;
  }

  area() 
  {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() 
  {
    throw new Error("Method 'perimeter()' must be implemented.");
  }

  parameters() 
  {
    throw new Error("Method 'parameters()' must be implemented.");
  }

  display() 
  {
    console.log(`Shape: ${this.name}`);
    console.log(`Area: ${this.area()}`);
    console.log(`Perimeter: ${this.perimeter()}`);
    console.log(`Parameters:`, this.parameters());
    console.log('-------------------------');
  }
}

export class Rectangle extends Shape {
  constructor(width, height)
 {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() 
  {
    return this.width * this.height;
  }

  perimeter() 
  {
    return 2 * (this.width + this.height);
  }

  parameters()
 {
    return { width: this.width, height: this.height };
  }
}

export class Square extends Shape {
  constructor(side) 
  {
    super("Square");
    this.side = side;
  }

  area()
 {
    return this.side ** 2;
  }

  perimeter()
 {
    return 4 * this.side;
  }

  parameters()
 {
    return { side: this.side };
  }
}

export class Circle extends Shape {
  constructor(radius) 
  {
    super("Circle");
    this.radius = radius;
  }

  area()
 {
    return Math.PI * this.radius ** 2;
  }

  perimeter()
 {
    return 2 * Math.PI * this.radius;
  }

  parameters()
 {
    return { radius: this.radius };
  }
}
