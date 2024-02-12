const connectDB = require('./connectDB');
const findOrCreateDocument = require('./controllers/document');
const Document = require('./models/docSchema');

connectDB();

const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on('connection', socket => {
    socket.on("get-document", async documentId => {
        const document = await findOrCreateDocument(documentId);
        socket.join(documentId);
        console.log(document.data, documentId);
        socket.emit("load-document", document.data, document);

        socket.on("send-changes", delta => {
            socket.broadcast.to(documentId).emit("receive-changes", delta);
        })

        socket.on("save-document", async data => {
            await Document.findByIdAndUpdate(documentId, { data });
        })
    })
})