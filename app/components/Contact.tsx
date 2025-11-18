const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="text-center">
                    <h3 className="section-title">Get in Touch</h3>
                    <h2 className="section-subtitle">Contact Me</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="text-center mb-5">
                            Have a project in mind or just want to say hello? Feel free to reach out!
                            I'm always open to discussing new ideas and opportunities.
                        </p>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="email" className="form-control" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" rows={5} placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Send Message <i className="bi bi-send"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact