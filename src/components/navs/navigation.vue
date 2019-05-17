<template>
	<div class="hello">

		<router-view></router-view>

		<ul class="bottom">
			<li>
				<router-link to="/homepage"><span class="iconfont">&#xe6d9;</span><span>首页</span></router-link>
			</li>
			<li>
				<router-link to="/discoverer"><span class="iconfont">&#xe60b;</span><span>发现</span></router-link>
			</li>
			<li>
				<router-link to="/member"><span class="iconfont">&#xe783;</span><span>会员</span></router-link>
			</li>
			<li>
				<router-link to="/personal"><span class="iconfont">&#xe629;</span><span>我的</span></router-link>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*******************************底部导航********************************/
	
	.bottom {
		width: 100%;
		background: white;
		border-top: 0.018518rem solid #e5e5e5;
		position: fixed;
		bottom: 0;
		height: 1.458333rem;
	}
	
	.bottom li {
		width: 25%;
		float: left;
		text-align: center;
	}
	
	a {
		text-decoration: none;
		color: black;
		display: block;
		width: 100%;
	}
	
	a:hover {
		color: rgb(252, 91, 35);
	}
	
	.bottom span {
		display: block;
		width: 100%;
		float: left;
	}
	
	.bottom .iconfont {
		margin: 0.166666rem 0 0.104166rem 0;
		font-size: 0.583333rem;
	}
</style>