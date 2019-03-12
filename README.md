# next-base64-to-file
> Base64 to File for next

## install:
```bash
npm install -S afeiship/next-base64-to-file --registry=https://registry.npm.taobao.org
```

## apis:
| params    | type            | description                      |
|-----------|-----------------|----------------------------------|
| inDataUrl | String          | Base64 String                    |
| inOptions | { inName,inType } | filename & mimeType are optional |

## usage:
```js
import 'next-base64-to-file';

const base64 = 'data:image/png;base64,R0lAAAAAAEAAQAAAgJUAQA7';

const file = nx.base64ToFile(base64, { name: 'mypic', type: 'image/png' });

// File(149) {name: "wxep6xbi", lastModified: 1552352794209, lastModifiedDate: Tue Mar 12 2019 09:06:34 GMT+0800 (China Standard Time), type: "image/png", webkitRelativePath: "", size: 149, …}
```


## resources:
- https://forums.meteor.com/t/base64-convert-back-to-file/34188/3
- http://www.codeblocq.com/2016/04/Convert-a-base64-string-to-a-file-in-Node/
