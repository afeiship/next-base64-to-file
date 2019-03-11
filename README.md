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

nx.base64ToFile('data:image/gif;base64,R0lGODlhAQABAJECAAAANAAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNzkxMkVFRjNDMkMxMUU5ODZBMkE0NDYyQzdGNzZENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNzkxMkVGMDNDMkMxMUU5ODZBMkE0NDYyQzdGNzZENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM3OTEyRUVEM0MyQzExRTk4NkEyQTQ0NjJDN0Y3NkQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM3OTEyRUVFM0MyQzExRTk4NkEyQTQ0NjJDN0Y3NkQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAgAsAAAAAAEAAQAAAgJUAQA7', {
  name: 'mypic',
  type: 'image/png'
}).then(file=>{
  console.log(file);
});
```


## resources:
- https://forums.meteor.com/t/base64-convert-back-to-file/34188/3
- http://www.codeblocq.com/2016/04/Convert-a-base64-string-to-a-file-in-Node/
