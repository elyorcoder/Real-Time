const block = document.querySelector(".box");

let bin = 0,
  bit = 0,
  ether = 0,
  teth = 0,
  bin2 = 0,
  bit2 = 0,
  ether2 = 0,
  teth2 = 0;
function money() {
  const api = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd&${Date.now()}`;
  fetch(api)
    .then((res) => res.json())
    .then((pro) => {
      const { binancecoin, bitcoin, ethereum, tether } = pro;
      bin = binancecoin.usd;
      bit = bitcoin.usd;
      ether = ethereum.usd;
      teth = tether.usd;
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
          <p class="p3">$ ${bitcoin.usd}</p>
        </div>
      </div>
      <div class="block">
        <p>ETHEREUM</p>
        <div class="mini">
          <p class="p4">$ ${ethereum.usd}</p>
        </div>
      </div>
      <div class="block">
        <p>TETHER</p>
        <div class="mini">
          <p class="p5">$ ${tether.usd}</p>
        </div>
      </div>
      `;
      const p2 = document.querySelector(".p2");
      const p3 = document.querySelector(".p3");
      const p4 = document.querySelector(".p4");
      const p5 = document.querySelector(".p5");
      if (bin > bin2) {
        p2.style.color = "green";
      } else if (bin < bin2) {
        p2.style.color = "red";
      }
      if (bit > bit2) {
        p3.style.color = "green";
      } else if (bit < bit2) {
        p3.style.color = "red";
      }
      if (ether > ether2) {
        p4.style.color = "green";
      } else if (ether < ether2) {
        p4.style.color = "red";
      }
      if (teth > teth2) {
        p5.style.color = "green";
      } else if (teth < teth2) {
        p5.style.color = "red";
      }
    });
}
setInterval(money, 20000);
