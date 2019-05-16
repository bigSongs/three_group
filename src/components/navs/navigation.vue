<template>
  <div class="hello">
   
   <div class="top">
			<div class="top_input">
				<span class="iconfont">&#xe63c;</span>
				<input type="text" placeholder="请输入文字"/>
			</div>
			
			<span class="iconfont right">&#xe601;</span>
			<span class="iconfont right">&#xe784;</span>
			<span class="iconfont right">&#xe640;</span>
			
			<ul class="list">
				<li v-for="item in arr">{{item.title}}</li>
			</ul>
			
			
   </div>
   
   <div class="top_bar"></div>
   
   <router-view></router-view>
   
   <ul class="bottom">
	   	<li><router-link to="/homepage"><span class="iconfont">&#xe6d9;</span><span>首页</span></router-link></li>
	   	<li><router-link to="/discoverer"><span class="iconfont">&#xe60b;</span><span>发现</span></router-link></li>
	   	<li><router-link to="/member"><span class="iconfont">&#xe783;</span><span>会员</span></router-link></li>
	   	<li><router-link to="/personal"><span class="iconfont">&#xe629;</span><span>我的</span></router-link></li>
   </ul>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[],
    }
  },
  created(){
  	this.axios.get("../../../static/navs.json").then((res)=>{
  		console.log(res.data.data)
  		this.arr=res.data.data
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top{
		width: 100%;
		height: 2.351851rem;
		position: fixed;
		top: 0;
		background: white;
		border-bottom: 0.018518rem solid #e5e5e5;
	}
	.top_input{
		width: 60%;
		height: 0.833333rem;
		float: left;
		margin: 0.342592rem 0 0.268518rem 4.4%;
		border-radius: 0.351851rem;
		background: #f2f2f2;
	}
	.top_input .iconfont{
		font-size: 0.342592rem;
		color: #919191;
		line-height: 0.833333rem;
		float: left;
		margin: 0 0.185185rem 0 0.314814rem;
	}
	.top_input input{
		width: 80%;
		border: 0;
		height: 0.833333rem;
		color: #919191;
		background: none;
	}
	.right{
		font-size: 0.555555rem;
		color: #686666;
		float: left;
		margin: 0.481481rem 0 0 0.5rem;
	}
	
	.list{
		width: 91.2%;
		height: 0.898148rem;
		margin: 0 4.4%;
		overflow-x: auto;
    overflow-y: hidden;
    display: -webkit-box;
	}
	.list li{
		width: 15%;
		text-align: center;
		line-height:  0.898148rem;
		font-size: 0.361111rem;
	}
	.list::-webkit-scrollbar{
		display: none;
	}
	.list li:hover{
		border-bottom: 0.027777rem solid #fc5b23;
		color: #fc5b23;
	}
	
	
	
	/*******************************顶部顶起来的盒子********************************/
	.top_bar{
		width: 100%;
		height: 2.37037rem;
		float: left;
	}
	/*******************************底部导航********************************/
	.bottom{
		width: 100%;
		background: white;
		border-top: 0.018518rem solid #e5e5e5;
		position: fixed;
		bottom: 0;
		height: 1.458333rem;
	}
	.bottom li{
		width: 25%;
		float: left;
		text-align: center;
	}
	a{
		text-decoration: none;
		color: black;
		display: block;
		width: 100%;
	}
	a:hover{
		color: rgb(252,91,35);
	}
	.bottom span{
		display: block;
		width: 100%;
		float: left;
	}
	.bottom .iconfont{
		margin: 0.166666rem 0 0.104166rem 0;
		font-size: 0.583333rem;
	}
</style>
