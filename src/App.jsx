import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

function App() {
  // const gsapRef = useRef()
  // const gsapBoxRef = useRef()
  
  const updatePos = () => {
    gsap.to(".box", {
      y: `${gsap.utils.random(20, 80, 10)}vh`,
      x: `${gsap.utils.random(10, 90, 10)}vh`,
      rotate: gsap.utils.random(-15, 10),
      duration: 0.7,
      ease: "back.out(1.7)",
    });
  };

  // useGSAP(() => {
    // gsap.from(gsapBoxRef.current, {
    //   rotate: 360,
    //   duration: 1,
    //   delay: 0.5,
    //   scale: 0,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "steps(30)",
    // });

    // gsap.from(gsapRef.current, {
    //       borderRadius: '100%',
    //       duration: 1,
    //       delay: 0.5,
    //       scale: 0,
    //       repeat: -1,
    //       yoyo: true,
    //       ease: "expoexpo.outout",
    //     });
  // })
  return (
    <>
      <div
        id="main"
        className="h-screen w-full bg-[#7ED4FD] flex justify-center items-center flex-col gap-10 cursor-help"
      >
        {/* <div
          id="container-1"
          className="flex justify-center items-center flex-col gap-10 border p-3"
        >
          <div className="box h-32 w-32 bg-yellow-500 rounded-lg"></div>

          <div ref={gsapRef} className="circle h-20 w-20 bg-green-500"></div>
        </div>
        <div
          id="container-2"
          className="flex justify-center items-center flex-col gap-10 border p-3"
        >
          <div
            ref={gsapBoxRef}
            className="box h-32 w-32 bg-yellow-500 rounded-lg"
          ></div>

          <div className="circle h-20 w-20 bg-green-500"></div>
        </div> */}

        <div
          onClick={updatePos}
          className="box h-20 w-20 rounded-sm fixed top-10 left-10 cursor-grab"
        >
          <img
            className='h-full w-full object-cover'
            src="https://img.freepik.com/free-vector/cute-bee-flying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector_138676-6016.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App
