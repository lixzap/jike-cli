#!/usr/bin/env node

var axios = require('axios');
var axios = require('axios');
var moment = require('moment');
var inquirer = require('inquirer')
var loadMoreKey = null;


var instance = axios.create({
  baseURL: 'https://app.jike.ruguoapp.com/1.0/',
  timeout: 3000,
  // headers: {
  //   // "x-jike-access-token": authToken,
  //   "App-Version": "4.1.0",
  //   "Accept": "application/json",
  //   "Content-Type": "application/json",
  //   "platform": "web",
  // },
});
instance.interceptors.response.use(({
  data
}) => {
  return data;
  // if (data.success == true) {
  //   // loadMoreKey = data.loadMoreKey;
  //   return data.data-
  // } else {
  //   return '失败'
  // }
})

inquirer.prompt([{
  type: 'confirm',
  name: 'test',
  message: 'Are you handsome?',
  default: true
}]).then((answers) => {
  console.log('结果为:')
  console.log(answers)
})


var argv = require('yargs')
  .demand(['n'])
  .default({
    n: 'tom'
  })
  .describe({
    n: 'your name'
  })
  .argv;

function getList() {
  instance.post('comments/listPrimary', {
      limit: 20,
      loadMoreKey: loadMoreKey,
      targetId: '5bbd94778054c8001156e5bc',
      targetType: 'ORIGINAL_POST',
    }).then(function(res) {
      // console.log(JSON.stringify(res))
      loadMoreKey = res.loadMoreKey;
      res.data.forEach(el => {
        console.log(el.user.screenName)
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}

// instance.post('personalUpdate/followingUpdates', {
//     limit: 20,
//     loadMoreKey: loadMoreKey,
//     username: '638B3456-DB8C-44C0-8E85-140DA30A3CA3',
//   }).then(function(res) {
//     // console.log('成功： ', res);
//     res.forEach(el => {
//       if (el.user) {
//         console.log(el.user.screenName + ':')
//       }
//       if (el.topic) {
//         console.log(`#${el.topic.content}#`)
//       }

//       console.log(el.content)

//       // console.log(moment(el.createdAt).format('YYYY-MM-DD hh:mm:ss'))
//       console.log('---------------------------\n\n')
//     });
//   })
//   .catch(function(error) {
//     console.log("\033[33mYellow Text\033[0m");
//   });