from django import db

from .. import mixins

class ProjectMember(mixins.AssignedAt, db.models.Model):
    user = db.models.ForeignKey("User", on_delete=db.models.CASCADE)
    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    project_lead = db.models.BooleanField(default=False)
    
    def __str__(self): 
        return f"<{self.user.name} ({self.project.name})>"