import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { BiTask } from 'react-icons/bi'
import Input from './../../input'
import * as Style from './styles'

import { useTask } from '../../../context/taskContext'

const ModalEditTask = ({ element }) => {
    const { modalEdit, closeModalEdit, editTask } = useTask()
    const [value, setValue] = useState('')
    const [done, setDone] = useState(false)
    useEffect(() => {
        setValue(element.description)
    }, [element])
    const submit = () => {
        editTask({ description: value, done })
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
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <Style.Checkbox>
                <input
                    type="checkbox"
                    id="done"
                    name="done"
                    onChange={() => setDone((old) => !old)}
                    checked={!!done}
                />
                <label htmlFor="done">Feito</label>
            </Style.Checkbox>
        </Modal>
    )
}

export default ModalEditTask
