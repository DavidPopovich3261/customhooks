import React, { useEffect, useState } from 'react'

function useLocalStorageState(key, defaultValue) {
    const [value, setValue] = useState(defaultValue)
    useEffect(() => {
        localStorage.setItem(key, value)

    }, [value])
    function remove() {
        localStorage.clear()
        setValue(defaultValue)
    }
    return ({ value, setValue, remove })
}

export default useLocalStorageState