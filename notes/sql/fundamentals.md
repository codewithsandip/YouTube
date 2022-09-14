# QUERYING DATA FROM A TABLE

Query data in columns c1, c2 from a table
```
SELECT c1, c2 FROM t;
```
Query all rows and columns from a table
```
SELECT * FROM t;
```
Query data and filter rows with a condition
```
SELECT c1, c2 FROM t
WHERE condition;
```
Query distinct rows from a table
```
SELECT DISTINCT c1 FROM t
WHERE condition;
```
Sort the result set in ascending or descending order
```
SELECT c1, c2 FROM t
ORDER BY c1 ASC [DESC];
```
Skip offset of rows and return the next n rows
```
SELECT c1, c2 FROM t
ORDER BY c1
LIMIT n OFFSET offset;
```
The following statement uses the BETWEEN operator to find all employees whose salaries are between 2,500 and 2,900:
```
SELECT 
    employee_id, 
    first_name, 
    last_name, 
    salary
FROM
    employees
WHERE
    salary BETWEEN 2500 AND 2900
ORDER BY 
	salary DESC;
```
The following example uses the LIKE operator to find all employees whose first names start with 'Da':
```
SELECT
	employee_id,
	first_name,
	last_name
FROM
	employees
WHERE
	first_name LIKE 'Da%'
```
