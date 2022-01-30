<template>
    <div>
        <header>
            <div class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 text-center text-md-start">
                            <a href="https://goo.gl/maps/Aczehvt8GR7hgvMF8" target="_blank">
                                <i class="fa fa-map-marker"></i> вул. Миру 9а
                            </a>
                        </div>
                        <div class="col-12 col-md-6 text-center text-md-end">
                            <a :href="hrefPhoneNumber('+38 (0352) 55-55-58')" class="me-md-4">
                                <i class="fa fa-phone"></i> +38 (0352) 55-55-58
                            </a>
                            <a href="mailto:dutsadochok16@gmail.com">
                                <i class="fa fa-envelope"></i> dutsadochok16@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <router-link class="navbar-brand" :to="{ name: 'home' }" active-class="active">
                        <img src="http://gonthemes.info/iziclass/wp-content/themes/iziclass/images/logo.png" alt="Головна">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link :to="{ name: 'home' }" class="nav-link" active-class="active" exact>Головна</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'about' }" class="nav-link" active-class="active">Про нас</router-link>
                            </li>
<!--                            <li class="nav-item dropdown">
                                <router-link :to="{ name: 'news' }" class="nav-link" active-class="active">Новини</router-link>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>-->
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
