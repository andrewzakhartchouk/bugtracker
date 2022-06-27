from django import db

from .. import mixins

class Image(mixins.HasTimestamps, db.models.Model):
    file = db.models.CharField(max_length=64)
    
    def __str__(self):
        return self.file