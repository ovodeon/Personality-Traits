let currentStep = 0;
let esotericScores = {
    tattvas: { ether: 0, fire: 0, air: 0, earth: 0, water: 0 },
    gunas: { sattva: 0, rajas: 0, tamas: 0 },
    grahas: { jupiter: 0, mars: 0, mercury: 0, saturn: 0, moon: 0, sun: 0, rahu: 0, ketu: 0, venus: 0 }
};

const views = {
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view'),
    progressFill: document.querySelector('.cosmic-progress-fill')
};

function renderQuestion() {
    if (currentStep >= matrix.length) {
        calculateEsotericResult();
        return;
    }

    // Update Progress Fill
    const progressPercent = (currentStep / matrix.length) * 100;
    if (views.progressFill) views.progressFill.style.width = `${progressPercent}%`;

    const question = matrix[currentStep];
    document.getElementById('question-text').innerText = question.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => {
            // Aggregate the elemental and planetary vectors
            esotericScores.tattvas[opt.effect.tattva]++;
            esotericScores.gunas[opt.effect.guna]++;
            esotericScores.grahas[opt.effect.graha]++;
            
            currentStep++;
            renderQuestion();
        };
        optionsContainer.appendChild(btn);
    });
}

function calculateEsotericResult() {
    views.quiz.style.opacity = '0';
    
    setTimeout(() => {
        views.quiz.style.display = 'none';
        views.results.style.display = 'block';
        
        const T = esotericScores.tattvas;
        const G = esotericScores.gunas;
        
        let finalArchetype;

        // Esoteric Routing Logic mapping dominant Tattvas and Gunas
        if (T.fire > T.earth && G.sattva >= G.rajas) {
            finalArchetype = archetypes.jyotirYogi;
        } else if (T.ether >= T.fire && T.air >= T.earth) {
            finalArchetype = archetypes.akashicSage;
        } else if (T.fire > T.ether || T.water > T.earth) {
            finalArchetype = archetypes.tattvaCatalyst;
        } else {
            finalArchetype = archetypes.prithviGuardian;
        }

        // Render fields securely
        document.getElementById('archetype-name').innerText = finalArchetype.name;
        document.getElementById('archetype-element').innerText = `Dominant Tattvas: ${finalArchetype.element}`;
        document.getElementById('archetype-graha').innerText = `Planetary Alignment: ${finalArchetype.graha}`;
        document.getElementById('archetype-desc').innerText = finalArchetype.desc;

        // Dynamic calculation of primary Guna focus for the metrics field
        const primaryGuna = Object.keys(esotericScores.gunas).reduce((a, b) => 
            esotericScores.gunas[a] > esotericScores.gunas[b] ? a : b
        );
        document.getElementById('guna-metric').innerText = `Dominant Guna: ${primaryGuna.toUpperCase()}`;

        setTimeout(() => {
            views.results.style.opacity = '1';
        }, 100);
    }, 800);
}

// Initialization on load
document.addEventListener('DOMContentLoaded', renderQuestion);
