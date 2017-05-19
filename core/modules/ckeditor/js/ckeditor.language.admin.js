/**
* DO NOT EDIT THIS FILE.
* All changes should be applied to ./modules/ckeditor/js/ckeditor.language.admin.es6.js
* See the following change record for more information,
* https://www.drupal.org/node/2873849
* @preserve
**/

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditorLanguageSettingsSummary = {
    attach: function attach() {
      $('#edit-editor-settings-plugins-language').drupalSetSummary(function (context) {
        return $('#edit-editor-settings-plugins-language-language-list-type option:selected').text();
      });
    }
  };
})(jQuery, Drupal);