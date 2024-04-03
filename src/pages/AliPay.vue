<template>
  <!-- <div class="box">
    <el-card class="box-card w-margin ">
      <ul class="msg-box">
        <li>
          <h4>我要支付</h4>
        </li>
        <li>
          <h4 style="margin-bottom: 15px;">支付金额</h4>
          <el-radio-group v-model="amountVal" @change="amountChange">
            <el-radio border :label="'' + 100">充值100</el-radio>
            <el-radio border :label="'' + 500">充值500</el-radio>
            <el-radio border :label="'' + 1000">充值1000</el-radio>
            <el-radio border :label="'' + 2000">充值2000</el-radio>
            <el-radio border :label="'' + 5000">充值5000</el-radio>
            <el-radio border :label="''">自定义</el-radio>
          </el-radio-group>
        </li>
        <li>
          <h4 style="margin-bottom: 15px;">支付方式</h4>
          <el-radio-group v-model="rechargeParams.paymentType" @change="paymentTypeChange">
            <el-radio border :label="'' + 1">支付宝</el-radio>
            <el-radio border :label="'' + 0">微信</el-radio>
          </el-radio-group>
        </li>
        <li>
          <h4 style="margin-bottom: 15px;">支付金额</h4>
          <el-input :disabled="disabled" clearable v-model="rechargeParams.totalAmt" placeholder="请输入金额"
            style="width: 150px;"></el-input>
        </li>
      </ul>
      <div style="text-align: center; margin-top: 30px;">
        <el-button type="primary" @click="surePay">确认支付</el-button>
      </div>
    </el-card>
  </div> -->
</template>

<script>
import { payZFB } from "../functions/payZFB";
export default {
  data() {
    return {
      amountVal: '',
      disabled: false,
      // 同步跳转页面地址
      returnUrl: 'http://localhost:5173/#/activityParticipation/2',
      //充值参数
      rechargeParams: {
        "totalAmt": '', //金额
        "paymentType": "1", //支付方式[0:微信,1:支付宝,2:余额,3:活动]
        "transType": "0" //交易类型[0:充值,1:消费]
      }
    }
  },
  // 打开页面的时候自动执行surePay方法
  mounted() {
    this.rechargeParams.totalAmt = 2888
    this.surePay(2888)
  },
  methods: {
    //充值金额
    amountChange(val) {
      this.rechargeParams.totalAmt = val;
      if (val === '') {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    //支付方式
    paymentTypeChange(val) {
      this.rechargeParams.paymentType = val
    },
    //确认支付
    async surePay() {
      // 打印2333到控制台
      if (this.rechargeParams.totalAmt === '') {
        this.$message.warning('请输入金额');
        return;
      }
      if (this.rechargeParams.paymentType === '0') {

      } else if (this.rechargeParams.paymentType === '1') {
        let praem = {
          // 生成一个随你的订单号 方便测试
          outTradeNo: this.getProjectNum() + Math.floor(Math.random() * 10000),
          // 传递支付金额
          totalAmount: this.rechargeParams.totalAmt,
          // 传递同步跳转地址
          returnUrl: this.returnUrl,
          // 商品名称
          subject: '支付金额',
          // 支付类型
          productCode: 'FAST_INSTANT_TRADE_PAY'
        }
        payZFB(praem).then(code => {
          if (code.code === 200) {
            // 支付方式跳转
            const payDiv = document.getElementById('payDiv');
            if (payDiv) {
              document.body.removeChild(payDiv);
            }
            const div = document.createElement('div');
            div.id = 'payDiv';
            div.innerHTML = code.data;
            document.body.appendChild(div);
            document.getElementById('payDiv').getElementsByTagName('form')[0].submit();
          }
        })
      }
    },
    // 获取当前日期的方法
    getProjectNum() {

      const projectTime = new Date() // 当前中国标准时间
      const Year = projectTime.getFullYear() // 获取当前年份 支持IE和火狐浏览器.
      const Month = projectTime.getMonth() + 1 // 获取中国区月份
      const Day = projectTime.getDate() // 获取几号
      var CurrentDate = Year
      if (Month >= 10) { // 判断月份和几号是否大于10或者小于10
        CurrentDate += Month
      } else {
        CurrentDate += '0' + Month
      }
      if (Day >= 10) {
        CurrentDate += Day
      } else {
        CurrentDate += '0' + Day
      }
      return CurrentDate
    }
  }
}
</script>

<style scoped>
.box {
  padding-top: 50px;
  width: 100vw;
  display: flex;
}

/* 信息列表样式 */
.msg-box>li {
  list-style: none;
  border-bottom: 1px solid #c5c5c5;
  padding: 20px 10px;
}
</style>
