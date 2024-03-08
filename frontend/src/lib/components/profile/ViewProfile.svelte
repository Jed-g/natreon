<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let isEditing = false;

    let user = { nickname: '', email: '', description: '' };

    async function getUserProfile() {
        const response = await fetch('/api/users/profile');
        const data = await response.json();
        user = data;
    }

    function toggleEdit() {
        isEditing = !isEditing;
    }

    async function saveChanges() {
        const response = await fetch('/api/users/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user })
        });
        const data = await response.json();
        user = data;
        isEditing = false;
    }

    function backToMap() {
        goto('/app')
    }


    onMount(getUserProfile);
</script>

<div class="absolute top-2 right-2 flex flex-col items-end">
    <div class="mb-2">
        <button class="btn" on:click={backToMap}>Back to Map</button>
    </div>
</div>

<div class="flex flex-col items-center justify-center min-h-screen bg-lime-900">
    <div class="text-white text-4xl">Profile</div>
    <div class="p-6 bg-green-700 text-white rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <div class="mb-4">
            <label for="name" class="block">Name:</label>
            <input id="name" type="text" bind:value={user.nickname} 
                readonly={!isEditing} class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
        </div>
        
        <div class="mb-4">
            <label for="email" class="block">Email:</label>
            <input id="email" type="text" bind:value={user.email} 
                readonly={!isEditing} class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
        </div>
        
        <div>
            <label for="description" class="block">Description:</label>
            <textarea id="description" rows="8" cols="50" bind:value={user.description} 
                readonly={!isEditing} class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
        </div>

        {#if isEditing}
            <button on:click={saveChanges} class="btn">Save Changes</button>
        {:else}
            <div class="flex items-center justify-center">
                <button class="btn" on:click={toggleEdit}>Edit Profile</button>
            </div>
        {/if}
    </div>
</div>


