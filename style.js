const api =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";
const block = document.querySelector(".box");
const time = setInterval(money, 10000)
function money() {
  fetch(api)
    .then((res) => res.json())
    .then((pro) => {
      const { binancecoin, bitcoin, ethereum, tether } = pro;
      block.innerHTML = `
    <p class="p">
        📊 Bozor(Real-Time Get)
      </p>
      <div class="block">
        <p>BINANCECOIN</p>
        <div class="mini">
          <p class="p2">$ ${binancecoin.usd}</p>
        </div>
      </div>
      <div class="block">
        <p>BITCOIN</p>
        <div class="mini">
          <p class="p2">$ ${bitcoin.usd}</p>
        </div>
      </div>
      <div class="block">
        <p>ETHEREUM</p>
        <div class="mini">
          <p class="p2">$ ${ethereum.usd}</p>
        </div>
      </div>
      <div class="block">
        <p>TETHER</p>
        <div class="mini">
          <p class="p2">$ ${tether.usd}</p>
        </div>
      </div>
  `;
    });
}
