module.exports = function(config) {

    config.addFilter("makeSection", function(content) {
        return `<div>
                    <h1>${content.title}</h1>
                    <p>${content.text}</p>
                </div>`;
    });

    return {
        dir: {
            input:'./src', 
            output: './build'
        }
    };
};