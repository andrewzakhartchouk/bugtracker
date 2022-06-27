from django import db

from .. import mixins

class Comment(mixins.HasTimestamps, db.models.Model):
    task = db.models.ForeignKey("Task", on_delete=db.models.CASCADE)
    user = db.models.ForeignKey("User", on_delete=db.models.CASCADE)
    comment = db.models.CharField(max_length=256)
    
    def __str__(self):
        return f"{self.comment[:13]}..."
    