// Load leaderboard data from JSON file
async function loadLeaderboardData() {
    try {
        const response = await fetch('data/leaderboard.json');
        
        if (!response.ok) {
            throw new Error('JSON file not found - using demo data');
        }
        
        const data = await response.json();
        
        // Update remaining rankings (positions 4+)
        updateRankings(data.topVolunteers);
        
        console.log('Leaderboard loaded successfully from JSON');
        
    } catch (error) {
        console.warn('Could not load JSON file:', error.message);
        console.log('Loading demo data instead...');
        // Show fallback/demo data if JSON fails to load
        loadDemoData();
    }
}

// Update rankings list (all positions from JSON)
function updateRankings(volunteers) {
    const rankingsList = document.getElementById('rankings-list');
    rankingsList.innerHTML = '';
    
    // JSON starts at position 4, so we start numbering from 4
    for (let i = 0; i < volunteers.length; i++) {
        const volunteer = volunteers[i];
        const position = i + 4; // Position 4, 5, 6, etc.
        const rankingItem = createRankingItem(position, volunteer);
        rankingsList.appendChild(rankingItem);
    }
}

// Create individual ranking item HTML
function createRankingItem(position, volunteer) {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    
    const avatarStyle = volunteer.avatar 
        ? `background-image: url(${volunteer.avatar}); background-size: cover; background-position: center;`
        : '';
    
    item.innerHTML = `
        <div class="ranking-number">#${position}</div>
        <div class="ranking-avatar" style="${avatarStyle}"></div>
        <div class="ranking-info">
            <div class="ranking-name">${volunteer.name}</div>
            <div class="ranking-stats">
                <span>${volunteer.hours} hours</span>
                <span>${volunteer.events} events</span>
                <span>${volunteer.badges} badges</span>
            </div>
        </div>
        <div class="ranking-points">${volunteer.points}<br><span style="font-size: 0.8rem; font-weight: normal; color: #6b7280;">points</span></div>
    `;
    
    return item;
}

// Demo/fallback data if JSON doesn't load
function loadDemoData() {
    const demoData = {
        topVolunteers: [
            {
                name: "Ye Lin Naing",
                points: 4650,
                hours: 135,
                events: 28,
                badges: 8,
                avatar: ""
            },
            {
                name: "Sophie Picken",
                points: 4420,
                hours: 128,
                events: 26,
                badges: 7,
                avatar: ""
            },
            {
                name: "Marcus Johnson",
                points: 4180,
                hours: 120,
                events: 25,
                badges: 7,
                avatar: ""
            }
        ]
    };
    
    updateRankings(demoData.topVolunteers);
}

    // Load the leaderboard data when page loads
    loadLeaderboardData();