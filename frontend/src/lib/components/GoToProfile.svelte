<script>
    import { goto } from '$app/navigation';
    function goToProfile() {
        goto('/profile');
    }
</script>

<button class="btn" on:click={goToProfile}>Go to Profile</button>
