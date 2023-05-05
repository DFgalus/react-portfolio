import React from 'react';


export default function Portfolio() {
    return (
        <section>
            <div className='container-lg text-center p-4'>
                <h1>Projects</h1>
            </div>
            {/* container for projects */}
            <div className='container-lg'>
                <div className='row my-4 pt-4 justify-content-between align-items-center'>
                    <div className='col-6 col-lg-4 col-md-4 col-sm-1 m-auto'>
                        <img className='img-fluid rounded' src='/images/gifthub.png' alt='gifthub'></img>
                        <div className='card-header text-center'>
                            <h2>GiftHub</h2>
                        </div>
                        <div className='card-body text-center'>
                            <p className='lead'>A gift planning app made using JavaScript and Bootstrap, along with Express.js, MySQL, and Sequelize to power the backend.</p>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light me-2'>Repo</a>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light'>Deployed App</a>
                        </div>
                    </div>
                    <div className='col-6 col-lg-4 col-md-4 col-sm-1 m-auto'>
                        <img className='img-fluid rounded' src='/images/EW.jpg' alt='Entertainment Wishlist'></img>
                        <div className='card-header text-center'>
                            <h2>Entertainment Wishlist</h2>
                        </div>
                        <div className='card-body text-center'>
                            <p className='lead'>Group project made for the completion of the initial third of our bootcamp. Coded in JavaScript with tailwind as the CSS framework.</p>
                            <a href='https://github.com/tnewnum/Wishlist' type='button' className='btn text-light me-2'>Repo</a>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light'>Deployed App</a>
                        </div>
                    </div>
                    <div className='col-6 col-lg-4 col-md-4 col-sm-1 m-auto p-2'>
                        <img className='img-fluid rounded' src='/images/READMEgen.jpg' alt='READMEgen'></img>
                        <div className='card-header text-center'>
                            <h2>README Generator</h2>
                        </div>
                        <div className='card-body text-center p-1 m-2'>
                            <p className='lead'>Command line program that generates custom README.md using JavaScript and Node.js</p>
                            <a href='https://github.com/DFgalus/README-generator' type='button' className='btn text-light'>Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}