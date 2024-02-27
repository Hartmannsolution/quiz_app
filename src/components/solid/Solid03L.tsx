// Example of a Solid Principle 3: Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.


// This code does NOT adhere to the Liskov Substitution Principle because the PrimaryButton and DangerButton components do not behave as expected when used in place of the Button component. 
// The PrimaryButton component has an additional alert when clicked, and the DangerButton component does not. 
// This violates the Liskov Substitution Principle
// The violation of the Liskov Substitution Principle occurs when the subclass or specialized component's additional behavior 
// changes the expected behavior of the application in a way that is unexpected or incompatible with its superclass or base component

// In the example below, the violation occurs because the PrimaryButton component introduces an additional behavior (displaying an alert message) 
// that is not present in the base Button component. 
// This change in behavior could lead to unexpected results if instances of PrimaryButton were used interchangeably with instances of Button without accounting for the alert message.
import React from 'react';

// Base Button component
const Button: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// Specific PrimaryButton component
const PrimaryButton: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => {
  const handleClick = () => {
    alert('Primary button clicked');
    onClick(); // Execute provided onClick handler
  };

  return <Button onClick={handleClick}>{children}</Button>;
};

// Specific DangerButton component
const DangerButton: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

// App component using buttons
const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Button onClick={handleClick}>Normal Button</Button>
      <PrimaryButton onClick={handleClick}>Primary Button</PrimaryButton>
      <DangerButton onClick={handleClick}>Danger Button</DangerButton>
    </div>
  );
};


// This example adheres to the Liskov Substitution Principle because 
// the PrimaryButton and DangerButton components behave as expected when used in place of the Button component.

// Base Button component
const Button2: React.FC<{ onClick: React.MouseEventHandler<HTMLButtonElement>, children: React.ReactNode, style?: React.CSSProperties}> = ({ onClick, children, style }) => {
  return <button onClick={onClick} style={style}>{children}</button>;
};

// Specific PrimaryButton component
const PrimaryButton2: React.FC<{ onClick: React.MouseEventHandler<HTMLButtonElement>, children: React.ReactNode }> = ({ onClick, children }) => {
  return <Button2 onClick={onClick} style={{ backgroundColor: 'blue', color: 'white' }}>{children}</Button2>;
};

// Specific DangerButton component
const DangerButton2: React.FC<{ onClick: React.MouseEventHandler<HTMLButtonElement>, children: React.ReactNode }> = ({ onClick, children }) => {
  return <Button2 onClick={onClick} style={{ backgroundColor: 'red', color: 'white' }}>{children}</Button2>;
};

// App component using buttons
const App2: React.FC = () => {
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked: ',evt.target);
  };

  return (
    <div>
    <h1>SOLID 03:</h1><h3>Livskov principle</h3>
      <Button2 onClick={(evt)=>handleClick(evt)}>Normal Button</Button2>
      <PrimaryButton2 onClick={handleClick}>Primary Button</PrimaryButton2>
      <DangerButton2 onClick={handleClick}>Danger Button</DangerButton2>
    </div>
  );
};

export default App2;
