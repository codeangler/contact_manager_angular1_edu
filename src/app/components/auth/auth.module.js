angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])

  .config(function($firebaseRefProvider) {
    var config = {
    apiKey: "AIzaSyDjbdFZxZe6-h8v_-i19m_09LCSJpaHJpw",
    authDomain: "contact-manager-clb.firebaseapp.com",
    databaseURL: "https://contact-manager-clb.firebaseio.com",
    storageBucket: "contact-manager-clb.appspot.com",
    messagingSenderId: "599612533187"
    };
    
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        default: config.databaseURL + '/contacts'
      })

    firebase.initializeApp(config);
  })

  ;
