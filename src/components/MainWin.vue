<template>
  <el-container style="height: 675px; width: 1200px;">
    <el-container style="height: 675px; width: 900px; border: 1px solid #f60707;">
      <el-header>
        <el-row>
          <el-button icon="el-icon-top" @click.native="topclick">顶事件</el-button>
          <el-button icon="el-icon-top" @click.native="downclick">底事件</el-button>
          <el-button icon="el-icon-top" @click.native="tmpclick">中间事件</el-button>
          <el-button icon="el-icon-top" @click.native="andclick">与门</el-button>
          <el-button icon="el-icon-top" @click.native="orclick">或门</el-button>
          <el-button icon="el-icon-top" @click.native="notclick">非门</el-button>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-container style="height: 675px; width: 300px; border: 1px solid #ff0000;">
      <el-header><a>节点属性</a></el-header>
      <el-main>
        <el-form>
          <el-form-item label="节点ID：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="节点名称：">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'MainWin'
}
</script>

<style scoped>

</style>
