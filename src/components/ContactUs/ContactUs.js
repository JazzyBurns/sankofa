import './ContactUs.css';
import mail from './mailicon.png'
import phone from './phoneicon.png'
import fb from './facebookicon.png'

function Contact() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="contact-us"> Contact Us </h1>
      </header>

      <div className="body">
        <div className="contact-info">
          
          <div className="email-contact">
            <img src={mail} className="icon" alt="Mail"/>
            <p className="contact-text">Jasmin Burns: jlsheppard@ucdavis.edu</p>
          </div>

          <br></br>
          <br></br>
          
          <div className="phone-contact">
            <img src={phone} className="icon" alt="Phone"/>
            <p className="contact-text">916-703-0403</p>
          </div>

        </div>

        <h2 className="subheading"> Find us on Facebook </h2>

        <div className="icon-contact">

          <div class="sankofa-fb">
            <img src={fb} className="icon" alt="Facebook"/>
            <p className="fb-text">Sankofa Facebook Page</p>
          </div>

          <br></br>
          <br></br>
          
          <div class="sankofa-fb-parent">
            <img src={fb} className="icon" alt="Facebook"/>
            <p className="fb-text">Sankofa Facebook Parent Support Group</p>
          </div>

        </div>

        <br></br>

        <h2 className="subheading"> Send us a message below: </h2>
        <div class='fcf-body'>
          
          <div id="fcf-form">
            <form id="fcf-form-id" class="fcf-form-class" method="post" 
            action="contact-form-process.php"></form>

            <div class="same-row">
              <div class="fcf-form-group name-box">
                <label for="Name" class="fcf-label">Name</label>
                <div class="fcf-input-group name-css">
                  <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
                </div>
              </div>

              <br></br>

              <div class="fcf-form-group email-box">
                <label for="Email" class="fcf-label">Email address</label>
                <div class="fcf-input-group email-css">
                    <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
                </div>
              </div>
            </div>
          

            <br></br>

            <div class="fcf-form-group">
              <label for="Subject" class="fcf-label">Subject</label>
              <div class="fcf-input-group">
                  <input type="text" id="Email" name="Email" class="fcf-form-control" required></input>
              </div>
            </div>

            <br></br>

            <div class="fcf-form-group">
              <label for="Message" class="fcf-label">Write your message here:</label>
              <div class="fcf-input-group">
                  <input type="text" id="Email" name="Email" class="fcf-form-control-thick" required></input>
              </div>
            </div>

            <br></br>

            <div class="fcf-form-group">
              <div class="wrapper">
                <button type="submit" id="fcf-button" 
                class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Submit</button>
              </div>
            </div>

            <br></br>

          </div>
        </div>

        <br/><br/>

        <h2> Join our mailing list: </h2>
        <div class='fcf-body'>
          <div class="box-area"></div>
          
          <div class="name-and-email" id="fcf-form">
            <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-us-form.php">
              
              <div class="same-row">
                <div class="fcf-form-group name-box">
                  <label for="Name" class="fcf-label">Name</label>
                  <div class="fcf-input-group name-css">
                    <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
                  </div>
                </div>

                <br></br>

                <div class="fcf-form-group email-box">
                  <label for="Email" class="fcf-label" id="email-box">Email address</label>
                  <div class="fcf-input-group email-css">
                    <input type="email" id="Name" name="Name" class="fcf-form-control" required></input>
                  </div>
                </div>
              </div>

              <br></br>

              <div class="fcf-form-group">
                <div class="wrapper">
                  <button type="submit" id="fcf-button" 
                  class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Submit</button>
                </div>
              </div>

              <br></br>

            </form>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;

