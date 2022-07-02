from typing import Optional
import strawberry
from typing import List, Union, Optional
from .types import Product
from .controller import getPopularProducts
@strawberry.type
class Query:
    @strawberry.field
    def getPopularProducts(limit:int = 5) -> Optional[List[Product]]:
        return getPopularProducts(limit);
