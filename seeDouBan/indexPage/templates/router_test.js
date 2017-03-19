
const Foo = { template: '<div>foo</div>' };
const Bar = Vue.component('movie-book-top',{
	template:`<div class="movieOrBook">
					<button id="movieTopBtn">影评TOP500</button>
					<button id="bookTopBtn">书评TOP500</button>
				</div>`,
});

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
const app = new Vue({
  router
}).$mount('#container');
//console.log('message');