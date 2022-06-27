from django import urls
from rest_framework_simplejwt import views as jwtviews
from rest_framework import generics

from . import views

urlpatterns = [
    # Authentication
    urls.path('auth/', jwtviews.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    urls.path('auth/refresh/', jwtviews.TokenRefreshView.as_view(), name='token_refresh'),
    urls.path('auth/verify/', jwtviews.TokenVerifyView.as_view(), name='token_verify'),
    # Teams
    urls.path('teams/', views.team_list_create_view),
    urls.path('teams/<int:pk>', views.team_update_view),
    # Projects
    urls.path('projects/', views.project_list_create_view),
    urls.path('projects/<int:pk>/update/', views.project_update_view, name="project-edit"),
    urls.path('projects/<int:pk>/', views.project_detail_view, name="project-detail"),
    # Tasks
]