document.getElementById('photo').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('generate-btn').addEventListener('click', async function() {
    const photo = document.getElementById('photo').files[0];
    const prompt = document.getElementById('prompt').value;
    const aspectRatio = document.getElementById('aspect-ratio').value;
    const quality = document.getElementById('quality').value;
    const duration = document.getElementById('duration').value;
    const status = document.getElementById('status');
    const videoOutput = document.getElementById('video-output');

    if (!photo || !prompt) {
        status.textContent = 'Please upload a photo and enter a prompt.';
        return;
    }

    status.textContent = 'Generating video... Please wait.';
    videoOutput.style.display = 'none';

    // Placeholder for backend API call
    try {
        // Replace this with actual Hugging Face API call (Step 4)
        status.textContent = 'Video generation not yet implemented. Backend setup required.';
        // Example: const response = await fetch('YOUR_BACKEND_API_URL', { ... });
        // videoOutput.src = response.video_url;
        // videoOutput.style.display = 'block';
        // status.textContent = 'Video generated successfully!';
    } catch (error) {
        status.textContent = 'Error generating video. Try again later.';
        console.error(error);
    }
});