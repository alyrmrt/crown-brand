'use strict'

const fs = require('fs')

const heyYall = function (inFile) {
 const promiseReadFile = function () {
   return new Promise((resolve, reject) => {
   fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
       if (error) {
          reject(error)
     }
     resolve(content)
   })
 })
 }

 const split = function (data) {
    const lines = data.split('\n')
    return lines
  }

  const filter = function (data) {
  const nonBlankLines = data.filter(line => line.length > 0)
    return nonBlankLines
  }


  const print = function (data) {
    data.forEach((line) => {
      console.log(`Hey ${line}!`)
  })
}
/*  fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
    if (error) {
      console.error(error)
    }

    const lines = content.split('\n')

    // clean up the array by removing the empty line
    const nonBlankLines = lines.filter(line => line.length > 0)

    nonBlankLines.forEach((line) => {
      console.log(`Hey ${line}!`)
    })
  }) */

promiseReadFile(inFile)
.then(split) //split
.then(filter)  //filter
.then(print) //message when it s
.cath(console.error)
}

module.exports = heyYall
