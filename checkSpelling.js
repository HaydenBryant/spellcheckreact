function checkSpelling (input, dictionaryData) {
    var inputArr = input.split(" ");
    var dbResults = [];
    inputArr.forEach(word => {
        var filteredWord = word.replace(/[^A-Za-z]/g, "").toLowerCase();
        dbResults.push(dictionaryData.findOne({ "word": filteredWord }));
    });
    return Promise.all(dbResults);
}

function checkSpellingOutput (dbResults, input) { 
    var searchResult = {
        searchArray: []
    }

    var i = 0;
    var inputArr = input.split(" ");
    var outputArr = [];

    dbResults.map(searchWord => {
        if (searchWord === null){

        } else {

        }
    })



}

module.exports = { method: checkSpelling }