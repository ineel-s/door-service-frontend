<template>
        
    <div class="container-fluid justify-content-center text-light" id="container-fluid">
      <footer>
        <div class="row my-5 justify-content-center py-5">
          <div class="col-12">
            <div class="row ">
              <div class=" col-md-8 col-sm-4 col-12 my-auto mx-auto a">
                <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                <ul class="list-unstyled">
                  <li>Home</li>
                  <li>Services</li>
                  <li>YourBookings</li>
                  <li>Profile</li>
                </ul>
              </div>
              <div class="col-xl-2 col-md-3 col-sm-4 col-12">
                <h3 class="text-white mb-md-0 mb-6 bold-text">Door Service</h3><br><hr>
                <h6 class="mb-3 mb-lg-4 text-white bold-text mt-sm-0 mt-5"><b>Contact us</b></h6>
                <p class="mb-1"><i class="fa fa-phone"></i> Toll Free:- 1800-404-1236</p>
                <p class="social text-white mb-0 pb-0 bold-text">
                  <span class="mx-2"><a href="#" class="text-white"><i class="fab fa-facebook-square" aria-hidden="true"></i></a></span>
                  <span class="mx-2"><a href="#" class="text-white"><i class="fab fa-linkedin" aria-hidden="true"></i></a></span>
                  <span class="mx-2"><a href="#" class="text-white"><i class="fab fa-twitter-square" aria-hidden="true"></i></a></span>
                  <span class="mx-2"><a href="#" class="text-white"><i class="fab fa-instagram" aria-hidden="true"></i></a></span>
                </p>
                <h6 class="mt-55 mt-2 text-white bold-text"><b>CRYSTAL DEVS</b></h6><small>
                  <span><i class="fa fa-envelope" aria-hidden="true"></i></span> crystaldevsofficial@gmail.com</small>
              </div>
            </div>
            <div class="d-flex justify-content-center sticky-bottom">
                <small class="rights"><span>&copy;</span> All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </footer>
      </div>
</template>

<script>
export default {
    name: 'FooterPage'

}
</script>

<style scoped>

#container-fluid {
      overflow: hidden;
      background-color: rgba(104,96,167);
      color: rgb(255, 255, 255) !important;
    }

    .fa:hover {
      opacity: 0.7;
    }
    .fab:hover {
      opacity: 0.7;
    }
</style>