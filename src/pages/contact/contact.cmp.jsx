import React from 'react';
import './contact.scss';
import FormInput from '../../components/form-input/form-input.cmp';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';

class ContactPage extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phone: '',
			message: ''
		};
	}

	sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_zip0rg7', 'template_xjl22ri', e.target, 'zj9DkBcUdQ1z0AaDY').then(
			(result) => {
				console.log(result.text);
				this.setState({
					name: '',
					email: '',
					phone: '',
					message: ''
				});
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="contact flex-c">
				<div className="contact-backround" />
				<div className="contact-content flex-c">
					<div className="contact-left">
						<h1 className="contact-title">GET IN TOUCH</h1>
						<div className="contact-details"> 
            <h2>Contact information:</h2>
							<p>
								<FaEnvelope className="react-icons" /> : <a href = "mailto: talalahmad1998@icloud.com">talalahmad1998@icloud.com</a>
							</p>
							<p>
								<FaPhone className="react-icons" /> :<a href="tel:+905317396902">+905317396902</a><br/>
								 <a href="tel:+923344107794">+923344107794</a>

              </p>
              <p>
              <FaMapMarker className="react-icons"/> : <a href="https://www.google.com/maps/place/Izmir,+Lahore,+Punjab/" target="_blank">Lahore, Pakistan</a>
              </p>
						</div>
					</div>
					<form className="contact-form flex-c" onSubmit={this.sendEmail}>
						<legend>
							<h2>Fill up the form and I will get back to you!</h2>
						</legend>
						<FormInput
							name="name"
							type="text"
							placeholder="Name"
							value={this.state.name}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							name="email"
							type="email"
							placeholder="Email"
							value={this.state.email}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							name="phone"
							type="number"
							placeholder="Phone number"
							value={this.state.phone}
							handleChange={this.handleChange}
							required
						/>
						<FormInput
							name="message"
							type="text"
							placeholder="Message"
							value={this.state.message}
							handleChange={this.handleChange}
							textarea="true"
							required
						/>
						<input className="contact-button" type="submit" value="SEND" />
					</form>
				</div>
			</div>
		);
	}
}

export default ContactPage;
