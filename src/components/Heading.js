export default (editor, { domc, classPrefix }) =>{
    const type = 'heading';

    domc.addType(type, {
        model: {
            defaults: {
                name : editor.I18n.t('grapesjs-markdown.components.names.heading'),
                tagName : 'h1',
                stylable : true,//[],
                attributes : { class : classPrefix + 'heading' },
            },
        },
        view: {
            events : {
                // click, dbclick
            }
        },
    });
}