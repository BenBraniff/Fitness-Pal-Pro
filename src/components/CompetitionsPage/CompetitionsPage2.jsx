import React from 'react'
import './CompetitionsPage.css'


    const toggleButton = document.querySelector('.toggle-btn');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    });


const CompetitionsPage2 = () => {
  return (
    <div class="competitions-container">
        <div class='top-bar'>
            <h1>Competitions</h1>
        </div>
        <div class="comp-info">
            <div class="competition-cards">
                <button class="competition-card">Max Bench</button>
                <button class="competition-card">Max Steps</button>
                <button class="competition-card">Max Steps</button>
                <select multiple="multiple">
    <option value="1">Option one</option>
    <option value="2">Option two</option>
</select>
                <button class="toggle-btn">Toggle</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
                <button class="competition-card">Group X Class</button>
            </div>
            <div class="competition-details">
                <div class="competition-header">
                    <h2>Max Bench</h2>
                    <button class="join-button">Join</button>
                </div>
                <p class="date-range">Open: Now - Fri Nov. 15</p>
                <div class="leaderboard">
                    <h3>Leaderboard</h3>
                    <table class="table">
                        <tr>
                            <th>1.</th>
                            <td>315 lb</td>
                            <td>Ben</td>
                        </tr>
                        <tr>
                            <th>2.</th>
                            <td>275 lb</td>
                            <td>Alex</td>
                        </tr>
                        <tr>
                            <th>3.</th>
                            <td>270 lb</td>
                            <td>Brett</td>
                        </tr>
                        <tr>
                            <th>4.</th>
                            <td>225 lb</td>
                            <td>James</td>
                        </tr>
                        <tr>
                            <th>5.</th>
                            <td>205 lb</td>
                            <td>Max</td>
                        </tr>
                    </table>
                </div>
                <div class="rewards">
                    <h3>Rewards</h3>
                    <table class="table">
                        <tr>
                            <th>1.</th>
                            <td>$25 gift card</td>
                        </tr>
                        <tr>
                            <th>2.</th>
                            <td>$15 gift card</td>
                        </tr>
                        <tr>
                            <th>3.</th>
                            <td>$10 gift card</td>
                        </tr>
                    </table>
                    <p>30 fit cash for all</p>
                </div>
                <div class="rewards">
                    <h3>Rewards</h3>
                    <table class="table">
                        <tr>
                            <th>1.</th>
                            <td>$25 gift card</td>
                        </tr>
                        <tr>
                            <th>2.</th>
                            <td>$15 gift card</td>
                        </tr>
                        <tr>
                            <th>3.</th>
                            <td>$10 gift card</td>
                        </tr>
                    </table>
                    <p>30 fit cash for all</p>
                </div>
                <div class="rewards">
                    <h3>Rewards</h3>
                    <table class="table">
                        <tr>
                            <th>1.</th>
                            <td>$25 gift card</td>
                        </tr>
                        <tr>
                            <th>2.</th>
                            <td>$15 gift card</td>
                        </tr>
                        <tr>
                            <th>3.</th>
                            <td>$10 gift card</td>
                        </tr>
                    </table>
                    <p>30 fit cash for all</p>
                </div>
                <div class="rewards">
                    <h3>Rewards</h3>
                    <table class="table">
                        <tr>
                            <th>1.</th>
                            <td>$25 gift card</td>
                        </tr>
                        <tr>
                            <th>2.</th>
                            <td>$15 gift card</td>
                        </tr>
                        <tr>
                            <th>3.</th>
                            <td>$10 gift card</td>
                        </tr>
                    </table>
                    <p>30 fit cash for all</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitionsPage2