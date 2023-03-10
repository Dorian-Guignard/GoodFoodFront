import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h1>Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default Page404;