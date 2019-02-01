class Sku {
  constructor(id, itemId,propValueIds,quantity,price) {
    this.id = id;
    this.itemId = itemId;
    this.propValueIds = propValueIds;
    this.quantity = quantity;
    this.price = price;
  }
}

export default [
  new Sku(
    0,
    0,
    '0,3',
    0,
    100
  ),
  new Sku(
    1,
    0,
    '1,3',
    100,
    120
  ),
  new Sku(
    2,
    1,
    '0',
    1000,
    50
  ),
  new Sku(
    3,
    2,
    '0,3',
    0,
    100
  ),
  new Sku(
    4,
    2,
    '1,3',
    100,
    120
  ),
  new Sku(
    5,
    3,
    '0,3',
    0,
    100
  ),
  new Sku(
    6,
    3,
    '1,3',
    100,
    120
  ),
  new Sku(
    7,
    4,
    '0,3',
    30,
    10
  ),
  new Sku(
    8,
    4,
    '1,3',
    100,
    120
  ),
]
