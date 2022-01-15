export default (editor, opts = {}) => {
    const bm = editor.BlockManager;
    const allBlocks = {
        category : editor.I18n.t('grapesjs-markdown.category'),
        select : true,
    };

    /**
     * Block properties: https://grapesjs.com/docs/api/block.html
     */
    bm.add('heading', {
        label: editor.I18n.t('grapesjs-markdown.components.names.heading'),
        media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve"><defs></defs><rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect><g transform="matrix(1 0 0 1 30 30)" id="6669fb5d-9563-41f9-b7ad-b69880b7cc60"><rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  x="-30" y="-30" rx="0" ry="0" width="60" height="60" /></g><g transform="matrix(Infinity NaN NaN Infinity 0 0)" id="9820b001-0ee2-4830-8237-0caef242cb01"></g><g transform="matrix(1 0 0 1 30 30)" style="" id="c2f7f043-24ce-4224-839a-8b9cf16bd6d6">		<text xml:space="preserve" font-family="Alegreya" font-size="80" font-style="normal" font-weight="700" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-29.88" y="25.13">H</tspan></text></g></svg>',
        content: {
            type: 'heading',
            tagName : 'div',
            content : `Heading title`
        },
        ...allBlocks,
    });
}
