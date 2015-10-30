(function( $, window, undefined ){
  var BradleyKenyon = {
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
    },

    _getElements: function() {
      this.elements.window = $(window);
      this.elements.body = $('body');

      this.elements.mobileMenuLink = $('.mobile-menu-toggle');
    },

    initialize: function() {
      this._getElements();
      this._bindEvents();
    }
  };

  // Send to global namespace
  window.BradleyKenyon = BradleyKenyon;

  // Blastoff
  $(function(){
    BradleyKenyon.initialize();
  });

})( jQuery, window, null );
