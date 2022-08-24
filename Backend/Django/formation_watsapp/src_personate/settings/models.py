from django.db import models

# Create your models here.

class About(models.Model):
  """Model definition for About."""

  # TODO: Define fields here
  blog_name = models.CharField(max_length=100)
  image = models.ImageField(upload_to="about")
  subtitle = models.TextField(blank=True, max_length=10000)
  aboutme = models.TextField(max_length=10000)
  tw_link = models.URLField(blank=True)
  lin_link = models.URLField(blank=True)
  git_link = models.URLField(blank=True)

  # class Meta:
  #   """Meta definition for About."""

  #   verbose_name = 'About'
  #   verbose_name_plural = 'Abouts'


