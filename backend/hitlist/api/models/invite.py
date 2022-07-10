from django import db
from uuid import uuid4

from .. import mixins

class Invite(mixins.HasTimestamps, db.models.Model):
    uuid = db.models.UUIDField(primary_key=True, default=uuid4, editable=False)
    team = db.models.ForeignKey("Team", on_delete=db.models.CASCADE)
    email = db.models.EmailField(unique=True)

    def __str__(self): 
        return f"<{self.team.name} invite to {self.email} ({self.uuid})>"