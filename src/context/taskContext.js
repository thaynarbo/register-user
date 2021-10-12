import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [modalDelete, setModalDelete] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [open, setOpenModal] = useState(false)
    const [selectTask, setSelectTask] = useState(null)

    const closeModalTask = () => {
        setOpenModal(false)
    }

    const openModalTask = () => {
        setOpenModal(true)
    }

    const openModalDelete = (task) => {
        setSelectTask(task)
        setModalDelete(true)
    }
    const closeModalDelete = () => {
        setModalDelete(false)
    }
    const openModalEdit = (task) => {
        setSelectTask(task)
        setModalEdit(true)
    }
    const closeModalEdit = () => {
        setModalEdit(false)
    }
    const createTask = async (userId, description) => {
        try {
            await api.post('/tasks', {
                userId,
                description,
                done: false,
            })
            await getTasksByUser(userId)
            closeModalTask()
        } catch {
            console.log('deu errado')
        } finally {
        }
    }

    const getTasksByUser = async (id) => {
        try {
            const { data } = await api.get(`/tasks/${id}`)
            setTasks(data)
        } catch {
            console.log('deu errado')
        } finally {
        }
    }

    const deleteTask = async () => {
        try {
            await api.delete(`/tasks/${selectTask.id}`)
            await getTasksByUser(selectTask.userId)
            closeModalDelete()
        } catch {
            console.log('deu errado')
        } finally {
        }
    }
    const editTask = async ({ description, done }) => {
        try {
            await api.patch(`/tasks/${selectTask.id}`, {
                description,
                done,
            })
            getTasksByUser(selectTask.userId)
            closeModalEdit()
        } catch {}
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                open,
                getTasksByUser,
                closeModalTask,
                openModalTask,
                createTask,
                deleteTask,
                openModalDelete,
                closeModalDelete,
                modalDelete,
                selectTask,
                setTasks,
                editTask,
                openModalEdit,
                closeModalEdit,
                modalEdit,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

const useTask = () => {
    return useContext(TaskContext)
}

export { TaskProvider, useTask }
