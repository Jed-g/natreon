<script lang="ts">
	import ManagementTable from '$lib/components/admin/main/comments/ManagementTable.svelte';
	import { authenticated } from '$lib/stores';

    const getAllComments = async () => {
        const response = await fetch('/api/admin/comments'); // Update the API endpoint to fetch comments
        const data = await response.json();
        return data.comments;
    };

    const updateComment = async (id: number, values: Record<string, string>) => {
        const response = await fetch('/api/admin/comments', { // Update the API endpoint to update comments
            method: 'POST',
            body: JSON.stringify({ id, comment: values.comment, rating: values.rating }), // Assuming comment and rating are the properties of a comment
            headers: {
                'Content-Type': 'application/json'
            }
        });
        authenticated.verify();
        const data = await response.json();
        return data;
    };

    const deleteComment = async (id: number) => {
        const response = await fetch('/api/admin/comments', { // Update the API endpoint to delete comments
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        authenticated.verify();
        const data = await response.json();
        return data;
    };

</script>


<div class="relative p-6 h-full w-full">
    <div class="relative card flex bg-base-100 shadow-xl p-6 flex-col h-full w-full overflow-x-auto">
        <ManagementTable
            getItemsAction={getAllComments}
            editAction={updateComment}
            deleteAction={deleteComment}
            tableHeaders={['Comment', 'Rating']} 
            tableName={'Comments'} 
        />
    </div>
</div>
