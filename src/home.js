import Component from '../assets/etherealjs/src/component.js';

export class Home extends Component {
    constructor(config) {
        super(config);
    }
    draw() {
        return `<div>
                    <Component definition="Hero"></Component>
                    <Component definition="ThreeColumn"></Component>
                    <Component definition="Examples"></Component>
                </div>`
    }
}

export class Hero extends Component {
    constructor(config) {
        super(config);
    }
    style() {
        return {
            '': {
                'font-size': '20px',
                'background': '#eee',
                'text-align': 'center',
                'padding': '60px',
                'img': {
                    'width': '600px'
                },
                'h2': {
                    'padding': '30px 0 20px',
                    'font-weight': '100',
                    'font-size': '24px'
                },
                'a': {
                    display: 'block',
                    'margin': '20px 20px 20px 0'
                }
            }
        }
    }
    draw() {
        return `<div class='hero'>
                    <img src="./assets/images/logo-blue.png" alt="">
                    <h2>Ultra-lightweight JS Component Library</h2>
                    <div class="row center align-center">
                        <Component definition="Button" property-text="Get Started" property-url="http://github.com/etherealdata/etherealjs"></Component>
                        <a href="/Wiki">View Developer Wiki</a>
                    </div>
                </div>`
    }
}

export class ThreeColumn extends Component {
    constructor(config) {
        super(config);
    }
    _onLoaded(){
        this.properties.descriptions = [
            {
                title: 'Simple',
                description: 'EtherealJS was designed with simplicity and readability in mind. Use Component HTML tags in your markup and let the runtime do the rest.'
            },
            {
                title: 'Stateful Components',
                description: `Simple to declare, extremely performant, real-time state reflection. 
                                Build your application to support whichever use case necessary.`
            },
            {
                title: 'Highly Injectable',
                description: `The original purpose of this library was to gracefully migrate older web applications to a more maintanable solution, so as such, 
                                it is built to be highly injectable. `
            }
        ];
        super._onLoaded();
    }
    style() {
        return {
            '': {
                'padding': '60px 0',
                'background': '#444',
                'color': '#eee',
                '.column': {
                    'width': '30%'
                }
            }
        }
    }
    draw() {
        console.log('descriptions', this.properties.descriptions)
        return `<section>
                    <div class="container">
                        <div class="three-column row space-between">
                            ${this.properties.descriptions.map(desc => 
                                `   <div class="column">
                                        <h1>${desc.title}</h1>
                                        <p>${desc.description}</p>
                                    </div>
                                `
                            ).join('')}
                        </div>
                    </div>
                </section>`

    }
}
export class Snippet extends Component {
    constructor(config) {
        super(config);
    }
    _onLoaded() {
        super._onLoaded();
        this.request(this.properties['static-content']);
    }
    style() {
        return {
            '': {
                'xmp': {
                    'text-align': 'left'
                }
            }
        }
    }
    request(file) {
        console.log('fetching ', file)
        fetch(file).then((response) => {
            if(response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        }).then((text) => {
            if(!text) {
                throw new Error('No entries found for wiki!');
            }
            console.log('text', text, this.properties);
            this.setProperty('code', text);
            console.log('this.props', this.properties)

        });
    }
    draw() {
        return `<div>
            ${this.properties['code']}
        </div>`
    }
}
export class Examples extends Component {
    constructor(config) {
        super(config);
    }
    _onLoaded() {
        this.properties.examples = [
            {
                name: 'Your First Component',
                description: `First, create a new directory, and clone https://github.com/etherealdata/etherealjs repo. <br> 
                                <br><br>
                                <h3>Terminal:</h3>
                                <pre class="terminal"><code>
                                    cd ~
                                    mkdir helloworld
                                    cd helloworld
                                    git clone https://github.com/etherealdata/etherealjs
                                </code></pre><br>
                                Then, inside of the directory your created, create a JS file named home that imports Component and Runtime from etherealjs/src.<br> <br>
                                Now create a class named HelloWorld that extends Component. <br> <br>
                                In HelloWorld class, define a function named 'draw' that returns a template literal using backticks. <br> <br>
                                As you can see in the example, we are defining a variable named location that defaults to 'World'. <br>
                                We will later on create a function that updates this property using setProperty, which in turn will redraw your instance in the DOM. <br> <br>
                                At the bottom of the file, instantiate a new Runtime, passing the HelloWorld definition into the library property of config. <br> <br>
                                Finally, place a Component tag as well as import the script as a module in your HTML file.
                `,
                example: './assets/examples/first-component.html'
            },
            {
                name: 'Style It',
                description: `In your component, create a function named style that returns a style map, like in the example. <br><br> 
                                To make code more readable, make sure to define class properties before subclasses. <br><br>
                                It may look weird at first, but the empty selector refers to the outermost div or container of your component's instance. <br><br>
                                A component-pid attribute selector will be used in place of the blank selector. <br>
                                This functionality ensures that your components will never break an existing application's styles. Never. <br><br>
                                <b>Alternatively, you may also assign a class to the outermost div or element in your draw function, and use that in your style map. <br>
                                Please note however, this approach may override styles in an existing application if using an existing CSS class name.</b>

                                `,
                example: './assets/examples/style-it.html'
            },
            {
                name: 'Create an SPA',
                description: `Go back to your HTML file, and replace the Component tag with a new Router tag. <br>
                              Inside of the Router tag, place two child Route tags. <br> <br>
                              Assign a 'path' attribute and a 'definition' attribute to each one. <br> 
                              For the first one, assign '/' as the path, and 'HelloWorld' as the definition. <br>
                              For the second one, make it '/about' and 'About' for the definition. <br><br>
                              Create a new Component definition in the JS file, and in the draw template, create a textarea and a button. <br><br>
                              Finally, include the new component in the runtime's library.
                                `,
                example: './assets/examples/create-an-spa.html'
            },
            {
                name: 'Run a build',
                description: `If you need to use this for a production site, you will need to make sure to support browsers that do not use ES6 imports. <br> <br>
                                We have made it as simple as running a command. <br>
                                First, 'npm install' to make sure webpack is installed. Then, 'npm run build'. <br> <br>
                                <h3>Terminal:</h3>
                                <pre class="terminal"><code>
                                    npm install
                                    npm run build
                                </code></pre><br> <br>
                                Webpack will build a dependency graph based off of your imports and compile everything into dist/main.js. Sweet. <br> <br>
                                
                                Now, instead of loading script as a module in index, point it to dist/main.js as a text/javascript type instead. <br> <br>
                                
                                <b>Wallah!</b>
                                `,
                example: './assets/examples/run-a-build.html'
            }
        ];
        super._onLoaded();
    }
    style() {
        return {
            '': {
                'padding': '60px 0',
                'pre': {
                    'background':'#eee',
                    'margin-bottom': '20px',
                    'max-height': '350px',
                    'overflow-y': 'scroll'
                },
                '.terminal': {
                    'background': '#000',
                    'color': 'green',
                    'font-weight': '600',
                    'code': {
                        'font-weight': '600'
                    }
                },
                '.left-side': {
                    'width': '50%',
                    'padding-right': '20px',
                    'h2': {
                        'margin-bottom': '15px',
                        'padding-bottom': '15px',
                        'border-bottom': '1px solid #eee'
                    }
                },
                '.section-title': {
                  'text-align': 'center'
                },
                '.right-side': {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'flex': '1',
                    'padding': '0 0 0 20px'
                },
                '.row': {
                    'padding': '40px 0'
                },
                'b': {
                    'font-weight': '800',
                    'font-size': '.9em'
                }
            }
        }
    }

    draw() {
        return `<div class="examples">
                    <h1 class="section-title">
                        Quick Guide
                    </h1>
                    ${this.properties.examples.map(example => `
                            <div class="container">
                                <div class="row start align-start">
                                    <div class="left-side">
                                        <h2>
                                            ${example['name']}
                                        </h2>
                                        <p>${example['description']}</p>
                                    </div>
                                    <div class="right-side">
                                        <Component definition="Snippet" property-static-content="${example['example']}"></Component>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                </div>`
    }
}
