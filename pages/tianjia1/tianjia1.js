// pages/tianjia1/tianjia1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,

    items: [
      { name: 'USA', value: '孙文龙', checked: 'true'},
      { name: 'CHN', value: '李鸣', checked: 'true' },
      { name: 'BRA', value: '宫建章', checked: 'true' },
    ]
  },


  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },


  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  }

})




