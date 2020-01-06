describe('010_parseExpression', function() {
    it('"<" && ">" exists in expression then expression should get converted to upper case', () => {
        const expression = "<TdT>t";
        const output = parseExpression(expression);
        expect(expression.toUpperCase()).toEqual(output);
    });

    it('"<" && ">" doesn\'t expression then expression should get converted to upper case', () => {
        const expression = "TdD"
        const output = parseExpression(expression);
        expect(expression.toUpperCase()).toEqual(output);
    });

    it('if expression container TR#', () => {
        const expression = "TR#zindex"
        const output = parseExpression(expression);
        expect(expression.toUpperCase()).toEqual(output);
    });
})
