"use client"

const GuidesContent = [
    {
        id: "my_modal_1",
        title: "How to activate Windows and MS Office",
        content: `
<br><h2><strong>The Manual Method</strong></h2>
<p><strong>&ensp;&ensp;1.</strong> Go to massgravel's <a href="https://github.com/massgravel/Microsoft-Activation-Scripts" target="_blank"><strong>Microsoft-Activation-Scrips</strong></a> github repository.</p>
<br><p><strong>&ensp;&ensp;2.</strong> Click on the <strong>Code</strong> button and click <strong>Download Zip</strong></p>
<p><strong>&ensp;&ensp;3.</strong> Once downloaded, extract the files anywhere.</p>
<p><strong>&ensp;&ensp;4.</strong> Navigate to <code>Microsoft-Activation-Scripts-master/MAS/All-In-One-Version-KL</code>.</p>
<p><strong>&ensp;&ensp;5.</strong> Run the <code>MAS_AIO.cmd</code> file.</p>
<br>
<h2><strong>The Powershell Method</strong></h2>
<p><strong>&ensp;&ensp;1.</strong> Open PowerShell (Not CMD).</p>
<p><strong>&ensp;&ensp;2.&nbsp;</strong>Copy and paste the command:</p>
<pre class="notranslate">&ensp;&ensp;&ensp;&ensp;<code>irm https://get.activated.win | iex</code></pre>
`
    },
    {
        id: "my_modal_2",
        title: "How to patch Spotify Desktop (Windows)",
        content: `
<br><h3><strong>Microsoft Store version is not supported</strong></h3>
<p>Download it from directly from <a href="https://download.scdn.co/SpotifySetup.exe" target="_blank"><strong>here</strong></a></p>
<h2><strong>Patching</strong></h2>
<p><strong>&ensp;&ensp;1.</strong> Go to amd64fox's <strong><a href="https://github.com/SpotX-Official/SpotX" target="_blank">SpotX</a></strong> github repository.</p>
<p><strong>&ensp;&ensp;2.</strong> Click the <strong>Code</strong> button, then click <strong>Download Zip</strong></p>
<p><strong>&ensp;&ensp;3.</strong> Once downloaded, extract the files anywhere.</p>
<p><strong>&ensp;&ensp;4.</strong> Navigate to the <code>SpotX-main</code> folder.</p>
<p><strong>&ensp;&ensp;5.</strong> Run the <code>Install_New_theme.bat</code> (If you prefer the old theme, run <code>Install_Old_theme.bat</code> instead.)</p>
<p><strong>&ensp;&ensp;6.</strong> You will be asked whether you want to hide podcasts, shows, and audiobooks on the homepage. Just type <code>Y</code> for yes or <code>N</code> for no. </p>
<p><center><small><i>If you encounter an error related to your installed <code>Spotify</code> version, just allow the program to reinstall the supported version.</i></small></center></p>
<p><strong>&ensp;&ensp;7.</strong> Once patching is complete, you can close the program.</p>

<br>
<h2><strong>Uninstalling the patch</strong></h2>
<p><strong>&ensp;&ensp;1.</strong> Navigate to <code>SpotX-main</code>.</p>
<p><strong>&ensp;&ensp;2.&nbsp;</strong>Run <code>Uninstall.bat</code></p>
`
    },

]

export default GuidesContent