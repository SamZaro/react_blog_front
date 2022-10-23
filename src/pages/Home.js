import React from "react";



const Home = ()=> {
    return <>

    <section class="bg-dark py-5 px-4 text-center">
        <div class="py-5 col-lg-6 mx-auto">
            <h1 class="display-5 text-white fw-bold">Dark mode hero</h1>
            <p class="text-secondary fs-5 pb-2">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button class="btn btn-outline-info btn-lg px-4 me-sm-3">Custom button</button>
                <button class="btn btn-outline-light btn-lg px-4">Secondary</button>
            </div>
        </div>
    </section>

    </>
}

export default Home;