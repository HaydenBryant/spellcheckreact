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
        
    }

    var inputArr = input.split(" ");

    dbResults.map(searchWord => {
        if (searchWord === null){
            searchResult.searchWord = false;
        } else {
            searchResult.searchWord = true;
        }
    });

    return searchResult;

}

module.exports = {
    method: checkSpelling,
    otherMethod: checkSpellingOutput
};