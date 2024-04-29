<script lang="ts">
    import { onMount } from 'svelte';
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card/index.js";

    let content = '';
    let posts = [];

    const createPost = async () => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({ content })
        });
        if (response.ok) {
            content = '';
            await fetchPosts(); 
        } else {
            console.error('Post creation failed.');
        }
    };

    const fetchPosts = async () => {
        const response = await fetch('/api/posts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        });
        if (response.ok) {
            posts = await response.json();
        } else {
            console.error('Failed to fetch posts.');
        }
    };

    onMount(fetchPosts);

</script>

<Textarea bind:value={content} class="px-4 mb-2" placeholder="What's on your mind?" />
<Button variant="outline" on:click={createPost}>Post</Button>

{#each posts as post (post.id)}
<Card.Root >
    <Card.Header>
      <Card.Title>{post.user.nickname}</Card.Title>
      <Card.Description>{new Date(post.created_at).toLocaleDateString("en-UK", { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</Card.Description>
    </Card.Header>
    <Card.Content>
        {post.content}
    </Card.Content>
  </Card.Root>
{/each}