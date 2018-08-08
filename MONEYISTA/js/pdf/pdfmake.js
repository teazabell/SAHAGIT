var externalDataRetrievedFromServer = [
    { name: 'Bartek', age: 34 }
];

function buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function(row) {
        var dataRow = [];

        columns.forEach(function(column) {
            dataRow.push(row[column].toString());
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
            headerRows: 1,
            body: buildTableBody(data, columns)
        }
    };
}

var dd = {
    content: [
        { text: 'Dynamic parts', style: 'header' },
        table(externalDataRetrievedFromServer, ['name', 'age'])
    ]
}