import strawberry


@strawberry.type
class Product:
    id: int
    name: str
    desc:str
    price:int
    imageSrc:str
    imageAlt:str
    discPercent:float
    stockAmount:int
    SKU:str
