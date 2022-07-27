from .comment import comment_create_view
from .dashboard import dashboard_list_view
from .invite import invite_create_view
from .project import project_list_create_view, project_detail_view, project_update_view, project_task_list_view
from .stage import stage_create_view, stage_update_view, stage_destroy_view
from .task import task_list_create_view, task_update_view, task_detail_view, task_destroy_view
from .team import team_list_create_view, team_detail_view, team_update_view
from .user import register_user_view