Vue.component('search-item',{
	template:`<div class="searchItem">
					<form action="" method="get">
						<input type="text" name="searchName" id="searchArea" placeholder="搜索 ...">
					</form>
				</div>`
});
Vue.component('movie-book-top',{
	props:['chosed'],
	template:`<div class="movieOrBook">
					<router-link to="/movieBookApp/movieTop500" id="movieTopBtn" :class="onChosen(chosed,'movie')">影评TOP500</router-link>
					<router-link to="/movieBookApp/bookTop500" id="bookTopBtn" :class="onChosen(chosed,'book')">书评TOP500</router-link>
				</div>`,
	methods:{
		onChosen:function(c,s){
			return {
				movieOrBook_chose:c == s?true:false,
			}
		}
	},
});
var guanzhuBrodcastTop = Vue.extend({
	props:['chosed'],
	template:`<div class="movieOrBook">
					<router-link to="/userRank/seeTop500" id="seeTopBtn" :class="onChosen(chosed,'focus')">关注TOP500</router-link>
					<router-link to="/userRank/broadTop500" id="broadTopBtn" :class="onChosen(chosed,'broad')">广播TOP500</router-link>
				</div>`,
	methods:{
		onChosen:function(c,s){
			return {
				movieOrBook_chose:c == s?true:false,
			}
		}
	},
});
var imgDataPageLeft = Vue.extend({
	template:`<div class="imgDataPage_leftNav">
				<ul>
					<li>
						<span><router-link to="/imgDataPage/book">书籍</router-link></span>
					</li>
					<li>
						<span><router-link to="/imgDataPage/movie">电影</router-link></span>
					</li>
					<li>
						<span><router-link to="/imgDataPage/TV">电视</router-link></span>
					</li>
				</ul>
			</div>`,
});