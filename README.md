This branch introduces the following enhancements over the base version:

1.  Enhanced Interactive Modal: When a movie or TV show is clicked, the modal now includes:
    *   Screenshot Gallery: A horizontally scrolling section that displays backdrop images from the movie or show.
    *   *YouTube Audio Player: Searches for the official soundtrack on YouTube via its API and plays it invisibly ("audio-only") directly on the page.

Configure the YouTube API Key

This is the most critical step to get the new audio feature working.

1.  **Get your key:** Follow the official instructions to create an API key on the Google Cloud Console and enable the **"YouTube Data API v3"**. Remember to restrict the key to only work on `http://localhost:3000` for development.
2.  **Open the file:** `src/components/AudioPlayer.js`.
3.  **Paste your key:** Replace the placeholder text with your actual API key.

    const YOUTUBE_API_KEY = 'PASTE_YOUR_YOUTUBE_API_KEY_HERE';
    


    https://github.com/user-attachments/assets/2f2abb90-8754-4807-b26d-8a9343777912
