from interactFuncs import *
from fastapi import FastAPI
import mysql.connector

mydb = mysql.connector.connect(
    user='admin', password='Evett123',
    host='final481.c9debhe4folh.us-east-2.rds.amazonaws.com',
    database='shopping_cart')

mycursor = mydb.cursor()

mycursor = "temp"

app = FastAPI()

@app.get("/")
async def read_item():
    return ("Sucsuess")

@app.get("/getItems")
async def read_item():
    return (printItemList(mydb))

@app.post("/deleteItem")
async def read_item(item_name: str):
    deleteProduct(mydb,item_name)
    return ("Item "+item_name+" Deleted")

@app.post("/addItem")
async def read_item(item_name: str,price: float,brand):
    addItem(mydb,item_name,price,brand)
    return ("Item "+item_name+" added")


@app.post("/addUser")
async def read_item(userName: str, passWord: str):
    addUser(mydb,userName,passWord)
    return ("Added "+userName)


@app.post("/deleteUser")
async def read_item(userName: str):
    deleteUser(mydb, userName)
    return ("Removed User "+userName)





@app.post("/addToCart")
async def read_item(user_name: str,item_name: str,price: float,brand: str):
    addToCart(mydb,user_name,item_name,price,brand)
    return ("Added to users Cart")


@app.post("/deleteFromCart")
async def read_item(user_name: str,item_name:str):
    response =deleteFromCart(mydb,user_name,item_name)
    return (response)


@app.post("/getCart")
async def read_item(item_name: str):
    response = getCart(mydb,item_name)
    return (response)


@app.post("/clearCart")
async def read_item(user_name: str):
    response = clearCart(mydb,user_name)
    return (response)

