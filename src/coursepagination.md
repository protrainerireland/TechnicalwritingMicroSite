---
layoutsss: course_layout
paginations:
    data: courseapi.courses
    size: 1
    alias: course
permalinksss: "courses/{{ course.name | slug }}/"
permalink: testpage.html
---
{{ courseapi | json }}
