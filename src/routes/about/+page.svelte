<script>
	import BasicLink from '$lib/basicLink.svelte';
</script>

<h1 class="test-base text-3xl font-bold py-6 text-center">About Me</h1>

<div class="max-w-3xl mx-auto">
	<img src="/selfie.jpg" alt="Me" class="max-w-xs max-md:mx-auto md:float-right px-4" />
	<p class="p-4">
		Hi! My name is Jack Hughes. I'm currently a Sophomore attending the University of Arizona and
		majoring in Software Engineering. I have been interested in technology and software for a long
		time and have messed around everything from robotics to web development and much more. I'm also
		a long-time linux user (I use arch btw) and believe in the value of open source software. Check
		out some of the <BasicLink href="/projects">projects</BasicLink>
		that I've done. If you like what you see, here's my
		<a
			class="text-base text-sky-600 font-bold underline hover:text-black"
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			>resume.
		</a>
	</p>
</div>
