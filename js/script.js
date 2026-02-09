// JavaScript functionality for the dashboard

function getCurrentDateTime() {
    const now = new Date();
    const yyyy = now.getUTCFullYear();
    const MM = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(now.getUTCDate()).padStart(2, '0');
    const HH = String(now.getUTCHours()).padStart(2, '0');
    const MM = String(now.getUTCMinutes()).padStart(2, '0');
    const SS = String(now.getUTCSeconds()).padStart(2, '0');
    return \"` + yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + MM + ':' + SS + '\`;
}

console.log(getCurrentDateTime());