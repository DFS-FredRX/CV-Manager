# CV Manager
La solution intelligente pour vos candidatures

## Présentation du projet
**CV Manager** est une application moderne conçue pour centraliser et optimiser la gestion des candidatures. Le projet adopte une architecture robuste permettant une séparation claire entre la logique métier et l'interface utilisateur.

## Stack technique
L'écosystème repose sur des technologies de points garantissant scalabilité et maintenabilité :

* **Frontend :** React.js - Pour une interface utilisateur réactive et composable.
* **Backend :** NestJS - Un frameword Node.js progressif pour construire des applications côté serveur efficaces et fiables.
* **Base de données :** MySQL - Système de gestion de base de données relationnelle pour une intégrité des données maximale.
* **Orchestration :** Concurrently - Utilisé pour piloter le développement fullstack en simultané.

## Installation et Démarrage
### Prérequis

* **Node.js** (Version LTS recommandée)
* **NPM**
* Une instance **MySQL** active

### Clonage du projet
```Bash
git clone git+ssh://git@github.com/DFS-FredRX/CV-Manager.git
cd CV-Manager
```

### Installation des dépendances
Installez les dépendances à la racine pour bénéficier des outils de développement :
```Bash
npm install
```
*(Note : N'oubliez pas d'installer les dépendances spécifiques dans /client et /server si nécessaire.)*

### Lancement du mode développement
Le projet est configuré pour lancer simultanément le frontend et le backend avec une seule commande :
```Bash
npm run dev
```
|Commande|Action|
|--|--|
|npm run dev:client|Lance uniquement le client React|
|npm run dev:server|Lance uniquement le serveur NestJS (mode watch)|
|**npm run dev**|**Lancement combiné (Client + Serveur)**|

## Roadmap & Conception

* Initialisation de l'architecture Monorepo.
* Modélisation de la base de données MySQL.
* Développement des API Endpoints (Auth, CV, Applications).
* Design de l'interface Dashboard sur React.

## Licence
Distribué sous la licence MIT. Voir [LICENCE](./LICENSE) pour plus d'informations.

## Contact
**DFS-FredRX** - [GitHub Profile](https://github.com/DFS-FredRX)  
**CV Manager** - [Link Project](https://github.com/DFS-FredRX/CV-Manager)