import { Modal } from 'antd';
import React from 'react';

const AddModal = ({
  isAddModalVisible,
  handleAddModalOk,
  handleAddModalCancel,
}) => {
  return (
    <Modal
      title='Add'
      visible={isAddModalVisible}
      onOk={handleAddModalOk}
      onCancel={handleAddModalCancel}
    >
      Test
    </Modal>
  );
};

export default AddModal;
