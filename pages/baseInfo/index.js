const app = getApp()
const area = require('../../common/area.js')
import {
  formatDate,
  timestamp,
  tempToDate,
  computedAge
} from '../../common/date.js'
import Toast from '@vant/weapp/toast/toast'


Page({
  data: {
    name: '',
    sex: '请选择',
    birth: '请选择',
    age: '',
    phone: '',
    email: '',
    address: '请选择',
    actions: [{
        name: '男'
      },
      {
        name: '女'
      }
    ],
    issex: false,
    isshow: false,
    isaddress: false,
    date: '2016-09-01',
    radio: '1',
    currentDate: new Date().getTime(),
    minDate: 1970,
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    areaList: area.default,
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  onChange: function (event) {
    this.setData({
      radio: event.detail
    })
  },
  //输入名字
  handlerClickName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  // 选择性别
  chooseSex: function () {
    this.setData({
      issex: true
    })
  },
  chooseSexItem: function (e) {
    this.setData({
      issex: false,
      sex: e.detail.name
    })
  },
  chooseSexCancel: function () {
    this.setData({
      issex: false,
    })
  },
  // 选择出生日期
  chooseDate: function () {
    this.setData({
      isshow: true
    })
  },
  chooseDatePopupClose: function () {
    this.setData({
      isshow: false
    })
  },

  chooseDateConfirm: function (e) {
    // 时间转换函数 
    console.log(tempToDate(e.detail));
    this.setData({
      isshow: false,
      birth: formatDate(timestamp(e.detail), 'yyyy-MM-dd'),
      age: computedAge(formatDate(timestamp(e.detail), 'yyyy-MM-dd'))
    })
  },
  chooseDateCancel: function () {
    this.setData({
      isshow: false
    })
  },
  //年龄

  // 手机号校验
  handlerClickPhone: function (val) {
    // console.log(val.detail.val);
    this.setData({
      phone: val.detail.value
    })
  },
  // 邮箱校验
  handlerClickEmail: function (val) {
    this.setData({
      email: val.detail.value
    })
  },
  //地区选择
  chooseAddress: function () {
    this.setData({
      isaddress: true
    })
  },
  chooseAddressPopupClose: function () {
    this.setData({
      isaddress: false
    })
  },
  chooseAddressConfirm: function (e) {
    // 正则
    this.setData({
      address: e.detail.values.map(ele => {
        let address = [];
        console.log(ele.name);
        address.push(ele.name);
        return address.join('')
      }),
      isaddress: false
    })
  },
  //next
  handleNext:function(e){
    let form ={
      name:this.data.name,
      sex:this.data.sex,
      birth:this.data.birth,
      age:this.data.age,
      phone:this.data.phone,
      email:this.data.email,
      address:this.data.address
    }
    // if(this.data.name ||this.data.sex||this.data.birth||this.data.age||this.data.phone||this.data.email||this.data.address == ''){
    //   Toast.fail('请输入各项基本信息啊啊！');
    // }else{
    //   wx.setStorage({
    //     key:"baseInfo",
    //     data:form
    //   })
    //   wx.navigateTo({
    //     url: 'pages/index/index',
    //   })
    // }  

    wx.setStorage({
      key:"baseInfo",
      data:form
    })
    wx.navigateTo({
      url: '/pages/jobInfo/index',
    })
  }

})