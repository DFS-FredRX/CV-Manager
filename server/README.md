# CV Manager - Server Application
La solution intelligente pour vos candidatures

**CV Manager - Server Application** est le coeur d'orchestration (Backend) de la plateforme de gestion de CV. Conçu avec le framework **NestJS**, il repose sur une architecture modulaire, scalable et typée, garantissant une haute fiabilité des données et des processus métier.

## Architecture & Conception
Le projet suit les principes de l'**Architecture Hexagonale** (ou Clean Architecture), favorisant le découplage entre la logique métier et les couches d'infrastructure.

### Stack technique

* **Framework :** NestJS v11 (Progressive Node.js framework).
* **Langage :** TypeScript v5.9 pour un typage statique fort.
* **Base de données :** MySQL via l'ORM TypeORM v0.3.
* **Tests :** Jest pour les tests unitaires et E2E.

### Diagramme de flux de données
Le serveur traite les requêtes selon le cycle de vie suivant :

1. **Request Pipeline :** Guard > Interceptor > Pipe (Validation).
2. **Controller :** Point d'entrée des API, gère le routage.
3. **Service :** Contient la logique métier pure.
4. **Repository :** Abstraction de la couche d'accès aux données MySQL.

## Installation & Configuration
### Prérequis

* Node.js (Version recommandée : v20+)
* Gestionnaire de paquets : npm
* Instance MySQL active

### Installation
```Bash
npm install
```

### Configuration environnementale
Créez un fichier `.env` à la racine du projet en vous basant sur les besoins de TypeORM et @nestjs/config :
```Extrait de code
DB_HOST = localhost
DB_PORT = 3306
DB_USER = root
DB_PASSWORD = votre-mot-de-passe
DB_NAME = cvmanager_db
```

## Scripts de développement
|Commande|Description|
|--|--|
|npm run start:dev|Lance le serveur en mode **Watch** (rechargement automatique).|
|npm run build|Compile le projet TypeScript en JavaScript de production dans /dist.|
|npm run lint|Analyse le code et corrige les erreurs de style via ESLint.|
|npm run format|Formate le code selon les règles Prettier.|

## Gestion de la base de données (Migrations)
Le projet utilise **TypeORM** pour gérer les évolutions du schéma de base de données sans perte de données.

* **Générer une migration :** npm run migration:generate src/migrations/NomDeLaMigration
* **Appliquer les migrations :** npm run migration:up
* **Annuler la dernière migration :** npm run migration:down

## Stratégie de tests
La qualité logicielle est assurée par une couverture de tests automatisés.

* **Tests unitaires :** npm run test (Cible les fichiers .spec.ts).
* **Tests End-to-End (E2E) :** npm run test:e2e (Simule des appels API réels).
* **Couverture :** npm run test:cov (Génère un rapport de couverture dans /coverage).

**Note :** Les tests sont configurés pour détecter les fuites de mémoire via --detectOpenHandles.

## Sécurité et Maintenance

* **Overrides :** Le projet force l'utilisation de lodash ^4.17.21 pour prévenir les vulnérabilités de type "Prototype Pollution".
* **Validation :** Toutes les entrées API sont validées au runtime pour empêcher les injections et les données malformées.

___

**Note :** Ce projet est configuré en mode private: true. Toute distribution non autorisée est interdite.

**© 2026 CV Manager. La solution intelligente pour vos candidatures.**