//精彩评论
var movieBookPage_list = {
	template:`<div id="itemList">
					<search-item></search-item>
					<router-view></router-view>
				</div>`,
};


var movieItemList = {
	template:`<div>
				<movie-book-top :chosed="chosed"></movie-book-top>
				<item-list :item-data-list="currentPageData"></item-list>
				<page-list :page-list="pageData"></page-list>
			</div>`,
	data:function(){
		var itemList = [];
		$.ajax({
			url: '/api/dataList/',
			async:false,
			type: 'GET',
			dataType: 'json',
			data:{'type':'movie'},
			success:function(data,textStatus,jqXHR){
				itemList = data;
				console.log(data.length);
			}
		});
		
		return {
			itemList:itemList,
			pageData:this.getPage(itemList),
			chosed:'movie',
		}
	},
	computed:{
		currentPageData:function(){
			return this.itemList.slice(
				(this.pageData.currentPage-1)*this.pageData.content
				,this.pageData.currentPage*this.pageData.content);
		},
	},
	methods:{
		getPage:function(data){
			var pageList = {
				currentPage:1,
				content:7,
				endPage:20,
			};
			pageList.endPage = pageList.endPage==0?1:Math.ceil(data.length/pageList.content);
			pageList.currentPage = 1;
			return pageList;
		},
	},
};
var bookItemList = {
	template:`<div>
				<movie-book-top :chosed="chosed"></movie-book-top>
				<item-list :item-data-list="currentPageData"></item-list>
				<page-list :page-list="pageData"></page-list>
			</div>`,
	data:function(){
		//使用ajax得到bookList
		var itemList = [];
		$.ajax({
			url: '/api/dataList/',
			async:false,
			type: 'GET',
			dataType: 'json',
			data:{'type':'book'},
			success:function(data,textStatus,jqXHR){
				itemList = data;
				console.log(data.length);
			}
		});
		return {
			itemList:itemList,
			pageData:this.getPage(itemList),
			chosed:'book',
		}
	},
	computed:{
		currentPageData:function(){
			return this.itemList.slice(
				(this.pageData.currentPage-1)*this.pageData.content
				,this.pageData.currentPage*this.pageData.content);
		},
	},
	methods:{
		getPage:function(data){
			var pageList = {
				currentPage:1,
				content:7,
				endPage:20,
			};
			pageList.endPage = pageList.endPage==0?1:Math.ceil(data.length/pageList.content);
			pageList.currentPage = 1;
			return pageList;
		},
	},
};