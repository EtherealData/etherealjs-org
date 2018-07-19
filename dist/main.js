!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class i{static getDOMInstance(e){return document.querySelector(`[component-pid="${e}"]`)}static generatePID(){return Math.floor(9e4*Math.random())+1e4}static getPropertiesFromAttributeList(e){let t={};for(let n=0;n<e.length;n++)if(-1!==e[n].name.indexOf("property-")){t[e[n].name.split("property-")[1]]=e[n].value}return t}static shade(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var i=parseInt(e,16),r=(i>>16)+t;r>255?r=255:r<0&&(r=0);var o=(i>>8&255)+t;o>255?o=255:o<0&&(o=0);var s=(255&i)+t;return s>255?s=255:s<0&&(s=0),(n?"#":"")+(s|o<<8|r<<16).toString(16)}static stampPID(e,t){let n=` component-pid="${e}"`,i=t.indexOf(">");return[t.slice(0,i),n,t.slice(i)].join("")}static getEventMap(){return{blur:"blur",change:"change",click:"click",focus:"focus",drag:"drag",mouseover:"mouseover",mouseleave:"mouseleave",mouseenter:"mouseenter",mousein:"mousein",mouseout:"mouseout"}}static getStyleSheetFromMap(e,t){let n="",i=e=>{let r=Object.keys(e);r&&r.length>0&&r.forEach((r,o)=>{let s=Object.keys(e[r]);n+=`${t?`[component-pid="${t}"]${":"===r[0]?"":" "}`+r:r} {`,s&&s.length>0&&s.forEach((t,o)=>{let a=e[r][t];return a&&"string"==typeof a?(n+=`${t}: ${e[r][t]};`,void(o===s.length-1&&"{ "!==n.slice(-2)&&(n+="} "))):a&&"object"==typeof a?("} "!==n.slice(-2)&&(n+="} "),void i({[r+" "+t]:a})):void 0})})};return i(e),n}static format(e,t){switch(t){case"currency":return formatCurrency(e);case"percent":break;default:console.log("Sorry, we are out of "+expr+".")}}}class r{constructor(e){if(this.pid=i.generatePID(),this._onInstantiate&&this._onInstantiate(e),e&&Object.keys(e)&&Object.keys(e).length>0)for(let t in e)this[t]?console.warn(`ODComponent - passed key ${t} in config which is already bound`):this[t]=e[t];this.properties=this.properties||{},this._onLoaded&&this._onLoaded(e)}setProperty(e,t){this.properties[e]=t}_onInstantiate(e){}_onLoaded(e){}}class o extends r{constructor(e){super(e)}_onLoaded(){if(!this.routes||!this.runtime)throw new Error("Config missing routes or runtime");this.path=window.location.pathname,this.routes[this.path]&&new this.runtime.library[this.routes[this.path]]({origin:this,context:this.context,attributes:this.context.attributes,runtime:this.runtime}),super._onLoaded()}}class s extends r{constructor(e){super(e)}_onLoaded(e){this.container=this.container||null,this.context=this.container&&document.querySelector(this.container)||document.body,this.styles=this.styles||null,this.styles&&this.decorate(this.styles()),this.processes=this.processes||{},this.processes.roots={},this.library=this.library||{},this.route();let t=[...this.context.querySelectorAll("Component")];if(this.definition){let e=document.createElement("shadow");this.context=this.context.appendChild(e),new this.library[this.definition]({context:this.context,origin:this,runtime:this,attributes:this.context.attributes})}t&&t.length&&t.forEach((e,t)=>{let n=e.getAttribute("definition");n&&this.library[n]?new this.library[n]({context:e,origin:this,runtime:this,attributes:e.attributes}):console.warn("Found component with no definition. Skipping")})}route(){let e=document.querySelector("Router")||null;if(this.routes||e){if(console.warn("Found a router. Deferring drawing of components"),this.routes=this.routes||{},e){[...e.querySelectorAll("Route")].forEach((e,t)=>{let n=e.getAttribute("definition"),i=e.getAttribute("path");n&&i&&this.library[n]||console.warn("Found route with invalid definition or path",n,e),this.routes[i]=n})}else e=document.createElement("Router"),e=this.context.appendChild(e);return this.router=new o({routes:this.routes,runtime:this,context:e}),!0}return!1}decorate(e){let t=document.createElement("style");document.body.appendChild(t),t.innerHTML=i.getStyleSheetFromMap(e),t.setAttribute("belongs-to",this.pid)}}class a extends r{constructor(e){super(e)}_onLoaded(e){this.runtime=this.runtime||{},this.context=this.context||null,this.attributes=this.attributes||null,this.properties=this.properties||{},this.origin=this.origin||null,this.parent=this.context.parentNode||null,this.cache={children:[]},this.parent&&(this.state=i.stampPID(this.pid,this.draw()),this.context.outerHTML=this.state,this.runtime.processes[this.pid]=this,this.style&&this.decorate(this.style()),(this.origin instanceof s||this.origin instanceof o)&&(this.runtime.processes.roots[this.pid]=this),this.bind(),this.resolve())}bind(){let e=i.getDOMInstance(this.pid),t=(i.getEventMap(),[...e.querySelectorAll("[e]")]);return e.hasAttribute("e")&&t.push(e),t.forEach((e,t)=>{e.removeAttribute("e"),e.setAttribute("has-events",!0),this.attach(e)}),this.context}resolve(){let e=[...i.getDOMInstance(this.pid).querySelectorAll("Component")];e&&e.forEach((e,t)=>{let n=e.getAttribute("definition"),r=e.getAttribute("has-events"),o=e.attributes;if(!n||!this.runtime.library[n])return void console.warn("could not find definition for ",e);this.cache.children[t]=new this.runtime.library[n]({runtime:this.runtime,context:e,origin:this,attributes:e.attributes,properties:{}});let s=r?i.getDOMInstance(this.cache.children[t].pid):null;s&&[...o].forEach(e=>{console.log("generated",s),s.setAttribute(e.name,e.value)}),s&&this.attach(s)})}attach(e){let t=e.getAttribute("scope")||"instance",n=i.getEventMap();for(let i=0;i<e.attributes.length;i++)if(n[e.attributes[i].name]&&e.attributes[i].value){if(!this[e.attributes[i].value]){console.warn("Trying to bind event handler to non-existent function",this,e);continue}switch(t){case"element":e.addEventListener(n[e.attributes[i].name],t=>this[e.attributes[i].value].call(e,t));break;default:e.addEventListener(n[e.attributes[i].name],t=>this[e.attributes[i].value].call(this,t))}}}decorate(e){let t=document.createElement("style");document.body.appendChild(t),t.innerHTML=i.getStyleSheetFromMap(e,this.pid),t.setAttribute("belongs-to",this.pid)}}class l extends a{constructor(e){super(e)}_onLoaded(){let e=i.getPropertiesFromAttributeList(this.attributes);this.properties=Object.assign(this.properties,e),super._onLoaded()}synchronize(){let e=document.querySelector(`[component-pid="${this.pid}"]`);e.parentNode;e.outerHTML=i.stampPID(this.pid,this.draw()),[...document.querySelector(`[component-pid="${this.pid}"]`).querySelectorAll("Component")].forEach((e,t)=>{let n=this.cache.children[t].pid;e.outerHTML=i.stampPID(n,this.cache.children[t].draw()),this.cache.children[t].bind()}),this.bind()}destroy(e){let t=i.getDOMInstance(this.pid),n=i.getDOMInstance(this.runtime.pid);t&&(t.parentNode.removeChild(t),e&&n&&n.parentNode.removeChild(n))}setProperty(e,t){super.setProperty(e,t),this.synchronize()}setRuntimeProperty(e,t){this.runtime.setProperty(e,t);for(let e in this.runtime.processes.roots)this.runtime.processes.roots[e].synchronize()}}new s({properties:{selected:"Welcome"},library:{Header:class extends l{constructor(e){super(e)}style(){return{"":{height:"58px",background:"#127fbd","font-size":"24px",img:{width:"46px","margin-top":"10px","margin-left":"20px"},h1:{color:"#fff","font-weight":"200","padding-top":"31px",display:"inline-block","margin-left":"55px"}}}}draw(){return'<header>\n                    <div class="container">\n                        <img src="./assets/images/logo-square-small-white.png" alt="">\n                    </div>\n                </header>'}},Footer:class extends l{constructor(e){super(e)}_onLoaded(){this.properties.date=(new Date).getFullYear(),super._onLoaded()}style(){return{"":{padding:"30px 0",background:"#111"},img:{width:"220px"},p:{color:"#fff"}}}draw(){return`<div class="footer">\n                    <div class="container">\n                        <img src="./assets/images/logo-white-medium-ed.png">\n                        <p>Copyright © ${this.properties.date} Ethereal Data, LLC</p>\n                    </div>\n                </div>`}},Button:class extends l{constructor(e){super(e)}style(){return{"":{background:"#127fbd",padding:"17px 38px","border-radius":"3px",color:"#fff","text-decoration":"none"},":hover":{background:i.shade("#127fbd",10),transition:"background 100ms"}}}draw(){return`<a href="${this.properties.url}">${this.properties.text}</a>`}},Wiki:class extends l{constructor(e){super(e),this.request(e)}_onLoaded(e){this.properties.selected="Welcome",super._onLoaded(e)}style(){return{"":{height:"100%"},".left-gutter":{background:"#eee"}}}request(e){fetch("./assets/library.json").then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(e=>{if(!e.entries)throw new Error("No entries found for wiki!");this.setRuntimeProperty("entries",e)})}draw(){return'\n                <div id="wiki">                    \n                    <div class="row start flex full-height">\n                        <div class="column left-gutter flex"></div>\n\n                        <Component definition="Sidebar"></Component>\n                        <Component definition="Pane"></Component>\n\n                        <div class="column right-gutter flex"></div>\n                    </div>\n                </div>\n        '}},Sidebar:class extends l{constructor(e){super(e)}select(e){this.setRuntimeProperty("selected",e.currentTarget.innerHTML)}style(){return{"":{width:"300px",float:"left",height:"100%",background:"#eee",ul:{"list-style-type":"none"}},".topics":{"padding-top":"60px","font-size":"18px","> li":{padding:"3px 0 20px 38px","font-size":"18px","font-weight":"600"},"li ul li a":{"font-weight":"200"},"li.active":{"border-right":"10px solid #127fbd"}}}}draw(){let e=this.runtime.properties.entries||{},t=this.runtime.properties.selected;return`\n            <div class="sidebar">\n                <ul class="topics">\n                    ${(e.entries||[]).map(e=>`<li>${e.name}\n                            <ul>\n                                ${e.subtopics.map(e=>`<li class="${e===t?"active":""}">\n                                    <a e click="select">${e}</a>\n                                </li>`).join("")}\n                            </ul>\n                        </li>`).join("")}\n                </ul>\n            </div>\n        `}},Pane:class extends l{constructor(e){super(e)}style(){return{"":{overflow:"scroll",width:"1050px",padding:"60px"},p:{"padding-top":"35px"}}}draw(){console.log("drawing",this.runtime);let e=this.runtime.properties.entries||{},t=this.runtime.properties.selected,n=(e.content||{})[t]||{},i=n.paragraphs||[];return`\n            <div class="pane">\n                <h2>${n.title}</h2>\n                ${i.map(e=>`<p class="">${e}</p>`).join("")}\n            </div>\n        `}},Home:class extends l{constructor(e){super(e)}draw(){return'<div>\n                    <Component definition="Hero"></Component>\n                    <Component definition="ThreeColumn"></Component>\n                    <Component definition="Examples"></Component>\n                </div>'}},Hero:class extends l{constructor(e){super(e)}style(){return{"":{"font-size":"20px",background:"#eee","text-align":"center",padding:"60px",img:{width:"600px"},h2:{padding:"30px 0 20px","font-weight":"100","font-size":"24px"},a:{display:"block",margin:"20px 20px 20px 0"}}}}draw(){return'<div class=\'hero\'>\n                    <img src="./assets/images/logo-blue.png" alt="">\n                    <h2>Ultra-lightweight JS Component Library</h2>\n                    <div class="row center align-center">\n                        <Component definition="Button" property-text="Get Started" property-url="http://github.com/etherealdata/etherealjs"></Component>\n                        <a href="/Wiki">View Developer Wiki</a>\n                    </div>\n                </div>'}},ThreeColumn:class extends l{constructor(e){super(e)}_onLoaded(){this.properties.descriptions=[{title:"Simple",description:"EtherealJS was designed with simplicity and readability in mind. Use Component HTML tags in your markup and let the runtime do the rest."},{title:"Stateful Components",description:"Simple to declare, extremely performant, real-time state reflection. \n                                Build your application to support whichever use case necessary."},{title:"Highly Injectable",description:"The original purpose of this library was to gracefully migrate older web applications to a more maintanable solution, so as such, \n                                it is built to be highly injectable. "}],super._onLoaded()}style(){return{"":{padding:"60px 0",background:"#444",color:"#eee",".column":{width:"30%"}}}}draw(){return console.log("descriptions",this.properties.descriptions),`<section>\n                    <div class="container">\n                        <div class="three-column row space-between">\n                            ${this.properties.descriptions.map(e=>`   <div class="column">\n                                        <h1>${e.title}</h1>\n                                        <p>${e.description}</p>\n                                    </div>\n                                `).join("")}\n                        </div>\n                    </div>\n                </section>`}},Examples:class extends l{constructor(e){super(e)}_onLoaded(){this.properties.examples=[{name:"Your First Component",description:"First, create a JS file named home that imports Component and Runtime from etherealjs/src. \n                                Then, create a class named HelloWorld that extends Component. At the bottom of the file, \n                                instantiate a new Runtime, passing the HelloWorld definition into the library property of config.\n                                Finally, place a Component tag as well as import the script as a module in your HTML file.\n                ",example:"file.html"},{name:"Style It",description:"In your component, create a function named style that returns a style map, like in the example. \n                                To make code more readable, make sure to define class properties before subclasses. It may look weird at first, \n                                but the empty selector refers to the instance of the component. We accomplish this by using component-pid selectors. \n                                This functionality ensures that your components will never break an existing application's styles. Never.\n                                ",example:"file.html"},{name:"Create an SPA",description:" Go back to your HTML file, and replace the Component tag with a new Router tag. Inside of the Router tag, place two child Route tags.\n                                Assign a 'path' attribute and a 'definition' attribute to each one. For the first one, assign '/' as the path, and 'HelloWorld' as the definition.\n                                For the second one, make it '/about' and 'About' for the definition. Create a new Component definition in the JS file, and in the draw template,\n                                create a textarea and a button.\n                                ",example:"file.html"},{name:"Run a build",description:"If you need to use this for a production site, you will need to make sure to support browsers that do not use ES6 imports.\n                                We have made it as simple as running a command. First, 'npm install' to make sure webpack is installed. Then, 'npm run build'. \n                                Webpack will build a dependency graph based off of your imports and compile everything into dist/main.js. Sweet.\n                                ",example:"file.html"}],super._onLoaded()}style(){return{"":{padding:"60px 0",pre:{padding:"20px",background:"#eee"},".left-side":{width:"60%","padding-right":"20px",h2:{"margin-bottom":"15px","padding-bottom":"15px","border-bottom":"1px solid #eee"}},".right-side":{display:"flex","flex-direction":"column",flex:"1",padding:"0 0 0 20px"},".row":{padding:"40px 0"}}}}draw(){return`<div class="examples">\n                    ${this.properties.examples.map(e=>`\n                            <div class="container">\n                                <div class="row start align-center">\n                                    <div class="left-side">\n                                        <h2>\n                                            ${e.name}\n                                        </h2>\n                                        <p>${e.description}</p>\n                                    </div>\n                                    <div class="right-side">\n                                        <h3>index.html</h3>\n                                        <pre><code>${e.code||"import hello from script.js"}</code></pre>\n                                    </div>\n                                </div>\n                            </div>\n                        `).join("")}\n                </div>`}}},styles:()=>({"*":{"font-family":"'Open Sans', sans-serif",margin:"0",padding:"0","box-sizing":"border-box","font-weight":"200"},html:{height:"100%"},body:{height:"100%",width:"100%"},a:{color:"#0e689b","text-decoration":"underline",cursor:"pointer"},".container":{width:"1350px",margin:"0 auto"},".full-height":{height:"100%"},button:{background:"#666",color:"#fff",padding:"3px 8px"}})})}]);