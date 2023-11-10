import earth from '../assets/earth.png'
import jupiter from '../assets/jupiter.png'
import mars from '../assets/mars.png'
import moon from '../assets/moon.png'
import neptune from '../assets/neptune.png'
import uranus from '../assets/uranus.png'
import venus from '../assets/venus.png'

const planets = [
    {
        Name: "Earth",
        Description: "Earth is the third planet from the Sun in our solar system and the only known celestial body to support life. It is often referred to as the 'Blue_Planet' due to its abundance of liquid water.",
        Mass_kg: 5.972e24,
        Number_in_Solar_System: 3,
        Approximate_Age_years: 4.5e9,
        Atmosphere: "Nitrogen (78%) and Oxygen (21%)",
        Average_Temperature_C: 14,
        Orbital_Period_days: 365,
        img: earth
    },
    {
        Name: "Moon",
        Description: "The Moon is Earth's only natural satellite. It is the fifth-largest moon in the Solar System and has a significant impact on Earth's tides.",
        Mass_kg: 7.342e22,
        Number_in_Solar_System: "satellite",
        Approximate_Age_years: 4.5e9,
        Atmosphere: "None",
        Average_Temperature_C: -23,
        Orbital_Period_days: 27.3,
        img: moon
    },
    {
        Name: "Venus",
        Description: "Venus is often called Earth's 'sister planet' because of its similar size and composition. However, its thick atmosphere of carbon dioxide makes it an incredibly hot and inhospitable world.",
        Mass_kg: 4.867e24,
        Number_in_Solar_System: 2,
        Approximate_Age_years: 4.6e9,
        Atmosphere: "Carbon_Dioxide (96.5%)",
        Average_Temperature_C: 467,
        Orbital_Period_days: 225,
        img: venus
    },
    {
        Name: "Mars",
        Description: "Mars is often referred to as the 'Red Planet' due to its reddish appearance. It's known for its diverse landscapes, including vast deserts and the largest volcano in the solar system, Olympus_Mons.",
        Mass_kg: 6.39e23,
        Number_in_Solar_System: 4,
        Approximate_Age_years: 4.6e9,
        Atmosphere: "Carbon_Dioxide (95%)",
        Average_Temperature_C: -63,
        Orbital_Period_days: 687,
        img: mars
    },
    {
        Name: "Jupiter",
        Description: "Jupiter is the largest planet in the solar system, known for its impressive and colorful cloud bands. It also has a strong magnetic field and numerous moons, including the largest moon, Ganymede.",
        Mass_kg: 1.898e27,
        Number_in_Solar_System: 5,
        Approximate_Age_years: 4.6e9,  
        Atmosphere: "Hydrogen_and_Helium",
        Average_Temperature_C: -145,
        Orbital_Period_days: 4380,
        img: jupiter
    },
    {
        Name: "Uranus",
        Description: "Uranus is an ice giant, and it's unique in the solar system for its sideways rotation. It's often called the 'rolling planet' because it appears to roll along its orbital path.",
        Mass_kg: 8.68e25,
        Number_in_Solar_System: 7,
        Approximate_Age_years: 4.5e9, 
        Atmosphere: "Hydrogen_and_Helium",
        Average_Temperature_C: -224,
        Orbital_Period_days: 30660,
        img: uranus
    },
    {
        Name: "Neptune",
        Description: "Neptune is another ice giant and is known for its deep blue color. It has a dynamic atmosphere with fast winds and a series of dark storm systems.",
        Mass_kg: 1.024e26,
        Number_in_Solar_System: 8,
        Approximate_Age_years: 4.5e9,  
        Atmosphere: "Hydrogen,_Helium,_and_Methane",
        Average_Temperature_C: -214,
        Orbital_Period_days: 60225,
        img: neptune
    }
];

export default planets;