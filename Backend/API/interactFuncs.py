import mysql.connector

mydb = mysql.connector.connect(
    user='admin', password='Evett123',
    host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
    database='shopping_cart')

mycursor = mydb.cursor()

def deleteProduct (mycursor,item_name):
    prepStatement = ("DELETE FROM productTable WHERE name = "+str(item_name))
    print(prepStatement)
    mycursor.execute(prepStatement)
    mydb.commit()


def addItem(mycursor,item_name, price, brand):
    prepareString = "INSERT INTO productTable(name, price, brand) VALUES(%s,%s,%s)"
    val = (str(item_name), price, str(brand))
    mycursor.execute(prepareString, val)
    mydb.commit()


def addUser(mycursor,userName, passWord):
    prepareString = "INSERT INTO userPass(userName, passWord) VALUES(%s,%s)"
    val = (str(userName),str(passWord))
    mycursor.execute(prepareString, val)
    mydb.commit()


def deleteUser(mycursor,userName):
    prepStatement = ("DELETE FROM userPass WHERE userName = "+str(userName))
    mycursor.execute(prepStatement)
    mydb.commit()


def printItemList(mycursor):
    mycursor.execute("SELECT * FROM shopping_cart.productTable;")
    result = mycursor.fetchall()
    return result


if __name__ == "__main__":
    print("Starting")
    mycursor.execute("SELECT * FROM shopping_cart.productTable;")
    result = mycursor.fetchall()
    print(result)
