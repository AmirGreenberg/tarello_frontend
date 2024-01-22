import { useEffect } from 'react'

function useOutsideClick(refOutside, callback, refInside) {
    useEffect(() => {
        function handleClickOutside(event) {
            const elOutside = refOutside?.current
            const elInside = refInside?.current
            if (elOutside && ! elOutside.contains(event.target)) {
                if (elInside && ! elInside.contains(event.target)) return
                callback()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [refOutside, callback, refInside])
}

export default useOutsideClick