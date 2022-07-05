from django import db

from .. import mixins

class Activity(mixins.HasTimestamps, db.models.Model):
    
    class Format(db.models.IntegerChoices):
        UNDEFINED = 0
        PROJECT_ADD = 1
        TASK_ASSIGNED = 2
        TASK_UPDATED = 3
        COMMENT = 4

    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    task = db.models.ForeignKey("Task", blank=True, null=True, on_delete=db.models.CASCADE)
    sender = db.models.ForeignKey("User", related_name="sender", null=True, on_delete=db.models.CASCADE)
    receiver = db.models.ForeignKey("User", related_name="receiver", null=True, on_delete=db.models.CASCADE)
    message_format = db.models.IntegerField(choices=Format.choices, default=Format.UNDEFINED)
    
    def __str__(self): 
        return f"<{self.sender.name} with {self.receiver.name}>"