// ES 6 SYNTAX
class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// ES5 SYNTAX
function Clock1({ template }) {
    this.template = template;
}

Clock1.prototype.render = function() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
};

Clock1.prototype.stop = function() {
    clearInterval(this.timer);
};

Clock1.prototype.start = function() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
};


// create and start function variables
let clock = new Clock({template: 'h:m:s'});
clock.start();
