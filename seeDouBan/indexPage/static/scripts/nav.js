Vue.component('nav-item',{
	template:`<div class="nav">
				<div class="nav_detail">
					<div class="nav_detail_title">
						<div class="nav_detail_title_logo"></div>
						<h1>看豆瓣</h1>
					</div>
					<h4>每日一更</h4>
				</div>
				<div class="nav_link">
					<router-link to="/movieBookApp/movieTop500">精彩评论</router-link>
					<router-link to="/userRank/seeTop500">用户评论</router-link>
					<router-link to="/imgDataPage/book">图说图影</router-link>
			    	<router-link to="/aboutSiteApp">关于本站</router-link>
				</div>
			</div>`,
});