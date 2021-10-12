import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardTaskList from '../../components/Tasks/CardTaskList'
import Button from '../../components/Button'
import { useTask } from '../../context/taskContext'
import ModalCreateTask from '../../components/Tasks/ModalCreateTask'
import { Container } from './styles'
import { BiArrowBack } from 'react-icons/bi'
import ButonRadius from '../../components/ButtonRadius'
import { Link } from 'react-router-dom'
import ModalExcluirTask from '../../components/Tasks/ModalExcluirTask'
import ModalEditTask from '../../components/Tasks/ModalEditTask'
import { Fragment } from 'react'

const UserTask = () => {
    let { id } = useParams()
    const { tasks, getTasksByUser, openModalTask } = useTask()

    useEffect(() => {
        getTasksByUser(id)
    }, [id])

    return (
        <Container>
            <Link to={'/'} className={'back'}>
                <ButonRadius icon={<BiArrowBack />} outline />
                <p>Lista de Usuarios</p>
            </Link>
            <Button onClick={() => openModalTask()}>Cadastrar Tarefa</Button>
            <div>
                {tasks?.map((el, index) => {
                    return (
                        <Fragment key={String(el.id)}>
                            <CardTaskList key={index} task={el} />
                            <ModalCreateTask id={id} />
                            <ModalExcluirTask id={id} />
                            <ModalEditTask id={id} element={el} />
                        </Fragment>
                    )
                })}
            </div>
        </Container>
    )
}

export default UserTask
