export default (editor, { domc, classPrefix }) =>{
    const type = 'heading';

    domc.addType(type, {
        model: {
            defaults: {
                name : editor.I18n.t('grapesjs-markdown.components.names.heading'),
                tagName : 'div',
                editable : true,
                stylable : [], //true,
                attributes : {
                    class : classPrefix + 'heading',
                    'data-gjs-type' : type,
                    'data-gjs-level' : 1, // default
                    // 'data-gjs-editable' : true
                },
                traits : [
                    {
                        type : 'select',
                        label : editor.I18n.t('grapesjs-markdown.traits.labels.headingLevel'),
                        name : 'level',
                        changeProp: true,
                        options : [
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 1`, value : 1 },
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 2`, value : 2 },
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 3`, value : 3 },
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 4`, value : 4 },
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 5`, value : 5 },
                            { name : `${editor.I18n.t('grapesjs-markdown.other.level')} 6`, value : 6 },
                        ]
                    }
                ]
            },
            init(){
                this.listenTo(this, 'change:level', this.changeLevel);
            },
            changeLevel(){
                try{
                    const newLevel = this.get('traits').where({ name : 'level' })[0].get('value');
                    this.addAttributes({ 'data-gjs-level' : newLevel });
                    // reload canvas?
                } catch(e){
                    console.error(`Component "${type}" changeLevel() exception`);
                }
            }
        },
        view: {
            events : {
                // click, dbclick
            }
        },
    });
}