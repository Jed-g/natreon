
<script lang="ts">
    import ManagementTable from '$lib/components/admin/main/comments/ManagementTable.svelte';
    import { authenticated } from '$lib/stores';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

    // Function to get all comments
    const getAllComments = async () => {
        console.log("Fetching all ...");
        const response = await fetch('/api/admin/comments');
        const data = await response.json();
        console.log("Comments fetched:", data);
        return data;
    };

    async function toggleReportStatus(commentId: number): Promise<void> {
        try {
            const response = await fetch(`/api/admin/comments/${commentId}/toggle_report_status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reported: false })
            });
            if (response.ok) {
                // Optionally, update the UI to reflect the reported status
                toast.success('Comment changed to not reported successfully.');
            } else {
                throw new Error('Failed to report comment.');
            }
        } catch (error) {
            console.error('Error reporting comment:', error);
            toast.error('An error occurred while reporting the comment.');
        }
    }
    
    // Function to send email notification to user
    const sendEmailNotification = async (commentId: number) => {
        console.log("Check ID still here?", )
        try {
            const response = await fetch(`/api/admin/comments/${commentId}/send_email_notification`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log("Email notification response:", data);
        } catch (error) {
            console.error('Error sending email notification:', error);
        }
    };

    // Function to handle comment deletion
    const deleteComment = async (id: number) => {
        await sendEmailNotification(id); 

        console.log("Deleting comment with ID:", id);

        const response = await fetch(`/api/admin/comments/${id}`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        authenticated.verify();

        if (!response.ok){
            throw new Error ("Failed to delete comment")
        }

        const data = await response.json();
        console.log("Delete response:", data);
        await getAllComments(); // Await getAllComments completion
        toast.success('Comment deleted successfully!'); // Show toast after getting comments

        return data;
    };

    onMount(() => {
        getAllComments(); 
	});
</script>

<div class="relative p-6 h-full w-full">
    <div class="relative card flex bg-base-100 shadow-xl p-6 flex-col h-full w-full overflow-x-auto">
        <ManagementTable
            getItemsAction={getAllComments}
            deleteAction={deleteComment}
            toggleReportStatusAction={toggleReportStatus}
            tableHeaders={['User Name','Poi Name','Comment', 'Rating']} 
            tableName={'Reported Comments'} 
        />
    </div>
</div>
