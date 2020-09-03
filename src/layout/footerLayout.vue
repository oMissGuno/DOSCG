<template>
  <div class="footer-copyright text-center py-3">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <live-chat/>
      </div>
    </div>
    <nav class="navbar-dark bg-dark">
      <div class="navbar row">
        <div class="col-2 col-sm-1">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col-10 col-sm-11 justify-content-center">
          <h6 class="text-muted">MONGKONKAWEE TUNTIPIDOK | CONTACT : MONGKONKAWEE.2539@GMAIL.COM</h6>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import liveChat from '../components/liveChat'
export default {
  name: 'footerLayout',
  components: {
    liveChat
  }
}
</script>
