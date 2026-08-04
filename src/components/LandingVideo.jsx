import React, { useRef, useEffect } from "react"

function LandingVideo({ link, preLoaderOut }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    if (preLoaderOut) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [preLoaderOut])

  return (
    <video
      ref={videoRef}
      src={link}
      muted
      loop
      playsInline
      preload="metadata"
      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-x z-[2]  min-w-full min-h-full w-[177.77vh] h-[100vh] object-cover"
    >
      Your browser does not support the video tag.
    </video>
  )
}

export default LandingVideo