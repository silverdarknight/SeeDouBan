Vue.component('search-item',{
	template:`<div class="searchItem">
					<form action="" method="get">
						<input type="text" name="searchName" id="searchArea" placeholder="搜索 ...">
					</form>
				</div>`
});
Vue.component('movie-book-top',{
	template:`<div class="movieOrBook">
					<button id="movieTopBtn">影评TOP500</button>
					<button id="bookTopBtn">书评TOP500</button>
				</div>`,
});