<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import BasicLink from './basicLink.svelte';
	export let content: string;
</script>

<SvelteMarkdown source={content} renderers={{ link: BasicLink }} isInline />
