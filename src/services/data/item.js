class Item {
  constructor(id, name, imgSrc, itemTypeId, detailImgSrcs, desc,propIds,propValueIds) {
    this.id = id;
    this.name = name;
    this.imgSrc = imgSrc;
    this.itemTypeId = itemTypeId;
    this.detailImgSrcs = detailImgSrcs;
    this.desc = desc;
    this.propIds = propIds;
    this.propValueIds = propValueIds;
  }
}

let itemDesc = '<img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01Yom2Mf1aWqYEfMxcD_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01Ot8IfU1aWqYEt79dZ_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i2/1648683338/O1CN01CrYWYq1aWqYFU1zSE_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN010x3gT21aWqYGE1ptd_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN012lvwAL1aWqYRgX8Mw_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i2/1648683338/O1CN01CJYN8B1aWqYqXhLqA_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01u9btsm1aWqYmIa32D_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01G9R8jL1aWqYdLrPPQ_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01BUBPc61aWqY88PcKi_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i2/1648683338/O1CN015mn8jy1aWqYIndku9_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN01YlccTT1aWqYGiF3qr_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01VKyCQZ1aWqYFEUPpz_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01b2Yyvm1aWqYGWWrmX_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01fwvR9I1aWqYCTmhmc_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01w6EPiW1aWqYFqeAIt_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN01za5CUx1aWqYFPL5iL_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01kC0mg51aWqYEfPJGu_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN01EkjKnd1aWqYGiLVOC_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01BYnrFP1aWqYDVqinP_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN010T84Wy1aWqYFSrYKI_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN015kHRRk1aWqYGiKMmR_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i2/1648683338/O1CN01lKYAtf1aWqY88Wnoq_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i2/1648683338/O1CN01iXpz4G1aWqYEt6cLB_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01eQCRRg1aWqYOFYTr9_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01f2g2Tu1aWqYJAjazY_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01nh7NbN1aWqYHrjNoN_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i3/1648683338/O1CN01vViBVP1aWqYGtgyJi_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i1/1648683338/O1CN01DS9zSg1aWqYQFQoiA_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle"><img src="//img.alicdn.com/imgextra/i4/1648683338/O1CN01wjxYSn1aWqYGiLuNt_!!1648683338.jpg_2200x2200Q90s50.jpg_.webp" align="absmiddle">';
let itemDesc2 = '<img align="absmiddle" src="//img.alicdn.com/imgextra/i2/14197825/O1CN011MkKRR27fthZ1SkRR_!!14197825.jpg_640x0q85s150_.webp" style="max-width:373px;" size="750x1775"><img align="absmiddle" src="//img.alicdn.com/imgextra/i3/14197825/O1CN01arR28527fthSfRrmY_!!14197825.jpg_640x0q85s150_.webp" ><img align="absmiddle" src="//img.alicdn.com/imgextra/i3/14197825/O1CN01eVeOlD27fthY5PauX_!!14197825.jpg_640x0q85s150_.webp"><img align="absmiddle" src="//img.alicdn.com/imgextra/i3/14197825/O1CN01XxwpqY27fthYkw4Kd_!!14197825.jpg_640x0q85s150_.webp"><img align="absmiddle" src="//img.alicdn.com/imgextra/i1/14197825/O1CN01OLl3Um27fthZM2Ex9_!!14197825.jpg_640x0q85s150_.webp">';

export default [
  new Item(
    0,
    '法国小众红色连衣裙女秋冬维多利亚复古大红色针织毛衣裙小红裙子',
    'https://gw.alicdn.com/imgextra/i1/1648683338/O1CN01hkX6oS1aWqY89op89_!!0-item_pic.jpg_360x360xzQ75s100.jpg',
    0,
    'http://img.alicdn.com/imgextra/i1/1648683338/O1CN01FqP9ee1aWqY88wFIu_!!1648683338.jpg_760x760Q50s50.jpg,//img.alicdn.com/imgextra/i3/1648683338/O1CN01DUBOiD1aWqYRMsSJy_!!1648683338.jpg_760x760Q50s50.jpg',
    itemDesc,
    '0,1',
    '0|1,3',
  ),
  new Item(
    1,
    '毛衣裙中长款针织复古格子毛呢假两件连衣裙女秋冬配大衣的长裙子',
    'https://gw.alicdn.com/imgextra/i3/14197825/O1CN01aePork27fthGUhEbQ_!!14197825.jpg_360x360xzQ75s100.jpg',
    0,
    'https://img.alicdn.com/imgextra/i2/14197825/O1CN016oJGWH27fthIKp86s_!!14197825.jpg,https://img.alicdn.com/imgextra/i4/14197825/O1CN01T8k0y627fthYBuXG9_!!14197825.jpg',
    itemDesc2,
    '0',
    '0',
  ),
  new Item(
    2,
    '德国小众红色连衣裙女秋冬维多利亚复古大红色针织毛衣裙小红裙子',
    'https://gw.alicdn.com/imgextra/i1/1648683338/O1CN01hkX6oS1aWqY89op89_!!0-item_pic.jpg_360x360xzQ75s100.jpg',
    0,
    'http://img.alicdn.com/imgextra/i1/1648683338/O1CN01FqP9ee1aWqY88wFIu_!!1648683338.jpg_760x760Q50s50.jpg,//img.alicdn.com/imgextra/i3/1648683338/O1CN01DUBOiD1aWqYRMsSJy_!!1648683338.jpg_760x760Q50s50.jpg',
    itemDesc,
    '0,1',
    '0|1,3',
  ),
  new Item(
    3,
    '英国小众红色连衣裙女秋冬维多利亚复古大红色针织毛衣裙小红裙子',
    'https://gw.alicdn.com/imgextra/i1/1648683338/O1CN01hkX6oS1aWqY89op89_!!0-item_pic.jpg_360x360xzQ75s100.jpg',
    0,
    'http://img.alicdn.com/imgextra/i1/1648683338/O1CN01FqP9ee1aWqY88wFIu_!!1648683338.jpg_760x760Q50s50.jpg,//img.alicdn.com/imgextra/i3/1648683338/O1CN01DUBOiD1aWqYRMsSJy_!!1648683338.jpg_760x760Q50s50.jpg',
    itemDesc,
    '0,1',
    '0|1,3',
  ),
  new Item(
    4,
    '美国小众红色连衣裙女秋冬维多利亚复古大红色针织毛衣裙小红裙子',
    'https://gw.alicdn.com/imgextra/i1/1648683338/O1CN01hkX6oS1aWqY89op89_!!0-item_pic.jpg_360x360xzQ75s100.jpg',
    0,
    'http://img.alicdn.com/imgextra/i1/1648683338/O1CN01FqP9ee1aWqY88wFIu_!!1648683338.jpg_760x760Q50s50.jpg,//img.alicdn.com/imgextra/i3/1648683338/O1CN01DUBOiD1aWqYRMsSJy_!!1648683338.jpg_760x760Q50s50.jpg',
    itemDesc,
    '0,1',
    '0|1,3',
  ),
  
]
