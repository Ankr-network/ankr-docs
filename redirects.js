const { parse } = require('csv-parse');
const fs = require('fs')
const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const redirects = parse(fs.readFileSync('redirects.csv'))
redirects.forEach((redirect) => {
    console.log('Uploading ', redirect)
    s3.putObject({
        Body: '',
        Bucket: 'gotothat.link',
        Key: redirect[0],
        Metadata: {
            'Website-Redirect-Location': redirect[1]
        }
    }, (err, data) => {
        if (err) return console.log(err)
        console.log('done')
    })
})