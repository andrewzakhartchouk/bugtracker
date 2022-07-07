from email.policy import default
from django import db
from uuid import uuid4

from .. import mixins

class Invite(mixins.HasTimestamps, db.models.Model):
    
    class Status(db.models.IntegerChoices):
        PENDING = 0
        APPROVED = 1
    
    uuid = db.models.UUIDField(primary_key=True, default=uuid4, editable=False)
    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    email = db.models.EmailField(_('email address'), unique=True)
    status = db.models.IntegerField(choices=Status.choices, default=Status.PENDING)