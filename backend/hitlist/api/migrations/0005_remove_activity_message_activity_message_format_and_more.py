# Generated by Django 4.0.5 on 2022-07-07 23:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_attachment_file_profilepicture_delete_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='message',
        ),
        migrations.AddField(
            model_name='activity',
            name='message_format',
            field=models.IntegerField(choices=[(0, 'Undefined'), (1, 'Project Add'), (2, 'Task Assigned'), (3, 'Task Updated'), (4, 'Comment')], default=0),
        ),
        migrations.AddField(
            model_name='activity',
            name='task',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.task'),
        ),
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='end_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='start_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
