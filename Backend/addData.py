import mysql.connector

mydb = mysql.connector.connect(
    user='admin', password='Evett123',
    host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
    database='shopping_cart')

mycursor = mydb.cursor()
#INSERT INTO productTable(name, price, brand)
#VALUES('Testing', 1, 'TestBrand')

#Preparing the data to add in
file1 = open(
    '/Users/alyeldinshahin/Documents/481-Final-Project/Backend/products.txt', 'r')
Lines = file1.readlines()
count = 0
for line in Lines:
    count += 1
    tempString = line.split(',')
    name = tempString[0]
    name = name[6:]
    price = tempString[1]
    price = price[7:]
    price = price.strip()
    price = float(price)
    brand = tempString[2]
    brand = brand[7:].strip()
    brand = brand.strip()
    #INSERT INTO productTable (name, price, brand) VALUES ('Testing', 1, 'TestBrand');
    prepareString = "INSERT INTO productTable(name, price, brand) VALUES(%s,%s,%s)"
    val = (str(name),price,str(brand))
    mycursor.execute(prepareString,val)

mydb.commit()

mycursor.execute("SELECT * FROM shopping_cart.productTable;")
result = mycursor.fetchall()
print(result)
