import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3();

const redirects = JSON.parse(fs.readFileSync('./redirects.json'));

redirects.forEach((item) => {
    console.log('Uploading:', item.from, '->', item.to)
    s3.putObject({
        ACL: 'public-read',
        ContentType: 'text/html',
        WebsiteRedirectLocation: item.to,
        Body: '',
        Bucket: process.env.DOMAIN,
        Key: item.from,
    }, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('Done')
    })
});
