'use strict';

var _runtime = require('../assets/etherealjs/src/runtime.js');

var _runtime2 = _interopRequireDefault(_runtime);

var _global = require('./global.js');

var Global = _interopRequireWildcard(_global);

var _home = require('./home.js');

var Home = _interopRequireWildcard(_home);

var _wiki = require('./wiki.js');

var Wiki = _interopRequireWildcard(_wiki);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _runtime2.default({
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
        Examples: Home.Examples
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
                'height': '100%',
                'width': '100%'
            },
            'a': {
                'color': '#0e689b',
                'text-decoration': 'underline',
                'cursor': 'pointer'
            },
            '.container': {
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
        };
    }
});

