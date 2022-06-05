import React from 'react';

const Service = () => {
    return (
      <>
      <div class="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        <div class="md:w-1/2 md:px-4 lg:w-1/4">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/teeth-whitening.svg" alt="" class="h-20 mx-auto">

            <h4 class="text-xl font-bold mt-4">Teeth Whitening</h4>
            <p class="mt-1">Let us show you how our experience.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/oral-surgery.svg" alt="" class="h-20 mx-auto">

            <h4 class="text-xl font-bold mt-4">Oral Surgery</h4>
            <p class="mt-1">Let us show you how our experience.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/painless-dentistry.svg" alt="" class="h-20 mx-auto">

            <h4 class="text-xl font-bold mt-4">Painless Dentistry</h4>
            <p class="mt-1">Let us show you how our experience.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div class="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/periodontics.svg" alt="" class="h-20 mx-auto">

            <h4 class="text-xl font-bold mt-4">Periodontics</h4>
            <p class="mt-1">Let us show you how our experience.</p>
            <a href="#" class="block mt-4">Read More</a>
          </div>
        </div>
      </div>
      </>
    );
};

export default Service;