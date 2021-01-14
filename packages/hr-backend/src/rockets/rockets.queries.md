# Rockets Pagination

```graphql
query getRocketPages($params:PageParams){
  getRocketPages(params:$params){
    totalCount
    rockets{
      id
      model
    }
  }
}
```

## Query Variables

```json
{
  "params":{
    "limit":10,
    "offset":0
  }
}
```
