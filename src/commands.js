import exportCommand from './commands/command-export-markdown';

export default (editor, opts = {}) => {
    const cmd = editor.Commands;
    const exportCommandName = editor.I18n.t('grapesjs-markdown.commands.names.export');

    // Export to Markdown
    cmd.add(exportCommandName, exportCommand(editor, opts));
}