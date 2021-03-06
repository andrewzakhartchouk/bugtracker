from django import db

from .. import mixins, managers

class Task(mixins.HasTimestamps, db.models.Model):
    
    class Priority(db.models.IntegerChoices):
        NONE = 0
        HIGH = 1
        MEDIUM = 2
        LOW = 3
    
    project = db.models.ForeignKey("Project", on_delete=db.models.CASCADE)
    stage = db.models.ForeignKey("Stage", on_delete=db.models.CASCADE)
    name = db.models.CharField(max_length=128)
    priority = db.models.IntegerField(choices=Priority.choices, default=Priority.NONE)
    tags = db.models.CharField(max_length=24)
    start_at = db.models.DateTimeField(auto_now_add=True, null=True, blank=True)
    end_at = db.models.DateTimeField(null=True, blank=True)
    description = db.models.CharField(max_length=1024, null=True, blank=True)
    submitted_by = db.models.ForeignKey("User", on_delete=db.models.CASCADE, related_name="submitted_by")
    checked = db.models.BooleanField(default=False)
    assigned_members = db.models.ManyToManyField("User", through="AssignedMember")

    objects = managers.TaskManager()

    @property
    def comment_count(self):
        return self.comment_set.count()
    
    def __str__(self):
        return f"<{self.name[:25]}>"