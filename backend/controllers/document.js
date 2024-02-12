const Document = require("../models/docSchema");

async function findOrCreateDocument(documentId) {
    if (documentId == null) return;

    const document = await Document.findById(documentId);
    if (document) return document;
    return Document.create({ _id: documentId, data: "" });
}

module.exports = findOrCreateDocument;