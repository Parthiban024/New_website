class Mynavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `   <nav class="navbar navbar-expand-lg  navmain">
      <div class="container">
        <!-- <a class="navbar-brand" href="#"><img src ="images//Logo.png" class="logo" alt="logo"></a> -->
        <a class="navbar-brand" href="#"><img src="images//Logo-removebg-preview.png" class="img-fluid logo_img" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlink">
            <li class="nav-item dropdown">
              <a class="nav-link nav_link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Services</strong>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Data Engineering</a></li>
                <li><a class="dropdown-item" href="#">Data Analytics</a></li>
                <li><a class="dropdown-item" href="#">Data Science</a></li>
                <li><a class="dropdown-item" href="#">Data Ingesting</a></li>
                <li><a class="dropdown-item" href="#">Migration</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link nav_lnk nav_link" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <strong>
                  Industries
                </strong>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">HLS</a></li>
                <li><a class="dropdown-item" href="#">Retail</a></li>
                <li><a class="dropdown-item" href="#">Manufacturing</a></li>
                <li><a class="dropdown-item" href="#">Financial Services</a></li>
                <li><a class="dropdown-item" href="#">CPG</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav_link" href="#"><strong>Company</strong></a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav_link" href="#"><strong>Blog</strong></a>
            </li>
          </ul>
          <button class="btn btn-outline-primary nav_btn" type="button"><strong>Contact Us</strong></button>
        </div>
      </div>
    </nav>`;
    }
  }
  
  customElements.define('my-navbar', Mynavbar);