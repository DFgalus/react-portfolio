import React from 'react';

export default function Portfolio() {
    return (
        <section>
            <div className='container-lg text-center p-4'>
                <h1>Projects</h1>
            </div>
            {/* container for projects */}
            <div className='container-lg'>
                <div className='row my-4 justify-content-start align-items-start'>
                    <div className='col-8 col-lg-4 col-md-6 col-sm-2 h-300 w-300 m-2 p-2'>
                        <img className='h-100 w-100 rounded' src='/images/gifthub.png' alt='gifthub'></img>
                        <div className='card-header text-center p-2'>
                            <h2>GiftHub</h2>
                        </div>
                        <div className='card-body text-center'>
                            <p className='lead'>A gift planning app made using JavaScript and Bootstrap, along with Express.js, MySQL, and Sequelize to power the backend.</p>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light'>Repo</a>
                        </div>
                    </div>
                    <div className='col-8 col-lg-4 col-md-6 col-sm-2 h-300 w-300 m-2 p-2'>
                        <img className='h-100 w-100 rounded' src='/images/gifthub.png' alt='gifthub'></img>
                        <div className='card-header text-center p-2'>
                            <h2>GiftHub</h2>
                        </div>
                        <div className='card-body text-center'>
                            <p className='lead'>A gift planning app made using JavaScript and Bootstrap, along with Express.js, MySQL, and Sequelize to power the backend.</p>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light'>Repo</a>
                        </div>
                    </div>
                    <div className='col-8 col-lg-4 col-md-6 col-sm-2 h-300 w-300 m-2 p-2'>
                        <img className='h-100 w-100 rounded' src='/images/gifthub.png' alt='gifthub'></img>
                        <div className='card-header text-center p-2'>
                            <h2>GiftHub</h2>
                        </div>
                        <div className='card-body text-center'>
                            <p className='lead'>A gift planning app made using JavaScript and Bootstrap, along with Express.js, MySQL, and Sequelize to power the backend.</p>
                            <a href='https://github.com/scicluna/giftlist' type='button' className='btn text-light'>Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}