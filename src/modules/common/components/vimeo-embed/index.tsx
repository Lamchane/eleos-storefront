import React from "react"

const VimeoEmbed = ({ videoId }: { videoId: string }) => {
  const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=0`

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={embedUrl}
        allow="autoplay; fullscreen; encrypted-media"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full"
        title="eleos stop motion"
      />
    </div>
  )
}

export default VimeoEmbed
