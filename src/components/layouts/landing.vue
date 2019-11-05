<template>
    <div class="main-app">
            <b-navbar toggleable="lg">
                <div class="container">
                <b-navbar-brand href="#">EP</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <a href="#" class="link">Home</a>
                    <a href="#" class="link">Project</a>
                    <a href="#" class="btn btn-primary">Login</a>    
                </b-navbar-nav>
                </b-collapse>
                    
                </div>
            </b-navbar>
        <router-view />
    </div>
</template>

<style lang="scss" scoped>
.main-app{
    flex:1;
}
.header{
    display:flex;
    height:75px;
    background:#FFFF;
    flex-direction: row;
    .right{
        display: flex;
        margin-left:auto;
        justify-content:flex-end;
        .menu{
            display: flex;
            @media(max-width:768px){
                flex-direction: column;
                flex:1;
            }
            a{
                display: block;
                line-height: 50px;
                margin-right: 6px;
            }
        }
    }
}
img{
    max-width:100%;
}
.btn{
    outline:none !important;
    border-color:none;
}
.link{
    padding: 0.375rem 0.75rem;
    text-align: center;
    vertical-align: middle;
    color:black;
    font-size:1rem;
    text-decoration:none;
}
</style>