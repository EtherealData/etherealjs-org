import Runtime from '../assets/etherealjs/src/runtime.js'
import * as Global from './global.js';
import * as Home from './home.js';
import * as Wiki from './wiki.js';


new Runtime({
    properties: {
        selected: 'Welcome'
    },
    library: {
        Header: Global.Header,
        Footer: Global.Footer,
        Button: Global.Button,
        Wiki: Wiki.Wiki,
        Sidebar: Wiki.Sidebar,
        Pane: Wiki.Pane,
        Home: Home.Home,
        Hero: Home.Hero,
        ThreeColumn: Home.ThreeColumn,
        Examples: Home.Examples,
        Snippet: Home.Snippet
    },
    styles: () => {
        return {
            '*': {
                'font-family': "'Open Sans', sans-serif",
                'margin': '0',
                'padding': '0',
                'box-sizing': 'border-box',
                'font-weight': '200'
            },
            'html': {
                'height': '100%'
            },
            'body': {
                'height' : '100%',
                'width': '100%'
            },
            'a': {
                'color':'#0e689b',
                'text-decoration': 'underline',
                'cursor': 'pointer'
            },
            '.container' : {
                'width': '1350px',
                'margin': '0 auto'
            },
            '.full-height': {
                'height': '100%'
            },
            'button': {
                'background': '#666',
                'color': '#fff',
                'padding': '3px 8px'
            }
        }

    }
});