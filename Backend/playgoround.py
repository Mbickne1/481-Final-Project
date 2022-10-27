import mysql.connector

mydb = mysql.connector.connect(
    user='admin', password='Evett123',
    host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
    database='shopping_cart')

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM shopping_cart.productTable;")
result = mycursor.fetchall()
print(result)
