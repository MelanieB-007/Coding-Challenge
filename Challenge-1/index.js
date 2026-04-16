const data = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

function getUsersStatus(data) {
    if (!data || data.length === 0) {
        return {};
    }

    const result = {
        online: [],
        offline: [],
        away: []
    };

    data.forEach(user => {
        if (user.status === 'online') {
            if (user.lastActivity > 10) {
                result.away.push(user.username);
            } else {
                result.online.push(user.username);
            }
        } else if (user.status === 'offline') {
            result.offline.push(user.username);
        }
    });

    return result;
}

console.log(getUsersStatus(data));