export default function About() {
    return (
        <section>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center mt-2">
                    <div className='col-md-5 text-center text-lg-start'>
                        <h1 className=' col-md-5 text-center'>
                            <div className='display-3 text-start'>Damian Galus - Full Stack Web Developer</div>
                        </h1>
                        <p className='lead text-muted'>Hey my name is Damian, I am a FullStack Web Developer based out of Michigan.</p>
                        <p className='lead text-muted'>Thank you for viewing my portfolio, if you have any questions or would like to collaborate, feel free to contact me!</p>
                        <a href='mailto:damiangdev@gmail.com' type='button' className='btn text-light'>Contact Me</a>
                    </div>
                    <div className='col-lg-5 text center h-25 w-25'>
                        <img className='img-fluid align-items-center rounded-pill rounded-5 border border-dark-subtle border-5'src='/images/PFP.jpg' alt='PFP'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}