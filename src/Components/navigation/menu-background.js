import React from 'react'

const NavBackground = () => (
  <div id="nav-background">
    <svg width="100%" height="100%" role="img">
      <defs>
        <pattern id="bg-pattern" x="0" y="0" width="265" height="1080.1" patternUnits="userSpaceOnUse">
          <path className="wizense_bg" d="M218.6 1080c9-63.4 42.8-121.1 45-236.7s-37.7-135.2-38.4-240.7c-.9-154.8 49.8-184.5 26.4-317.6S199 119.9 218.6 0H0v1080h218.6z" opacity=".53"/>
          <path className="wizense_bg" d="M0 1080s258.5.2 258.4 0c7.5-91-24.7-143-25.6-263.1s12.9-141.5 22.1-217.2c14.3-117.5-34.1-172.1-33.2-322.1S249.6 89.8 258.3 0H0v1080z" opacity=".57"/>
          <path className="wizense_bg" d="M237 1080c-41.5-168.9 18.6-256 18.6-337.2S224.9 599 226 469.9 297.6 226.8 237.1.1L0 0v1080h237z" opacity=".35"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-pattern)" />
    </svg>
  </div>
)

export default NavBackground