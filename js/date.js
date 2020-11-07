function displayDate(){
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const dayNames = [
        'Sunday',        
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    var d = new Date();
    
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var year = d.getFullYear();

    document.getElementById("date").innerHTML = "<span>"
        + monthNames[month]
        + "</span>"
        + "<span>&nbsp;"
        + date
        + "</span>";
}

displayDate();