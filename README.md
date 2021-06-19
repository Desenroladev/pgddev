# PGDDEV

![](https://desenroladev.com.br/public/logo-180x180.png)

![](https://img.shields.io/github/stars/Desenroladev/pgddev.svg) ![](https://img.shields.io/github/forks/Desenroladev/pgddev.svg) ![](https://img.shields.io/github/issues/Desenroladev/pgddev.svg)

##Setup

####Installing pgddev

`$ npm i -g pgddev` or `$ yarn global add pgddev`

####Creating a new project
Creating a new project is quite simple with the PGDDEV. you can create a new PGDDEV project with the following commands in your OS terminal:

`$ pgddev new project-name`

####Setting up .env
For your PGDDEV project to work correctly you must configure the application .env as follows:

```.env
	DB_HOST=YOUR_DATABASE_HOST
	DB_DATABASE=YOUR_DATABASE_NAME
	DB_PASSWORD=THE__PASSWORD_OF_YOUR_DATBASE
	DB_USER=YOUR_DATABASE__USERNAME

```

##Avaliable commands
####Creating a DML
`$ pgddev dml table-name`

Creating a standard DML framework facilitates and standardizes the development process for any application, so much of the CRUD work will be abstracted.
#####Available instructions

| Instruction    | Functionality                                         |
| -------------- | ----------------------------------------------------- |
| -s or --schema | Specifies the schema                                  |
| -f or --folder | Specifies the folder where scripts will be generated. |
| --deploy       | Deploy DML                                            |

####Example
Create the DML structure in the database, with the specified schema, in the specified folder and deploy.

`pgddev dml table-name -s schema-name -f folder-path --deploy`

###Using DML
####Generated files

- dmlapi_table-name_j2r.sql
- dmlapi_table-name_r2j.sql
- dmlapi_table-name_merge.sql
- dmlapi_table-name_purge.sql
- dmlapi_table-name_select.sql

####Query examples

| Query                                                       | Description                                                                       |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `schema-name.dmlapi_table-name_j2r(payload::jsonb)`         | Generates a record in the exact format of the table from a JSON input.            |
| `schema-name.dmlapi_table-name_r2j(payload::jsonb)`         | Generates a JSON in the exact format of the table from a RECORD input.            |
| `schema-name.dmlapi_table-name_merge(payload::jsonb)`       | Generates a JSON in the exact format of the table from a RECORD input.            |
| `schema-name.dmlapi_table-name_purge(resource_id, user_id)` | Soft delete a record in a table from the resource id and user id that deleted it. |
| `schema-name.dmlapi_table-name_select(resource_id)`         | Returns record from id.                                                           |

###End
