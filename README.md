# User Management Dashboard

A web application to manage users, including functionalities to view, add, edit, and delete user details. This application uses the JSONPlaceholder API for demonstration purposes of user data.

## Features

- **View Users**: Display a list of users fetched from the JSONPlaceholder API.
- **Add User**: Create a new user with fields for First Name, Last Name, Email, and Department.
- **Edit User**: Update the details of an existing user.
- **Delete User**: Remove a user from the list.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open your browser and go to:**

   ```
   http://localhost:3000
   ```

## API Endpoints

The application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for user management operations.

- **Get Users**: `GET https://jsonplaceholder.typicode.com/users`
- **Add User**: `POST https://jsonplaceholder.typicode.com/users`
- **Edit User**: `PUT https://jsonplaceholder.typicode.com/users/{id}`
- **Delete User**: `DELETE https://jsonplaceholder.typicode.com/users/{id}`

## Components

- **UserForm**: A form to create new users.
- **AllUsers**: A component to display all users and allow for deletion and editing.
- **EditUser**: A form to edit existing user details.

## Error Handling

- The application handles API request errors and displays appropriate error messages using React Toastify.

## Bonus Features

- Client-side validation for the user input form.
- Responsive design for various screen sizes.

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please reach out to:

- **ASHVARY GIDIAN**: [ashvarygidian996@gmail.com](mailto:ashvarygidian996@gmail.com)
- **GitHub**: [https://github.com/Ashvary1996/](https://github.com/Ashvary1996)
