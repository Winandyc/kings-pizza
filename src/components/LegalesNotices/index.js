import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const LegalesNotices = () => {
    const navigate = useNavigate();

    return (
        <div className="mentions-legales">
            <button className="close-button" onClick={() => navigate(-1)}>&times;</button>
            <h1>Mentions Légales</h1>
            <div className="section">
                <h2>Informations sur l'éditeur du site</h2>
                <p>Winandy Christopher</p>
                <p>Téléphone : 07 50 62 64 25</p>
                <p>Email : winandydev@gmail.com</p>
            </div>
            <div className="section">
                <h2>Hébergeur du site</h2>
                <p>À remplir par la suite</p>
            </div>
            <div className="section">
                <h2>Directeur de la publication</h2>
                <p>Winandy Christopher</p>
            </div>
            <div className="section">
                <h2>Numéro SIRET</h2>
                <p>À remplir</p>
            </div>
            <div className="section">
                <h2>Conditions d'utilisation</h2>
                <p>En accédant à ce site, vous acceptez les présentes conditions d'utilisation. Le contenu de ce site est fourni à titre informatif et peut être modifié à tout moment sans préavis.</p>
            </div>
            <div className="section">
                <h2>Propriété intellectuelle</h2>
                <p>Tout le contenu de ce site, y compris les textes, images, logos et autres éléments, est protégé par des droits d'auteur et appartient à la MAISON DU BON ou à ses partenaires. Toute utilisation non autorisée de ce contenu est strictement interdite.</p>
            </div>
            <div className="section">
                <h2>Politique de confidentialité</h2>
                <p>Nous recueillons et utilisons vos données personnelles conformément à notre politique de confidentialité, que vous pouvez consulter sur notre site. Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles.</p>
                <p>Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.</p>
            </div>
            <div className="section">
                <h2>Responsabilité</h2>
                <p>La MAISON DU BON décline toute responsabilité en cas de dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder. Les avis laissés par les utilisateurs reflètent uniquement leur opinion personnelle et n'engagent pas la responsabilité de la MAISON DU BON.</p>
            </div>
            <div className="section">
                <h2>Loi applicable</h2>
                <p>Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </div>
            <div className="section">
                <h2>Contact</h2>
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter au 04 75 90 97 86 aux heures d'ouverture du restaurant.</p>
            </div>
        </div>
    );
};

export default LegalesNotices;
