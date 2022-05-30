import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import  './Contact.css'

const Contact = () => {
	return (
		<section className='contact-container'>
				<h1 className="text-center text-3xl uppercase text-white py-8">contact</h1>
				<article className="section-center footer-info-container w-3/4 mx-auto">
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
						<div className="icons flex">
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