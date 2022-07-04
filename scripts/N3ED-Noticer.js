// Description:
// 	Webhook
module.exports = (robot) => {
	robot.router.post('/hubot/webhooks', (req, res) => {
		const channel = process.env.TARGET_CHANNEL
		let recievedBody = req.body
		console.info('Recieved:', recievedBody)
		let data = {
			attachments: JSON.stringify([{
				"fallback": recievedBody.fallback,
				"color": recievedBody.color,
				"pretext": recievedBody.pretext,
				"author_name": recievedBody.author_name,
				"author_link": recievedBody.author_link,
				"author_icon": recievedBody.author_icon,
				"title": recievedBody.title,
				"title_link": recievedBody.title_link,
				"text": recievedBody.text,
				"image_url": recievedBody.image_url,
				"thumb_url": recievedBody.thumb_url,
				"footer": recievedBody.footer,
				"footer_icon": recievedBody.footer_icon,
				"ts": recievedBody.ts
			}])
		}
		if (req.body.token == process.env.WEBHOOK_TOKEN) {
			robot.messageRoom(channel, data)
		}
		res.end()
	});
}

/** Example Data
	"fallback": "Required plain-text summary of the attachment.",
	"color": "#36a64f",
	"pretext": "Optional text that appears above the attachment block",
	"author_name": "Bobby Tables",
	"author_link": "http://flickr.com/bobby/",
	"author_icon": "http://flickr.com/icons/bobby.jpg",
	"title": "Slack API Documentation",
	"title_link": "https://api.slack.com/",
	"text": "Optional text that appears within the attachment",
	"image_url": "http://my-website.com/path/to/image.jpg",
	"thumb_url": "http://example.com/path/to/thumb.png",
	"footer": "Slack API",
	"footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
	"ts": "123456789"
**/
