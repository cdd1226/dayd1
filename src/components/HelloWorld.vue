<template>

  <div class='log'> 

     <p class='logs'><router-link to='/index'>返回</router-link></p>
     <p><i class="icon iconfont icon-wode"></i><router-link to='/login'>注册</router-link></p>
     <p><i class="icon iconfont icon-suo"></i>密码</p>
     <p class='register'><router-link to='/register'>登录</router-link></p>
     <span class='span'>重置密码</span>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>


<style scoped>
.log{
width:100%;
height:100%;
}
.log p i{
  margin-right:10px;
}
.log p a{
  color:#ccc;
  text-decoration: none;
}
.log p{
  border-bottom:1px  solid #ccc;
  color:#ccc;
  text-decoration: none;
}
.log .span{
  width:100%;
  display:block;
  height:40px;
  line-height:40px;
  text-align:center;
}
.logs a{
     width:100%;
     height:40px;
     line-height:40px;
  }
  .register{
    width:100%;
    height:40px;
    line-height:40px;
    background:#666;
    border-radius:20px;
    text-align:center;
  }
</style>
