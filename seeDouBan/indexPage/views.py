# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
import random,json
# Create your views here.
def index(request):
    return render(request,"index.html")

def getDataList(request):
    try:
        dataType = request.GET['type']
    except:
        #render报错页面
        pass
    #get movie list from db
    if dataType == 'movie':
        testItem = {
            'title':'前世的不舍，今生的绝望',
            'main':['有句话；前生太远，来世太长，人海苍苍，俩心茫茫。 说的是城伯与玉儿。 佛说，今生与你有缘的人，都是前世与你有过纠缠、瓜葛的人。正如今生的哥哥也许是前世的爱人。这就不难理解玉儿与城伯之间不伦的，绝望的兄妹之恋。也不是允的错，也不是伯的错，错的是无法抗挣的宿命。',
    	  '“如果……有来世……我希望…..我们再也不要相遇……” 城伯至死都想摆脱的正是这种宿命的相遇。 十五年的朝夕相处也罢，青梅竹马、两小无猜也罢，都不能断定允就是玉的真命，玉七岁时如天外来物闯进允少年的心。玉如同她的名字，洁白无暇，心如甘泉般清澈。这是一个天使，是上苍赐给允的天使。允那苍白的毫无意义的生存重新焕发光彩。因为这个小女孩，整个世界变得明朗。从此，玉就是允的世界。他注定要为她付出一切。哪怕生命......'],
    	  'good':1924,
    	  'mark':8.0,
    	  'DoubanUrl':'',
    	  'picUrl':'../static/img/chamu.jpeg',
        }
        movieList = []
        for i in range(random.randint(500,500)):
            movieList.append(testItem)
        return HttpResponse(json.dumps(movieList),content_type="application/json")
    elif dataType == 'book':
        #get movie list from db
        testItem = {
            'title':'其实幸福并不遥远',
            'main':['据媒体统计，我国每年“过劳死”的人数已达60万人，超越日本成为“过劳死”第一大国。不但如此，还有越来越多的人也正处于“亚健康”的状态之中。据一家世界知名调查机构指出，中国内地上班族在过去一年内所承受的压力，位列全球第一，巨大的工作压力是导致过劳死的重要原因。在2012年，中央电视台“你幸福吗”的采访节目曾经一度引发国人对幸福的深度思考。',
    	  '不如意事常八九，生活摆在每个人面前的并非都是鲜花和笑脸，经常少不了困难和挫折。此时需要改变的，只能是自己的认知。哈佛大学的MBA、沃尔玛高管、TED演讲家之一、积极性和领导能力培训专家尼尔•帕斯理查认为：幸福的人并不是拥有最好的一切的人，而是把一切都变成最好的人。在他看来，幸福并不难找到，只要掌握了通向幸福的密码，一切都会如愿..........'],
    	  'good':1940,
    	  'mark':8.4,
    	  'DoubanUrl':'',
    	  'picUrl':'../static/img/chamu.jpeg',
        }
        movieList = []
        for i in range(random.randint(500,500)):
            movieList.append(testItem)
        return HttpResponse(json.dumps(movieList),content_type="application/json")
        
def getUserList(request):
    try:
        dataType = request.GET['type']
    except:
        #render报错页面
        pass
    if dataType == 'focus':
        testItem = {
		'name':'张三',
		'focus':11111,
		'broad':123456,
		'douLie':1589,
		'bookMovieList':122233,
		'trans':'http://www.baidu.com',
	  }
        userList = []
        for i in range(random.randint(20,40)):
            userList.append(testItem)
        return HttpResponse(json.dumps(userList),content_type="application/json")
    elif dataType == 'broad':
        testItem = {
		'name':'张三',
		'focus':11111,
		'broad':123456,
		'douLie':1589,
		'bookMovieList':122233,
		'trans':'http://www.baidu.com',
	  }
        userList = []
        for i in range(random.randint(20,40)):
            userList.append(testItem)
        return HttpResponse(json.dumps(userList),content_type="application/json")