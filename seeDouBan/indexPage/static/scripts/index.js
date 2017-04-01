//关于本站
var aboutSiteApp = {
	template:`<about-this-site></about-this-site>`,
};


//vue-router

const routes = [
	{
		path: '/movieBookApp',
		component: movieBookPage_list,
		children:[
			{
				path:'movieTop500',
				component: movieItemList
			},
			{
				path:'bookTop500',
				component: bookItemList
			},
		],
	},
	{
		path:'/userRank',
		component: userRankList,
		children:[
			{
				path:'seeTop500',
				component: userSeeRankTable
			},
			{
				path:'broadTop500',
				component: userBroadRankTable
			},
		],
	},
	{
		path:'/imgDataPage',
		component:imgDataPage,
		children:[
			{
				path:'book',
				component: imgDataPageBook,
			},
			{
				path:'movie',
				component: imgDataPageMovie,
			},
			{
				path:'TV',
			},
		],
	},
	{
		path: '/aboutSiteApp',
		component: aboutSiteApp,
	},
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

//apps
const app = new Vue({
  router
}).$mount('#app');

const nav = new Vue({
	el:'#nav',
	routes: routes,
});