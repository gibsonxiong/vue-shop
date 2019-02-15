class Order {
  constructor(id, userId, title, receiverProvince, receiverCity, receiverArea, receiverAddress, remark, totalFee, postFee, payedFee) {
    this.id = id;
    this.userId = userId;
    this.title = title; //交易标题
    this.receiverProvince = receiverProvince;
    this.receiverCity = receiverCity;
    this.receiverArea = receiverArea;
    this.receiverAddress = receiverAddress;
    this.remark = remark;
    this.totalFee = totalFee;   //商品总价格
    this.postFee = postFee; //邮费
    this.payedFee = payedFee;  //实付款
  }
}

/*
    待发货
        提醒发货  
        退款
    待收货
        确定收货 查看物流
        退款 退货退款 换货
        

*/

export default [

];


