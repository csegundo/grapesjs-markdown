import loadHeading from './components/Heading';

export default (editor, opts = {}) => {
    const domc = editor.DomComponents;
    const classPrefix = editor.I18n.t('grapesjs-markdown.classPrefix');

    /**
     * Component module: https://grapesjs.com/docs/modules/Components.html
     *      Model: #model
     *      View: #view
     * 
     * Component properties: https://grapesjs.com/docs/api/component.html
     */
    const componentsOpts = {
        domc, classPrefix
    };

    [
        loadHeading
    ].forEach(component => component(editor, componentsOpts));
};
