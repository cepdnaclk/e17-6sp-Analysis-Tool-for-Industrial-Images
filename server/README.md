Setting up mysql-server on linux

- sudo apt install mysql-server
- sudo mysql_secure_installation

If unable to run the command try
	sudo mysql
	ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword';

	
then run mysql_secure_installation to setup password and mysql configurations
accordingly.


Running mysql script file
- Enter mysql
- source /home/user/path_to_sql_file

Setting up API 
- create .env file 
- include DB_USER and DB_PASSWORD
- npm install 
- npm start (starts running on 'localhost:3001')

Setting up webapp 
- npm install 
- npm start (starts running on 'localhost:3000')

