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
    fs.readFileSync('./content/acl.md', 'utf8') + '\n' +
    fs.readFileSync('./content/errors.md', 'utf8') + '\n' +
    fs.readFileSync('./content/pagination.md', 'utf8') + '\n' +
    fs.readFileSync('./content/sorting.md', 'utf8') + '\n' +
    fs.readFileSync('./content/filtering.md', 'utf8') + '\n' +
    '# Identity Service\n' +
    fs.readFileSync('./content/users.md', 'utf8') + '\n' +
    fs.readFileSync('./content/roles.md', 'utf8') + '\n' +
    fs.readFileSync('./content/permissions.md', 'utf8') + '\n' +
    '# Business Service\n' +
    fs.readFileSync('./content/branches.md', 'utf8') + '\n' +
    fs.readFileSync('./content/studydomains.md', 'utf8') + '\n' +
    fs.readFileSync('./content/studychoices.md', 'utf8') + '\n' +
    fs.readFileSync('./content/degrees.md', 'utf8') + '\n' +
    fs.readFileSync('./content/degreefields.md', 'utf8') + '\n' +
    fs.readFileSync('./content/exams.md', 'utf8') + '\n' +
    fs.readFileSync('./content/levelofeducations.md', 'utf8') + '\n' +
    fs.readFileSync('./content/schools.md', 'utf8') + '\n' +
    fs.readFileSync('./content/studymajors.md', 'utf8') + '\n' +
    fs.readFileSync('./content/studyminors.md', 'utf8') + '\n' +
    fs.readFileSync('./content/nextyearchoices.md', 'utf8') + '\n' +
    fs.readFileSync('./content/memberlevels.md', 'utf8') + '\n' +
    '# Content Service\n' +
    fs.readFileSync('./content/media.md', 'utf8') + '\n' +
    fs.readFileSync('./content/apps.md', 'utf8') + '\n' +
    fs.readFileSync('./content/posts.md', 'utf8') + '\n' +
    '🚧\n';
