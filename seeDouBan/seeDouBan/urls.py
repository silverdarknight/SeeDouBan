from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'seeDouBan.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', 'indexPage.views.index',name='index'),
    url(r'^api/dataList/$', 'indexPage.views.getDataList',name='getDataList'),
    url(r'^api/userList/$', 'indexPage.views.getUserList',name='getUserList'),
)
