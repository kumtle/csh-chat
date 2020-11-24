const uuid4 = require('uuid4');

exports.generate = () => {
    var uuid = uuid4();
    var tokens = uuid.split('-');
    /*console.log('original => ' + uuid);
    console.log('convert => ' + tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]);*/
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
}