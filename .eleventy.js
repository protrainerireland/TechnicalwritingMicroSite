let branding = require('./src/_data/branding.json');
let fs = require('fs');
let { makeSection, slugify, asAccordion } = require('./src/_includes/makeSection');


module.exports = function(config) {

    /* config.addFilter("makeSection", function(content) {
        return `<div>
                    <h1>${content.title}</h1>
                    <p>${content.text}</p>
                </div>`;
    }); */

    config.addFilter("json", function(item){
        return JSON.stringify(item);
    });

    config.addFilter("makebold", function(item){
        return `<b>${item}</b>`;
    })

    // this filter is to fix the problem with the Azure and other MS courses where there is a : in the name
    config.addFilter("removeInvalidChars", function(filename) {
        return filename.replace(/:/ig, "-");
    });

    config.addFilter("slugify", slugify);
    
    config.addFilter("asAccordion", asAccordion);

    // this filter will join the values in an array together
    // needed to put keywords into title in schedule
    // call using {{ site.searchKeywords | join }} from a markdown file
    // you can specify the join character {{ site.searchKeywords | join:"+" }}
    config.addFilter("join", function(arr, joinChar=" ") {
        return arr.join(joinChar);
    });

    // this filter will strip out newline characters and quotation marks from json text
    // used to format the description for the ld+json metadata
    config.addFilter("jsonsafe", function(description){

        return description.replaceAll(/[\r\n]/gm, "");
    });
    config.addFilter("formatScheduleInstance", function(instance, formatType="table") {
        switch(formatType) {
            case "table":
                return `<tr>
                    <td>${instance.name}</td>
                    <td>${instance.date}</td>
                    <td>${instance.location}</td>
                    <td>
                        <a class="btn btn-primary" href="https://www.professional.ie/course_schedule/something.html?id=${instance.id}">Book</a>
                    </td>
                    </tr>`;
                break;
            case "metadata":
            case "default":
                return `<script type="json+ld"></script>`;
                break;

        }
    })
    
    config.addPassthroughCopy({"./src/img/*.*": "img"});
    
    config.addPassthroughCopy({"./src/img/testimonials/*.*": "img/testimonials"});
    config.addPassthroughCopy({"./src/css/*.*": "css"});
    config.addPassthroughCopy({"./src/js/*.*": "js"});
    

    config.setTemplateFormats("html,njk,md,svg");

    config.addFilter("makeSection", makeSection);

    config.addFilter("convertLineBreaks", function(text) {
        return text.replace(/\r\n/g, "<br>");
    })

    return {
        templateFormats: ["html", "njk", "svg"], 
        dir: {
            input: './src', 
            output: './build', 
            layouts: '/_includes/layout'
        }
    };
};
