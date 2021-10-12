import React from 'react'
import ButonRadius from '../../ButtonRadius'
import { FaTrash } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import { Container } from './styles'
import { useTask } from '../../../context/taskContext'
import {
    RiCheckboxBlankCircleFill,
    RiCheckboxBlankCircleLine,
} from 'react-icons/ri'

const CardTaskList = ({ task }) => {
    const { openModalDelete, openModalEdit } = useTask()
    return (
        <Container>
            <div className={'description'}>
                {!task.done ? (
                    <RiCheckboxBlankCircleLine />
                ) : (
                    <RiCheckboxBlankCircleFill />
                )}
                <p className={task.done ? 'done' : ''}>{task.description}</p>
            </div>
            <div className={'action'}>
                <ButonRadius
                    icon={<MdModeEditOutline />}
                    variant={'secondary'}
                    outline
                    onClick={() => openModalEdit(task)}
                />
                <ButonRadius
                    icon={<FaTrash />}
                    variant={'error'}
                    outline
                    onClick={() => openModalDelete(task)}
                />
            </div>
        </Container>
    )
}

export default CardTaskList
