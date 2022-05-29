import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import  './Contact.css'

const Contact = () => {
	return (
		<section className='contact-container w-3/4 mx-auto'>
				<h1 className="section-title contact-title">contact</h1>
				<article className="section-center footer-info-container px-10">
					<div className="contact-text">
					
						<ul>
							<li> <span>Address : </span>	
								<a href="">
							   Varsity Gate Of SUST, Surma, Akhali, Sylhet
							</a></li>
							<li> <span>Mobile Number :</span>   
								<a href=""> 017XXXXXXXXXX</a></li>
							<li> <span>Email : </span>  
								<a href=""> ratonroy@gmail.com </a></li>
							<li> 
								<a href=""> Know More Ourselves  </a></li>
						</ul>
					</div>
					<div className="contact-icon">
						<h4 className='contact-icon-title'> Follow Us  </h4>
						<div className="icons">
							<a href="">
							  <BsFacebook className = "icon"></BsFacebook>
							</a>
							<a href="">
							 <BsLinkedin className = "icon"/>
							</a>
							<a href="">
								<BsTwitter className = "icon"/>
							</a>
							<a href="">
							  <CgMail className = "icon"/>
							</a>
							
						</div>
					
					</div>
				</article>
			</section>
	);
};

export default Contact;