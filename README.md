# React Login Project

##Description
This project is a React-based login system that utilizes EntityFramework and Microsoft Identity for credential management. It uses SQL Server as the database to store user authentication data and roles. The goal of this project is to provide a secure and efficient authentication system for web applications.

## Features
- User authentication with Microsoft Identity
- Role-based authorization
- Secure password storage and handling
- Responsive design for various devices
- SQL Server integration for robust data management

## Technologies
- ReactJS
- EntityFramework
- Microsoft Identity
- SQL Server

## Installation

### Prerequisites
- Node.js (20.16.0)
- .NET Core SDK (8.0)
- SQL Server (2022 - express)

### Setup
1. Clone the repository:
   git clone https://github.com/GaboDot/ReactIdentityAuth.git
2. Navigate to the project directory:
   cd ReactIdentityAuth/reactidentityauth.client
3. Install dependencies:
   npm install
4. Set up the database:
   - Ensure SQL Server is running.
   - Create a SQL Database named: ReactDB (or any other name) or restore the DBBackup in the repo into your local SQL Server instance
   - Update the connection string in: ReactIdentityAuth.Server/appsettings.json ⇨ ConnectionStrings ⇨ ApplicationDbContextConnection

## Running the application
1. Open the solution file into Visual Studio
2. Start with/without debugging
3. It will launch 2 different browser windows:
   - https://localhost:5173/login ⇨ This is the React application
   - https://localhost:7177/swagger/index.html ⇨ This is the .Net backend services (swagger)
![image](https://github.com/user-attachments/assets/1430c78c-dd95-4f90-94dd-a69863882c8c)
![image](https://github.com/user-attachments/assets/c9e5db9b-23eb-40dd-a718-639425adec44)

## Usage
- Register a new user account or log in with an existing account.
  - Existing accounts:
    - test@test.com  | T3st.88
    - test1@test.com | T3st.88/
    - test2@test.com | T3st.88/
- Navigate through the application to access role-based features and data.

# Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues to improve the functionality or fix bugs in the project.

# License
Open-source project for totally free use for whoever needs it.

# Acknowledgments
- Thanks to the contributors who have helped with this project.
- Special thanks to the React and .NET communities for their support and resources.
