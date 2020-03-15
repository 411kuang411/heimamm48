<template>
  <div class="Bigbox">
    <div class="leftBox">
      <div class="titel">
        <img class="tietleIco" src="../../assets/title_log.png" alt />
        <span class="tietleName">黑马面面</span>
        <span class="titelxian"></span>
        <span class="tietllogin">用户登录</span>
      </div>
    </div>
    <img class="tupian" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.Bigbox {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  //弹性布局
  display: flex;
  //左右间距相等
  justify-content: space-around;
  //上下间距相等
  align-items: center;

  //左边的登录页面
  .leftBox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    //不计算例子的padding值
    box-sizing: border-box;
    overflow: hidden;

    .titel{
        height: 24px;
        display: flex;
        align-items: center;

        .tietleName {
          font-weight: 400;
          font-size: 22px;
          margin-left:14px;
        }

        .titelxian {
          width: 1px;
          height: 28px;
          display: inline-block;
          margin: 0 14px;
          background: rgba(199, 199, 199, 1);
        }

        .tietllogin {
          font-weight: 400;
          font-size: 22px;
        }
    }

  }

  //右边的图片
  .tupian {
    width: 633px;
    height: 435px;
  }
}
</style>