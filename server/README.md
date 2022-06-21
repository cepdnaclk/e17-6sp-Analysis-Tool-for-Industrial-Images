## Setting up mysql-server on linux

### mysql server

- sudo apt install mysql-server
- sudo mysql_secure_installation

If unable to run the command try
 sudo mysql
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword';

then run mysql_secure_installation to setup password and mysql configurations
accordingly.

### Running mysql script file

- Enter mysql
- source /home/user/path_to_sql_file

### Setting up API

- create .env file
- include DB_USER and DB_PASSWORD
- npm install
- npm start (starts running on 'localhost:3001')

### Setting up webapp

- npm install
- npm start (starts running on 'localhost:3000')



## API Endpoints

### Machine

API endpoints accessed by machines.

#### POST

- for initial 
    /api/init
- for updates 
    /api/machines/{machine_id}
 

### Web app

API endpoints accessed by webapp.

#### GET

- /api/machines
- /api/machines/{machine_id}
- /api/molds
- /apt/molds/{mold_id}


## Database


### <b>machines</b>

| Field          | TYPE           | Example       |
|----------------|----------------|---------------|
| machineID      |VARCHAR(10)     | D02           |
| moldID         |VARCHAR(10)     | m002          |
| moldShots      |INT             | 50            |
| failedShots    |INT             | 3             |
| prodRate       |INT             | 1             |
| prod_start_date|DATE            | 2022-09-12    |
| prod_end_date  |DATE            | 2022-09-12    |

<br></br>

### <b> molds </b>

| Field          | TYPE           | Example       |
|----------------|----------------|---------------|
| moldID         |VARCHAR(10)     | m002          |
| monaNumber     |VARCHAR(255)    | mon121        |
| material       |VARCHAR(255)    | m_alloy       |
| moldMaker      |VARCHAR(255)    | china         |
