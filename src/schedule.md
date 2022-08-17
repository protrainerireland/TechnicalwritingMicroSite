---
layout: general_layout
title: Schedule
tags: [main]
page:
    type: schedule
---

<hr class="my-2">
<h1>{{ site.searchKeywords | join }} Course Schedule</h1>

<table class="table">
<thead>
    <tr>
       <th>Name</th><th>Description</th><th>Location</th>
    </tr> 
</thead>
<tbody>
</tbody>

{% for instance in coursesapifull.schedule %}
<tr>
<td><a href="/courses/{{ instance.name | slug }}/">{{ instance.name }}</a></td>
<td>{{ instance.date }}</td>
<td>{{ instance.location}}</td>
</tr>
{% endfor %}

</table>
