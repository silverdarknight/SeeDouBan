var imgDataPageBook = {
	data:function(){
		return {
			imgData:{
				title:[
					['爬取书籍数量','18,035,309'],
					['爬取书籍年份','1900-2016'],
					['爬取作者数量','123'],
					['爬取出版社数量','54022'],
				],
				imgUrls:[
					'../static/img/testImg.png',
					'../static/img/testImg.png',
					'../static/img/testImg.png',
					'../static/img/testImg.png',
					'../static/img/testImg.png',
					'../static/img/testImg.png']
			},
		}
	},
	template:`<div class="imgDataPage_main">
				<div class="targetDetailText">
					<div class="targetDetailText_part"
						v-for="item in imgData.title"
					>
						<p>{{item[0]}}</p>
						<p>{{item[1]}}</p>
					</div>
				</div>
				<div class="targetDetailImg">
					<div class="targetDetailImg_part" 
						v-for="url in imgData.imgUrls"
					>
						<img v-bind:src="url">
					</div>
				</div>
			</div>`,
};
var imgDataPageMovie = {
	data:function(){
		return {
			imgData:{
				title:[
					['爬取电影数量','18,035,309'],
					['爬取电影年份','1900-2016'],
					['爬取电影国家','123'],
					['爬取电影导演','54022'],
				],
				imgUrls:[
					'../static/img/movieTest.png',
					'../static/img/movieTest.png',
					'../static/img/movieTest.png',
					'../static/img/movieTest.png',
					'../static/img/movieTest.png',
					'../static/img/movieTest.png']
			},
		}
	},
	template:`<div class="imgDataPage_main">
				<div class="targetDetailText">
					<div class="targetDetailText_part"
						v-for="item in imgData.title"
					>
						<p>{{item[0]}}</p>
						<p>{{item[1]}}</p>
					</div>
				</div>
				<div class="targetDetailImg">
					<div class="targetDetailImg_part" 
						v-for="url in imgData.imgUrls"
					>
						<img v-bind:src="url">
					</div>
				</div>
			</div>`,
};
var imgDataPage = {
	
	template:`<div id="imgDataPages">
		<div class="imgDataPage">
			<img-data-page-left></img-data-page-left>
			<router-view></router-view>
		</div>
	</div>`,
	components:{
		'imgDataPageLeft':imgDataPageLeft,
	},
};