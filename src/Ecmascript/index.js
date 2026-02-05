// Exercice 1 : Trouver le mot le plus long
const findLongestWord = (words) => {
    // Affectation par décomposition
    const [wordArray] = [words];
    
    // Map pour créer tableau d'objets {mot, longueur}
    const wordsWithLength = wordArray.map(mot => ({
        mot: mot,
        longueur: mot.length
    }));
    
    // Reduce pour trouver le plus long
    const longest = wordsWithLength.reduce((acc, curr) => {
        return curr.longueur > acc.longueur ? curr : acc;
    }, { mot: '', longueur: 0 });
    
    return {
        mot: longest.mot,
        longueur: longest.longueur
    };
};

// Test Exercice 1
console.log("=== Exercice 1 ===");
const testWords = ["react", "javascript", "node", "typescript"];
const result1 = findLongestWord(testWords);
console.log(`Mot le plus long : ${result1.mot}, Longueur : ${result1.longueur}`);

// Exercice 2 : Compter les occurrences
const countOccurrences = (arrayOfArrays) => {
    // Aplatir le tableau avec flat()
    const flatArray = arrayOfArrays.flat();
    
    // Compter avec reduce()
    const occurrences = flatArray.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    
    return occurrences;
};

// Test Exercice 2
console.log("\n=== Exercice 2 ===");
const input2 = [
    ["a", "b", "c"],
    ["c", "d", "e"],
    ["e", "d", "f"]
];
const result2 = countOccurrences(input2);
console.log("Occurrences :", result2);

// Exercice 3 : Calcul des notes avec bonus
const calculateTotalGrades = (students) => {
    // Ajouter bonus de 15 pour notes < 50
    const gradesWithBonus = students.map(student => ({
        ...student,
        note: student.note < 50 ? student.note + 15 : student.note
    }));
    
    // Filtrer notes >= 50
    const passedStudents = gradesWithBonus.filter(student => student.note >= 50);
    
    // Calculer la somme
    const total = passedStudents.reduce((sum, student) => sum + student.note, 0);
    
    return total;
};

// Test Exercice 3
console.log("\n=== Exercice 3 ===");
const students = [
    { nom: "Alice", note: 45 },
    { nom: "Bob", note: 60 },
    { nom: "Charlie", note: 30 },
    { nom: "David", note: 75 }
];
const result3 = calculateTotalGrades(students);
console.log(`Total des notes (>=50 après bonus) : ${result3}`);

// Exercice 4 : Tableau d'objets avec ID
console.log("\n=== Exercice 4 ===");

// Variable globale pour les ID
let lastId = 0;

// Tableau initial
let Tab = [
    { name: "Laptop", category: "Electronics" },
    { name: "Chair", category: "Furniture" },
    { name: "Book", category: "Education" }
];

// Ajouter ID à chaque objet
Tab = Tab.map(item => {
    lastId++;
    return { ...item, id: lastId };
});

// Ajouter de nouveaux éléments
Tab.push({ name: "Tablet", category: "Electronics" });
lastId++;
Tab[Tab.length - 1].id = lastId;

Tab.unshift({ name: "Desk", category: "Furniture" });
lastId++;
Tab[0].id = lastId;

console.log("Tableau Tab avec IDs :", Tab);
console.log("Dernier ID utilisé :", lastId);

// Exporter Tab pour utilisation dans fonction.js
export { Tab };