# next-base64-to-file
> Base64 to File for next

## install:
```bash
npm install -S afeiship/next-base64-to-file --registry=https://registry.npm.taobao.org
```

## apis:
| params    | type        | description                      |
|-----------|-------------|----------------------------------|
| inDataUrl | String      | Base64 String                    |
| inOptions | (name,type) | filename & mimeType are optional |

## usage:
```js
import 'next-base64-to-file';

const base64 = 'data:image/gif;base64,R0lAAAAAAEAAQAAAgJUAQA7';

nx.base64ToFile(base64, {
  name: 'mypic',
  type: 'image/png'
}).then(file => {
  console.log(file);
});
```


## resources:
- https://forums.meteor.com/t/base64-convert-back-to-file/34188/3
- http://www.codeblocq.com/2016/04/Convert-a-base64-string-to-a-file-in-Node/
