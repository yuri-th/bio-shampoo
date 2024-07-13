$('.campaign-sample').waypoint({
  handler: function(direction) {
    if (direction === 'down') {

      $(this.element).addClass('animate__fadeInUp');


      this.destroy();
    }
  },

  // 要素が画面に入ったらhandlerを実行
  offset: '100%',
});


$('.exhibitimage').waypoint({
  /* 写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '100%',
});


$('.exhibit2image').waypoint({
  /*写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '100%',
});

$('.benefit1').waypoint({
  /* 写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '100%',
});

$('.benefit2').waypoint({
  /*写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '100%',
});


// フォームの入力値チェック
$('#contact_form').on('submit', function(e) {
  var username = $('#username').val(); /* お名前 */
  var userkana = $('#userkana').val(); /* フリガナ */
  var postcode = $('#postcode').val(); /* 郵便番号 */
  var prefectures = $('#prefectures').val(); /* 都道府県 */
  var cityname = $('#cityname').val(); /* 市区町村 */
  var apartment = $('#apartment').val(); /* マンション名 */
  var telno = $('#telno').val(); /* 電話番号 */
  var email = $('#email').val(); /* メールアドレス */
  var passcode = $('#passcode').val(); /* パスワード */

  // ラジオボタン
  const num_of_inq = $('[name="num_of_inq"]:checked').length;


  var error_text = ''; /* エラーの説明が入る変数 */

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  }
  else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  }
  else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  }
  else if (postcode.trim() === '') {
    error_text = '郵便番号を入力してください';
  }
  else if (!postcode.match(/^[0-9]{7}$/)) {
    error_text = '郵便番号は半角数字7ケタを入力してください';
  }
  else if (prefectures.trim() === '') {
    error_text = '都道府県を選択してください';
  }
  else if (cityname.trim() === '') {
    error_text = '市区町村を入力してください';
  }
  else if (!cityname.match(/[^\x01-\x7E]/)) {
    error_text = '市区町村は全角で入力してください';
  }
  else if (telno.trim() === '') {
    error_text = '電話番号を入力してください';
  }
  else if (!telno.match(/^([0-9]{10,11})$/)) {
    error_text = '電話番号は半角数字10ケタか11ケタで入力してください';
  }
  else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }
  else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }
  else if (passcode.trim() === '') {
    error_text = 'パスワードを入力してください';
  }
  else if (!passcode.match(/^([a-zA-Z0-9]{4,})$/)) {
    error_text = 'パスワードは半角英数字4文字以上で入力してください';
  }

  else if (num_of_inq === 0) {
    error_text = 'お支払い方法を選択してください';
  }




  if (error_text !== '') {
    // エラー内容を表示

    // ページ遷移を止める
    e.preventDefault();

    // エラー内容を表示
    $('#form_has_error').text(error_text);
  }
  else {

    e.preventDefault();

    // エラー内容をクリア
    $('#form_has_error').text('');
  }


});
