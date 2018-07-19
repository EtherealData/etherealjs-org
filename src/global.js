import Component from '../assets/etherealjs/src/component.js';
import Static from '../assets/etherealjs/src/static.js';

export class Header extends Component {
    constructor(config){
        super(config);
    }
    style(){
        return {
            '': {
                'height': '58px',
                'background': '#127fbd',
                'font-size': '24px',
                'img': {
                    'width': '46px',
                    'margin-top': '10px',
                    'margin-left': '20px'
                },
                'h1': {
                    'color': '#fff',
                    'font-weight':'200',
                    'padding-top': '31px',
                    'display': 'inline-block',
                    'margin-left': '55px'
                }   
            }
            
        }
    }
    draw() {
        return `<header>
                    <div class="container">
                        <img src="./assets/images/logo-square-small-white.png" alt="">
                    </div>
                </header>`
    }
}

export class Button extends Component {
    constructor(config) {
        super(config);
    }
    style() {
        return {
            '': {
                background: '#127fbd',
                padding: '17px 38px',
                'border-radius': '3px',
                color: '#fff',
                'text-decoration': 'none'
            },
            ':hover': {
                background: Static.shade('#127fbd', 10),
                transition: 'background 100ms'
            }
        }
    }
    draw() {
        return `<a href="${this.properties.url}">${this.properties.text}</a>`
    }
}

export class Footer extends Component {
    constructor(config) {
        super(config);
    }
    _onLoaded(){
        this.properties.date = new Date().getFullYear();
        super._onLoaded();
    }
    style() {
        return {
            '': {
                'padding': '30px 0',
                'background': '#111'
            },
            'img': {
                'width': "220px"
            },
            'p': {
                'color': '#fff'
            }
        }
    }
    draw() {
        return `<div class="footer">
                    <div class="container">
                        <img src="./assets/images/logo-white-medium-ed.png">
                        <p>Copyright © ${this.properties['date']} Ethereal Data, LLC</p>
                    </div>
                </div>`
    }
}
