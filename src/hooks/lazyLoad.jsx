import React from "react";

function useLazyLoad (ref, setState, px = "100px"){
  React.useEffect(() => {

    const onChange = (entries) => {
      const el = entries[0]
      if(el.isIntersecting){
        setState(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: px
    })

    observer.observe(ref.current)
  }, [])
}

export { useLazyLoad }