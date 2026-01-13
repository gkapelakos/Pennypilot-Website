document.addEventListener('DOMContentLoaded', () => {
    const repoOwner = 'gkapelakos';
    const repoName = 'PennyPilot';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/releases`;
    const container = document.getElementById('release-container');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status}`);
            }
            return response.json();
        })
        .then(releases => {
            container.innerHTML = ''; // Clear loading text

            // Limit to the latest 2 releases
            const latestReleases = releases.slice(0, 2);

            if (latestReleases.length === 0) {
                container.innerHTML = '<p>No releases found.</p>';
                return;
            }

            latestReleases.forEach(release => {
                const releaseCard = document.createElement('div');
                releaseCard.className = 'release-card';

                const date = new Date(release.published_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                const releaseTitle = release.name || release.tag_name;

                // header
                let html = `
                    <div class="release-header">
                        <span class="release-tag">${escapeHtml(releaseTitle)}</span>
                        <span class="release-date">${date}</span>
                    </div>
                    <ul class="release-assets">
                `;

                // Assets (APKs)
                const apkAssets = release.assets.filter(asset => asset.name.endsWith('.apk'));

                if (apkAssets.length > 0) {
                    apkAssets.forEach(asset => {
                        html += `
                            <li>
                                <a href="${asset.browser_download_url}" class="asset-link">
                                    <svg class="asset-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                    ${escapeHtml(asset.name)}
                                    <span class="asset-size">
                                        ${(asset.size / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                </a>
                            </li>
                        `;
                    });
                } else {
                    html += `
                        <li>
                            <a href="${release.html_url}" class="asset-link" target="_blank" style="background-color: #222;">
                                <svg class="asset-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                View Release on GitHub
                            </a>
                        </li>
                    `;
                }

                html += `</ul>`;
                releaseCard.innerHTML = html;
                container.appendChild(releaseCard);
            });
        })
        .catch(error => {
            console.error('Error fetching releases:', error);
            container.innerHTML = `
                <p class="error-text">
                    Unable to load latest releases directly. 
                    <a href="https://github.com/${repoOwner}/${repoName}/releases" style="color: #3b82f6;">View on GitHub</a>
                </p>
            `;
        });
});

function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
