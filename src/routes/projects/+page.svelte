<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="test-base text-3xl font-bold py-6 text-center">My Projects</h1>

<div class="flex flex-col gap-6">
	{#each data.projects as project, i}
		{#if project.image}
			<div class="lg:grid lg:grid-cols-2 gap-6 py-6 rounded-2xl bg-gray-200">
				<div class="p-6">
					<h3 class="text-base text-2xl font-bold text-center">{project.name}</h3>
					<p class="text-base text-center text-gray-500">{project.short_description}</p>
					<p class="text-base text-center">{project.long_description}</p>
				</div>
				{#if i % 2 == 0}
					<div class="p-6">
						<img class="mx-auto max-w-full" src={project.image} alt={project.name} />
					</div>
				{:else}
					<div class="p-6 order-first">
						<img class="mx-auto max-w-full" src={project.image} alt={project.name} />
					</div>
				{/if}
			</div>
		{:else}
			<div class="py-6 rounded-2xl bg-gray-200">
				<div class="p-6">
					<h3 class="text-base text-2xl font-bold text-center">{project.name}</h3>
					<p class="text-base text-center text-gray-500">{project.short_description}</p>
					<p class="text-base text-center">{project.long_description}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>
