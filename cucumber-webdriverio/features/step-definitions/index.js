var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

//login

Given('I go to todoist home screen', () => {
  browser.url('/');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});


When('I open the login screen', () => {
  $('a=Login').waitForExist(5000);
  $('a=Login').waitForDisplayed(5000);
  $('a=Login').click();
});

When(/^Write (.*) and (.*)$/ , (email, password) => {
  var cajaLogIn = $('div[class="standalone_page__content"]');

  cajaLogIn.$('input[name="email"]').waitForExist(5000);
  cajaLogIn.$('input[name="email"]').waitForDisplayed(5000);

  var emailInput = cajaLogIn.$('input[name="email"]');
  emailInput.click();
  emailInput.keys(email);

  var passInput = cajaLogIn.$('input[name="password"]');
  passInput.click();
  passInput.keys(password);

});

When('I want to login', () => {
  var cajaLogIn = $('div[class="standalone_page__content"]');
  cajaLogIn.$('button[class="submit_btn ist_button ist_button_red sel_login"]').click();

  sleep(10000).then(() => {
  });
});

Then('I expect to see the application', () => {
    $('div[id="todoist_app"]').waitForDisplayed(5000);
});


// REGISTRATION
Then('I expect to see success {string}', success => {
    $('h1[class="tdo-title"]').waitForDisplayed(5000);
    var alertText = browser.$('h1[class="tdo-title"]').getText();
    expect(alertText).to.include(success);
});

Then('I expect to see error {string}', error => {
    $('div[class="error_msg"]').waitForDisplayed(5000);
    var alertText = browser.$('div[class="error_msg"]').getText();
    expect(alertText).to.include(error);
});

Then('I expect pop up {string}', (error) => {
 $('.text-muted lead').waitForDisplayed(5000);
 var alertText = browser.$('text-muted lead').getText();
 expect(alertText).to.include(error);
});

When("I open the 'Signup' screen", () => {
  if($('a=Signup').isDisplayed()) {
    $('a=Signup').click();
  }
});

When(/^Put input (.*)$/ , (email) => {
  var cajaSignUp = $('.signup_positioner');

  cajaSignUp.$('input[name="email"]').waitForExist(5000);
  cajaSignUp.$('input[name="email"]').waitForDisplayed(5000);

  var mailInput = cajaSignUp.$('input[name="email"]');
  mailInput.click();
  mailInput.keys(email);
});

When(/^Type (.*) and (.*)$/ , (name, password) => {
  var cajaSignUp = $('.step_two');

  cajaSignUp.$('input[name="full_name"]').waitForExist(5000);
  cajaSignUp.$('input[name="full_name"]').waitForDisplayed(5000);

  var nameInput = cajaSignUp.$('input[name="full_name"]');
  nameInput.click();
  nameInput.keys(name);

  var passInput = cajaSignUp.$('input[name="pwd"]');
  passInput.click();
  passInput.keys(password);

});


When('I try to register', () => {
    var cajaSignUp = $('.signup_positioner');
    cajaSignUp.$('button[id="step_one_submit"]').click();

  sleep(10000).then(() => {
  });
});

When('I try to register second step', () => {
  var cajaSignUp = $('.step_two');
  cajaSignUp.$('button[id="step_two_submit"]').click();

  sleep(10000).then(() => {
  });
});

