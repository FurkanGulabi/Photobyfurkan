import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3" style={{userSelect:"none"}}>
            <div className="container">
                <h5>&copy; {new Date().getFullYear()} Photobyfurkan tüm hakları saklıdır.</h5>
            </div>
        </footer>
    )
}

export default Footer
