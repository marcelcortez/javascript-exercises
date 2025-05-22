const removeFromArray = function(collection, ...toRemove) {
    return collection.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
