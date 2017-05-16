//Create a new module

// Implement logic here

var dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric"
};

var dateObj = {
    unix: null,
    natural: null
}


var formatDate = (date) => {
    
    var onlyNumbers = !/[^\d]/g.test(date)
    
    
    if(onlyNumbers){
        dateObj.unix = Number(date);
        var naturalDate = new Date(dateObj.unix * 1000);
        dateObj.natural = naturalDate.toLocaleDateString('en-US', dateOptions);
    } else {
        var naturalDate = new Date(date) || null;
        console.log(naturalDate);
        dateObj.natural = naturalDate.toLocaleDateString("en-US", dateOptions);
        var unixDate = naturalDate.getTime()/1000;
        console.log(unixDate);
        dateObj.unix = unixDate;
        
    }
    
    
    return dateObj;
};

//Export the module to be usable in app.js
module.exports = {
    formatDate
};