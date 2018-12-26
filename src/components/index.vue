<template>

  <div class='log'> 

     <p class='logs'><router-link to='/'>手机号登录</router-link></p>
     <p class='logs'><router-link to='/register'>注册</router-link></p>
     <span class='span'>游客试用</span>
  
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
.log a{
    width:100%;
    height:40px;
    line-height:40px;
    color:red;
    display:block;
    border:1px  solid red;
    text-align:center;
    border-radius:10px;
    text-decoration: none;
}


  .span{
    width:100%;
    height:40px;
    text-align:center;
    line-height:40px;
    border-radius:20px;
    display:block;
  }
</style>
