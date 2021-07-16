---
title: Api Course List
layout: general_layout
 
---
# Course List

{% for course in courseapi.courses %} 

{{ course.name }}

{% endfor %} 