import React from 'react';
import './Freelance.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Création de site vitrine',
    icon: 'fas fa-globe',
    description: "Un site vitrine professionnel pour présenter votre activité, vos valeurs et vos services. Design moderne, responsive, optimisé pour le référencement et facile à administrer.",
    points: [
      'Design personnalisé et moderne',
      'Site responsive (mobile/tablette/desktop)',
      'Optimisation SEO de base',
      'Intégration de vos contenus (textes, images, etc.)',
      'Conseils et accompagnement',
    ],
  },
  {
    title: 'Création de site e-commerce',
    icon: 'fas fa-shopping-cart',
    description: "Développez votre boutique en ligne sur-mesure pour vendre vos produits ou services, avec gestion du catalogue, panier, paiement sécurisé et interface d’administration.",
    points: [
      'Boutique personnalisée et évolutive',
      'Gestion facile des produits et commandes',
      'Paiement en ligne sécurisé',
      'Responsive et optimisé SEO',
      'Formation à l’utilisation',
    ],
  },
  {
    title: 'Refonte de site web',
    icon: 'fas fa-sync-alt',
    description: "Modernisez votre site existant pour améliorer son design, ses performances, son référencement et son adaptabilité mobile, tout en optimisant votre contenu.",
    points: [
      'Audit et conseils personnalisés',
      'Nouveau design moderne',
      'Optimisation technique et SEO',
      'Migration de contenu facilitée',
      'Amélioration de l’expérience utilisateur',
    ],
  },
  {
    title: 'Développement de fonctionnalités sur-mesure',
    icon: 'fas fa-puzzle-piece',
    description: "Ajoutez des modules spécifiques à votre activité (formulaires avancés, espace client, blog, réservation en ligne, etc.) pour répondre à vos besoins uniques.",
    points: [
      'Fonctionnalités adaptées à vos besoins',
      'Intégration fluide à votre site',
      'Tests et validation avec vous',
      'Documentation et formation',
      'Évolutivité garantie',
    ],
  },
  {
    title: 'Intégration d’API & automatisation',
    icon: 'fas fa-cogs',
    description: "Connectez votre site à des services externes (paiement, newsletter, CRM, etc.) et automatisez des tâches pour gagner du temps et améliorer votre efficacité.",
    points: [
      'Connexion à des outils tiers (API)',
      'Automatisation de processus',
      'Sécurité et fiabilité',
      'Gain de temps et productivité',
      'Support technique inclus',
    ],
  },
];

const Freelance: React.FC = () => {
  return (
    <div className="page-container freelance-page">
      <h1 className="section-title">Services</h1>
      <div className="freelance-intro">
        <p>
          Vous souhaitez booster votre présence en ligne ? Je vous accompagne dans la création de sites web modernes, performants et adaptés à vos besoins. Que vous soyez entrepreneur, association ou PME, je mets mon expertise à votre service pour concrétiser vos projets digitaux.
        </p>
      </div>
      <div className="services-grid">
        {services.map(service => {
          
          return (
            <div className="service-card card" key={service.title}>
              <i className={`service-icon ${service.icon}`}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="primary-button service-cta">Demander un devis</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Freelance;
