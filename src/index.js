import loadComponents from './components';
import loadBlocks from './blocks';
import loadCommands from './commands';
import en from './locale/en';

export default (editor, opts = {}) => {
    const options = {
        ...{
            i18n: {},
            // default options
        }, ...opts
    };

    // Load i18n files
    editor.I18n && editor.I18n.addMessages({
        en,
        ...options.i18n,
    });

    // Add modules
    [
        loadComponents,
        loadBlocks,
        // loadCommands
    ].forEach(module => module(editor, options));
};