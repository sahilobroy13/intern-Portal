

const leaderboard = [
    { name: "Sahil", amount: 12500 },
    { name: "Aman", amount: 10200 },
    { name: "Priya", amount: 9500 },
    { name: "Ravi", amount: 8900 },
    { name: "Neha", amount: 8500 },
    { name: "Rohit", amount: 8300 },
    { name: "Sneha", amount: 7900 },
    { name: "Vikram", amount: 7600 },
    { name: "Divya", amount: 7300 },
    { name: "Karan", amount: 7000 },
    { name: "Meena", amount: 6700 },
    { name: "Ankit", amount: 6400 },
    { name: "Simran", amount: 6100 },
    { name: "Tarun", amount: 5900 },
    { name: "Jyoti", amount: 5700 }
];


const users = leaderboard.map(user => ({
    name: user.name,
    donationsRaised: user.amount,
    referralCode: `${user.name.toLowerCase()}2025`
}));

exports.users = users;
exports.leaderboard = leaderboard;
