from interactFuncs import *
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import socket

app = FastAPI()

origins = [
    "http://localhost:3000/",
    "http://localhost/",
    "68.36.27.227",
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
