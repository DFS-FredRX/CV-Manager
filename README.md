# CV Manager
La solution intelligente pour vos candidatures

<div align="center">
    <img src="https://img.shields.io/badge/Maintenu-Oui-success?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Licence-MIT-yellow?style=for-the-badge" />
</div>

<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

## Présentation du projet
**CV Manager** est une application moderne conçue pour centraliser et optimiser la gestion des candidatures. Le projet adopte une architecture robuste permettant une séparation claire entre la logique métier et l'interface utilisateur.

## Stack technique <img align="right" src="https://img.shields.io/badge/Concurrently-FF69B4?style=for-the-badge&logo=npm&logoColor=white" />
L'écosystème repose sur des technologies de points garantissant scalabilité et maintenabilité :

* **Frontend :** React.js - Pour une interface utilisateur réactive et composable.
* **Backend :** NestJS - Un frameword Node.js progressif pour construire des applications côté serveur efficaces et fiables.
* **Base de données :** MySQL - Système de gestion de base de données relationnelle pour une intégrité des données maximale.
* **Orchestration :** Concurrently - Utilisé pour piloter le développement fullstack en simultané.

## Installation et Démarrage <img align="right" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" /> <img align="right" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />
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

## Contact <img align="right" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
**DFS-FredRX** - [GitHub Profile](https://github.com/DFS-FredRX)  
**CV Manager** - [Link Project](https://github.com/DFS-FredRX/CV-Manager)

___

**© 2026 CV Manager. La solution intelligente pour vos candidatures.**