<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog"
    
    // Define props with type annotations
    export let id: string;
    export let name: string;
    export let description: string;
    export let features: string[];
    export let comments: { text: string, nickname: string }[];
    export let onClose: () => void;

    let newComment = '';
    let user: {
		nickname: string;
	};


    // Function to add a new comment
    function addComment() {
        console.log("NIckname is " + user.nickname);
        if (newComment.trim() !== '') {
            comments = [...comments, { text: newComment.trim(), nickname: user.nickname }];
            newComment = ''; // Clear the input field after adding comment
        }
    }

    // Function to close the details container
    function closeDetails() {
        
    }

	function reportComment(comment: string): any {
		throw new Error("Function not implemented.");
	}
</script>


<style>
    /* Add some styling to center the details and add a border */
    .details-container {
        position: fixed;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        background-color: rgb(16, 16, 16);
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 999; /* Ensure the details appear on top of other content */
        color: white;
        max-width: 400px;
        width: 200%;
    }

    .comment-container {
       margin-top: 20px;
    }

    .comments-scroll {
        max-height: 200px; /* Adjust the height as needed */
        overflow-y: auto; /* Enable vertical scrolling */
    }

    .comment-wrapper {
        display: flex;
        align-items: center;
    }

    .comment {
        flex: 1;
        background-color: #333;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .report-button {
        margin-left: 10px;
        padding: 8px 12px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .report-button:hover {
        background-color: #d32f2f;
    }

    h2 {
        margin-top: 0;
    }

    ul {
        padding-left: 20px;
    }

</style>

<Dialog.Root open={true} onOpenChange={(newOpenValue) => newOpenValue || onClose()}>
    <Dialog.Content>
        <!-- Display the details using the props -->
        <div>
            
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Description: {description}</p>
            <p>Features:</p>
            <ul>
                {#each features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
            
            <!-- Comments container with separate scroll -->
            <div class="comment-container">
                <h3>Comments</h3>
                <div class="comments-scroll">
                    {#each comments as comment}
                        <div class="comment-wrapper">
                            <div class="comment">{comment}</div>
                            <button class="report-button" on:click={() => reportComment(comment.text)}>Report</button>
                        </div>
                    {/each}
                </div>
                
                <!-- Textarea for user to input comments -->
                <textarea
                    class="comment-input"
                    bind:value={newComment}
                    placeholder="Type your comment here..."
                ></textarea>
                <button on:click={addComment}>Add Comment</button>
            </div>
        </div>
    </Dialog.Content>
</Dialog.Root>
