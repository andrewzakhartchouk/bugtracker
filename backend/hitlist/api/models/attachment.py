from django import db

class Attachment(db.models.Model):
    task = db.models.ForeignKey("Task", on_delete=db.models.CASCADE)
    file = db.models.ForeignKey("File", on_delete=db.models.CASCADE)

    def __str__(self):
        return f"<Attachment {self.file.file}>"