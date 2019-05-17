<template>
	<div class="hello">
		<div class="top">
			<div class="top_input">
				<span class="iconfont">&#xe63c;</span>
				<input type="text" placeholder="请输入文字" />
			</div>

			<span class="iconfont right">&#xe601;</span>
			<span class="iconfont right">&#xe784;</span>
			<span class="iconfont right">&#xe640;</span>

			<ul class="list">
				<li v-for="(item,index) in arr" @click="gotopage(index)">{{item.title}}</li>
			</ul>

		</div>

		<div class="top_bar"></div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				arr: [],
			}
		},
		created() {
			this.axios.get("../../../static/navs.json").then((res) => {
				this.arr = res.data.data
			})
		},
		methods: {
			gotopage(index) {
				var status = index
				switch(status) {
						case 0:
						this.$router.push("/homepage/selected")
						break;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		width: 100%;
		height: 2.351851rem;
		position: fixed;
		top: 0;
		background: white;
		border-bottom: 0.018518rem solid #e5e5e5;
	}
	
	.top_input {
		width: 60%;
		height: 0.833333rem;
		float: left;
		margin: 0.342592rem 0 0.268518rem 4.4%;
		border-radius: 0.351851rem;
		background: #f2f2f2;
	}
	
	.top_input .iconfont {
		font-size: 0.342592rem;
		color: #919191;
		line-height: 0.833333rem;
		float: left;
		margin: 0 0.185185rem 0 0.314814rem;
	}
	
	.top_input input {
		width: 80%;
		border: 0;
		height: 0.833333rem;
		color: #919191;
		background: none;
	}
	
	.right {
		font-size: 0.555555rem;
		color: #686666;
		float: left;
		margin: 0.481481rem 0 0 0.5rem;
	}
	
	.list {
		width: 91.2%;
		height: 0.898148rem;
		margin: 0 4.4%;
		overflow-x: auto;
		overflow-y: hidden;
		display: -webkit-box;
	}
	
	.list li {
		width: 15%;
		text-align: center;
		line-height: 0.898148rem;
		font-size: 0.361111rem;
	}
	
	.list::-webkit-scrollbar {
		display: none;
	}
	
	.list li:hover {
		border-bottom: 0.027777rem solid #fc5b23;
		color: #fc5b23;
	}
	/*******************************顶部顶起来的盒子********************************/
	
	.top_bar {
		width: 100%;
		height: 2.37037rem;
		float: left;
	}
</style>