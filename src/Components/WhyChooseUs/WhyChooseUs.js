import React from 'react';
import cover from '../Images/cover.jpg'

const WhyChooseUs = () => {
    return (
        <>
            <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={cover} class="max-w-sm rounded-lg shadow-2xl " />
                        <div>
                            <h1 class="text-5xl font-bold">Why choose Us?</h1>
                            <p class="py-6">Aim to implement our expertise in the field of medicine to cure the sick community and regain the state of health and well-being, along with spreading awareness amongst the masses for the various ways to maintain hygiene and good health, thereby providing name, fame and money to the hospital</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;