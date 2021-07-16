const fetch = require("node-fetch");
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
  console.log( "***Fetching courses" );


  let json = await Cache(`https://professional.ie/api/getCoursesFull.php?keywords=JavaScript`, {
    duration: "1d", 
    type: "json"

  });

  return {
    courses: json.courses
  };

  // GitHub API: https://developer.github.com/v3/repos/#get
  /*
  return fetch(`https://professional.ie/api/getCoursesFull.php?keywords=JavaScript`)
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {

      console.log(json.courses.length);

      // prune the data to return only what we want
      return {
        courses: json.courses
      };
    });
  */
};