
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from myap import views 
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views as v
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'api-token-auth/', obtain_jwt_token),
    url(r'api-token-refresh/', refresh_jwt_token),
    url(r'auth', include('auth.urls')),
    url(r'accounts/', include('django.contrib.auth.urls')),
]
urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 