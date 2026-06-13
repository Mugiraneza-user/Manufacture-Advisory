from django.db import models

class CaseStudy(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    metadata = models.TextField(blank=True)
    desc = models.TextField(blank=True)
    metrics = models.JSONField(default=list, blank=True)
    link = models.URLField(max_length=500, blank=True)
    is_featured = models.BooleanField(default=False)
    is_side = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Insight(models.Model):
    category = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    desc = models.TextField(blank=True)
    link = models.URLField(max_length=500, blank=True)
    is_top = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Message(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=255, blank=True)
    interest = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.email}"
