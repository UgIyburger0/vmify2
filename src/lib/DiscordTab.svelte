<script>
	import PanelButton from './PanelButton.svelte';
	import DiscordPresenceCount from 'labs/packages/astro-theme/components/nav/DiscordPresenceCount.svelte'
</script>

<h1 class="text-lg font-bold">Discord</h1>
<PanelButton buttonImage="assets/discord-mark-blue.svg" clickUrl="https://discord.gg/exploiting" buttonText="Join our Discord">
	<i class='fas fa-circle fa-xs ml-auto text-green-500'></i>
	<span class="ml-1"><DiscordPresenceCount /></span>
</PanelButton>
<p>Do you have any question about VMIFY?</p>
<p>Contact galaxyfounded and ask away!</p>
