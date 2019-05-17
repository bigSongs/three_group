import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

//导航
import navs from '@/components/navs/navigation'


//主页
import homepage from '@/components/homepage/homepage_home'
//精选
import selected from '@/components/homepage/Selected/Selected_home'


//发现
import discoverer from '@/components/discoverer/discoverer_home'
//会员
import member from '@/components/member/member_home'
//我的
import personal from '@/components/personal/personal_home'

Vue.use(Router)

export default new Router({
  routes: [
//  {path: '/',component: HelloWorld},

    {path: '/',redirect:"navs"},
    {path: '/navs',component: navs,
    	children:[    		
    	{path: '/',component:homepage,
    		children:[
    			{path: '/',component: selected}
    		]
    	},
    	{path: '/homepage',component: homepage,
    		children:[
    			{path: '/',component: selected},
    			{path: '/homepage/selected',component: selected},
    		]
    	},
    	{path: '/discoverer',component: discoverer},
    	{path: '/member',component: member},
    	{path: '/personal',component: personal},
    	]
    },
  ]
})
