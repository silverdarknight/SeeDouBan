var pageList = Vue.component('page-list',{
	props:['pageList'],
	computed:{
		pageData:function(){
			return this.getAroundPage(this.pageList.currentPage,5,this.pageList.endPage);
		},
		currentPageMovieBookData:function(){
			return this.movieBookItemList.slice(
				(this.pageList.currentPage-1)*this.pageList.content
				,this.pageList.currentPage*this.pageList.content);
		},
	},
	methods:{
		getAroundPage:function(n,offset,endpage){//
			var ans = {
				pageOff:[],
				prev:true,
				end:true,
				curPage:n,
				endPage:endpage,
				nextPage:true,
				prevPage:true,
			};
			if(n-offset>1){
				for(var i=0;i<offset;i++){
					ans.pageOff.push(n-offset+i);
				}
				ans.prev = true;
			}
			else if(n-offset<=1){
				for(var i=0;i<n-1;i++){
					ans.pageOff.push(i+1);
				}
				ans.prev = false;
			}

			ans.pageOff.push(n);
			
			if(n+offset<endpage){
				for(i = 0;i<offset;i++){
					ans.pageOff.push(n+1+i);
				}
				ans.end = true;
			}
			else if(n+offset>=endpage){
				for(i=n+1;i<=endpage;i++){
					ans.pageOff.push(i);
				}
				ans.end = false;
			}
			if(n == 1)ans.prevPage = false;
			if(n == ans.endPage)ans.nextPage = false;
			return ans;
		},
		changeCurrentPage:function(e){
			//console.log('change current page');
			var changePage = e.target.innerText;
			if(changePage == '上一页') {
				//console.log('prev page');
				this.pageList.currentPage--;
			}
			else if(changePage == '下一页') {
				//console.log('prev page');
				this.pageList.currentPage++;
			}
			else{
				this.pageList.currentPage = parseInt(changePage);
			}
		},
	},
	template:`<div class="itemList_pageList">
						<button class="itemList_pageList_prev" 
							v-on:click="changeCurrentPage"
							v-if="pageData.prevPage"
						>
							上一页
						</button>
						<div class="itemList_pageList_pages">
							<span 
								v-if="pageData.prev"
								>
								<button class="itemList_pageList_page"
									 v-on:click="changeCurrentPage"
								>
									1
								</button>
								<span>......</span>
							</span>
							<button class="itemList_pageList_page" 
								v-bind:class="{itemList_pageList_page_current:pageItem==pageData.curPage}" 
								v-for="pageItem in pageData.pageOff"
								 v-on:click="changeCurrentPage"
								>
								{{pageItem}}
							</button>
							<span 
								v-if="pageData.end">
								<span>......</span>
								<button class="itemList_pageList_page"
									 v-on:click="changeCurrentPage"
								>
								{{pageData.endPage}}
								</button>
							</span>
						</div>
						<button class="itemList_pageList_next"
							v-on:click="changeCurrentPage"
							v-if="pageData.nextPage"
						>
							下一页
						</button>
					</div>`
});