import mysql.connector



def dbObject():
    mydb = mysql.connector.connect(
        user='admin', password='Evett123',
        host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
        database='shopping_cart')
    return mydb

def deleteProduct (item_name):
    mydb = dbObject()
    mycursor = mydb.cursor()
    prepStatement = ('DELETE FROM productTable WHERE name = "'+str(item_name)+'"')
    print(prepStatement)
    mycursor.execute(prepStatement)
    mydb.commit()


def addItem(item_name, price, brand):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = "INSERT INTO productTable(name, price, brand) VALUES(%s,%s,%s)"
    val = (str(item_name), price, str(brand))
    mycursor.execute(prepareString, val)
    mydb.commit()


def addUser(userName, passWord):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = "INSERT INTO userPass(userName, passWord) VALUES(%s,%s)"
    val = (str(userName),str(passWord))
    mycursor.execute(prepareString, val)
    mydb.commit()


def deleteUser(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepStatement = ('DELETE FROM userPass WHERE userName = "'+str(userName)+'"')
    mycursor.execute(prepStatement)
    mydb.commit()

def printItemList():
    mydb = dbObject()

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM shopping_cart.productTable;")
    result = mycursor.fetchall()
    return result

def addToCart(userName,itemName,price,brand):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = "INSERT INTO cart(userName,itemName,price,brand) VALUES(%s,%s,%s,%s)"
    val = (str(userName),str(itemName),price, str(brand))
    mycursor.execute(prepareString, val)
    mydb.commit()

def deleteFromCart(userName, itemName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = 'DELETE FROM cart WHERE userName = "'+userName+'" AND itemName = "'+itemName+'"'
    print(prepareString)
    val = (str(itemName),str(userName))
    mycursor.execute(prepareString)
    returnText = 'number of rows deleted ' + str(mycursor.rowcount)
    mydb.commit()
    return(returnText)

def clearCart(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = 'DELETE FROM cart WHERE userName = "' +userName+'"'
    print(prepareString)
    mycursor.execute(prepareString)
    returnText = 'number of rows deleted ' + str(mycursor.rowcount)
    mydb.commit()
    return (returnText)

def getCart(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    mycursor.execute('SELECT * FROM shopping_cart.cart WHERE userName = "'+userName+'"')
    result = mycursor.fetchall()
    return result

# if __name__ == "__main__":
#     mydb = mysql.connector.connect(
#         user='admin', password='Evett123',
#         host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
#         database='shopping_cart')

#     mycursor = mydb.cursor()
#     mycursor.execute("DROP TABLE `shopping_cart`.`cart`")
#     result = mycursor.fetchall()
#     print(result)
