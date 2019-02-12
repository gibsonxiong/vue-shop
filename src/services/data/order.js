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

export default [

];