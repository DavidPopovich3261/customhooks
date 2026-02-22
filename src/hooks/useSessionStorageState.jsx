import React, { useEffect, useState } from 'react'

function useSessionStorageState(key, defaultValue) {
    const [value, setValue] = useState(defaultValue)
    useEffect(() => {
        sessionStorage.setItem(key, value)

    }, [value])
    function remove() {
        sessionStorage.clear()
        setValue(defaultValue)
    }
    return ({ value, setValue, remove })
}

export default useSessionStorageState