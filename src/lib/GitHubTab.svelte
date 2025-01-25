<script>
	import PanelButton from './PanelButton.svelte';
	import GitHubStarCount from 'labs/packages/astro-theme/components/nav/GitHubStarCount.svelte'
</script>

<h1 class="text-lg font-bold">GitHub</h1>
<PanelButton buttonImage="assets/github-mark-white.svg" clickUrl="Soon." buttonText="GitHub repo">
	<i class='fas fa-star fa-xs ml-auto'></i>
	<span class="ml-1"><GitHubStarCount repo="Soon"/></span>
</PanelButton>
