import sys
import strawberry
from fastapi import FastAPI
from strawberry.asgi import GraphQL
from Models.Graphql.Product.schema import Query as ProductQuery
from fastapi.middleware.cors import CORSMiddleware

from controller.auth import auth_controller
from controller.login import login_controller
from controller.register import  register_controller

@strawberry.type
class Query(ProductQuery):
    pass


schema = strawberry.Schema(query=Query)

isProduction = True;

graphql_app = GraphQL(schema,debug=isProduction)

app = FastAPI()
app.add_middleware(
    CORSMiddleware, allow_headers=["*"], allow_origins=["http://localhost:3000"], allow_methods=["*"]
) 

app.add_route("/graphql", graphql_app)
app.add_websocket_route("/graphql", graphql_app)


@app.get('/auth')
def try_auth(sessionKey:str,email:str):
    return auth_controller(sessionKey,email)

@app.get('/login')
def login(email:str,password:str,sessionKey:str):
    return login_controller(email,password,sessionKey)

@app.get('/register')
def register(email:str,password:str,firstName:str,lastName:str):
    return register_controller(email,password,firstName,lastName)