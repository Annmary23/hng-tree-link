import Footer from "./Footer"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-wrapper">
        <div className="form-wrapper">
            <h1 className="title"> Contact Me</h1>
            <p className="text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="spacing">
                    <label className="firstName">
                        <p>First name</p>
                        <input 
                            id="first_name"
                            type="text"
                            name="Firstname"
                            placeholder="Enter your first name"
                        />
                    </label>

                    <label className="lastName">
                        <p>Last name</p>
                        <input 
                            id="last_name"
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                        />
                    </label>
                </div>

                <label className="email">
                    <p>Email</p>
                    <input 
                        id="email"
                        type="text"
                        name="Email"
                        placeholder="yourname@email.com"
                    />
                </label>

                <label className="textMessage">
                    <p>Message</p>
                    <textarea name="message" id="message" rows="10" cols="30" defaultValue="Send me a message and I'll reply you as soon as possible..."/>
                </label>

                <label className="checkBox">
                    <input 
                    id="checkbox"
                    type="checkbox"
                    name="checkbox"
                    />
                    <p>You agree to providing your data to {"{name}"} who may contact you.</p>
                </label>
                <button type="button" id="btn__submit">Send message</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Contact