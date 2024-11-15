import React from 'react'
// import './CompetitionsPage.css'

const CompetitionsPage = () => {
  return (
    <div class="body-container">
      <div class='top-bar'>
        <h1>Competitions</h1>
      </div>
      <div class="gym">
        <span>Your Gym</span>
      </div>
      <div class="comp-info">
      <div class="competition-cards">
        <div class="competition-card">Max Bench</div>
        <div class="competition-card">Max Steps</div>
        <div class="competition-card">Group X Class</div>
      </div>
      <div class="competition-details">
        <div class="competition-header">
          <h2>Max Bench</h2>
          <button class="join-button">Join</button>
        </div>
        <p class="date-range">Open: Now - Fri Nov. 15</p>
        <div class="leaderboard">
          <h3>Leaderboard</h3>
          <ul>
            <li><span>1.</span> <span>315 lb</span> <span>Ben</span></li>
            <li><span>2.</span> <span>275 lb</span> <span>Alex</span></li>
            <li><span>3.</span> <span>270 lb</span> <span>Brett</span></li>
            <li><span>4.</span> <span>225 lb</span> <span>James</span></li>
            <li><span>5.</span> <span>205 lb</span> <span>Max</span></li>
          </ul>
        </div>
        <div class="rewards">
          <h3>Rewards</h3>
          <ul>
            <li>$25 gift card</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionsPage