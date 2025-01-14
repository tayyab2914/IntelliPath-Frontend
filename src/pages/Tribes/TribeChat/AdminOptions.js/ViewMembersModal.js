import { Modal } from 'antd'
import React from 'react'

const ViewMembersModal = ({visible,onClose}) => {
  return (
    <Modal
    title="Members"
    visible={visible}
    onCancel={onClose}
    footer={null}>
        ViewMembersModal
    </Modal>
  )
}

export default ViewMembersModal
