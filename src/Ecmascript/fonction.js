// Import du tableau Tab depuis index.js
import { Tab } from './index.js';

// Fonction de recherche par ID
const Search = (id, tableau = Tab) => {
    // Recherche avec find()
    const result = tableau.find(item => item.id === id);
    return result || null; // Retourne null si non trouvé
};

// Test de la fonction Search
console.log("=== Test fonction Search ===");
const foundItem = Search(2); // Cherche l'élément avec id = 2
console.log("Élément trouvé avec id=2 :", foundItem);

// Exporter la fonction Search
export default Search;