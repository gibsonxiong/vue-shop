class ItemType {
  constructor(id, name,imgSrc, catalogId) {
    this.id = id;
    this.name = name;
    this.imgSrc = imgSrc;
    this.catalogId = catalogId;
  }
}



export default [
  new ItemType(0, '连衣裙', 'http://gw.alicdn.com/tps/TB2zKP.lpXXXXc2XXXXXXXXXXXX_!!2-martrix_bbs.png_140x10000.jpg',0),
  new ItemType(1, '毛衣','http://gw.alicdn.com/tps/TB1W3.RiVzqK1RjSZFvSuwB7VXa.jpg_140x10000Q75.jpg',0),
  new ItemType(2, '短外套','http://gw.alicdn.com/tps/O1CN01yeMb2G1tdhB6YhZAs_!!3158175925-0-daren.jpg_140x10000Q75.jpg',0),
  new ItemType(3, '手机','http://gw.alicdn.com/tps/TB2LKXkqHtlpuFjSspfXXXLUpXa_!!1963544026.png_140x10000.jpg',1),
  new ItemType(4, '笔记本电脑','http://gw.alicdn.com/tps/TB2RZZRX3MPMeJjy1XdXXasrXXa_!!2082725004-0-beehive-scenes.jpg_140x10000Q75.jpg',1),
  new ItemType(5, '手机贴膜','http://gw.alicdn.com/tps/TB14FbAb26H8KJjSspmSuv2WXXa.jpg_140x10000Q75.jpg',2),

];
