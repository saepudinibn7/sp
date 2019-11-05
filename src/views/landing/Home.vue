<template>
<div>
    <div class="container">
        <div class="row justify-content-lg-between align-items-lg-center py-5">
            <div class="col-lg-6 text-center text-lg-left">
                <h1 class="display-4 mb-4">GET FREE CODE</h1>
                <p class="lead text-secondary mb-4">Build an awesome website with a clean and accessible Bootstrap theme.</p>
                <a class="btn btn-pill btn-primary btn-block d-md-inline-block w-auto mr-md-4 mb-4 mb-md-0" href="#">GET THEME</a>
            </div>
            <div class="col-lg-6">
                <img src="../../assets/undraw_laravel_and_vue_59tp.svg" class="img-fluid d-lg-block" alt="">
            </div>
        </div>
    </div>
    <div class="bg-skew bg-skew-light">
        <section class="container">
            <div class="row py-5">
                <div class="col-lg-6 mb-4">
                    <a href="home" class="stretched-link">
                        <img src="../../assets/pp.png" class="img-fluid img-thumbnail img-thumbnail-hover mb-4" alt="App demo">
                        <h2 class="h5 text-center text-dark">Dashboard</h2>
                    </a>
                </div>
            </div>
        </section>
    </div>
    <section class="container">
        <div class="row py-4">
            <div class="col-sm-6 col-md-4 mb-4 mb-md-5">
                <div class="pr-lg-3">
                    <span class="icon icon-primary mb-3">
                        <i class="icon-inner fab fa-accessible-icon" aria-hidden="true"></i>
                    </span>
                    <h3 class="h4">Accessible</h3>
                    <p class="mb-md-0">Built with accessibility in mind and following best practices.</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mb-4 mb-md-5">
                <div class="pr-lg-3">
                    <span class="icon icon-primary mb-3">
                        <i class="icon-inner fas fa-mobile-alt" aria-hidden="true"></i>
                    </span>
                    <h3 class="h4">Mobile First</h3>
                    <p>Mobile-first flexbox grid to build layouts of all shapes and sizes.</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mb-4 mb-md-5">
                <div class="pr-lg-3">
                    <span class="icon icon-primary mb-3">
                        <i class="icon-inner fab fa-font-awesome-flag" aria-hidden="true"></i>
                    </span>
                    <h3 class="h4">Font Awesome</h3>
                    <p>More than 1200 vector icons from the web's most popular icon set.</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mb-4 mb-md-5">
                <div class="pr-lg-3">
                    <span class="icon icon-primary mb-3">
                        <i class="icon-inner fab fa-sass" aria-hidden="true"></i>
                    </span>
                    <h3 class="h4">Sass Files</h3>
                    <p>Easily customize your site modifying the source scss files.</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mb-4 mb-md-5">
                <div class="pr-lg-3">
                    <span class="icon icon-primary mb-3">
                        <i class="icon-inner fab fa-gulp" aria-hidden="true"></i>
                    </span>
                    <h3 class="h4">Gulp</h3>
                    <p>Automated workflow for your development tasks.</p>
                </div>
            </div>
        </div>
    </section>
    <footer class="site-footer mt-5">
        <div class="container">
            <div class="row justify-content-md-between">
                <div class="col-sm-12 col-md-4 mb-4">
                    <h3 class="h5 mb-3">Company</h3>
                    <p>This web built responsive website theme based on Bootstrap 4. We help you to create a site that your users will love..</p>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">About</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">About</a></li>
                        <li class="mb-1"><a href="#">Team</a></li>
                        <li class="mb-1"><a href="#">Careers</a></li>
                        <li class="mb-1"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">Services</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">Design</a></li>
                        <li class="mb-1"><a href="#">Themes</a></li>
                        <li class="mb-1"><a href="#">Branding</a></li>
                        <li class="mb-1"><a href="#">CMS</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">Help</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">FAQ</a></li>
                        <li class="mb-1"><a href="#">Contact</a></li>
                        <li class="mb-1"><a href="#">Phones</a></li>
                        <li class="mb-1"><a href="#">Chat</a></li>
                    </ul>
                </div>
            </div>

            <hr class="m-0" role="presentation">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-4">
                <p class="small text-muted">© Saepudin 2019</p>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a class="icon icon-sm icon-secondary" href="http://fb.com/EpR7s" target="_blank"><i class="icon-inner fab fa-facebook-f" aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</div>
</template>

<style lang="scss" scoped>
.bg-skew{
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: skewY(-8deg);
        transform-origin: top left;
        z-index: -1;
        background-color: #f8f9fa;
    }
}
.icon {
    border-radius: 50%;
    font-size: 1.5rem;
    position: relative;
    text-align: center;
    transition: background-color .2s ease-in-out;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    display: flex;
    align-items: center;
}
.icon-primary {
    background-color: rgba(0,106,255,.1);
    color: #006aff!important;
}
.stretched-link{
    text-decoration:none;
}
</style>