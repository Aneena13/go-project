var bus = require('./models/busSchema');

module.exports.findSearchResult = (searchdetails) =>{
    return new Promise(function myFn(resolve, reject) {
        bus.find({source:searchDetails} && {destination:searchDetails}, function returnData(error, result){
            if(error){
                reject(false);
            }
            else{
                resolve(result);
            }
        });

    });
}