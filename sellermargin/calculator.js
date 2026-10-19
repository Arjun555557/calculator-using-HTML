(function(){
const ids=["price","cost","shipping","fees","ads","returns","other","units"];
const get=id=>Math.max(0,Number(document.getElementById(id).value)||0);
const money=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(n);
function calculate(){
const price=get("price"), cost=get("cost"), shipping=get("shipping"), fees=get("fees"), ads=get("ads"), returns=get("returns"), other=get("other"), units=get("units");
const total=cost+shipping+fees+ads+returns+other;
const contribution=price-total;
document.getElementById("contribution").textContent=money(contribution);
document.getElementById("margin").textContent=price>0?(contribution/price*100).toFixed(1)+"%":"—";
document.getElementById("breakeven").textContent=money(total);
document.getElementById("monthly").textContent=money(contribution*units);
}
document.getElementById("calculate").addEventListener("click",calculate);
ids.forEach(id=>document.getElementById(id).addEventListener("input",calculate));
calculate();
})();