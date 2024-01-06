'use strict'

class TextStyler {
    constructor() {
        this.textArea = document.getElementById('text');
        this.resultParagraph = document.querySelector('.text__result p');
        this.showTextButton = document.querySelector('button');

        this.boldCheckbox = document.getElementById('bold');
        this.underlineCheckbox = document.getElementById('underline');
        this.italicsCheckbox = document.getElementById('italics');

        this.leftRadio = document.getElementById('left');
        this.rightRadio = document.getElementById('right');
        this.justifyRadio = document.getElementById('justify');

        this.showTextButton.addEventListener('click', () => this.applyStyles());
    }

    applyStyles() {
        let styles = [];

        if (this.boldCheckbox.checked) {
            styles.push('font-weight: bold;');
        }

        if (this.underlineCheckbox.checked) {
            styles.push('text-decoration: underline;');
        }

        if (this.italicsCheckbox.checked) {
            styles.push('font-style: italic;');
        }

        if (this.leftRadio.checked) {
            styles.push('text-align: left;');
        } else if (this.rightRadio.checked) {
            styles.push('text-align: right;');
        } else if (this.justifyRadio.checked) {
            styles.push('text-align: justify;');
        }

        const appliedStyles = styles.join(' ');

        this.resultParagraph.style.cssText = appliedStyles;
        this.resultParagraph.innerText = this.textArea.value;
    }
}