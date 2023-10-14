<h2 class="relative">
	<span class="text-1 text-xl">Natreon&#8482;</span>
	<span class="text-2 text-xl">Enchancing outdoor experiences.</span>
</h2>

<style>
	.text-1 {
		animation: text1;
		animation-timing-function: steps(12, end);
	}

	.text-2 {
		animation: text2;
		animation-timing-function: steps(38, end);
	}

	.text-1,
	.text-2 {
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		position: relative;
		animation-duration: 20s;
		/* animation-timing-function: steps(25, end); */
		animation-iteration-count: infinite;
	}

	.text-1::after,
	.text-2::after {
		content: '|';
		position: absolute;
		right: 0;
		animation: caret infinite;
		animation-duration: 1s;
		animation-timing-function: steps(1, end);
	}

	@keyframes text1 {
		0%,
		50%,
		100% {
			width: 0;
		}
		10%,
		40% {
			width: 4.8em;
		}
	}

	@keyframes text2 {
		0%,
		50%,
		100% {
			width: 0;
		}

		60%,
		90% {
			width: 15em;
		}
	}

	@keyframes caret {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
</style>
