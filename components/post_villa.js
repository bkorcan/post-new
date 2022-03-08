import Style from '../styles/post.module.css'
import { useStore } from './state'
import { useRef, useEffect } from 'react';


function PostVilla() {

  const node1 = useRef()
  const node2 = useRef()

  const id = useStore(state => state.id)
  const setId = useStore(state => state.setId)
  const price = useStore(state => state.price)
  const setPrice = useStore(state => state.setPrice)
  const call = useStore(state => state.call)
  const setCall = useStore(state => state.setCall)
  const error = useStore(state => state.error)
  const setError = useStore(state => state.setError)
  

  const clicked = () => {
    setId(node1.current.value)
    setPrice(node2.current.value)
    setCall(true)  
  }

    function Call(){

    useEffect(
      async () => {
  
        const res = await fetch('/api/post_villa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id, price: price }),
        });
  
        if (res.status === 500) {
          setCall(false)
          setError(true)
        }
  
        if (res.status === 200) {
          setCall(false)

        }
      }, []
    )
    return <> </>
    }

  return (
    <>
      <div className={Style.container} >
        <div className={Style.id} > <input type='text' className={Style.input} placeholder='Villa Id' ref={node1} /> </div>
        <div className={Style.price} > <input type='text' className={Style.input} placeholder='Price' ref={node2} /></div>
        {call ? <div> Waiting </div> :<div className={Style.submit} onClick={clicked} >Submit</div> }
        {call ? <Call/> : null}
      </div>
      {error ? <> Error  </> : null}
    </>

  )
}

export { PostVilla }