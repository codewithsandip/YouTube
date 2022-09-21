# JOINS

## INNER JOIN

> Joins allows us to combine multiple tables together

<img width="1155" alt="Screenshot 2022-09-21 at 5 23 08 PM" src="https://user-images.githubusercontent.com/70803038/191497194-2248496c-d32f-424d-9e46-cfc16713b041.png">

<img width="1590" alt="Screenshot 2022-09-21 at 5 25 41 PM" src="https://user-images.githubusercontent.com/70803038/191497627-b23600e5-924e-4da5-8974-609728835dc5.png">

<img width="1686" alt="Screenshot 2022-09-21 at 5 27 18 PM" src="https://user-images.githubusercontent.com/70803038/191497916-b2512d6a-74c0-4b66-b9d6-5d35a526a8e9.png">

<img width="1819" alt="Screenshot 2022-09-21 at 5 29 17 PM" src="https://user-images.githubusercontent.com/70803038/191498272-d10ac080-b1f4-42d3-945d-c882d1ffcb9d.png">

<img width="1826" alt="Screenshot 2022-09-21 at 5 31 12 PM" src="https://user-images.githubusercontent.com/70803038/191498592-f169021f-1afe-47df-b578-7e46b4c24c91.png">

> there can be many customers in our database but if we need to find out how many did the payment, we can use inner joins

```
select * from payment
inner join customer
on payment.customer_id = customer.customer_id;

select payment_id, customer.customer_id, first_name from payment
inner join customer
on payment.customer_id = customer.customer_id;
```
