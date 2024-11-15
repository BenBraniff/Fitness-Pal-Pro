import React from 'react'
import './CompetitionsPage.css'


const CompetitionsPage2 = () => {
  return (
    <div class="competitions-container">
        <div class='top-bar'>
            <h1>Competitions</h1>
        </div>
        <div class="comp-info">
            <div class="competition-cards">
                <div class="competition-card">Max Bench</div>
                <div class="competition-card">Max Steps</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
                <div class="competition-card">Group X Class</div>
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
                    <table>
                        <tr>
                            <td>1.</td>
                            <td>315 lb</td>
                            <td>Ben</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>275 lb</td>
                            <td>Alex</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>270 lb</td>
                            <td>Brett</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>225 lb</td>
                            <td>James</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>205 lb</td>
                            <td>Max</td>
                        </tr>
                    </table>
                </div>
                <div class="rewards">
                    <h3>Rewards</h3>
                    <table>
                        <tr>
                            <td>1.</td>
                            <td>$25 gift card</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>$15 gift card</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>$10 gift card</td>
                        </tr>
                        <tr>
                            fit cash for all
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitionsPage2