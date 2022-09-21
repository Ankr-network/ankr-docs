const fs = require('fs')
const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const redirects = JSON.parse(fs.readFileSync('./redirects.json'));

redirects.forEach((item) => {
    console.log('Uploading:', item.from, '->', item.to)
    s3.putObject({
        ACL: 'public-read',
        ContentType: 'text/html',
        Body: '',
        Bucket: process.env.DOMAIN,
        Key: item.from,
        Metadata: {
            'Website-Redirect-Location': item.to,
            'Content-Type': 'text/html',
        }
    }, (err, data) => {
        if (err) {
            return console.log(err);
        }

        console.log('Done')
    })
})