from django import db

from .. import mixins

class File(mixins.HasTimestamps, db.models.Model):
    file = db.models.FileField()
    
    def __str__(self):
        return f"<{self.file}>"