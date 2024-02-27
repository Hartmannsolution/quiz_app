// The D in SOLID stands for the Dependency Inversion Principle. 
// This principle states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. 
// Additionally, abstractions should not depend on details, but rather details should depend on abstractions.
// Composition over inheritance is a design principle that suggests favoring object composition over class inheritance.
// Dependency injection is a technique in which an object receives other objects that it depends on.
// instead of using the new keyword to create an instance of a dependency within a class, the dependency is passed to the class via its constructor or a setter method as an interface type.

import React from 'react';

// Abstraction for UserRepository
interface IUserRepository {
  saveUser(user: User): void;
}

// Low-level module depending on abstraction
const UserRepository: React.FC<{ userRepository: IUserRepository }> = ({ userRepository }) => {
  const saveUser = (user: User): void => {
    userRepository.saveUser(user);
  };

  return (
    <div>
      <button onClick={() => saveUser({ name: "John" })}>Save User</button>
    </div>
  );
};

// High-level module depending on abstraction (Interface Type)
const UserService: React.FC<{ userRepository: IUserRepository }> = ({ userRepository }) => {
  return (
    <div>
      <UserRepository userRepository={userRepository} />
    </div>
  );
};

// Usage
const App: React.FC = () => {
  const userRepository: IUserRepository = {
    saveUser: (user) => console.log(`Saving user: ${user.name}`)
  };

  return (
    <div>
      <h1>SOLID 05:</h1>
      <h3>Dependency Inversion Principle (ISP)</h3>
      <UserService userRepository={userRepository} />
    </div>
  );
};

interface User {
  name: string;
}

export default App;
