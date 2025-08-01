---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<style>
/* Service box image styles */
.ts-service-image-wrapper {
  height: 250px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.ts-service-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.ts-service-box:hover .ts-service-image-wrapper img {
  transform: scale(1.05);
}

.ts-service-box {
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 30px;
  background: #fff;
}

.ts-service-info {
  padding: 20px;
  margin-left: 0;
}

.service-box-title {
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.service-box-title a {
  color: #333;
  text-decoration: none;
}

.service-box-title a:hover {
  color: #007bff;
}

/* Client logo styles */
.clients-logo {
  margin: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
}

.clients-logo:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

.clients-logo a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.clients-logo img {
  max-width: 100%;
  max-height: 90%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: none;
}

.clients-logo:hover img {
  transform: scale(1.05);
}

/* Contact Form Styles */
.contact-form {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border: 1px solid #ffc107;
}

.contact-form .form-label {
  color: #333;
  font-weight: 500;
  margin-bottom: 8px;
}

.contact-form .form-control {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.contact-form textarea.form-control {
  min-height: 100px;
}

.contact-form .btn-primary {
  padding: 10px 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #007bff;
  border: none;
  transition: all 0.3s ease;
}

.contact-form .btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Existing modal styles */
.modal-content {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

.modal-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  border-radius: 10px 10px 0 0;
  padding: 1rem 1.5rem;
}

.modal-title {
  color: #333;
  font-weight: 600;
  font-size: 1.25rem;
}

.form-label {
  font-weight: 500;
  color: #495057;
}

.form-control {
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.5rem 0.75rem;
}

.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.btn-close {
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  opacity: 0.5;
  width: 1.5em;
  height: 1.5em;
  padding: 0.25em;
  margin: -0.5rem -0.5rem -0.5rem auto;
  border: 0;
  border-radius: 0.25rem;
  transition: opacity 0.15s ease-in-out;
}

.btn-close:hover {
  opacity: 0.75;
  background-color: rgba(0, 0, 0, 0.1);
}

.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  opacity: 1;
}

/* Footer Styles */
.footer.bg-dark {
  background-color: #111111 !important;
}

.footer .widget-title {
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
  margin-bottom: 30px;
}

.footer .widget-title:after {
  content: '';
  display: block;
  width: 50px;
  height: 2px;
  background: #ffc107;
  margin-top: 10px;
}

.footer-social .social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
}

.footer-social .social-link:hover {
  background: #ffc107;
  color: #111111;
  transform: translateY(-3px);
}

/* Footer Contact Info Styles */
.footer-contact-info .contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.footer-contact-info .contact-item i {
  font-size: 1.2rem;
  margin-right: 15px;
  margin-top: 5px;
  flex-shrink: 0;
  color: #ffc107;
}

.footer-contact-info .contact-details h6 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
}

.footer-contact-info .contact-details p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-contact-info .contact-details a {
  transition: color 0.3s ease;
}

.footer-contact-info .contact-details a:hover {
  color: #ffc107 !important;
  text-decoration: none;
}

.footer-contact-info .contact-details .small {
  font-size: 0.8rem;
  opacity: 0.8;
  font-style: italic;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-contact-info .contact-item {
    margin-bottom: 1.2rem;
  }
  
  .footer-contact-info .contact-item i {
    margin-right: 12px;
    font-size: 1.1rem;
  }
}

/* Contact Form Styles */
.contact-form {
  margin-top: 15px;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.content-hidden {
  display: none;
}

.contact-form .form-control {
  height: 50px;
  color: #333333;
  padding: 0 20px;
}

.contact-form textarea.form-control {
  height: auto;
  padding-top: 15px;
  resize: none;
}

.contact-form .form-control:focus {
  box-shadow: none;
  background: #fff;
}

.contact-form .form-control::placeholder {
  color: #666;
}

.contact-form .btn-primary {
  background: #ffc107;
  color: #111111;
  border: 2px solid #ffc107;
  padding: 12px 30px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.contact-form .btn-primary:hover {
  background: transparent;
  color: #ffc107;
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright a {
  color: #ffc107;
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: #ffca2c;
}

.footer-menu a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: #ffc107 !important;
}

#back-to-top {
  right: 20px;
  bottom: 20px;
  z-index: 99;
  display: none;
  cursor: pointer;
}

#back-to-top .btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  padding: 0;
  line-height: 44px;
  background: #ffc107;
  color: #111111;
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

#back-to-top .btn:hover {
  background: #ffca2c;
  transform: translateY(-3px);
}

/* Section Title Styles */
.section-title-wrapper {
  text-align: center;
  margin-bottom: 50px;
}

.section-sub-title {
  color: #ffc107;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 600;
  display: block;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  color: #111111;
  position: relative;
  display: inline-block;
}

.section-title:after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #ffc107;
  margin: 15px auto 0;
}

/* WhatsApp Button Styles */
.whatsapp-float {
  position: fixed;
  bottom: 90px;
  right: 10px;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #25d366 60%, #128C7E 100%);
  color: #FFF;
  border-radius: 50%;
  text-align: center;
  font-size: 38px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.18);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  text-decoration: none;
  opacity: 0.95;
  animation: whatsapp-bounce 2s infinite 2s;
  outline: none;
}

@keyframes whatsapp-bounce {
  0%, 100% { transform: translateY(0); }
  10% { transform: translateY(-8px); }
  20% { transform: translateY(0); }
  30% { transform: translateY(-4px); }
  40% { transform: translateY(0); }
}

.whatsapp-float:focus {
  box-shadow: 0 0 0 4px #25d36655;
}

.whatsapp-float:hover {
  background: linear-gradient(135deg, #128C7E 60%, #25d366 100%);
  color: #FFF;
  transform: scale(1.08);
  opacity: 1;
}

.whatsapp-float i {
  margin: 0;
  font-size: 2.2em;
  line-height: 1;
}

/* Tooltip */
.whatsapp-float::after {
  content: "Chat with us on WhatsApp";
  position: absolute;
  right: 110%;
  top: 50%;
  transform: translateY(-50%);
  background: #222;
  color: #fff;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 15px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, right 0.3s;
  z-index: 9999;
}

.whatsapp-float:hover::after, .whatsapp-float:focus::after {
  opacity: 1;
  right: 120%;
}

</style>


<div class="banner-carousel banner-carousel-2 mb-0">
  <div class="banner-carousel-item" style="background-image:url({{ site.baseurl }}/assets/images/slider-main/wire-mesh-slider-2.jpeg)">
    <div class="container">
        <div class="box-slider-content">
          <div class="box-slider-text">
              <h1 class="box-slide-title">25+ Years of Excellence in</h1>
              <h2 class="box-slide-sub-title">Industrial Wire Solutions</h2>
              <p class="box-slide-description">Ashok Wires & Chemicals is a trusted name in high-quality wire mesh and screen cloth manufacturing, serving diverse industries with innovation and precision.</p>
              <p>
                <a href="#products" class="slider btn btn-primary scroll" aria-label="View our products">Our Products</a>
              </p>
          </div>
        </div>
    </div>
  </div>

  <div class="banner-carousel-item" style="background-image:url({{ site.baseurl }}/assets/images/slider-main/wire-mesh-slider-3.png)">
    <div class="slider-content">
        <div class="container">
          <div class="box-slider-content">
              <div class="box-slider-text">
                <h1 class="box-slide-title">Quality You Can Rely On</h1>
                <h2 class="box-slide-sub-title">Tailored Solutions for Every Industry</h2>
                <p class="box-slide-description">With over 25 years of expertise, we provide customized wire mesh solutions for global markets, ensuring durability, efficiency, and cost-effectiveness.</p>
                <p><a href="#about" class="slider btn btn-primary scroll" aria-label="Learn more about us">About Us</a></p>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>

<section class="call-to-action no-padding">
  <div class="container">
    <div class="action-style-box">
        <div class="row">
          <div class="col-md-8 text-center text-md-left">
              <div class= "call-to-action-text">
                <h3 class="action-title">We Deliver Strength, Precision, and Reliability</h3>
              </div>
          </div><!-- Col end -->
          <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
              <div class="call-to-action-btn">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#quoteModal">Get a Quote</button>
              </div>
          </div><!-- col end -->
        </div><!-- row end -->
    </div><!-- Action style box -->
  </div><!-- Container end -->
</section><!-- Action end -->

<!-- Quote Modal -->
<div class="modal fade" id="quoteModal" tabindex="-1" aria-labelledby="quoteModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="quoteModalLabel">Request a Quote</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="quote-form">
          <input type="hidden" name="form_type" value="quote">
          <input type="hidden" name="page" value="home">
          <input type="hidden" id="quote-timestamp" name="timestamp" value="">
          
          <!-- Honeypot field (hidden from real users, but bots will fill it) -->
          <div style="display:none;">
            <input type="text" id="website" name="website">
          </div>
          
          <div class="mb-3">
            <label for="name" class="form-label">Name *</label>
            <input type="text" class="form-control" id="name" name="name" required
              oninvalid="this.setCustomValidity('Please enter your name')" 
              oninput="this.setCustomValidity('')">
          </div>
          <div class="mb-3">
            <label for="mobile" class="form-label">Mobile Number *</label>
            <input type="tel" class="form-control" id="mobile" name="mobile" required
              pattern="[0-9]{10}"
              oninvalid="this.setCustomValidity('Please enter a valid 10-digit mobile number')" 
              oninput="this.setCustomValidity('')">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email (Optional)</label>
            <input type="email" class="form-control" id="email" name="email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message (Optional)</label>
            <textarea class="form-control" id="message" name="message" rows="3"></textarea>
          </div>
          <small class="text-muted d-block mb-3">* Required fields</small>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          <div id="quote-form-success" class="alert alert-success mt-3" style="display: none;">
            Thank you for your quote request. We will get back to you soon!
          </div>
          <div id="quote-form-error" class="alert alert-danger mt-3" style="display: none;">
            There was a problem sending your message. Please try again.
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div id="quote-success" style="display: none;" class="alert alert-success text-center my-3">
  Thank you for your quote request. We will get back to you soon!
</div>

<section id="products" class="ts-features pb-2">
  <div class="container">
    <div class="section-title-wrapper">
      <span class="section-sub-title">OUR</span>
      <h2 class="section-title">PRODUCTS</h2>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="ts-service-box">
              <div class="ts-service-image-wrapper">
                <img loading="lazy" class="w-100" src="{{ site.baseurl }}/assets/images/services/wire-mesh-product-1.png" alt="Wire Mesh Cloth - Premium Quality Industrial Wire Mesh Manufacturer in India">
              </div>
              <div class="d-flex">
                <div class="ts-service-info">
                    <h3 class="service-box-title"><a href="#wire-mesh">Wire Mesh Cloth</a></h3>
                    <p>Premium quality wire mesh cloth for residential, commercial, industrial, and agricultural applications. Available in aperture sizes from 2mm to 100mm and wire diameters from 2mm to 12mm. Manufactured using high-grade Stainless Steel, Spring Steel, Mild Steel, and G.I. with various weaves including Double Crimp, Dovex, and Lock Crimp.</p>
                </div>
              </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-5">
          <div class="ts-service-box">
              <div class="ts-service-image-wrapper">
                <img loading="lazy" class="w-100" src="{{ site.baseurl }}/assets/images/services/vibrating-screen-1.png" alt="Vibrating Screen Cloth - Industrial Screening Solutions">
              </div>
              <div class="d-flex">
                <div class="ts-service-info">
                    <h3 class="service-box-title"><a href="#vibrating-screen">Vibrating Screen Cloth</a></h3>
                    <p>High-performance vibrating screen cloth designed for mining and industrial screening applications. Available in sizes from 0.5mm to 100mm with wire diameters from 0.30mm to 14mm. Manufactured using premium Spring Steel and Stainless Steel from Usha Martin/Tata Steel for superior durability and performance under heavy vibration.</p>
                </div>
              </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-5">
          <div class="ts-service-box">
              <div class="ts-service-image-wrapper">
                <img loading="lazy" class="w-100" src="{{ site.baseurl }}/assets/images/services/chain-link-fencing-1.jpeg" alt="Chain Link Fencing - Secure Boundary Solutions">
              </div>
              <div class="d-flex">
                <div class="ts-service-info">
                    <h3 class="service-box-title"><a href="#chain-link">Chain Link Fencing</a></h3>
                    <p>Durable and secure chain link fencing solution made from interwoven wires. Available in wire diameters from 1.6mm to 4mm. Manufactured using high-quality Galvanized Iron (G.I.) for excellent strength, corrosion resistance, and security. Ideal for residential, industrial, and agricultural boundary protection.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</section>

<section id="facts" class="facts-area dark-bg">
  <div class="container">
    <div class="facts-wrapper">
        <div class="row">
          <div class="col-md-3 col-sm-6 ts-facts">
              <div class="ts-facts-img">
                <img loading="lazy" src="{{ site.baseurl }}/assets/images/icon-image/fact1.png" alt="facts-img">
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="4000">0</span>+</h2>
                <h3 class="ts-facts-title">Total Projects</h3>
              </div>
          </div><!-- Col end -->

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div class="ts-facts-img">
                <img loading="lazy" src="{{ site.baseurl }}/assets/images/icon-image/fact2.png" alt="facts-img">
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="500">0</span>+</h2>
                <h3 class="ts-facts-title">Customers Served</h3>
              </div>
          </div><!-- Col end -->

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img loading="lazy" src="{{ site.baseurl }}/assets/images/icon-image/fact3.png" alt="facts-img">
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="25">0</span>+</h2>
                <h3 class="ts-facts-title">Years of Excellence</h3>
              </div>
          </div><!-- Col end -->

          <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img loading="lazy" src="{{ site.baseurl }}/assets/images/icon-image/fact4.png" alt="facts-img">
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="5">0</span>+</h2>
                <h3 class="ts-facts-title">Countries Served</h3>
              </div>
          </div><!-- Col end -->

        </div> <!-- Facts end -->
    </div>
    <!--/ Content row end -->
  </div>
  <!--/ Container end -->
</section><!-- Facts end -->

<section id="about" class="ts-service-area pb-0">
  <div class="container">
    <div class="section-title-wrapper">
      <span class="section-sub-title">Why Clients</span>
      <h2 class="section-title">Choose Us</h2>
    </div>
    <!--/ Title row end -->

    <div class="row">
        <div class="col-lg-4">
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-info">
                <h3 class="service-box-title"><a href="#">Quality Commitment</a></h3>
                <p>We prioritize excellence by sourcing premium raw materials from USHA MARTIN and TATA STEEL. Our rigorous quality assurance process ensures every product meets the highest standards, with thorough quality checks before dispatch. This commitment provides you confidence in every purchase, backed by Test Certificates.</p>
              </div>
          </div><!-- Service 1 end -->

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-info">
                <h3 class="service-box-title"><a href="#">Proactive Customer Support</a></h3>
                <p>We value your time and inquiries. Our dedicated customer support team provides prompt responses to your questions through email and phone. We ensure your needs are met efficiently, maintaining clear communication, and offering personalized solutions for your specific requirements and challenges.</p>
              </div>
          </div><!-- Service 2 end -->

        </div><!-- Col end -->

        <div class="col-lg-4 text-center">
          <img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/services/indian-worker-2.jpeg" alt="service-avater-image" style="width: 90%">
        </div><!-- Col end -->

        <div class="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <div class="ts-service-box d-flex">
              <div class="ts-service-box-info">
                <h3 class="service-box-title"><a href="#">Dependable On-Time Delivery</a></h3>
                <p>Renowned for our robust supply chain management, we implement effective time management principles to guarantee on-time delivery. Trust us to be your reliable partner, ensuring that your supplies arrive when you need them most. Time is precious, and we understand the critical importance of meeting your deadlines consistently.</p>
              </div>
          </div><!-- Service 4 end -->

          <div class="ts-service-box d-flex">
              <div class="ts-service-box-info">
                <h3 class="service-box-title"><a href="#">Client Retention Excellence</a></h3>
                <p>Building lasting relationships is at the heart of our business. We establish annual pricing agreements for our valued clients, ensuring transparency and reliability. Prioritizing deliveries of screen cloth based on urgency reflects our commitment to supporting your operations effectively and maintaining long-term partnerships.</p>
              </div>
          </div><!-- Service 5 end -->
        </div><!-- Col end -->
    </div><!-- Content row end -->

  </div>
  <!--/ Container end -->
</section><!-- Service end -->

<section id="clients" class="content">
  <div class="container">
    <div class="row">
        <div class="col-lg-12 mt-5 mt-lg-0">
          <div class="section-title-wrapper">
            <span class="section-sub-title">OUR</span>
            <h2 class="section-title">TRUSTED CLIENTS</h2>
          </div>
          <p class="mb-4">Ashok Wires & Chemicals proudly serves leading companies across steel, power, mining, and manufacturing industries throughout India. Our wire mesh and industrial screening solutions are trusted by top-tier enterprises for quality, durability, and reliability.</p>
          <div class="row all-clients">
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Bhilai Steel Plant - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/bhilai-steel.jpeg" alt="Bhilai Steel Plant - Steel Industry Client of Ashok Wires & Chemicals" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Sarda Energy & Minerals - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/sarda.jpeg" alt="Sarda Energy & Minerals - Industrial Client of Ashok Wires & Chemicals" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Real Group - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/real-group.jpeg" alt="Real Group - Manufacturing Partner of Ashok Wires & Chemicals" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Vasvani Industries - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/vasvani.jpeg" alt="Vasvani Industries - Wire Mesh Solutions Client" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Jayaswal Neco Industries - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/jayaswal-neco.png" alt="Jayaswal Neco Industries - Steel and Wire Mesh Client" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Hira Power - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/hira-power.jpeg" alt="Hira Power - Energy Sector Client of Ashok Wires & Chemicals" /></a>
                </figure>
    </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Shree Bajrang - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/shree-bajrang.jpeg" alt="Shree Bajrang - Manufacturing Industry Client" /></a>
                </figure>
              </div>
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                    <a href="#!" title="Kalyani - Client of Ashok Wires & Chemicals"><img loading="lazy" class="img-fluid" src="{{ site.baseurl }}/assets/images/kalyani.jpeg" alt="Kalyani - Industrial Wire Mesh Solutions Client" /></a>
                </figure>
              </div>
  </div>
          <p class="mt-4">Our wire mesh products, vibrating screen cloth, and chain link fencing solutions are deployed across these industries for filtration, separation, screening, and safety applications. With 25+ years of experience serving these prestigious clients, we continue to deliver high-quality industrial wire solutions that meet rigorous standards.</p>
        </div>
    </div>
  </div>
</section>

<!-- Schema.org structured data for better SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ashok Wires & Chemicals",
  "url": "{{ site.url }}",
  "logo": "{{ site.url }}/assets/images/logo.png",
  "description": "Ashok Wires & Chemicals is a trusted manufacturer of wire mesh cloth, vibrating screen cloth, and chain link fencing with over 25 years of excellence serving various industries.",
  "sameAs": [
    "https://www.facebook.com/ashokwires",
    "https://twitter.com/ashokwires"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wire Mesh Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Wire Mesh Cloth",
          "description": "Premium quality wire mesh cloth for residential, commercial, industrial, and agricultural applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Vibrating Screen Cloth",
          "description": "High-performance vibrating screen cloth designed for mining and industrial screening applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Chain Link Fencing",
          "description": "Durable and secure chain link fencing solution made from interwoven wires."
        }
      }
    ]
  }
}
</script>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/919584872777?text=Hi%20Ashok%20Wires%20%26%20Chemicals,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Chat with us on WhatsApp"
   tabindex="0">
  <i class="fab fa-whatsapp" aria-hidden="true"></i>
</a>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Initialize timestamp for quote form
  const quoteTimestampField = document.getElementById('quote-timestamp');
  if (quoteTimestampField) {
    quoteTimestampField.value = Date.now().toString();
  }
  
  // Handle quote form submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      // Get form elements
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const successEl = document.getElementById('quote-form-success');
      const errorEl = document.getElementById('quote-form-error');
      
      // Clear previous messages
      successEl.style.display = 'none';
      errorEl.style.display = 'none';
      
      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
      
      try {
        // Convert form data to JSON
        const formData = new FormData(quoteForm);
        const formJson = Object.fromEntries(formData.entries());
        
        // Post to serverless function
        const response = await fetch('https://ashok-wires.netlify.app/.netlify/functions/index', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formJson)
        });
        
        const data = await response.json();
        
        if (response.ok && data.status === 'success') {
          // Show success message
          successEl.style.display = 'block';
          quoteForm.reset();
          
          // Reset timestamp
          quoteTimestampField.value = Date.now().toString();
          
          // Hide message after 5 seconds
          setTimeout(() => {
            successEl.style.display = 'none';
            
            // Close modal using Bootstrap 4 syntax
            $('#quoteModal').modal('hide');
            
            // Show success message outside modal
            document.getElementById('quote-success').style.display = 'block';
            setTimeout(() => {
              document.getElementById('quote-success').style.display = 'none';
            }, 5000);
          }, 1500);
        } else {
          // Show error message
          errorEl.textContent = data.error || 'There was a problem sending your message. Please try again.';
          errorEl.style.display = 'block';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        errorEl.textContent = 'Network error. Please try again later.';
        errorEl.style.display = 'block';
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
      }
    });
  }

  // Check for form submission success
  const urlParams = new URLSearchParams(window.location.search);
  const submitted = urlParams.get('submitted');
  const successElement = document.getElementById('quote-success');
  
  if (submitted === 'quote' && successElement) {
    successElement.style.display = 'block';
    // Hide success message after 5 seconds
    setTimeout(() => {
      successElement.style.display = 'none';
    }, 5000);
  }

  // Add smooth scrolling to all links with class 'scroll'
  document.querySelectorAll('a.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 100; // Offset for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Modal initialization is handled automatically by Bootstrap 4
  // No additional JavaScript needed for data-toggle="modal"

  // Add WhatsApp button animation
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    // Add entrance animation
    setTimeout(() => {
      whatsappBtn.style.opacity = '1';
      whatsappBtn.style.transform = 'scale(1)';
    }, 1000);
  }
});
</script>