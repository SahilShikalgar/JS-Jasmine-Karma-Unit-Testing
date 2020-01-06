var parseExpression = function (expression) {
    if (expression.indexOf("<") > -1 && expression.indexOf(">") > -1) {
        var ric = false;
        var parsedexpr = "";
        $.each(expression.split(""), function (key, value) {
            if (ric == false) {
                if (value == '<') {
                    parsedexpr = parsedexpr + value;
                    ric = true;
                }
                else {
                    parsedexpr = parsedexpr + value.toUpperCase();
                }
            }
            else {
                if (value == '>') {
                    ric = false;
                }
                parsedexpr = parsedexpr + value;
            }
        });
        expression = parsedexpr;
    }
    else {
        expression = expression.toUpperCase();
    }
    return expression.toUpperCase();
}
