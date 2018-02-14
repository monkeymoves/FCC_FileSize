const express  = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const multer  = require('multer');

let upload = multer({dest: 'uploads/'});
const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/', function(req,res){
       
//     res.sendFile(__dirname + '/index.html');

// });

app.use(express.static(__dirname + '/public'));
app.post('/upload', upload.single('file'), function(req, res, next){
return res.json(req.file);
});
app.listen(3000, () => {
    console.log("I am alive , are you?");
});