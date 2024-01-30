const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
	console.log(burger);
	burger.classList.toggle("active-burger");
	menu.classList.toggle("hidden");
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated="true" to every `.scroller` on the page
		scroller.setAttribute("data-animated", true);

		// Make an array from the elements within `.scroller-inner`
		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);

		// For each item in the array, clone it
		// add aria-hidden to it
		// add it into the `.scroller-inner`
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}

// Accordion

const accordions = document.querySelectorAll("#accordion");
accordions.forEach((accordion) => {
	accordion.onclick = function () {
		let panel = this.nextElementSibling;
		panel.classList.toggle("hidden");
		let checkPanel = panel.classList.contains("hidden");
		let btn = accordion.children[0];
		let icon = btn.children[0];
		if (!checkPanel) {
			icon.classList = "fa-solid fa-minus";
		} else {
			icon.classList = "fa-solid fa-plus";
		}
	};
});

const accordions_footer = document.querySelectorAll("#accordion-footer");
accordions_footer.forEach((accordion) => {
	accordion.onclick = function () {
		let panel = this.nextElementSibling;
		panel.classList.toggle("hidden");
		let checkPanel = panel.classList.contains("hidden");
		let btn = accordion.children[0];
		let icon = btn.children[0];
		if (!checkPanel) {
			icon.classList = "fa-solid fa-chevron-up";
		} else {
			icon.classList = "fa-solid fa-chevron-down";
		}
	};
});
