(function( $, window, undefined ){
  var MobileNav = {
    elements: {},

    _bindEvents: function() {
      var self = this;

      this.elements.mobileMenuLink.on('click', function(e) {
        var status = self.elements.body.data('mobile-menu');
        var newStatus = 'open';

        if( status == 'open' ) {
          newStatus = 'closed';
        }

        self.elements.body.data('mobile-menu', newStatus).attr('data-mobile-menu', newStatus);
      });

      // For AJAX loading, close the mobile menu when a link is clicked
      this.elements.pageLinks.on('click', function(e) {
        self.elements.body.data('mobile-menu', 'closed').attr('data-mobile-menu', 'closed');
      });
    },

    _getElements: function() {
      this.elements.window = $(window);
      this.elements.body = $('body');

      this.elements.mobileMenuLink = $('.mobile-menu-toggle');
      this.elements.pageLinks = $('.nav a');
    },

    initialize: function() {
      this._getElements();
      this._bindEvents();
    }
  };

  // Send to global namespace
  window.MobileNav = MobileNav;

  // Blastoff
  $(function(){
    MobileNav.initialize();
  });

})( jQuery, window, null );
