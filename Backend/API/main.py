import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import mysql.connector



mycursor = "temp"

app = FastAPI()

currentTrack = 0

origins = [
    "http://192.168.50.189:8080",
    "http://127.0.0.1:8080",
    "https://ahlan-salati.surge.sh/",
    "https://ahlan-salati.surge.sh"
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


@app.post("/deleteItem")
async def read_item(itemName: str):
    return ("Sucsuess")


@app.post("/addItem")
async def read_item(itemName: str):
    return ("Sucsuess")


@app.post("/addUser")
async def read_item(userName: str, passWord: str):
    return ("Sucsuess")


@app.post("/deleteUser")
async def read_item(userName: str):
    return ("Sucsuess")


@app.get("/getItems")
async def read_item():
    return ("Sucsuess")


@app.post("/addToCart")
async def read_item(item_name: str):
    return ("Sucsuess")


@app.post("/deleteFromCart")
async def read_item(item_name: str):
    return ("Sucsuess")


@app.post("/getCart")
async def read_item(item_name: str):
    return ("Sucsuess")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
