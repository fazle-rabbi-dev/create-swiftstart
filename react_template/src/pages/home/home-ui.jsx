import { useEffect } from 'react'

function HomePage({setProgress}) {
    useEffect(() => {
      setTimeout(function() {
        setProgress(40)
          setTimeout(function() {
            setProgress(100)
          }, 700);
      }, 500);
    },[]);
    
    return (
      <div className="">
        <h2 className="text-4xl font-clash-display-medium">
          Vite + React
        </h2>
        <p className="font-satoshi-medium tracking-wide ">
          Aliqua laborum id aliquip adipisicing qui proident mollit do ipsum id dolore nisi in in ipsum duis laboris incididunt officia ipsum do consectetur enim dolor fugiat laborum labore et veniam veniam officia nulla laborum esse adipisicing veniam duis qui minim
        </p>
      </div>
  )
}

export default HomePage
