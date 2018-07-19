import Component from '../assets/etherealjs/src/component.js';

export class Wiki extends Component {
    constructor(config) {
        super(config);
        this.request(config);
    }
    _onLoaded(config) {
        this.properties.selected = 'Welcome';
        super._onLoaded(config);
    }
    style() {
        return {
            '': {
                height: '100%'
            },
            '.left-gutter': {
                'background': '#eee'
            }
        }
    }
    request(config) {
        fetch('./assets/library.json').then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then((json) => {
            if(!json.entries) {
                throw new Error('No entries found for wiki!');
            }
            this.setRuntimeProperty('entries', json);

        })
    }
    draw(){
        return `
                <div id="wiki">                    
                    <div class="row start flex full-height">
                        <div class="column left-gutter flex"></div>

                        <Component definition="Sidebar"></Component>
                        <Component definition="Pane"></Component>

                        <div class="column right-gutter flex"></div>
                    </div>
                </div>
        `
    }
}

export class Sidebar extends Component {
    constructor(config){
        super(config);
    }
    select(ev){
        this.setRuntimeProperty('selected', ev.currentTarget.innerHTML);  
    }
    style() {
        return {
            '': {
                'width': '300px',
                'float': 'left',
                'height': '100%',
                'background': '#eee',
                'ul': {
                    'list-style-type': 'none'
                }
            },
            '.topics': {
                'padding-top': '60px',
                'font-size': '18px',
                '> li': {
                    'padding': '3px 0 20px 38px',
                    'font-size': '18px',
                    'font-weight': '600' 
                },
                'li ul li a': {
                    'font-weight': '200'
                },
                'li.active': {
                    'border-right': '10px solid #127fbd'
                }
            }
        }
    }
    draw() {
        let data = this.runtime.properties.entries || {},
            selected = this.runtime.properties.selected,
            entries = data.entries || [];

        return `
            <div class="sidebar">
                <ul class="topics">
                    ${entries.map(entry => 
                        `<li>${entry.name}
                            <ul>
                                ${entry.subtopics.map(subtopic => `<li class="${subtopic === selected ? 'active' : ''}">
                                    <a e click="select">${subtopic}</a>
                                </li>`).join('')}
                            </ul>
                        </li>`
                        ).join('')}
                </ul>
            </div>
        `
    }
}
export class Pane extends Component {
    constructor(config){
        super(config);
    }
    style() {
        return {
            '': {
                    'overflow': 'scroll',
                    'width': '1050px',
                    'padding': '60px'
                },
                'p': {
                    'padding-top': '35px'
                }
            }

    }
    draw() {
        console.log('drawing', this.runtime)
        let data = this.runtime.properties.entries || {},
            selected = this.runtime.properties.selected,
            content = data['content'] || {},
            display = content[selected] || {},
            paragraphs = display.paragraphs || []
        return `
            <div class="pane">
                <h2>${display.title}</h2>
                ${paragraphs.map(paragraph => `<p class="">${paragraph}</p>`).join('')}
            </div>
        `
    }
}

