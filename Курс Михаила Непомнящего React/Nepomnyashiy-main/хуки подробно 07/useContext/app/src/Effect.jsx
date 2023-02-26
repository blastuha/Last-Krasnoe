import React, { useEffect } from 'react'
import somePlugin from 'plugin'

export default function Effect() {
  // useEffect - работает ассинхронно. Если используется 2 useEffect, то его принято подписывать комментарием. Либо анонимную функцию менять на function name
  useEffect(function initPlagin() {
    somePlugin.init()

    return () => {
      somePlugin.destroy()
    }
  }, [])

  useEffect(() => {
    const handler = () => {}
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  return <div></div>
}
