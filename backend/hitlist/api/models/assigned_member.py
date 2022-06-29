from django import db


from .. import mixins

class AssignedMember(mixins.AssignedAt, db.models.Model):
    user = db.models.ForeignKey("User", on_delete=db.models.CASCADE)
    task = db.models.ForeignKey("Task", on_delete=db.models.CASCADE)
    
    def __str__(self): 
        return f"<{self.user.name} ({self.task.name[:13]})>"