<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand"> 
        Online Store
      </NuxtLink>

      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" active-class="active">
              Home
            </NuxtLink>
          </li>
        </ul>
        <div class="d-flex">
          <button
            class="btn btn-outline-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Shopping cart
          </button>
        </div>
      </div>
    </div>
    
  </nav>
  
  </div>
  
</template>