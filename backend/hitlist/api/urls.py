from django import urls
from rest_framework_simplejwt import views as jwtviews

from . import views

urlpatterns = [
    # Authentication
    urls.path('auth/', jwtviews.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    urls.path('auth/refresh/', jwtviews.TokenRefreshView.as_view(), name='token_refresh'),
    urls.path('auth/verify/', jwtviews.TokenVerifyView.as_view(), name='token_verify'),
    urls.path('auth/register/', views.register_user_view, name="user-register"),
    # Dashboard
    urls.path('dashboard/', views.dashboard_list_view, name="dashboard"),
    # Teams
    urls.path('teams/', views.team_list_create_view, name="team-list"),
    urls.path('teams/<int:pk>/', views.team_detail_view, name="team-detail"),
    urls.path('teams/<int:pk>/update/', views.team_update_view, name="team-edit"),
    # Invite
    urls.path('invite/', views.invite_create_view, name="invite-create"),
    # Projects
    urls.path('projects/', views.project_list_create_view, name="project-list"),
    urls.path('projects/<int:pk>/update/', views.project_update_view, name="project-edit"),
    urls.path('projects/<int:pk>/', views.project_detail_view, name="project-detail"),
    urls.path('projects/<int:pk>/tasks/', views.project_task_list_view, name="project-tasks"),
    # Stages
    urls.path('stages/', views.stage_create_view, name="stage-create"),
    urls.path('stages/<int:pk>/update/', views.stage_update_view, name="stage-edit"),
    urls.path('stages/<int:pk>/destroy/', views.stage_destroy_view, name="stage-destroy"),
    # Tasks
    urls.path('tasks/', views.task_list_create_view, name="task-list"),
    urls.path('tasks/<int:pk>/update/', views.task_update_view, name="task-edit"),
    urls.path('tasks/<int:pk>/', views.task_detail_view, name="task-detail"),
    # Comments
    urls.path('comments/', views.comment_create_view, name="comment-create"),
]