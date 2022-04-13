const {articles} = require('../data/others/news.json')
// Tasks

// 1. Name all the sources with null ids.
// 2. Name all the sources with null authors.
// 3. Create a new list with any of the keys that have null values.
// 4. Print the title, content and description of the latest article.
    // let latest = articles
    //                     .map(n => n.publishedAt)
    //                     .sort((a, b) => b - a)[0]
    // articles
    //     .filter(n => n.publishedAt === latest)
    //     .forEach(n => {
    //                 console.log(`Title: ${n.title}`)
    //                 console.log(`Content: ${n.content}`)
    //                 console.log(`Description: ${n.description}`)
    //             });
// 5. Print the title, content and description of the oldest article.
// 6. Print the article with the longest title.
// 7. Print all the articles from the same source.
