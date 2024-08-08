<template>
    <div class="Person_Center">
       <el-menu>
        <el-menu-item class="Person_Center_menu_1">重置密码</el-menu-item>
        <el-menu-item class="Person_Center_menu_2" @click="jump('/')">退出账号</el-menu-item>
       </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        jump(url){
            this.$router.push(url)
        }
    }
}
</script>
<style scoped>
.Person_Center{
    width: 100%;
    height: 610px;
    font-family: "华文行楷";
}
.Person_Center_menu_1,.Person_Center_menu_2{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom:1px solid #ccc ;
}
</style>