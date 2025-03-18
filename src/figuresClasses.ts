export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: string = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // Rounded to hundredths
  }
}

export class Circle implements Figure {
  color: string;

  shape: string = 'circle';

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100; // Rounded to hundredths
  }
}

export class Rectangle implements Figure {
  color: string;

  shape: string = 'rectangle';

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // Rounded to hundredths
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  if (figure instanceof Rectangle) {
    return `A ${figure.color} rectangle - ${area}`;
  } else if (figure instanceof Circle) {
    return `A ${figure.color} circle - ${area}`;
  } else if (figure instanceof Triangle) {
    return `A ${figure.color} triangle - ${area}`;
  }

  return typeof figure;
}
