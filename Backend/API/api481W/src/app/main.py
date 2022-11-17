from fastapi import FastAPI
import socket

#-----Interact Functions---------
import mysql.connector


def dbObject():
    mydb = mysql.connector.connect(
        user='admin', password='Evett123',
        host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
        database='shopping_cart')
    return mydb


def deleteProduct(item_name):
    mydb = dbObject()
    mycursor = mydb.cursor()
    prepStatement = (
        'DELETE FROM productTable WHERE name = "'+str(item_name)+'"')
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
    val = (str(userName), str(passWord))
    mycursor.execute(prepareString, val)
    mydb.commit()


def deleteUser(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepStatement = (
        'DELETE FROM userPass WHERE userName = "'+str(userName)+'"')
    mycursor.execute(prepStatement)
    mydb.commit()


def printItemList():
    mydb = dbObject()

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM shopping_cart.productTable;")
    result = mycursor.fetchall()
    return result


def addToCart(userName, itemName, price, brand):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = "INSERT INTO cart(userName,itemName,price,brand) VALUES(%s,%s,%s,%s)"
    val = (str(userName), str(itemName), price, str(brand))
    mycursor.execute(prepareString, val)
    mydb.commit()


def deleteFromCart(userName, itemName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = 'DELETE FROM cart WHERE userName = "' + \
        userName+'" AND itemName = "'+itemName+'"'
    print(prepareString)
    val = (str(itemName), str(userName))
    mycursor.execute(prepareString)
    returnText = 'number of rows deleted ' + str(mycursor.rowcount)
    mydb.commit()
    return (returnText)


def clearCart(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    prepareString = 'DELETE FROM cart WHERE userName = "' + userName+'"'
    print(prepareString)
    mycursor.execute(prepareString)
    returnText = 'number of rows deleted ' + str(mycursor.rowcount)
    mydb.commit()
    return (returnText)


def getCart(userName):
    mydb = dbObject()

    mycursor = mydb.cursor()
    mycursor.execute(
        'SELECT * FROM shopping_cart.cart WHERE userName = "'+userName+'"')
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




app = FastAPI()

@app.get("/")
async def read_item():
    return ("Sucsuess")

@app.get("/getItems")
async def read_item():
    return (printItemList())

@app.post("/deleteItem")
async def read_item(item_name: str):
    deleteProduct(item_name)
    return ("Item "+item_name+" Deleted")

@app.post("/addItem")
async def read_item(item_name: str,price: float,brand):
    addItem(item_name,price,brand)
    return ("Item "+item_name+" added")


@app.post("/addUser")
async def read_item(userName: str, passWord: str):
    addUser(userName,passWord)
    return ("Added "+userName)


@app.post("/deleteUser")
async def read_item(userName: str):
    deleteUser( userName)
    return ("Removed User "+userName)





@app.post("/addToCart")
async def read_item(user_name: str,item_name: str,price: float,brand: str):
    addToCart(user_name,item_name,price,brand)
    return ("Added to users Cart")


@app.post("/deleteFromCart")
async def read_item(user_name: str,item_name:str):
    response =deleteFromCart(user_name,item_name)
    return (response)


@app.post("/getCart")
async def read_item(item_name: str):
    response = getCart(item_name)
    return (response)


@app.post("/clearCart")
async def read_item(user_name: str):
    response = clearCart(user_name)
    return (response)

@app.post("/getIP")
async def read_item():
    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)
    print("Your Computer Name is:"+hostname)
    print("Your Computer IP Address is:"+IPAddr)
    return(IPAddr)

@app.post("/testDB")
async def read_item():
    temp = print(dbObject())
    return(temp)
