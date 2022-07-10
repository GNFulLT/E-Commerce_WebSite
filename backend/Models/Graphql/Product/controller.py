from prisma import Prisma
import sys

import prisma

from .types import Product
db = Prisma()

def getPopularProducts(limit:int):
    try:
        db.connect()
        if(limit > 12):
            limit = 12
        products = db.product.find_many(take=limit,order={
            'totalSell' : 'desc'
        })
        gProducts = [*map(createGProductFromProduct,products)]
        db.disconnect()
        return gProducts;
    except:
        print("[PRODUCT]\n[GET_POPULAR_PRODUCTS]\n[ERROR]\n ", sys.exc_info()[0], "\n[OCCURED].")
        db.disconnect()
        return None;

def createGProductFromProduct(product:prisma.client.models.product):
     discount = 0;
     if(product.discount != None):
        discount = product.discount.discount_percent;
     image = db.image.find_unique(where={
        'id':product.image_id
     }) 
     inventory = db.product_inventory.find_unique(where={
        'id':product.inventory_id
     })
     gProduct = Product(product.id,product.name,product.desc,product.price,image.src,image.alt,discount,inventory.quantity,product.SKU);
     return gProduct;