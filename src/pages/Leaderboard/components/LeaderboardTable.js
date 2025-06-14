import React from 'react';
import { Table, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import useSpeech from '../../../utils/WebSpeech.js/functionalities/useSpeech';
import { LB__USER } from '../../../utils/WebSpeech.js/functionalities/useSpeechText';
import { leaderboardColumns } from '../LeaderboardColumns';

const LeaderboardTable = ({
  dataSource,
  columns,
  pagination,
  showHeader = true,
  className,
  onRowClick,
}) => {
  const navigate = useNavigate();
  const { speakWord } = useSpeech();

  const handleRowClick = (record) => {
    if (onRowClick) {
      onRowClick(record);
    } else {
      navigate(`/profile/${record.user_id}`, { state: { user_id: record.user_id } });
    }
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      showHeader={showHeader}
      className={className}
      rowKey="user_id"
      locale={{ emptyText: <Empty description="No user ranked in this domain" /> }}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
        onMouseEnter: () => speakWord(LB__USER(record?.position, record?.name, record?.points)),
      })}
    />
  );
};

export default LeaderboardTable; 