import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs.ts';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Le nom est requis');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("L'email est requis");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("L'email n'est pas valide");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Le sujet est requis');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Le message est requis');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current!,
        emailjsConfig.publicKey
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Une erreur est survenue l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aymeric-sabatier-6b1270251/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Aymdr404',
      icon: 'fab fa-github'
    },
    {
      name: 'Email',
      url: 'mailto:aymeric.sabatier@outlook.fr',
      icon: 'fas fa-envelope'
    }
  ];

  return (
    <div className="page-container contact-page">
      <h1 className="section-title">Contact</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect!</h2>
          <p className="contact-description">
            Je suis toujours intéressé par de nouvelles opportunités. 
            N'hésitez pas à me contacter pour discuter de projets passionnants 
            ou simplement pour échanger !
          </p>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="contact-card card">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>ssabatieraymeric@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Téléphone</h3>
                <p>+33 7 68 08 83 25</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Localisation</h3>
                <p>Grenoble, France</p>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} className="contact-form card" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              rows={6}
            />
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
          </button>

          {submitStatus === 'success' && (
            <div className="submit-status success">
              Message envoyé avec succès !
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="submit-status error">
              {errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact; 