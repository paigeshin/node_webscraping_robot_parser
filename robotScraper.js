const robotParser = require('robots-parser')
const request = require('request-promise')

//https://textfiles.meulie.net/robots.txt
const robotsUrl = "https://textfiles.meulie.net/robots.txt"


getRobotsTxt(robotsUrl)

async function getRobotsTxt(robotsUrl) {
    const robotTxt = await request.get(robotsUrl)
    const robots = robotParser(robotsUrl, robotTxt)

    //check if crawling is available..
    console.log(
        robots.isAllowed('https://textfiles.meulie.net/100/', 'paigebot')
    )
    console.log(
        robots.isAllowed('https://textfiles.meulie.net/100/', 'rogerbot')
    )

    //check crawl delay
    console.log(robots.getCrawlDelay())

    return robotTxt
}

