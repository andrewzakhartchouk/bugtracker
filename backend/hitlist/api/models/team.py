from django import db

from .. import mixins

class Team(mixins.HasTimestamps, db.models.Model):
    name = db.models.CharField(max_length=32)
    team_members = db.models.ManyToManyField("User", through="TeamMember")
    
    def __str__(self):
        return self.name