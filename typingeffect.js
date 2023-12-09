// const wrapper = document.getElementById('wrapper');
// const mainwrite = document.getElementById('main_write');


// const h1 = document.createElement('h1');
// h1.setAttribute('class', 'realitystevens'); // Add class
// h1.setAttribute('id', 'realitystevens'); // Add id

// const text = `Reality <br> Stevens<span class="blue_color">.</span>`;
// h1.innerHTML = text

// wrapper.insertBefore(h1, wrapper.children[0])



const realitystevens = document.getElementById('realitystevens');

var i = 0;
var speed = 150; // Duration effect in milliseconds
const text = `Reality <br> Stevens<span class="blue_color">.</span>`;


function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === '<') {
            // Skip the entire HTML tag
            const closingBracketIndex = text.indexOf('>', i);
            i = closingBracketIndex + 1;
        } else {
            realitystevens.innerHTML += text.charAt(i);
            i++;
        }

        setTimeout(typeWriter, speed);
    }
}

typeWriter()
