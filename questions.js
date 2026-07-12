const matrix = [
    // --- Phase I: The Elemental Descent (Tattva Alignment) ---
    {
        text: "When tracking the movements of your own mind... where does your focus find its natural rest?",
        options: [
            {
                text: "Within Akasha... the vast, unconditioned space that holds all memory, silence, and unborn potential...",
                effect: { tattva: "ether", guna: "sattva", graha: "jupiter" }
            },
            {
                text: "Within Agni... the sharp, radiant spark that transforms raw material into insight through active friction...",
                effect: { tattva: "fire", guna: "rajas", graha: "mars" }
            }
        ]
    },
    {
        text: "When an external paradigm structure imposes itself upon your life... how does your system respond?",
        options: [
            {
                text: "Like Vayu... flowing around the obstacles, dissolving fixed definitions, and remaining entirely un-catchable...",
                effect: { tattva: "air", guna: "sattva", graha: "mercury" }
            },
            {
                text: "Like Prithvi... anchoring deep into ancestral foundations, absorbing the shock, and waiting for the season to turn...",
                effect: { tattva: "earth", guna: "tamas", graha: "saturn" }
            }
        ]
    },
    {
        text: "In the deeper processes of emotional or psychological integration... what path calls to you?",
        options: [
            {
                text: "The path of Jala... allowing the waves of feeling to cleanse the channels, treating scars as open rivers for the light...",
                effect: { tattva: "water", guna: "sattva", graha: "moon" }
            },
            {
                text: "The path of the Sun... incinerating the past entirely in the crucible of direct, immediate self-realization...",
                effect: { tattva: "fire", guna: "rajas", graha: "sun" }
            }
        ]
    },
    // --- Phase II: The Operations of Prakriti (Guna Equilibrium) ---
    {
        text: "When you trace the genesis of your creative expressions... what spark sets them into motion?",
        options: [
            {
                text: "A quiet, spontaneous recognition of universal order... an untroubled reflection rising from a calm mind...",
                effect: { tattva: "ether", guna: "sattva", graha: "jupiter" }
            },
            {
                text: "A restless, volcanic necessity to rearrange reality... a direct challenge to the stagnation surrounding us...",
                effect: { tattva: "fire", guna: "rajas", graha: "rahu" }
            }
        ]
    },
    {
        text: "If you must choose a state of temporary limitation while navigating a grand transition...",
        options: [
            {
                text: "I would choose absolute interior stillness... remaining hidden and inactive, even if the external world assumes I am lost...",
                effect: { tattva: "earth", guna: "tamas", graha: "ketu" }
            },
            {
                text: "I would choose high-velocity action... moving swiftly through unmapped terrains, even if it creates temporary errors...",
                effect: { tattva: "air", guna: "rajas", graha: "mercury" }
            }
        ]
    },
    {
        text: "When confronting deep-seated historical conditioning or systemic illusions...",
        options: [
            {
                text: "We dismantle them by standing completely outside their field... rendering their reality void through absolute non-identification...",
                effect: { tattva: "ether", guna: "sattva", graha: "saturn" }
            },
            {
                text: "We master their internal syntax... entering the structure to re-code its pathways from the inside out...",
                effect: { tattva: "water", guna: "rajas", graha: "venus" }
            }
        ]
    },
    // --- Phase III: The Planetary Currents (Graha Radiance) ---
    {
        text: "When your inner orientation clarifies into absolute certainty... how does that truth carry itself?",
        options: [
            {
                text: "As a steady, ancient gravity... a quiet law that requires no defense, radiating outward like a central star...",
                effect: { tattva: "fire", guna: "sattva", graha: "sun" }
            },
            {
                text: "As a beautiful, rhythmic devotion... expressing itself through fluid connection, alignment, and artistry...",
                effect: { tattva: "water", guna: "sattva", graha: "venus" }
            }
        ]
    },
    {
        text: "Ultimately... how does your awareness perceive the nature of human time?",
        options: [
            {
                text: "As a strict, evolutionary forge... structured by cycles, duties, and long delays that test the purity of our patience...",
                effect: { tattva: "earth", guna: "tamas", graha: "saturn" }
            },
            {
                text: "As a sudden, non-linear awakening... a series of vertical leaps where the past vanishes in a singular flash...",
                effect: { tattva: "air", guna: "rajas", graha: "rahu" }
            }
        ]
    },
    {
        text: "When the work is done and the ego-mind surrenders its claims... what remains?",
        options: [
            {
                text: "The boundless ocean of pure devotion and receptive silence... returning to the universal mother...",
                effect: { tattva: "water", guna: "sattva", graha: "moon" }
            },
            {
                text: "The absolute, trackless freedom of the solitary traveler... dissolved entirely into the unmanifest source...",
                effect: { tattva: "ether", guna: "sattva", graha: "ketu" }
            }
        ]
    }
];

const archetypes = {
    jyotirYogi: {
        name: "The Jyotir Yogi // The Solar Witness",
        element: "Tejas (Absolute Fire) & Akasha (Space)",
        graha: "Surya & Guru (Sun & Jupiter)",
        desc: "Your awareness operates as a steady, central illumination. You recognize that the mind is fundamentally a mirror; rather than chasing the shifting shapes reflected within it, you anchor your stance in the unmoving light of the source itself. You navigate systemic friction not with defensive anger, but with an ancient, sovereign clarity that exposes illusion simply by standing present... remembering that all shadows owe their existence to the light."
    },
    akashicSage: {
        name: "The Akashic Sage // The Silent Weaver",
        element: "Akasha (Ether) & Vayu (Air)",
        graha: "Guru & Ketu (Jupiter & The Nodes)",
        desc: "You inhabit the trackless, unconditioned spaces of the self. Your mind does not seek to capture or possess form; instead, it observes the vast tapestries of time and culture with a detached, compassionate equilibrium. You hold the archetypal memory of the whole, acting as a quiet vessel through which primordial truths flow into modern landscapes without being corrupted by immediate distortions."
    },
    tattvaCatalyst: {
        name: "The Tattva Catalyst // The Alchemical Fire",
        element: "Agni (Transformative Fire) & Jala (Water)",
        graha: "Mangala & Shukra (Mars & Venus)",
        desc: "You recognize that the path of evolution requires direct engagement with the crucible of creation. You do not shy away from wounds or historical friction; instead, you treat every scar as a necessary aperture where the light meets raw material. By bringing absolute presence to the points of deepest tension, you transmute personal and collective conditioning into conscious, fluid expression."
    },
    prithviGuardian: {
        name: "The Prithvi Guardian // The Ancestral Root",
        element: "Prithvi (Earth) & Jala (Water)",
        graha: "Shani & Chandra (Saturn & The Moon)",
        desc: "Your consciousness operates through deep, patient rhythms, anchoring itself within the fundamental structures of reality. You understand the profound law of time and the necessity of waiting out systemic winter. You act as a sanctuary for the vulnerable, preserving the essential seeds of ancient lineages and organic truths until the surrounding soil is ready to receive them once more."
    }
};
