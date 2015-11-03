(function( $, window, undefined ){
  var AjaxPageLoad = {
    elements: {},

    _bindEvents: function() {
      var self = this;

      this.elements.ajaxLinks.on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        self._getPageViaAjax(target);
      });

      this.elements.container.find('.page-content').on( 'transitionend webkitTransitionEnd', function(e) {
        self._cleanDOM();
      });

      this.elements.window.on('popstate', function(e) {
        self._getPageViaAjax(history.state);
      });

    },

    _getElements: function() {
      this.elements.window = $(window);
      this.elements.body = $('body');

      this.elements.ajaxLinks = $('a.ajax');
      this.elements.container = $('.container');
    },

    // Called after the transition of the main content finishes, this cleans up the DOM to get ready for a new page change
    _cleanDOM: function() {
      this.elements.container.find('.stale').remove();
      this.elements.container.find('.upcoming').removeClass('upcoming');
      this.elements.body.data('ajax-status', 'waiting').attr('data-ajax-status', 'waiting');
    },

    _getPageViaAjax: function(target) {
      var self = this;

      $.ajax({
        url: target,
        dataType: "html"
      }).done( function(res) {
        self._prepStaleContent();
        self._parseResponse(res);
        self._updateLocation(target);
      });
    },

    // Clean up what we've identified as the content and send it to functions to update the visible page
    _parseContent: function(content) {
      var activeSlug = $(content).find('.sidebar-container').find('a.active').data('slug'),
          activePageContent = $(content).find('.content-container'),
          newPageContent = $('<div />').append(activePageContent.clone().addClass('upcoming')).html();

      this._updateNav(activeSlug);
      this._updatePageContent( newPageContent );
    },

    // Clean up the response from the server to get just the parts we need
    _parseResponse: function(result) {
      var self = this,
          html = $.parseHTML(result);

      $.each(html, function(i, el) {
        if( el.nodeName == 'TITLE' ) {
          self._updateTitle( $(el).text() );
        }
        if( el.nodeName == 'DIV' ) {
          self._parseContent( el );
        }
      });
    },

    // When AJAX returns, preps old page to be transitioned away
    _prepStaleContent: function() {
      var offset = this.elements.window.scrollTop(),
          staleContent = $('.content-container');

      staleContent.addClass('stale');

      staleContent.css({
        position: 'absolute',
        top: -offset
      });

      this.elements.window.scrollTop(0);
    },

    // When AJAX returns, update browser history and url
    _updateLocation: function(target) {
      target = target.replace(/\.html/, '');
      history.pushState(target, null, target);
    },

    // Update active nav item
    _updateNav: function(activeSlug) {
      this.elements.ajaxLinks.removeClass('active');
      this.elements.ajaxLinks.filter('[data-slug='+activeSlug+']').addClass('active');
    },

    // Update page content
    _updatePageContent: function(newContent) {
      var self = this;

      this.elements.container.find('.page-content').append(newContent);

      // Urgh, hate these microsecond hacks, but this allows the CSS transitions to work
      setTimeout(function() {
        self.elements.body.data('ajax-status', 'transitioning').attr('data-ajax-status', 'transitioning');
      }, 1);
    },

    // Update document title
    _updateTitle: function(title) {
      $(document).prop('title', title);
    },


    initialize: function() {
      this._getElements();
      this._bindEvents();
    }
  };

  // Send to global namespace
  window.AjaxPageLoad = AjaxPageLoad;

  // Blastoff
  $(function(){
    AjaxPageLoad.initialize();
  });

})( jQuery, window, null );
