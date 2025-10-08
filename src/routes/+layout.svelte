<script>
	import '../app.css';
</script>

<div class="relative bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div
			class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<div class="flex justify-start">
				<a href="/">
					<span class="sr-only">Jack Hughes</span>
					<h1 class="text-base text-6xl px-4 font-mono text-sky-600">J</h1>
				</a>
			</div>

			<nav class="space-x-10 flex">
				<a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
				<a href="/projects" class="text-base font-medium text-gray-500 hover:text-gray-900"
					>Projects</a
				>
			</nav>

			<div class="flex grow items-center max-md:hidden justify-end shrink-0 gap-2">
				<a href="https://github.com/jath03">
					<img class="w-12" src="/github.png" alt="" />
				</a>
				<a href="https://gitlab.com/jath03">
					<img
						class="w-20"
						src="https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg"
						alt=""
					/>
				</a>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto max-w-7xl px-6 pb-6">
	<slot />
</div>
