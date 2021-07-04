// Description:
// 	Webhook
module.exports = (robot) => {
	robot.router.post('/hubot/webhooks', (req, res) => {
		const channel = 'n3ed-notice'
		const recievedBody = () => return req.body
		console.info(`Recieved: ${recievedBody()}`)
		const data = (body) => {
			attachments: JSON.stringify([{
				"fallback": body.fallback,
				"color": body.color,
				"pretext": body.pretext,
				"author_name": body.author_name,
				"author_link": body.author_link,
				"author_icon": body.author_icon,
				"title": body.title,
				"title_link": body.title_link,
				"text": body.text,
				"image_url": body.image_url,
				"thumb_url": body.thumb_url,
				"footer": body.footer,
				"footer_icon": body.footer_icon,
				"ts": body.ts
			}])
		}
		if (recievedBody.token == 'HinachanKyapi-') {
			robot.messageRoom(channel, data(recievedBody()))
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
