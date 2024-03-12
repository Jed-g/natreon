<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let isEditing = false;
    let files: File[] = [];
    let selectedFile: File | null;
    let nicknameMin3 = '';

    let user = { nickname: '', email: '', description: '',profile_picture: ''  };

    async function getUserProfile() {
        const response = await fetch('/api/users/profile');
        const data = await response.json();
        user = data;
    }

    function toggleEdit() {
        isEditing = !isEditing;
    }

    $: {
        if (user && user.nickname && user.nickname.length < 3) {
            nicknameMin3 = 'Nickname must be at least 3 characters long';
        } else {
            nicknameMin3 = '';
        }
    }

    async function saveChanges() {
        if (nicknameMin3) {
            return;
        }
        const { profile_picture, ... rest} = user;
        const response = await fetch('/api/users/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user :rest})
        });
        const data = await response.json();
        user = data;
        isEditing = false;
    }

    function backToMap() {
        goto('/app')
    }

    async function handleUpload() {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('profile_picture', selectedFile);

            const response = await fetch('/api/users/profile/update-picture', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                //const data = await response.json();
                //user = { ...user, profile_picture: data.profile_picture };
            } else {
            }
        }
    }

    function selectFile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input && input.files && input.files.length > 0) {
            selectedFile = input.files[0];
        }
    }


    onMount(getUserProfile);
</script>

<div class="absolute top-2 right-2 flex flex-col items-end">
    <div class="mb-2">
        <button class="btn" on:click={backToMap}>Back to Map</button>
    </div>
</div>



<div class="flex flex-col items-center justify-center min-h-screen bg-lime-900">
    <h1 class="text-4xl font-bold mb-6 text-white">Profile</h1>

    <div class="p-6 bg-green-700 text-white rounded shadow-md w-full md:w-3/4 lg:w-1/2">
        <div class="mb-4">
            <h2 class="text-2xl font-bold mb-2">Details</h2>
            <div>
                <label for="nickname">Nickname:</label>
                <input id="nickname" bind:value={user.nickname} readonly={!isEditing}
                    class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300" />
                {#if nicknameMin3}
                    <p>{nicknameMin3}</p>
                {/if}
            </div>
        </div>
        
        <div class="mb-4">
            <label for="email">Email:</label>
            <input id="email" type="text" bind:value={user.email} 
                readonly class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300" />
        </div>
        
        <div>
            <label for="description">Description:</label>
            <textarea id="description" rows="5" cols="50" bind:value={user.description} 
                readonly={!isEditing} class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300"></textarea>
        </div>

        {#if !isEditing}
            <div class="flex items-center justify-center h-full">
                <button class="btn" on:click={toggleEdit}>Edit Profile</button>
            </div>
        {/if}
        
        {#if isEditing}
            <div class="text-white text-2xl text-center">Editing Profile</div>
            <button class="btn" on:click={saveChanges}>Save Changes</button>
        {/if}
    </div>

    <div class="p-6 bg-green-700 text-white rounded shadow-md mt-6 w-full md:w-3/4 lg:w-1/2">
        <div class="mb-4">
            <h2 class="text-2xl font-bold mb-2">Profile Picture</h2>
            <div style="display: flex; justify-content: center;">
                <img src={user.profile_picture} alt="Profile Picture" style="width: 200px;"/>
            </div>
            <label for="profile-picture">Profile Picture:</label>
            <input id="profile-picture" type="file" accept="image/*" on:change={selectFile} class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300" />
        </div>

        <div class="mb-4">
            <button class="btn" on:click={handleUpload}>Upload Profile Picture</button>
        </div>
    </div>
</div>
