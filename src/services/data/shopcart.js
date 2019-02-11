class Shopcart {
  constructor(id, userId, itemId,skuId,quantity) {
    this.id = id;
    this.userId = userId;
    this.itemId = itemId;
    this.skuId = skuId;
    this.quantity = quantity;
  }
}



export default [
  new Shopcart(
    0,
    0,
    0,
    0,
    1
  ),
  
  new Shopcart(
    1,
    0,
    0,
    1,
    2
  ),

  new Shopcart(
    2,
    0,
    1,
    2,
    1
  )

];

export {
  Shopcart
};
