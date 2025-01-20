const express = require('express');
const bodyParser = require('body-parser');
const { kmeans } = require('ml-kmeans'); 
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Datos de ejemplo
const data = [
    [1, 1], // hice la actividad y estoy feliz
    [1, 0], // hice la actividad y estoy mal
    [0, 1], // no hice la actividad y estoy bien
    [0, 0]  // no hice la actividad y estoy mal
];


const numClusters = 4;

try {
    const result = kmeans(data, numClusters);

    
    const motivationalPhrases = [
        "¡Sigue así, estás haciendo un gran trabajo!",
        "No te preocupes, todos tenemos días malos. ¡Sigue adelante!",
        "¡Genial! A veces es bueno tomarse un descanso.",
        "No te desanimes, mañana es un nuevo día para intentarlo."
    ];

    app.get('/', (req, res) => {
        res.send('Servidor funcionando correctamente');
    });

    app.post('/api/motivation', (req, res) => {
        const { emotion, activityDone } = req.body;

  
        const userData = [activityDone ? 1 : 0, emotion > 60 ? 1 : 0];

        let minDistance = Infinity;
        let userCluster = -1;

        result.centroids.forEach((centroid, index) => {
            const distance = Math.sqrt(
                Math.pow(userData[0] - centroid[0], 2) + Math.pow(userData[1] - centroid[1], 2)
            );
            if (distance < minDistance) {
                minDistance = distance;
                userCluster = index;
            }
        });

        const motivationalPhrase = motivationalPhrases[userCluster];

        res.json({
            phrase: motivationalPhrase
        });
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
} catch (error) {
    console.error('Error running k-means:', error);
}