import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

const Actions = ({ showEditModal }) => {
  return (
    <div>
      <Space>
        <EditFilled onClick={showEditModal} />
        <DeleteFilled />
      </Space>
    </div>
  );
};

export default Actions;
