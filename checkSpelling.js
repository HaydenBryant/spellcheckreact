function checkSpelling (input, dictionaryData) {
    var inputArr = input.split(" ");
    var dbResults = [];
    inputArr.forEach(word => {
        var filteredWord = word.replace(/[^A-Za-z]/g, "").toLowerCase();
        dbResults.push(dictionaryData.findOne({ "word": filteredWord }));
    });
    return Promise.all(dbResults);
}

function 

module.exports = { method: checkSpelling }