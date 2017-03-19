var movie_book_item = Vue.extend({
	props:['movieBookData'],
	template:`<div class="itemList_main_item">
				<div class="itemList_main_item_contain">
					<div class="itemList_main_item_left">
						<div class="itemList_main_item_title">
							<a href="">{{movieBookData.title}}</a>
						</div>
						<a class="itemList_main_item_intro" href="">
							<p v-for="movieBookData_p in movieBookData.main">{{movieBookData_p}}</p>
						</a>
						<div class="itemList_main_item_good">
							<span>{{movieBookData.good}}</span>
						</div>
					</div>
					<div class="itemList_main_item_right">
						<a href="" class="itemList_main_item_picLink">
							<img class="itemList_main_item_pic" src="../static/img/chamu.jpeg" alt="茶母">
						</a>
						<div class="itemList_main_item_mark">
							<span>豆瓣评分{{movieBookData.mark}}</span>
						</div>
					</div>
				</div>
				<hr>
			</div>`,
});
Vue.component('item-list',{
	props:['itemDataList'],
	template:`<div class="itemList_main">
					<movie-book-item v-for="item_data in itemDataList" :movie-book-data="item_data"></movie-book-item>
				</div>`,
	components:{
		'movieBookItem':movie_book_item
	},
});