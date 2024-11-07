// json2html.js
export default function json2html(data) {

    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    let html = '<table data-user="karthikeyaburla@gmail.com">';
    html += '<thead><tr>';

    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] || ''}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';

    return html;
}
