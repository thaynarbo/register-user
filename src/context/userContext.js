import React, { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const UsersContext = createContext(null)

const UsersProvider = ({ children }) => {
    const [modalDelete, setModalDelete] = useState(false)
    const [modalCreate, setModalCreate] = useState(false)
    const [isFetching, seIsFetching] = useState(false)
    const [users, setUser] = useState([])
    const [selectUser, setSelectUser] = useState(null)

    useEffect(() => {
        getUsers()
    }, [])

    const openModalCreateUser = () => {
        setModalCreate(true)
    }

    const closeModalCreateUser = () => {
        setModalCreate(false)
    }

    const openModalDelete = (user) => {
        setSelectUser(user)
        setModalDelete(true)
    }
    const closeModalDelete = () => {
        setModalDelete(false)
    }

    const getUsers = async () => {
        seIsFetching(true)
        try {
            const { data } = await api.get('/users')
            setUser(data)
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetching(false)
        }
    }

    const deleteUser = async () => {
        seIsFetching(true)
        try {
            await api.delete(`/users/${selectUser.id}`)
            await getUsers()
            closeModalDelete()
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetching(false)
        }
    }

    const createUser = async (name) => {
        seIsFetching(true)
        try {
            await api.post('/users', {
                name,
            })
            closeModalCreateUser()
            getUsers()
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetching(false)
        }
    }

    return (
        <UsersContext.Provider
            value={{
                selectUser,
                modalDelete,
                isFetching,
                users,
                setUser,
                modalCreate,
                deleteUser,
                openModalDelete,
                getUsers,
                closeModalDelete,
                createUser,
                openModalCreateUser,
                closeModalCreateUser,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

const useUsers = () => {
    return useContext(UsersContext)
}

export { UsersProvider, useUsers }
