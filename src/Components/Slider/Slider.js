import React from 'react';

const Slider = () => {
    return (
        <>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://tailwindcss-templates.netlify.app/dentalpro/images/cover-bg.jpeg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdoctor-portrait&psig=AOvVaw3zDyEuswf0OvigmhUqacEN&ust=1654519480433000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDH54qrlvgCFQAAAAAdAAAAABAY" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;