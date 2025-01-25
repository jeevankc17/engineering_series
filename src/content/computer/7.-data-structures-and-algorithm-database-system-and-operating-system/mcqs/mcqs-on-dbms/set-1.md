# set-1

#### 1. Which of the following is a property of a relational database?

1. Data is stored in tables
2. Data is stored in a hierarchical structure
3. Data is stored in a network structure
4. Data is stored in a linked list

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Data is stored in tables

**Explanation:**

* **Relational Database:** A relational database organizes data into one or more tables (or relations) where each table consists of rows and columns. Each row represents a record, and each column represents a field or attribute.
* **Tables:** The primary structure in a relational database is the table, which is why option 1 is correct.
* **Hierarchical and Network Structures:** These are properties of other types of databases, such as hierarchical databases and network databases, respectively.
* **Linked List:** This is a data structure used in programming, not a property of relational databases.
* **Conclusion:** The correct property of a relational database is that data is stored in tables.

</details>

#### 2. What is the primary key in a relational database?

1. A key that uniquely identifies each record in a table
2. A key that is used to join two tables
3. A key that is used to sort records in a table
4. A key that is used to encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A key that uniquely identifies each record in a table

**Explanation:**

* **Primary Key:** A primary key is a column or a set of columns in a table that uniquely identifies each row in that table. It ensures that no two rows have the same value in the primary key column(s).
* **Uniqueness:** The primary key must contain unique values and cannot contain NULL values.
* **Joining Tables:** While primary keys can be used to join tables, their primary purpose is to uniquely identify records within a single table.
* **Sorting and Encryption:** Sorting and encryption are not the primary functions of a primary key.
* **Conclusion:** The primary key is used to uniquely identify each record in a table.

</details>

#### 3. What is the purpose of a foreign key in a relational database?

1. To uniquely identify each record in a table
2. To establish a relationship between two tables
3. To sort records in a table
4. To encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 2. To establish a relationship between two tables

**Explanation:**

* **Foreign Key:** A foreign key is a column or a set of columns in a table that establishes a link between data in two tables. It is used to enforce referential integrity between the tables.
* **Relationship:** The foreign key in one table refers to the primary key in another table, creating a relationship between the two tables.
* **Uniqueness:** Unlike a primary key, a foreign key does not need to be unique and can contain NULL values.
* **Sorting and Encryption:** Sorting and encryption are not the purposes of a foreign key.
* **Conclusion:** The purpose of a foreign key is to establish a relationship between two tables.

</details>

#### 4. What is normalization in a relational database?

1. The process of organizing data to reduce redundancy and improve data integrity
2. The process of encrypting data to ensure security
3. The process of sorting data in a specific order
4. The process of compressing data to save storage space

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The process of organizing data to reduce redundancy and improve data integrity

**Explanation:**

* **Normalization:** Normalization is the process of organizing the data in the database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, more manageable tables and defining relationships between them.
* **Redundancy:** By reducing redundancy, normalization helps in minimizing the chances of data anomalies such as insertion, update, and deletion anomalies.
* **Data Integrity:** Normalization ensures that the data is consistent and accurate by enforcing constraints and relationships between tables.
* **Encryption, Sorting, and Compression:** These are not part of the normalization process.
* **Conclusion:** Normalization is the process of organizing data to reduce redundancy and improve data integrity.

</details>

#### 5. What is the first normal form (1NF) in database normalization?

1. A table that contains no repeating groups or arrays
2. A table that has a composite primary key
3. A table that has no foreign keys
4. A table that is fully normalized

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A table that contains no repeating groups or arrays

**Explanation:**

* **First Normal Form (1NF):** A table is in 1NF if it satisfies the following conditions:
  * Each column contains atomic (indivisible) values.
  * Each column contains values of the same type.
  * Each column has a unique name.
  * The order of columns and rows does not matter.
* **Repeating Groups or Arrays:** 1NF requires that a table should not contain repeating groups or arrays. Each cell should contain a single value, not a list or set of values.
* **Composite Primary Key:** While a table can have a composite primary key, this is not a requirement for 1NF.
* **Foreign Keys:** The presence or absence of foreign keys is not relevant to 1NF.
* **Fully Normalized:** A table in 1NF is not necessarily fully normalized; it is just the first step in the normalization process.
* **Conclusion:** A table is in 1NF if it contains no repeating groups or arrays.

</details>

#### 6. What is the second normal form (2NF) in database normalization?

1. A table that is in 1NF and all non-key attributes are fully functionally dependent on the primary key
2. A table that has no foreign keys
3. A table that is fully normalized
4. A table that contains no repeating groups or arrays

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A table that is in 1NF and all non-key attributes are fully functionally dependent on the primary key

**Explanation:**

* **Second Normal Form (2NF):** A table is in 2NF if it satisfies the following conditions:
  * It is already in 1NF.
  * All non-key attributes (columns that are not part of the primary key) are fully functionally dependent on the primary key.
* **Functional Dependency:** This means that every non-key attribute must depend on the entire primary key, not just a part of it. For example, if the primary key is composite (consisting of multiple columns), no non-key attribute should depend on only one part of the composite key.
* **Foreign Keys:** The presence or absence of foreign keys is not relevant to 2NF.
* **Fully Normalized:** A table in 2NF is not necessarily fully normalized; it is just the second step in the normalization process.
* **Repeating Groups or Arrays:** This condition is already satisfied in 1NF.
* **Conclusion:** A table is in 2NF if it is in 1NF and all non-key attributes are fully functionally dependent on the primary key.

</details>

#### 7. What is the third normal form (3NF) in database normalization?

1. A table that is in 2NF and has no transitive dependencies
2. A table that has no foreign keys
3. A table that is fully normalized
4. A table that contains no repeating groups or arrays

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A table that is in 2NF and has no transitive dependencies

**Explanation:**

* **Third Normal Form (3NF):** A table is in 3NF if it satisfies the following conditions:
  * It is already in 2NF.
  * It has no transitive dependencies. A transitive dependency occurs when a non-key attribute depends on another non-key attribute, rather than directly on the primary key.
* **Transitive Dependency:** For example, if a table has columns $$A$$, $$B$$, and $$C$$, where $$A$$ is the primary key, and $$B$$ depends on $$A$$, and $$C$$ depends on $$B$$, then $$C$$ is transitively dependent on $$A$$. To achieve 3NF, we must remove such dependencies.
* **Foreign Keys:** The presence or absence of foreign keys is not relevant to 3NF.
* **Fully Normalized:** A table in 3NF is not necessarily fully normalized; it is just the third step in the normalization process.
* **Repeating Groups or Arrays:** This condition is already satisfied in 1NF.
* **Conclusion:** A table is in 3NF if it is in 2NF and has no transitive dependencies.

</details>

#### 8. What is Boyce-Codd Normal Form (BCNF)?

1. A table that is in 3NF and every determinant is a candidate key
2. A table that has no foreign keys
3. A table that is fully normalized
4. A table that contains no repeating groups or arrays

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A table that is in 3NF and every determinant is a candidate key

**Explanation:**

* **Boyce-Codd Normal Form (BCNF):** A table is in BCNF if it satisfies the following conditions:
  * It is already in 3NF.
  * Every determinant (a column or set of columns that functionally determines another column) must be a candidate key. A candidate key is a column or set of columns that can uniquely identify a row in the table.
* **Determinant:** For example, if a table has columns $$A$$, $$B$$, and $$C$$, and $$A$$ determines $$B$$, then $$A$$ must be a candidate key for the table to be in BCNF.
* **Foreign Keys:** The presence or absence of foreign keys is not relevant to BCNF.
* **Fully Normalized:** A table in BCNF is considered fully normalized in most cases, but there are higher normal forms like 4NF and 5NF.
* **Repeating Groups or Arrays:** This condition is already satisfied in 1NF.
* **Conclusion:** A table is in BCNF if it is in 3NF and every determinant is a candidate key.

</details>

#### 9. What is the purpose of an index in a database?

1. To speed up data retrieval operations
2. To encrypt data for security
3. To sort data in a specific order
4. To compress data to save storage space

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To speed up data retrieval operations

**Explanation:**

* **Index:** An index is a database object that improves the speed of data retrieval operations on a table. It works similarly to an index in a book, allowing the database to quickly locate rows based on the values in certain columns.
* **Data Retrieval:** When a query is executed, the database can use the index to quickly find the rows that match the query conditions, rather than scanning the entire table. This reduces the time complexity of search operations from $$O(n)$$ to $$O(\log n)$$ or better, depending on the type of index.
* **Encryption, Sorting, and Compression:** These are not the primary purposes of an index.
* **Conclusion:** The purpose of an index is to speed up data retrieval operations.

</details>

#### 10. What is the time complexity of searching for a record in a table with a B-tree index?

1. $$O(\log n)$$
2. $$O(n)$$
3. $$O(n \log n)$$
4. $$O(1)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$O(\log n)$$

**Explanation:**

* **B-tree Index:** A B-tree is a self-balancing tree data structure that maintains sorted data and allows for efficient search, insertion, and deletion operations. It is commonly used in databases to implement indexes.
* **Search Operation:** In a B-tree, the search operation has a time complexity of $$O(\log n)$$, where $$n$$ is the number of records in the table. This is because the height of the tree is logarithmic relative to the number of nodes.
* **Efficiency:** The logarithmic time complexity makes B-tree indexes highly efficient for searching large datasets.
* **Other Options:** $$O(n)$$, $$O(n \log n)$$, and $$O(1)$$ are not correct for B-tree search operations.
* **Conclusion:** The time complexity of searching for a record in a table with a B-tree index is $$O(\log n)$$.

</details>

#### 11. What is a composite key in a relational database?

1. A key that consists of two or more columns to uniquely identify a record
2. A key that is used to join two tables
3. A key that is used to sort records in a table
4. A key that is used to encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A key that consists of two or more columns to uniquely identify a record

**Explanation:**

* **Composite Key:** A composite key is a combination of two or more columns in a table that together uniquely identify a record. No single column in the composite key can uniquely identify the record on its own.
* **Uniqueness:** The combination of columns in the composite key ensures that each record in the table is unique.
* **Joining Tables:** While composite keys can be used to join tables, their primary purpose is to uniquely identify records within a single table.
* **Sorting and Encryption:** Sorting and encryption are not the purposes of a composite key.
* **Conclusion:** A composite key consists of two or more columns to uniquely identify a record.

</details>

#### 12. What is a candidate key in a relational database?

1. A column or set of columns that can uniquely identify a record in a table
2. A key that is used to join two tables
3. A key that is used to sort records in a table
4. A key that is used to encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A column or set of columns that can uniquely identify a record in a table

**Explanation:**

* **Candidate Key:** A candidate key is a column or set of columns that can uniquely identify a record in a table. A table can have multiple candidate keys, but only one of them is chosen as the primary key.
* **Uniqueness:** Each candidate key must contain unique values and cannot contain NULL values.
* **Joining Tables:** While candidate keys can be used to join tables, their primary purpose is to uniquely identify records within a single table.
* **Sorting and Encryption:** Sorting and encryption are not the purposes of a candidate key.
* **Conclusion:** A candidate key is a column or set of columns that can uniquely identify a record in a table.

</details>

#### 13. What is the difference between a primary key and a unique key?

1. A primary key cannot contain NULL values, while a unique key can contain one NULL value
2. A primary key is used to join tables, while a unique key is used to sort records
3. A primary key is automatically indexed, while a unique key is not
4. A primary key can contain duplicate values, while a unique key cannot

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A primary key cannot contain NULL values, while a unique key can contain one NULL value

**Explanation:**

* **Primary Key:** A primary key is a column or set of columns that uniquely identifies each record in a table. It cannot contain NULL values, and there can be only one primary key in a table.
* **Unique Key:** A unique key is a column or set of columns that ensures all values in the column(s) are unique. Unlike a primary key, a unique key can contain one NULL value (in some databases, multiple NULL values are allowed).
* **Joining Tables:** Both primary keys and unique keys can be used to join tables, but this is not the primary difference between them.
* **Indexing:** Both primary keys and unique keys are automatically indexed in most databases.
* **Duplicate Values:** Neither primary keys nor unique keys can contain duplicate values.
* **Conclusion:** The main difference is that a primary key cannot contain NULL values, while a unique key can contain one NULL value.

</details>

#### 14. What is a foreign key constraint in a relational database?

1. A constraint that ensures referential integrity between two tables
2. A constraint that ensures all values in a column are unique
3. A constraint that ensures all values in a column are not NULL
4. A constraint that ensures data is encrypted

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A constraint that ensures referential integrity between two tables

**Explanation:**

* **Foreign Key Constraint:** A foreign key constraint is used to enforce referential integrity between two tables. It ensures that the value in the foreign key column(s) of one table matches a value in the primary key column(s) of another table.
* **Referential Integrity:** This means that you cannot insert a value in the foreign key column(s) that does not exist in the referenced primary key column(s). It also prevents the deletion of a record in the referenced table if there are dependent records in the referencing table.
* **Uniqueness and NULL:** These are properties of primary keys and unique keys, not foreign key constraints.
* **Encryption:** Foreign key constraints are not related to data encryption.
* **Conclusion:** A foreign key constraint ensures referential integrity between two tables.

</details>

#### 15. What is a self-referencing foreign key?

1. A foreign key that references the primary key of the same table
2. A foreign key that references the primary key of another table
3. A foreign key that is used to sort records in a table
4. A foreign key that is used to encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A foreign key that references the primary key of the same table

**Explanation:**

* **Self-Referencing Foreign Key:** A self-referencing foreign key is a foreign key that references the primary key of the same table. This is often used in hierarchical data structures, such as organizational charts or category trees.
* **Example:** In an employee table, each employee might have a manager who is also an employee. The "manager\_id" column would be a foreign key that references the "employee\_id" column in the same table.
* **Referencing Another Table:** This is the typical use of a foreign key, but it is not self-referencing.
* **Sorting and Encryption:** These are not related to self-referencing foreign keys.
* **Conclusion:** A self-referencing foreign key references the primary key of the same table.

</details>

#### 16. What is a join in SQL?

1. A clause used to combine rows from two or more tables based on a related column
2. A clause used to sort records in a table
3. A clause used to encrypt data in a table
4. A clause used to delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A clause used to combine rows from two or more tables based on a related column

**Explanation:**

* **Join:** A join is an SQL clause used to combine rows from two or more tables based on a related column between them. The most common types of joins are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.
* **Combining Rows:** Joins allow you to retrieve data from multiple tables in a single query by matching rows based on the values in the related columns.
* **Sorting, Encryption, and Deletion:** These are not the purposes of a join.
* **Conclusion:** A join is used to combine rows from two or more tables based on a related column.

</details>

#### 17. What is an INNER JOIN in SQL?

1. A join that returns only the rows that have matching values in both tables
2. A join that returns all rows from the left table and the matched rows from the right table
3. A join that returns all rows from the right table and the matched rows from the left table
4. A join that returns all rows from both tables, with NULLs where there are no matches

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A join that returns only the rows that have matching values in both tables

**Explanation:**

* **INNER JOIN:** An INNER JOIN returns only the rows that have matching values in both tables. If there is no match, the row is not included in the result set.
* **Matching Values:** For example, if you have two tables, "Orders" and "Customers," an INNER JOIN on the "customer\_id" column will return only the rows where there is a matching "customer\_id" in both tables.
* **LEFT JOIN, RIGHT JOIN, FULL JOIN:** These are other types of joins that return different sets of rows.
* **Conclusion:** An INNER JOIN returns only the rows that have matching values in both tables.

</details>

#### 18. What is a LEFT JOIN in SQL?

1. A join that returns all rows from the left table and the matched rows from the right table
2. A join that returns only the rows that have matching values in both tables
3. A join that returns all rows from the right table and the matched rows from the left table
4. A join that returns all rows from both tables, with NULLs where there are no matches

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A join that returns all rows from the left table and the matched rows from the right table

**Explanation:**

* **LEFT JOIN:** A LEFT JOIN returns all rows from the left table and the matched rows from the right table. If there is no match, the result set will contain NULL values for the columns from the right table.
* **Example:** If you have two tables, "Orders" and "Customers," a LEFT JOIN on the "customer\_id" column will return all rows from the "Orders" table and the matching rows from the "Customers" table. If an order does not have a matching customer, the customer columns will contain NULL.
* **INNER JOIN, RIGHT JOIN, FULL JOIN:** These are other types of joins that return different sets of rows.
* **Conclusion:** A LEFT JOIN returns all rows from the left table and the matched rows from the right table.

</details>

#### 19. What is a RIGHT JOIN in SQL?

1. A join that returns all rows from the right table and the matched rows from the left table
2. A join that returns only the rows that have matching values in both tables
3. A join that returns all rows from the left table and the matched rows from the right table
4. A join that returns all rows from both tables, with NULLs where there are no matches

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A join that returns all rows from the right table and the matched rows from the left table

**Explanation:**

* **RIGHT JOIN:** A RIGHT JOIN returns all rows from the right table and the matched rows from the left table. If there is no match, the result set will contain NULL values for the columns from the left table.
* **Example:** If you have two tables, "Orders" and "Customers," a RIGHT JOIN on the "customer\_id" column will return all rows from the "Customers" table and the matching rows from the "Orders" table. If a customer does not have any orders, the order columns will contain NULL.
* **INNER JOIN, LEFT JOIN, FULL JOIN:** These are other types of joins that return different sets of rows.
* **Conclusion:** A RIGHT JOIN returns all rows from the right table and the matched rows from the left table.

</details>

#### 20. What is a FULL JOIN in SQL?

1. A join that returns all rows from both tables, with NULLs where there are no matches
2. A join that returns only the rows that have matching values in both tables
3. A join that returns all rows from the left table and the matched rows from the right table
4. A join that returns all rows from the right table and the matched rows from the left table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A join that returns all rows from both tables, with NULLs where there are no matches

**Explanation:**

* **FULL JOIN:** A FULL JOIN returns all rows from both tables, with NULLs in the columns where there are no matches. It combines the results of both LEFT JOIN and RIGHT JOIN.
* **Example:** If you have two tables, "Orders" and "Customers," a FULL JOIN on the "customer\_id" column will return all rows from both tables. If an order does not have a matching customer, the customer columns will contain NULL, and if a customer does not have any orders, the order columns will contain NULL.
* **INNER JOIN, LEFT JOIN, RIGHT JOIN:** These are other types of joins that return different sets of rows.
* **Conclusion:** A FULL JOIN returns all rows from both tables, with NULLs where there are no matches.

</details>

#### 21. What is a Cartesian product in SQL?

1. The result of a CROSS JOIN, which combines each row of the first table with each row of the second table
2. The result of an INNER JOIN, which combines only matching rows from both tables
3. The result of a LEFT JOIN, which combines all rows from the left table with matching rows from the right table
4. The result of a RIGHT JOIN, which combines all rows from the right table with matching rows from the left table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The result of a CROSS JOIN, which combines each row of the first table with each row of the second table

**Explanation:**

* **Cartesian Product:** A Cartesian product is the result of a CROSS JOIN, which combines each row of the first table with each row of the second table. The number of rows in the result set is equal to the product of the number of rows in the two tables.
* **Example:** If Table A has 3 rows and Table B has 4 rows, the Cartesian product will have $$3 \times 4 = 12$$ rows.
* **INNER JOIN, LEFT JOIN, RIGHT JOIN:** These joins do not produce a Cartesian product; they only return rows that meet specific conditions.
* **Conclusion:** A Cartesian product is the result of a CROSS JOIN, which combines each row of the first table with each row of the second table.

</details>

#### 22. What is a subquery in SQL?

1. A query nested inside another query
2. A query that returns all rows from a table
3. A query that sorts records in a table
4. A query that encrypts data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A query nested inside another query

**Explanation:**

* **Subquery:** A subquery is a query that is nested inside another query. It can be used in SELECT, INSERT, UPDATE, or DELETE statements to perform operations based on the results of the subquery.
*   **Example:** A subquery can be used to find all employees whose salary is greater than the average salary:

    ```sql
    SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);
    ```
* **Returning All Rows, Sorting, and Encryption:** These are not the purposes of a subquery.
* **Conclusion:** A subquery is a query nested inside another query.

</details>

#### 23. What is a correlated subquery in SQL?

1. A subquery that depends on the outer query for its values
2. A subquery that returns all rows from a table
3. A subquery that sorts records in a table
4. A subquery that encrypts data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A subquery that depends on the outer query for its values

**Explanation:**

* **Correlated Subquery:** A correlated subquery is a subquery that depends on the outer query for its values. It is executed once for each row processed by the outer query.
*   **Example:** A correlated subquery can be used to find all employees who earn more than the average salary in their department:

    ```sql
    SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);
    ```
* **Returning All Rows, Sorting, and Encryption:** These are not the purposes of a correlated subquery.
* **Conclusion:** A correlated subquery depends on the outer query for its values.

</details>

#### 24. What is a view in SQL?

1. A virtual table based on the result set of an SQL query
2. A physical table that stores data
3. A table that is used to sort records
4. A table that is used to encrypt data

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A virtual table based on the result set of an SQL query

**Explanation:**

* **View:** A view is a virtual table that is based on the result set of an SQL query. It does not store data itself but provides a way to present data from one or more tables in a specific format.
*   **Example:** A view can be created to show only the names and salaries of employees:

    ```sql
    CREATE VIEW employee_salaries AS SELECT name, salary FROM employees;
    ```
* **Physical Table, Sorting, and Encryption:** These are not the purposes of a view.
* **Conclusion:** A view is a virtual table based on the result set of an SQL query.

</details>

#### 25. What is a stored procedure in SQL?

1. A precompiled collection of SQL statements that can be executed as a single unit
2. A table that stores data
3. A table that is used to sort records
4. A table that is used to encrypt data

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A precompiled collection of SQL statements that can be executed as a single unit

**Explanation:**

* **Stored Procedure:** A stored procedure is a precompiled collection of SQL statements that can be executed as a single unit. It is stored in the database and can be called by applications or other SQL statements.
*   **Example:** A stored procedure can be created to insert a new employee record:

    ```sql
    CREATE PROCEDURE InsertEmployee (IN name VARCHAR(100), IN salary DECIMAL(10,2))
    BEGIN
      INSERT INTO employees (name, salary) VALUES (name, salary);
    END;
    ```
* **Table, Sorting, and Encryption:** These are not the purposes of a stored procedure.
* **Conclusion:** A stored procedure is a precompiled collection of SQL statements that can be executed as a single unit.

</details>

#### 26. What is a trigger in SQL?

1. A database object that automatically executes a set of SQL statements when a specific event occurs
2. A table that stores data
3. A table that is used to sort records
4. A table that is used to encrypt data

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A database object that automatically executes a set of SQL statements when a specific event occurs

**Explanation:**

* **Trigger:** A trigger is a database object that automatically executes a set of SQL statements when a specific event occurs, such as an INSERT, UPDATE, or DELETE operation on a table.
*   **Example:** A trigger can be created to log changes to the "employees" table:

    ```sql
    CREATE TRIGGER log_employee_changes
    AFTER INSERT OR UPDATE OR DELETE ON employees
    FOR EACH ROW
    BEGIN
      INSERT INTO employee_audit (employee_id, action, action_date)
      VALUES (NEW.id, 'INSERT', NOW());
    END;
    ```
* **Table, Sorting, and Encryption:** These are not the purposes of a trigger.
* **Conclusion:** A trigger is a database object that automatically executes a set of SQL statements when a specific event occurs.

</details>

#### 27. What is a transaction in SQL?

1. A sequence of operations performed as a single logical unit of work
2. A table that stores data
3. A table that is used to sort records
4. A table that is used to encrypt data

<details>

<summary>Show me the answer</summary>

**Answer:** 1. A sequence of operations performed as a single logical unit of work

**Explanation:**

* **Transaction:** A transaction is a sequence of operations performed as a single logical unit of work. It ensures that either all operations are completed successfully, or none are, maintaining the integrity of the database.
* **ACID Properties:** Transactions follow the ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure data integrity.
*   **Example:** A transaction can be used to transfer money from one account to another:

    ```sql
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
    COMMIT;
    ```
* **Table, Sorting, and Encryption:** These are not the purposes of a transaction.
* **Conclusion:** A transaction is a sequence of operations performed as a single logical unit of work.

</details>

#### 28. What is the purpose of the COMMIT statement in SQL?

1. To save the changes made during the current transaction
2. To undo the changes made during the current transaction
3. To start a new transaction
4. To encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To save the changes made during the current transaction

**Explanation:**

* **COMMIT Statement:** The COMMIT statement is used to save the changes made during the current transaction. Once a transaction is committed, the changes are permanently saved to the database.
*   **Example:** After performing a series of updates, you can commit the transaction to save the changes:

    ```sql
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
    COMMIT;
    ```
* **ROLLBACK:** The ROLLBACK statement is used to undo the changes made during the current transaction.
* **START TRANSACTION:** This is used to start a new transaction, not to save changes.
* **Encryption:** The COMMIT statement is not related to data encryption.
* **Conclusion:** The purpose of the COMMIT statement is to save the changes made during the current transaction.

</details>

#### 29. What is the purpose of the ROLLBACK statement in SQL?

1. To undo the changes made during the current transaction
2. To save the changes made during the current transaction
3. To start a new transaction
4. To encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To undo the changes made during the current transaction

**Explanation:**

* **ROLLBACK Statement:** The ROLLBACK statement is used to undo the changes made during the current transaction. It reverts the database to the state it was in before the transaction began.
*   **Example:** If an error occurs during a transaction, you can rollback the changes:

    ```sql
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
    ROLLBACK;
    ```
* **COMMIT:** The COMMIT statement is used to save the changes made during the current transaction.
* **START TRANSACTION:** This is used to start a new transaction, not to undo changes.
* **Encryption:** The ROLLBACK statement is not related to data encryption.
* **Conclusion:** The purpose of the ROLLBACK statement is to undo the changes made during the current transaction.

</details>

#### 30. What is the purpose of the SAVEPOINT statement in SQL?

1. To set a point within a transaction to which you can later roll back
2. To save the changes made during the current transaction
3. To undo the changes made during the current transaction
4. To encrypt data in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To set a point within a transaction to which you can later roll back

**Explanation:**

* **SAVEPOINT Statement:** The SAVEPOINT statement is used to set a point within a transaction to which you can later roll back. It allows you to roll back part of a transaction without undoing the entire transaction.
*   **Example:** You can create a savepoint and later roll back to it:

    ```sql
    BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
    SAVEPOINT savepoint1;
    UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
    ROLLBACK TO savepoint1;
    COMMIT;
    ```
* **COMMIT and ROLLBACK:** These are used to save or undo the entire transaction, not part of it.
* **Encryption:** The SAVEPOINT statement is not related to data encryption.
* **Conclusion:** The purpose of the SAVEPOINT statement is to set a point within a transaction to which you can later roll back.

</details>

#### 31. What is the purpose of the GRANT statement in SQL?

1. To give specific privileges to a user or role
2. To revoke specific privileges from a user or role
3. To encrypt data in a table
4. To sort records in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To give specific privileges to a user or role

**Explanation:**

* **GRANT Statement:** The GRANT statement is used to give specific privileges to a user or role. These privileges can include the ability to SELECT, INSERT, UPDATE, DELETE, or perform other operations on database objects.
*   **Example:** You can grant SELECT privileges on a table to a user:

    ```sql
    GRANT SELECT ON employees TO user1;
    ```
* **REVOKE:** The REVOKE statement is used to revoke privileges from a user or role.
* **Encryption and Sorting:** These are not related to the GRANT statement.
* **Conclusion:** The purpose of the GRANT statement is to give specific privileges to a user or role.

</details>

#### 32. What is the purpose of the REVOKE statement in SQL?

1. To revoke specific privileges from a user or role
2. To give specific privileges to a user or role
3. To encrypt data in a table
4. To sort records in a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To revoke specific privileges from a user or role

**Explanation:**

* **REVOKE Statement:** The REVOKE statement is used to revoke specific privileges from a user or role. These privileges can include the ability to SELECT, INSERT, UPDATE, DELETE, or perform other operations on database objects.
*   **Example:** You can revoke SELECT privileges on a table from a user:

    ```sql
    REVOKE SELECT ON employees FROM user1;
    ```
* **GRANT:** The GRANT statement is used to give privileges to a user or role.
* **Encryption and Sorting:** These are not related to the REVOKE statement.
* **Conclusion:** The purpose of the REVOKE statement is to revoke specific privileges from a user or role.

</details>

#### 33. What is the purpose of the UNION operator in SQL?

1. To combine the result sets of two or more SELECT statements into a single result set
2. To sort the result set of a SELECT statement
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To combine the result sets of two or more SELECT statements into a single result set

**Explanation:**

* **UNION Operator:** The UNION operator is used to combine the result sets of two or more SELECT statements into a single result set. The number of columns and their data types must match in all SELECT statements.
*   **Example:** You can combine the results of two SELECT statements:

    ```sql
    SELECT name FROM employees
    UNION
    SELECT name FROM customers;
    ```
* **Sorting, Encryption, and Deletion:** These are not the purposes of the UNION operator.
* **Conclusion:** The purpose of the UNION operator is to combine the result sets of two or more SELECT statements into a single result set.

</details>

#### 34. What is the difference between UNION and UNION ALL in SQL?

1. UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates
2. UNION includes all rows, including duplicates, while UNION ALL removes duplicate rows
3. UNION sorts the result set, while UNION ALL does not sort the result set
4. UNION encrypts the result set, while UNION ALL does not encrypt the result set

<details>

<summary>Show me the answer</summary>

**Answer:** 1. UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates

**Explanation:**

* **UNION:** The UNION operator removes duplicate rows from the combined result set. It ensures that each row in the result set is unique.
* **UNION ALL:** The UNION ALL operator includes all rows from the combined result set, including duplicates. It does not remove duplicate rows.
* **Example:** If you have two SELECT statements that return the same row, UNION will include that row only once, while UNION ALL will include it twice.
* **Sorting and Encryption:** These are not related to the difference between UNION and UNION ALL.
* **Conclusion:** The difference is that UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates.

</details>

#### 35. What is the purpose of the GROUP BY clause in SQL?

1. To group rows that have the same values in specified columns into summary rows
2. To sort the result set of a SELECT statement
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To group rows that have the same values in specified columns into summary rows

**Explanation:**

* **GROUP BY Clause:** The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows. It is often used with aggregate functions like COUNT, SUM, AVG, etc.
*   **Example:** You can group employees by department and count the number of employees in each department:

    ```sql
    SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;
    ```
* **Sorting, Encryption, and Deletion:** These are not the purposes of the GROUP BY clause.
* **Conclusion:** The purpose of the GROUP BY clause is to group rows that have the same values in specified columns into summary rows.

</details>

#### 36. What is the purpose of the HAVING clause in SQL?

1. To filter groups based on a specified condition
2. To sort the result set of a SELECT statement
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To filter groups based on a specified condition

**Explanation:**

* **HAVING Clause:** The HAVING clause is used to filter groups based on a specified condition. It is often used with the GROUP BY clause to filter the groups after they have been created.
*   **Example:** You can filter departments that have more than 10 employees:

    ```sql
    SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 10;
    ```
* **Sorting, Encryption, and Deletion:** These are not the purposes of the HAVING clause.
* **Conclusion:** The purpose of the HAVING clause is to filter groups based on a specified condition.

</details>

#### 37. What is the purpose of the ORDER BY clause in SQL?

1. To sort the result set of a SELECT statement
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To sort the result set of a SELECT statement

**Explanation:**

* **ORDER BY Clause:** The ORDER BY clause is used to sort the result set of a SELECT statement in ascending or descending order based on one or more columns.
*   **Example:** You can sort employees by their salary in descending order:

    ```sql
    SELECT * FROM employees ORDER BY salary DESC;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the ORDER BY clause.
* **Conclusion:** The purpose of the ORDER BY clause is to sort the result set of a SELECT statement.

</details>

#### 38. What is the purpose of the DISTINCT keyword in SQL?

1. To eliminate duplicate rows from the result set of a SELECT statement
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To eliminate duplicate rows from the result set of a SELECT statement

**Explanation:**

* **DISTINCT Keyword:** The DISTINCT keyword is used to eliminate duplicate rows from the result set of a SELECT statement. It ensures that each row in the result set is unique.
*   **Example:** You can select distinct department IDs from the employees table:

    ```sql
    SELECT DISTINCT department_id FROM employees;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the DISTINCT keyword.
* **Conclusion:** The purpose of the DISTINCT keyword is to eliminate duplicate rows from the result set of a SELECT statement.

</details>

#### 39. What is the purpose of the LIMIT clause in SQL?

1. To restrict the number of rows returned by a SELECT statement
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To restrict the number of rows returned by a SELECT statement

**Explanation:**

* **LIMIT Clause:** The LIMIT clause is used to restrict the number of rows returned by a SELECT statement. It is often used to paginate results or to retrieve a specific number of rows.
*   **Example:** You can retrieve the first 10 employees from the employees table:

    ```sql
    SELECT * FROM employees LIMIT 10;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the LIMIT clause.
* **Conclusion:** The purpose of the LIMIT clause is to restrict the number of rows returned by a SELECT statement.

</details>

#### 40. What is the purpose of the OFFSET clause in SQL?

1. To skip a specified number of rows before returning the result set
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To skip a specified number of rows before returning the result set

**Explanation:**

* **OFFSET Clause:** The OFFSET clause is used to skip a specified number of rows before returning the result set. It is often used with the LIMIT clause to paginate results.
*   **Example:** You can skip the first 5 employees and retrieve the next 10 employees:

    ```sql
    SELECT * FROM employees LIMIT 10 OFFSET 5;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the OFFSET clause.
* **Conclusion:** The purpose of the OFFSET clause is to skip a specified number of rows before returning the result set.

</details>

#### 41. What is the purpose of the LIKE operator in SQL?

1. To search for a specified pattern in a column
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To search for a specified pattern in a column

**Explanation:**

* **LIKE Operator:** The LIKE operator is used to search for a specified pattern in a column. It is often used with wildcard characters such as `%` (matches any sequence of characters) and `_` (matches any single character).
*   **Example:** You can search for employees whose names start with "J":

    ```sql
    SELECT * FROM employees WHERE name LIKE 'J%';
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the LIKE operator.
* **Conclusion:** The purpose of the LIKE operator is to search for a specified pattern in a column.

</details>

#### 42. What is the purpose of the IN operator in SQL?

1. To specify multiple values in a WHERE clause
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To specify multiple values in a WHERE clause

**Explanation:**

* **IN Operator:** The IN operator is used to specify multiple values in a WHERE clause. It allows you to check if a column's value matches any value in a specified list.
*   **Example:** You can select employees who work in specific departments:

    ```sql
    SELECT * FROM employees WHERE department_id IN (1, 2, 3);
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the IN operator.
* **Conclusion:** The purpose of the IN operator is to specify multiple values in a WHERE clause.

</details>

#### 43. What is the purpose of the BETWEEN operator in SQL?

1. To filter the result set within a specified range
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To filter the result set within a specified range

**Explanation:**

* **BETWEEN Operator:** The BETWEEN operator is used to filter the result set within a specified range. It is often used with numeric, date, or time values.
*   **Example:** You can select employees whose salary is between 50000 and 100000:

    ```sql
    SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the BETWEEN operator.
* **Conclusion:** The purpose of the BETWEEN operator is to filter the result set within a specified range.

</details>

#### 44. What is the purpose of the IS NULL operator in SQL?

1. To check if a column contains NULL values
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To check if a column contains NULL values

**Explanation:**

* **IS NULL Operator:** The IS NULL operator is used to check if a column contains NULL values. It is often used in WHERE clauses to filter rows where a column's value is NULL.
*   **Example:** You can select employees who do not have a manager:

    ```sql
    SELECT * FROM employees WHERE manager_id IS NULL;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the IS NULL operator.
* **Conclusion:** The purpose of the IS NULL operator is to check if a column contains NULL values.

</details>

#### 45. What is the purpose of the IS NOT NULL operator in SQL?

1. To check if a column does not contain NULL values
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To check if a column does not contain NULL values

**Explanation:**

* **IS NOT NULL Operator:** The IS NOT NULL operator is used to check if a column does not contain NULL values. It is often used in WHERE clauses to filter rows where a column's value is not NULL.
*   **Example:** You can select employees who have a manager:

    ```sql
    SELECT * FROM employees WHERE manager_id IS NOT NULL;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the IS NOT NULL operator.
* **Conclusion:** The purpose of the IS NOT NULL operator is to check if a column does not contain NULL values.

</details>

#### 46. What is the purpose of the EXISTS operator in SQL?

1. To check if a subquery returns any rows
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To check if a subquery returns any rows

**Explanation:**

* **EXISTS Operator:** The EXISTS operator is used to check if a subquery returns any rows. It is often used in WHERE clauses to filter rows based on the existence of related data in another table.
*   **Example:** You can select employees who have at least one order:

    ```sql
    SELECT * FROM employees e WHERE EXISTS (SELECT 1 FROM orders o WHERE o.employee_id = e.employee_id);
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the EXISTS operator.
* **Conclusion:** The purpose of the EXISTS operator is to check if a subquery returns any rows.

</details>

#### 47. What is the purpose of the NOT EXISTS operator in SQL?

1. To check if a subquery does not return any rows
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To check if a subquery does not return any rows

**Explanation:**

* **NOT EXISTS Operator:** The NOT EXISTS operator is used to check if a subquery does not return any rows. It is often used in WHERE clauses to filter rows based on the absence of related data in another table.
*   **Example:** You can select employees who do not have any orders:

    ```sql
    SELECT * FROM employees e WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.employee_id = e.employee_id);
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the NOT EXISTS operator.
* **Conclusion:** The purpose of the NOT EXISTS operator is to check if a subquery does not return any rows.

</details>

#### 48. What is the purpose of the CASE statement in SQL?

1. To perform conditional logic in SQL queries
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To perform conditional logic in SQL queries

**Explanation:**

* **CASE Statement:** The CASE statement is used to perform conditional logic in SQL queries. It allows you to return different values based on specified conditions.
*   **Example:** You can categorize employees based on their salary:

    ```sql
    SELECT name, salary,
      CASE
        WHEN salary > 100000 THEN 'High'
        WHEN salary BETWEEN 50000 AND 100000 THEN 'Medium'
        ELSE 'Low'
      END AS salary_category
    FROM employees;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the CASE statement.
* **Conclusion:** The purpose of the CASE statement is to perform conditional logic in SQL queries.

</details>

#### 49. What is the purpose of the COALESCE function in SQL?

1. To return the first non-NULL value in a list of arguments
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To return the first non-NULL value in a list of arguments

**Explanation:**

* **COALESCE Function:** The COALESCE function is used to return the first non-NULL value in a list of arguments. It is often used to handle NULL values in SQL queries.
*   **Example:** You can return the first non-NULL value from a list of columns:

    ```sql
    SELECT COALESCE(column1, column2, column3, 'Default') FROM table1;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the COALESCE function.
* **Conclusion:** The purpose of the COALESCE function is to return the first non-NULL value in a list of arguments.

</details>

#### 50. What is the purpose of the NULLIF function in SQL?

1. To return NULL if two expressions are equal, otherwise return the first expression
2. To group rows that have the same values in specified columns into summary rows
3. To encrypt the result set of a SELECT statement
4. To delete records from a table

<details>

<summary>Show me the answer</summary>

**Answer:** 1. To return NULL if two expressions are equal, otherwise return the first expression

**Explanation:**

* **NULLIF Function:** The NULLIF function is used to return NULL if two expressions are equal, otherwise it returns the first expression. It is often used to handle specific cases where you want to return NULL for certain values.
*   **Example:** You can return NULL if two columns have the same value:

    ```sql
    SELECT NULLIF(column1, column2) FROM table1;
    ```
* **GROUP BY, Encryption, and Deletion:** These are not the purposes of the NULLIF function.
* **Conclusion:** The purpose of the NULLIF function is to return NULL if two expressions are equal, otherwise return the first expression.

</details>
