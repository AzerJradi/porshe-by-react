import React, { useState } from 'react'
import '../CSS/NavBar.css'
import { Button } from 'bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
        <div className='All-Nav'>
          <iframe
            id='video-background'
          src="./x2mate.com-30 Second Porsche GT3 Commercial-(1080p).mp4"
          title="Embedded Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
                ></iframe>
              <div className='content'>
              </div>
        </div>
  )
}

export default NavBar
