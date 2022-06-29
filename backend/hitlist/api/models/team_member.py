from django import db

from .. import mixins

class TeamMember(mixins.AssignedAt, db.models.Model):
    user = db.models.ForeignKey("User", on_delete=db.models.CASCADE)
    team = db.models.ForeignKey("Team", on_delete=db.models.CASCADE)
    
    def __str__(self): 
        return f"<{self.user.name} ({self.team.name})>"