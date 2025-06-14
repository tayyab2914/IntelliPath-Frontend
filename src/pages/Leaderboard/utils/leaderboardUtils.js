export const sortAndProcessLeaderboard = (data, selectedCategory) => {
  const user = data?.user_scorecard;
  const others = (data?.other_users_scorecards || []).filter(
    (item) => item.user_id !== user?.user_id
  );

  const allUsers = [user, ...others].map((item) => ({
    user_id: item?.user_id,
    name: item?.full_name,
    email: item?.email,
    profile_picture: item?.profile_picture,
    points: selectedCategory === "All" ? item?.total_score : item?.data?.[selectedCategory] || 0,
    masteries: Object.keys(item?.data || {}),
    total_score: item?.total_score,
  }));

  const sorted = selectedCategory === "All" 
    ? allUsers.sort((a, b) => b.total_score - a.total_score)
    : allUsers.sort((a, b) => b.points - a.points);

  const final = sorted.map((item, index) => ({ ...item, position: index + 1 }));

  const currentUser = final.find((item) => item.user_id === user?.user_id);
  const restUsers = final.filter((item) => item.points > 0);

  return {
    userScoreCard: currentUser ? [currentUser] : [],
    otherUsersScoreCards: restUsers,
  };
}; 