from django import db

from .. import mixins

class Project(mixins.HasTimestamps, db.models.Model):
    team = db.models.ForeignKey("Team", on_delete=db.models.CASCADE)
    name = db.models.CharField(max_length=32)
    archived = db.models.BooleanField(default=False)
    project_members = db.models.ManyToManyField("User", through="ProjectMember")
    
    def __str__(self):
        return f"<{self.name} ({self.team.name})>"

