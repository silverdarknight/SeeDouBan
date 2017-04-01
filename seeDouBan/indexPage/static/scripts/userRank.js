//用户排名
var userRankList = {
	template:`<div>
				<search-item></search-item>
				<router-view></router-view>
			</div>`,
};


var userSeeRankTable = {
	template:`<div id="userRank">
					<guanzhu-brodcast-top :chosed="chosed"></guanzhu-brodcast-top>
					<div class="userRank">
						<table cellpadding="0" cellspacing="1">
							<tr>
								<th class="userRank_list">#</th>
								<th class="userRank_userName">用户名</th>
								<th class="userRank_focus">被关注</th>
								<th class="userRank_broadcast">广播</th>
								<th class="userRank_DouLie">豆列</th>
								<th class="userRank_shuyinji">书影记</th>
								<th class="userRank_trans">传送门</th>
							</tr>
							<tr
								v-for="( userInfo,index ) in currentPageUserData"
							>
								<td>{{index+1}}</td>
								<td>{{userInfo.name}}</td>
								<td>{{userInfo.focus}}</td>
								<td>{{userInfo.broad}}</td>
								<td>{{userInfo.douLie}}</td>
								<td>{{userInfo.bookMovieList}}</td>
								<td><a :href="userInfo.trans" class="uesrLeadTo"></a></td>
							</tr>
						</table>
					</div>
					<page-list :page-list="pageData"></page-list>
				</div>`,
	data:function(){
		var seeList = [];
		$.ajax({
			url: '/api/userList/',
			async:false,
			type: 'GET',
			dataType: 'json',
			data:{'type':'focus'},
			success:function(data,textStatus,jqXHR){
				seeList = data;
				console.log(data.length);
			}
		});
		return {
			userData:seeList,
			pageData:this.getPage(seeList),
			chosed:'focus',
		}
	},
	computed:{
		currentPageUserData:function(){
			return this.userData.slice(
				(this.pageData.currentPage-1)*this.pageData.content
				,this.pageData.currentPage*this.pageData.content);
		},
	},
	methods:{
		getPage:function(data){
			var pageList = {
				currentPage:1,
				content:10,
				endPage:20,
			};
			pageList.endPage = pageList.endPage==0?1:Math.ceil(data.length/pageList.content);
			pageList.currentPage = 1;
			return pageList;
		},
		//更改数据为broad or see
		/*
		changeData:function(type){
			if(type="broad"){
				this.userData = broadList;
				this.pageData = this.getPage(this.userData);
			}
			else {
				this.userData = seeList;
				this.pageData = this.getPage(this.userData);
			}
		}
		*/
	},
	components:{
		'guanzhuBrodcastTop':guanzhuBrodcastTop,
	}
};
var userBroadRankTable = {
	template:`<div id="userRank">
					<guanzhu-brodcast-top :chosed="chosed"></guanzhu-brodcast-top>
					<div class="userRank">
						<table cellpadding="0" cellspacing="1">
							<tr>
								<th class="userRank_list">#</th>
								<th class="userRank_userName">用户名</th>
								<th class="userRank_focus">被关注</th>
								<th class="userRank_broadcast">广播</th>
								<th class="userRank_DouLie">豆列</th>
								<th class="userRank_shuyinji">书影记</th>
								<th class="userRank_trans">传送门</th>
							</tr>
							<tr
								v-for="( userInfo,index ) in currentPageUserData"
							>
								<td>{{index+1}}</td>
								<td>{{userInfo.name}}</td>
								<td>{{userInfo.focus}}</td>
								<td>{{userInfo.broad}}</td>
								<td>{{userInfo.douLie}}</td>
								<td>{{userInfo.bookMovieList}}</td>
								<td><a :href="userInfo.trans" class="uesrLeadTo"></a></td>
							</tr>
						</table>
					</div>
					<page-list :page-list="pageData"></page-list>
				</div>`,
	data:function(){
		var broadList = [];
		$.ajax({
			url: '/api/userList/',
			async:false,
			type: 'GET',
			dataType: 'json',
			data:{'type':'broad'},
			success:function(data,textStatus,jqXHR){
				broadList = data;
				console.log(data.length);
			}
		});
		return {
			userData:broadList,
			pageData:this.getPage(broadList),
			chosed:'broad',
		}
	},
	computed:{
		currentPageUserData:function(){
			return this.userData.slice(
				(this.pageData.currentPage-1)*this.pageData.content
				,this.pageData.currentPage*this.pageData.content);
		},
	},
	methods:{
		getPage:function(data){
			var pageList = {
				currentPage:1,
				content:10,
				endPage:20,
			};
			pageList.endPage = pageList.endPage==0?1:Math.ceil(data.length/pageList.content);
			pageList.currentPage = 1;
			return pageList;
		},
		//更改数据为broad or see
		/*
		changeData:function(type){
			if(type="broad"){
				this.userData = broadList;
				this.pageData = this.getPage(this.userData);
			}
			else {
				this.userData = seeList;
				this.pageData = this.getPage(this.userData);
			}
		}
		*/
	},
	components:{
		'guanzhuBrodcastTop':guanzhuBrodcastTop,
	}
};