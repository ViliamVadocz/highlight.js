/*
Language: Python
Description: Volpe is an open-source compiled strongly-typed functional programming language without any keywords
Category: Functional
*/

export default function (hljs) {

    var UNIQUE_SYMBOLS = {
        className: 'symbol',
        variants: [
            { begin: /@/ },
            { begin: /:=/ },
            { begin: /->/ },
            { begin: /~/, relevance: 5 },
        ],
        relevance: 10
    };

    var COMMON_SYMBOLS = {
        className: 'symbol',
        variants: [
            // math
            { begin: '\\+' },
            { begin: '\\-' },
            { begin: '\\*' },
            { begin: '\\/' },
            { begin: '\\%' },

            // math assign
            { begin: '\\+=' },
            { begin: '\\-=' },
            { begin: '\\*=' },
            { begin: '\\/=' },
            { begin: '\\%=' },

            // comparison
            { begin: '\\=' },
            { begin: '\\!=' },
            { begin: '\\>' },
            { begin: '\\<' },
            { begin: '\\>=' },
            { begin: '\\<=' },

            // logic
            { begin: /&&/, relevance: 1 },
            { begin: /\|\|/, relevance: 1 },
            { begin: /!/, relevance: 1 },
        ],
        relevance: 0,
    }

    var IMPORT = {
        className: 'link',
        begin: /\$[a-zA-Z_.][a-zA-Z_.]*(\\[a-zA-Z_.][a-zA-Z_.]*)*/,
        relevance: 10,
    }

    var NUMBER = {
        className: 'number',
        begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)',
        relevance: 0,
    };

    var STRING_CHAR = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
            { begin: /"/, end: /"/ },
            { begin: /'/, end: /'/ },
        ],
        relevance: 0,
    }

    return {
        name: 'Volpe',
        aliases: ['vlp'],
        keywords: {},
        contains: [
            hljs.COMMENT(/#!/, /!#/),
            hljs.HASH_COMMENT_MODE,
            IMPORT,
            STRING_CHAR,
            UNIQUE_SYMBOLS,
            COMMON_SYMBOLS,
            NUMBER,
        ]
    };
}
