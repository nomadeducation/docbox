var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
    '# Topics\n' +
    fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
    fs.readFileSync('./content/versioning.md', 'utf8') + '\n' +
    fs.readFileSync('./content/rate-limits.md', 'utf8') + '\n' +
    fs.readFileSync('./content/request-ids.md', 'utf8') + '\n' +
    fs.readFileSync('./content/authentication.md', 'utf8') + '\n' +
    fs.readFileSync('./content/errors.md', 'utf8') + '\n' +
    fs.readFileSync('./content/pagination.md', 'utf8') + '\n' +
    fs.readFileSync('./content/filtering.md', 'utf8') + '\n' +
    '# Identity Service\n' +
    fs.readFileSync('./content/users.md', 'utf8') + '\n' +
    fs.readFileSync('./content/roles.md', 'utf8') + '\n' +
    fs.readFileSync('./content/permissions.md', 'utf8') + '\n' +
    '# Business Service\n' +
    '# Content Service\n';
