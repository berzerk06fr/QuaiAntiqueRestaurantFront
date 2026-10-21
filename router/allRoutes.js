import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La galerie", "./pages/galerie.html"),
    new Route("/carte", "La carte", "./pages/carte.html"),
    new Route("/signin", "connexion", "./pages/signin.html"),


];






export const websiteName = "Quai Antique";