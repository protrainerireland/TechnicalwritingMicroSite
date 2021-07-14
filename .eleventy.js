module.exports = function(config) {

    config.addFilter("makeSection", function(content) {
        return `<div>${content.title}</div>`;
    });

    return {
        dir: {
            input:'./src', 
            output: './build'
        }
    };
};