<template>
  <el-container>
    <el-aside width="200px">
      <el-menu router background-color="#545c64" text-color="#fff" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item @click="jump('headPage')" index="1">
          <i class="el-icon-s-home"></i>
          首页
        </el-menu-item>
        <el-menu-item @click="jump('perMessage')" index="2"> <!-- 假设您有一个对应的路由路径为 /messages -->
          <i class="el-icon-s-comment"></i>
          消息
        </el-menu-item>
        <el-submenu index="3">
          <span slot="title">
            <i class="el-icon-user"></i>
            我的
          </span>
          <el-menu-item @click="jump('perCenter')" index="3-1">
            <i class="el-icon-setting"></i>
            个人中心
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    jump(url) {
      this.$router.push(url);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = keyPath;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-aside {
  height: 610px;
  background-color: #545c64;
}
</style>