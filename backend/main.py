import strawberry
from fastapi import FastAPI
from strawberry.asgi import GraphQL
from prisma import Prisma
from Models.Graphql.Product.schema import Query as ProductQuery
from Graphql.user import User
from fastapi.middleware.cors import CORSMiddleware


@strawberry.type
class Query(ProductQuery):
    @strawberry.field
    def user(self) -> User:
        return User(name="Patrick", age=100)
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