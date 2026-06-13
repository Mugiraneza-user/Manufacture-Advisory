from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'case-studies', views.CaseStudyViewSet)
router.register(r'insights', views.InsightViewSet)
router.register(r'messages', views.MessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/login/', views.LoginView.as_view(), name='api-login'),
]
