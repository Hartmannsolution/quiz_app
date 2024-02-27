// The Open/Closed Principle (OCP) states that software entities (such as classes, modules, functions, etc.) should be open for extension but closed for modification. 
// In other words, you should be able to extend the behavior of a module without modifying its source code.

// We define factory functions (createRectangle, createCircle, createTriangle) to create instances of shapes, which simply return objects conforming to the Shape interface.
// We register these factory functions with the shape registry.
// The ShapeAreaCalculator component remains the same, utilizing the registry to calculate the area based on the shape type.

// This approach adheres to the Open/Closed Principle by allowing for extension without modification of existing code. 


import React from 'react';

// Define the Shape interface
interface Shape {
  calculateArea(): number;
}

// Registry of shapes
const shapeRegistry: Record<string, () => Shape> = {};

// Function to register a shape factory by a name
function registerShape(type: string, shapeFactory: () => Shape) {
  shapeRegistry[type] = shapeFactory;
}

// Calculate area for a given shape type object
function calculateAreaByType(type: string): number {
  const shape = shapeRegistry[type]?.(); // Get shape factory and create shape object
  if (shape) {
    return shape.calculateArea();
  }
  return NaN; // Handle unsupported shape types
}


// Implementing a Rectangle shape
const createRectangle = (width: number, height: number): Shape => ({
  calculateArea: () => width * height,
});

// Implementing a Circle shape
const createCircle = (radius: number): Shape => ({
  calculateArea: () => Math.PI * Math.pow(radius, 2),
});


// Implementing a Triangle shape
const createTriangle = (base: number, height: number): Shape => ({
  calculateArea: () => (base * height) / 2,
});

// TESTING ABOVE CODE:

// Registering the Rectangle shape
registerShape('Rectangle1', () => createRectangle(5, 10));

// Registering the Rectangle shape
registerShape('Rectangle2', () => createRectangle(10, 20));

// Registering the Circle shape
registerShape('Circle1', () => createCircle(7));

// Registering the Triangle shape
registerShape('Triangle1', () => createTriangle(5, 8));

// ShapeAreaCalculator component
const ShapeAreaCalculator: React.FC<{ shapeType: string }> = ({ shapeType }) => {
  const area = calculateAreaByType(shapeType);
  
  return (
    <div>
      {isNaN(area) ? (
        <div>Unsupported shape</div>
      ) : (
        <div>Area of {shapeType}: {area}</div>
      )}
    </div>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
    <h1>SOLID 02:</h1><h3>Open / Closed principle</h3>
      <ShapeAreaCalculator shapeType="Rectangle1" />
      <ShapeAreaCalculator shapeType="Rectangle2" />
      <ShapeAreaCalculator shapeType="Circle1" />
      <ShapeAreaCalculator shapeType="Triangle1" />
      <ShapeAreaCalculator shapeType="Pentagon" />
    </div>
  );
};

export default App;

// Doing the same without adhering to the Open/Closed Principle:


// Implementing a Rectangle shape
const Rectangle: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const area = width * height;
  return <div>Area of Rectangle: {area}</div>;
};

// Implementing a Circle shape component
const Circle: React.FC<{ radius: number }> = ({ radius }) => {
  const area = Math.PI * Math.pow(radius, 2);
  return <div>Area of Circle: {area}</div>;
};

// Implementing a Triangle shape component
const Triangle: React.FC<{ base: number; height: number }> = ({ base, height }) => {
  const area = (base * height) / 2;
  return <div>Area of Triangle: {area}</div>;
};

// ShapeAreaCalculator component
// TODO: This function needs to be modified every time a new shape is added, which violates the Open/Closed Principle.
const ShapeAreaCalculator2: React.FC<{ shapeType: string }> = ({ shapeType }) => {
  switch (shapeType) {
    case 'Rectangle':
      return <Rectangle width={5} height={10} />;
    case 'Circle':
      return <Circle radius={7} />;
    case 'Triangle':
      return <Triangle base={5} height={8} />;
    default:
      return <div>Unsupported shape</div>;
  }
};

// Example usage
const App2: React.FC = () => {
  return (
    <div>
      <ShapeAreaCalculator2 shapeType="Rectangle" />
      <ShapeAreaCalculator2 shapeType="Circle" />
      <ShapeAreaCalculator2 shapeType="Triangle" />
      <ShapeAreaCalculator2 shapeType="Pentagon" />
    </div>
  );
};

// export default App2;

