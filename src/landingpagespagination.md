---
layout: landingpage_layout
pagination:
    data: coursesapifull.savedSearches  
    size: 1
    alias: search
<<<<<<< HEAD
permalink: "saved_searches/{{search.location | slugify | removeInvalidChars }}/{{search.keyword | slugify | removeInvalidChars}}/{{search.title | slugify | removeInvalidChars}}.html"
=======
permalink: "saved_searches/{{search.location | slug | removeInvalidChars }}/{{search.keyword | slug | removeInvalidChars}}/{{search.title | slug | removeInvalidChars}}.html"
>>>>>>> fcd423f514698079a4a319a49231f85513f621ab
page:
    type: landing
--- 
{{ keyword | json }}
