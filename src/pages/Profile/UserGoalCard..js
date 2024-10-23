import React from 'react'

const UserGoalCard = ({ GoalData,GoalNum }) => {
  return (
    <div className="profile-goal-card-container">
      <p className="profile-goal-name">Goal {GoalNum} : {GoalData.name}</p>
      <p className="profile-goal-rank">Current Rank : {GoalData.rank}</p>
      <p className="profile-goal-engagement">Engagement Prediction : {GoalData.engagement_prediction}%</p>
    </div>
  )
}

export default UserGoalCard
