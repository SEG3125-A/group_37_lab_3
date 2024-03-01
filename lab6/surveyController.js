const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));

    // Serve the survey form
    app.get('/chessSurvey', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'chessSurvey.html'));
    });

    // Handle form submission
    app.post('/chessSurvey', (req, res) => {
        const formData = req.body;
        const fieldToFileMap = {
            'initial-impression': 'Initial Impression',
            'liked-features': 'Liked Features',
            'color-scheme': 'Color Scheme',
            'easy-to-navigate': 'Easy To Navigate',
            'rate-interface': 'Rate Interface',
            'additional-feedback': 'Additional Feedback'
        };

        Object.entries(formData).forEach(([key, value]) => {
            const fileName = fieldToFileMap[key];
            if (!fileName) return; 

            let data = readData(fileName) || {};
            if (Array.isArray(value)) { 
                value.forEach(val => combineCounts(data, val));
            } else { 
                combineCounts(data, value);
            }
            writeData(data, fileName);
        });

        res.redirect('/chessSurvey'); 
    });

    // Route to display survey results
    app.get('/surveyResults', (req, res) => {
        const results = readAndCombineData();
        res.render('showResults', { results }); 
    });

    // Utility function to read data from a JSON file
    function readData(fileName) {
        try {
            const filePath = path.join(__dirname, 'data', `${fileName}.json`);
            const rawData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(rawData);
        } catch (error) {
            console.error(`Error reading file ${fileName}:`, error);
            return null;
        }
    }

    // Utility function to write data to a JSON file
    function writeData(data, fileName) {
        try {
            const filePath = path.join(__dirname, 'data', `${fileName}.json`);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(`Error writing file ${fileName}:`, error);
        }
    }

    // Utility function to combine counts for survey responses
    function combineCounts(data, value) {
        const processedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        data[processedValue] = (data[processedValue] || 0) + 1;
    }

    // Function to read all files from the data directory and combine their contents
    function readAndCombineData() {
        const dataFolder = path.join(__dirname, 'data');
        let combinedResults = {};

        fs.readdirSync(dataFolder).forEach(file => {
            const fileName = path.basename(file, '.json');
            const data = readData(fileName);
            if (data) {
                combinedResults[fileName] = data;
            }
        });

        return combinedResults;
    }
};
