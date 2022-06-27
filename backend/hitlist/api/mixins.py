from django import db

class HasTimestamps(db.models.Model):
    created_at = db.models.DateTimeField(auto_now_add=True)
    updated_at = db.models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
        
class AssignedAt(db.models.Model):
    assigned_at = db.models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract = True