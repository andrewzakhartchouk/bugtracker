from django import db

from .. import mixins

class Stage(mixins.HasTimestamps, db.models.Model):
    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    name = db.models.CharField(max_length=16)
    color = db.models.CharField(max_length=16)
    order = db.models.IntegerField(default=1)
    
    def __str__(self):
        return self.name
    