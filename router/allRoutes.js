import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/carte", "Le menu", "/pages/carte.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["ROLE_USER", "ROLE_ADMIN"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["ROLE_USER", "ROLE_ADMIN"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["ROLE_USER"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["ROLE_USER"]),
];


export const websiteName = "Quai Antique";