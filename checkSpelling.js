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
        searchWords: []
    }

    var i = 0;
    var inputArr = input.split(" ");
    var outputArr = [];

    dbResults.map(searchWord => {
        if (searchWord === null){
            outputArr.push(inputArr[i]) + "", false;
            i++;
        } else {
            outputArr.push(inputArr[i]) + "", true;
            i++;
        }
    });

    searchResult = { searchWords: outputArr };
    return searchResult;

}

module.exports = {
    method: checkSpelling,
    otherMethod: checkSpellingOutput
};