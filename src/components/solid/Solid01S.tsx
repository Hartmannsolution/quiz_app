import React, { useState, useEffect } from "react";
// The Single Responsibility Principle (SRP) of SOLID, states that a class (or in this case, a component) should have only one reason to change. In the context of React functional components, this means that each component should ideally have a single responsibility or concern.
// By separating the concerns of rendering and data fetching into separate components, we adhere to the Single Responsibility Principle.
// If, for example, the data fetching logic needs to change, we only need to update UserListContainer, keeping the rendering logic within UserList untouched.
// We are defining a User interface to represent the shape of a user object. This improves type safety when working with user data.
// // The UserListProps interface defines the props expected by the UserList component.
// The UserList component now explicitly specifies its props as UserListProps.
// We've annotated the users state variable in UserListContainer with the User[] type to indicate that it holds an array of User objects.
// The data parameter in the then callback of the fetch call is annotated with the User[] type to ensure type safety when setting the users state.
// The React.FC type is used for functional components, providing type safety for props.
// Define the User type for better type safety
interface User {
  id: number;
  name: string;
}

// Props for UserList component
interface UserListProps {
  users: User[];
}

// First Component responsible for rendering user list
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ listStyleType: "none" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Second Component wrapping the first component, responsible for fetching user data
const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulating data fetching from an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
    <h1>SOLID 01:</h1><h3> Single Responsibility Principle (SRP)</h3>
      <UserList users={users} />;
    </>
  );
};

export default UserListContainer;
