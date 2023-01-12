import { useState } from "react";

export const useForm = (initialState) => {
    const [ form, setForm ] = useState(initialState)
    const onChange = ( event ) => {
        const {name, value} = event.target
        const meuForm = {...form, [name]: value}
        setForm(meuForm)

    }
    const resetState = () => {
        setForm(initialState)
    }
    return [form, onChange, resetState]
}

