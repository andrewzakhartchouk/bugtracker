# Generated by Django 4.0.5 on 2022-07-09 02:23

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_activity_message_activity_message_format_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Invite',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.team')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
