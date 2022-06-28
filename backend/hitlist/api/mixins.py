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

class FlattenMixin(object):
    """Flatens the specified related objects in this representation"""
    def to_representation(self, obj):
        assert hasattr(self.Meta, 'flatten'), (
            'Class {serializer_class} missing "Meta.flatten" attribute'.format(
                serializer_class=self.__class__.__name__
            )
        )
        # Get the current object representation
        rep = super(FlattenMixin, self).to_representation(obj)
        # Iterate the specified related objects with their serializer
        for field, serializer_class in self.Meta.flatten:
            serializer = serializer_class(context = self.context)
            objrep = serializer.to_representation(getattr(obj, field))
            #Include their fields, prefixed, in the current   representation
            for key in objrep:
                # rep[field + "__" + key] = objrep[key]
                rep[key] = objrep[key]
        return rep