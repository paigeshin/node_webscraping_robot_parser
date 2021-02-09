[https://www.facebook.com/robots.txt](https://www.facebook.com/robots.txt)

- It is up to you if you want to respect robots.txt
- 모든 사이트에 robots.txt가 있다. 이 파일을 보고 크롤링을 할지 안할지 결정하면 된다.

### npm

- [https://www.npmjs.com/package/robots-parser](https://www.npmjs.com/package/robots-parser)

```kotlin
npm i --save robots-parser
npm i --save request-promise 
npm i --save request 
```

### Parsing robots.txt from a real site

- Check if url is allowed for crawling
- Check allowed delay time

```jsx
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
```