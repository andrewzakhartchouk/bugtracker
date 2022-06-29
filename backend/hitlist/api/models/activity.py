from django import db

from .. import mixins

class Activity(mixins.HasTimestamps, db.models.Model):
    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    message = db.models.CharField(max_length=256)
    
    def __str__(self): 
        return f"<{self.message[:13]}...>"