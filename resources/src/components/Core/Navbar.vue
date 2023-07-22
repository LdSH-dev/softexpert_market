<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">Meu Software</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/sell">Sell</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/categories">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">Products</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

    <script>
        export default {
          name: 'MarketNavbar'
        }
    </script>

  <style scoped>
  .navbar {
    background-color: #0091ed;
  }
  
  .navbar-brand {
    color: white;
    font-weight: bold;
  }
  
  .navbar-nav .nav-link {
    color: white;
  }
  
  .navbar-nav .nav-link:hover {
    color: #555;
  }
  </style>
  