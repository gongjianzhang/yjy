//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    a: '参观当天凭本人二代身份证、预约二维码或人脸识别(需提交本人头像照片)由中国考古博物馆入口核录，经馆内安检合格后入馆参观。',
     data: {
      year: '2019',
      month: 10,
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
