# SQL vs NOSQL Databases
## SQL
- Relational Database Management System (RDBMS)
- Structured Query Language (SQL) for defining and manipulating data
- Predefined schema with tables, rows, and columns
- Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server
- ACID (Atomicity, Consistency, Isolation, Durability) compliance for transactions
    - atomicity: all operations in a transaction are completed or none are
    - consistency: ensures that a transaction can only bring the database from one valid state to another
    - isolation: ensures that concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially
    - durability: once a transaction has been committed, it will remain so, even in the event of a system failure


## NoSQL
- Non-relational or distributed database system
- Flexible schema design, allowing for unstructured or semi-structured data
- Various data models: document, key-value, column-family, graph
- Examples: MongoDB (document), Redis (key-value), Cassandra (column-family), Neo4j (graph)
- BASE-like properties (Basically Available, Soft state, Eventual consistency)
    - basically available: the system guarantees availability
    - soft state: the state of the system may change over time, even without input
    - eventual consistency: the system will become consistent over time, given that the system doesn't receive input during that time


# CAP Theorem
- it says that a distributed data store can only guarantee two out of the following three properties at the same time:
- Consistency: Every read receives the most recent write or an error
- Availability: Every request receives a (non-error) response, without guarantee that it contains the most recent write
- Partition Tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes
- In the presence of a network partition, a distributed system must choose between consistency and availability


# mongoDB
- can be use for any language
- NoSQL database


# steps to start mongoDB locally from vs code
- create a 'data' folder inside your project folder
- run the command: mongod --dbpath=data
- now go to browser and type http://localhost:27017
- it will show you the message: It looks like you are trying to access MongoDB over HTTP on the native driver port.

# Basic MongoDB Commands



# mongoshell
what is mongoshell?
- it is a command line interface to interact with mongoDB database
how to start mongoshell?
- open a new terminal window
- type the command: mongosh
- it will connect to the mongoDB server running on localhost:27017 by default
- now we make a collection
- inside collection we make a document
- internally mongoDB uses BSON (Binary JSON) to store data
- we have data types in BSON like string, number, boolean, array, object, null, date, etc
- to see all collections: show collections;
- to see all databases: show dbs;
- to switch to a database: use <database_name>; if the database does not exist, it will be created when you insert the first document
- to see current database: db
- to create a collection: db.createCollection('collection_name');
- to insert a document: db.collection_name.insertOne({key: value, key: value});
- to insert multiple documents: db.collection_name.insertMany([{key: value}, {key: value}]);
- to find all documents in a collection: db.collection_name.find()
- find give a 20 documents at a time, to see more type: it

- to find one document in a collection: db.collection_name.findOne();
-

