<script lang="ts">
    import { onMount } from 'svelte';
    let user = { nickname: '', email: '', description: '' };

    async function getUserProfile() {
        const response = await fetch('/api/users/profile');
        const data = await response.json();
        user = data;
    }

    onMount(getUserProfile);
</script>

<div>
    <div>
        <label for="name">Name:</label>
        <input id="name" type="text" value={user?.nickname} readonly />
    </div>

    <div>
        <label for="email">Email:</label>
        <input id="email" type="text" value={user?.email} readonly />
    </div>

    <div>
        <label for="description">Description:</label>
        <textarea id="description" rows="4" cols="50" readonly>{user?.description}</textarea>
    </div>
</div>