const fs = require('fs');

module.exports = {


    makeSection: function(section) {

        let rawData = fs.readFileSync(`${__dirname}/../_data/site.json`);
        let site = JSON.parse(rawData);


        let html;
        let list;
        
        let animationDelay = `data-aos-delay="${site.animation.delay ? site.animation.delay : 0}"`;
        let animationOffset = `data-aos-offset="${section.animation ? section.animation.offset : site.animation.defaultOffset }"`;

        switch (section.type) {
            case 'text':
                html = `<section id="${section.id}" class="section">
                            <h1>${section.title}</h1>
                            <p>${section.content}</p>
                        </section>`;
                break;
            case 'placeholder':
                html = ``;
                break;
            case 'banner':

                html = `<section class="section banner">
                        <div class="container">
                        <div class="row">
                            <div class="col-md-6" data-aos="fade-left" ${animationDelay}>
                            <p class="promo-title">${ section.title }</p>
                            <p class="join-title">${ section.subtitle }</p>
                            </div>
                            <div class="col-md-6" data-aos="fade-right" ${animationDelay}>
                                <img src="${ section.image }" alt="" class="img-fluid">
                            </div>
                        </div>
                        </div>
                        <!--- Background wave Hero ---->
                        <img src="${ section.background }" class="bottom-img" alt="">
                    </section>`;
                break;
            case "grid":
                html = `<section id="${section.id}" class="section">
                            <div class="container text-center">
                            <h3 class="title text-center">${ section.title }</h3>
                            <div class="row text-center">
                            `;
                section.items.forEach((item, index) => {
                    html += `<div class="col-md-4 services" data-aos="flip-left" data-aos-delay="${ site.animation.delay * (index + 1) }" ${ animationOffset }>
                                <img src="${ item.image }" class="service-img"   alt="">
                                <h4>${ item.title }</h4>
                                <p>${ item.text }</p>
                            </div>`;

                });

                html += `</div>
                        </div>
                    </section>`;
                break;
            case "keywordtext":


                //let defaultTemplate = `<div>${site.searchKeywords.join(" ")}</div>`;
                let defaultTemplate = `${site.searchKeywords[0]} is one of the most popular coding languages in the world. The job market for ${ site.searchKeywords[0] } developers is robust and consistent, making it a great programming language to learn. Our courses can give you the skills you need to work effectively with ${ site.searchKeywords[0] }.  Why attend one of our ${ site.searchKeywords[0] } courses? If you're interested working effectively with ${ site.searchKeywords[0] } to benefit your organisation and to get an edge over your competitors, or simply to learn a highly lucrative skill then you should consider our ${ site.searchKeywords[0] } training course.</p>`
                
                if (section.image) {
                    //..tbd
                }

                if (section.left) {
                    // tbd
                }
                html = `<section id="${section.id}" class="section">
                    <div class="container">
                    <h3 class="title text-center">${ section.title }</h3>
                    <div class="row ${section.imagePosition=="left" ? "flex-row-reverse" :""}">
                        <div class="${section.image ? 'col-md-6' : 'col-md-12'} about" 
                        data-aos="fade-left" ${ animationDelay } ${animationOffset}
                        data-aos-anchor="#${section.id}"
                        >
                        <p class="about-title">${ section.content.title }</p>
                        <p>${ defaultTemplate }</p>
                        </div>`;
                    if (section.image) {
                        html += `<div class="col-md-6" 
                                data-aos="fade-right" ${ animationDelay }  ${animationOffset}
                                data-aos-anchor="#${section.id}"
                                >
                                    <img src="${ section.image }" class="img-fluid" alt="">
                                </div>`;
                    }    

                html += `</div>
                    </div>
                </section>`;
                break;

            case "animatedtwocolumns":
                //let list = "<ul>";
                //section.content.list.map(item=>list += `<li>${item}</li>`);
                //list += "</ul>";
                list = `<ul>${section.content.list.map(item=>`<li>${item}</li>`).join("")}</ul>`;

                html = `<section id="${section.id}" class="section">
                    <div class="container">
                    <h3 class="title text-center">${ section.title }</h3>
                    <div class="row">
                        <div class="col-md-6 about" data-aos="fade-left" ${ animationDelay } ${animationOffset}>
                        <p class="about-title">${ section.content.title }</p>
                        ${list}
                        </div>
                        <div class="col-md-6" data-aos="fade-right" ${ animationDelay } ${animationOffset}>
                            <img src="${ section.content.image }" class="img-fluid" alt="">
                        </div>
                    </div>
                    </div>
                </section>`;


                html = `<section class="pb-0" id="${section.id}">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6" data-aos="fade-left" ${animationDelay} ${animationOffset}>
                                <div class="heading-area">
                                    <span class="sub-title"></span>
                                    <h4 class="">
                                        <span class="alt-color js-rotating">
                                            Im'going to start a business BUT I'm not going to make any real effort to see if it will be profitable or even survive!,
                                            Finance! I leave that to the accontants<br><br><br>,
                                            I'll pick up what I need to know once I get started!<br><br><br>
                                        </span>
                                    </h4>
                                    <p class="para">
                                        Sound ludicrous? We think so too but it is the way many entrepreneurs approach business and one  of the main reasons why so many new ventures fail so quickly.
            
                                        We developed www.dolearnfinance.com specifically to increase financial skills in the start-up sector by providing an attractive way for entrepreneurs to rapidly acquire them and be ready to engage confidently with providers of funds.
            
                                        The unique feature of this site is the complete alignment of learning and applying. The dedicated modelling applications which create an innovative learn-by-doing programme are then used to follow through and build business models and financial projections for real business start-ups.
                                    </p>
            
                                </div>
                            </div>
                            <div class="col-lg-6" data-aos="fade-right" ${animationDelay} ${animationOffset}>
                                <div class="half-img mt-5 pt-4 mt-lg-0 pt-lg-0">
                                    <img alt="vector" src="${section.content.image}">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                `;




                break;
    

            case "listwithimage":
                //let list = "<ul>";
                //section.content.list.map(item=>list += `<li>${item}</li>`);
                //list += "</ul>";
                list = `<ul>${section.content.list.map(item=>`<li>${item}</li>`).join("")}</ul>`;

                html = `<section id="${section.id}" class="section">
                    <div class="container">
                    <h3 class="title text-center">${ section.title }</h3>
                    <div class="row">
                        <div class="col-md-6 about" data-aos="fade-right" ${animationDelay} ${animationOffset}>
                        <p class="about-title">${ section.content.title }</p>
                        ${list}
                        </div>
                        <div class="col-md-6" data-aos="fade-left" ${animationDelay} ${animationOffset}>
                            <img src="${ section.content.image }" class="img-fluid" alt="">
                        </div>
                    </div>
                    </div>
                </section>`;
                break;
            case 'quotes':
                let quotes = section.content.quotes.map((quote, index) => `<div class="col-md-5 testimonials" data-aos="fade-left" data-aos-delay="${ site.animation.delay * (index + 1) }" ${animationOffset}>
                    <p class="feedback">"${quote.text}"</p>
                    <img src="${quote.image}"  alt="">
                    <p class="user-details"><b>${quote.name}</b><br>${ quote.jobtitle }</p>
                    </div>`).join("");

                html = `<section id="${ section.id }" class="section">
                            <div class="container">
                            <h3 class="title text-center">${ section.text }</h3>
                            <div class="row offset-1">
                                ${quotes}
                            </div>
                            </div>
                        </section>`;
                break;

            default: 
                html = `<section id="${section.id}" class="section"><code>${JSON.stringify(section)}</code></section>`;
                break;
        }
        return html;
    }
}
