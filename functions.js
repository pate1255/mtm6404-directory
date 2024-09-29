// Q2
function list(clients) {
    return clients.map((client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${index}">
            ${client.name}
            <strong>$${client.balance}</strong>
        </li>
    `).join('');
}

//Q3
function order(clients, property) {
    return clients.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

//Q4
function total(clients){
    return clients.reduce((total, client) => total + client.balance, 0);
}

//Q5
function info(number) {
    return clients.find((index => index === number));
}

//Q6
function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}