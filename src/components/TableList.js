import { Row, Table } from 'antd';
import { Button } from 'antd/lib/radio';
import React from 'react';

const TableList = ({ columns, dataSource, showAddModal }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      title={() => (
        <Row justify='end'>
          <Button onClick={showAddModal}>Add</Button>
        </Row>
      )}
    />
  );
};

export default TableList;
