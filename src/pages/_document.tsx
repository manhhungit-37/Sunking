import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat">
      </div>

      <script>
        {`var chatbox = document.getElementById('fb-customer-chat');
      console.log(1);
      chatbox.setAttribute("page_id", "114354014986699");
      chatbox.setAttribute("attribution", "biz_inbox");`}
      </script>

      <script>
        {`window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : v17
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
      </script>
    </Html>
  );
}
