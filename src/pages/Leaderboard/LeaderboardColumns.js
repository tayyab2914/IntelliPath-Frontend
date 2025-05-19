import React from "react";
import MyIcon from "../../components/Icon/MyIcon";
import MyBadge from "../../components/Badge/MyBadge";
import { DOMAIN_NAME } from "../../utils/GlobalSettings";
import { ICONS } from "../../data/IconData";

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
              <MyIcon type="leaderboardFirst" className="leaderboard_icon" />
            </span>
          )}
          {text === 2 && (
            <span className="leaderboard-rank">
              2{" "}
              <MyIcon type="leaderboardSecond" className="leaderboard_icon" />
            </span>
          )}
          {text === 3 && (
            <span className="leaderboard-rank">
              3{" "}
              <MyIcon type="leaderboardThird" className="leaderboard_icon" />
            </span>
          )}
          {text !== 1 && text !== 2 && text !== 3 && <span>{text}</span>}
        </span>
      ),
      width: windowWidth < 850 ? "20%" : "10%",
      sorter: (a, b) => a.position - b.position, // Sorting by Position
    },
    {
      title: "Learner",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <span className="leaderboard-name">
          <img
            src={`${DOMAIN_NAME}${record.profile_picture}` || ICONS?.avatar}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = ICONS?.avatar;
            }}
            className="leaderboard-avatar"
          />
          {record.name}
        </span>
      ),
      width: "60%",
      sorter: (a, b) => a.name.localeCompare(b.name), // Sorting by Learner Name
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
      align: "center",
      width: "10%",
      sorter: (a, b) => a.points - b.points, // Sorting by Points
    },
  ].filter(Boolean);
