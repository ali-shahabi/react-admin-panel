import { Modal } from 'antd';
import React from 'react';

const EditModal = ({
  isEditModalVisible,
  handleEditModalOk,
  handleEditModalCancel,
}) => {
  return (
    <Modal
      title='Edit'
      visible={isEditModalVisible}
      onOk={handleEditModalOk}
      onCancel={handleEditModalCancel}
    >
      Test
    </Modal>
  );
};

export default EditModal;
