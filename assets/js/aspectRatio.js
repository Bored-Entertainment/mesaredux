// aspectRatio.js
// Usage: aspectRatioInfo = getAspectRatioInfo('4:3')
// aspectRatioInfo.width, aspectRatioInfo.height, aspectRatioInfo.scaleToWidth(w), aspectRatioInfo.scaleToHeight(h)

function getAspectRatioInfo(ratioStr, refWidth = 800, refHeight = 700) {
	// Parse string like '4:3' or '16:9'
	const match = /^([0-9.]+)\s*:\s*([0-9.]+)$/.exec(ratioStr);
	if (!match) return null;
	const w = parseFloat(match[1]);
	const h = parseFloat(match[2]);
	// Default: scale so width = refWidth
	let width = refWidth;
	let height = Math.round((h / w) * refWidth);
	// If height would exceed refHeight, scale to fit height
	if (height > refHeight) {
		height = refHeight;
		width = Math.round((w / h) * refHeight);
	}
	return {
		width,
		height,
		scaleToWidth: (newWidth) => ({
			width: newWidth,
			height: Math.round((h / w) * newWidth)
		}),
		scaleToHeight: (newHeight) => ({
			width: Math.round((w / h) * newHeight),
			height: newHeight
		})
	};
}

document.addEventListener("DOMContentLoaded", function () {
    
    let iframe = document.getElementById("game-iframe");
    if (iframe && typeof aspectRatioInfo !== "undefined") {
        iframe.width = aspectRatioInfo.width + 10;
        iframe.height = aspectRatioInfo.height + 25;
        console.log("Set iframe size to " + iframe.width + "x" + iframe.height + " for aspect ratio " + aspectRatioInfo.width + ":" + aspectRatioInfo.height);
    } else {
        console.log("Iframe or aspectRatioInfo not found");
    }

});

document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("game-iframe");
    if (iframe) {
        iframe.addEventListener("load", function () {
            try {
                let embed = iframe.contentDocument.getElementById("game-embed");
                if (embed && typeof aspectRatioInfo !== "undefined") {
                    embed.width = aspectRatioInfo.width;
                    embed.height = aspectRatioInfo.height;
                    console.log("Set embed size to " + embed.width + "x" + embed.height + " for aspect ratio " + aspectRatioInfo.width + ":" + aspectRatioInfo.height);
                } else {
                    if (!embed) {
                        console.error("Error: 'game-embed' not found inside iframe.");
                    } else if (typeof aspectRatioInfo === "undefined") {
                        console.error("Error: aspectRatioInfo is undefined.");
                    } else {
                        console.error("Unknown error setting embed size.");
                    }
                }
            } catch (err) {
                console.error("Exception while accessing embed in iframe:", err);
            }
        });
    }
});