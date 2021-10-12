import React from 'react'
import Modal from '../../Modal'

import { useTask } from '../../../context/taskContext'

const ModalExcluirTask = () => {
    const { deleteTask, modalDelete, closeModalDelete } = useTask()

    return (
        <Modal
            open={modalDelete}
            close={closeModalDelete}
            title="Deletar Task"
            textAction="Confirmar"
            actionClick={deleteTask}
        >
            Deseja realmente excluir ?
        </Modal>
    )
}

export default ModalExcluirTask
