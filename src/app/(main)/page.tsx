import React from 'react';

async function getUser() {
    const res = await fetch('https://api.example.com/user');
    if (!res.ok) {
        // This will activate the closest `error.ts` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json() as any;
}

const Dashboard = async () => {
    const user = await getUser();
    return (<div className="grid">
        DASHBOARD
        {JSON.stringify(user)}
    </div>);
};

export default Dashboard;
