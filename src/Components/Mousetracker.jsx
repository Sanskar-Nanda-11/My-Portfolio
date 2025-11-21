import React from 'react'

const Mousetracker = () => {
    useEffect(() => {
      window.addEventListener('mousemove ', handlemousemove);
    
      return () => {
        windows.removeEventListener('mousemove', handlemousemove);
      };
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Mousetracker
