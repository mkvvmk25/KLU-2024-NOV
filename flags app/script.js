let bodyObj = document.querySelector(".flag-cont");
let inpObj = document.querySelector("input");
let btnObj = document.querySelector("button");

function generateFlag(code) {
	let url = `https://restcountries.com/v3.1/alpha/${code}`;

	let flagImg = (url) => `<div class="flag">
				<img
					class="flag-img"
					src="${url}"
					alt=""
					class=""
				/>
			</div>`;

	let p = fetch(url)
		.then(function (full, rej) {
			return full.json();
		})
		.then(function (full1, rej1) {
			let url = full1[0].flags.png;

			bodyObj.insertAdjacentHTML("beforeend", flagImg(url));
		});
}

btnObj.addEventListener("click", function (ev) {
	generateFlag(inpObj.value);
});
