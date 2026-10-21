import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La galerie", "./pages/galerie.html"),
    new Route("/carte", "La carte", "./pages/carte.html"),
    new Route("/signin", "Connexion", "./pages/auth/signin.html"),
    new Route("/signup", "Inscription", "./pages/auth/signup.html"),
    new Route("/account", "Mon compte", "./pages/auth/account.html"),
    new Route("/editPassword", "Changer mot de passe", "./pages/auth/editPassword.html"),
    new Route("/allResa", "Vos réservations", "./pages/reservations/allResa.html"),
    new Route("/reserver", "Ma réservation", "./pages/reservations/reserver.html"),


];






export const websiteName = "Quai Antique";