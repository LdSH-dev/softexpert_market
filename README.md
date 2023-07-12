# SoftExpert System

This is the README file for the SoftExpert System project. The project consists of a web application built with PHP and Vue.js, using Docker for containerization.

## Requirements

To run the SoftExpert System, you need to have Docker installed on your machine. You can download and install Docker from the official website: [https://www.docker.com/](https://www.docker.com/)

## Getting Started

1. Clone the repository to your local machine:

git clone https://github.com/ldsh-dev/softexpert.git

css
Copy code

2. Navigate to the project directory:

cd softexpert

sql
Copy code

3. Start the containers using Docker Compose:

docker-compose up --build

markdown
Copy code

This will build and start the necessary containers for the application, including the PostgreSQL database, PHP server, and Vue.js development server.

4. Once the containers are up and running, you can access the SoftExpert System in your browser:

- Web Application: [http://localhost:8000](http://localhost:8000)
- Vue.js Development Server: [http://localhost:8080](http://localhost:8080)

## Stopping the Application

To stop the application and shut down the containers, you can use the following command:

docker-compose down

vbnet
Copy code

## Additional Notes

- The PHP server is running on port 8000, and the Vue.js development server is running on port 8080. Make sure these ports are not in use by other applications on your machine.

- The PostgreSQL database is running on port 5432. You can connect to the database using any PostgreSQL client with the following connection details:
  - Host: localhost
  - Port: 5432
  - User: admin
  - Password: 123123qwe#@#
  - Database: softexpert_market

- The project files are mounted into the respective containers, allowing you to make changes to the code and see the updates reflected in real-time.

- Make sure to update the configuration files in the project (such as database connection settings) as per your requirements.

That's it! You should now have the SoftExpert System up and running. If you encounter any issues or have any questions, feel free to contact us.

Enjoy using the SoftExpert System!