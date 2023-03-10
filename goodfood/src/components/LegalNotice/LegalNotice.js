import './LegalNotice.css';
import Title from "antd/es/typography/Title"

function LegalNotice(){
    return(
    <div className="legalNotice">
        <Title>Mention Légales</Title>
        <div>

Editeur du site :

GoodFood <br/>

Propriété intellectuelle :<br/>

Tous les éléments (textes, images, vidéos, etc.) présents sur le site sont protégés par le droit d'auteur et la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.<br/>

Responsabilité :<br/>

L'éditeur ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site web, notamment en cas d'interruption de service, de virus informatique ou de perte de données.<br/>

Données personnelles :<br/>

Les données personnelles collectées sur le site (nom, prénom, adresse email, etc.) sont utilisées dans le respect de la réglementation en vigueur (RGPD) et ne sont pas transmises à des tiers sans autorisation préalable.<br/>

Cookies :<br/>

Le site utilise des cookies pour améliorer l'expérience utilisateur et proposer des contenus adaptés aux préférences de l'utilisateur. Il est possible de refuser les cookies en configurant son navigateur internet.<br/>

Loi applicable et juridiction compétente :<br/>

Le site est soumis à la loi française. Tout litige relatif au site sera de la compétence exclusive des tribunaux français.</div>
        </div>
    )
}

export default LegalNotice