const moongose = require('mongoose');

moongose.connect('mongodb+srv://gds05:gds05@cluster0.enacp.mongodb.net/maps?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( db => console.log('DB is connected'))
    .catch( err => console.error(err));

//mongodb://127.0.0.1:27017/maps