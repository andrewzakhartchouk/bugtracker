from django import db

class TaskQuerySet(db.models.query.QuerySet):
    def get_my_tasks(self, user_id):
        if not user_id:
            return self.none()
        return self.filter(user__pk=user_id)
    
    def get_upcoming(self):
        return self.order_by("-end_at")

    def get_project_tasks(self, project_id):
        if not project_id:
            return self.none()
        return self.filter(project__pk=project_id)

    def get_team_tasks(self, team_ids):
        return self.filter(project__team__in=team_ids)

class TaskManager(db.models.Manager):
    def get_queryset(self):
        return TaskQuerySet(self.model, using=self._db)

    def get_my_tasks(self):
        user = self.request.user
        return self.get_queryset().get_my_tasks(user.id).get_upcoming()

    def get_project_tasks(self, project_id):
        return self.get_queryset().get_project_tasks(project_id)

    def get_team_tasks(self, team_id):
        return self.get_queryset().get_team_tasks(team_id)