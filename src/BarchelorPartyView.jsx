import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const itinerary = [
    {
        day: 1,
        title: "Arrival and Accommodation",
        activities: [
            {
                name: "Check into Airbnb in Condesa",
                images: ["public/assets/AirBnbCondesa1.webp", "public/assets/restaurant1.webp", "public/assets/condesa1.webp"],
                description: "Arrive in Mexico City and check into your Airbnb in the Condesa neighborhood. This area is known for its vibrant nightlife and trendy bars."
            }       ]
    },
    {
        day: 2,
        title: "Teotihuacan and Xochimilco",
        activities: [
            {
                name: "Breakfast at Panadería Rosetta",
                images: ["public/assets/panaderia1.png", "public/assets/panaderia3.webp", "public/assets/panaderia4.jpg"],
                description: "Start your day with a delicious breakfast at this popular bakery in Condesa, known for its artisanal bread and pastries."
            },
            {
                name: "Hot air balloon ride over Teotihuacan",
                images: ["public/assets/ballon1.jpg", "public/assets/ballon3.webp", "public/assets/ballon4.jpg"],
                description: "Experience a unique and thrilling hot air balloon ride over the ancient Teotihuacan Pyramids, offering breathtaking views of this historic site."
            },
            {
                name: "Explore Roma Neighborhood",
                images: ["public/assets/roma1.webp", "public/assets/roma2.jpg", "public/assets/roma3.jpg"],
                description: "Spend the afternoon exploring the Roma neighborhood, known for its eclectic mix of art, culture, and cuisine. Wander through its streets to discover vibrant street art, trendy boutiques, and charming cafes. Be sure to visit notable spots like Plaza Río de Janeiro, the National Medical Center, and the Mercado Roma for an array of gourmet food options."
            },
            // {
            //     name: "Food tour at Mercado Medellín",
            //     images: ["/api/placeholder/400/400", "/api/placeholder/400/400", "/api/placeholder/400/400"],
            //     description: "Explore the vibrant Mercado Medellín in Roma, enjoying some of the best street food Mexico City has to offer on this guided food tour."
            // },
            {
                name: "Trajinera ride in Xochimilco",
                images: ["public/assets/trajinera1.webp", "public/assets/trajinera2.jpg", "public/assets/trajinera4.jpg"],
                description: "Take a colorful trajinera ride through the canals of Xochimilco, complete with music, tequila, and fresh guacamole for a true Mexican fiesta."
            },
            {
                name: "Drinks and clubbing in Zona Rosa",
                images: ["public/assets/club1.jpg", "public/assets/club2.jpg", "public/assets/club3.webp"],
                description: "Start the evening with drinks at El Mayor, a rooftop bar with stunning city views, then head to the Zona Rosa area to dance the night away."
            }
        ]
    },
    {
        day: 3,
        title: "City Tour and Lucha Libre",
        activities: [
            {
                name: "Breakfast at Eno",
                images: ["public/assets/eno1.jpg", "public/assets/eno2.jpg", "public/assets/eno3.jpg"],
                description: "Enjoy breakfast at this well-known spot in the upscale Polanco neighborhood, known for its chic atmosphere and delicious menu."
            },
            // {
            //     name: "Breakfast at Saks Polanco",
            //     images: ["/api/placeholder/400/400", "/api/placeholder/400/400", "/api/placeholder/400/400"],
            //     description: "Enjoy breakfast at this well-known spot in the upscale Polanco neighborhood, known for its chic atmosphere and delicious menu."
            // },
            {
                name: "Tour Chapultepec Castle",
                images: ["public/assets/castillo1.webp", "public/assets/castillo2.jpg", "public/assets/castillo3.jpg"],
                description: "Take a guided tour of Chapultepec Castle, a historic site offering beautiful views of the city and insights into Mexican history."
            },
            {
                name: "Lunch at Contramar",
                images: ["public/assets/contramar1.jpg", "public/assets/contramar2.jpg", "public/assets/contramar3.webp"],
                description: "Savor lunch at Contramar, a popular seafood restaurant in Roma known for its fresh fish and vibrant atmosphere."
            },
            {
                name: "Lucha Libre wrestling match",
                images: ["public/assets/lucha1.jpg", "public/assets/lucha2.webp", "public/assets/lucha3.webp"],
                description: "Experience the excitement of a Lucha Libre wrestling match at Arena Mexico, a must-see spectacle for any bachelor party in Mexico City."
            },
            {
                name: "Nightclub experience",
                images: ["public/assets/club4.jpg", "public/assets/club5.jpg", "public/assets/club6.jpg"],
                description: "End the night at a trendy club like Funk Club, Yu Yu, or Departamento, enjoying bottle service and a night of partying."
            }
        ]
    },
    {
        day: 4,
        title: "Tacos and Farewell",
        activities: [
            {
                name: "Biking taco tour",
                images: ["public/assets/bike1.jpg", "public/assets/bike2.jpg", "public/assets/bike3.jpg"],
                description: "Start the day with a biking taco tour, exploring the city and enjoying delicious tacos from various street vendors along the way."
            },
            {
                name: "Cocktails at Hanky Panky",
                images: ["public/assets/hanky1.jpg", "public/assets/hanky2.jpg", "public/assets/hanky3.jpg"],
                description: "Visit the speakeasy-style Hanky Panky for expertly crafted cocktails and a light lunch in a unique, hidden bar setting."
            },
            {
                name: "Farewell dinner at Azul Histórico",
                images: ["public/assets/azul1.jpg", "public/assets/azul2.jpg", "public/assets/azul3.jpg"],
                description: "Have a memorable farewell dinner at Azul Histórico, a restaurant known for its traditional Mexican cuisine in a beautiful setting."
            },
            {
                name: "Drinks at Toledo Rooftop",
                images: ["public/assets/toledo1.jpg", "public/assets/toledo2.png", "public/assets/toledo3.png"],
                description: "End the night with drinks at Toledo Rooftop, enjoying panoramic views of the city and reflecting on your memorable bachelor party trip."
            }
        ]
    }
];

const BachelorPartyView = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-black font-sans">
            <header className="flex justify-between items-center p-4">
                <div className="text-xl font-bold">Jorge's Bachelor/</div>
                <nav className="flex gap-4">


                </nav>
            </header>

            <main className="flex-grow overflow-hidden">
                <div className="h-full overflow-y-auto" onScroll={handleScroll}>
                    <section className="min-h-screen flex flex-col justify-center p-8">
                        <h1 className="text-8xl font-light mb-4">unlock</h1>
                        <div className="w-full h-px bg-black mb-4"></div>
                        <p className="text-3xl">the Unexpected.</p>
                        <p className="mt-4">Bachelor Party Experience in Mexico City</p>
                    </section>

                    {itinerary.map((day, index) => (
                        <section key={index} className="min-h-screen p-8">
                            <h2 className="text-6xl font-light mb-4">Day {day.day}</h2>
                            <h3 className="text-4xl mb-8">{day.title}</h3>
                            <div className="space-y-16">
                                {day.activities.map((activity, actIndex) => (
                                    <div key={actIndex} className="flex flex-col items-center">
                                        <h4 className="text-2xl mb-4">{activity.name}</h4>
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {activity.images.map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={img}
                                                    alt={`${activity.name} image ${imgIndex + 1}`}
                                                    className="w-full aspect-square object-cover"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-center text-lg">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <footer className="p-4 flex justify-center">
                <ChevronDown
                    className={`animate-bounce ${scrollPosition > 50 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    size={32}
                />
            </footer>
        </div>
    );
};

export default BachelorPartyView;