from django import db

class ProfilePicture(db.models.Model):
    user = db.models.ForeignKey("User", on_delete=db.models.CASCADE)
    file = db.models.ForeignKey("File", on_delete=db.models.CASCADE)

    def __str__(self):
        return f"<Profile picture {self.file.file}>"