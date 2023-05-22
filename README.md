### Please copy the .env.example file to .env and fill in the variables.
You can use the following command to do so:
```
$ cp .env.example .env
```
### To run the application, please run the following command:
```
$ docker-compose up --build -d
```
#### Install pre-commit hooks.
Please run the following command to do so:
```
$ pre-commit install
```
### To generate a secret key, please run the following command:
```
$ openssl rand -hex 32
```
