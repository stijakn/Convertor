
        var Currency = {};
Currency['EUR'] = ['RSD', 'USD'];
Currency['RSD'] = ['USD', 'EUR'];
Currency['USD'] = ['RSD', 'EUR'];

function ChangeCurrencyList() {
    var cList = document.getElementById("from");
    var mlList = document.getElementById("to");
    var value = cList.options[cList.selectedIndex].value;
    while (mlList.options.length) {
        mlList.remove(0);
    }
    var cValue = Currency[value];
    if (cValue) {
        var i;
        for (i = 0; i < cValue.length; i++) {
            var mValue = new Option(cValue[i], cValue[i]);
            mlList.options.add(mValue);
        }
    }
} 
