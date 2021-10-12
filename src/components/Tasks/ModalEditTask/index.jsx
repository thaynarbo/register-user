import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { BiTask } from 'react-icons/bi'
import Input from './../../input'

import { useTask } from '../../../context/taskContext'

const ModalEditTask = ({ id }) => {
    const { modalEdit, closeModalEdit, editTask, value, setValue } = useTask()

    const submit = () => {
        editTask(value)
    }

    return (
        <Modal
            open={modalEdit}
            close={closeModalEdit}
            title="Editar Task"
            textAction="Confirmar"
            actionClick={submit}
        >
            <Input
                icon={<BiTask />}
                type={'text'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Modal>
    )
}

export default ModalEditTask
