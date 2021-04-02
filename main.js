let images = document.querySelectorAll('.img');

images.forEach(i => {
	addEventListener('mousedown', e => {

		let img = e.target;

		let org = img.children[0];

		let cx = e.clientX,
				cy = e.clientY,
				ex = img.offsetLeft,
				ey = img.offsetTop,
				w = img.offsetWidth,
				h = img.offsetHeight;

		// Y
		// cy ey h
		org.style.top = `${100*((cy - ey) / h)}%`;
		img.style.backgroundPositionY = `${100*((cy - ey) / h)}%`;

		// X
		org.style.left = `${100*((cx - ex) / w)}%`;
		img.style.backgroundPositionX = `${100*((cx - ex) / w)}%`;

		// console.log(`
		// 	cx: ${cx}
		// 	cy: ${cy}
		// 	ex: ${ex}
		// 	ey: ${ey}
		// 	w:  ${w}
		// 	h:  ${h}
		// `);
	})
})
