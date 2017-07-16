/*GET About Page */
module.exports.about = function(req,res) {
  res.render('generic-text', {
  	title:'About Loc8r',
  	content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, integer in nunc laoreet id pharetra ut. In integer, ultrices morbi malesuada per, faucibus gravida eu suspendisse erat enim ac, imperdiet ultricies posuere suspendisse morbi dui sociosqu, eu orci morbi a. Sodales mauris augue pulvinar mauris, nunc nulla elit in integer, scelerisque odio eleifend volutpat, purus lorem fusce viverra hymenaeos. Vel venenatis convallis id elit nonummy. Mauris felis sed nunc id, dolor euismod vestibulum tristique dignissim.\n\nPharetra libero sit. Quisque molestie risus suscipit turpis, ultricies luctus commodo metus libero proin, amet sem nunc tortor neque, magna id. Lacus purus, tempus odio arcu sed, duis in et ipsam risus justo, mauris orci dolor nisl. Orci dignissim mi nibh ultrices cras, primis eget magnis sollicitudin odio dignissim aliquam, erat exercitation, montes et posuere eget nec. Iaculis eleifend, pretium ante leo dis ligula sit. Eget at, eu dictum, sit sapien arcu bibendum necessitatibus. Aliquet sodales donec ipsum dolor, et gravida eu sit curabitur, nam dictum eu lacinia libero arcu. Risus senectus at vel, aenean integer urna nibh.'
  });
};
