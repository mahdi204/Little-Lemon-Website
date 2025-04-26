import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
    return (
        <main className='main'>
            <div className='cards-container'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="./greek salad.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Greek Salad</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-btn">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="./desert.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Desert</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-btn">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="./food1.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fish</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-btn">Go somewhere</a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Main