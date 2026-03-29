import React, {useEffect} from 'react'

export default function Para({integer}){
    useEffect(() => {
      alert(`integer was changed to ${integer}`)
    }, [integer])
    
    return (
    <>
    <div>
        i am a {integer}
    </div>
    </>
    )
}
