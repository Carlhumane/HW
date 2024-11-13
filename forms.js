function openFormURL() {
    const lastName = encodeURIComponent(document.getElementById("lastName").value);
    const firstName = encodeURIComponent(document.getElementById("firstName").value);
    const group = encodeURIComponent(document.getElementById("group").value);
    const phone = encodeURIComponent(document.getElementById("phone").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const sendDate = encodeURIComponent(document.getElementById("sendDate").value);

    const url = `https://www.bing.com/search?q=Форма%20пользователя&lastName=${lastName}&firstName=${firstName}&group=${group}&phone=${phone}&email=${email}&sendDate=${sendDate}`;
    
    window.open(url, "_blank");
  }

  function orderURL() {
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const delivery = document.querySelector('input[name="delivery"]:checked').value;
    const giftWrap = document.getElementById("giftWrap").checked ? 'yes' : 'no';
    const deliveryDate = document.getElementById("deliveryDate").value;
    const password = document.getElementById("password").value;

    const condition = `Данные заказа ${productName} × ${quantity} × ${delivery} ${giftWrap} × ${deliveryDate} x ${password}`;

    const bingUrl = `https://www.bing.com/search?q=Форма%20пользователя&productName=${productName}&quantity=${quantity}&delivery=${delivery}&giftwrap=${giftWrap}&deliverydate=${deliveryDate}&password=${password}`;
    window.open(bingUrl, '_blank');
  }