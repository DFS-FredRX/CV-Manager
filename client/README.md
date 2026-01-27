<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 28px;">CV Manager - Client Application</div>
    <div style="font-weight: bold; font-size: 16px; opacity: 0.8;">La solution intelligente pour vos candidatures</div>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 24px; margin-top: 16px;">Vision & Philosophie du projet</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <p><strong>CV Manager - Client Application</strong> n'est pas qu'une simple interface ; c'est un projet bâti sur le principe de <strong>Souveraineté Numérique</strong>. L'architecture est pensée pour être la moins invasive possible tout en offrant une expérience fluide et performante.</p>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Le choix éthique : Privacy-by-Choice</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <p>Le projet se distingue par sa gestion granulaire du consentement. Nous ne décidons pas de l'empreinte technique à la place de l'utilisateur :</p>
    <ul>
        <li><strong>Mode éphémère (Par défaut) :</strong> Utilisation du <em>SessionStorage</em>. Aucune donnée ne survit à la fermeture de l'onglet. Empreinte disque nulle.</li>
        <li><strong>Mode persistante (Sur consentement) :</strong> Utilisation du <em>LocalStorage</em>. Permet une reconnexion automatique et un confort d'usage accru.</li>
        <li><strong>Source de vérité (SSOT) :</strong> Dans les deux cas, 100% des données métier (CV, informations personnelles) résident sur le serveur. Le client ne sert que de terminal de consultation et d'édition.</li>
    </ul>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 24px; margin-top: 16px;">Stack technique (High-End 2026)</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <p>L'application exploite les versions les plus récentes de l'écosystème JavaScript pour garantir longévité et performances.</p>
    <table style="font-size: 16px; width: 100%; border-collapse: collapse;">
        <thead style="font-weight: bold;">
            <tr>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px;">Technologie</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; text-align: center;">Version</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px;">Rôle</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; font-weight: bold; vertical-align: top;">React.js</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top; text-align: center;">^19.2.0</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top;">Utilisation des <em>Actions</em>, du hook <em>use()</em> et des optimisations de rendu.</td>
            </tr>
            <tr>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; font-weight: bold; vertical-align: top;">React Router</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top; text-align: center;">^7.13.0</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top;">Framework de routage complet (Data Loading, Mutations, Hydratation).</td>
            </tr>
            <tr>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; font-weight: bold; vertical-align: top;">Vite</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top; text-align: center;">^7.13.0</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top;">Build Took de nouvelle génération pour un développement instantané.</td>
            </tr>
            <tr>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; font-weight: bold; vertical-align: top;">ESLint</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top; text-align: center;">^9.39.1</td>
                <td style="border: 1px solid rgba(255, 255, 255, 0.25); padding: 8px 16px; vertical-align: top;">Analyse statique avec la nouvelle "Flat Config" pour une qualité de code optimale.</td>
            </tr>
        </tbody>
    </table>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 24px; margin-top: 16px;">Architecture de l'état & Données</div>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Gestion d'état via React Contect</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <p>Plutôt que d'alourdir le projet avec des bibliothèque tierce, nous utilisons l'API <strong>Context</strong> native pour une intégration parfaite avec <strong>React 19</strong> :</p>
    <ul>
        <li><strong>AuthContext :</strong> Gère l'identité et les permissions.</li>
        <li><strong>StorageContext :</strong> Pilote dynamiquement le choix entre <em>SessionStorage</em> et <em>LocalStorage</em>.</li>
        <li><strong>DataContext :</strong> Cache temporaire pour les données récupérées de la base de données.</li>
    </ul>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Flux de synchronisation</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <ol style="font-weight: bold;">
        <li><span style="font-weight: normal;"><strong>Chargement :</strong> Les <em>Loaders</em> de React Router 7 récupèrent les données en amont du rendu.</span></li>
        <li><span style="font-weight: normal;"><strong>Affichage :</strong> Les composants consomment le Context pour un accès immédiat.</span></li>
        <li><span style="font-weight: normal;"><strong>Mutation :</strong> Toute modification est envoyée au serveur, puis le cache local est invalidé pour garantir la fraîcheur des données.</span></li>
    </ol>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 24px; margin-top: 16px;">Installation et Développement</div>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Prérequis</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <ul>
        <li><strong>Node.js</strong> (Version 20+ recommandée)</li>
        <li>Une instance <strong>CV Manager - Server Application</strong> active.</li>
    </ul>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Commandes</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <ul>
        <li><strong>npm install :</strong> Installe les dépendances.</li>
        <li><strong>npm run dev :</strong> Lance le serveur de développement (Vite).</li>
        <li><strong>npm run build :</strong> Compile le projet pour la production.</li>
        <li><strong>npm run lint :</strong> Analyse le code pour détecter d'éventuelles erreurs.</li>
        <li><strong>npm run preview :</strong> Teste localement le build de production.</li>
    </ul>
</div>

<div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); padding-bottom: 8px;">
    <div style="font-weight: bold; font-size: 20px; margin-top: 16px;">Roadmap de développement</div>
</div>

<div style="padding: 8px 0 16px; font-size: 16px">
    <ul>
        <li><strong>Système de consentement :</strong> UI non-intrusive pour le choix du mode de stockage.</li>
        <li><strong>Moteur de stockage hybride :</strong> Développement de l'utilitaire switchant entre session et local.</li>
        <li><strong>Sécurisation des routes :</strong> Mise en place des gardes (Guards) via React Router 7.</li>
        <li><strong>Optimisation accessibilité (A11y) :</strong> Audit complet pour garantir l'usage à tous les profils.</li>
    </ul>
</div>

<div style="padding: 16px 0; font-size: 16px; border-top: 1px solid rgba(255, 255, 255, 0.25); margin-top: 16px">
    <p><strong>Note :</strong> Ce projet est configuré en mode private: true. Toute distribution non autorisée est interdite.</p>
</div>
