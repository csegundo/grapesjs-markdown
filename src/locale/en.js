export default {
    'grapesjs-markdown': {
        category : 'Markdown',
        classPrefix : 'gjs-md-',
        /**
         * Components name
         */
        components : {
            names : {
                heading : 'Heading'
            }
        },
        /**
         * Component traits attr (model)
         */
        traits : {
            labels : {
                headingLevel : 'Level type'
            }
        },
        /**
         * Other stuff
         */
        other : {
            level : 'Level'
        },
        /**
         * Plugin command names
         */
        commands : {
            names : {
                export : 'gjs-md-export'
            }
        }
    },
};