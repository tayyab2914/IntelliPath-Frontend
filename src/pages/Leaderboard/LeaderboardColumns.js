import React from "react";
import MyIcon from "../../components/Icon/MyIcon";
import MyBadge from "../../components/Badge/MyBadge";

export const leaderboardColumns = (windowWidth) =>
  [
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      align: "center",
      render: (text) => (
        <span className="leaderboard-rank">
          {text === 1 && (
            <span className="leaderboard-rank">
              1{" "}
              <MyIcon type="leaderboardFirst" className={"leaderboard_icon"} />
            </span>
          )}
          {text === 2 && (
            <span className="leaderboard-rank">
              2{" "}
              <MyIcon type="leaderboardSecond" className={"leaderboard_icon"} />
            </span>
          )}
          {text === 3 && (
            <span className="leaderboard-rank">
              3{" "}
              <MyIcon type="leaderboardThird" className={"leaderboard_icon"} />
            </span>
          )}
          {text !== 1 && text !== 2 && text !== 3 && <span>{text}</span>}
        </span>
      ),

      width: windowWidth < 850 ? "20%" : "10%",
    },
    {
      title: "Learner",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="leaderboard-name">
          <MyIcon type="avatar" size="sm" className="leaderboard-avatar" />{" "}
          {text}
        </span>
      ),
      width: "60%",
    },
    windowWidth > 500 && {
      title: "Masteries",
      dataIndex: "masteries",
      key: "masteries",
      render: (masteries) => masteries?.map((item)=><MyBadge type={item}/>),
      width: windowWidth < 850 ? "20%" : "10%",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
      align: "center",
      width: "10%",
    },
  ].filter(Boolean);
