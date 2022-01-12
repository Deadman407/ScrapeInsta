request = require('request')
cheerio = require('cheerio')

request('https://www.instagram.com/_vicky.knk._.04_/followers/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html)

        const listOfFollowers = $('.wo9IH uu6c_ t2ksc enpQJ wFPL8')

        listOfFollowers.each((i, el) => {
            const follower = $(el)

            console.log(follower)
        })
    }
})
