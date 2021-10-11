import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [modalDelete, setModalDelete] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [open, setOpenModal] = useState(false)
    const [selectTask, setSelectTask] = useState(null)
    const [isDone, setIsDone] = useState(false)

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
            await getTasks(userId)
            closeModalTask()
        } catch {
            console.log('deu errado')
        } finally {
        }
    }

    const getTasks = async (id) => {
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
            await getTasks(selectTask.userId)
            closeModalDelete()
        } catch {
            console.log('deu errado')
        } finally {
        }
    }
    const editTask = async (description) => {
        try {
            await api.patch(`/tasks/${selectTask.id}`, {
                description,
                done: isDone,
            })
            getTasks(selectTask.userId)
            closeModalEdit()
        } catch {}
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                open,
                getTasks,
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
                isDone,
                setIsDone,
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