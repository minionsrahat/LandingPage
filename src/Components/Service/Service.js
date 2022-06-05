import React from 'react';
import oral from '../Images/oral-surgery.svg'
import painless from '../Images/painless-dentistry.svg'
import periodontics from '../Images/periodontics.svg'
import teeth from '../Images/teeth-whitening.svg'
const Service = () => {
    return (
        <>
            <section className='relative px-16 py-16'>
                <div class="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                    <div class="md:w-1/2 md:px-4 lg:w-1/4">
                        <div class="bg-white rounded-lg border border-gray-300 p-8">
                            <img src={teeth} alt="" class="h-20 mx-auto" />

                            <h4 class="text-xl font-bold mt-4">Teeth Whitening</h4>
                            <p class="mt-1">Let us show you how our experience.</p>
                            <a href="#" class="block mt-4">Read More</a>
                        </div>
                    </div>

                    <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                        <div class="bg-white rounded-lg border border-gray-300 p-8">
                            <img src={oral} alt="" class="h-20 mx-auto" />

                            <h4 class="text-xl font-bold mt-4">Oral Surgery</h4>
                            <p class="mt-1">Let us show you how our experience.</p>
                            <a href="#" class="block mt-4">Read More</a>
                        </div>
                    </div>

                    <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                        <div class="bg-white rounded-lg border border-gray-300 p-8">
                            <img src={painless} alt="" class="h-20 mx-auto" />

                            <h4 class="text-xl font-bold mt-4">Painless Dentistry</h4>
                            <p class="mt-1">Let us show you how our experience.</p>
                            <a href="#" class="block mt-4">Read More</a>
                        </div>
                    </div>

                    <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                        <div class="bg-white rounded-lg border border-gray-300 p-8">
                            <img src={periodontics} alt="" class="h-20 mx-auto" />

                            <h4 class="text-xl font-bold mt-4">Periodontics</h4>
                            <p class="mt-1">Let us show you how our experience.</p>
                            <a href="#" class="block mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Service;